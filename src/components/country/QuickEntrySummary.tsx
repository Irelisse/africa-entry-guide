import React from 'react';
import type { CountryPageData } from '../../types/country-page';

interface QuickEntrySummaryProps {
  data: CountryPageData;
}

export const QuickEntrySummary: React.FC<QuickEntrySummaryProps> = ({ data }) => {
  const { quickSummary } = data;

  const isConfirmed = quickSummary.confidence === 'confirmed';

  return (
    <section className="my-8" aria-labelledby="quick-summary-title">
      <div className="bg-[#fffdf8] rounded-2xl border border-[rgba(23,32,28,0.16)] p-5 sm:p-7 shadow-xs">
        {/* Header with Eyebrow and Status Badge */}
        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#b66243] block">
              Въезд для граждан РФ
            </span>
            <h2 id="quick-summary-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#17201c] mt-0.5">
              {quickSummary.visaStatusRu}
            </h2>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              isConfirmed
                ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                : 'bg-amber-100 text-amber-900 border border-amber-300'
            }`}
          >
            {isConfirmed ? '✓ Данные верифицированы' : '⏳ В процессе сбора данных'}
          </span>
        </div>

        {/* Short Executive Summary */}
        <p className="text-sm sm:text-base text-[#17201c]/85 leading-relaxed max-w-3xl mb-6">
          {quickSummary.shortDescriptionRu}
        </p>

        {/* 4-Box Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="bg-[#f7f3eb] p-3.5 rounded-xl border border-[rgba(23,32,28,0.08)]">
            <span className="text-[#6a736d] block mb-1">Способы въезда</span>
            <strong className="text-[#17201c] text-sm block leading-snug">
              {quickSummary.availableRoutesList.join(', ')}
            </strong>
          </div>

          <div className="bg-[#f7f3eb] p-3.5 rounded-xl border border-[rgba(23,32,28,0.08)]">
            <span className="text-[#6a736d] block mb-1">Максимальный срок</span>
            <strong className="text-[#17201c] text-sm block leading-snug">
              {quickSummary.maxStay}
            </strong>
          </div>

          <div className="bg-[#f7f3eb] p-3.5 rounded-xl border border-[rgba(23,32,28,0.08)]">
            <span className="text-[#6a736d] block mb-1">Стоимость от</span>
            <strong className="text-[#17201c] text-sm block leading-snug text-[#17382f]">
              {quickSummary.feeFrom}
            </strong>
          </div>

          <div className="bg-[#f7f3eb] p-3.5 rounded-xl border border-[rgba(23,32,28,0.08)]">
            <span className="text-[#6a736d] block mb-1">Срок паспорта</span>
            <strong className="text-[#17201c] text-sm block leading-snug">
              {quickSummary.passportValidity}
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};
