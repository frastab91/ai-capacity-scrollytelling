import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Scoped selection via containerRef
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    });

    // 1. Shake and Crack Drawing (First 45% of scroll)
    // Draw cracks and fade in inner fragment seams
    tl.to('.crack-path', {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'power1.inOut'
    }, 0)
    .to('.monolith-block', {
      strokeOpacity: 1,
      duration: 0.4,
      ease: 'power1.inOut'
    }, 0);

    // Deterministic wiggling/shaking of the monolith
    tl.to('.hero-monolith-shake-wrapper', { x: -4, y: 3, rotation: -0.6, duration: 0.05 }, 0.05)
      .to('.hero-monolith-shake-wrapper', { x: 4, y: -2, rotation: 0.5, duration: 0.05 }, 0.10)
      .to('.hero-monolith-shake-wrapper', { x: -3, y: -3, rotation: -0.8, duration: 0.05 }, 0.15)
      .to('.hero-monolith-shake-wrapper', { x: 3, y: 4, rotation: 0.7, duration: 0.05 }, 0.20)
      .to('.hero-monolith-shake-wrapper', { x: -4, y: 2, rotation: -0.5, duration: 0.05 }, 0.25)
      .to('.hero-monolith-shake-wrapper', { x: 4, y: -3, rotation: 0.6, duration: 0.05 }, 0.30)
      .to('.hero-monolith-shake-wrapper', { x: -2, y: 3, rotation: -0.3, duration: 0.05 }, 0.35)
      .to('.hero-monolith-shake-wrapper', { x: 2, y: -2, rotation: 0.3, duration: 0.05 }, 0.40)
      .to('.hero-monolith-shake-wrapper', { x: 0, y: 0, rotation: 0, duration: 0.05 }, 0.45);

    // 2. Implosion & Fragment Translation (starts at 45% of scroll)
    tl.to('.frag-top', { x: -40, y: -160, rotation: -20, opacity: 0, scale: 0.4, duration: 0.35 }, 0.45)
      .to('.frag-right', { x: 160, y: -40, rotation: 25, opacity: 0, scale: 0.4, duration: 0.35 }, 0.45)
      .to('.frag-bottom', { x: 40, y: 160, rotation: 20, opacity: 0, scale: 0.4, duration: 0.35 }, 0.45)
      .to('.frag-left', { x: -160, y: 40, rotation: -25, opacity: 0, scale: 0.4, duration: 0.35 }, 0.45)
      .to('.monolith-inner, .monolith-outer-border, .monolith-label, .monolith-sublabel, .crack-path', { opacity: 0, scale: 0.5, duration: 0.25 }, 0.45);

    // 3. Emerge Constellation (starts at 50% scroll)
    tl.to('.emerging-constellation', {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out'
    }, 0.50);

    // Animate drawing the constellation links
    tl.fromTo('.const-link', 
      { strokeDashoffset: 60, opacity: 0 }, 
      { strokeDashoffset: 0, opacity: 0.6, duration: 0.35, stagger: 0.05 }, 
      0.55
    );

    // 4. Text Header "NOT" dynamic expansion (starts at 75% scroll)
    tl.to('.not-span', {
      width: '80px',
      opacity: 1,
      margin: '0 8px',
      duration: 0.3,
      ease: 'power2.out'
    }, 0.75);

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="scrolly-container hero-scrolly-section" style={{ minHeight: '200vh' }}>
      
      {/* Sticky Graphic Pane */}
      <div className="sticky-graphic">
        <div className="graphic-wrapper">
          <svg viewBox="0 0 800 600" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e4dad0" strokeWidth="0.5" />
              </pattern>
              
              <filter id="shadow-monolith" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="15" stdDeviation="20" floodColor="#0f172a" floodOpacity="0.2" />
              </filter>
              <filter id="shadow-node" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#5c4a3c" floodOpacity="0.1" />
              </filter>

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
              <g className="hero-monolith-group" transform="translate(400, 300) scale(2.35)">
                
                {/* 4 Distinct SVG Polygons/Paths that form the monolith */}
                 <path className="monolith-block frag-top" d="M 0 0 L -115 -103 C -115 -109.6 -109.6 -115 -103 -115 L 103 -115 C 109.6 -115 115 -109.6 115 -103 Z" fill="url(#monolith-metal)" stroke="url(#gold-glow-grad)" strokeWidth="2.5" strokeOpacity={0} filter="url(#shadow-monolith)" />
                 <path className="monolith-block frag-right" d="M 0 0 L 115 -103 L 115 103 C 115 109.6 109.6 115 103 115 Z" fill="url(#monolith-metal)" stroke="url(#gold-glow-grad)" strokeWidth="2.5" strokeOpacity={0} filter="url(#shadow-monolith)" />
                 <path className="monolith-block frag-bottom" d="M 0 0 L 103 115 L -103 115 C -109.6 115 -115 109.6 -115 103 Z" fill="url(#monolith-metal)" stroke="url(#gold-glow-grad)" strokeWidth="2.5" strokeOpacity={0} filter="url(#shadow-monolith)" />
                 <path className="monolith-block frag-left" d="M 0 0 L -115 103 L -115 -103 Z" fill="url(#monolith-metal)" stroke="url(#gold-glow-grad)" strokeWidth="2.5" strokeOpacity={0} filter="url(#shadow-monolith)" />

                 <rect className="monolith-outer-border" x="-115" y="-115" width="230" height="230" rx="12" fill="none" stroke="url(#gold-glow-grad)" strokeWidth="2.5" opacity="0.8" style={{ pointerEvents: 'none' }} />
                 <rect className="monolith-inner" x="-100" y="-100" width="200" height="200" rx="8" fill="none" stroke="rgba(245, 158, 11, 0.15)" strokeWidth="1.5" style={{ pointerEvents: 'none' }} />
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
              <circle cx="400" cy="300" r="65" className="node-circle core" fill="url(#crimson-core-grad)" filter="url(#shadow-node)" />
              <circle cx="400" cy="300" r="65" className="node-circle-glow" fill="none" stroke="#dc2626" strokeWidth="2" filter="url(#glow-crimson)" opacity="0.6" />
              <text className="node-text core-lbl-1" x="400" y="295">Capacity to Benefit</text>
              <text className="node-text core-lbl-2" x="400" y="312">from AI</text>
              
              {/* Outer Nodes */}
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
      </div>

      {/* Scrollable narrative textual content */}
      <div className="scroll-narrative">
        
        {/* STEP 1.1 */}
        <section className="step" data-step="hero-monolith">
          <div className="step-card">
            <span className="step-tag">01</span>
            <h2 className="step-heading">The Myth of the Monolith</h2>
            <p>Policy debates surrounding artificial intelligence frequently treat the <strong>“capacity to benefit from AI” as a single monolithic variable</strong>—a solid stock of technological infrastructure, digital skills, or institutional capability that can be linearly accumulated through capital investment and standard training.</p>
          </div>
        </section>

        {/* STEP 1.2 */}
        <section className="step" data-step="hero-split">
          <div className="step-card">
            <span className="step-tag">02</span>
            <h2 className="step-heading" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
              AI Capacity Is{' '}
              <span 
                className="not-span" 
                style={{ 
                  display: 'inline-block', 
                  width: 0, 
                  opacity: 0, 
                  overflow: 'hidden', 
                  whiteSpace: 'nowrap', 
                  color: 'var(--color-accent)',
                  paddingRight: '6px', 
                  fontWeight: '800' 
                }}
              >
                NOT
              </span>{' '}
              a Monolith
            </h2>
            <p>However, this report shows that AI capacity is <strong>not a monolith</strong>. The idea that a country has a single capacity score is under severe strain.</p>
            <p>True capacity is best understood as a <strong>constellation of distinct, interacting dimensions</strong>. When we look past the monolithic block, we discover a complex ecosystem of capabilities.</p>
          </div>
        </section>

      </div>
    </div>
  );
}
