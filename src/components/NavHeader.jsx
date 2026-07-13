import { useState } from 'react';
import { Palette, X, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function NavHeader() {
  const { theme, setTheme, colors } = useTheme();
  const [showThemePicker, setShowThemePicker] = useState(false);
  const [showVibeCodingModal, setShowVibeCodingModal] = useState(false);

  const themes = [
    { id: 'white', label: 'Editorial White', bgColor: '#fcfcf9', borderColor: '#e0e0e0' },
    { id: 'beige', label: 'Warm Beige', bgColor: '#fdfbf7', borderColor: '#b28d46' },
    { id: 'dark', label: 'Dark Mode', bgColor: '#1a1a2e' },
  ];

  return (
    <>
      <header
        className="nav-header"
        style={{ backgroundColor: colors.background, borderBottom: `1px solid ${colors.border}40` }}
      >
        <div className="nav-header-inner">
          <a
            href="https://www.linkedin.com/in/frastab/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-header-left"
            style={{ color: colors.text }}
          >
            <span className="nav-header-name">Francesco Stabilito</span>
            <ExternalLink className="nav-header-icon" />
          </a>

          <div className="nav-header-right">
            <div className="nav-header-picker-wrap">
              <button
                onClick={() => setShowThemePicker(!showThemePicker)}
                className="nav-header-btn"
                style={{ color: colors.text }}
                aria-label="Change theme"
              >
                <Palette className="nav-header-icon-btn" />
              </button>

              {showThemePicker && (
                <div
                  className="nav-header-dropdown"
                  style={{ backgroundColor: colors.background, borderColor: `${colors.border}40` }}
                >
                  <div className="nav-header-themes">
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTheme(t.id);
                          setShowThemePicker(false);
                        }}
                        className="nav-header-theme-btn"
                        style={{
                          backgroundColor: t.bgColor,
                          border: `2px solid ${t.borderColor || (t.id === 'dark' ? '#ffffff' : '#e0e0e0')}`,
                          outline: theme === t.id ? `3px solid ${colors.accent}` : 'none',
                          outlineOffset: '2px',
                        }}
                        aria-label={t.label}
                        title={t.label}
                      >
                        {theme === t.id && (
                          <div
                            className="nav-header-theme-dot"
                            style={{ backgroundColor: t.id === 'beige' ? '#b28d46' : t.id === 'dark' ? '#ffffff' : '#1a1a1a' }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setShowVibeCodingModal(true)}
              className="nav-header-vibe"
              style={{ color: colors.text }}
            >
              <span className="nav-header-vibe-light">vibe </span>
              <span className="nav-header-vibe-bold">coded</span>
            </button>
          </div>
        </div>
      </header>

      {showVibeCodingModal && (
        <div
          className="nav-header-overlay"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          onClick={() => setShowVibeCodingModal(false)}
        >
          <div
            className="nav-header-modal"
            style={{ backgroundColor: colors.background }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVibeCodingModal(false)}
              className="nav-header-modal-close"
              style={{ color: colors.text }}
              aria-label="Close modal"
            >
              <X className="nav-header-modal-x" />
            </button>

            <h2 className="nav-header-modal-title" style={{ color: colors.text }}>
              About Vibe Coding
            </h2>

            <div className="nav-header-modal-body" style={{ color: colors.text }}>
              <p>
                <span className="nav-header-italic nav-header-medium">Vibe coding</span> is the practice of using AI tools to rapidly generate, iterate, and refine code through natural conversation.
              </p>

              <p>
                This website was created entirely using <span className="nav-header-semibold">Figma Make</span> and{' '}
                <span className="nav-header-semibold">GitHub Co-pilot - with prompt optimization on Gemini 3.0</span>, translating conceptual prompts into a fully functional, responsive web experience.
              </p>

              <p className="nav-header-accent-italic" style={{ color: '#b28d46' }}>
                No traditional hand-coding required—just ideas, iteration, and AI collaboration.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
