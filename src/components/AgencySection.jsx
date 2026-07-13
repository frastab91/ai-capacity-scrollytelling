import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useIsMobile } from '../hooks/useIsMobile';

gsap.registerPlugin(ScrollTrigger);

const AgencySection = ({ isActive, selectedPathway, setSelectedPathway }) => {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  const svgViewBox = isMobile ? '0 0 400 560' : '0 0 800 600';

  useGSAP(() => {
    // Set initial states
    gsap.set('.branch-path', { strokeDasharray: 400, strokeDashoffset: 400 });
    gsap.set('.path-node', { scale: 0, opacity: 0, transformOrigin: 'center center' });

    const triggerEl = document.querySelector('.step[data-step="agency-intro"]');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: 'top 70%',
        end: isMobile ? '+=200%' : 'bottom 30%',
        scrub: 0.5,
      }
    });

    tl.to('.branch-path', {
      strokeDashoffset: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: 'none'
    })
    .to('.path-node', {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: 0.08,
      ease: 'back.out(1.5)'
    }, '-=0.4')
    .fromTo('.interactive-hint',
      { opacity: 0, y: 10 },
      { opacity: 0.8, y: 0, duration: 0.3 },
      '-=0.2'
    );
  }, { scope: containerRef });

  // Mobile layout: root at (200, 60), 5 nodes in two staggered rows below
  // Row A (y=300): Adopt(60), Contest(200), Resist(340)
  // Row B (y=450): Adapt(120), Co-create(280)
  const pathways = [
    {
      id: 'adopt', label: 'Adopt',
      x: 150, y: 250, d: 'M 400 500 C 400 380, 150 360, 150 250',
      mobileX: 60,  mobileY: 310, dMobile: 'M 200 82 C 200 150, 60 200, 60 270'
    },
    {
      id: 'adapt', label: 'Adapt',
      x: 275, y: 250, d: 'M 400 500 C 400 390, 275 330, 275 250',
      mobileX: 130, mobileY: 440, dMobile: 'M 200 82 C 200 200, 130 320, 130 400'
    },
    {
      id: 'contest', label: 'Contest',
      x: 400, y: 250, d: 'M 400 500 C 400 360, 400 360, 400 250',
      mobileX: 200, mobileY: 310, dMobile: 'M 200 82 C 200 150, 200 200, 200 270'
    },
    {
      id: 'cocreate', label: 'Co-create',
      x: 525, y: 250, d: 'M 400 500 C 400 390, 525 330, 525 250',
      mobileX: 270, mobileY: 440, dMobile: 'M 200 82 C 200 200, 270 320, 270 400'
    },
    {
      id: 'resist', label: 'Resist',
      x: 650, y: 250, d: 'M 400 500 C 400 380, 650 360, 650 250',
      mobileX: 340, mobileY: 310, dMobile: 'M 200 82 C 200 150, 340 200, 340 270'
    },
  ];

  const handlePathwayClick = (e, pathId) => {
    e.stopPropagation();
    if (selectedPathway === pathId) {
      setSelectedPathway(null); // toggle off
    } else {
      setSelectedPathway(pathId);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`visual-section ${isActive ? 'active' : ''}`} 
      id="visual-agency"
    >
      <svg
        viewBox={svgViewBox}
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern id="grid-agency" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e4dad0" strokeWidth="0.5" />
          </pattern>
          
          <filter id="shadow-node-agency" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#5c4a3c" floodOpacity="0.1" />
          </filter>

          <radialGradient id="node-cream-grad-agency" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8f6f0" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid-agency)" opacity="0.5" />

        {isMobile ? (
          /* ── MOBILE: vertical tree, root at top, nodes fanning below ── */
          <g className="pathway-tree">
            {/* Root node at top-centre */}
            <g className="path-root" transform="translate(200, 60)">
              <rect x="-90" y="-22" width="180" height="44" rx="8"
                className="root-box"
                fill="#1c3d4a" stroke="#b28d46" strokeWidth="1.5"
                filter="url(#shadow-node-agency)"
              />
              <text x="0" y="6" className="root-text" fill="#fdfbf7" textAnchor="middle"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em' }}>
                ENCOUNTER WITH AI
              </text>
            </g>

            {/* Branch paths — from root down to nodes */}
            {pathways.map((path) => (
              <path
                key={`path-${path.id}`}
                d={path.dMobile}
                className={`branch-path path-${path.id} ${selectedPathway === path.id ? 'active' : ''}`}
                fill="none" stroke="#e4dad0" strokeWidth="4"
              />
            ))}

            {/* Terminal nodes */}
            {pathways.map((path) => (
              <g
                key={`term-${path.id}`}
                className={`path-node term-${path.id} ${selectedPathway === path.id ? 'active' : ''}`}
                transform={`translate(${path.mobileX}, ${path.mobileY})`}
                onClick={(e) => handlePathwayClick(e, path.id)}
              >
                <circle r="40" className="term-circle"
                  fill="url(#node-cream-grad-agency)" stroke="#b28d46" strokeWidth="2.5"
                  filter="url(#shadow-node-agency)"
                />
                <text y="5" className="term-label" style={{ userSelect: 'none', pointerEvents: 'none' }}>
                  {path.label}
                </text>
              </g>
            ))}
          </g>
        ) : (
          /* ── DESKTOP: original horizontal tree ── */
          <g className="pathway-tree" transform="translate(0, -50)">
            <g className="path-root" transform="translate(400, 520)">
              <rect x="-80" y="-20" width="160" height="40" rx="6"
                className="root-box"
                fill="#1c3d4a" stroke="#b28d46" strokeWidth="1.5"
                filter="url(#shadow-node-agency)"
              />
              <text x="0" y="5" className="root-text" fill="#fdfbf7" textAnchor="middle"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em' }}>
                ENCOUNTER WITH AI
              </text>
            </g>

            {pathways.map((path) => (
              <path
                key={`path-${path.id}`}
                d={path.d}
                className={`branch-path path-${path.id} ${selectedPathway === path.id ? 'active' : ''}`}
                fill="none" stroke="#e4dad0" strokeWidth="3"
              />
            ))}

            {pathways.map((path) => (
              <g
                key={`term-${path.id}`}
                className={`path-node term-${path.id} ${selectedPathway === path.id ? 'active' : ''}`}
                transform={`translate(${path.x}, ${path.y})`}
                onClick={(e) => handlePathwayClick(e, path.id)}
              >
                <circle r="26" className="term-circle"
                  fill="url(#node-cream-grad-agency)" stroke="#b28d46" strokeWidth="2"
                  filter="url(#shadow-node-agency)"
                />
                <text y="4" className="term-label" style={{ userSelect: 'none', pointerEvents: 'none' }}>
                  {path.label}
                </text>
              </g>
            ))}
          </g>
        )}

        <text
          x={isMobile ? '200' : '400'}
          y={isMobile ? '545' : '40'}
          className="interactive-hint"
        >Tap any pathway to view details</text>
      </svg>
    </div>
  );
};

export default AgencySection;
