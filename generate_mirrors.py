#!/usr/bin/env python3
"""
generate_mirrors.py — Osiris Agency

Lit /translations/fr.ts, extrait le contenu par page et génère
des fichiers Markdown miroirs dans /public/ pour les IA (ChatGPT,
Claude, Perplexity, Gemini) et les crawlers.

Usage :
    python3 generate_mirrors.py

Sortie :
    public/home.md
    public/about.md
    public/pricing.md
    public/portfolio.md
    public/contact.md
    public/legal.md
"""

import re
import json
import os
from datetime import date

# ── Chemins ───────────────────────────────────────────────────────────────────
ROOT       = os.path.dirname(os.path.abspath(__file__))
FR_TS      = os.path.join(ROOT, "translations", "fr.ts")
PUBLIC_DIR = os.path.join(ROOT, "public")

TODAY    = date.today().isoformat()
BASE_URL = "https://osiris-agency.fr"


# ── Parser TypeScript → dict ──────────────────────────────────────────────────
def load_translations(filepath: str) -> dict:
    """
    Utilise Node.js (déjà présent dans le projet) pour évaluer fr.ts en
    tant qu'objet JavaScript natif, puis retourne un dict Python via JSON.
    Cette approche gère tous les cas JS : clés non quotées, single-quotes,
    virgules traînantes, commentaires, caractères Unicode, etc.
    """
    import subprocess

    # Mini-script Node.js : strip du wrapper TS, eval, JSON.stringify
    # Le chemin est embarqué directement (via json.dumps pour échapper les /)
    node_script = f"""
const fs   = require('fs');
const raw  = fs.readFileSync({json.dumps(filepath)}, 'utf8');
const cleaned = raw
  .replace(/^\\s*export const fr\\s*=\\s*/, '')
  .replace(/;\\s*$/, '')
  .trim();
const obj = eval('(' + cleaned + ')');
process.stdout.write(JSON.stringify(obj));
"""

    result = subprocess.run(
        ["node", "-e", node_script],
        capture_output=True,
        text=True,
    )

    if result.returncode != 0:
        raise RuntimeError(
            f"Erreur Node.js lors du parsing de fr.ts :\n{result.stderr}"
        )

    return json.loads(result.stdout)


# ── Helpers Markdown ─────────────────────────────────────────────────────────
def frontmatter(title: str, description: str, url: str) -> str:
    return (
        f"---\n"
        f"title: {title}\n"
        f"description: {description}\n"
        f"url: {url}\n"
        f"last_updated: {TODAY}\n"
        f"---\n\n"
    )

def h1(text: str) -> str: return f"# {text}\n\n"
def h2(text: str) -> str: return f"## {text}\n\n"
def h3(text: str) -> str: return f"### {text}\n\n"
def p(text: str)  -> str: return f"{text}\n\n"
def li(text: str) -> str: return f"- {text}\n"

def write_md(filename: str, content: str) -> None:
    path = os.path.join(PUBLIC_DIR, filename)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  ✓ {filename}")


# ── Générateurs par page ──────────────────────────────────────────────────────

