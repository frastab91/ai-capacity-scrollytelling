import React, { useEffect, useRef } from 'react';

const nodeData = {
  capacity: {
    title: "AI Benefit Capacity",
    desc: "The overarching ability of a system or community to self-determine its technological future and equitably distribute AI benefits across all other dimensions.",
    example: "Example: Reclaiming agency from external technological monopolies by fostering local access, skills, generation, safeguarding, and infrastructure."
  },
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

const HUD = ({ selectedNode, setSelectedNode, selectedPathway, setSelectedPathway }) => {
  const constellationRef = useRef(null);
  const agencyRef = useRef(null);

  // Close HUD when clicking outside the cards
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // If click is outside constellation HUD card, reset selectedNode
      if (
        selectedNode &&
        constellationRef.current &&
        !constellationRef.current.contains(e.target) &&
        !e.target.closest('.const-node') // Don't close if we clicked an interactive node itself!
      ) {
        setSelectedNode(null);
      }

      // If click is outside agency HUD card, reset selectedPathway
      if (
        selectedPathway &&
        agencyRef.current &&
        !agencyRef.current.contains(e.target) &&
        !e.target.closest('.path-node') // Don't close if we clicked an interactive path terminal!
      ) {
        setSelectedPathway(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [selectedNode, selectedPathway, setSelectedNode, setSelectedPathway]);

  const currentNode = selectedNode ? nodeData[selectedNode] : null;
  const currentPathway = selectedPathway ? agencyData[selectedPathway] : null;

  return (
    <>
      {/* Constellation HUD Card */}
      <div
        ref={constellationRef}
        className={`node-hud-card ${currentNode ? 'visible' : ''}`}
        id="constellation-hud"
      >
        <button 
          className="hud-close" 
          onClick={(e) => {
            e.stopPropagation();
            setSelectedNode(null);
          }}
        >
          &times;
        </button>
        <h3 className="hud-title">{currentNode ? currentNode.title : "Select a Dimension"}</h3>
        <p className="hud-desc">
          {currentNode ? currentNode.desc : "Tap on any outer capability node to explore how it contributes to the overarching AI capacity constellation."}
        </p>
        <div className="hud-example">
          {currentNode ? currentNode.example : ""}
        </div>
      </div>

      {/* Agency HUD Card */}
      <div
        ref={agencyRef}
        className={`vignette-hud-card ${currentPathway ? 'visible' : ''}`}
        id="agency-hud"
      >
        <button 
          className="hud-close" 
          onClick={(e) => {
            e.stopPropagation();
            setSelectedPathway(null);
          }}
        >
          &times;
        </button>
        <h3 className="hud-title">{currentPathway ? currentPathway.title : "Select a Pathway"}</h3>
        <p className="hud-desc">
          {currentPathway ? (
            <>
              {currentPathway.desc}
              <br /><br />
              <span className="vignette-text">
                <strong>{currentPathway.example}</strong>
              </span>
            </>
          ) : (
            "In a pluriversal framing, communities choose how they interact with technology. Explore the distinct paths."
          )}
        </p>
      </div>
    </>
  );
};

export default HUD;
