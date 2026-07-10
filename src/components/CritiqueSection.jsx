import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function CritiqueSection() {
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

    // Initial state: Receiver is centered/full weight (scale 1.0, opacity 1.0, translate 0).
    // Author is shifted/minimized (scale 0.85, opacity 0.0, translate 80px x, 40px y).
    
    // Shifting weights between Receiver and Author (happens from 15% to 85% of scroll)
    tl.to('.receiver-panel-group', {
      x: -80,
      y: 20,
      scale: 0.85,
      opacity: 0.3,
      duration: 0.6,
      ease: 'power1.inOut'
    }, 0.2);

    tl.to('.author-panel-group', {
      x: 0,
      y: 0,
      scale: 1.0,
      opacity: 1.0,
      duration: 0.6,
      ease: 'power1.inOut'
    }, 0.2);

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="scrolly-container critique-scrolly-section" style={{ minHeight: '200vh' }}>
      
      {/* Sticky Graphic Pane */}
      <div className="sticky-graphic">
        <div className="graphic-wrapper">
          <svg viewBox="0 0 800 600" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e4dad0" strokeWidth="0.5" />
              </pattern>
              
              <filter id="shadow-node" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#5c4a3c" floodOpacity="0.1" />
              </filter>
            </defs>
            
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
            <g className="author-panel-group" transform="translate(80, 40) scale(0.85)" opacity="0">
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
      </div>

      {/* Scrollable narrative textual content */}
      <div className="scroll-narrative">
        
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

      </div>
    </div>
  );
}
