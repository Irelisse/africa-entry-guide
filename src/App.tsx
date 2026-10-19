import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CountryPage } from './pages/CountryPage';
import { siteConfig } from './data/site-config';

export default function App() {
  const [currentCountrySlug, setCurrentCountrySlug] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#country/')) {
        const slug = hash.replace('#country/', '').trim();
        setCurrentCountrySlug(slug || null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentCountrySlug(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToCountry = (slug: string) => {
    window.location.hash = `#country/${slug}`;
    setCurrentCountrySlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentCountrySlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (anchor: string) => (e: React.MouseEvent) => {
    if (currentCountrySlug) {
      e.preventDefault();
      navigateToHome();
      setTimeout(() => {
        const el = document.getElementById(anchor);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(anchor);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between ${currentCountrySlug ? 'country-view-page' : 'home-page'}`}>
      <a className="skip-link" href="#main">
        К содержанию
      </a>

      <Header overlay={!currentCountrySlug} />

      <main id="main" className="flex-1">
        {currentCountrySlug ? (
          <CountryPage slug={currentCountrySlug} onBack={navigateToHome} />
        ) : (
          <HomePage onSelectCountryPage={navigateToCountry} />
        )}
      </main>

      <footer className="site-footer">
        <div className="shell footer-top">
          <div className="footer-identity">
            <a
              className="footer-brand"
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                navigateToHome();
              }}
            >
              {siteConfig.name}
            </a>
            <span className="footer-edition">{siteConfig.edition}</span>
            <p className="footer-tagline">{siteConfig.tagline}.</p>
            <p className="footer-authors">
              От авторов каналов{' '}
              <a
                href={siteConfig.authors[0].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>«{siteConfig.authors[0].name}»</strong>
              </a>{' '}
              и{' '}
              <a
                href={siteConfig.authors[1].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>«{siteConfig.authors[1].name}»</strong>
              </a>
              .
            </p>
          </div>
          <nav className="footer-nav" aria-label="Навигация в подвале">
            <a href="#about" onClick={handleNavClick('about')}>
              О проекте
            </a>
            <a href="#directions" onClick={handleNavClick('directions')}>
              Направления
            </a>
          </nav>
        </div>
        <div className="shell footer-bottom">
          <p>{siteConfig.disclaimer}</p>
          <p className="sm:text-right">© 2026 «{siteConfig.name}»</p>
        </div>
      </footer>
    </div>
  );
}