def gen_home(t: dict) -> str:
    hero  = t["hero"]
    sp    = t["socialProof"]
    perf  = t["performance"]
    dp    = t["designPremium"]
    audit = t["audit"]
    proc  = t["process"]
    test  = t["testimonials"]
    offer = t["offer"]
    faq   = t["faq"]
    fct   = t["footerCta"]

    md = frontmatter(
        title="Osiris Agency — Agence web premium | Sites vitrines sur-mesure",
        description=(
            "Osiris crée des sites vitrines haute performance, 100% custom, "
            "pour transformer vos visiteurs en clients. Audit gratuit en 24h."
        ),
        url=f"{BASE_URL}/",
    )

    md += h1("Osiris Agency — Sites web qui performent")
    md += p(hero["headline"])
    md += p(hero["subtitle"])
    md += p(hero["tagline"])

    # Badges
    md += h2("Engagements clés")
    for badge in hero["badges"].values():
        md += li(badge)
    md += "\n"

    # Social proof
    md += h2("Pourquoi Osiris ?")
    for v in sp.values():
        md += li(v)
    md += "\n"

    # Performance
    md += h2(perf["title"])
    md += p(perf["subtitle"])
    for card in perf["cards"].values():
        md += h3(card["title"])
        md += p(card["description"])

    # Design Premium
    md += h2(dp["title"])
    md += p(dp["subtitle"])
    for card in dp["cards"].values():
        md += h3(card["title"])
        md += p(card["description"])

    # Audit gratuit
    md += h2(audit["title"])
    md += p(audit["subtitle"])
    md += p(audit["stats"])
    for pillar in audit["pillars"]:
        md += h3(pillar["title"])
        md += p(pillar["description"])

    # Process
    md += h2(f"{proc['title']} {proc['titleFaded']}")
    md += p(proc["subtitle"])
    for step in proc["steps"].values():
        if "number" in step:
            md += li(f"{step['number']}. **{step['title']}** — {step['description']}")
    md += "\n"

    # Témoignages
    md += h2(f"{test['title']} {test['titleFaded']}")
    for rev in test["reviews"]:
        md += f"> \"{rev['text']}\"\n"
        md += (
            f"> — {rev['author']}, {rev['role']}, "
            f"{rev['company']} ({rev['date']})\n\n"
        )

    # Offres (aperçu)
    md += h2(offer["title"])
    md += p(offer["subtitle"])
    for pack in offer["offers"].values():
        md += h3(pack["title"])
        md += p(pack["description"])
        for feat in pack["features"]:
            md += li(feat)
        md += "\n"

    # FAQ
    md += h2(faq["title"])
    for item in faq["items"]:
        md += f"**Q : {item['question']}**\n\n"
        md += f"R : {item['answer']}\n\n"

    # Footer CTA
    md += h2(fct["title"])
    md += p(fct["subtitle"])
    md += p(fct["badge"])

    return md


def gen_about() -> str:
    """Contenu de AboutPage.tsx (hors traductions centralisées)."""
    md = frontmatter(
        title="À propos — Osiris Agency | Qui sommes-nous ?",
        description=(
            "Découvrez Antoine et Noah, les deux fondateurs d'Osiris Agency. "
            "Une équipe de 2 experts dédiée à votre projet du début à la fin."
        ),
        url=f"{BASE_URL}/a-propos",
    )

    md += h1("L'agence derrière votre projet")
    md += p(
        "Pas une agence anonyme. Deux passionnés avec un seul objectif : "
        "faire de votre site votre meilleur commercial."
    )
    md += p("Fondée en 2025. Agence 100% en ligne, France & pays francophones.")

    md += h2("Les fondateurs")

    md += h3("Antoine — CEO & Directeur Commercial / Design")
    md += p(
        "Premier visage d'Osiris. En charge de chaque client dès le premier "
        "contact : compréhension de l'activité, direction artistique, identité "
        "visuelle et stratégie de conversion. Objectif : un site qui vous "
        "ressemble et génère de vrais résultats."
    )
    md += p("Domaines : Design · Commercial · Stratégie")

    md += h3("Noah — Associé & Lead Développeur")
    md += p(
        "Transforme les maquettes en sites rapides, solides et optimisés. "
        "Intégration, back-end, performances, SEO technique. Garantit que votre "
        "site tourne parfaitement aujourd'hui et demain."
    )
    md += p("Domaines : Développement · Back-end · Performance")

    md += h2("Ce qui nous distingue")
    diffs = [
        (
            "Un interlocuteur unique",
            "Vous parlez à Antoine ou Noah directement. Pas de chef de projet "
            "intermédiaire, pas de stagiaire, pas de relance ignorée.",
        ),
        (
            "Un process clair",
            "Appel découverte → Maquette sous 5 jours → Développement → "
            "Livraison clé en main.",
        ),
        (
            "Réactivité réelle",
            "On répond sous 24h. On livre dans les délais. On reste disponibles "
            "après la livraison.",
        ),
    ]
    for title, desc in diffs:
        md += h3(title)
        md += p(desc)

    md += h2("Chiffres clés")
    stats = [
        ("+40", "sites audités"),
        ("< 24h", "délai de réponse garanti"),
        ("2", "experts dédiés à 100% à votre projet"),
        ("2025", "année de fondation"),
        ("< 3 semaines", "de la maquette au lancement"),
    ]
    for val, label in stats:
        md += li(f"**{val}** {label}")
    md += "\n"

    md += h2("Contact")
    md += li("Site : https://osiris-agency.fr")
    md += li("Email : contact@osiris-agency.fr")
    md += li("Téléphone : 07 72 32 89 32")
    md += li("WhatsApp : disponible via le site")
    md += "\n"

    return md


