import React, { useState } from 'react';
import mapPathsData from '../data/africa-map-paths.json';
import { getFlagUrl, isDestinationPublished } from '../utils/registry';


interface MapPathItem {
  slug: string;
  name: string;
  iso2: string;
  flagCode?: string;
  d: string;
  cx: number;
  cy: number;
}

interface IslandItem {
  slug: string;
  name: string;
  iso2: string;
}

const ISLAND_NATIONS: IslandItem[] = [
  { slug: 'cabo-verde', name: 'Кабо-Верде', iso2: 'CV' },
  { slug: 'comoros', name: 'Коморы', iso2: 'KM' },
  { slug: 'mauritius', name: 'Маврикий', iso2: 'MU' },
  { slug: 'sao-tome-and-principe', name: 'Сан-Томе и Принсипи', iso2: 'ST' },
  { slug: 'seychelles', name: 'Сейшельские Острова', iso2: 'SC' },
  { slug: 'reunion', name: 'Реюньон', iso2: 'RE' },
];

interface AfricaMapProps {
  onSelectCountry?: (slug: string, name: string) => void;
  onOpenCountryPage?: (slug: string) => void;
  selectedSlug?: string | null;
}

export const AfricaMap: React.FC<AfricaMapProps> = ({
  onSelectCountry,
  onOpenCountryPage,
  selectedSlug,
}) => {
  const [hoveredCountry, setHoveredCountry] = useState<MapPathItem | IslandItem | null>(null);
  const [isExpanded, setIsExpanded] = useState(true);

  const countries = mapPathsData as MapPathItem[];

  const handleCountryClick = (c: MapPathItem | IslandItem) => {
    setHoveredCountry(c);
    if (onSelectCountry) {
      onSelectCountry(c.slug, c.name);
    }
  };

  const currentFlagUrl = hoveredCountry
    ? getFlagUrl(hoveredCountry.slug, (hoveredCountry as MapPathItem).flagCode || hoveredCountry.iso2)
    : undefined;

  const isPublished = hoveredCountry ? isDestinationPublished(hoveredCountry.slug) : false;

  return (
    <div className="w-full my-6 bg-[#f7f3eb] rounded-2xl border border-[rgba(23,32,28,0.14)] p-3.5 sm:p-6 shadow-sm overflow-hidden">
      <div className="flex items-center justify-between gap-3 mb-3 border-b border-[rgba(23,32,28,0.1)] pb-3">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#b66243] block">
            Интерактивный обзор
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#17201c] leading-tight">
            Карта Африки
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#eee8dd] hover:bg-[#e4ddd0] text-[#17382f] transition cursor-pointer"
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Свернуть карту' : 'Развернуть карту'}
        </button>
      </div>

      {isExpanded && (
        <div className="relative">
          {/* Active / Hovered Info Banner - strictly fixed height (h-12) to eliminate any layout shifting */}
          <div className="h-12 w-full flex items-center justify-between px-3.5 bg-[#eee8dd] rounded-xl mb-3 text-xs border border-[rgba(23,32,28,0.08)] overflow-hidden">
            {hoveredCountry ? (
              <div className="flex items-center gap-2.5 min-w-0 flex-nowrap w-full">
                {/* Mini Flag in color */}
                <div className="w-7 h-5 rounded overflow-hidden shrink-0 border border-[rgba(23,32,28,0.2)] bg-white shadow-xs flex items-center justify-center">
                  {currentFlagUrl ? (
                    <img
                      src={currentFlagUrl}
                      alt={`Флаг: ${hoveredCountry.name}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-mono text-[9px] font-bold text-[#17382f]">
                      {hoveredCountry.iso2 || '—'}
                    </span>
                  )}
                </div>
                <span className="font-bold text-[#17201c] text-sm sm:text-base font-serif truncate">
                  {hoveredCountry.name}
                </span>
                {hoveredCountry.iso2 && (
                  <span className="font-mono text-[10px] text-[#6a736d] bg-white/80 px-1.5 py-0.5 rounded border border-[rgba(23,32,28,0.08)] shrink-0">
                    {hoveredCountry.iso2}
                  </span>
                )}
                {isPublished ? (
                  <button
                    type="button"
                    onClick={() => onOpenCountryPage?.(hoveredCountry.slug)}
                    className="btn-primary text-[11px] py-1 px-2.5 ml-auto shrink-0 shadow-xs"
                  >
                    <span>Открыть страницу</span>
                    <span>→</span>
                  </button>
                ) : (
                  <span className="text-[11px] text-[#b66243] hidden sm:inline ml-auto shrink-0">
                    (нажмите для перехода в каталоге)
                  </span>
                )}
              </div>
            ) : (
              <span className="text-[#6a736d] italic text-xs truncate">
                Нажмите или наведите курсор на страну
              </span>
            )}
          </div>


          {/* Focused Continent SVG Canvas (viewBox 0 0 710 735) */}
          <div className="relative w-full aspect-[710/735] flex items-center justify-center">
            <svg
              viewBox="0 0 710 735"
              className="w-full h-full filter drop-shadow-sm select-none"
              style={{ touchAction: 'pan-y' }}
            >
              <g className="countries-group">
                {countries.map((c) => {
                  const isHovered = hoveredCountry?.slug === c.slug;
                  const isSelected = selectedSlug === c.slug;

                  return (
                    <path
                      key={c.slug}
                      d={c.d}
                      id={`map-country-${c.slug}`}
                      className="transition-colors duration-150 cursor-pointer"
                      fill={isHovered || isSelected ? '#17382f' : '#ded7c9'}
                      stroke={isHovered || isSelected ? '#dfb88d' : '#22483d'}
                      strokeWidth={isHovered || isSelected ? 1.8 : 0.8}
                      strokeLinejoin="round"
                      onMouseEnter={() => setHoveredCountry(c)}
                      onMouseLeave={() => {
                        if (hoveredCountry?.slug === c.slug) {
                          setHoveredCountry(null);
                        }
                      }}
                      onClick={() => handleCountryClick(c)}
                    >
                      <title>{c.name}</title>
                    </path>
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Island Nations - clean, elegant pill buttons below the map */}
          <div className="mt-3 pt-3 border-t border-[rgba(23,32,28,0.08)]">
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#6a736d] block mb-2">
              Островные государства и территории:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {ISLAND_NATIONS.map((island) => {
                const flagUrl = getFlagUrl(island.slug, island.iso2);
                const isHovered = hoveredCountry?.slug === island.slug;
                const isSelected = selectedSlug === island.slug;

                return (
                  <button
                    key={island.slug}
                    id={`island-pill-${island.slug}`}
                    type="button"
                    onClick={() => handleCountryClick(island)}
                    onMouseEnter={() => setHoveredCountry(island)}
                    onMouseLeave={() => {
                      if (hoveredCountry?.slug === island.slug) {
                        setHoveredCountry(null);
                      }
                    }}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs transition cursor-pointer border ${
                      isHovered || isSelected
                        ? 'bg-[#17382f] text-white border-[#17382f] shadow-xs'
                        : 'bg-[#eee8dd] hover:bg-[#e2dbce] text-[#17201c] border-[rgba(23,32,28,0.08)]'
                    }`}
                  >
                    {flagUrl && (
                      <img
                        src={flagUrl}
                        alt=""
                        className="w-4 h-3 object-cover rounded-xs shrink-0"
                      />
                    )}
                    <span>{island.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
