import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function AbsorptiveSection() {
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

    // 1. Stage 1 (Recognize) scales, glows, and Particle 1 (red) moves from cy 60 down to cy 150
    tl.to('.stage-1 .stage-circle', { fill: '#1c3d4a', stroke: '#1c3d4a', duration: 0.15 }, 0.05)
      .to('.stage-1 .stage-circle-glow', { opacity: 1, duration: 0.15 }, 0.05)
      .to('.stage-1 .stage-num', { fill: '#ffffff', duration: 0.15 }, 0.05)
      .to('.stage-1 .stage-title', { fill: '#b28d46', duration: 0.15 }, 0.05);
    tl.to('.stage-1', { scale: 1.15, duration: 0.15, ease: 'power1.out' }, 0.05);
    tl.to('.stage-1', { scale: 1.0, duration: 0.1 }, 0.2); // Settle but stay active
    tl.fromTo('.p1', 
      { cy: 60, opacity: 0 }, 
      { cy: 150, opacity: 1, duration: 0.25, ease: 'power1.inOut' }, 
      0.02
    );

    // 2. Stage 2 (Assimilate) scales, glows, and Particles 2 & 3 flow down from cy 150 to cy 300
    tl.to('.stage-2 .stage-circle', { fill: '#1c3d4a', stroke: '#1c3d4a', duration: 0.15 }, 0.3)
      .to('.stage-2 .stage-circle-glow', { opacity: 1, duration: 0.15 }, 0.3)
      .to('.stage-2 .stage-num', { fill: '#ffffff', duration: 0.15 }, 0.3)
      .to('.stage-2 .stage-title', { fill: '#b28d46', duration: 0.15 }, 0.3);
    tl.to('.stage-2', { scale: 1.15, duration: 0.15, ease: 'power1.out' }, 0.3);
    tl.to('.stage-2', { scale: 1.0, duration: 0.1 }, 0.45);
    
    tl.fromTo('.p2', 
      { cy: 150, opacity: 0 }, 
      { cy: 300, opacity: 1, duration: 0.25, ease: 'power1.inOut' }, 
      0.22
    );
    tl.fromTo('.p3', 
      { cy: 150, opacity: 0 }, 
      { cy: 300, opacity: 1, duration: 0.25, ease: 'power1.inOut' }, 
      0.28
    );

    // 3. Stage 3 (Apply) scales, glows, and Particles 4 & 5 flow down from cy 300 to cy 450
    tl.to('.stage-3 .stage-circle', { fill: '#1c3d4a', stroke: '#1c3d4a', duration: 0.15 }, 0.55)
      .to('.stage-3 .stage-circle-glow', { opacity: 1, duration: 0.15 }, 0.55)
      .to('.stage-3 .stage-num', { fill: '#ffffff', duration: 0.15 }, 0.55)
      .to('.stage-3 .stage-title', { fill: '#b28d46', duration: 0.15 }, 0.55);
    tl.to('.stage-3', { scale: 1.15, duration: 0.15, ease: 'power1.out' }, 0.55);
    tl.to('.stage-3', { scale: 1.0, duration: 0.1 }, 0.7);
    
    tl.fromTo('.p4', 
      { cy: 300, opacity: 0 }, 
      { cy: 450, opacity: 1, duration: 0.25, ease: 'power1.inOut' }, 
      0.48
    );
    tl.fromTo('.p5', 
      { cy: 300, opacity: 0 }, 
      { cy: 450, opacity: 1, duration: 0.25, ease: 'power1.inOut' }, 
      0.54
    );

    // 4. Feedback loop animation (drawn in at 70% to 100% scroll)
    tl.fromTo('.feedback-path', 
      { strokeDashoffset: 400, opacity: 0 }, 
      { strokeDashoffset: 0, opacity: 1, duration: 0.3, ease: 'power1.inOut' }, 
      0.65
    );
    tl.fromTo('.feedback-arrow', 
      { opacity: 0, scale: 0 }, 
      { opacity: 1, scale: 1, duration: 0.15 }, 
      0.8
    );
    tl.fromTo('.feedback-label', 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.2 }, 
      0.75
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="scrolly-container absorptive-scrolly-section" style={{ minHeight: '200vh' }}>
      
      {/* Sticky Graphic Pane */}
      <div className="sticky-graphic">
        <div className="graphic-wrapper">
          <svg viewBox="0 0 800 600" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e4dad0" stroke-width="0.5" />
              </pattern>
              
              <filter id="shadow-node" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#5c4a3c" flood-opacity="0.1" />
              </filter>
              <filter id="shadow-monolith" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="15" stdDeviation="20" flood-color="#0f172a" flood-opacity="0.2" />
              </filter>
              <filter id="glow-crimson" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <linearGradient id="pipe-tube-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#e2dad0" />
                <stop offset="30%" stop-color="#ffffff" />
                <stop offset="70%" stop-color="#ffffff" />
                <stop offset="100%" stop-color="#d3c8bc" />
              </linearGradient>
              <radialGradient id="node-cream-grad" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stop-color="#ffffff" />
                <stop offset="100%" stop-color="#f8f6f0" />
              </radialGradient>
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
              <rect x="388" y="60" width="24" height="480" rx="12" fill="url(#pipe-tube-grad)" stroke="#d3c8bc" stroke-width="1.5" />
              <rect x="396" y="60" width="8" height="480" fill="#ffffff" opacity="0.5" style={{ pointerEvents: 'none' }} />
              
              {/* Stages */}
              {/* Stage 1: Recognize */}
              <g className="pipe-stage stage-1" transform="translate(400, 150)">
                <circle r="44" className="stage-circle" fill="url(#node-cream-grad)" stroke="#e4dad0" stroke-width="2" filter="url(#shadow-node)" />
                <circle r="44" className="stage-circle-glow" fill="none" stroke="#1c3d4a" stroke-width="2.5" style={{ opacity: 0 }} filter="url(#glow-blue)" />
                <text className="stage-num" y="-5">01</text>
                <text className="stage-title" y="15">RECOGNIZE</text>
                <text className="stage-sub" y="70">Value external AI systems</text>
              </g>

              {/* Stage 2: Assimilate */}
              <g className="pipe-stage stage-2" transform="translate(400, 300)">
                <circle r="44" className="stage-circle" fill="url(#node-cream-grad)" stroke="#e4dad0" stroke-width="2" filter="url(#shadow-node)" />
                <circle r="44" className="stage-circle-glow" fill="none" stroke="#1c3d4a" stroke-width="2.5" style={{ opacity: 0 }} filter="url(#glow-blue)" />
                <text className="stage-num" y="-5">02</text>
                <text className="stage-title" y="15">ASSIMILATE</text>
                <text className="stage-sub" y="70">Integrate into routines & tech</text>
              </g>

              {/* Stage 3: Apply */}
              <g className="pipe-stage stage-3" transform="translate(400, 450)">
                <circle r="44" className="stage-circle" fill="url(#node-cream-grad)" stroke="#e4dad0" stroke-width="2" filter="url(#shadow-node)" />
                <circle r="44" className="stage-circle-glow" fill="none" stroke="#1c3d4a" stroke-width="2.5" style={{ opacity: 0 }} filter="url(#glow-blue)" />
                <text className="stage-num" y="-5">03</text>
                <text className="stage-title" y="15">APPLY</text>
                <text className="stage-sub" y="70">Deploy to productive ends</text>
              </g>

              {/* Glowing Particle Flow Loops */}
              <g className="pipeline-particles">
                <circle cx="400" cy="60" r="6" className="pipe-particle p1" fill="#dc2626" filter="url(#glow-crimson)" style={{ opacity: 0 }} />
                <circle cx="400" cy="150" r="6" className="pipe-particle p2" fill="#1c3d4a" filter="url(#glow-blue)" style={{ opacity: 0 }} />
                <circle cx="400" cy="150" r="6" className="pipe-particle p3" fill="#1c3d4a" filter="url(#glow-blue)" style={{ opacity: 0 }} />
                <circle cx="400" cy="300" r="6" className="pipe-particle p4" fill="#1c3d4a" filter="url(#glow-blue)" style={{ opacity: 0 }} />
                <circle cx="400" cy="300" r="6" className="pipe-particle p5" fill="#dc2626" filter="url(#glow-crimson)" style={{ opacity: 0 }} />
              </g>

              {/* Feedback Arrow */}
              <path d="M 444 450 C 564 450 564 150 444 150" className="feedback-path" fill="none" stroke="#b28d46" stroke-width="2" stroke-dasharray="6 6" style={{ strokeDasharray: 400, strokeDashoffset: 400, opacity: 0 }} />
              <path d="M 446 144 L 434 150 L 446 156 Z" className="feedback-arrow" fill="#b28d46" style={{ opacity: 0 }} />
              <text x="525" y="300" className="feedback-label" fill="#b28d46" transform="rotate(90, 525, 300)" style={{ opacity: 0 }}>Feedback & Learning Loop</text>
            </g>
          </svg>
        </div>
      </div>

      {/* Scrollable narrative textual content */}
      <div className="scroll-narrative">
        
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

      </div>
    </div>
  );
}
