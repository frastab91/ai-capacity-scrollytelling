import { useState, useEffect } from 'react';

/**
 * Returns true if the current viewport width is <= the given breakpoint (default 767px).
 */
export function useIsMobile(breakpoint = 767) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= breakpoint);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [breakpoint]);

  return isMobile;
}
