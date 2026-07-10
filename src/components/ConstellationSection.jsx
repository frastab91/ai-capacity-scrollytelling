import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ConstellationSection = ({ isActive, selectedNode, setSelectedNode }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Entrance timeline when scrolled into view
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.step[data-step="constellation-interactive"]',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });

    // Animate lines drawing out from center
    tl.fromTo('.const-link',
      { strokeDasharray: '6 6', strokeDashoffset: 100, opacity: 0 },
      { strokeDashoffset: 0, opacity: 0.6, duration: 0.8, stagger: 0.1, ease: 'power2.out' }
    )
    // Animate outer boundary path drawing
    .fromTo('.const-outer-boundary',
      { strokeDasharray: 800, strokeDashoffset: 800, opacity: 0 },
      { strokeDashoffset: 0, opacity: 0.25, duration: 1, ease: 'power1.inOut' },
      '-=0.6'
    )
    // Scale up the core node
    .fromTo('.core-interactive',
      { scale: 0, opacity: 0, transformOrigin: 'center center' },
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.8'
    )
    // Scale up the outer orbit nodes one by one
    .fromTo('.outer-interactive',
      { scale: 0, opacity: 0, transformOrigin: 'center center' },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.12, ease: 'back.out(1.4)' },
      '-=0.5'
    )
    // Fade in the interaction hint
    .fromTo('.interactive-hint',
      { y: 15, opacity: 0 },
      { y: 0, opacity: 0.8, duration: 0.5 },
      '-=0.2'
    );
  }, { scope: containerRef });

  const nodes = [
    { id: 'access', label: 'Access', x: 0, y: -180 },
    { id: 'absorptive', label: 'Absorption', x: 180, y: -70 },
    { id: 'generative', label: 'Generative', x: 110, y: 150 },
    { id: 'institutional', label: 'Institutions', x: -110, y: 150 },
    { id: 'dpi', label: 'DPI & Data', x: -180, y: -70 }
  ];

  const handleNodeClick = (e, nodeId) => {
    e.stopPropagation();
    if (selectedNode === nodeId) {
      setSelectedNode(null); // Toggle off if clicked again
    } else {
      setSelectedNode(nodeId);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`visual-section ${isActive ? 'active' : ''}`} 
      id="visual-constellation"
    >
      <svg viewBox="0 0 800 600" width="100%" height="100%">
        <defs>
          <pattern id="grid-const" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e4dad0" strokeWidth="0.5" />
          </pattern>
          
          <filter id="shadow-node-const" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#5c4a3c" floodOpacity="0.1" />
          </filter>

          <filter id="glow-crimson-const" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="crimson-core-grad-const" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="100%" stopColor="#991b1b" />
          </linearGradient>

          <radialGradient id="node-cream-grad-const" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f8f6f0" />
          </radialGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid-const)" opacity="0.5" />
        
        <g className="active-constellation" transform="translate(400, 300)">
          {/* Connecting links */}
          {nodes.map((node) => {
            const isLinkActive = selectedNode === node.id;
            return (
              <line
                key={`link-${node.id}`}
                x1="0"
                y1="0"
                x2={node.x}
                y2={node.y}
                className={`const-link interactive-link l-${node.id} ${isLinkActive ? 'active-link' : ''}`}
              />
            );
          })}
          
          {/* Outer boundary constellation ring */}
          <path 
            d="M 0 -180 L 180 -70 L 110 150 L -110 150 L -180 -70 Z" 
            className="const-outer-boundary" 
            fill="none" 
            stroke="#e4dad0" 
            strokeWidth="1" 
          />
          
          {/* Core Node (Glowing Center) */}
          <g 
            className={`const-node core-interactive n-capacity ${selectedNode === 'capacity' ? 'active' : ''}`}
            filter="url(#shadow-node-const)"
            onClick={(e) => handleNodeClick(e, 'capacity')}
          >
            <circle cx="0" cy="0" r="65" className="node-circle core" fill="url(#crimson-core-grad-const)" />
            <circle 
              cx="0" 
              cy="0" 
              r="65" 
              className="node-circle-glow" 
              fill="none" 
              stroke="#dc2626" 
              strokeWidth="2.5" 
              opacity="0.5" 
              filter="url(#glow-crimson-const)" 
            />
            <text className="node-text core-lbl-1" x="0" y="-4">AI Benefit</text>
            <text className="node-text core-lbl-2" x="0" y="12">Capacity</text>
          </g>
          
          {/* Outer Orbit Nodes */}
          {nodes.map((node) => {
            const isNodeActive = selectedNode === node.id;
            return (
              <g 
                key={`node-${node.id}`}
                className={`const-node outer-interactive n-${node.id} ${isNodeActive ? 'active' : ''}`} 
                transform={`translate(${node.x}, ${node.y})`}
                onClick={(e) => handleNodeClick(e, node.id)}
              >
                <circle 
                  cx="0" 
                  cy="0" 
                  r="38" 
                  className="node-circle outer" 
                  fill="url(#node-cream-grad-const)" 
                  stroke="#b28d46" 
                  filter="url(#shadow-node-const)" 
                />
                <text className="node-text label" x="0" y="4">{node.label}</text>
                <circle cx="0" cy="0" r="46" className="node-ring" />
              </g>
            );
          })}
        </g>

        <text x="400" y="40" className="interactive-hint">Tap any node to inspect its function</text>
      </svg>
    </div>
  );
};

export default ConstellationSection;
