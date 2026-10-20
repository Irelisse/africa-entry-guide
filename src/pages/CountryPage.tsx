import React, { useState } from 'react';
import { getCountryData } from '../data/countries';
import { CountryHero } from '../components/country/CountryHero';
import { QuickEntrySummary } from '../components/country/QuickEntrySummary';
import { EntryRouteCard } from '../components/country/EntryRouteCard';
import { RequirementsChecklist } from '../components/country/RequirementsChecklist';
import { ApplicationSteps } from '../components/country/ApplicationSteps';
import { DocumentsSection } from '../components/country/DocumentsSection';
import { HealthVaccinationSection } from '../components/country/HealthVaccinationSection';
import { DepartureBorderSection } from '../components/country/DepartureBorderSection';
import { OfficialContactsAndSources } from '../components/country/OfficialContactsAndSources';

import {
  IconClipboardCheck,
  IconRouteSteps,
  IconMedicalShield,
  IconGovernmentColumns,
  IconOverviewGrid,
} from '../components/icons/CountryIcons';

interface CountryPageProps {
  slug: string;
  onBack: () => void;
}

type TabKey = 'checklist' | 'steps' | 'health_border' | 'contacts_sources' | 'all';

interface TabItem {
  key: TabKey;
  label: string;
  IconComponent: React.FC<{ size?: number; className?: string }>;
}

const TABS: TabItem[] = [
  { key: 'checklist', label: 'Чеклист и документы', IconComponent: IconClipboardCheck },
  { key: 'steps', label: 'Инструкция оформления', IconComponent: IconRouteSteps },
  { key: 'health_border', label: 'Медицина и граница', IconComponent: IconMedicalShield },
  { key: 'contacts_sources', label: 'Контакты и источники', IconComponent: IconGovernmentColumns },
  { key: 'all', label: 'Все разделы', IconComponent: IconOverviewGrid },
];


export const CountryPage: React.FC<CountryPageProps> = ({ slug, onBack }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('checklist');
  const data = getCountryData(slug);

  if (!data) {
    return (
      <div className="shell max-w-4xl py-24 text-center">
        <h1 className="text-3xl font-serif font-bold text-[#17201c] mb-4">
          Направление не найдено
        </h1>
        <p className="text-sm text-[#6a736d] mb-6">
          Запрашиваемая страница направления отсутствует в каталоге.
        </p>
        <button
          type="button"
          onClick={onBack}
          className="btn-primary text-xs uppercase tracking-wider"
        >
          ← Вернуться в каталог
        </button>
      </div>
    );
  }

  return (
    <article className="bg-[#f7f3eb] min-h-screen text-[#17201c] pb-24">
      {/* 1. Hero with Aesthetic Country Photograph & Map Locator */}
      <CountryHero data={data} onBack={onBack} />

      {/* Main Content Container with Editorial Centered Width */}
      <div className="shell max-w-5xl px-4 sm:px-6">
        {/* 2. Level 1: Quick Entry Summary (10-second answer) */}
        <QuickEntrySummary data={data} />

        {/* Critical Operational Notice (if country has special rules: insurance, ebola, hiv, etc.) */}
        {data.criticalNotice && (
          <div className="my-6 p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-300 text-xs text-amber-950 flex items-start gap-3.5 shadow-xs">
            <div className="w-8 h-8 rounded-xl bg-amber-200/90 text-amber-900 flex items-center justify-center shrink-0 font-bold text-base shadow-2xs">
              ⚠️
            </div>
            <div className="min-w-0">
              <strong className="font-serif font-bold text-sm sm:text-base text-amber-950 block mb-1">
                {data.criticalNotice.title}
              </strong>
              <p className="leading-relaxed text-[#17201c]/90">
                {data.criticalNotice.description}
              </p>
            </div>
          </div>
        )}

        {/* 3. Entry Routes (Independent cards for each route) */}

        <section id="routes-section" className="my-8" aria-labelledby="routes-title">
          <div className="mb-4">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#b66243] block">
              Варианты въезда
            </span>
            <h2 id="routes-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#17201c]">
              Способы получения визы и въезда
            </h2>
          </div>

          {data.routes.length > 0 ? (
            <div className="space-y-4">
              {data.routes.map((route) => (
                <EntryRouteCard key={route.id} route={route} />
              ))}
            </div>
          ) : (
            <div className="bg-[#fffdf8] p-6 rounded-2xl border border-[rgba(23,32,28,0.12)] text-xs text-[#6a736d] text-center">
              <p className="font-serif text-sm text-[#17201c] mb-1">
                Данные по маршрутам въезда в процессе подготовки
              </p>
              <span>Информация о типах виз, консульских сборах и порталах подачи собирается по официальным регламентам.</span>
            </div>
          )}
        </section>

        {/* 4. Streamlined Details Tabs: eliminates cognitive overload while preserving all data */}
        <div className="my-8 pt-4 border-t border-[rgba(23,32,28,0.12)]">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#b66243] block">
                Подробная подготовка
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#17201c]">
                Детали поездки
              </h2>
            </div>
            <span className="text-xs text-[#6a736d] hidden sm:inline">
              Выберите интересующий раздел
            </span>
          </div>

          {/* Sticky Tab Switcher with high-contrast active buttons */}
          <div className="sticky top-0 z-20 backdrop-blur-md bg-[#eee8dd]/95 py-2.5 -mx-4 sm:mx-0 px-4 sm:px-0 border-y sm:border sm:rounded-2xl border-[rgba(23,32,28,0.12)] shadow-xs mb-6">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.key;
                const Icon = tab.IconComponent;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`shrink-0 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl font-semibold transition cursor-pointer text-xs ${
                      isActive
                        ? 'bg-[#17382f] text-white shadow-xs'
                        : 'bg-white/80 hover:bg-white text-[#17201c] border border-[rgba(23,32,28,0.12)]'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'text-[#dfb88d]' : 'text-[#17382f]'} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}

            </div>
          </div>

          {/* Tab 1: Checklist, Documents & Passport */}
          {(activeTab === 'checklist' || activeTab === 'all') && (
            <div className="space-y-6 animate-fadeIn">
              <RequirementsChecklist data={data} />
              <DocumentsSection documents={data.documents} />
            </div>
          )}

          {/* Tab 2: Application Steps & Pre-Departure */}
          {(activeTab === 'steps' || activeTab === 'all') && (
            <div className="space-y-6 animate-fadeIn">
              <ApplicationSteps steps={data.applicationSteps} />
              <div className="bg-[#fffdf8] rounded-2xl border border-[rgba(23,32,28,0.14)] p-5 sm:p-6 shadow-xs">
                <h3 className="font-serif font-bold text-lg text-[#17201c] mb-3 flex items-center gap-2.5">
                  <IconClipboardCheck size={20} className="text-[#17382f]" />
                  <span>Чеклист перед вылетом</span>
                </h3>
                <ul className="space-y-2 text-xs text-[#17201c]/90">

                  {data.departureChecklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#17382f] font-bold text-sm leading-none mt-0.5">✓</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 3: Health, Border Control, Post-Entry & Transit */}
          {(activeTab === 'health_border' || activeTab === 'all') && (
            <div className="space-y-6 animate-fadeIn">
              <HealthVaccinationSection health={data.health} />
              <DepartureBorderSection data={data} />
            </div>
          )}

          {/* Tab 4: Official Contacts, Sources & Verification */}
          {(activeTab === 'contacts_sources' || activeTab === 'all') && (
            <div className="space-y-6 animate-fadeIn">
              <OfficialContactsAndSources data={data} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
