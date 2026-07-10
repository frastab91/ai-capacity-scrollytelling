import React from 'react';

export default function App() {
  return (
    <>
      {/* Progress Bar at the top */}
      <div className="scroll-progress-indicator" id="progress-bar"></div>

      {/* Editorial Top Header */}
      <header className="editorial-header">
        <div className="header-meta">
          <span className="pub-type">Visual Narrative / Policy Brief</span>
          <span className="pub-date">July 2026</span>
        </div>
        <h1 className="header-title">Absorptive Capacity, Access, and Constellations of AI Capability</h1>
        <p className="header-subtitle">Why policy debates must move beyond the monolith of “capacity building” and embrace pluriversal futures.</p>
        <div className="header-byline">
          Based on the paper <span className="paper-title">“Absorptive Capacity, Access, and Constellations of AI Capability”</span>
        </div>
        <div className="scroll-prompt">
          <span className="scroll-text">Scroll to Begin</span>
          <div className="scroll-indicator">
            <span className="scroll-dot"></span>
          </div>
        </div>
      </header>

      {/* Main Scrollytelling Container */}
      <main className="scrolly-container">
        
        {/* Sticky Graphic Pane */}
        <div className="sticky-graphic">
          <div className="graphic-wrapper">
            
            {/* SECTION 1: HERO MONOLITH TO CONSTELLATION */}
            <div className="visual-section active" id="visual-hero">
              <svg viewBox="0 0 800 600" width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e4dad0" strokeWidth="0.5" />
                  </pattern>
                  
                  {/* Premium Shadows */}
                  <filter id="shadow-monolith" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="15" stdDeviation="20" floodColor="#0f172a" floodOpacity="0.2" />
                  </filter>
                  <filter id="shadow-node" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#5c4a3c" floodOpacity="0.1" />
                  </filter>

                  {/* Neon Glow Filters */}
                  <filter id="glow-gold" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="glow-crimson" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Curated Gradients */}
                  <linearGradient id="monolith-metal" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="50%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#020617" />
                  </linearGradient>
                  <linearGradient id="gold-glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#d97706" />
                  </linearGradient>
                  <linearGradient id="crimson-core-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#dc2626" />
                    <stop offset="100%" stopColor="#991b1b" />
                  </linearGradient>
                  <radialGradient id="node-cream-grad" cx="50%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f8f6f0" />
                  </radialGradient>
                </defs>
                
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
                
                <g className="hero-monolith-shake-wrapper">
                  <g className="hero-monolith-group" transform="translate(400, 240)">
                    {/* Heavy 3D-effect Monolith Slab */}
                    <rect className="monolith-block" x="-115" y="-115" width="230" height="230" rx="12" fill="url(#monolith-metal)" stroke="url(#gold-glow-grad)" strokeWidth="2.5" filter="url(#shadow-monolith)" />
                    <rect className="monolith-inner" x="-100" y="-100" width="200" height="200" rx="8" fill="none" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="1.5" />
                    <text className="monolith-label" y="0">AI CAPACITY</text>
                    <text className="monolith-sublabel" y="30">MONOLITH</text>
                    
                    {/* Crack lines (neon gold glow, drawn on scroll) */}
                    <path className="crack-path crack-1" d="M -50 -115 L -20 -40 L -60 20 L -30 115" stroke="url(#gold-glow-grad)" filter="url(#glow-gold)" />
                    <path className="crack-path crack-2" d="M 30 -115 L 0 -20 L 40 30 L 10 115" stroke="url(#gold-glow-grad)" filter="url(#glow-gold)" />
                    <path className="crack-path crack-3" d="M -115 -20 L -40 -10 L 30 -50 L 115 -30" stroke="url(#gold-glow-grad)" filter="url(#glow-gold)" />
                  </g>
                </g>

                {/* Emerging Constellation Nodes */}
                <g className="emerging-constellation" opacity="0" transform="translate(0, -60)">
                  {/* Central Links */}
                  <line x1="400" y1="300" x2="400" y2="120" className="const-link link-1" />
                  <line x1="400" y1="300" x2="580" y2="230" className="const-link link-2" />
                  <line x1="400" y1="300" x2="510" y2="450" className="const-link link-3" />
                  <line x1="400" y1="300" x2="290" y2="450" className="const-link link-4" />
                  <line x1="400" y1="300" x2="220" y2="230" className="const-link link-5" />
                  
                  {/* Core Node */}
                  <circle cx="400" cy="300" r="50" className="node-circle core" fill="url(#crimson-core-grad)" filter="url(#shadow-node)" />
                  <circle cx="400" cy="300" r="50" className="node-circle-glow" fill="none" stroke="#dc2626" strokeWidth="2" filter="url(#glow-crimson)" opacity="0.6" />
                  <text className="node-text core-lbl-1" x="400" y="295">Capacity to Benefit</text>
                  <text className="node-text core-lbl-2" x="400" y="312">from AI</text>
                  
                  {/* Outer Nodes (Ivory Button Style) */}
                  {/* Node 1: Access */}
                  <g className="outer-node-g node-access">
                    <circle cx="400" cy="120" r="35" className="node-circle outer" fill="url(#node-cream-grad)" stroke="#b28d46" filter="url(#shadow-node)" />
                    <text className="node-text label" x="400" y="124">Access</text>
                  </g>
                  {/* Node 2: Absorptive */}
                  <g className="outer-node-g node-absorptive">
                    <circle cx="580" cy="230" r="35" className="node-circle outer" fill="url(#node-cream-grad)" stroke="#b28d46" filter="url(#shadow-node)" />
                    <text className="node-text label" x="580" y="234">Absorption</text>
                  </g>
                  {/* Node 3: Generative */}
                  <g className="outer-node-g node-generative">
                    <circle cx="510" cy="450" r="35" className="node-circle outer" fill="url(#node-cream-grad)" stroke="#b28d46" filter="url(#shadow-node)" />
                    <text className="node-text label" x="510" y="454">Generative</text>
                  </g>
                  {/* Node 4: Institutional */}
                  <g className="outer-node-g node-institutional">
                    <circle cx="290" cy="450" r="35" className="node-circle outer" fill="url(#node-cream-grad)" stroke="#b28d46" filter="url(#shadow-node)" />
                    <text className="node-text label" x="290" y="454">Institutional</text>
                  </g>
                  {/* Node 5: DPI */}
                  <g className="outer-node-g node-dpi">
                    <circle cx="220" cy="230" r="35" className="node-circle outer" fill="url(#node-cream-grad)" stroke="#b28d46" filter="url(#shadow-node)" />
                    <text className="node-text label" x="220" y="234">DPI & Data</text>
                  </g>
                </g>
              </svg>
            </div>

            {/* SECTION 2: ACCESS DOOR NOT ROOM */}
            <div className="visual-section" id="visual-access">
              <svg viewBox="0 0 800 600" width="100%" height="100%">
                <defs>
                  <linearGradient id="portal-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#fae8ff" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#fdfbf7" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="glass-pane-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                    <stop offset="100%" stopColor="rgba(253, 251, 247, 0.15)" />
                  </linearGradient>
                </defs>
                
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
                
                {/* Glowing room portal behind the door */}
                <g className="room-wireframe" opacity="0" transform="translate(400, 300)">
                  {/* Light Rays radiating from center */}
                  <path d="M 0 0 L -350 -250 M 0 0 L 350 -250 M 0 0 L -350 250 M 0 0 L 350 250" stroke="#fcd34d" strokeWidth="0.8" opacity="0.3" />
                  <polygon points="-80,-80 80,-80 140,140 -140,140" fill="url(#portal-glow)" />
                  
                  {/* Receding Grid Perspective lines */}
                  <line x1="-300" y1="-200" x2="-80" y2="-80" className="room-line" />
                  <line x1="300" y1="-200" x2="80" y2="-80" className="room-line" />
                  <line x1="-300" y1="200" x2="-80" y2="80" className="room-line" />
                  <line x1="300" y1="200" x2="80" y2="80" className="room-line" />
                  
                  {/* Back wall frame */}
                  <rect x="-80" y="-80" width="160" height="160" className="room-back-wall" fill="#fefdfa" stroke="#e4dad0" />
                  {/* Bare, stylized outline table/chair */}
                  <path d="M -30 20 L 30 20 L 25 50 M -25 20 L -25 50 M -5 20 L -5 35 M 5 20 L 5 35" className="room-line" strokeWidth="1.5" stroke="#b28d46" />
                  <text x="0" y="-20" className="room-label">Access opens the door. But the room is empty.</text>
                </g>

                {/* Decorative Door Frame */}
                <g className="door-frame-group" transform="translate(400, 300)">
                  <rect className="door-frame" x="-92" y="-172" width="184" height="344" fill="none" stroke="#1c3d4a" strokeWidth="4.5" />
                  <rect className="door-frame-inner" x="-88" y="-168" width="176" height="336" fill="none" stroke="#b28d46" strokeWidth="1.5" />
                </g>

                {/* Splitting Door Panels (Frosted Glass Panels with gold frames & custom icons) */}
                <g className="door-panels" transform="translate(400, 300)">
                  {/* Panel 1: Connectivity & Hardware (Top Panel) */}
                  <g className="door-panel connectivity-panel" transform="translate(0, 0)">
                    <rect className="panel-rect" x="-84" y="-164" width="168" height="104" rx="6" fill="url(#glass-pane-grad)" stroke="rgba(28, 61, 74, 0.15)" strokeWidth="1.5" />
                    <rect className="panel-border-glow" x="-84" y="-164" width="168" height="104" rx="6" fill="none" stroke="#b28d46" strokeWidth="2" opacity="0" />
                    {/* Connectivity Radar Icon */}
                    <path d="M -15 -118 A 12 12 0 0 1 15 -118 M -22 -125 A 22 22 0 0 1 22 -125 M -5 -108 A 4 4 0 0 1 5 -108" className="panel-icon" />
                    <circle cx="0" cy="-105" r="2.5" fill="#b28d46" />
                    <text className="panel-text" x="0" y="-72">CONNECTIVITY & HARDWARE</text>
                  </g>

                  {/* Panel 2: Models & Tools (Middle Panel) */}
                  <g className="door-panel models-panel" transform="translate(0, 0)">
                    <rect className="panel-rect" x="-84" y="-52" width="168" height="104" rx="6" fill="url(#glass-pane-grad)" stroke="rgba(28, 61, 74, 0.15)" strokeWidth="1.5" />
                    <rect className="panel-border-glow" x="-84" y="-52" width="168" height="104" rx="6" fill="none" stroke="#b28d46" strokeWidth="2" opacity="0" />
                    {/* Neural Network Lattice Icon */}
                    <line x1="-15" y1="-5" x2="0" y2="-20" stroke="rgba(28, 61, 74, 0.3)" strokeWidth="1.5" />
                    <line x1="15" y1="-5" x2="0" y2="-20" stroke="rgba(28, 61, 74, 0.3)" strokeWidth="1.5" />
                    <line x1="-15" y1="-5" x2="15" y2="-5" stroke="rgba(28, 61, 74, 0.3)" strokeWidth="1.5" />
                    <line x1="-15" y1="-5" x2="0" y2="10" stroke="rgba(28, 61, 74, 0.3)" strokeWidth="1.5" />
                    <line x1="15" y1="-5" x2="0" y2="10" stroke="rgba(28, 61, 74, 0.3)" strokeWidth="1.5" />
                    <circle cx="-15" cy="-5" r="4.5" className="panel-icon-node" fill="#b28d46" />
                    <circle cx="15" cy="-5" r="4.5" className="panel-icon-node" fill="#b28d46" />
                    <circle cx="0" cy="-20" r="4.5" className="panel-icon-node" fill="#1c3d4a" />
                    <circle cx="0" cy="10" r="4.5" className="panel-icon-node" fill="#1c3d4a" />
                    <text className="panel-text" x="0" y="40">MODELS & TOOLS</text>
                  </g>

                  {/* Panel 3: Data Ecosystems (Bottom Panel) */}
                  <g className="door-panel data-panel" transform="translate(0, 0)">
                    <rect className="panel-rect" x="-84" y="60" width="168" height="104" rx="6" fill="url(#glass-pane-grad)" stroke="rgba(28, 61, 74, 0.15)" strokeWidth="1.5" />
                    <rect className="panel-border-glow" x="-84" y="60" width="168" height="104" rx="6" fill="none" stroke="#b28d46" strokeWidth="2" opacity="0" />
                    {/* Database Cylinder stack Icon */}
                    <path d="M -15 95 C -15 91 15 91 15 95 C 15 99 -15 99 -15 95 M -15 95 L -15 107 C -15 111 15 111 15 107 L 15 95 M -15 107 L -15 119 C -15 123 15 123 15 119 L 15 107 M -15 101 C -15 105 15 105 15 101 M -15 113 C -15 117 15 117 15 113" className="panel-icon" />
                    <text className="panel-text" x="0" y="152">DATA ASSETS</text>
                  </g>
                </g>
              </svg>
            </div>

            {/* SECTION 3: ABSORPTIVE PROCESS PIPELINE */}
            <div className="visual-section" id="visual-absorptive-flow">
              <svg viewBox="0 0 800 600" width="100%" height="100%">
                <defs>
                  <linearGradient id="pipe-tube-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e2dad0" />
                    <stop offset="30%" stopColor="#ffffff" />
                    <stop offset="70%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#d3c8bc" />
                  </linearGradient>
                  <filter id="glow-blue" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
                
                <g className="pipeline-group">
                  {/* Connective Glass Pipeline Shaft */}
                  <rect x="388" y="60" width="24" height="480" rx="12" fill="url(#pipe-tube-grad)" stroke="#d3c8bc" strokeWidth="1.5" />
                  <rect x="396" y="60" width="8" height="480" fill="#ffffff" opacity="0.5" />
                  
                  {/* Stages */}
                  {/* Stage 1: Recognize */}
                  <g className="pipe-stage stage-1" transform="translate(400, 150)">
                    <circle r="44" className="stage-circle" fill="url(#node-cream-grad)" stroke="#e4dad0" strokeWidth="2" filter="url(#shadow-node)" />
                    <circle r="44" className="stage-circle-glow" fill="none" stroke="#1c3d4a" strokeWidth="2.5" opacity="0" filter="url(#glow-blue)" />
                    <text className="stage-num" y="-5">01</text>
                    <text className="stage-title" y="15">RECOGNIZE</text>
                    <text className="stage-sub" y="70">Value external AI systems</text>
                  </g>

                  {/* Stage 2: Assimilate */}
                  <g className="pipe-stage stage-2" transform="translate(400, 300)">
                    <circle r="44" className="stage-circle" fill="url(#node-cream-grad)" stroke="#e4dad0" strokeWidth="2" filter="url(#shadow-node)" />
                    <circle r="44" className="stage-circle-glow" fill="none" stroke="#1c3d4a" strokeWidth="2.5" opacity="0" filter="url(#glow-blue)" />
                    <text className="stage-num" y="-5">02</text>
                    <text className="stage-title" y="15">ASSIMILATE</text>
                    <text className="stage-sub" y="70">Integrate into routines & tech</text>
                  </g>

                  {/* Stage 3: Apply */}
                  <g className="pipe-stage stage-3" transform="translate(400, 450)">
                    <circle r="44" className="stage-circle" fill="url(#node-cream-grad)" stroke="#e4dad0" strokeWidth="2" filter="url(#shadow-node)" />
                    <circle r="44" className="stage-circle-glow" fill="none" stroke="#1c3d4a" strokeWidth="2.5" opacity="0" filter="url(#glow-blue)" />
                    <text className="stage-num" y="-5">03</text>
                    <text className="stage-title" y="15">APPLY</text>
                    <text className="stage-sub" y="70">Deploy to productive ends</text>
                  </g>

                  {/* Glowing Particle Flow Loops */}
                  <g className="pipeline-particles">
                    <circle cx="400" cy="150" r="6" className="pipe-particle p1" fill="#dc2626" filter="url(#glow-crimson)" />
                    <circle cx="400" cy="225" r="6" className="pipe-particle p2" fill="#1c3d4a" filter="url(#glow-blue)" />
                    <circle cx="400" cy="300" r="6" className="pipe-particle p3" fill="#1c3d4a" filter="url(#glow-blue)" />
                    <circle cx="400" cy="375" r="6" className="pipe-particle p4" fill="#1c3d4a" filter="url(#glow-blue)" />
                    <circle cx="400" cy="450" r="6" className="pipe-particle p5" fill="#dc2626" filter="url(#glow-crimson)" />
                  </g>

                  {/* Feedback Arrow */}
                  <path d="M 444 450 C 564 450 564 150 444 150" className="feedback-path" fill="none" stroke="#b28d46" strokeWidth="2" strokeDasharray="6 6" />
                  <path d="M 446 144 L 434 150 L 446 156 Z" className="feedback-arrow" fill="#b28d46" />
                  <text x="525" y="300" className="feedback-label" fill="#b28d46" transform="rotate(90, 525, 300)">Feedback & Learning Loop</text>
                </g>
              </svg>
            </div>

            {/* SECTION 4: ABSORPTION CRITIQUE FRAME */}
            <div className="visual-section" id="visual-critique">
              <svg viewBox="0 0 800 600" width="100%" height="100%" id="svg-critique-canvas">
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3" />

                {/* Receiver Panel Group */}
                <g className="receiver-panel-group">
                  {/* Outer border panel */}
                  <rect x="60" y="50" width="310" height="360" rx="10" fill="hsla(210, 20%, 94%, 0.85)" stroke="var(--color-border)" strokeWidth="1.5" />
                  
                  {/* Headers */}
                  <text x="215" y="90" className="svg-panel-header" fill="var(--color-text-muted)">THE RECEIVER FRAME</text>
                  <text x="215" y="115" className="svg-panel-title" fill="var(--color-text)">Exogenous Bias</text>

                  {/* Pile elements (stacked boxes) */}
                  {/* Global AI API Box */}
                  <g transform="translate(115, 140)">
                    <rect x="0" y="0" width="200" height="42" rx="6" fill="#ffffff" stroke="var(--color-border)" strokeWidth="1" />
                    <line x1="20" y1="21" x2="180" y2="21" stroke="var(--color-border)" strokeWidth="0.8" strokeDasharray="2 2" />
                    {/* Cloud Icon */}
                    <g transform="translate(15, 11) scale(0.8)">
                      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" fill="var(--color-accent-blue)" />
                    </g>
                    <text x="115" y="25" className="svg-box-text" fill="var(--color-text)">Global AI API</text>
                  </g>

                  {/* Standard Package Box */}
                  <g transform="translate(115, 200)">
                    <rect x="0" y="0" width="200" height="42" rx="6" fill="#ffffff" stroke="var(--color-border)" strokeWidth="1" />
                    <g transform="translate(15, 11) scale(0.8)">
                      <path d="M19 13H5v-2h14v2z" fill="var(--color-text-muted)" />
                    </g>
                    <text x="115" y="25" className="svg-box-text" fill="var(--color-text)">Standard Package</text>
                  </g>

                  {/* Passive Consumer Box */}
                  <g transform="translate(115, 260)" className="recipient-box">
                    <rect x="0" y="0" width="200" height="42" rx="6" fill="#ffffff" stroke="var(--color-accent)" strokeWidth="1.5" />
                    <g transform="translate(15, 11) scale(0.8)">
                      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z" fill="var(--color-accent)" />
                    </g>
                    <text x="115" y="25" className="svg-box-text" fill="var(--color-text)" fontWeight="700">Passive Consumer</text>
                  </g>

                  {/* Caption */}
                  <text x="215" y="350" className="svg-panel-caption" fill="var(--color-text-muted)">
                    <tspan x="215" dy="0">Casts local actors as recipient endpoints</tspan>
                    <tspan x="215" dy="16">of globally dominant platforms.</tspan>
                  </text>
                </g>

                {/* Author Panel Group */}
                <g className="author-panel-group">
                  {/* Outer border panel */}
                  <rect x="430" y="50" width="310" height="360" rx="10" fill="hsla(38, 40%, 95%, 0.85)" stroke="var(--color-gold)" strokeWidth="1.5" />
                  
                  {/* Headers */}
                  <text x="585" y="90" className="svg-panel-header" fill="var(--color-text-muted)">THE AUTHOR FRAME</text>
                  <text x="585" y="115" className="svg-panel-title" fill="var(--color-text)">Pluriversal Sovereignty</text>

                  {/* Active Co-creators Boxes */}
                  {/* Local Research Nodes Box */}
                  <g transform="translate(485, 140)">
                    <rect x="0" y="0" width="200" height="42" rx="6" fill="#ffffff" stroke="var(--color-border)" strokeWidth="1" />
                    <g transform="translate(15, 11) scale(0.8)">
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.47 18.6l-1.2 1.2L12 22l7.73-2.2-1.2-1.2L12 20.2l-6.53-1.6z" fill="var(--color-accent-blue)" />
                    </g>
                    <text x="115" y="25" className="svg-box-text" fill="var(--color-text)">Local Research Nodes</text>
                  </g>

                  {/* Indigenous Knowledge Box */}
                  <g transform="translate(485, 200)">
                    <rect x="0" y="0" width="200" height="42" rx="6" fill="#ffffff" stroke="var(--color-border)" strokeWidth="1" />
                    <g transform="translate(15, 11) scale(0.8)">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.4z" fill="var(--color-accent-blue)" />
                    </g>
                    <text x="115" y="25" className="svg-box-text" fill="var(--color-text)">Indigenous Knowledge</text>
                  </g>

                  {/* Active Co-creators Box */}
                  <g transform="translate(485, 260)" className="creator-box">
                    <rect x="0" y="0" width="200" height="42" rx="6" fill="#ffffff" stroke="var(--color-accent-green)" strokeWidth="1.5" />
                    <g transform="translate(15, 11) scale(0.8)">
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="var(--color-accent-green)" />
                    </g>
                    <text x="115" y="25" className="svg-box-text" fill="var(--color-text)" fontWeight="700">Active Co-creators</text>
                  </g>

                  {/* Caption */}
                  <text x="585" y="350" className="svg-panel-caption" fill="var(--color-text-muted)">
                    <tspan x="585" dy="0">Empowers communities to direct, adapt,</tspan>
                    <tspan x="585" dy="16">or resist AI trajectories relative to local priorities.</tspan>
                  </text>
                </g>
              </svg>
            </div>

            {/* SECTION 5: CONSTELLATION OF CAPABILITIES (INTERACTIVE) */}
            <div className="visual-section" id="visual-constellation">
              <svg viewBox="0 0 800 600" width="100%" height="100%">
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
                
                <g className="active-constellation" transform="translate(400, 240)">
                  {/* Connecting links that light up active */}
                  <line x1="0" y1="0" x2="0" y2="-180" className="const-link interactive-link l-access" />
                  <line x1="0" y1="0" x2="180" y2="-70" className="const-link interactive-link l-absorptive" />
                  <line x1="0" y1="0" x2="110" y2="150" className="const-link interactive-link l-generative" />
                  <line x1="0" y1="0" x2="-110" y2="150" className="const-link interactive-link l-institutional" />
                  <line x1="0" y1="0" x2="-180" y2="-70" className="const-link interactive-link l-dpi" />
                  
                  {/* Outer boundary constellation ring */}
                  <path d="M 0 -180 L 180 -70 L 110 150 L -110 150 L -180 -70 Z" className="const-outer-boundary" fill="none" stroke="#e4dad0" strokeWidth="1" />
                  
                  {/* Core Node (Glowing Center) */}
                  <g className="const-node core-interactive" filter="url(#shadow-node)">
                    <circle cx="0" cy="0" r="54" className="node-circle core" fill="url(#crimson-core-grad)" />
                    <circle cx="0" cy="0" r="54" className="node-circle-glow" fill="none" stroke="#dc2626" strokeWidth="2.5" opacity="0.5" filter="url(#glow-crimson)" />
                    <text className="node-text core-lbl-1" x="0" y="-4">AI Benefit</text>
                    <text className="node-text core-lbl-2" x="0" y="12">Capacity</text>
                  </g>
                  
                  {/* Node 1: Access */}
                  <g className="const-node outer-interactive n-access" transform="translate(0, -180)" data-node="access">
                    <circle cx="0" cy="0" r="38" className="node-circle outer" fill="url(#node-cream-grad)" stroke="#b28d46" filter="url(#shadow-node)" />
                    <text className="node-text label" x="0" y="4">Access</text>
                    <circle cx="0" cy="0" r="46" className="node-ring" />
                  </g>
                  {/* Node 2: Absorptive */}
                  <g className="const-node outer-interactive n-absorptive" transform="translate(180, -70)" data-node="absorptive">
                    <circle cx="0" cy="0" r="38" className="node-circle outer" fill="url(#node-cream-grad)" stroke="#b28d46" filter="url(#shadow-node)" />
                    <text className="node-text label" x="0" y="4">Absorption</text>
                    <circle cx="0" cy="0" r="46" className="node-ring" />
                  </g>
                  {/* Node 3: Generative */}
                  <g className="const-node outer-interactive n-generative" transform="translate(110, 150)" data-node="generative">
                    <circle cx="0" cy="0" r="38" className="node-circle outer" fill="url(#node-cream-grad)" stroke="#b28d46" filter="url(#shadow-node)" />
                    <text className="node-text label" x="0" y="4">Generative</text>
                    <circle cx="0" cy="0" r="46" className="node-ring" />
                  </g>
                  {/* Node 4: Institutional */}
                  <g className="const-node outer-interactive n-institutional" transform="translate(-110, 150)" data-node="institutional">
                    <circle cx="0" cy="0" r="38" className="node-circle outer" fill="url(#node-cream-grad)" stroke="#b28d46" filter="url(#shadow-node)" />
                    <text className="node-text label" x="0" y="4">Institutions</text>
                    <circle cx="0" cy="0" r="46" className="node-ring" />
                  </g>
                  {/* Node 5: DPI */}
                  <g className="const-node outer-interactive n-dpi" transform="translate(-180, -70)" data-node="dpi">
                    <circle cx="0" cy="0" r="38" className="node-circle outer" fill="url(#node-cream-grad)" stroke="#b28d46" filter="url(#shadow-node)" />
                    <text className="node-text label" x="0" y="4">DPI & Data</text>
                    <circle cx="0" cy="0" r="46" className="node-ring" />
                  </g>
                </g>

                <text x="400" y="40" className="interactive-hint">Tap any node to inspect its function</text>
              </svg>
            </div>

            {/* SECTION 6: AGENCY PATHWAYS */}
            <div className="visual-section" id="visual-agency">
              <svg viewBox="0 0 800 600" width="100%" height="100%">
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
                
                <g className="pathway-tree" transform="translate(0, -50)">
                  {/* Start Root Node */}
                  <g className="path-root" transform="translate(400, 520)">
                    <rect x="-80" y="-20" width="160" height="40" rx="6" className="root-box" fill="#1c3d4a" stroke="#b28d46" strokeWidth="1.5" filter="url(#shadow-node)" />
                    <text x="0" y="5" className="root-text" fill="#fdfbf7">ENCOUNTER WITH AI</text>
                  </g>
                  
                  {/* Diverging elegant organic Bezier curves */}
                  {/* Adopt */}
                  <path d="M 400 500 C 400 380, 150 360, 150 250" className="branch-path path-adopt" fill="none" stroke="#e4dad0" strokeWidth="3" />
                  {/* Adapt */}
                  <path d="M 400 500 C 400 390, 275 330, 275 250" className="branch-path path-adapt" fill="none" stroke="#e4dad0" strokeWidth="3" />
                  {/* Contest */}
                  <path d="M 400 500 C 400 360, 400 360, 400 250" className="branch-path path-contest" fill="none" stroke="#e4dad0" strokeWidth="3" />
                  {/* Co-create */}
                  <path d="M 400 500 C 400 390, 525 330, 525 250" className="branch-path path-cocreate" fill="none" stroke="#e4dad0" strokeWidth="3" />
                  {/* Resist */}
                  <path d="M 400 500 C 400 380, 650 360, 650 250" className="branch-path path-resist" fill="none" stroke="#e4dad0" strokeWidth="3" />

                  {/* End Terminals (Gold circular buttons) */}
                  <g className="path-node term-adopt" transform="translate(150, 250)" data-path="adopt">
                    <circle r="26" className="term-circle" fill="url(#node-cream-grad)" stroke="#b28d46" strokeWidth="2" filter="url(#shadow-node)" />
                    <text y="4" className="term-label">Adopt</text>
                  </g>
                  <g className="path-node term-adapt" transform="translate(275, 250)" data-path="adapt">
                    <circle r="26" className="term-circle" fill="url(#node-cream-grad)" stroke="#b28d46" strokeWidth="2" filter="url(#shadow-node)" />
                    <text y="4" className="term-label">Adapt</text>
                  </g>
                  <g className="path-node term-contest" transform="translate(400, 250)" data-path="contest">
                    <circle r="26" className="term-circle" fill="url(#node-cream-grad)" stroke="#b28d46" strokeWidth="2" filter="url(#shadow-node)" />
                    <text y="4" className="term-label">Contest</text>
                  </g>
                  <g className="path-node term-cocreate" transform="translate(525, 250)" data-path="cocreate">
                    <circle r="26" className="term-circle" fill="url(#node-cream-grad)" stroke="#b28d46" strokeWidth="2" filter="url(#shadow-node)" />
                    <text y="4" className="term-label">Co-create</text>
                  </g>
                  <g className="path-node term-resist" transform="translate(650, 250)" data-path="resist">
                    <circle r="26" className="term-circle" fill="url(#node-cream-grad)" stroke="#b28d46" strokeWidth="2" filter="url(#shadow-node)" />
                    <text y="4" className="term-label">Resist</text>
                  </g>
                </g>
                
                <text x="400" y="40" className="interactive-hint">Tap any pathway terminal to view details</text>
              </svg>
            </div>

            {/* SECTION 7: SAFEGUARDS AND INSTITUTIONS */}
            <div className="visual-section" id="visual-safeguards">
              <svg viewBox="0 0 800 600" width="100%" height="100%" id="svg-safeguards-canvas">
                <defs>
                  <radialGradient id="tech-core-grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fff" />
                    <stop offset="100%" stopColor="#f1ede3" />
                  </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
                
                <g className="safeguards-nested-layers" transform="translate(400, 240) scale(1)">
                  {/* Outer: Social Safeguards */}
                  <circle r="260" className="layer-boundary l-outer" fill="none" stroke="#2d6a4f" strokeWidth="2.5" strokeDasharray="8 6" opacity="0.75" />
                  <text y="-268" className="layer-lbl outer-lbl" fill="#2d6a4f">Social Safeguards & Participatory Oversight</text>
                  
                  {/* Middle: Policies & Regulators */}
                  <circle r="170" className="layer-boundary l-middle" fill="none" stroke="#1c3d4a" strokeWidth="2" strokeDasharray="4 4" opacity="0.8" />
                  <text y="-178" className="layer-lbl middle-lbl" fill="#1c3d4a">Policies, Standards & Regulators</text>
                  
                  {/* Inner: AI Projects & Tech */}
                  <circle r="80" className="layer-boundary l-inner" fill="none" stroke="#e4dad0" strokeWidth="1.5" opacity="0.9" />
                  <text y="-88" className="layer-lbl inner-lbl" fill="#5c564f">AI Technologies</text>

                  {/* Central Core Tech Indicator Box */}
                  <rect x="-35" y="-14" width="70" height="28" rx="6" className="tech-box" fill="url(#tech-core-grad)" stroke="#b28d46" strokeWidth="1.5" filter="url(#shadow-node)" />
                  <text y="5" className="tech-text" fill="#1c3d4a">PROJECT</text>

                  {/* Dynamic Risk Particles & Ripple Waves */}
                  <g className="deflecting-risks">
                    {/* Deflection Ripples (drawn when hits) */}
                    <circle cx="-212" cy="-76" r="0" className="ripple-ring ripple-r1" fill="none" stroke="#2d6a4f" strokeWidth="2" opacity="0" />
                    <circle cx="140" cy="90" r="0" className="ripple-ring ripple-r2" fill="none" stroke="#1c3d4a" strokeWidth="2" opacity="0" />

                    {/* Risk 1: Gets blocked/deflected by outer layer */}
                    <circle cx="-280" cy="-100" r="7" className="risk-dot r1" fill="#dc2626" filter="url(#glow-crimson)" />
                    <path d="M -280 -100 L -212 -76 L -260 -130" className="risk-trajectory rt1" fill="none" />
                    <text x="-210" y="-95" className="deflect-label dl1">Harm Deflected by Safeguards</text>

                    {/* Risk 2: Gets managed/deflected by middle regulatory layer */}
                    <circle cx="280" cy="180" r="7" className="risk-dot r2" fill="#dc2626" filter="url(#glow-crimson)" />
                    <path d="M 280 180 L 140 90 L 200 30" className="risk-trajectory rt2" fill="none" />
                    <text x="130" y="115" className="deflect-label dl2">Regulated & Corrected</text>

                    {/* Risk 3: Safe Integration into Center */}
                    <circle cx="0" cy="-280" r="7" className="risk-dot r3" fill="#2d6a4f" filter="url(#glow-gold)" />
                    <path d="M 0 -280 L 0 -14" className="risk-trajectory rt3" fill="none" />
                  </g>
                </g>
              </svg>
            </div>

            {/* SECTION 8: PLURIVERSAL CLOSING */}
            <div className="visual-section" id="visual-closing">
              <svg viewBox="0 0 800 600" width="100%" height="100%">
                <defs>
                  <linearGradient id="sun-gradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.8" />
                    <stop offset="40%" stopColor="#fde68a" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#fdfbf7" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="hill-1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#faf6ee" />
                    <stop offset="100%" stopColor="#f5ede0" />
                  </linearGradient>
                  <linearGradient id="hill-2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f4e9db" />
                    <stop offset="100%" stopColor="#eadaaf" />
                  </linearGradient>
                </defs>
                
                <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3" />
                
                {/* Radiating Sunrise representing the future */}
                <circle cx="400" cy="240" r="140" fill="url(#sun-gradient)" filter="url(#glow-gold)" />
                
                {/* Curved organic paths stretching to the horizon */}
                <path d="M 400 600 C 400 480, 200 450, 100 340" className="future-path" stroke="#b28d46" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M 400 600 C 400 450, 300 400, 250 340" className="future-path" stroke="#b28d46" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M 400 600 C 400 400, 400 400, 400 340" className="future-path" stroke="#b28d46" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M 400 600 C 400 450, 500 400, 550 340" className="future-path" stroke="#b28d46" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M 400 600 C 400 480, 600 450, 700 340" className="future-path" stroke="#b28d46" strokeWidth="1.5" fill="none" opacity="0.6" />
                
                {/* Overlapping Editorial Vector Hills */}
                <path d="M -50 450 C 150 380, 280 430, 420 460 C 560 490, 660 410, 850 460 L 850 600 L -50 600 Z" fill="url(#hill-1)" stroke="#e4dad0" strokeWidth="1" />
                <path d="M -50 500 C 120 450, 310 440, 480 500 C 650 560, 720 490, 850 515 L 850 600 L -50 600 Z" fill="url(#hill-2)" stroke="#d3c8bc" strokeWidth="1.5" />
                
                {/* Stylized landscape future tags */}
                <g className="future-labels" opacity="0.9">
                  <rect x="52" y="305" width="96" height="24" rx="12" fill="#fff" stroke="#e4dad0" filter="url(#shadow-node)" />
                  <text x="100" y="321" className="landscape-tag" fill="#1c3d4a">Indigenous AI</text>
                  
                  <rect x="202" y="295" width="96" height="24" rx="12" fill="#fff" stroke="#e4dad0" filter="url(#shadow-node)" />
                  <text x="250" y="311" className="landscape-tag" fill="#1c3d4a">Local Adaptation</text>
                  
                  <rect x="352" y="285" width="96" height="24" rx="12" fill="#fff" stroke="#e4dad0" filter="url(#shadow-node)" />
                  <text x="400" y="301" className="landscape-tag" fill="#b28d46">Sovereign DPI</text>
                  
                  <rect x="502" y="295" width="96" height="24" rx="12" fill="#fff" stroke="#e4dad0" filter="url(#shadow-node)" />
                  <text x="550" y="311" className="landscape-tag" fill="#1c3d4a">Participatory</text>
                  
                  <rect x="652" y="305" width="96" height="24" rx="12" fill="#fff" stroke="#e4dad0" filter="url(#shadow-node)" />
                  <text x="700" y="321" className="landscape-tag" fill="#2d6a4f">Resistant Paths</text>
                </g>
              </svg>
            </div>

          </div>
        </div>

        {/* Scrollable narrative textual content */}
        <div className="scroll-narrative">
          
          {/* STEP 1.1 */}
          <section className="step" data-step="hero-monolith">
            <div className="step-card">
              <span className="step-tag">Narrative / 01</span>
              <h2 className="step-heading">The Myth of the Monolith</h2>
              <p>Policy debates surrounding artificial intelligence frequently treat the <strong>“capacity to benefit from AI” as a single monolithic variable</strong>—a solid stock of technological infrastructure, digital skills, or institutional capability that can be linearly accumulated through capital investment and standard training.</p>
            </div>
          </section>

          {/* STEP 1.2 */}
          <section className="step" data-step="hero-split">
            <div className="step-card">
              <span className="step-tag">Narrative / 02</span>
              <h2 className="step-heading">A Constellation of Capabilities</h2>
              <p>However, this report shows that AI capacity is <strong>not a monolith</strong>. The idea that a country has a single capacity score is under severe strain.</p>
              <p>True capacity is best understood as a <strong>constellation of distinct, interacting dimensions</strong>. When we look past the monolithic block, we discover a complex ecosystem of capabilities.</p>
            </div>
          </section>

          {/* STEP 2.1 */}
          <section className="step" data-step="access-intro">
            <div className="step-card">
              <span className="step-tag">Access / 03</span>
              <h2 className="step-heading">Access is the Door</h2>
              <p>The first and most elementary dimension of the capacity constellation is <strong>Access to AI Resources</strong>. This represents the basic prerequisite: connectivity, computing hardware, AI models, and available datasets. Without access, no other capacity can be exercised.</p>
            </div>
          </section>

          {/* STEP 2.2 */}
          <section className="step" data-step="access-split">
            <div className="step-card">
              <span className="step-tag">Access / 04</span>
              <h2 className="step-heading">The Three Panels of Access</h2>
              <p>Access is divided into three key panels: <strong>Connectivity & Hardware</strong> (networks, servers), <strong>Models & Tools</strong> (open-source models, API platforms), and <strong>Data Assets</strong> (high-quality local datasets).</p>
              <p>Providing access reduces initial entry barriers and pushes back against the extreme concentration of AI capabilities in a few global tech hubs.</p>
            </div>
          </section>

          {/* STEP 2.3 */}
          <section className="step" data-step="access-insufficient">
            <div className="step-card">
              <span className="step-tag">Access / 05</span>
              <h2 className="step-heading">Access is Not the Room</h2>
              <p>But physical and digital access is <strong>necessary but entirely insufficient</strong>. Access is merely the threshold—it opens the door to AI, but it does not determine whether communities can build in, furnish, or transform that room in ways that reflect their own priorities.</p>
            </div>
          </section>

          {/* STEP 3.1 */}
          <section className="step" data-step="absorptive-intro">
            <div className="step-card">
              <span className="step-tag">Absorption / 06</span>
              <h2 className="step-heading">Entering the Pipeline</h2>
              <p>To turn raw access into actual value, an ecosystem needs <strong>Absorptive Capacity</strong>. This is the organizational and societal capability to <strong>recognize</strong> the value of external AI knowledge, <strong>assimilate</strong> it into local routines, and <strong>apply</strong> it productively.</p>
            </div>
          </section>

          {/* STEP 3.2 */}
          <section className="step" data-step="absorptive-pipeline">
            <div className="step-card">
              <span className="step-tag">Absorption / 07</span>
              <h2 className="step-heading">The Three-Step Flow</h2>
              <p>Absorption works as a dynamic pipeline. <strong>Recognizing</strong> filters the signals; <strong>assimilating</strong> integrates AI with existing infrastructure; <strong>applying</strong> deploys it. This pipeline relies heavily on prior knowledge, R&D systems, and persistent feedback loops of learning.</p>
            </div>
          </section>

          {/* STEP 4.1 */}
          <section className="step" data-step="critique-receiver">
            <div className="step-card">
              <span className="step-tag">Critique / 08</span>
              <h2 className="step-heading">The Trap of the Receiver Frame</h2>
              <p>Standard policy frameworks suffer from <strong>exogenous bias</strong> by treating "absorptive capacity" as the ultimate target. By framing capacity solely as the ability to absorb, local actors are reduced to passive <strong>receivers</strong> of globally dominant, pre-packaged AI solutions.</p>
            </div>
          </section>

          {/* STEP 4.2 */}
          <section className="step" data-step="critique-author">
            <div className="step-card">
              <span className="step-tag">Critique / 09</span>
              <h2 className="step-heading">Becoming Authors</h2>
              <p>An absorption-only frame <strong>neglects pluriversal futures</strong> and underplays <strong>indigenous and generative capabilities</strong>. Rather than just receiving external tech, capacity must include the capability to be <strong>authors</strong> of local innovation, using local languages, values, and agricultural/medical priorities.</p>
            </div>
          </section>

          {/* STEP 5.1 */}
          <section className="step" data-step="constellation-interactive">
            <div className="step-card">
              <span className="step-tag">Constellation / 10</span>
              <h2 className="step-heading">The Full Landscape</h2>
              <p>AI capacity is therefore best understood as a multi-dimensional constellation. <strong>Access</strong> feeds into <strong>Absorption</strong>, which interacts with <strong>Generative</strong> nodes. Both are anchored by <strong>Institutional safeguards</strong> and built on robust <strong>Digital Public Infrastructure (DPI) & data ecosystems</strong>.</p>
              <p className="desktop-only"><em>Interact with the graphic on the left by hovering or clicking the nodes to see details.</em></p>
              <p className="mobile-only"><em>Tap the nodes in the graphic above to inspect their unique roles.</em></p>
            </div>
          </section>

          {/* STEP 6.1 */}
          <section className="step" data-step="agency-intro">
            <div className="step-card">
              <span className="step-tag">Agency / 11</span>
              <h2 className="step-heading">Pluriversal Pathways</h2>
              <p>In a <strong>pluriversal framing</strong>, there is no single "correct" trajectory of AI progress. Development is plural. Communities must have the sovereignty and agency to choose how they engage with AI.</p>
            </div>
          </section>

          {/* STEP 6.2 */}
          <section className="step" data-step="agency-paths">
            <div className="step-card">
              <span className="step-tag">Agency / 12</span>
              <h2 className="step-heading">Choosing, Adapting, Resisting</h2>
              <p>True capacity includes the power to <strong>Adopt</strong> global models, <strong>Adapt</strong> them locally, <strong>Contest</strong> algorithmic biases, <strong>Co-create</strong> custom systems, or even strictly <strong>Resist</strong> harmful technologies.</p>
              <p className="hud-tip"><em>Hover or tap the path terminals in the diagram to inspect vignettes of these pathways.</em></p>
            </div>
          </section>

          {/* STEP 7.1 */}
          <section className="step" data-step="safeguards-layers">
            <div className="step-card">
              <span className="step-tag">Safeguards / 13</span>
              <h2 className="step-heading">Layers of Governance</h2>
              <p>How do we translate raw access and absorption into just, rights-respecting outcomes? This requires <strong>Institutional and Safeguarding capacities</strong>.</p>
              <p>Instead of viewing safeguards as bureaucratic blockers, they are enabling shields that surround AI technology with policies, regulatory enforcement, and public participation.</p>
            </div>
          </section>

          {/* STEP 7.2 */}
          <section className="step" data-step="safeguards-deflect">
            <div className="step-card">
              <span className="step-tag">Safeguards / 14</span>
              <h2 className="step-heading">Deflecting Harm</h2>
              <p>As we zoom out, we see these outer safeguarding layers intercepting and mitigating risks (such as data exploitation or bias) before they hit the core project, ensuring local communities benefit safely.</p>
            </div>
          </section>

          {/* STEP 8.1 */}
          <section className="step" data-step="closing-view">
            <div className="step-card">
              <span className="step-tag">Conclusion / 15</span>
              <h2 className="step-heading">Plural AI Futures</h2>
              <p>The capacity to benefit from AI lies in connected, generative, safeguarded ecosystems that enable societies to choose, contest, and co-create their own trajectories.</p>
              <p>By moving past monolithic rankings and absorption metrics, we open the horizon to a pluriverse of technical and human progress.</p>
            </div>
          </section>

          {/* STEP 8.2 */}
          <section className="step text-only-step" id="closing-credits">
            <div className="step-card closing-card">
              <h2 className="closing-quote">
                “The capacity to benefit from AI lies in ecosystems that can selectively absorb, critically evaluate, and generatively transform AI in line with pluriversal futures.”
              </h2>
              <p className="closing-byline">Absorptive Capacity, Access, and Constellations of AI Capability (2026)</p>
              
              <div className="closing-actions">
                <button id="restart-btn" className="editorial-btn">Restart Narrative</button>
              </div>
            </div>
          </section>

        </div>

      </main>

      <footer className="editorial-footer">
        <div className="footer-content">
          <p>&copy; 2026 AI Capacity Narrative Project. Built with standard-compliant Scroll-Driven CSS & premium web interactions.</p>
        </div>
      </footer>

      {/* Interactive Details HUD overlays (Global Overlays) */}
      <div className="node-hud-card" id="constellation-hud">
        <button className="hud-close">×</button>
        <h3 className="hud-title">Select a Dimension</h3>
        <p className="hud-desc">Tap on any outer capability node to explore how it contributes to the overarching AI capacity constellation.</p>
        <div className="hud-example"></div>
      </div>

      <div className="vignette-hud-card" id="agency-hud">
        <button className="hud-close">×</button>
        <h3 className="hud-title">Select a Pathway</h3>
        <p className="hud-desc">In a pluriversal framing, communities choose how they interact with technology. Explore the distinct paths.</p>
      </div>
    </>
  );
}
