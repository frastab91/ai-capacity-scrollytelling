import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

// Import Visual Section Components
import HeroSection from './components/HeroSection';
import AccessSection from './components/AccessSection';
import VectorFieldCanvas from './components/VectorFieldCanvas';
import AbsorptiveSection from './components/AbsorptiveSection';
import CritiqueSection from './components/CritiqueSection';
import ConstellationSection from './components/ConstellationSection';
import AgencySection from './components/AgencySection';
import SafeguardsSection from './components/SafeguardsSection';
import ClosingSection from './components/ClosingSection';
import HUD from './components/HUD';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function App() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedPathway, setSelectedPathway] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  // Scroll Progress Indicator Animation using GSAP
  useGSAP(() => {
    gsap.to('.scroll-progress-indicator', {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      }
    });
  });

  // Handle active step cards and toggle active visual panels for Sections 5-8
  useEffect(() => {
    const steps = document.querySelectorAll('.step');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Clear active classes from all step cards
          steps.forEach(s => s.classList.remove('active-step'));
          // Set current card active (fades it in via CSS)
          entry.target.classList.add('active-step');

          const stepName = entry.target.dataset.step;
          const stepId = entry.target.id;

          // Determine which SVG panel layer is active in the interactive split block
          if (stepName === 'constellation-interactive') {
            setActiveSection('constellation');
          } else if (stepName?.startsWith('agency-')) {
            setActiveSection('agency');
          } else if (stepName?.startsWith('safeguards-')) {
            setActiveSection('safeguards');
          } else if (stepName?.startsWith('closing-') || stepId === 'closing-credits') {
            setActiveSection('closing');
          } else {
            setActiveSection(null);
          }
        }
      });
    }, {
      root: null,
      rootMargin: window.innerWidth < 768 ? '-25% 0px -35% 0px' : '-20% 0px -40% 0px',
      threshold: 0.15
    });

    steps.forEach(step => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  // Return to top smooth scroll handler using GSAP ScrollToPlugin
  const handleRestart = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: 0,
      ease: 'power3.inOut'
    });
  };

  return (
    <>
      {/* Progress Bar at the top */}
      <div className="scroll-progress-indicator" id="progress-bar"></div>

      {/* Editorial Top Header */}
      <header className="editorial-header">
        <VectorFieldCanvas />
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', pointerEvents: 'none' }}>
          <div className="header-meta" style={{ pointerEvents: 'auto' }}>
            <span className="pub-type">Visual Essay - July 2026</span>
          </div>
          <h1 className="header-title" style={{ pointerEvents: 'auto' }}>Absorptive Capacity, Access, and Constellations of AI Capability</h1>
          <p className="header-subtitle" style={{ pointerEvents: 'auto' }}>Why policy debates must move beyond the monolith of “capacity building” and embrace pluriversal futures.</p>
          <div className="header-byline" style={{ pointerEvents: 'auto' }}>
            Thoughts on what it mean to have <span className="paper-title">agency and capacity</span> to benefit from AI
          </div>
          <div className="scroll-prompt" style={{ pointerEvents: 'auto' }}>
            <span className="scroll-text">Scroll to Begin</span>
            <div className="scroll-indicator">
              <span className="scroll-dot"></span>
            </div>
          </div>
        </div>
      </header>

      {/* Self-contained Sections 1-4 */}
      <HeroSection />
      <AccessSection />
      <AbsorptiveSection />
      <CritiqueSection />

      {/* Shared Interactive Scrollytelling Section for Sections 5-8 */}
      <main className="scrolly-container interactive-scrolly-section">
        
        {/* Sticky Graphic Pane */}
        <div className="sticky-graphic">
          <div className="graphic-wrapper">
            <ConstellationSection 
              isActive={activeSection === 'constellation'} 
              selectedNode={selectedNode} 
              setSelectedNode={setSelectedNode} 
            />
            
            <AgencySection 
              isActive={activeSection === 'agency'} 
              selectedPathway={selectedPathway} 
              setSelectedPathway={setSelectedPathway} 
            />
            
            <SafeguardsSection 
              isActive={activeSection === 'safeguards'} 
            />
            
            <ClosingSection 
              isActive={activeSection === 'closing'} 
            />
          </div>
        </div>

        {/* Scrollable Narrative column for Sections 5-8 */}
        <div className="scroll-narrative">
          
          {/* STEP 5.1 */}
          <section className="step" data-step="constellation-interactive">
            <div className="step-card">
              <span className="step-tag">Constellation / 10</span>
              <h2 className="step-heading">The Full Landscape</h2>
              <p>AI capacity is therefore best understood as a multi-dimensional constellation. <strong>Access</strong> feeds into <strong>Absorption</strong>, which interacts with <strong>Generative</strong> nodes. Both are anchored by <strong>Institutional safeguards</strong> and built on robust <strong>data ecosystems</strong>.</p>
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
                <button id="restart-btn" className="editorial-btn" onClick={handleRestart}>Restart Narrative</button>
              </div>
            </div>
          </section>

        </div>

      </main>

      <footer className="editorial-footer">
        <div className="footer-content">
          <p>&copy; 2026 AI Capacity Narrative Project. Built with React, GSAP, and premium web animations.</p>
        </div>
      </footer>

      {/* Floating HUD Details overlay panel */}
      <HUD 
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
        selectedPathway={selectedPathway}
        setSelectedPathway={setSelectedPathway}
      />
    </>
  );
}
