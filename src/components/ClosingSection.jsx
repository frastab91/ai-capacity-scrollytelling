import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ClosingSection = ({ isActive }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Set initial states
    gsap.set('.future-path', { strokeDasharray: 400, strokeDashoffset: 400 });
    gsap.set('.future-tag-group', { scale: 0, opacity: 0, transformOrigin: 'center center' });
    gsap.set('.sunrise-glow', { scale: 0.5, transformOrigin: 'center center' });
    gsap.set('.hill-layer', { y: 30 });

    // Scroll-scrub timeline for the closing landscape
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.step[data-step="closing-view"]',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 0.8,
      }
    });

    tl.to('.sunrise-glow', {
      scale: 1.2,
      duration: 1.5,
      ease: 'sine.out'
    }, 0)
    .to('.hill-layer', {
      y: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power1.out'
    }, 0.2)
    .to('.future-path', {
      strokeDashoffset: 0,
      duration: 1.4,
      stagger: 0.1,
      ease: 'power1.inOut'
    }, 0.3)
    .to('.future-tag-group', {
      scale: 1,
      opacity: 0.95,
      duration: 0.6,
      stagger: 0.12,
      ease: 'back.out(1.5)'
    }, 0.8);

    // Global listener for restart buttons to handle smooth scroll to top
    const handleRestart = () => {
      gsap.to(window, {
        duration: 2.2,
        scrollTo: 0,
        ease: 'power3.inOut'
      });
    };

    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', handleRestart);
    }

    // Clean up listener
    return () => {
      if (restartBtn) {
        restartBtn.removeEventListener('click', handleRestart);
      }
    };
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className={`visual-section ${isActive ? 'active' : ''}`} 
      id="visual-closing"
    >
      <svg viewBox="0 0 800 600" width="100%" height="100%">
        <defs>
          <pattern id="grid-closing" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e4dad0" strokeWidth="0.5" />
          </pattern>
          
          <linearGradient id="sun-gradient-closing" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#fde68a" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fdfbf7" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="hill-1-closing" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#faf6ee" />
            <stop offset="100%" stopColor="#f5ede0" />
          </linearGradient>

          <linearGradient id="hill-2-closing" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f4e9db" />
            <stop offset="100%" stopColor="#eadaaf" />
          </linearGradient>

          <filter id="shadow-node-closing" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#5c4a3c" floodOpacity="0.1" />
          </filter>

          <filter id="glow-gold-closing" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grid-closing)" opacity="0.3" />
        
        {/* Radiating Sunrise */}
        <circle cx="400" cy="240" r="140" className="sunrise-glow" fill="url(#sun-gradient-closing)" filter="url(#glow-gold-closing)" />
        
        {/* Curved organic landscape paths */}
        <path d="M 400 600 C 400 480, 200 450, 100 340" className="future-path" stroke="#b28d46" strokeWidth="1.5" fill="none" opacity="0.6" style={{ transition: 'none' }} />
        <path d="M 400 600 C 400 450, 300 400, 250 340" className="future-path" stroke="#b28d46" strokeWidth="1.5" fill="none" opacity="0.6" style={{ transition: 'none' }} />
        <path d="M 400 600 C 400 400, 400 400, 400 340" className="future-path" stroke="#b28d46" strokeWidth="1.5" fill="none" opacity="0.6" style={{ transition: 'none' }} />
        <path d="M 400 600 C 400 450, 500 400, 550 340" className="future-path" stroke="#b28d46" strokeWidth="1.5" fill="none" opacity="0.6" style={{ transition: 'none' }} />
        <path d="M 400 600 C 400 480, 600 450, 700 340" className="future-path" stroke="#b28d46" strokeWidth="1.5" fill="none" opacity="0.6" style={{ transition: 'none' }} />
        
        {/* Overlapping Editorial Vector Hills */}
        <path d="M -50 450 C 150 380, 280 430, 420 460 C 560 490, 660 410, 850 460 L 850 600 L -50 600 Z" className="hill-layer hill-1" fill="url(#hill-1-closing)" stroke="#e4dad0" strokeWidth="1" />
        <path d="M -50 500 C 120 450, 310 440, 480 500 C 650 560, 720 490, 850 515 L 850 600 L -50 600 Z" className="hill-layer hill-2" fill="url(#hill-2-closing)" stroke="#d3c8bc" strokeWidth="1.5" />
        
        {/* Stylized landscape future tags */}
        <g className="future-labels" opacity="0.9">
          {/* Tag 1: Indigenous AI */}
          <g className="future-tag-group" style={{ transition: 'none' }}>
            <rect x="52" y="305" width="96" height="24" rx="12" fill="#fff" stroke="#e4dad0" filter="url(#shadow-node-closing)" />
            <text x="100" y="321" className="landscape-tag" fill="#1c3d4a" textAnchor="middle" style={{ fontFamily: 'var(--font-sans)', fontSize: '8.5px', fontWeight: '700', letterSpacing: '0.04em' }}>
              Indigenous AI
            </text>
          </g>
          
          {/* Tag 2: Local Adaptation */}
          <g className="future-tag-group" style={{ transition: 'none' }}>
            <rect x="202" y="295" width="96" height="24" rx="12" fill="#fff" stroke="#e4dad0" filter="url(#shadow-node-closing)" />
            <text x="250" y="311" className="landscape-tag" fill="#1c3d4a" textAnchor="middle" style={{ fontFamily: 'var(--font-sans)', fontSize: '8.5px', fontWeight: '700', letterSpacing: '0.04em' }}>
              Local Adapt
            </text>
          </g>
          
          {/* Tag 3: Pluriversal Futures */}
          <g className="future-tag-group" style={{ transition: 'none' }}>
            <rect x="343" y="285" width="114" height="24" rx="12" fill="#fff" stroke="#e4dad0" filter="url(#shadow-node-closing)" />
            <text x="400" y="301" className="landscape-tag" fill="#b28d46" textAnchor="middle" style={{ fontFamily: 'var(--font-sans)', fontSize: '8.5px', fontWeight: '700', letterSpacing: '0.04em' }}>
              Pluriversal Futures
            </text>
          </g>
          
          {/* Tag 4: Participatory */}
          <g className="future-tag-group" style={{ transition: 'none' }}>
            <rect x="502" y="295" width="96" height="24" rx="12" fill="#fff" stroke="#e4dad0" filter="url(#shadow-node-closing)" />
            <text x="550" y="311" className="landscape-tag" fill="#1c3d4a" textAnchor="middle" style={{ fontFamily: 'var(--font-sans)', fontSize: '8.5px', fontWeight: '700', letterSpacing: '0.04em' }}>
              Participatory
            </text>
          </g>
          
          {/* Tag 5: Resistant Paths */}
          <g className="future-tag-group" style={{ transition: 'none' }}>
            <rect x="652" y="305" width="96" height="24" rx="12" fill="#fff" stroke="#e4dad0" filter="url(#shadow-node-closing)" />
            <text x="700" y="321" className="landscape-tag" fill="#2d6a4f" textAnchor="middle" style={{ fontFamily: 'var(--font-sans)', fontSize: '8.5px', fontWeight: '700', letterSpacing: '0.04em' }}>
              Resistant Paths
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default ClosingSection;