def gen_pricing(t: dict) -> str:
    pp    = t["pricingPage"]
    offer = t["offer"]

    PACKS_PRICES = {
        "starter":  ("950 €",   "7 jours ouvrés"),
        "business": ("1 650 €", "14 jours ouvrés"),
        "empire":   ("2 950 €", "3 à 5 semaines"),
    }

    md = frontmatter(
        title="Tarifs — Osiris Agency | Sites vitrines à partir de 950 €",
        description=(
            "Starter 950 €, Business 1 650 €, Empire 2 950 €. "
            "Paiement en 2 fois. Audit gratuit inclus. "
            "Délais : 7 jours à 5 semaines."
        ),
        url=f"{BASE_URL}/tarifs",
    )

    md += h1("Nos Offres — Investissement Stratégique")
    md += p(
        "Des solutions d'élite pour ceux qui visent l'excellence. "
        "Transparence totale. Impact maximal."
    )

    # Les 3 packs
    for key, pack in offer["offers"].items():
        price, delay = PACKS_PRICES.get(key, ("Sur devis", "À définir"))
        badge = pp["badges"].get(key, "")
        md += h2(f"{pack['title']} — {price}  _{badge}_")
        md += p(f"**Délai :** {delay} | {pack['description']}")
        for feat in pack["features"]:
            md += li(feat)
        md += "\n"

    # Délais
    delays = offer["faqItems"]["delays"]
    md += h2(delays["title"])
    md += li(f"Starter : {delays['starter']}")
    md += li(f"Business : {delays['business']}")
    md += li(f"Empire : {delays['empire']}")
    md += "\n"

    # Paiement
    md += h2(offer["faqItems"]["payment"]["title"])
    md += p(offer["faqItems"]["payment"]["answer"])

    # Comparatif
    comp = pp["comparison"]
    md += h2(comp["title"])
    md += p(comp["subtitle"])
    rows = comp["rows"]
    vals = comp["values"]
    table = (
        f"| Fonctionnalité | Starter | Business | Empire |\n"
        f"|---|---|---|---|\n"
        f"| {rows['figma']} | ✓ | ✓ | ✓ |\n"
        f"| {rows['animations']} | Basiques | Avancées | Premium |\n"
        f"| {rows['responsive']} | ✓ | ✓ | ✓ |\n"
        f"| {rows['structure']} | {vals['landingPage']} | {vals['multiPages']} | {vals['custom']} |\n"
        f"| {rows['seo']} | {vals['standard']} | {vals['advanced']} | {vals['expert']} |\n"
        f"| {rows['cms']} | — | ✓ | ✓ |\n"
        f"| {rows['maintenance']} | {vals['month1']} | {vals['month3']} | {vals['month12']} |\n"
    )
    md += table + "\n"

    # Garanties
    md += h2("Garanties")
    for g in pp["guarantees"].values():
        md += li(f"**{g['title']}** : {g['desc']}")
    md += "\n"

    # FAQ tarifs
    md += h2("FAQ — Tarifs")
    for item in pp["faqs"]:
        md += f"**Q : {item['question']}**\n\nR : {item['answer']}\n\n"

    # Projet sur-mesure
    custom = offer["customProject"]
    md += h2(custom["title"])
    md += p(custom["description"])
    md += p("Contact : https://osiris-agency.fr/contact")

    return md


