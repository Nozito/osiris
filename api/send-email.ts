import { Resend } from 'resend';
import type { IncomingMessage, ServerResponse } from 'http';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM   = `Osiris Agency <${process.env.FROM_EMAIL ?? 'no-reply@osiris-web.com'}>`;
const TEAM   = [
    process.env.ANTOINE_EMAIL ?? 'antoine@osiris-agency.fr',
    process.env.NOAH_EMAIL    ?? 'noah@osiris-agency.fr',
];

// ─── HTML helpers ─────────────────────────────────────────────────────────────

function layout(title: string, content: string): string {
    return `<!DOCTYPE html>
<html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title></head>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f5;padding:32px 16px;">
<tr><td>
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <tr><td style="background:#0b0b0b;padding:28px 32px;text-align:center;">
      <div style="font-size:26px;font-weight:900;color:#ffffff;letter-spacing:0.12em;font-family:Arial,Helvetica,sans-serif;">OSIRIS</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.45);margin-top:4px;letter-spacing:0.18em;text-transform:uppercase;">${title}</div>
    </td></tr>
    <tr><td style="height:3px;background:linear-gradient(90deg,#2563EB 0%,#7c3aed 100%);"></td></tr>
    <tr><td style="padding:32px 32px 24px;">${content}</td></tr>
    <tr><td style="background:#f8f9fa;padding:18px 32px;text-align:center;border-top:1px solid #e5e7eb;">
      <p style="margin:0;font-size:11px;color:#9ca3af;">Osiris Agency — contact@osiris-agency.fr</p>
      <p style="margin:4px 0 0;font-size:11px;color:#d1d5db;">osiris-web.com</p>
    </td></tr>
  </table>
</td></tr>
</table>
</body></html>`;
}

function row(label: string, value: string): string {
    return `<tr>
      <td style="padding:9px 14px;font-size:11px;color:#6b7280;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;white-space:nowrap;border-bottom:1px solid #f3f4f6;background:#fafafa;width:38%;">${label}</td>
      <td style="padding:9px 14px;font-size:13px;color:#111827;border-bottom:1px solid #f3f4f6;">${value || '—'}</td>
    </tr>`;
}

function table(rows: string): string {
    return `<table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;margin-bottom:24px;">${rows}</table>`;
}

// ─── Contact emails ────────────────────────────────────────────────────────────

function contactClientHtml(name: string): string {
    return layout('Confirmation de réception', `
      <h2 style="margin:0 0 6px;font-size:22px;color:#111827;font-weight:700;">Bonjour ${name} 👋</h2>
      <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.65;">
        Nous avons bien reçu votre message et nous vous répondons <strong>sous 24h</strong>.
      </p>
      <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
        <p style="margin:0;font-size:14px;color:#1e40af;">✓ &nbsp;Vous parlez directement à Antoine ou Noah — pas d'intermédiaire, pas de formulaire oublié.</p>
      </div>
      <p style="margin:0;font-size:14px;color:#6b7280;line-height:1.6;">À très bientôt,<br><strong style="color:#111827;">L'équipe Osiris</strong></p>
    `);
}

function contactTeamHtml(name: string, company: string, email: string, budget: string, message: string): string {
    const date = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    return layout('🔔 Nouveau contact', `
      <h2 style="margin:0 0 4px;font-size:18px;color:#111827;font-weight:700;">Nouvelle demande de contact</h2>
      <p style="margin:0 0 20px;font-size:12px;color:#9ca3af;">${date}</p>
      ${table([row('Nom', name), row('Entreprise', company), row('Email', `<a href="mailto:${email}" style="color:#2563EB;">${email}</a>`), row('Budget', budget), row('Message', `<span style="white-space:pre-wrap;">${message}</span>`)].join(''))}
      <a href="mailto:${email}" style="display:inline-block;background:#2563EB;color:white;padding:12px 28px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;">Répondre à ${name}</a>
    `);
}

// ─── Quote emails ──────────────────────────────────────────────────────────────

function quoteClientHtml(firstName: string, siteLabel: string, totalTTC: string): string {
    return layout('Votre devis Osiris', `
      <h2 style="margin:0 0 6px;font-size:22px;color:#111827;font-weight:700;">Bonjour ${firstName} 👋</h2>
      <p style="margin:0 0 24px;font-size:15px;color:#374151;line-height:1.65;">
        Votre demande de devis pour un <strong>${siteLabel}</strong> a bien été reçue.<br>
        Le PDF de votre estimation a été téléchargé directement depuis la page.
      </p>
      <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:20px 24px;margin-bottom:24px;text-align:center;">
        <p style="margin:0 0 4px;font-size:11px;color:#1e40af;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Estimation indicative</p>
        <p style="margin:0;font-size:32px;font-weight:900;color:#2563EB;">${totalTTC} € TTC</p>
        <p style="margin:6px 0 0;font-size:12px;color:#93c5fd;">Devis personnalisé gratuit sous 24h</p>
      </div>
      <p style="margin:0;font-size:14px;color:#6b7280;line-height:1.6;">À très bientôt,<br><strong style="color:#111827;">L'équipe Osiris</strong></p>
    `);
}

