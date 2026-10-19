import React from 'react';
import { siteConfig } from '../data/site-config';

interface HeaderProps {
  overlay?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ overlay = false }) => {
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (anchor: string) => (e: React.MouseEvent) => {
    const el = document.getElementById(anchor);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${overlay ? 'site-header--overlay' : ''}`}>
      <div className="shell header-inner">
        <a
          className="brand"
          href="#top"
          onClick={handleHomeClick}
          aria-label={`${siteConfig.name} ${siteConfig.edition}: главная`}
        >
          <span className="brand-compass" aria-hidden="true">
            <i />
          </span>
          <span className="brand-copy">
            <strong>{siteConfig.name}</strong>
            <small>{siteConfig.edition}</small>
          </span>
        </a>
        <nav className="header-nav" aria-label="Основная навигация">
          <a href="#about" onClick={handleNavClick('about')}>
            О проекте
          </a>
          <a href="#directions" onClick={handleNavClick('directions')}>
            Направления
          </a>
        </nav>
      </div>
    </header>
  );
};
