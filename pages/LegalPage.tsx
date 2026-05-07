import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';

export const LegalPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
        // Handle hash navigation manually if needed
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const { t } = useLanguage();

    return (
        <>
            <SEOHead
                title="Mentions Légales, CGV & Confidentialité | Osiris Agency"
                description="CGV, Politique de Confidentialité RGPD et Politique de Cookies d'Osiris Agency — Création de sites web sur-mesure."
                canonical="https://osiris-agency.fr/legal"
            />

            <section className="min-h-screen pt-24 sm:pt-28 pb-14 sm:pb-16 px-5 sm:px-6 relative bg-[#0B0B0B]">
                {/* Background Details */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-premium-green/5 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-900/5 blur-[120px] rounded-full" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02)_0%,transparent_60%)]"></div>
                </div>

                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center"
                    >
                        <h1 className="text-4xl md:text-6xl font-black font-display text-white mb-6">
                            Mentions <span className="text-premium-green">Légales</span>
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Dernière mise à jour : Mai 2026
                        </p>
                    </motion.div>

                    {/* Quick-nav */}
                    <nav className="mb-10 flex flex-wrap gap-3 justify-center">
                        {[
                            { href: '#mentions', label: '1. Mentions légales' },
                            { href: '#cgv',      label: '2. CGV' },
                            { href: '#confidentialite', label: '3. Confidentialité' },
                            { href: '#cookies',  label: '4. Cookies' },
                        ].map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                className="text-sm px-4 py-2 rounded-full border border-white/10 text-gray-400 hover:border-premium-green hover:text-premium-green transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    <div className="space-y-12 sm:space-y-16">

                        {/* ─── SECTION 1 : MENTIONS LÉGALES ─── */}
                        <div id="mentions" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4 font-display">1. Mentions légales</h2>
                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm space-y-2 text-gray-400 leading-relaxed">
                                <p><strong className="text-white">Nom commercial :</strong> Osiris Agency</p>
                                <p><strong className="text-white">Entrepreneur :</strong> Antoine Tardivel</p>
                                <p><strong className="text-white">Forme juridique :</strong> Entrepreneur individuel (micro-entreprise)</p>
                                <p><strong className="text-white">SIREN :</strong> 993 913 730</p>
                                <p><strong className="text-white">SIRET :</strong> 993 913 730 00012</p>
                                <p><strong className="text-white">Code APE :</strong> 6201Z</p>
                                <p><strong className="text-white">Adresse :</strong> Boulevard des Tilleuls, 04100 Manosque, France</p>
                                <p><strong className="text-white">Email :</strong> <a href="mailto:contact@osiris-agency.fr" className="text-premium-green hover:underline">contact@osiris-agency.fr</a></p>
                                <p><strong className="text-white">Téléphone :</strong> 07 72 32 89 32</p>
                                <p><strong className="text-white">Site web :</strong> <a href="https://osiris-agency.fr" className="text-premium-green hover:underline">https://osiris-agency.fr</a></p>
                                <p><strong className="text-white">Régime fiscal :</strong> Franchise en base de TVA — TVA non applicable (article 293 B du CGI)</p>
                                <p><strong className="text-white">Date de début d'activité :</strong> 17/11/2025</p>
                                <p className="pt-4 border-t border-white/5"><strong className="text-white">Hébergeur :</strong> Vercel Inc. — 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.<br />
                                    Le transfert de données hors Union Européenne est encadré par les Clauses Contractuelles Types adoptées par la Commission européenne.</p>
                            </div>
                        </div>

                        {/* ─── SECTION 2 : CGV ─── */}
                        <div id="cgv" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4 font-display">2. Conditions Générales de Vente (CGV)</h2>
                            <div className="space-y-8">
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 1 — Objet et champ d'application</h3>
                                    <p className="text-gray-400 leading-relaxed">Les présentes Conditions Générales de Vente (CGV) régissent exclusivement les relations contractuelles entre Osiris Agency (Antoine Tardivel, entrepreneur individuel, SIREN 993 913 730) et tout professionnel (ci-après « le Client ») souhaitant commander des prestations de création de sites internet sur-mesure, de services digitaux et de prospection digitale. Toute commande implique l'acceptation sans réserve des présentes CGV, qui prévaut sur tout autre document du Client.</p>
                                    <p className="text-gray-400 leading-relaxed mt-3">Ces CGV s'appliquent exclusivement à une clientèle professionnelle (B2B). Les dispositions relatives au droit de rétractation des consommateurs (art. L 221-18 du Code de la consommation) ne sont pas applicables.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 2 — Description des prestations</h3>
                                    <p className="text-gray-400 leading-relaxed">Osiris Agency propose les prestations suivantes :</p>
                                    <ul className="mt-3 space-y-2 text-gray-400">
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Offre Starter — 950 €</strong> : 1 à 3 pages, design custom.</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Offre Business — 1 650 €</strong> : jusqu'à 5 pages, semi-custom.</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Offre Empire — 2 950 €</strong> : jusqu'à 10 pages, 100 % sur-mesure.</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Option Blog/actualités</strong> : +350 €</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Option Système de réservation</strong> : +200 €</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Option Widget WhatsApp/Chat</strong> : +50 €</span></li>
                                    </ul>
                                    <p className="text-gray-400 leading-relaxed mt-4">Prestations de maintenance :</p>
                                    <ul className="mt-3 space-y-2 text-gray-400">
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span>1 mois (sans engagement) : 69,90 €</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span>3 mois minimum : 49,90 €/mois</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span>6 mois minimum : 39,90 €/mois</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span>12 mois minimum : 29,90 €/mois</span></li>
                                    </ul>
                                    <p className="text-gray-400 leading-relaxed mt-3">Le détail précis de chaque prestation est défini dans le devis remis au Client avant toute commande.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 3 — Tarifs et paiement</h3>
                                    <p className="text-gray-400 leading-relaxed">Les prix sont exprimés en euros toutes taxes comprises. <strong className="text-white">TVA non applicable — article 293 B du Code général des impôts</strong> (franchise en base de TVA).</p>
                                    <p className="text-gray-400 leading-relaxed mt-3">Le règlement s'effectue exclusivement par virement bancaire, aux coordonnées communiquées sur la facture. Tout retard de paiement entraîne l'application de pénalités égales à trois fois le taux d'intérêt légal en vigueur, ainsi qu'une indemnité forfaitaire de recouvrement de 40 € (art. L 441-10 du Code de commerce). Les prestations sont suspendues jusqu'à réception du paiement.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 4 — Acompte et démarrage de mission</h3>
                                    <p className="text-gray-400 leading-relaxed">Toute mission démarre après signature du devis et réception de l'acompte de <strong className="text-white">50 % du montant total TTC</strong>. Le solde de 50 % est exigible à la livraison finale, avant tout transfert des fichiers sources ou mise en ligne définitive.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 5 — Délais de livraison et majoration urgence</h3>
                                    <p className="text-gray-400 leading-relaxed">Les délais indicatifs sont précisés dans le devis. Ils courent à compter de la réception de l'acompte <strong className="text-white">et</strong> de l'ensemble des éléments nécessaires fournis par le Client (textes, visuels, accès, informations de marque). Tout retard imputable au Client reportera d'autant la date de livraison.</p>
                                    <p className="text-gray-400 leading-relaxed mt-3">Pour toute demande de livraison dans un délai inférieur à <strong className="text-white">7 jours calendaires</strong>, une majoration de <strong className="text-white">+60 % du montant total</strong> sera appliquée.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 6 — Révisions incluses et supplémentaires</h3>
                                    <p className="text-gray-400 leading-relaxed">Le nombre de rounds de révisions inclus est le suivant :</p>
                                    <ul className="mt-3 space-y-2 text-gray-400">
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Starter :</strong> 1 round de révisions</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Business :</strong> 2 rounds de révisions</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Empire :</strong> Révisions illimitées</span></li>
                                    </ul>
                                    <p className="text-gray-400 leading-relaxed mt-3">Un round de révisions correspond à un ensemble de corrections regroupées transmis en une seule fois. Tout round supplémentaire au-delà du quota inclus sera facturé selon un tarif défini dans le devis ou à 90 €/heure. Un support après livraison de <strong className="text-white">14 jours</strong> est inclus dans chaque offre.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 7 — Transfert de propriété intellectuelle</h3>
                                    <p className="text-gray-400 leading-relaxed">Osiris Agency est l'auteur des créations réalisées dans le cadre des prestations (code source, design, contenus rédigés). Le transfert intégral des droits de propriété intellectuelle au Client ne s'effectue qu'après <strong className="text-white">paiement total et définitif</strong> de l'ensemble des sommes dues. Avant ce paiement, Osiris Agency demeure titulaire de tous les droits et le Client ne peut exploiter les livrables.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 8 — Responsabilités et limitations</h3>
                                    <p className="text-gray-400 leading-relaxed">Osiris Agency est soumis à une obligation de moyens. Sa responsabilité ne saurait être engagée en cas de : résultats SEO non garantis, panne de l'hébergeur, contenu fourni par le Client contrevenant à la législation, ou force majeure. La responsabilité d'Osiris Agency est en tout état de cause limitée au montant HT de la prestation concernée.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 9 — Confidentialité</h3>
                                    <p className="text-gray-400 leading-relaxed">Chaque partie s'engage à garder confidentiels les informations, documents et données de l'autre partie dont elle pourrait avoir connaissance dans le cadre de l'exécution du contrat, et à ne les divulguer à aucun tiers sans accord écrit préalable. Cette obligation court pendant toute la durée du contrat et pour une période de <strong className="text-white">3 ans</strong> suivant son terme.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 10 — Résiliation</h3>
                                    <p className="text-gray-400 leading-relaxed">En cas de manquement grave d'une partie à ses obligations, l'autre partie peut résilier le contrat par lettre recommandée avec accusé de réception, après mise en demeure restée sans effet sous 15 jours. En cas de résiliation à l'initiative du Client après démarrage de la mission, l'acompte versé reste acquis à Osiris Agency à titre d'indemnité, et les travaux réalisés sont facturés au prorata. Les présentes CGV étant conclues entre professionnels, aucun droit légal de rétractation n'est applicable.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 11 — Droit de référence et portfolio</h3>
                                    <p className="text-gray-400 leading-relaxed">Osiris Agency se réserve le droit de mentionner le Client (nom commercial, secteur d'activité, aperçu visuel du site réalisé) à titre de référence dans son portfolio, sur son site web et dans ses supports commerciaux. Le Client peut s'y opposer par écrit dans un délai de 30 jours suivant la livraison finale.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">Article 12 — Droit applicable et juridiction compétente</h3>
                                    <p className="text-gray-400 leading-relaxed">Les présentes CGV sont soumises au <strong className="text-white">droit français</strong>. En cas de litige, les parties s'efforceront de trouver une solution amiable. À défaut, les tribunaux compétents sont ceux du ressort du siège d'Osiris Agency (<strong className="text-white">Manosque / Aix-en-Provence</strong>), conformément à l'article 48 du Code de procédure civile.</p>
                                    <p className="text-gray-400 leading-relaxed mt-3 text-sm italic">Dernière mise à jour : Mai 2026</p>
                                </div>
                            </div>
                        </div>

                        {/* ─── SECTION 3 : POLITIQUE DE CONFIDENTIALITÉ ─── */}
                        <div id="confidentialite" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4 font-display">3. Politique de Confidentialité (RGPD)</h2>
                            <div className="space-y-8">
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">3.1 — Identité du responsable du traitement</h3>
                                    <p className="text-gray-400 leading-relaxed">Le responsable du traitement au sens du Règlement (UE) 2016/679 (RGPD) est :</p>
                                    <ul className="mt-3 space-y-1 text-gray-400">
                                        <li><strong className="text-white">Antoine Tardivel</strong> — Osiris Agency</li>
                                        <li>Boulevard des Tilleuls, 04100 Manosque, France</li>
                                        <li>Email : <a href="mailto:contact@osiris-agency.fr" className="text-premium-green hover:underline">contact@osiris-agency.fr</a></li>
                                        <li>Téléphone : 07 72 32 89 32</li>
                                    </ul>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">3.2 — Données collectées et finalités</h3>
                                    <p className="text-gray-400 leading-relaxed">Les catégories de données collectées et leurs finalités sont les suivantes :</p>
                                    <ul className="mt-3 space-y-3 text-gray-400">
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Formulaire de contact :</strong> prénom, nom, adresse email, numéro de téléphone, type de projet, budget estimé, message. Finalité : répondre aux demandes de contact et de devis, suivi commercial des prospects.</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Google Analytics :</strong> données de navigation anonymisées (pages visitées, durée de session, localisation approximative, type d'appareil). Finalité : mesure d'audience et amélioration du site.</span></li>
                                    </ul>
                                    <p className="text-gray-400 leading-relaxed mt-3">Aucun compte utilisateur n'est créé sur ce site. Aucun paiement en ligne n'est traité sur le site. Vos données ne sont <strong className="text-white">jamais vendues</strong> à des tiers.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">3.3 — Base légale des traitements</h3>
                                    <ul className="space-y-3 text-gray-400">
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Intérêt légitime</strong> (art. 6.1.f RGPD) : traitement des données issues du formulaire de contact aux fins de suivi commercial.</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Consentement</strong> (art. 6.1.a RGPD) : dépôt des cookies Google Analytics, recueilli via le bandeau de consentement affiché à la première visite.</span></li>
                                    </ul>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">3.4 — Durées de conservation</h3>
                                    <ul className="space-y-3 text-gray-400">
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Données issues du formulaire de contact :</strong> 3 ans à compter du dernier contact ou du terme de la relation commerciale.</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Données Google Analytics :</strong> 26 mois (paramétrage de conservation réduite activé).</span></li>
                                    </ul>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">3.5 — Vos droits</h3>
                                    <p className="text-gray-400 leading-relaxed">Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :</p>
                                    <ul className="mt-3 space-y-2 text-gray-400">
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Droit d'accès</strong> : obtenir une copie des données vous concernant.</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Droit de rectification</strong> : corriger des données inexactes ou incomplètes.</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Droit à l'effacement</strong> (« droit à l'oubli ») : demander la suppression de vos données.</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Droit d'opposition</strong> : vous opposer au traitement de vos données.</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Droit à la portabilité</strong> : recevoir vos données dans un format structuré et lisible.</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Droit à la limitation</strong> : restreindre le traitement de vos données.</span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Retrait du consentement</strong> : à tout moment pour les traitements fondés sur le consentement (cookies analytiques), sans effet sur la licéité des traitements antérieurs.</span></li>
                                    </ul>
                                    <p className="text-gray-400 leading-relaxed mt-4">Pour exercer vos droits : <a href="mailto:contact@osiris-agency.fr" className="text-premium-green hover:underline">contact@osiris-agency.fr</a>. Une réponse vous sera adressée dans un délai maximum de 30 jours. En cas de litige, vous pouvez introduire une réclamation auprès de la <strong className="text-white">CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-premium-green hover:underline">www.cnil.fr</a>.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">3.6 — Hébergeur et transfert hors UE</h3>
                                    <p className="text-gray-400 leading-relaxed">Le site est hébergé par <strong className="text-white">Vercel Inc.</strong> — 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis. Ce transfert de données vers les États-Unis est encadré par les <strong className="text-white">Clauses Contractuelles Types</strong> adoptées par la Commission européenne (décision d'exécution 2021/914), garantissant un niveau de protection adéquat.</p>
                                </div>
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">3.7 — Sous-traitant : Google Analytics</h3>
                                    <p className="text-gray-400 leading-relaxed">Google Analytics (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlande) est utilisé en qualité de sous-traitant aux fins de mesure d'audience. L'anonymisation des adresses IP est activée. Les données peuvent être transférées à Google LLC (États-Unis) dans le cadre des Clauses Contractuelles Types.</p>
                                    <p className="text-gray-400 leading-relaxed mt-3">Vous pouvez désactiver Google Analytics via le module complémentaire officiel : <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-premium-green hover:underline">https://tools.google.com/dlpage/gaoptout</a>.</p>
                                    <p className="text-gray-400 leading-relaxed mt-3 text-sm italic">Dernière mise à jour : Mai 2026</p>
                                </div>
                            </div>
                        </div>

                        {/* ─── SECTION 4 : POLITIQUE DE COOKIES ─── */}
                        <div id="cookies" className="scroll-mt-32">
                            <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4 font-display">4. Politique de Cookies</h2>
                            <div className="space-y-8">
                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">4.1 — Qu'est-ce qu'un cookie ?</h3>
                                    <p className="text-gray-400 leading-relaxed">Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web. Il permet de mémoriser des informations relatives à votre navigation, dans la limite de sa durée de vie. Conformément aux lignes directrices de la CNIL, certains cookies sont exemptés de consentement&nbsp;; d'autres nécessitent votre accord préalable.</p>
                                </div>

                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm overflow-x-auto">
                                    <h3 className="text-xl font-bold text-premium-green mb-6">4.2 — Tableau des cookies déposés</h3>
                                    <table className="w-full text-sm text-gray-400 border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left text-white py-3 pr-4 font-semibold">Nom</th>
                                                <th className="text-left text-white py-3 pr-4 font-semibold">Éditeur</th>
                                                <th className="text-left text-white py-3 pr-4 font-semibold">Finalité</th>
                                                <th className="text-left text-white py-3 pr-4 font-semibold">Durée</th>
                                                <th className="text-left text-white py-3 font-semibold">Consentement</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr>
                                                <td className="py-3 pr-4 font-mono text-xs text-premium-green">Session / formulaire</td>
                                                <td className="py-3 pr-4">Osiris Agency</td>
                                                <td className="py-3 pr-4">Fonctionnement du site, sécurité formulaires</td>
                                                <td className="py-3 pr-4">Session</td>
                                                <td className="py-3 text-premium-green font-medium">Exempté</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-4 font-mono text-xs text-premium-green">_ga</td>
                                                <td className="py-3 pr-4">Google Ireland Ltd</td>
                                                <td className="py-3 pr-4">Distinction des visiteurs (Analytics)</td>
                                                <td className="py-3 pr-4">2 ans</td>
                                                <td className="py-3 text-yellow-400 font-medium">Requis</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-4 font-mono text-xs text-premium-green">_ga_XXXXXX</td>
                                                <td className="py-3 pr-4">Google Ireland Ltd</td>
                                                <td className="py-3 pr-4">Maintien de l'état de session Analytics</td>
                                                <td className="py-3 pr-4">2 ans</td>
                                                <td className="py-3 text-yellow-400 font-medium">Requis</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-4 font-mono text-xs text-premium-green">_gid</td>
                                                <td className="py-3 pr-4">Google Ireland Ltd</td>
                                                <td className="py-3 pr-4">Distinction des visiteurs (24h)</td>
                                                <td className="py-3 pr-4">24 h</td>
                                                <td className="py-3 text-yellow-400 font-medium">Requis</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p className="text-gray-500 text-xs mt-4">Aucun cookie publicitaire ni cookie de réseaux sociaux n'est déposé sur ce site.</p>
                                </div>

                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">4.3 — Cookies strictement nécessaires (exemptés)</h3>
                                    <p className="text-gray-400 leading-relaxed">Conformément aux lignes directrices de la CNIL, les cookies indispensables au bon fonctionnement du site (gestion de session, sécurité du formulaire de contact) sont exemptés de l'obligation de recueil du consentement. Ils ne peuvent pas être désactivés sans compromettre le fonctionnement du site.</p>
                                </div>

                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">4.4 — Cookies analytiques Google Analytics</h3>
                                    <p className="text-gray-400 leading-relaxed">Les cookies Google Analytics sont soumis à votre consentement préalable, recueilli via le bandeau affiché à votre première visite. En l'absence de consentement, aucun cookie analytique n'est déposé. L'anonymisation des adresses IP est activée. Les données collectées peuvent être transférées à Google LLC (États-Unis) dans le cadre des Clauses Contractuelles Types de la Commission européenne.</p>
                                    <p className="text-gray-400 leading-relaxed mt-3">Vous pouvez refuser Google Analytics à tout moment via : <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-premium-green hover:underline">https://tools.google.com/dlpage/gaoptout</a></p>
                                </div>

                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">4.5 — Gérer les cookies depuis votre navigateur</h3>
                                    <p className="text-gray-400 leading-relaxed mb-4">Vous pouvez à tout moment paramétrer votre navigateur pour accepter ou refuser les cookies :</p>
                                    <ul className="space-y-2 text-gray-400">
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Chrome :</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-premium-green hover:underline">support.google.com/chrome/answer/95647</a></span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Firefox :</strong> <a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="_blank" rel="noopener noreferrer" className="text-premium-green hover:underline">support.mozilla.org — cookies</a></span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Safari :</strong> <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-premium-green hover:underline">support.apple.com — Safari</a></span></li>
                                        <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2 flex-shrink-0" /><span><strong className="text-white">Edge :</strong> <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-premium-green hover:underline">support.microsoft.com — Edge</a></span></li>
                                    </ul>
                                    <p className="text-gray-400 leading-relaxed mt-4">La désactivation des cookies peut affecter certaines fonctionnalités du site.</p>
                                </div>

                                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold text-premium-green mb-3">4.6 — Durée de validité du consentement</h3>
                                    <p className="text-gray-400 leading-relaxed">Conformément aux recommandations de la CNIL (délibération 2020-092), votre consentement est valable pour une durée de <strong className="text-white">6 mois</strong>. À l'issue de ce délai, le bandeau de consentement vous sera de nouveau présenté.</p>
                                    <p className="text-gray-400 leading-relaxed mt-3">Pour tout exercice de vos droits relatifs aux cookies ou pour toute question : <a href="mailto:contact@osiris-agency.fr" className="text-premium-green hover:underline">contact@osiris-agency.fr</a></p>
                                    <p className="text-gray-400 leading-relaxed mt-3 text-sm italic">Dernière mise à jour : Mai 2026</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};
