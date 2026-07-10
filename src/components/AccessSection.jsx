import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function AccessSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    });

    // Initial state: Door panels are in the center, glow classes are removed, room is hidden/scaled down.
    // 1. Sequential Door Splitting (First 60% of scroll)
    // Panel 1: Connectivity & Hardware slides top-left (time: 0.05 to 0.3)
    tl.to('.connectivity-panel', {
      x: -85,
      y: -75,
      scale: 0.9,
      duration: 0.25,
      ease: 'power1.out'
    }, 0.05);
    tl.to('.connectivity-panel', { className: '+=active', duration: 0.05 }, 0.1);

    // Panel 2: Models & Tools slides right (time: 0.2 to 0.45)
    tl.to('.models-panel', {
      x: 85,
      scale: 0.9,
      duration: 0.25,
      ease: 'power1.out'
    }, 0.2);
    tl.to('.models-panel', { className: '+=active', duration: 0.05 }, 0.25);

    // Panel 3: Data Assets slides bottom-left (time: 0.35 to 0.6)
    tl.to('.data-panel', {
      x: -85,
      y: 75,
      scale: 0.9,
      duration: 0.25,
      ease: 'power1.out'
    }, 0.35);
    tl.to('.data-panel', { className: '+=active', duration: 0.05 }, 0.4);

    // 2. Door Receding & Room Wireframe Zoom In (from 60% to 100% scroll)
    tl.to('.door-frame-group', {
      scale: 0.65,
      opacity: 0.1,
      duration: 0.4,
      ease: 'power1.inOut'
    }, 0.6)
    .to('.door-panels', {
      scale: 0.65,
      opacity: 0.1,
      duration: 0.4,
      ease: 'power1.inOut'
    }, 0.6)
    .to('.room-wireframe', {
      opacity: 1,
      scale: 1.25,
      duration: 0.4,
      ease: 'power1.inOut'
    }, 0.6);

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="scrolly-container access-scrolly-section" style={{ minHeight: '300vh' }}>
      
      {/* Sticky Graphic Pane */}
      <div className="sticky-graphic">
        <div className="graphic-wrapper">
          <svg viewBox="0 0 800 600" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e4dad0" stroke-width="0.5" />
              </pattern>
              
              <filter id="shadow-monolith" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="15" stdDeviation="20" flood-color="#0f172a" flood-opacity="0.2" />
              </filter>
              <filter id="shadow-node" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#5c4a3c" flood-opacity="0.1" />
              </filter>

              <filter id="glow-gold" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id="portal-glow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fef3c7" stop-opacity="0.8" />
                <stop offset="50%" stop-color="#fae8ff" stop-opacity="0.4" />
                <stop offset="100%" stop-color="#fdfbf7" stop-opacity="0" />
              </linearGradient>
              <linearGradient id="glass-pane-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="rgba(255, 255, 255, 0.4)" />
                <stop offset="100%" stop-color="rgba(253, 251, 247, 0.15)" />
              </linearGradient>
            </defs>
            
            <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
            
            {/* Glowing room portal behind the door */}
            <g className="room-wireframe" opacity="0" transform="translate(400, 300) scale(0.6)">
              {/* Light Rays radiating from center */}
              <path d="M 0 0 L -350 -250 M 0 0 L 350 -250 M 0 0 L -350 250 M 0 0 L 350 250" stroke="#fcd34d" stroke-width="0.8" opacity="0.3" />
              <polygon points="-80,-80 80,-80 140,140 -140,140" fill="url(#portal-glow)" />
              
              {/* Receding Grid Perspective lines */}
              <line x1="-300" y1="-200" x2="-80" y2="-80" className="room-line" />
              <line x1="300" y1="-200" x2="80" y2="-80" className="room-line" />
              <line x1="-300" y1="200" x2="-80" y2="80" className="room-line" />
              <line x1="300" y1="200" x2="80" y2="80" className="room-line" />
              
              {/* Back wall frame */}
              <rect x="-80" y="-80" width="160" height="160" className="room-back-wall" fill="#fefdfa" stroke="#e4dad0" />
              {/* Bare, stylized outline table/chair */}
              <path d="M -30 20 L 30 20 L 25 50 M -25 20 L -25 50 M -5 20 L -5 35 M 5 20 L 5 35" className="room-line" stroke-width="1.5" stroke="#b28d46" />
              <text x="0" y="-20" className="room-label">Access opens the door. But the room is empty.</text>
            </g>

            {/* Decorative Door Frame */}
            <g className="door-frame-group" transform="translate(400, 300)">
              <rect className="door-frame" x="-92" y="-172" width="184" height="344" fill="none" stroke="#1c3d4a" stroke-width="4.5" />
              <rect className="door-frame-inner" x="-88" y="-168" width="176" height="336" fill="none" stroke="#b28d46" stroke-width="1.5" />
            </g>

            {/* Splitting Door Panels (Frosted Glass Panels with gold frames & custom icons) */}
            <g className="door-panels" transform="translate(400, 300)">
              {/* Panel 1: Connectivity & Hardware (Top Panel) */}
              <g className="door-panel connectivity-panel" transform="translate(0, 0)">
                <rect className="panel-rect" x="-84" y="-164" width="168" height="104" rx="6" fill="url(#glass-pane-grad)" stroke="rgba(28, 61, 74, 0.15)" stroke-width="1.5" />
                <rect className="panel-border-glow" x="-84" y="-164" width="168" height="104" rx="6" fill="none" stroke="#b28d46" stroke-width="2" style={{ opacity: 0 }} />
                
                {/* Connectivity Radar Icon */}
                <path d="M -15 -118 A 12 12 0 0 1 15 -118 M -22 -125 A 22 22 0 0 1 22 -125 M -5 -108 A 4 4 0 0 1 5 -108" className="panel-icon" />
                <circle cx="0" cy="-105" r="2.5" fill="#b28d46" />
                <text className="panel-text" x="0" y="-72">CONNECTIVITY & HARDWARE</text>
              </g>

              {/* Panel 2: Models & Tools (Middle Panel) */}
              <g className="door-panel models-panel" transform="translate(0, 0)">
                <rect className="panel-rect" x="-84" y="-52" width="168" height="104" rx="6" fill="url(#glass-pane-grad)" stroke="rgba(28, 61, 74, 0.15)" stroke-width="1.5" />
                <rect className="panel-border-glow" x="-84" y="-52" width="168" height="104" rx="6" fill="none" stroke="#b28d46" stroke-width="2" style={{ opacity: 0 }} />
                
                {/* Neural Network Lattice Icon */}
                <line x1="-15" y1="-5" x2="0" y2="-20" stroke="rgba(28, 61, 74, 0.3)" stroke-width="1.5" />
                <line x1="15" y1="-5" x2="0" y2="-20" stroke="rgba(28, 61, 74, 0.3)" stroke-width="1.5" />
                <line x1="-15" y1="-5" x2="15" y2="-5" stroke="rgba(28, 61, 74, 0.3)" stroke-width="1.5" />
                <line x1="-15" y1="-5" x2="0" y2="10" stroke="rgba(28, 61, 74, 0.3)" stroke-width="1.5" />
                <line x1="15" y1="-5" x2="0" y2="10" stroke="rgba(28, 61, 74, 0.3)" stroke-width="1.5" />
                <circle cx="-15" cy="-5" r="4.5" className="panel-icon-node" fill="#b28d46" />
                <circle cx="15" cy="-5" r="4.5" className="panel-icon-node" fill="#b28d46" />
                <circle cx="0" cy="-20" r="4.5" className="panel-icon-node" fill="#1c3d4a" />
                <circle cx="0" cy="10" r="4.5" className="panel-icon-node" fill="#1c3d4a" />
                <text className="panel-text" x="0" y="40">MODELS & TOOLS</text>
              </g>

              {/* Panel 3: Data Ecosystems (Bottom Panel) */}
              <g className="door-panel data-panel" transform="translate(0, 0)">
                <rect className="panel-rect" x="-84" y="60" width="168" height="104" rx="6" fill="url(#glass-pane-grad)" stroke="rgba(28, 61, 74, 0.15)" stroke-width="1.5" />
                <rect className="panel-border-glow" x="-84" y="60" width="168" height="104" rx="6" fill="none" stroke="#b28d46" stroke-width="2" style={{ opacity: 0 }} />
                
                {/* Database Cylinder stack Icon */}
                <path d="M -15 95 C -15 91 15 91 15 95 C 15 99 -15 99 -15 95 M -15 95 L -15 107 C -15 111 15 111 15 107 L 15 95 M -15 107 L -15 119 C -15 123 15 123 15 119 L 15 107 M -15 101 C -15 105 15 105 15 101 M -15 113 C -15 117 15 117 15 113" className="panel-icon" />
                <text className="panel-text" x="0" y="152">DATA ASSETS</text>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Scrollable narrative textual content */}
      <div className="scroll-narrative">
        
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

      </div>
    </div>
  );
}