def gen_portfolio(t: dict) -> str:
    sc = t["showcase"]

    md = frontmatter(
        title="Portfolio — Osiris Agency | Nos réalisations web premium",
        description=(
            "Découvrez les sites vitrines créés par Osiris Agency : restaurant, "
            "SaaS, e-commerce, immobilier, Web3. Design sur-mesure et résultats concrets."
        ),
        url=f"{BASE_URL}/portfolio",
    )

    md += h1("Nos Réalisations — Performance + Design, la Preuve")
    md += p(sc["subtitle"])

    md += h2("Projets réalisés")
    projects = [
        ("Le 40e Rugissant", "Restauration", "Refonte complète — site de restaurant gastronomique"),
        ("NexTech SaaS",     "SaaS",         "Landing page haute conversion pour solution B2B"),
        ("Vogue Noir",       "E-commerce",   "Boutique en ligne mode premium"),
        ("L'Orangerie",      "Restauration", "Site vitrine restaurant & événementiel"),
        ("ArchStudio",       "Immobilier",   "Site d'agence immobilière de prestige"),
        ("CryptoPunk",       "Web3",         "Landing page projet Web3 / NFT"),
    ]
    for name, category, desc in projects:
        md += li(f"**{name}** — {category} | {desc}")
    md += "\n"

    md += h2("Catégories")
    for cat in sc["categories"][1:]:  # Ignorer "Tout"
        md += li(cat)
    md += "\n"

    md += h2("Résultats types après refonte")
    md += li("+47 % de conversions en moyenne constatés après refonte")
    md += li("Chargement < 1 seconde (Core Web Vitals optimisés)")
    md += li("Score PageSpeed > 90 sur tous les projets livrés")
    md += "\n"

    md += h2("Vous voulez voir plus ?")
    md += p("Contactez-nous pour un audit gratuit de votre site actuel.")
    md += p("Site : https://osiris-agency.fr/portfolio")

    return md


def gen_contact(t: dict) -> str:
    cp = t["contactPage"]

    md = frontmatter(
        title="Contact — Osiris Agency | Parlons de votre projet",
        description=(
            "Contactez Osiris Agency pour votre projet de site vitrine. "
            "Réponse garantie sous 24h. Email, téléphone, formulaire disponible."
        ),
        url=f"{BASE_URL}/contact",
    )

    md += h1("Parlons Futur")
    md += p(f"{cp['subtitle']} {cp['subtitleLine2']}")
    md += p(cp["subtitleHighlight"])

    md += h2("Coordonnées")
    md += li(f"Email : {cp['emailTitle']} — {cp['emailDesc']}")
    md += li(f"Disponibilité : {cp['availabilityHours']} — {cp['availabilityDesc']}")
    md += li("Téléphone : 07 72 32 89 32")
    md += li("WhatsApp : disponible via le site")
    md += "\n"

    md += h2("Formulaire de contact")
    md += p("Remplissez le formulaire pour décrire votre projet.")
    for opt in cp["budgetOptions"]:
        md += li(f"Budget : {opt}")
    md += "\n"

    md += h2("Réponse garantie")
    md += p(
        "Toute demande reçoit une réponse sous 24h ouvrées. "
        "Disponibles du lundi au vendredi de 9h à 18h."
    )

    md += h2("Audit gratuit")
    md += p(
        "Avant de remplir le formulaire, vous pouvez demander un audit "
        "gratuit de votre site actuel. Analyse en 24h, sans engagement, "
        "sur 4 axes : Performance, SEO, Design, Conversion."
    )
    md += p("Lien direct : https://osiris-agency.fr/#audit")

    return md


