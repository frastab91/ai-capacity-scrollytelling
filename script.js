/**
 * Constellations of AI Capacity - Interactive Scrollytelling Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Feature Detection for Scroll-Driven Animations (SDA)
  const supportsSDA = CSS.supports('animation-timeline: scroll()') && CSS.supports('animation-range: 0% 100%');
  console.log(`Native Scroll-Driven Animations supported: ${supportsSDA}`);

  // 2. DOM Elements
  const steps = document.querySelectorAll('.step');
  const visualSections = document.querySelectorAll('.visual-section');
  const progressBar = document.getElementById('progress-bar');
  const restartBtn = document.getElementById('restart-btn');
  
  // HUD Elements
  const constellationHud = document.getElementById('constellation-hud');
  const constellationNodes = document.querySelectorAll('.outer-interactive');
  const constellationLinks = document.querySelectorAll('.interactive-link');
  
  const agencyHud = document.getElementById('agency-hud');
  const agencyNodes = document.querySelectorAll('.path-node');
  const agencyPaths = document.querySelectorAll('.branch-path');

  // Interactive Content Databases
  const nodeData = {
    access: {
      title: "Access to AI Resources",
      desc: "Provides the foundational infrastructure (compute, connectivity, models, datasets) necessary to participate in the AI ecosystem.",
      example: "Example: Establishing regional high-speed mesh networks and access keys for open-weight models in local community centers."
    },
    absorptive: {
      title: "Absorptive Capacity",
      desc: "The organizational ability to recognize valuable external AI solutions, assimilate them into local processes, and apply them.",
      example: "Example: Up-skilling domestic IT departments to deploy, containerize, and maintain open-weight LLMs locally."
    },
    generative: {
      title: "Indigenous & Generative Capabilities",
      desc: "The capacity to design, develop, and build original AI technologies reflecting local languages, cultures, and priorities.",
      example: "Example: Language activists constructing speech synthesis models for local dialects to preserve oral literature."
    },
    institutional: {
      title: "Institutional & Safeguarding Capacities",
      desc: "Policies, regulations, and social frameworks that protect rights, enforce accountability, and coordinate AI implementation.",
      example: "Example: Cross-sector panels conducting pre-deployment human rights audits on algorithmic public-housing tools."
    },
    dpi: {
      title: "Digital Public Infrastructure & Data",
      desc: "The public digital rails (payment gateways, digital identity, data trusts) that enable secure and inclusive AI applications.",
      example: "Example: Open consent registries allowing citizens to share their agricultural logs safely for collective weather AI training."
    }
  };

  const agencyData = {
    adopt: {
      title: "Adopt",
      desc: "Directly employing global, pre-packaged AI platforms as designed, prioritizing efficiency and speed of implementation.",
      example: "Vignette: A rural health clinic using standard global translation APIs to convert health instructions into local print flyers instantly."
    },
    adapt: {
      title: "Adapt",
      desc: "Modifying and customizing existing external AI models to fit local linguistic, cultural, or physical constraints.",
      example: "Vignette: A regional research cooperative retraining a global crop-classification model on specific local pest and farming patterns."
    },
    contest: {
      title: "Contest",
      desc: "Actively challenging, auditing, or protesting harmful or misaligned AI deployments through regulatory or social mechanisms.",
      example: "Vignette: An independent labor union successfully auditing and legalizing the ban of a foreign automated worker surveillance system."
    },
    cocreate: {
      title: "Co-create",
      desc: "Developing new AI systems and governance frameworks hand-in-hand with local communities from inception.",
      example: "Vignette: Pastoralist communities collaborating with local tech graduates to co-build GPS-less water-well tracking AI."
    },
    resist: {
      title: "Resist",
      desc: "Consciously choosing not to deploy AI in specific contexts, preserving human agency and non-digital social fabric.",
      example: "Vignette: An environmental council deciding to ban automated soil extractors to protect biodiversity and indigenous knowledge sovereignty."
    }
  };

  // 3. Step/Section Visiblity Observer
  // Tracks which narrative paragraph is centered and triggers the active visual section
  const stepObserverOptions = {
    root: null,
    rootMargin: window.innerWidth < 768 ? '-25% 0px -35% 0px' : '-20% 0px -40% 0px',
    threshold: 0.15
  };

  const getVisualIdForStep = (stepName) => {
    if (!stepName) return 'visual-hero';
    if (stepName.startsWith('hero-')) return 'visual-hero';
    if (stepName.startsWith('access-')) return 'visual-access';
    if (stepName.startsWith('absorptive-')) return 'visual-absorptive-flow';
    if (stepName.startsWith('critique-')) return 'visual-critique';
    if (stepName === 'constellation-interactive') return 'visual-constellation';
    if (stepName.startsWith('agency-')) return 'visual-agency';
    if (stepName.startsWith('safeguards-')) return 'visual-safeguards';
    if (stepName.startsWith('closing-')) return 'visual-closing';
    return 'visual-hero';
  };

  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Clear active step classes
        steps.forEach(s => s.classList.remove('active-step'));
        
        // Mark current step active
        entry.target.classList.add('active-step');
        
        const stepName = entry.target.dataset.step;
        const visualId = getVisualIdForStep(stepName);
        
        // Toggle active classes on visual canvases
        visualSections.forEach(vs => {
          if (vs.id === visualId) {
            vs.classList.add('active');
          } else {
            vs.classList.remove('active');
          }
        });
        
        // Automatically close HUDs when changing section
        if (visualId !== 'visual-constellation') {
          closeConstellationHud();
        }
        if (visualId !== 'visual-agency') {
          closeAgencyHud();
        }
      }
    });
  }, stepObserverOptions);

  steps.forEach(step => stepObserver.observe(step));

  // 4. Scroll Tracking (Unified fallback logic & progress indicator)
  const activeStepsForFallback = new Set();
  
  // Populate observer to check which steps are currently on screen for animation calculation
  const fallbackIntersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeStepsForFallback.add(entry.target);
      } else {
        activeStepsForFallback.delete(entry.target);
      }
    });
  }, { threshold: 0 });

  steps.forEach(step => fallbackIntersectionObserver.observe(step));

  // Main scroll listener
  window.addEventListener('scroll', () => {
    // A. Page progress indicator
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll > 0) {
      const percentage = (window.scrollY / totalScroll) * 100;
      progressBar.style.width = `${percentage}%`;
    }

    // B. JS Fallback Scroll-Driven Animations (only if native SDA is unsupported)
    if (!supportsSDA) {
      activeStepsForFallback.forEach(step => {
        const rect = step.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Progress runs 0 (step bottom enters viewport) to 1 (step top leaves viewport)
        const totalDist = rect.height + viewportHeight;
        const currentDist = viewportHeight - rect.top;
        let progress = currentDist / totalDist;
        progress = Math.max(0, Math.min(1, progress));
        
        applyFallbackAnimation(step.dataset.step, progress);
      });
    }
  });

  // Helper clamp function
  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  // Animate SVGs manually based on scroll progress (JS Fallback for Firefox)
  const applyFallbackAnimation = (stepName, progress) => {
    switch (stepName) {
      case 'hero-monolith': {
        const crackProg = clamp((progress - 0.1) / 0.8, 0, 1);
        const cracks = document.querySelectorAll('.crack-path');
        cracks.forEach(c => {
          c.style.strokeDashoffset = 300 - (crackProg * 300);
          c.style.opacity = crackProg;
        });
        
        const shakeProg = clamp((progress - 0.3) / 0.6, 0, 1);
        const shakeWrapper = document.querySelector('.hero-monolith-shake-wrapper');
        if (shakeWrapper) {
          if (shakeProg > 0 && shakeProg < 1) {
            const shakeX = Math.sin(shakeProg * 60) * 3;
            const shakeY = Math.cos(shakeProg * 60) * 3;
            const rot = Math.sin(shakeProg * 60) * 0.8;
            shakeWrapper.style.transform = `translate(${shakeX}px, ${shakeY}px) rotate(${rot}deg)`;
          } else if (shakeProg === 0) {
            shakeWrapper.style.transform = 'translate(0px, 0px) rotate(0deg)';
          }
        }
        break;
      }
      case 'hero-split': {
        const implodeProg = clamp(progress / 0.8, 0, 1);
        const monolithGroup = document.querySelector('.hero-monolith-group');
        if (monolithGroup) {
          monolithGroup.style.transform = `translate(400px, 240px) scale(${1 - implodeProg})`;
          monolithGroup.style.opacity = 1 - implodeProg;
        }
        
        const emergeProg = clamp((progress - 0.2) / 0.7, 0, 1);
        const emergeGroup = document.querySelector('.emerging-constellation');
        if (emergeGroup) {
          emergeGroup.style.opacity = emergeProg;
          emergeGroup.style.transform = `scale(${0.6 + emergeProg * 0.4})`;
        }
        break;
      }
      case 'access-split': {
        const splitProg = clamp((progress - 0.1) / 0.8, 0, 1);
        const pTop = document.querySelector('.connectivity-panel');
        const pMid = document.querySelector('.models-panel');
        const pBot = document.querySelector('.data-panel');
        if (pTop && pMid && pBot) {
          pTop.style.transform = `translate(${-80 * splitProg}px, ${-70 * splitProg}px) scale(${1 - 0.1 * splitProg})`;
          pMid.style.transform = `translate(${80 * splitProg}px, 0px) scale(${1 - 0.1 * splitProg})`;
          pBot.style.transform = `translate(${-80 * splitProg}px, ${70 * splitProg}px) scale(${1 - 0.1 * splitProg})`;
          
          if (splitProg > 0.3) {
            pTop.classList.add('active');
            pMid.classList.add('active');
            pBot.classList.add('active');
          } else {
            pTop.classList.remove('active');
            pMid.classList.remove('active');
            pBot.classList.remove('active');
          }
        }
        break;
      }
      case 'access-insufficient': {
        const zoomProg = clamp((progress - 0.1) / 0.8, 0, 1);
        const room = document.querySelector('.room-wireframe');
        const frame = document.querySelector('.door-frame-group');
        const panels = document.querySelector('.door-panels');
        if (room) {
          room.style.opacity = zoomProg;
          room.style.transform = `translate(400px, 240px) scale(${0.5 + 0.5 * zoomProg})`;
        }
        if (frame && panels) {
          const opacityVal = 1 - (zoomProg * 0.85);
          frame.style.opacity = opacityVal;
          panels.style.opacity = opacityVal;
        }
        break;
      }
      case 'absorptive-intro': {
        const stage1 = document.querySelector('.stage-1');
        if (stage1) {
          const scale = 1 + Math.sin(progress * Math.PI) * 0.1;
          stage1.style.transform = `scale(${scale})`;
          if (progress > 0.2) stage1.classList.add('active');
          else stage1.classList.remove('active');
        }
        const p1 = document.querySelector('.p1');
        if (p1) {
          p1.style.cy = 60 + progress * 90;
          p1.style.opacity = progress < 0.1 ? progress * 10 : (progress > 0.9 ? (1 - progress) * 10 : 1);
        }
        break;
      }
      case 'absorptive-pipeline': {
        const stage2 = document.querySelector('.stage-2');
        const stage3 = document.querySelector('.stage-3');
        if (stage2) stage2.classList.add('active');
        if (stage3) stage3.classList.add('active');
        
        const particles = ['.p2', '.p3', '.p4', '.p5'];
        particles.forEach((sel, idx) => {
          const p = document.querySelector(sel);
          if (p) {
            const pProg = (progress + idx * 0.25) % 1.0;
            p.style.cy = 150 + pProg * 300;
            p.style.opacity = pProg < 0.1 ? pProg * 10 : (pProg > 0.9 ? (1 - pProg) * 10 : 1);
          }
        });
        break;
      }
      case 'critique-receiver': {
        const receiverGroup = document.querySelector('.receiver-panel-group');
        const authorGroup = document.querySelector('.author-panel-group');
        if (receiverGroup && authorGroup) {
          receiverGroup.style.transform = 'translate(0, 0) scale(1)';
          receiverGroup.style.opacity = 1;
          authorGroup.style.transform = 'translate(80px, 40px) scale(0.85)';
          authorGroup.style.opacity = 0;
        }
        break;
      }
      case 'critique-author': {
        const critiqueProg = clamp((progress - 0.1) / 0.8, 0, 1);
        const receiverGroup = document.querySelector('.receiver-panel-group');
        const authorGroup = document.querySelector('.author-panel-group');
        if (receiverGroup && authorGroup) {
          receiverGroup.style.transform = `translate(${-critiqueProg * 80}px, 0) scale(${1 - critiqueProg * 0.15})`;
          receiverGroup.style.opacity = 1 - critiqueProg * 0.75;
          
          authorGroup.style.transform = `translate(${80 - critiqueProg * 80}px, ${40 - critiqueProg * 40}px) scale(${0.85 + critiqueProg * 0.15})`;
          authorGroup.style.opacity = critiqueProg;
        }
        break;
      }
      case 'agency-paths': {
        const pathProg = clamp((progress - 0.1) / 0.8, 0, 1);
        const paths = document.querySelectorAll('.branch-path');
        paths.forEach(p => {
          p.style.strokeDasharray = '400';
          p.style.strokeDashoffset = 400 - (pathProg * 400);
        });
        break;
      }
      case 'safeguards-layers': {
        const zoomProg = clamp((progress - 0.1) / 0.8, 0, 1);
        const layers = document.querySelector('.safeguards-nested-layers');
        if (layers) {
          layers.style.transform = `translate(400px, 240px) scale(${2.8 - zoomProg * 1.8})`;
        }
        break;
      }
      case 'safeguards-deflect': {
        const r1 = document.querySelector('.r1');
        const r2 = document.querySelector('.r2');
        const r3 = document.querySelector('.r3');
        const dl1 = document.querySelector('.dl1');
        const dl2 = document.querySelector('.dl2');
        const ripple1 = document.querySelector('.ripple-r1');
        const ripple2 = document.querySelector('.ripple-r2');
        
        if (ripple1) {
          if (progress >= 0.3 && progress <= 0.75) {
            const t = (progress - 0.3) / 0.45;
            ripple1.setAttribute('r', t * 60);
            ripple1.style.opacity = t < 0.4 ? t * 2.5 : (1 - t) * 1.8;
          } else {
            ripple1.setAttribute('r', 0);
            ripple1.style.opacity = 0;
          }
        }

        if (ripple2) {
          if (progress >= 0.45 && progress <= 0.85) {
            const t = (progress - 0.45) / 0.4;
            ripple2.setAttribute('r', t * 60);
            ripple2.style.opacity = t < 0.4 ? t * 2.5 : (1 - t) * 1.8;
          } else {
            ripple2.setAttribute('r', 0);
            ripple2.style.opacity = 0;
          }
        }

        if (r1) {
          if (progress < 0.4) {
            const t = progress / 0.4;
            r1.setAttribute('cx', -280 + t * 68);
            r1.setAttribute('cy', -100 + t * 24);
            r1.classList.remove('deflected');
          } else {
            const t = (progress - 0.4) / 0.6;
            r1.setAttribute('cx', -212 - t * 38);
            r1.setAttribute('cy', -76 - t * 54);
            r1.classList.add('deflected');
          }
          r1.style.opacity = progress > 0.9 ? (1 - progress) * 10 : 0.8;
        }

        if (r2) {
          if (progress < 0.5) {
            const t = progress / 0.5;
            r2.setAttribute('cx', 280 - t * 140);
            r2.setAttribute('cy', 180 - t * 90);
            r2.classList.remove('deflected');
          } else {
            const t = (progress - 0.5) / 0.5;
            r2.setAttribute('cx', 140 + t * 50);
            r2.setAttribute('cy', 90 - t * 70);
            r2.classList.add('deflected');
          }
          r2.style.opacity = progress > 0.9 ? (1 - progress) * 10 : 0.8;
        }

        if (r3) {
          r3.setAttribute('cx', 0);
          r3.setAttribute('cy', -240 + progress * 228);
          r3.style.opacity = progress > 0.9 ? (1 - progress) * 10 : 0.8;
        }

        if (dl1 && dl2) {
          const opacityVal = clamp((progress - 0.5) / 0.35, 0, 1);
          dl1.style.opacity = opacityVal;
          dl2.style.opacity = opacityVal;
        }
        break;
      }
      case 'closing-view': {
        const closingSvg = document.querySelector('#visual-closing svg');
        if (closingSvg) {
          closingSvg.style.transform = `scale(${0.9 + progress * 0.1})`;
          closingSvg.style.opacity = 0.7 + progress * 0.3;
        }
        break;
      }
    }
  };

  // 5. Section 5 Interactive Constellation HUD Handlers
  const openConstellationHud = (nodeName) => {
    const data = nodeData[nodeName];
    if (!data) return;

    // Reset styles for all interactive nodes
    constellationNodes.forEach(node => node.classList.remove('active'));
    constellationLinks.forEach(link => link.classList.remove('active-link'));

    // Set clicked node active
    const activeNode = document.querySelector(`.n-${nodeName}`);
    if (activeNode) activeNode.classList.add('active');

    // Set corresponding link active
    const activeLink = document.querySelector(`.l-${nodeName}`);
    if (activeLink) activeLink.classList.add('active-link');

    // Fill HUD and show
    constellationHud.querySelector('.hud-title').innerText = data.title;
    constellationHud.querySelector('.hud-desc').innerText = data.desc;
    constellationHud.querySelector('.hud-example').innerText = data.example;
    constellationHud.classList.add('visible');
  };

  const closeConstellationHud = () => {
    constellationNodes.forEach(node => node.classList.remove('active'));
    constellationLinks.forEach(link => link.classList.remove('active-link'));
    constellationHud.classList.remove('visible');
  };

  constellationNodes.forEach(node => {
    node.addEventListener('click', (e) => {
      e.stopPropagation();
      const nodeName = node.dataset.node;
      openConstellationHud(nodeName);
    });
  });

  constellationHud.querySelector('.hud-close').addEventListener('click', (e) => {
    e.stopPropagation();
    closeConstellationHud();
  });

  // 6. Section 6 Interactive Agency Pathways Vignette Handlers
  const openAgencyHud = (pathName) => {
    const data = agencyData[pathName];
    if (!data) return;

    // Reset styles
    agencyNodes.forEach(node => node.classList.remove('active'));
    agencyPaths.forEach(path => path.classList.remove('active'));

    // Highlight terminal node and path link
    const activeNode = document.querySelector(`.term-${pathName}`);
    if (activeNode) activeNode.classList.add('active');

    const activePath = document.querySelector(`.path-${pathName}`);
    if (activePath) activePath.classList.add('active');

    // Populate and open card
    agencyHud.querySelector('.hud-title').innerText = data.title;
    agencyHud.querySelector('.hud-desc').innerHTML = `${data.desc}<br><br><span class="vignette-text"><strong>${data.example}</strong></span>`;
    agencyHud.classList.add('visible');
  };

  const closeAgencyHud = () => {
    agencyNodes.forEach(node => node.classList.remove('active'));
    agencyPaths.forEach(path => path.classList.remove('active'));
    agencyHud.classList.remove('visible');
  };

  agencyNodes.forEach(node => {
    node.addEventListener('click', (e) => {
      e.stopPropagation();
      const pathName = node.dataset.path;
      openAgencyHud(pathName);
    });
  });

  agencyHud.querySelector('.hud-close').addEventListener('click', (e) => {
    e.stopPropagation();
    closeAgencyHud();
  });

  // Global click anywhere outside HUD to dismiss
  document.addEventListener('click', (e) => {
    if (!constellationHud.contains(e.target)) {
      closeConstellationHud();
    }
    if (!agencyHud.contains(e.target)) {
      closeAgencyHud();
    }
  });

  // 7. Restart Button Handler
  restartBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 8. Custom dynamic text expansion for Monolith (inserts "NOT" dynamically on scroll)
  // Let's do this directly by listening to the scroll of the step-split
  const headingToAnimate = document.querySelector('[data-step="hero-split"] .step-heading');
  if (headingToAnimate) {
    // Initialize standard state
    headingToAnimate.innerHTML = 'AI Capacity Is <span class="not-span">NOT</span> a Monolith';
    const notSpan = headingToAnimate.querySelector('.not-span');
    
    if (notSpan) {
      notSpan.style.display = 'inline-block';
      notSpan.style.width = '0px';
      notSpan.style.opacity = '0';
      notSpan.style.overflow = 'hidden';
      notSpan.style.transition = 'width 0.4s ease, opacity 0.4s ease, margin 0.4s ease';
      notSpan.style.color = 'var(--color-accent)';
      notSpan.style.fontWeight = '800';
      
      const textObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            notSpan.style.width = '38px';
            notSpan.style.opacity = '1';
            notSpan.style.margin = '0 6px';
          } else {
            notSpan.style.width = '0px';
            notSpan.style.opacity = '0';
            notSpan.style.margin = '0';
          }
        });
      }, {
        root: null,
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0.1
      });
      textObserver.observe(document.querySelector('[data-step="hero-split"]'));
    }
  }

});
