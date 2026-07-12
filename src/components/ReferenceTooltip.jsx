import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function ReferenceTooltip({ term, tooltipText }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') close();
    };
    const handleOutsideClick = (e) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target) &&
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target)
      ) {
        close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [open, close]);

  const toggle = () => setOpen((v) => !v);

  return (
    <span className="ref-trigger-wrapper" style={{ position: 'relative', display: 'inline' }}>
      <span
        ref={triggerRef}
        className="ref-trigger"
        role="button"
        tabIndex={0}
        onClick={toggle}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } }}
        aria-expanded={open}
        aria-label={`Reference for ${term}`}
      >
        {term}
      </span>
      {open && (
        <span
          ref={tooltipRef}
          className="ref-tooltip"
          role="tooltip"
        >
          {tooltipText}
        </span>
      )}
    </span>
  );
}
