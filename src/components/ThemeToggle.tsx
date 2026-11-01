import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  compact?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', compact = false }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer select-none ${
        isDark
          ? 'bg-[#1b2721] text-[#e8e4db] hover:bg-[#23332b] border border-[#2d4036] shadow-xs'
          : 'bg-[#eee8dd] text-[#17382f] hover:bg-[#e4ded2] border border-[rgba(23,32,28,0.14)] shadow-xs'
      } ${className}`}
      aria-label={isDark ? 'Включить дневной режим' : 'Включить ночной режим'}
      title={isDark ? 'Включить дневной режим' : 'Включить ночной режим'}
    >
      <span className="relative flex items-center justify-center w-4 h-4">
        {isDark ? (
          // Moon icon
          <svg
            className="w-3.5 h-3.5 text-[#dfb88d] transition-transform duration-200 rotate-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          // Sun icon
          <svg
            className="w-3.5 h-3.5 text-[#b66243] transition-transform duration-200 rotate-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        )}
      </span>
      {!compact && (
        <span className="hidden sm:inline font-mono tracking-wider text-[11px] uppercase">
          {isDark ? 'Ночь' : 'День'}
        </span>
      )}
    </button>
  );
};
