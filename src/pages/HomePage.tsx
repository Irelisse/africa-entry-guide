import React, { useState, useMemo, useRef } from 'react';
import { FlagMark } from '../components/FlagMark';
import { AfricaMap } from '../components/AfricaMap';
import registryData from '../data/coverage-registry.json';
import { siteConfig } from '../data/site-config';
import { SECTIONS, filterDestinations, isDestinationPublished } from '../utils/registry';
import type { DestinationItem } from '../utils/registry';

// Using local, highly-optimized WebP photo
const heroImage = '/images/deadvlei.webp';

interface HomePageProps {
  onSelectCountryPage?: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectCountryPage }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCountrySlug, setSelectedCountrySlug] = useState<string | null>(null);

  const directoryRef = useRef<HTMLDivElement>(null);

  const allItems = registryData as DestinationItem[];

  const filteredItems = useMemo(() => {
    return filterDestinations(allItems, searchQuery, selectedType);
  }, [allItems, searchQuery, selectedType]);

  const totalDestinationsCount = allItems.length;

  const handleSelectCountryFromMap = (slug: string, name: string) => {
    setSelectedCountrySlug(slug);
    const found = allItems.find((item) => item.slug === slug);
    if (found) {
      if (selectedType !== 'all' && found.type !== selectedType) {
        setSelectedType('all');
      }
      setSearchQuery(name);
      setTimeout(() => {
        const tile = document.getElementById(`country-${slug}`);
        if (tile) {
          tile.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          directoryRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const handleCategoryChipClick = (key: string) => {
    setSelectedType(key);
    if (key !== 'all') {
      setTimeout(() => {
        const sec = document.getElementById(`section-${key}`);
        sec?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="top" aria-labelledby="hero-title">
        <img
          className="hero-media"
          src={heroImage}
          alt="Deadvlei, Намибия"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="hero-scrim" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="hero-kicker">Африка · въезд · документы · границы</p>
            <h1 id="hero-title">
              <span>Как туда попасть?</span>
              <em>Африка</em>
            </h1>
            <p className="hero-lede">
              <strong>Африка целиком. Один русскоязычный справочник.</strong> 54 государства,
              территории, острова и места, куда обычно никто толком не объясняет, как попасть.
            </p>
          </div>
          <a className="hero-scroll" href="#directions">
            <span>Смотреть направления</span>
            <b aria-hidden="true">↓</b>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="shell about-grid">
          <div className="about-title">
            <p className="eyebrow">О проекте</p>
            <h2>Африка большая. Информация о въезде — не очень.</h2>
          </div>
          <div className="about-copy">
            <p>
              У одной страны старый тариф. У другой мёртвый сайт. У третьей три списка документов, и
              все разные. Где-то правила поменялись, а памятка — нет. Где-то актуальную стоимость
              визы проще узнать у человека в консульстве, чем на сайте самого консульства.
            </p>
            <p className="about-punch">Нас это не устроило.</p>
            <p>
              Мы связались с официальными представителями государств и территорий Африки и собрали в
              одном месте то, что действительно нужно знать перед поездкой: правила въезда, визы,
              документы, сборы, сроки, ограничения и прочие вещи, которые желательно выяснить до
              встречи с пограничником.
            </p>
            <p>
              Здесь есть частично признанные образования, спорные территории, заморские владения,
              автономные регионы, далёкие острова и географические случаи, которые обычные визовые
              справочники чаще всего просто пропускают.
            </p>
            <p>
              <strong>От Алжира до Бир-Тавиля.</strong> От обычного безвиза до мест, где сначала
              приходится выяснить, существует ли вообще процедура въезда.
            </p>
            <p className="about-signoff">
              «Как туда попасть?» — проект авторов каналов{' '}
              <a href={siteConfig.authors[0].url} target="_blank" rel="noopener noreferrer">
                <strong>«{siteConfig.authors[0].name}»</strong>
              </a>{' '}
              и{' '}
              <a href={siteConfig.authors[1].url} target="_blank" rel="noopener noreferrer">
                <strong>«{siteConfig.authors[1].name}»</strong>
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <div className="directory shell" id="directions" ref={directoryRef}>
        <div className="directory-intro">
          <p className="eyebrow">Направления</p>
          <div>
            <h2>Выберите, куда собрались.</h2>
            <p>
              Государства, территории, острова и всё остальное, что мы решили не оставлять за краем
              карты. Всего в каталоге: <strong>{totalDestinationsCount}</strong> направлений.
            </p>
          </div>
        </div>


        {/* Visual Accent: Interactive Vector Map of Africa */}
        <AfricaMap
          onSelectCountry={handleSelectCountryFromMap}
          onOpenCountryPage={onSelectCountryPage}
          selectedSlug={selectedCountrySlug}
        />


        {/* Sticky Filter & Search Bar - strictly fits mobile screen */}
        <div className="sticky top-0 z-20 backdrop-blur-md bg-[#eee8dd]/95 border-y border-[rgba(23,32,28,0.12)] py-3 px-3 -mx-4 sm:mx-0 sm:rounded-2xl sm:border shadow-sm mb-6 max-w-full">
          <div className="flex flex-col md:flex-row gap-2.5 items-stretch md:items-center w-full max-w-full">
            {/* Search Input */}
            <div className="relative flex-1 min-w-0 w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск по названию или коду..."
                className="w-full min-h-[44px] px-3.5 pr-8 py-2 rounded-xl bg-[#fffdf8] border border-[rgba(23,32,28,0.2)] text-[#17201c] placeholder:text-[#6a736d] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#17382f] box-border"
                aria-label="Поиск по каталогу"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCountrySlug(null);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-xs font-bold text-gray-500 hover:text-gray-800 cursor-pointer"
                  aria-label="Очистить поиск"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Select Dropdown */}
            <div className="w-full md:w-auto shrink-0 min-w-0">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full min-h-[44px] px-3 py-2 rounded-xl bg-[#fffdf8] border border-[rgba(23,32,28,0.2)] text-[#17201c] text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#17382f] cursor-pointer box-border"
                aria-label="Фильтр по категориям"
              >
                <option value="all">Все категории ({totalDestinationsCount})</option>
                {SECTIONS.map((sec) => {
                  const count = allItems.filter((i) => i.type === sec.key).length;
                  return (
                    <option key={sec.key} value={sec.key}>
                      {sec.title} ({count})
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* Quick Category Chips - Horizontal scrollable bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-2.5 mt-1 border-t border-[rgba(23,32,28,0.06)] text-xs">
            <button
              type="button"
              onClick={() => handleCategoryChipClick('all')}
              className={`shrink-0 px-2.5 py-1 rounded-full font-medium transition cursor-pointer text-xs ${
                selectedType === 'all'
                  ? 'bg-[#17382f] text-white shadow-xs'
                  : 'bg-white/80 hover:bg-white text-[#17201c] border border-[rgba(23,32,28,0.1)]'
              }`}
            >
              Все ({totalDestinationsCount})
            </button>
            {SECTIONS.map((sec) => {
              const isSelected = selectedType === sec.key;
              const count = allItems.filter((i) => i.type === sec.key).length;
              return (
                <button
                  key={sec.key}
                  type="button"
                  onClick={() => handleCategoryChipClick(sec.key)}
                  className={`shrink-0 px-2.5 py-1 rounded-full font-medium transition cursor-pointer text-xs ${
                    isSelected
                      ? 'bg-[#17382f] text-white shadow-xs'
                      : 'bg-white/80 hover:bg-white text-[#17201c] border border-[rgba(23,32,28,0.1)]'
                  }`}
                >
                  {sec.title} ({count})
                </button>
              );
            })}
          </div>

          {searchQuery && (
            <p className="text-xs text-[#6a736d] mt-2 pt-1 border-t border-[rgba(23,32,28,0.06)]">
              Найдено совпадений: <strong>{filteredItems.length}</strong>
            </p>
          )}
        </div>

        {SECTIONS.map((section, index) => {
          const items = filteredItems.filter((item) => item.type === section.key);
          if (!items.length) return null;

          return (
            <section
              key={section.key}
              className="country-section"
              aria-labelledby={`section-${section.key}`}
            >
              <header className="section-heading">
                <div className="section-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h2 id={`section-${section.key}`}>{section.title}</h2>
                  <p>{section.description}</p>
                </div>
              </header>

              <div className="country-grid">
                {items.map((item) => {
                  const isPublished = isDestinationPublished(item.slug);

                  if (isPublished) {
                    return (
                      <a
                        key={item.slug}
                        id={`country-${item.slug}`}
                        href={`#country/${item.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onSelectCountryPage?.(item.slug);
                        }}
                        className="country-tile block text-inherit no-underline cursor-pointer transition hover:-translate-y-1 hover:shadow-lg ring-2 ring-[#17382f]/30"
                        aria-label={`${item.name}: открыть страницу направления`}
                      >
                        <FlagMark
                          slug={item.slug}
                          name={item.name}
                          code={item.flagCode || item.iso2}
                          grayscale={false}
                        />
                        <div className="country-tile__body">
                          <span className="country-name flex items-center justify-between">
                            <span>{item.name}</span>
                            <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-100 px-1.5 py-0.5 rounded">
                              готов
                            </span>
                          </span>
                          {item.parentJurisdiction && (
                            <span className="country-parent">{item.parentJurisdiction}</span>
                          )}
                        </div>
                      </a>
                    );
                  }

                  return (
                    <div
                      key={item.slug}
                      id={`country-${item.slug}`}
                      className="country-tile"
                      aria-disabled="true"
                      aria-label={`${item.name}: страница в разработке`}
                    >
                      <FlagMark
                        slug={item.slug}
                        name={item.name}
                        code={item.flagCode || item.iso2}
                        grayscale={true}
                      />
                      <div className="country-tile__body">
                        <span className="country-name">{item.name}</span>
                        {item.parentJurisdiction && (
                          <span className="country-parent">{item.parentJurisdiction}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {filteredItems.length === 0 && (
          <div className="py-12 text-center text-[#6a736d]">
            <p className="text-lg font-serif">По вашему запросу ничего не найдено.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedType('all');
                setSelectedCountrySlug(null);
              }}
              className="mt-3 px-4 py-2.5 text-xs font-semibold rounded-lg bg-[#17382f] text-white cursor-pointer"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </>
  );
};
