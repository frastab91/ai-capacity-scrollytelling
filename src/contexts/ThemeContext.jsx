import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const themeVariables = {
  white: {
    '--h-bg': '40',
    '--s-bg': '10%',
    '--l-bg': '99%',
    '--color-bg': 'hsl(40, 10%, 99%)',
    '--color-text': 'hsl(20, 10%, 12%)',
    '--color-text-muted': 'hsl(25, 8%, 45%)',
    '--color-border': 'hsl(35, 10%, 88%)',
    '--color-accent': 'hsl(2, 64%, 43%)',
    '--color-accent-blue': 'hsl(198, 45%, 20%)',
    '--color-accent-green': 'hsl(152, 40%, 30%)',
    '--color-gold': 'hsl(39, 53%, 52%)',
  },
  beige: {
    '--h-bg': '40',
    '--s-bg': '33%',
    '--l-bg': '98%',
    '--color-bg': 'hsl(40, 33%, 98%)',
    '--color-text': 'hsl(20, 10%, 10%)',
    '--color-text-muted': 'hsl(25, 8%, 40%)',
    '--color-border': 'hsl(35, 12%, 86%)',
    '--color-accent': 'hsl(2, 64%, 43%)',
    '--color-accent-blue': 'hsl(198, 45%, 20%)',
    '--color-accent-green': 'hsl(152, 40%, 30%)',
    '--color-gold': 'hsl(39, 53%, 52%)',
  },
  dark: {
    '--h-bg': '220',
    '--s-bg': '15%',
    '--l-bg': '12%',
    '--color-bg': 'hsl(220, 15%, 12%)',
    '--color-text': 'hsl(35, 20%, 92%)',
    '--color-text-muted': 'hsl(35, 10%, 65%)',
    '--color-border': 'hsl(220, 10%, 25%)',
    '--color-accent': 'hsl(2, 70%, 55%)',
    '--color-accent-blue': 'hsl(198, 50%, 60%)',
    '--color-accent-green': 'hsl(152, 50%, 50%)',
    '--color-gold': 'hsl(39, 60%, 60%)',
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState('beige');

  const applyTheme = useCallback((t) => {
    const vars = themeVariables[t];
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, []);

  const setTheme = useCallback((t) => {
    setThemeState(t);
    applyTheme(t);
    try {
      localStorage.setItem('ai-capacity-theme', t);
    } catch {}
  }, [applyTheme]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ai-capacity-theme');
      if (saved && themeVariables[saved]) {
        setThemeState(saved);
        applyTheme(saved);
      } else {
        applyTheme('beige');
      }
    } catch {
      applyTheme('beige');
    }
  }, [applyTheme]);

  const colors = {
    background: themeVariables[theme]['--color-bg'],
    text: themeVariables[theme]['--color-text'],
    border: themeVariables[theme]['--color-border'],
    accent: themeVariables[theme]['--color-accent'],
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}
