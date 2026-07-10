import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const SafeguardsSection = ({ isActive }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Set initial GSAP states (overrides CSS transitions during scroll trigger animation)
    gsap.set('.safeguards-nested-layers', { scale: 2.8 });
    gsap.set('.risk-dot.r1', { attr: { cx: -280, cy: -100 }, opacity: 0.8 });
    gsap.set('.risk-dot.r2', { attr: { cx: 280, cy: 180 }, opacity: 0.8 });
    gsap.set('.risk-dot.r3', { attr: { cx: 0, cy: -280 }, opacity: 0.8 });
    gsap.set('.ripple-r1', { attr: { r: 0 }, opacity: 0 });
    gsap.set('.ripple-r2', { attr: { r: 0 }, opacity: 0 });
    gsap.set('.deflect-label.dl1', { opacity: 0 });
    gsap.set('.deflect-label.dl2', { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.step[data-step="safeguards-layers"]',
        start: 'top 75%',
        end: 'bottom 15%',
        scrub: 0.5,
      }
    });

    // 1. Zoom out nested layers
    tl.to('.safeguards-nested-layers', {
      scale: 1.0,
      duration: 2.0,
      ease: 'power1.inOut'
    }, 0)

    // 2. Risk 1 deflection sequence (hits outer layer at t=0.7)
    .to('.risk-dot.r1', {
      attr: { cx: -212, cy: -76 },
      duration: 0.7,
      ease: 'none'
    }, 0.1)
    .to('.risk-dot.r1', {
      attr: { cx: -260, cy: -130 },
      duration: 0.5,
      ease: 'power1.out',
      onStart: () => {
        document.querySelector('.risk-dot.r1')?.classList.add('deflected');
      },
      onReverseComplete: () => {
        document.querySelector('.risk-dot.r1')?.classList.remove('deflected');
      }
    }, 0.8)
    .to('.ripple-r1', {
      attr: { r: 50 },
      opacity: 0.8,
      duration: 0.5,
      ease: 'power1.out'
    }, 0.8)
    .to('.ripple-r1', {
      opacity: 0,
      duration: 0.2
    }, 1.3)
    .to('.deflect-label.dl1', {
      opacity: 1,
      duration: 0.3
    }, 0.8)

    // 3. Risk 2 deflection sequence (hits middle layer at t=0.9)
    .to('.risk-dot.r2', {
      attr: { cx: 140, cy: 90 },
      duration: 0.9,
      ease: 'none'
    }, 0.1)
    .to('.risk-dot.r2', {
      attr: { cx: 200, cy: 30 },
      duration: 0.5,
      ease: 'power1.out',
      onStart: () => {
        document.querySelector('.risk-dot.r2')?.classList.add('deflected');
      },
      onReverseComplete: () => {
        document.querySelector('.risk-dot.r2')?.classList.remove('deflected');
      }
    }, 1.0)
    .to('.ripple-r2', {
      attr: { r: 50 },
      opacity: 0.8,
      duration: 0.5,
      ease: 'power1.out'
    }, 1.0)
    .to('.ripple-r2', {
      opacity: 0,
      duration: 0.2
    }, 1.5)
    .to('.deflect-label.dl2', {
      opacity: 1,
      duration: 0.3
    }, 1.0)

    // 4. Risk 3 safe integration sequence
    .to('.risk-dot.r3', {
      attr: { cx: 0, cy: -14 },
      duration: 1.3,
      ease: 'none'
    }, 0.2)

    // 5. Fade out all risks at the end of scroll
    .to('.risk-dot', {
      opacity: 0,
      duration: 0.3
    }, 1.7);

  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className={`visual-section ${isActive ? 'active' : ''}`} 
      id="visual-safeguards"
    >
      <svg viewBox="0 0 800 600" width="100%" height="100%" id="svg-safeguards-canvas">
        <defs>
          <pattern id="grid-safeguards" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e4dad0" strokeWidth="0.5" />
          </pattern>
          
          <radialGradient id="tech-core-grad-safeguards" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#f1ede3" />
          </radialGradient>

          <filter id="shadow-node-safeguards" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#5c4a3c" floodOpacity="0.1" />
          </filter>

          <filter id="glow-crimson-safeguards" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="glow-gold-safeguards" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid-safeguards)" opacity="0.5" />
        
        <g className="safeguards-nested-layers" transform="translate(400, 240) scale(1)">
          {/* Outer: Social Safeguards */}
          <circle r="260" className="layer-boundary l-outer" fill="none" stroke="#2d6a4f" strokeWidth="2.5" strokeDasharray="8 6" opacity="0.75" />
          <text y="-268" className="layer-lbl outer-lbl" fill="#2d6a4f" style={{ fontFamily: 'var(--font-sans)', fontSize: '8px', fontWeight: '700', textAnchor: 'middle', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Social Safeguards & Participatory Oversight
          </text>
          
          {/* Middle: Policies & Regulators */}
          <circle r="170" className="layer-boundary l-middle" fill="none" stroke="#1c3d4a" strokeWidth="2" strokeDasharray="4 4" opacity="0.8" />
          <text y="-178" className="layer-lbl middle-lbl" fill="#1c3d4a" style={{ fontFamily: 'var(--font-sans)', fontSize: '8px', fontWeight: '700', textAnchor: 'middle', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Policies, Standards & Regulators
          </text>
          
          {/* Inner: AI Projects & Tech */}
          <circle r="80" className="layer-boundary l-inner" fill="none" stroke="#e4dad0" strokeWidth="1.5" opacity="0.9" />
          <text y="-88" className="layer-lbl inner-lbl" fill="#5c564f" style={{ fontFamily: 'var(--font-sans)', fontSize: '8px', fontWeight: '700', textAnchor: 'middle', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            AI Technologies
          </text>

          {/* Central Core Tech Indicator Box */}
          <rect x="-35" y="-14" width="70" height="28" rx="6" className="tech-box" fill="url(#tech-core-grad-safeguards)" stroke="#b28d46" strokeWidth="1.5" filter="url(#shadow-node-safeguards)" />
          <text y="5" className="tech-text" fill="#1c3d4a" textAnchor="middle" style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', fontWeight: '700', letterSpacing: '0.08em' }}>
            PROJECT
          </text>

          {/* Dynamic Risk Particles & Ripple Waves */}
          <g className="deflecting-risks">
            {/* Deflection Ripples */}
            <circle cx="-212" cy="-76" r="0" className="ripple-ring ripple-r1" fill="none" stroke="#2d6a4f" strokeWidth="2" opacity="0" style={{ transition: 'none' }} />
            <circle cx="140" cy="90" r="0" className="ripple-ring ripple-r2" fill="none" stroke="#1c3d4a" strokeWidth="2" opacity="0" style={{ transition: 'none' }} />

            {/* Risk 1: Blocked by outer layer */}
            <circle cx="-280" cy="-100" r="7" className="risk-dot r1" fill="#dc2626" filter="url(#glow-crimson-safeguards)" style={{ transition: 'none' }} />
            <path d="M -280 -100 L -212 -76 L -260 -130" className="risk-trajectory rt1" fill="none" />
            <text x="-210" y="-95" className="deflect-label dl1" style={{ transition: 'none' }}>Harm Deflected by Safeguards</text>

            {/* Risk 2: Managed by middle layer */}
            <circle cx="280" cy="180" r="7" className="risk-dot r2" fill="#dc2626" filter="url(#glow-crimson-safeguards)" style={{ transition: 'none' }} />
            <path d="M 280 180 L 140 90 L 200 30" className="risk-trajectory rt2" fill="none" />
            <text x="130" y="115" className="deflect-label dl2" style={{ transition: 'none' }}>Regulated & Corrected</text>

            {/* Risk 3: Safe Integration into Center */}
            <circle cx="0" cy="-280" r="7" className="risk-dot r3" fill="#2d6a4f" filter="url(#glow-gold-safeguards)" style={{ transition: 'none' }} />
            <path d="M 0 -280 L 0 -14" className="risk-trajectory rt3" fill="none" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SafeguardsSection;
