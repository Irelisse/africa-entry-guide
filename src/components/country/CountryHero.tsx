import React, { useState } from 'react';
import type { CountryPageData } from '../../types/country-page';
import { getFlagUrl } from '../../utils/registry';
import { resolveAssetUrl } from '../../utils/assets';
import mapPathsData from '../../data/africa-map-paths.json';

interface CountryHeroProps {
  data: CountryPageData;
  onBack: () => void;
}

export const CountryHero: React.FC<CountryHeroProps> = ({ data, onBack }) => {
  const [flagFailed, setFlagFailed] = useState(false);
  const rawFlagUrl = getFlagUrl(data.slug, data.flagCode || data.iso2);
  const flagUrl = resolveAssetUrl(rawFlagUrl);

  // Find country path on Africa map for locator highlight
  const mapItem = (mapPathsData as Array<{ slug: string; d: string; cx: number; cy: number }>).find(
    (m) => m.slug === data.slug
  );

  const hasPhoto = Boolean(data.heroImage);
  const heroImageUrl = resolveAssetUrl(data.heroImage);

  return (
    <div
      className={`relative border-b overflow-hidden ${
        hasPhoto
          ? 'bg-[#12231c] text-[#fffdf8] border-[#17382f]'
          : 'bg-[#f7f3eb] text-[#17201c] border-[rgba(23,32,28,0.12)]'
      }`}
    >
      {/* Background Hero Photo (if available) */}
      {hasPhoto && heroImageUrl && (
        <>
          <img
            src={heroImageUrl}
            alt={data.nameRu}
            className="absolute inset-0 w-full h-full object-cover object-center filter saturate-105 contrast-[1.02]"
            loading="eager"
          />
          {/* Luminous, cinematic editorial scrim: clear landscape view in center/right, smooth dark gradient on text left */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, rgba(7, 16, 12, 0.88) 0%, rgba(7, 16, 12, 0.62) 42%, rgba(7, 16, 12, 0.20) 75%, rgba(7, 16, 12, 0.12) 100%), linear-gradient(180deg, rgba(7, 16, 12, 0.28) 0%, rgba(7, 16, 12, 0.05) 45%, rgba(7, 16, 12, 0.72) 100%)',
            }}
          />
        </>
      )}

      {/* Hero Content */}
      <div className="relative z-10 shell max-w-5xl pt-7 pb-8 md:pt-10 md:pb-12">
        {/* Back Link with High Contrast */}
        <button
          type="button"
          onClick={onBack}
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition mb-6 cursor-pointer ${
            hasPhoto
              ? 'text-[#dfb88d] hover:text-white bg-black/45 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/20 shadow-xs'
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
              <div className="w-12 h-8 rounded-lg overflow-hidden border border-white/30 bg-white shadow-sm flex items-center justify-center shrink-0">
                {flagUrl && !flagFailed ? (
                  <img
                    src={flagUrl}
                    alt={`Флаг: ${data.nameRu}`}
                    className="w-full h-full object-cover"
                    onError={() => setFlagFailed(true)}
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
                    ? 'bg-[#dfb88d] text-[#12231c] shadow-xs'
                    : 'bg-[#17382f]/10 text-[#17382f]'
                }`}
              >
                {data.region}
              </span>
              {data.iso2 && (
                <span
                  className={`font-mono text-xs px-2.5 py-0.5 rounded-md ${
                    hasPhoto
                      ? 'bg-black/45 text-white/95 border border-white/25 backdrop-blur-sm'
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
                hasPhoto ? 'text-[#fffdf8] drop-shadow-md' : 'text-[#17201c]'
              }`}
            >
              {data.nameRu}
            </h1>
            <p
              className={`text-lg sm:text-xl font-serif italic mt-1 mb-6 ${
                hasPhoto ? 'text-[#dfb88d] drop-shadow-sm' : 'text-[#6a736d]'
              }`}
            >
              {data.nameEn}
            </p>

            {/* Quick Metadata Row */}
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t text-xs ${
                hasPhoto
                  ? 'border-white/20'
                  : 'border-[rgba(23,32,28,0.1)]'
              }`}
            >
              <div
                className={`p-2.5 rounded-xl ${
                  hasPhoto
                    ? 'bg-black/40 backdrop-blur-md border border-white/15'
                    : 'bg-transparent'
                }`}
              >
                <span className={hasPhoto ? 'text-white/70 block mb-0.5' : 'text-[#6a736d] block mb-0.5'}>
                  Столица
                </span>
                <strong className={`text-sm font-semibold block ${hasPhoto ? 'text-white' : 'text-[#17201c]'}`}>
                  {data.capital}
                </strong>
              </div>
              <div
                className={`p-2.5 rounded-xl ${
                  hasPhoto
                    ? 'bg-black/40 backdrop-blur-md border border-white/15'
                    : 'bg-transparent'
                }`}
              >
                <span className={hasPhoto ? 'text-white/70 block mb-0.5' : 'text-[#6a736d] block mb-0.5'}>
                  Валюта
                </span>
                <strong className={`text-sm font-semibold block ${hasPhoto ? 'text-white' : 'text-[#17201c]'}`}>
                  {data.currency.code} ({data.currency.name})
                </strong>
              </div>
              <div
                className={`col-span-2 sm:col-span-1 p-2.5 rounded-xl ${
                  hasPhoto
                    ? 'bg-black/40 backdrop-blur-md border border-white/15'
                    : 'bg-transparent'
                }`}
              >
                <span className={hasPhoto ? 'text-white/70 block mb-0.5' : 'text-[#6a736d] block mb-0.5'}>
                  Координаты
                </span>
                <span className={`font-mono text-[11px] block ${hasPhoto ? 'text-white/85' : 'text-[#6a736d]'}`}>
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
                  ? 'bg-black/50 backdrop-blur-md border border-white/20'
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

        {/* Editorial Photo Location Caption */}
        {hasPhoto && data.heroCaption && (
          <div className="mt-5 pt-3 border-t border-white/10 flex justify-end">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 shadow-xs">
              <span className="opacity-70">📷</span>
              <span>{data.heroCaption}</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
