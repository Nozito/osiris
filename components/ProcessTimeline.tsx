import React, { useEffect, useRef } from 'react';

const OS_STEPS = [
  { pos: 0.08, side: 'up',   ch: 100, icon: '📋', name: 'brief-initial',   desc: 'Découverte & objectifs',       status: 'call planifié',   dur: '~30 min',    done: true,  active: false },
  { pos: 0.24, side: 'down', ch: 115, icon: '🎨', name: 'design-branch',   desc: 'Maquette & identité visuelle', status: 'maquette livrée', dur: '3–5 jours',  done: true,  active: false },
  { pos: 0.40, side: 'up',   ch: 88,  icon: '✅', name: 'validation',      desc: 'Votre retour & ajustements',   status: 'approuvé',        dur: '1–2 jours',  done: true,  active: false },
  { pos: 0.57, side: 'down', ch: 122, icon: '⚙️', name: 'dev-branch',      desc: 'Intégration & développement',  status: 'dev terminé',     dur: '5–10 jours', done: true,  active: false },
  { pos: 0.74, side: 'up',   ch: 95,  icon: '🔍', name: 'test-branch',     desc: 'Tests & révisions finales',    status: 'tests validés',   dur: '2–3 jours',  done: true,  active: false },
  { pos: 0.91, side: 'down', ch: 100, icon: '🌐', name: 'mise-en-ligne',   desc: 'Déploiement & livraison',      status: 'site livré ✓',    dur: '1 jour',     done: true,  active: false },
];

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');

  /* ── Section ── */
  .os-tl {
    width: 100%;
    padding: 96px 0 108px;
    position: relative;
    overflow: hidden;
  }
  /* Radial glow behind the track */
  .os-tl::after {
    content: '';
    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    width: 700px; height: 260px;
    background: radial-gradient(ellipse, rgba(37,99,235,0.09) 0%, transparent 70%);
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
    left: 0; top: 50%; height: 3px;
    width: 0%;
    transform: translateY(-50%);
    background: linear-gradient(90deg, #1e3a6e 0%, #2563eb 35%, #3b82f6 65%, #93c5fd 100%);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.15),
      0 0 12px rgba(59,130,246,0.55),
      0 0 32px rgba(59,130,246,0.2);
    z-index: 1;
    border-radius: 0 2px 2px 0;
  }

  /* ── Cursor dot ── */
  .os-tl-cursor {
    position: absolute;
    top: 50%; left: 0%;
    width: 14px; height: 14px;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 50%;
    border: 2px solid #0B0B0B;
    box-shadow:
      0 0 0 4px rgba(96,165,250,0.18),
      0 0 0 7px rgba(96,165,250,0.07),
      0 0 18px rgba(59,130,246,0.7);
    z-index: 5;
    opacity: 0;
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

  /* Dashed vertical connector */
  .os-tl-conn {
    position: absolute;
    left: 50%; transform: translateX(-50%);
    width: 1px;
    border-left: 1.5px dashed rgba(59,130,246,0.22);
    z-index: 4;
    transition: height 0.55s cubic-bezier(0.4,0,0.2,1) 0.12s;
  }
  .os-tl-step.up   .os-tl-conn { bottom: 0; height: 0; }
  .os-tl-step.down .os-tl-conn { top: 0;    height: 0; }
  .os-tl-step.vis  .os-tl-conn { height: var(--ch, 90px); }

  /* Circular icon node on connector */
  .os-tl-node {
    position: absolute;
    left: 50%; transform: translateX(-50%);
    width: 40px; height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #0d1117, #141c2e);
    border: 1px solid rgba(59,130,246,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 17px;
    z-index: 7;
    box-shadow: 0 0 0 4px rgba(37,99,235,0.07), 0 4px 18px rgba(0,0,0,0.6);
    opacity: 0; transition: opacity 0.35s ease 0.38s;
  }
  .os-tl-step.vis  .os-tl-node { opacity: 1; }
  .os-tl-step.up   .os-tl-node { bottom: calc(var(--ch) * 0.32 - 20px); }
  .os-tl-step.down .os-tl-node { top:    calc(var(--ch) * 0.32 - 20px); }

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
    display: inline-flex; align-items: center; gap: 9px;
    background: rgba(11,15,22,0.96);
    border: 1px solid rgba(255,255,255,0.09);
    border-radius: 8px;
    padding: 9px 14px 9px 11px;
    white-space: nowrap; flex-shrink: 0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.04);
    backdrop-filter: blur(12px);
    position: relative;
    overflow: hidden;
  }
  /* Subtle left accent bar for done pills */
  .os-tl-pill.done-pill::before {
    content: '';
    position: absolute;
    left: 0; top: 20%; bottom: 20%;
    width: 2px;
    background: linear-gradient(180deg, #3b82f6, #1d4ed8);
    border-radius: 0 2px 2px 0;
  }
  .os-tl-pill-ico {
    display: flex; flex-direction: column; gap: 2.5px; justify-content: center;
    width: 13px; flex-shrink: 0;
  }
  .os-tl-pill-ico span {
    display: block; height: 1.5px; border-radius: 1px;
    background: rgba(255,255,255,0.3);
  }
  .os-tl-pill-ico span:nth-child(1) { width: 13px; }
  .os-tl-pill-ico span:nth-child(2) { width: 9px; }
  .os-tl-pill-ico span:nth-child(3) { width: 13px; }
  .os-tl-pill.done-pill .os-tl-pill-ico span { background: rgba(96,165,250,0.5); }
  .os-tl-pill-body { display: flex; flex-direction: column; gap: 3px; }
  .os-tl-pill-name {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px; font-weight: 600;
    color: rgba(255,255,255,0.8);
    letter-spacing: 0.02em; line-height: 1;
  }
  .os-tl-pill.done-pill .os-tl-pill-name { color: #93c5fd; }
  .os-tl-pill-desc {
    font-family: 'JetBrains Mono', monospace;
    font-size: 8.5px; font-weight: 400;
    color: rgba(255,255,255,0.22);
    letter-spacing: 0.02em; line-height: 1;
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

  /* Duration */
  .os-tl-dur {
    position: absolute;
    left: 50%; transform: translateX(-50%);
    font-family: 'JetBrains Mono', monospace;
    font-size: 8.5px;
    color: rgba(255,255,255,0.2);
    white-space: nowrap;
    letter-spacing: 0.05em;
    opacity: 0; transition: opacity 0.4s ease 0.82s;
  }
  .os-tl-step.vis  .os-tl-dur { opacity: 1; }
  .os-tl-step.up   .os-tl-dur { top: 14px; }
  .os-tl-step.down .os-tl-dur { bottom: 14px; }

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
      width: 44px; height: 44px;
      border-radius: 50%;
      background: linear-gradient(135deg, #0d1117, #141c2e);
      border: 1.5px solid rgba(59,130,246,0.45);
      display: flex; align-items: center; justify-content: center;
      font-size: 20px;
      box-shadow:
        0 0 0 5px rgba(37,99,235,0.09),
        0 0 18px rgba(37,99,235,0.35),
        0 4px 16px rgba(0,0,0,0.7);
      flex-shrink: 0;
    }

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
      font-size: 10px;
      color: rgba(255,255,255,0.28);
      letter-spacing: 0.04em;
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

      const chkClass = s.done ? 'done' : s.active ? 'active' : 'pending';
      const chkInner = s.done
        ? `<svg viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3"/></svg>`
        : '';

      el.innerHTML = `
        <div class="os-tl-dot"></div>
        <div class="os-tl-conn"></div>
        <div class="os-tl-node">${s.icon}</div>
        <div class="os-tl-branch">
          <div class="os-tl-pill${s.done ? ' done-pill' : s.active ? ' active' : ''}">
            <div class="os-tl-pill-ico"><span></span><span></span><span></span></div>
            <div class="os-tl-pill-body">
              <span class="os-tl-pill-name">${s.name}</span>
              <span class="os-tl-pill-desc">${s.desc}</span>
            </div>
          </div>
          <div class="os-tl-ext"></div>
          <div class="os-tl-chk ${chkClass}">${chkInner}</div>
        </div>
        <div class="os-tl-status">${s.status}</div>
        <div class="os-tl-dur">${s.dur}</div>
      `;
      track.appendChild(el);
    });
  };

  const runAnimation = () => {
    const section = sectionRef.current;
    if (!section) return;

    const sleep = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

    const animateSeg = (
      fill: HTMLElement,
      cursor: HTMLElement,
      toPct: number,
      durationMs: number
    ) => new Promise<void>(resolve => {
      const ease = 'cubic-bezier(0.45, 0, 0.55, 1)';
      fill.style.transition = `width ${durationMs}ms ${ease}`;
      cursor.style.transition = `left ${durationMs}ms ${ease}`;
      fill.style.width = `${toPct * 100}%`;
      cursor.style.left = `${toPct * 100}%`;
      setTimeout(resolve, durationMs);
    });

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

      const SPEED = 3400;
      const PAUSE = 380;

      let pos = 0;
      for (let i = 0; i < OS_STEPS.length; i++) {
        const s = OS_STEPS[i];
        const dist = s.pos - pos;
        await animateSeg(fill, cursor, s.pos, Math.round(dist * SPEED));
        section.querySelector(`#osTlStep${i}`)?.classList.add('vis');
        await sleep(PAUSE);
        pos = s.pos;
      }

      await animateSeg(fill, cursor, 1.0, Math.round((1 - pos) * SPEED));
      await sleep(300);
      cta?.classList.add('vis');
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
          <div className="os-tl-tag" id="osTlTag">// Process</div>
          <h2 className="os-tl-title" id="osTlTitle">
            Comment on crée<br /><em>votre site web</em>
          </h2>
          <p className="os-tl-sub" id="osTlSub">
            De l'idée à la mise en ligne — simple, rapide, transparent.
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
                  <div className="os-tl-vert-node">{s.icon}</div>
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
