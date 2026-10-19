import React from 'react';
import type { CountryPageData } from '../../types/country-page';
import { getFlagUrl } from '../../utils/registry';
import mapPathsData from '../../data/africa-map-paths.json';

interface CountryHeroProps {
  data: CountryPageData;
  onBack: () => void;
}

export const CountryHero: React.FC<CountryHeroProps> = ({ data, onBack }) => {
  const flagUrl = getFlagUrl(data.slug, data.flagCode || data.iso2);

  // Find country path on Africa map for locator highlight
  const mapItem = (mapPathsData as Array<{ slug: string; d: string; cx: number; cy: number }>).find(
    (m) => m.slug === data.slug
  );

  const hasPhoto = Boolean(data.heroImage);

  return (
    <div
      className={`relative border-b overflow-hidden ${
        hasPhoto
          ? 'bg-[#12231c] text-[#fffdf8] border-[#17382f]'
          : 'bg-[#f7f3eb] text-[#17201c] border-[rgba(23,32,28,0.12)]'
      }`}
    >
      {/* Background Hero Photo (if available) */}
      {hasPhoto && (
        <>
          <img
            src={data.heroImage}
            alt={data.nameRu}
            className="absolute inset-0 w-full h-full object-cover object-center filter saturate-95 brightness-90"
            loading="eager"
          />
          {/* Editorial Double Scrim for maximum text contrast */}
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(7, 16, 12, 0.94) 0%, rgba(7, 16, 12, 0.78) 55%, rgba(7, 16, 12, 0.45) 100%), linear-gradient(180deg, rgba(7, 16, 12, 0.4) 0%, rgba(7, 16, 12, 0.85) 100%)',
            }}
          />
        </>
      )}

      {/* Hero Content */}
      <div className="relative z-10 shell max-w-5xl pt-7 pb-10 md:pt-10 md:pb-14">
        {/* Back Link with High Contrast */}
        <button
          type="button"
          onClick={onBack}
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition mb-6 cursor-pointer ${
            hasPhoto
              ? 'text-[#dfb88d] hover:text-white bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-white/15'
              : 'text-[#17382f] hover:text-[#b66243]'
          }`}
        >
          <span>←</span>
          <span>Все направления</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Flag, Titles, Badges, Metadata */}
          <div className="lg:col-span-7">
            {/* Flag Badge & Region Pill */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <div className="w-12 h-8 rounded-lg overflow-hidden border border-white/20 bg-white shadow-xs flex items-center justify-center shrink-0">
                {flagUrl ? (
                  <img
                    src={flagUrl}
                    alt={`Флаг: ${data.nameRu}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-mono text-xs font-bold text-[#17382f]">
                    {data.iso2 || '✦'}
                  </span>
                )}
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  hasPhoto
                    ? 'bg-[#dfb88d] text-[#12231c]'
                    : 'bg-[#17382f]/10 text-[#17382f]'
                }`}
              >
                {data.region}
              </span>
              {data.iso2 && (
                <span
                  className={`font-mono text-xs px-2.5 py-0.5 rounded-md ${
                    hasPhoto
                      ? 'bg-black/40 text-white/90 border border-white/20'
                      : 'bg-white border border-[rgba(23,32,28,0.12)] text-[#6a736d]'
                  }`}
                >
                  ISO: {data.iso2} {data.iso3 ? `· ${data.iso3}` : ''}
                </span>
              )}
            </div>

            {/* Country Names */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-[1.02] tracking-tight ${
                hasPhoto ? 'text-[#fffdf8] drop-shadow-sm' : 'text-[#17201c]'
              }`}
            >
              {data.nameRu}
            </h1>
            <p
              className={`text-lg sm:text-xl font-serif italic mt-1 mb-6 ${
                hasPhoto ? 'text-[#dfb88d]' : 'text-[#6a736d]'
              }`}
            >
              {data.nameEn}
            </p>

            {/* Quick Metadata Row */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t text-xs ${
                hasPhoto
                  ? 'border-white/15'
                  : 'border-[rgba(23,32,28,0.1)]'
              }`}
            >
              <div
                className={`p-2.5 rounded-xl ${
                  hasPhoto
                    ? 'bg-black/35 backdrop-blur-sm border border-white/10'
                    : 'bg-transparent'
                }`}
              >
                <span className={hasPhoto ? 'text-white/60 block mb-0.5' : 'text-[#6a736d] block mb-0.5'}>
                  Столица
                </span>
                <strong className={`text-sm font-semibold block ${hasPhoto ? 'text-white' : 'text-[#17201c]'}`}>
                  {data.capital}
                </strong>
              </div>
              <div
                className={`p-2.5 rounded-xl ${
                  hasPhoto
                    ? 'bg-black/35 backdrop-blur-sm border border-white/10'
                    : 'bg-transparent'
                }`}
              >
                <span className={hasPhoto ? 'text-white/60 block mb-0.5' : 'text-[#6a736d] block mb-0.5'}>
                  Валюта
                </span>
                <strong className={`text-sm font-semibold block ${hasPhoto ? 'text-white' : 'text-[#17201c]'}`}>
                  {data.currency.code} ({data.currency.name})
                </strong>
              </div>
              <div
                className={`col-span-2 sm:col-span-1 p-2.5 rounded-xl ${
                  hasPhoto
                    ? 'bg-black/35 backdrop-blur-sm border border-white/10'
                    : 'bg-transparent'
                }`}
              >
                <span className={hasPhoto ? 'text-white/60 block mb-0.5' : 'text-[#6a736d] block mb-0.5'}>
                  Координаты
                </span>
                <span className={`font-mono text-[11px] block ${hasPhoto ? 'text-white/80' : 'text-[#6a736d]'}`}>
                  {data.coordinates.countryLat.toFixed(2)}°, {data.coordinates.countryLon.toFixed(2)}°
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Geographic Locator Mini-Map */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className={`relative w-64 sm:w-72 aspect-[710/735] rounded-2xl p-4 shadow-sm flex flex-col items-center ${
                hasPhoto
                  ? 'bg-black/45 backdrop-blur-md border border-white/20'
                  : 'bg-[#eee8dd] border border-[rgba(23,32,28,0.12)]'
              }`}
            >
              <span
                className={`text-[10px] uppercase font-bold tracking-wider self-start mb-1 ${
                  hasPhoto ? 'text-[#dfb88d]' : 'text-[#6a736d]'
                }`}
              >
                Положение на карте
              </span>
              <svg
                viewBox="0 0 710 735"
                className="w-full h-full filter drop-shadow-xs select-none"
              >
                {/* Background Mainland Contours */}
                <g opacity={hasPhoto ? 0.35 : 0.45}>
                  {(mapPathsData as Array<{ slug: string; d: string }>).map((c) => (
                    <path
                      key={c.slug}
                      d={c.d}
                      fill={hasPhoto ? '#8ba298' : '#ded7c9'}
                      stroke={hasPhoto ? '#ffffff' : '#8a948d'}
                      strokeWidth="1"
                    />
                  ))}
                </g>

                {/* Highlighted Country */}
                {mapItem && (
                  <path
                    d={mapItem.d}
                    fill={hasPhoto ? '#dfb88d' : '#17382f'}
                    stroke={hasPhoto ? '#ffffff' : '#dfb88d'}
                    strokeWidth="3"
                    className="drop-shadow-md"
                  />
                )}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
