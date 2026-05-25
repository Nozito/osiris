import React, { useEffect, useRef } from 'react';

// Universal SVG icons — no platform-dependent emoji
const ICON_SVG: string[] = [
  // 0 — Brief initial (Clipboard)
  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><line x1="12" y1="11" x2="16" y2="11"/><line x1="12" y1="15" x2="16" y2="15"/></svg>`,
  // 1 — Design (PenTool)
  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
  // 2 — Validation (CheckCircle)
  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  // 3 — Développement (Code2)
  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
  // 4 — Tests (Search)
  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  // 5 — Mise en ligne (Globe)
  `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
];

const OS_STEPS = [
  { pos: 0.08, side: 'up',   ch: 100, iconIdx: 0, name: 'brief-initial',   desc: 'Découverte & objectifs',       status: 'call planifié',   dur: '~30 min',    done: true },
  { pos: 0.24, side: 'down', ch: 115, iconIdx: 1, name: 'design-branch',   desc: 'Maquette & identité visuelle', status: 'maquette livrée', dur: '3–5 jours',  done: true },
  { pos: 0.40, side: 'up',   ch: 88,  iconIdx: 2, name: 'validation',      desc: 'Votre retour & ajustements',   status: 'approuvé',        dur: '1–2 jours',  done: true },
  { pos: 0.57, side: 'down', ch: 122, iconIdx: 3, name: 'dev-branch',      desc: 'Intégration & développement',  status: 'dev terminé',     dur: '5–10 jours', done: true },
  { pos: 0.74, side: 'up',   ch: 95,  iconIdx: 4, name: 'test-branch',     desc: 'Tests & révisions finales',    status: 'tests validés',   dur: '2–3 jours',  done: true },
  { pos: 0.91, side: 'down', ch: 100, iconIdx: 5, name: 'mise-en-ligne',   desc: 'Déploiement & livraison',      status: 'site livré ✓',    dur: '1 jour',     done: true },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');

  /* Base font — Inter for all timeline elements */
  [class*="os-tl"] { font-family: 'Inter', ui-sans-serif, sans-serif !important; }

  /* ── Section ── */
  .os-tl {
    width: 100%;
    padding: 96px 0 108px;
    position: relative;
    overflow: hidden;
  }
  /* Subtle dot-grid texture */
  .os-tl::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.028) 1px, transparent 1px);
    background-size: 28px 28px;
    pointer-events: none;
    z-index: 0;
  }
  /* Radial glow behind the track */
  .os-tl::after {
    content: '';
    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    width: 900px; height: 320px;
    background: radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  /* ── Header ── */
  .os-tl-hdr {
    text-align: center;
    margin-bottom: 72px;
    position: relative;
    z-index: 2;
    padding: 0 20px;
  }
  .os-tl-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(37,99,235,0.08);
    border: 1px solid rgba(37,99,235,0.28);
    color: #60a5fa;
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5px;
    font-weight: 500;
    letter-spacing: 0.18em;
    padding: 6px 16px;
    border-radius: 4px;
    text-transform: uppercase;
    margin-bottom: 22px;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .os-tl-tag.vis { opacity: 1; transform: translateY(0); }
  .os-tl-tag::before {
    content: '';
    width: 6px; height: 6px;
    background: #3b82f6;
    border-radius: 50%;
    box-shadow: 0 0 8px #3b82f6, 0 0 14px rgba(59,130,246,0.4);
    animation: os-tl-blink 2s ease-in-out infinite;
  }
  @keyframes os-tl-blink { 0%,100%{opacity:1} 50%{opacity:0.2} }

  .os-tl-title {
    font-size: clamp(30px, 4vw, 48px);
    font-weight: 800;
    color: #fff;
    letter-spacing: -0.03em;
    line-height: 1.1;
    opacity: 0;
    transform: translateY(14px);
    transition: opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s;
  }
  .os-tl-title.vis { opacity: 1; transform: translateY(0); }
  .os-tl-title em {
    font-style: normal;
    background: linear-gradient(90deg, #3b82f6, #60a5fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .os-tl-sub {
    margin-top: 16px;
    color: rgba(255,255,255,0.28);
    font-size: 14.5px;
    max-width: 380px;
    margin-left: auto; margin-right: auto;
    line-height: 1.7;
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
  }
  .os-tl-sub.vis { opacity: 1; transform: translateY(0); }

  /* ── Vertical layout hidden by default (shown in mobile media query) ── */
  .os-tl-vert { display: none; }

  /* ── Track ── */
  .os-tl-wrap {
    width: 100%;
    overflow-x: hidden;
    padding: 0 48px;
  }
  .os-tl-track {
    position: relative;
    min-width: 880px;
    height: 500px;
  }

  /* ── Main line ── */
  .os-tl-line-bg {
    position: absolute;
    left: 0; right: 0;
    top: 50%; height: 2px;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.06);
    z-index: 0;
  }
  /* Fine ticks every 20px */
  .os-tl-line-bg::before {
    content: '';
    position: absolute; inset: 0;
    background-image: repeating-linear-gradient(
      90deg,
      transparent, transparent 19px,
      rgba(255,255,255,0.12) 19px,
      rgba(255,255,255,0.12) 20px
    );
  }
  /* Major ticks every 100px */
  .os-tl-line-bg::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    top: -4px; height: 10px;
    background-image: repeating-linear-gradient(
      90deg,
      transparent, transparent 99px,
      rgba(255,255,255,0.2) 99px,
      rgba(255,255,255,0.2) 100px
    );
  }

  /* ── Fill line ── */
  .os-tl-fill {
    position: absolute;
    left: 0; top: 50%; height: 4px;
    width: 0%;
    transform: translateY(-50%);
    background: linear-gradient(90deg, #1e3a6e 0%, #2563eb 35%, #3b82f6 65%, #93c5fd 100%);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.18),
      0 0 14px rgba(59,130,246,0.7),
      0 0 36px rgba(59,130,246,0.28);
    z-index: 1;
    border-radius: 0 3px 3px 0;
    overflow: visible;
  }
  /* Travelling shimmer spark at the fill front */
  .os-tl-fill::after {
    content: '';
    position: absolute;
    top: -3px; right: -24px;
    width: 48px; height: 10px;
    background: radial-gradient(ellipse 50% 100% at 50% 50%, rgba(255,255,255,0.65), transparent);
    pointer-events: none;
    border-radius: 50%;
    animation: os-tl-spark 1.6s ease-in-out infinite;
  }
  @keyframes os-tl-spark {
    0%, 100% { opacity: 0.3; transform: scaleX(0.7) scaleY(0.8); }
    50%       { opacity: 1;  transform: scaleX(1.5) scaleY(1.3); }
  }

  /* ── Cursor dot ── */
  .os-tl-cursor {
    position: absolute;
    top: 50%; left: 0%;
    width: 16px; height: 16px;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 50%;
    border: 2px solid #060810;
    box-shadow:
      0 0 0 4px rgba(96,165,250,0.22),
      0 0 0 8px rgba(96,165,250,0.08),
      0 0 22px rgba(59,130,246,0.9);
    z-index: 5;
    opacity: 0;
  }
  /* Expanding ring behind cursor */
  .os-tl-cursor::before {
    content: '';
    position: absolute;
    inset: -7px;
    border-radius: 50%;
    border: 1.5px solid rgba(96,165,250,0.4);
    animation: os-tl-cursor-ring 1.8s ease-out infinite;
  }
  .os-tl-cursor::after {
    content: '';
    position: absolute;
    inset: -14px;
    border-radius: 50%;
    border: 1px solid rgba(96,165,250,0.18);
    animation: os-tl-cursor-ring 1.8s ease-out infinite 0.6s;
  }
  @keyframes os-tl-cursor-ring {
    0%   { transform: scale(1);   opacity: 0.9; }
    100% { transform: scale(2.4); opacity: 0; }
  }

  /* ── Start label ── */
  .os-tl-start-wrap {
    position: absolute;
    left: 6%; top: 50%;
    height: 0; overflow: visible;
    z-index: 5;
  }
  .os-tl-start-dot {
    position: absolute;
    left: 50%; top: -5px;
    transform: translateX(-50%);
    width: 10px; height: 10px;
    border-radius: 50%;
    background: rgba(255,255,255,0.2);
    border: 2px solid rgba(255,255,255,0.3);
    z-index: 8;
  }
  .os-tl-start-conn {
    position: absolute;
    left: 50%; transform: translateX(-50%);
    width: 1px;
    border-left: 1.5px dashed rgba(255,255,255,0.14);
    top: 0;
    height: 52px;
    z-index: 4;
  }
  .os-tl-start {
    position: absolute;
    left: 50%; transform: translateX(-50%);
    top: 62px;
    background: rgba(15,20,30,0.92);
    color: rgba(255,255,255,0.6);
    font-family: 'JetBrains Mono', monospace;
    font-size: 11.5px; font-weight: 600;
    padding: 7px 14px 7px 11px;
    border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.1);
    display: inline-flex; align-items: center; gap: 8px;
    white-space: nowrap;
    z-index: 10;
    box-shadow: 0 4px 20px rgba(0,0,0,0.6);
    opacity: 0; transition: opacity 0.4s ease;
    backdrop-filter: blur(8px);
  }
  .os-tl-start.vis { opacity: 1; }
  .os-tl-start-ico {
    display: flex; flex-direction: column; justify-content: center; gap: 3px;
    width: 13px; flex-shrink: 0;
  }
  .os-tl-start-ico span { display: block; height: 1.5px; border-radius: 1px; background: rgba(255,255,255,0.35); }
  .os-tl-start-ico span:nth-child(1) { width: 13px; }
  .os-tl-start-ico span:nth-child(2) { width: 9px; }
  .os-tl-start-ico span:nth-child(3) { width: 13px; }

  /* ── Steps ── */
  .os-tl-step {
    position: absolute; top: 50%;
    height: 0; overflow: visible;
    z-index: 5; opacity: 0;
    transition: opacity 0.45s ease;
  }
  .os-tl-step.vis { opacity: 1; }

  /* Dot on main line */
  .os-tl-dot {
    position: absolute;
    left: 50%; top: -6px;
    transform: translateX(-50%);
    width: 12px; height: 12px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border: 2px solid #0B0B0B;
    box-shadow: 0 0 10px rgba(37,99,235,0.9), 0 0 20px rgba(37,99,235,0.3);
    z-index: 8;
    opacity: 0; transition: opacity 0.3s ease 0.08s;
  }
  .os-tl-step.vis .os-tl-dot { opacity: 1; }

  /* Vertical connector — solid gradient */
  .os-tl-conn {
    position: absolute;
    left: 50%; transform: translateX(-50%);
    width: 2px;
    border: none;
    border-radius: 2px;
    z-index: 4;
    transition: height 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.12s;
  }
  .os-tl-step.up .os-tl-conn {
    bottom: 0; height: 0;
    background: linear-gradient(0deg, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0.06) 100%);
  }
  .os-tl-step.down .os-tl-conn {
    top: 0; height: 0;
    background: linear-gradient(180deg, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0.06) 100%);
  }
  .os-tl-step.vis .os-tl-conn { height: var(--ch, 90px); }

  /* Circular icon node on connector */
  .os-tl-node {
    position: absolute;
    left: 50%;
    transform: translateX(-50%) scale(0.55);
    width: 48px; height: 48px;
    border-radius: 50%;
    background: linear-gradient(145deg, #0e1420, #141c2e);
    border: 1.5px solid rgba(59,130,246,0.38);
    display: flex; align-items: center; justify-content: center;
    color: #60a5fa;
    z-index: 7;
    box-shadow:
      0 0 0 5px rgba(37,99,235,0.08),
      0 0 24px rgba(37,99,235,0.5),
      0 6px 20px rgba(0,0,0,0.7);
    opacity: 0;
    transition:
      opacity 0.3s ease 0.38s,
      transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.38s;
  }
  .os-tl-step.vis .os-tl-node { opacity: 1; transform: translateX(-50%) scale(1); }
  .os-tl-node svg { pointer-events: none; display: block; }
  .os-tl-step.up   .os-tl-node { bottom: calc(var(--ch) * 0.32 - 24px); }
  .os-tl-step.down .os-tl-node { top:    calc(var(--ch) * 0.32 - 24px); }

  /* Branch: pill + ext line + check dot */
  .os-tl-branch {
    position: absolute;
    left: 50%; transform: translateX(-50%);
    display: flex; align-items: center;
    opacity: 0; transition: opacity 0.4s ease 0.62s;
  }
  .os-tl-step.vis  .os-tl-branch { opacity: 1; }
  .os-tl-step.up   .os-tl-branch { bottom: calc(var(--ch) + 10px); }
  .os-tl-step.down .os-tl-branch { top:    calc(var(--ch) + 10px); }

  /* Pill */
  .os-tl-pill {
    display: inline-flex; align-items: center; gap: 10px;
    background: rgba(9,12,22,0.97);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 10px 16px 10px 12px;
    white-space: nowrap; flex-shrink: 0;
    box-shadow:
      0 6px 24px rgba(0,0,0,0.65),
      inset 0 1px 0 rgba(255,255,255,0.05),
      inset 0 -1px 0 rgba(0,0,0,0.3);
    backdrop-filter: blur(16px);
    position: relative;
    overflow: hidden;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  .os-tl-pill:hover {
    border-color: rgba(59,130,246,0.32);
    box-shadow:
      0 8px 32px rgba(0,0,0,0.7),
      0 0 22px rgba(37,99,235,0.18),
      inset 0 1px 0 rgba(255,255,255,0.06);
  }
  /* Left accent bar for done pills */
  .os-tl-pill.done-pill::before {
    content: '';
    position: absolute;
    left: 0; top: 18%; bottom: 18%;
    width: 2.5px;
    background: linear-gradient(180deg, #60a5fa, #2563eb);
    border-radius: 0 2px 2px 0;
  }
  /* Step number */
  .os-tl-pill-num {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px; font-weight: 700;
    color: rgba(96,165,250,0.42);
    letter-spacing: 0.05em;
    flex-shrink: 0;
    min-width: 20px;
    line-height: 1;
  }
  .os-tl-pill.done-pill .os-tl-pill-num { color: rgba(96,165,250,0.8); }
  .os-tl-pill-body { display: flex; flex-direction: column; gap: 4px; }
  .os-tl-pill-name {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11.5px; font-weight: 700;
    color: rgba(255,255,255,0.85);
    letter-spacing: 0.02em; line-height: 1;
  }
  .os-tl-pill.done-pill .os-tl-pill-name { color: #93c5fd; }
  .os-tl-pill-meta {
    display: flex; align-items: center; gap: 6px;
  }
  .os-tl-pill-desc {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px; font-weight: 400;
    color: rgba(255,255,255,0.28);
    letter-spacing: 0.02em; line-height: 1;
  }
  .os-tl-pill-dur {
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px; font-weight: 600;
    color: #eab308;
    letter-spacing: 0.05em;
    text-shadow: 0 0 10px rgba(234,179,8,0.45);
  }

  /* Extension line after pill */
  .os-tl-ext {
    width: 44px; height: 1px;
    background: linear-gradient(90deg, rgba(59,130,246,0.3), rgba(255,255,255,0.07));
    flex-shrink: 0;
  }

  /* Check dot */
  .os-tl-chk {
    width: 15px; height: 15px;
    border-radius: 50%; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
  }
  .os-tl-chk.done {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    box-shadow: 0 0 10px rgba(37,99,235,0.7), 0 0 20px rgba(37,99,235,0.25);
  }
  .os-tl-chk.done svg {
    width: 8px; height: 8px;
    stroke: #fff; fill: none;
    stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round;
  }
  .os-tl-chk.active {
    background: rgba(37,99,235,0.15);
    border: 1.5px solid #3b82f6;
    animation: os-tl-pulse 1.8s ease-in-out infinite;
  }
  .os-tl-chk.pending {
    background: transparent;
    border: 1.5px solid rgba(255,255,255,0.15);
  }
  @keyframes os-tl-pulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.4); }
    50%      { box-shadow: 0 0 0 5px rgba(37,99,235,0); }
  }

  /* Status text */
  .os-tl-status {
    position: absolute;
    left: 50%; transform: translateX(-50%);
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px;
    color: rgba(96,165,250,0.45);
    white-space: nowrap;
    letter-spacing: 0.07em;
    opacity: 0; transition: opacity 0.4s ease 0.78s;
  }
  .os-tl-step.vis  .os-tl-status { opacity: 1; }
  .os-tl-step.up   .os-tl-status { bottom: calc(var(--ch) + 66px); }
  .os-tl-step.down .os-tl-status { top:    calc(var(--ch) + 66px); }

  /* Duration — gold */
  .os-tl-dur {
    position: absolute;
    left: 50%; transform: translateX(-50%);
    font-family: 'JetBrains Mono', monospace;
    font-size: 9px; font-weight: 600;
    color: #eab308;
    white-space: nowrap;
    letter-spacing: 0.08em;
    text-shadow: 0 0 12px rgba(234,179,8,0.5);
    opacity: 0; transition: opacity 0.4s ease 0.82s;
  }
  /* Duration — now embedded inside pill; floating label hidden */
  .os-tl-dur { display: none; }

  /* ── CTA ── */
  .os-tl-cta {
    text-align: center;
    margin-top: 56px;
    position: relative; z-index: 2;
    opacity: 0; transform: translateY(10px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .os-tl-cta.vis { opacity: 1; transform: translateY(0); }
  .os-tl-btn {
    display: inline-flex; align-items: center; gap: 10px;
    background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
    color: white;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px; font-weight: 600;
    padding: 15px 36px;
    border-radius: 8px;
    text-decoration: none;
    box-shadow: 0 4px 24px rgba(37,99,235,0.4), 0 1px 0 rgba(255,255,255,0.1) inset;
    transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
    letter-spacing: 0.05em;
    position: relative;
    overflow: hidden;
  }
  .os-tl-btn::before {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%);
    pointer-events: none;
  }
  .os-tl-btn:hover {
    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    box-shadow: 0 6px 32px rgba(37,99,235,0.55), 0 1px 0 rgba(255,255,255,0.12) inset;
    transform: translateY(-1px);
  }

  /* ── Node hover tooltip (desktop only) ── */
  @media (min-width: 1025px) {
    .os-tl-step.vis .os-tl-node {
      cursor: pointer;
      transition:
        opacity 0.3s ease,
        transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
        border-color 0.2s ease,
        box-shadow 0.2s ease;
    }
    .os-tl-step.vis .os-tl-node:hover {
      transform: translateX(-50%) scale(1.22);
      border-color: rgba(59,130,246,0.72);
      box-shadow:
        0 0 0 8px rgba(37,99,235,0.14),
        0 0 36px rgba(37,99,235,0.75),
        0 8px 24px rgba(0,0,0,0.85);
    }
    .os-tl-node-tip {
      position: absolute;
      left: calc(100% + 14px);
      top: 50%; transform: translateY(-50%);
      background: rgba(7,10,20,0.97);
      border: 1px solid rgba(59,130,246,0.3);
      border-radius: 10px;
      padding: 9px 13px;
      min-width: 148px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      z-index: 30;
      box-shadow: 0 10px 28px rgba(0,0,0,0.75);
      backdrop-filter: blur(12px);
      transition: opacity 0.18s ease 0.05s;
    }
    .os-tl-step.vis .os-tl-node:hover .os-tl-node-tip { opacity: 1; }
    .os-tl-tip-name {
      font-size: 11px; font-weight: 700;
      color: #93c5fd;
      margin-bottom: 5px;
    }
    .os-tl-tip-row {
      display: flex; align-items: center; gap: 8px;
      margin-top: 3px;
    }
    .os-tl-tip-desc { font-size: 10px; color: rgba(255,255,255,0.42); }
    .os-tl-tip-dur {
      font-size: 10px; font-weight: 600;
      color: #eab308;
      text-shadow: 0 0 8px rgba(234,179,8,0.42);
    }
  }

  /* ─────────────────────────────────────
     MOBILE + TABLET VERTICAL TIMELINE (≤ 1024px)
     ───────────────────────────────────── */
  @media (max-width: 1024px) {
    /* Hide the horizontal scroll track entirely */
    .os-tl-wrap { display: none !important; }

    /* ── Outer container ── */
    .os-tl-vert {
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      position: relative;
      z-index: 2;
    }

    /* Background vertical line — centred */
    .os-tl-vert::before {
      content: '';
      position: absolute;
      left: 50%; top: 0; bottom: 0;
      width: 2px;
      transform: translateX(-50%);
      background: rgba(255,255,255,0.06);
      z-index: 0;
      pointer-events: none;
    }

    /* Animated fill overlay on the center line */
    .os-tl-vert-fill-track {
      position: absolute;
      left: 50%; top: 0;
      width: 2px;
      height: 0%;
      transform: translateX(-50%);
      background: linear-gradient(180deg, #1e3a6e 0%, #2563eb 40%, #3b82f6 70%, #93c5fd 100%);
      box-shadow: 0 0 14px rgba(59,130,246,0.6), 0 0 4px rgba(59,130,246,0.9);
      border-radius: 0 0 2px 2px;
      transition: height 0.85s cubic-bezier(0.45,0,0.55,1);
      z-index: 1;
      pointer-events: none;
    }

    /* ── Step row: 3-column grid  left | center-node | right ── */
    .os-tl-vert-step {
      display: grid;
      grid-template-columns: 1fr 48px 1fr;
      align-items: center;
      min-height: 90px;
      padding: 10px 0;
      position: relative;
      z-index: 2;
      opacity: 0;
      transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1);
    }
    /* Slide from the side on entry */
    .os-tl-vert-step-right { transform: translateX(28px); }
    .os-tl-vert-step-left  { transform: translateX(-28px); }
    .os-tl-vert-step.vis   { opacity: 1; transform: translateX(0); }

    /* ── Icon node centred on line ── */
    .os-tl-vert-center {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 3;
    }
    .os-tl-vert-node {
      width: 48px; height: 48px;
      border-radius: 50%;
      background: linear-gradient(145deg, #0e1420, #141c2e);
      border: 1.5px solid rgba(59,130,246,0.45);
      display: flex; align-items: center; justify-content: center;
      color: #60a5fa;
      box-shadow:
        0 0 0 5px rgba(37,99,235,0.09),
        0 0 22px rgba(37,99,235,0.45),
        0 4px 16px rgba(0,0,0,0.7);
      flex-shrink: 0;
      transform: scale(0.6);
      transition: transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s;
    }
    .os-tl-vert-step.vis .os-tl-vert-node { transform: scale(1); }
    .os-tl-vert-node svg { pointer-events: none; display: block; }

    /* ── Card sides ── */
    .os-tl-vert-side {
      display: flex;
      align-items: center;
    }
    .os-tl-vert-side-left  { justify-content: flex-end;   padding-right: 10px; }
    .os-tl-vert-side-right { justify-content: flex-start;  padding-left: 10px; }

    /* ── Info card ── */
    .os-tl-vert-card {
      width: 100%;
      background: rgba(10,13,24,0.88);
      border: 1px solid rgba(255,255,255,0.09);
      border-radius: 12px;
      padding: 13px 14px 12px;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 6px 24px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04);
      position: relative;
      overflow: hidden;
    }
    /* Blue accent bar — left for right-side cards, right for left-side cards */
    .os-tl-vert-step-right .os-tl-vert-card::before {
      content: '';
      position: absolute; left: 0; top: 18%; bottom: 18%;
      width: 2.5px;
      background: linear-gradient(180deg, #3b82f6, #1d4ed8);
      border-radius: 0 2px 2px 0;
    }
    .os-tl-vert-step-left .os-tl-vert-card::before {
      content: '';
      position: absolute; right: 0; top: 18%; bottom: 18%;
      width: 2.5px;
      background: linear-gradient(180deg, #3b82f6, #1d4ed8);
      border-radius: 2px 0 0 2px;
    }

    /* Short connector between node and card edge */
    .os-tl-vert-connector {
      display: none; /* handled by padding gaps */
    }

    /* ── Text inside cards ── */
    .os-tl-vert-name {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px; font-weight: 700;
      color: #93c5fd;
      letter-spacing: 0.03em;
      line-height: 1.2;
      margin-bottom: 5px;
    }
    .os-tl-vert-desc {
      font-size: 12px;
      color: rgba(255,255,255,0.55);
      line-height: 1.55;
      margin-bottom: 7px;
    }
    .os-tl-vert-meta {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }
    .os-tl-vert-status {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      color: rgba(96,165,250,0.65);
      letter-spacing: 0.06em;
    }
    .os-tl-vert-dur {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px; font-weight: 600;
      color: #eab308;
      letter-spacing: 0.06em;
      text-shadow: 0 0 10px rgba(234,179,8,0.4);
    }
    .os-tl-vert-chk {
      margin-left: auto;
      width: 17px; height: 17px;
      border-radius: 50%;
      background: linear-gradient(135deg, #2563eb, #1d4ed8);
      box-shadow: 0 0 10px rgba(37,99,235,0.75);
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
    }
    .os-tl-vert-chk svg {
      width: 9px; height: 9px;
      stroke: #fff; fill: none;
      stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round;
    }
  }

  /* ========================================
     LIGHT MODE OVERRIDES
     ======================================== */

  /* Dot grid — dark dots on cream */
  .os-tl::before {
    background-image: radial-gradient(circle, rgba(15,23,41,0.04) 1px, transparent 1px);
  }
  /* Radial glow — softer */
  .os-tl::after {
    background: radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%);
  }

  /* Header text */
  .os-tl-title { color: #0F1729; }
  .os-tl-sub   { color: rgba(15,23,41,0.45); }

  /* Main timeline line */
  .os-tl-line-bg { background: rgba(15,23,41,0.08); }
  .os-tl-line-bg::before {
    background-image: repeating-linear-gradient(
      90deg,
      transparent, transparent 19px,
      rgba(15,23,41,0.10) 19px,
      rgba(15,23,41,0.10) 20px
    );
  }
  .os-tl-line-bg::after {
    background-image: repeating-linear-gradient(
      90deg,
      transparent, transparent 99px,
      rgba(15,23,41,0.18) 99px,
      rgba(15,23,41,0.18) 100px
    );
  }

  /* Cursor dot */
  .os-tl-cursor {
    background: #0F1729;
    border: 2px solid #F5F4EF;
  }

  /* Start label */
  .os-tl-start {
    background: rgba(245,244,239,0.97);
    color: #0F1729;
    border: 1px solid #E8E3D9;
    box-shadow: 0 4px 20px rgba(15,23,41,0.10);
  }
  .os-tl-start-ico span { background: rgba(15,23,41,0.3); }
  .os-tl-start-dot {
    background: rgba(15,23,41,0.12);
    border: 2px solid rgba(15,23,41,0.2);
  }
  .os-tl-start-conn { border-left: 1.5px dashed rgba(15,23,41,0.12); }

  /* Step dots on line */
  .os-tl-dot { border: 2px solid #F5F4EF; }

  /* Icon node */
  .os-tl-node {
    background: #FFFFFF;
    border: 1.5px solid #E8E3D9;
    box-shadow: 0 0 0 5px rgba(59,130,246,0.05), 0 4px 16px rgba(15,23,41,0.10);
    color: #3b82f6;
  }
  @media (min-width: 1025px) {
    .os-tl-step.vis .os-tl-node:hover {
      border-color: rgba(59,130,246,0.5);
      box-shadow: 0 0 0 8px rgba(59,130,246,0.08), 0 0 24px rgba(59,130,246,0.35), 0 6px 16px rgba(15,23,41,0.12);
    }
    /* Tooltip */
    .os-tl-node-tip {
      background: rgba(255,255,255,0.98);
      border: 1px solid #E8E3D9;
      box-shadow: 0 10px 28px rgba(15,23,41,0.12);
    }
    .os-tl-tip-name  { color: #1d4ed8; }
    .os-tl-tip-desc  { color: rgba(15,23,41,0.55); }
  }

  /* Pill cards */
  .os-tl-pill {
    background: rgba(255,255,255,0.98);
    border: 1px solid #E8E3D9;
    box-shadow: 0 4px 16px rgba(15,23,41,0.06), inset 0 1px 0 rgba(255,255,255,0.9);
  }
  .os-tl-pill:hover {
    border-color: rgba(59,130,246,0.3);
    box-shadow: 0 6px 24px rgba(15,23,41,0.08), 0 0 16px rgba(59,130,246,0.10);
  }
  .os-tl-pill-name              { color: #0F1729; }
  .os-tl-pill.done-pill .os-tl-pill-name { color: #1d4ed8; }
  .os-tl-pill-desc              { color: rgba(15,23,41,0.45); }

  /* Extension line */
  .os-tl-ext { background: linear-gradient(90deg, rgba(59,130,246,0.25), rgba(15,23,41,0.06)); }

  /* Status text */
  .os-tl-status { color: rgba(59,130,246,0.55); }

  /* Mobile vertical */
  @media (max-width: 1024px) {
    .os-tl-vert::before { background: rgba(15,23,41,0.08); }

    .os-tl-vert-node {
      background: #FFFFFF;
      border: 1.5px solid #E8E3D9;
      color: #3b82f6;
      box-shadow: 0 0 0 5px rgba(59,130,246,0.05), 0 4px 12px rgba(15,23,41,0.08);
    }

    .os-tl-vert-card {
      background: rgba(255,255,255,0.97);
      border: 1px solid #E8E3D9;
      box-shadow: 0 4px 16px rgba(15,23,41,0.06), inset 0 1px 0 rgba(255,255,255,0.8);
    }
    .os-tl-vert-step-right .os-tl-vert-card::before,
    .os-tl-vert-step-left  .os-tl-vert-card::before {
      background: linear-gradient(180deg, #3b82f6, #2563eb);
    }

    .os-tl-vert-name  { color: #1d4ed8; }
    .os-tl-vert-desc  { color: rgba(15,23,41,0.60); }
    .os-tl-vert-status { color: rgba(59,130,246,0.65); }
  }
`;

export const ProcessTimeline: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const vertRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);
  const vertAnimatedRef = useRef(false);

  const buildTrack = () => {
    const track = trackRef.current;
    if (!track) return;
    const W = track.offsetWidth;
    track.querySelectorAll('.os-tl-step').forEach(e => e.remove());

    OS_STEPS.forEach((s, i) => {
      const el = document.createElement('div');
      el.className = `os-tl-step ${s.side}`;
      el.id = `osTlStep${i}`;
      el.style.left = `${s.pos * W}px`;
      el.style.setProperty('--ch', `${s.ch}px`);

      const chkClass = s.done ? 'done' : 'pending';
      const chkInner = s.done
        ? `<svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg>`
        : '';

      el.innerHTML = `
        <div class="os-tl-dot"></div>
        <div class="os-tl-conn"></div>
        <div class="os-tl-node">
          ${ICON_SVG[s.iconIdx]}
          <div class="os-tl-node-tip">
            <div class="os-tl-tip-name">${s.desc}</div>
            <div class="os-tl-tip-row">
              <span class="os-tl-tip-desc">${s.status}</span>
              <span class="os-tl-tip-dur">${s.dur}</span>
            </div>
          </div>
        </div>
        <div class="os-tl-branch">
          <div class="os-tl-pill${s.done ? ' done-pill' : ''}">
            <div class="os-tl-pill-num">${String(i + 1).padStart(2, '0')}</div>
            <div class="os-tl-pill-body">
              <span class="os-tl-pill-name">${s.name}</span>
              <div class="os-tl-pill-meta">
                <span class="os-tl-pill-desc">${s.desc}</span>
                <span class="os-tl-pill-dur">${s.dur}</span>
              </div>
            </div>
          </div>
          <div class="os-tl-ext"></div>
          <div class="os-tl-chk ${chkClass}">${chkInner}</div>
        </div>
        <div class="os-tl-status">${s.status}</div>
      `;
      track.appendChild(el);
    });
  };

  const runAnimation = () => {
    const section = sectionRef.current;
    if (!section) return;

    const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

    const go = async () => {
      const tag    = section.querySelector('#osTlTag');
      const title  = section.querySelector('#osTlTitle');
      const sub    = section.querySelector('#osTlSub');
      const start  = section.querySelector('#osTlStart');
      const fill   = section.querySelector('#osTlFill')   as HTMLElement | null;
      const cursor = section.querySelector('#osTlCursor') as HTMLElement | null;
      const cta    = section.querySelector('#osTlCta');

      tag?.classList.add('vis');
      await sleep(150);
      title?.classList.add('vis');
      await sleep(150);
      sub?.classList.add('vis');
      await sleep(200);
      start?.classList.add('vis');
      await sleep(350);

      if (!fill || !cursor) return;
      cursor.style.opacity = '1';

      // Single uninterrupted animation — no stops at steps
      const TOTAL = 5500; // ms for the full traversal
      const ease  = 'linear';

      fill.style.transition   = `width ${TOTAL}ms ${ease}`;
      cursor.style.transition = `left  ${TOTAL}ms ${ease}`;
      fill.style.width   = '100%';
      cursor.style.left  = '100%';

      // Reveal each step exactly when the cursor reaches it
      OS_STEPS.forEach((s, i) => {
        setTimeout(() => {
          section.querySelector(`#osTlStep${i}`)?.classList.add('vis');
        }, Math.round(s.pos * TOTAL));
      });

      setTimeout(() => cta?.classList.add('vis'), TOTAL + 300);
    };

    go();
  };

  useEffect(() => {
    buildTrack();

    // ── Horizontal animation (desktop) ──
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;
        obs.disconnect();
        runAnimation();
      });
    }, { threshold: 0.12 });

    if (sectionRef.current) obs.observe(sectionRef.current);

    // ── Vertical animation (mobile) ──
    const vertObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || vertAnimatedRef.current) return;
        if (window.innerWidth > 1024) return;
        vertAnimatedRef.current = true;
        vertObs.disconnect();

        const vert = vertRef.current;
        if (!vert) return;
        const fill = vert.querySelector('.os-tl-vert-fill-track') as HTMLElement | null;
        const steps = Array.from(vert.querySelectorAll('.os-tl-vert-step')) as HTMLElement[];
        const cta = document.querySelector('#osTlCta') as HTMLElement | null;
        const totalSteps = steps.length;

        steps.forEach((step, i) => {
          const delay = 400 + i * 560;
          setTimeout(() => {
            step.classList.add('vis');
            if (fill) fill.style.height = `${((i + 1) / totalSteps) * 100}%`;
            // Show CTA at the same time as the last step
            if (i === totalSteps - 1 && cta) cta.classList.add('vis');
          }, delay);
        });
      });
    }, { threshold: 0.05 });

    if (vertRef.current) vertObs.observe(vertRef.current);

    const handleResize = () => buildTrack();
    window.addEventListener('resize', handleResize);

    return () => {
      obs.disconnect();
      vertObs.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section className="os-tl" ref={sectionRef}>

        <div className="os-tl-hdr">
          <div className="os-tl-tag" id="osTlTag">Notre Méthode</div>
          <h2 className="os-tl-title" id="osTlTitle">
            Comment on crée<br /><em>votre site web</em>
          </h2>
          <p className="os-tl-sub" id="osTlSub">
            De l'idée à la mise en ligne — simple, rapide, transparent
          </p>
        </div>

        <div className="os-tl-wrap">
          <div className="os-tl-track" id="osTlTrack" ref={trackRef}>
            <div className="os-tl-line-bg" />
            <div className="os-tl-fill" id="osTlFill" />
            <div className="os-tl-cursor" id="osTlCursor" />
            <div className="os-tl-start-wrap">
              <div className="os-tl-start-dot" />
              <div className="os-tl-start-conn" />
              <div className="os-tl-start" id="osTlStart">
                <div className="os-tl-start-ico">
                  <span /><span /><span />
                </div>
                votre-projet
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE VERTICAL TIMELINE ── */}
        <div className="os-tl-vert" ref={vertRef}>
          {/* Animated center fill line */}
          <div className="os-tl-vert-fill-track" />

          {OS_STEPS.map((s, i) => {
            const isRight = i % 2 === 0; // even → card on right, odd → card on left
            const sideClass = isRight ? 'os-tl-vert-step-right' : 'os-tl-vert-step-left';
            const card = (
              <div className="os-tl-vert-card">
                <div className="os-tl-vert-name">{s.name}</div>
                <div className="os-tl-vert-desc">{s.desc}</div>
                <div className="os-tl-vert-meta">
                  <span className="os-tl-vert-status">{s.status}</span>
                  <span className="os-tl-vert-dur">{s.dur}</span>
                  {s.done && (
                    <div className="os-tl-vert-chk">
                      <svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg>
                    </div>
                  )}
                </div>
              </div>
            );
            return (
              <div className={`os-tl-vert-step ${sideClass}`} key={i}>
                {/* Left cell */}
                <div className="os-tl-vert-side os-tl-vert-side-left">
                  {!isRight && card}
                </div>
                {/* Center node */}
                <div className="os-tl-vert-center">
                  <div className="os-tl-vert-node" dangerouslySetInnerHTML={{ __html: ICON_SVG[s.iconIdx] }} />
                </div>
                {/* Right cell */}
                <div className="os-tl-vert-side os-tl-vert-side-right">
                  {isRight && card}
                </div>
              </div>
            );
          })}
        </div>

        <div className="os-tl-cta" id="osTlCta">
          <a href="#contact" className="os-tl-btn">
            Démarrer mon projet
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </section>
    </>
  );
};