def gen_legal() -> str:
    """Contenu de LegalPage.tsx (statique, hors traductions)."""
    md = frontmatter(
        title="Mentions Légales & CGV — Osiris Agency",
        description=(
            "Conditions Générales de Vente, Politique de Confidentialité, "
            "Gestion des Cookies et Conformité RGPD d'Osiris Agency."
        ),
        url=f"{BASE_URL}/legal",
    )

    md += h1("Mentions Légales")
    md += p("Dernière mise à jour : Février 2025")

    md += h2("1. Informations légales")
    md += li("Nom commercial : Osiris Agency")
    md += li("Forme juridique : Micro-entreprise")
    md += li("Responsable : Antoine")
    md += li("Email : contact@osiris-agency.fr")
    md += li("Hébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA")
    md += "\n"

    md += h2("2. Conditions Générales de Vente (CGV)")
    articles = [
        (
            "Article 1 : Objet",
            "Les présentes CGV régissent les prestations de services fournies par "
            "Osiris Agency (création de sites web, marketing digital, design). "
            "Toute commande implique l'adhésion sans réserve aux présentes conditions.",
        ),
        (
            "Article 2 : Tarifs et Devis",
            "Les prestations sont fournies aux tarifs en vigueur indiqués sur le site "
            "ou sur devis spécifique. Les prix sont exprimés en Euros Hors Taxes (HT). "
            "Un devis est valable 30 jours à compter de sa date d'émission.",
        ),
        (
            "Article 3 : Modalités de paiement",
            "Règlement par virement ou carte bancaire. Acompte de 50% à la signature, "
            "solde à la livraison. En cas de retard, pénalités à trois fois le taux légal.",
        ),
        (
            "Article 4 : Délais et Livraison",
            "Osiris Agency s'engage à respecter le calendrier prévu dans le devis, "
            "sauf retard de transmission des éléments par le client.",
        ),
        (
            "Article 5 : Propriété intellectuelle",
            "Le transfert de propriété des créations n'intervient qu'après paiement "
            "intégral. Osiris Agency se réserve le droit de mentionner sa réalisation "
            "dans son portfolio.",
        ),
        (
            "Article 6 : Responsabilité",
            "Osiris Agency est tenu à une obligation de moyens et non de résultat "
            "(notamment pour le référencement SEO ou les campagnes publicitaires).",
        ),
    ]
    for title, content in articles:
        md += h3(title)
        md += p(content)

    md += h2("3. Politique de Confidentialité & RGPD")
    privacy = [
        (
            "Collecte des données",
            "Données personnelles (nom, email, téléphone) collectées via les formulaires "
            "de contact ou de devis. Utilisées uniquement pour la gestion de la relation client.",
        ),
        ("Responsable du traitement", "Antoine — contact@osiris-agency.fr"),
        (
            "Durée de conservation",
            "Maximum 3 ans après le dernier contact commercial.",
        ),
        (
            "Vos droits",
            "Droit d'accès, rectification, suppression et opposition (RGPD). "
            "Contact : contact@osiris-agency.fr.",
        ),
        (
            "Sécurité",
            "Protocole HTTPS et sécurisation des serveurs Vercel pour protéger vos données.",
        ),
    ]
    for title, content in privacy:
        md += h3(title)
        md += p(content)

    md += h2("4. Politique de Cookies")
    cookies = [
        ("Cookies techniques", "Indispensables au bon fonctionnement du site."),
        (
            "Cookies de mesure d'audience",
            "Ex : Google Analytics — comprendre le parcours utilisateur.",
        ),
        (
            "Cookies marketing",
            "Pour afficher des publicités pertinentes sur d'autres plateformes.",
        ),
    ]
    for title, content in cookies:
        md += li(f"**{title}** : {content}")
    md += "\n"
    md += p(
        "Un bandeau de consentement est affiché à la première visite. "
        "Vous pouvez configurer votre navigateur pour bloquer les cookies à tout moment."
    )

    md += h2("5. Conformité RGPD")
    md += p(
        "Base légale du traitement : consentement et intérêt légitime. "
        "Aucune transmission à des tiers commerciaux sans consentement préalable. "
        "Hébergeur : Vercel Inc. (conforme Privacy Shield / DPF)."
    )

    return md


# ── Main ──────────────────────────────────────────────────────────────────────
def main() -> None:
    print("⚙️  Chargement des traductions depuis fr.ts…")
    t = load_translations(FR_TS)
    print("   ✓ Traductions chargées.\n")

    os.makedirs(PUBLIC_DIR, exist_ok=True)

    pages = {
        "home.md":      gen_home(t),
        "about.md":     gen_about(),
        "pricing.md":   gen_pricing(t),
        "portfolio.md": gen_portfolio(t),
        "contact.md":   gen_contact(t),
        "legal.md":     gen_legal(),
    }

    print(f"📝  Génération des mirrors dans ./{os.path.relpath(PUBLIC_DIR)}/")
    for filename, content in pages.items():
        write_md(filename, content)

    print(f"\n✅  {len(pages)} fichiers générés avec succès.")
    print("\nURLs publiques :")
    for filename in pages:
        print(f"   {BASE_URL}/{filename}")


if __name__ == "__main__":
    main()
