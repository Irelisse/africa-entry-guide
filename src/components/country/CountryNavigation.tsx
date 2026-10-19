import React from 'react';

const NAV_LINKS = [
  { id: 'quick-summary-title', label: 'Обзор' },
  { id: 'routes-section', label: 'Способы въезда' },
  { id: 'requirements', label: 'Чеклист' },
  { id: 'application-process', label: 'Инструкция' },
  { id: 'documents', label: 'Документы' },
  { id: 'health', label: 'Здоровье' },
  { id: 'border-and-logistics', label: 'На границе' },
  { id: 'contacts-and-sources', label: 'Источники' },
];

export const CountryNavigation: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-0 z-30 backdrop-blur-md bg-[#eee8dd]/95 border-b border-[rgba(23,32,28,0.12)] py-2.5 shadow-xs -mx-4 sm:mx-0 px-4 sm:px-0">
      <div className="shell max-w-5xl flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => scrollTo(link.id)}
            className="shrink-0 px-3 py-1 rounded-full bg-white/80 hover:bg-[#17382f] hover:text-white text-[#17201c] font-medium transition cursor-pointer border border-[rgba(23,32,28,0.08)]"
          >
            {link.label}
          </button>
        ))}
      </div>
    </div>
  );
};
