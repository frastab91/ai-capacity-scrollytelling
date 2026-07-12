import React, { useEffect, useRef } from 'react';

export default function VectorFieldCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    // Dynamically retrieve CSS variables from the document style
    const computedStyles = getComputedStyle(document.documentElement);
    const goldColor = computedStyles.getPropertyValue('--color-gold').trim() || 'hsl(39, 53%, 52%)';
    const accentColor = computedStyles.getPropertyValue('--color-accent').trim() || 'hsl(2, 64%, 43%)';
    const blueColor = computedStyles.getPropertyValue('--color-accent-blue').trim() || 'hsl(198, 45%, 20%)';
    const mutedColor = computedStyles.getPropertyValue('--color-text-muted').trim() || 'hsl(25, 8%, 40%)';

    const resize = () => {
      // Set canvas size to match viewport (since sticky-graphic takes 100vh)
      canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement.clientHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const spacing = 44; // Spacing between particles
      const jitter = 12;   // Slight displacement for organic Poisson-like spacing
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + (Math.random() - 0.5) * jitter;
          const y = j * spacing + (Math.random() - 0.5) * jitter;

          // Distribute color variants organically:
          // Most are muted slate/grey; some are gold/blue/crimson accents
          const rand = Math.random();
          let baseColor = mutedColor;
          let activeColor = goldColor;

          if (rand > 0.90) {
            baseColor = goldColor;
            activeColor = goldColor;
          } else if (rand > 0.82) {
            baseColor = blueColor;
            activeColor = accentColor;
          } else if (rand > 0.76) {
            baseColor = accentColor;
            activeColor = goldColor;
          }

          particles.push({
            x,
            y,
            angle: Math.random() * Math.PI * 2, // Start with random rotation
            targetAngle: Math.random() * Math.PI * 2,
            baseLength: 12 + Math.random() * 6,
            baseWidth: 1.5,
            baseColor,
            activeColor,
            driftSpeed: (Math.random() - 0.5) * 0.006, // Drift speed when idle
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;

      // Get parent container bounding box to calculate relative pointer coords if needed
      const rect = canvas.getBoundingClientRect();
      const relativeMouseX = mouse.x - rect.left;
      const relativeMouseY = mouse.y - rect.top;

      particles.forEach((p) => {
        const dx = relativeMouseX - p.x;
        const dy = relativeMouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Max interaction distance
        const maxDist = 280;
        const proximity = Math.max(0, 1 - dist / maxDist);

        if (mouse.active && dist < maxDist + 100) {
          // Align vectors to point towards cursor
          p.targetAngle = Math.atan2(dy, dx);
        } else {
          // Natural slow idle drift
          p.targetAngle += p.driftSpeed;
        }

        // Smooth rotation interpolation (lerping)
        let diff = p.targetAngle - p.angle;
        // Normalize diff to prevent wild spins
        diff = Math.atan2(Math.sin(diff), Math.cos(diff));
        p.angle += diff * 0.08;

        // Dynamic visual attributes based on pointer distance
        const currentLength = p.baseLength + proximity * 12;
        const currentWidth = p.baseWidth + proximity * 1.0;
        const opacity = mouse.active
          ? 0.06 + proximity * 0.42
          : 0.06; // Soft and almost invisible when not active

        // Color transition depending on proximity to cursor
        const drawColor = proximity > 0.25 ? p.activeColor : p.baseColor;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.strokeStyle = drawColor;
        ctx.globalAlpha = opacity;
        ctx.lineWidth = currentWidth;
        ctx.beginPath();
        // Draw a clean dash
        ctx.moveTo(-currentLength / 2, 0);
        ctx.lineTo(currentLength / 2, 0);
        ctx.stroke();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);

    // Track mouse position on viewport
    const handlePointerMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerleave', handlePointerLeave);
    
    // Initial setup
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