interface QuoteData {
    firstName: string; lastName: string; email: string; phone?: string; message?: string;
    siteLabel: string; extraPages: number; upgradesList: string; universalList: string;
    wantsUnlimited: boolean; deadlineLabel: string;
    subtotalHT: string; deadlineSurcharge: number; deadlineSurchargeStr: string;
    totalHT: string; tva: string; totalTTC: string;
}

function quoteTeamHtml(d: QuoteData): string {
    const date = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    return layout('💰 Nouveau devis configurateur', `
      <h2 style="margin:0 0 4px;font-size:18px;color:#111827;font-weight:700;">Nouveau devis configurateur</h2>
      <p style="margin:0 0 24px;font-size:12px;color:#9ca3af;">${date}</p>
      <p style="margin:0 0 8px;font-size:11px;color:#2563EB;font-weight:700;text-transform:uppercase;">Informations client</p>
      ${table([row('Client', `${d.firstName} ${d.lastName}`), row('Email', `<a href="mailto:${d.email}" style="color:#2563EB;">${d.email}</a>`), row('Téléphone', d.phone ?? '—'), row('Message', d.message ? `<span style="white-space:pre-wrap;">${d.message}</span>` : '—')].join(''))}
      <p style="margin:0 0 8px;font-size:11px;color:#7c3aed;font-weight:700;text-transform:uppercase;">Configuration</p>
      ${table([row('Offre', d.siteLabel), row('Pages supp.', d.extraPages > 0 ? `+${d.extraPages}` : '0'), row('Upgrades', d.upgradesList || '—'), row('Options', d.universalList || '—'), row('Modifs illimitées', d.wantsUnlimited ? 'Oui — +19,90 €/mois' : 'Non'), row('Délai', d.deadlineLabel)].join(''))}
      <p style="margin:0 0 8px;font-size:11px;color:#059669;font-weight:700;text-transform:uppercase;">Tarification</p>
      ${table([row('Sous-total HT', `${d.subtotalHT} €`), ...(d.deadlineSurcharge > 0 ? [row(`Supplément (${d.deadlineLabel})`, `+${d.deadlineSurchargeStr} €`)] : []), row('Total HT', `${d.totalHT} €`), row('TVA 20%', `${d.tva} €`), row('Total TTC estimé', `<strong style="color:#2563EB;font-size:16px;">${d.totalTTC} €</strong>`)].join(''))}
      <a href="mailto:${d.email}" style="display:inline-block;background:#2563EB;color:white;padding:12px 28px;border-radius:8px;font-weight:700;font-size:14px;text-decoration:none;">Répondre à ${d.firstName}</a>
    `);
}

// ─── Vercel handler ────────────────────────────────────────────────────────────

async function readBody(req: IncomingMessage): Promise<string> {
    return new Promise((resolve, reject) => {
        let data = '';
        req.on('data', chunk => { data += chunk; });
        req.on('end', () => resolve(data));
        req.on('error', reject);
    });
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'OPTIONS') {
        res.statusCode = 200;
        res.end('');
        return;
    }
    if (req.method !== 'POST') {
        res.statusCode = 405;
        res.end(JSON.stringify({ error: 'Method Not Allowed' }));
        return;
    }

    try {
        const raw = await readBody(req);
        const body = JSON.parse(raw);
        const { type } = body;

        if (type === 'contact') {
            const { name, company, email, budget, message } = body;
            await Promise.all([
                resend.emails.send({ from: FROM, to: [email], subject: 'Votre message a bien été reçu — Osiris', html: contactClientHtml(name) }),
                resend.emails.send({ from: FROM, to: TEAM, replyTo: email, subject: `🔔 Contact — ${name}${budget ? ` (${budget})` : ''}`, html: contactTeamHtml(name, company ?? '—', email, budget ?? '—', message) }),
            ]);
            res.statusCode = 200;
            res.end(JSON.stringify({ ok: true }));
            return;
        }

        if (type === 'quote') {
            const d = body as QuoteData;
            await Promise.all([
                resend.emails.send({ from: FROM, to: [d.email], subject: `Votre devis Osiris — ${d.siteLabel}`, html: quoteClientHtml(d.firstName, d.siteLabel, d.totalTTC) }),
                resend.emails.send({ from: FROM, to: TEAM, replyTo: d.email, subject: `💰 Devis — ${d.firstName} ${d.lastName} — ${d.totalTTC} € TTC`, html: quoteTeamHtml(d) }),
            ]);
            res.statusCode = 200;
            res.end(JSON.stringify({ ok: true }));
            return;
        }

        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid type' }));
    } catch (err: any) {
        console.error('[send-email]', err);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: err.message }));
    }
}
