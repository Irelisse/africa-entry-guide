import React from 'react';
import type { CountryPageData, RequirementState } from '../../types/country-page';
import { IconPassport } from '../icons/CountryIcons';

interface RequirementsChecklistProps {
  data: CountryPageData;
}


export const RequirementsChecklist: React.FC<RequirementsChecklistProps> = ({ data }) => {
  const { requirementsChecklist, passport } = data;

  const renderBadge = (state: RequirementState) => {
    switch (state) {
      case 'required':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-900 border border-emerald-200">
            Обязательно
          </span>
        );
      case 'conditional':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-100 text-amber-900 border border-amber-200">
            При условиях
          </span>
        );
      case 'recommended':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-sky-100 text-sky-900 border border-sky-200">
            Рекомендуется
          </span>
        );
      case 'not_required':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-700 border border-gray-200">
            Не требуется
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-500 border border-gray-200">
            Уточняется
          </span>
        );
    }
  };

  return (
    <section id="requirements" className="my-10" aria-labelledby="requirements-title">
      <div className="mb-4">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#b66243] block">
          Чеклист въезда
        </span>
        <h2 id="requirements-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#17201c]">
          Требования и документы
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Checklist Column */}
        <div className="md:col-span-7 bg-[#fffdf8] rounded-2xl border border-[rgba(23,32,28,0.14)] p-5 sm:p-6 shadow-xs">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#17382f] mb-4">
            Общий перечень требований
          </h3>
          <ul className="divide-y divide-[rgba(23,32,28,0.08)]">
            {requirementsChecklist.map((req) => (
              <li key={req.id} className="py-3 first:pt-0 last:pb-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 pr-2">
                    <span className="font-semibold text-sm text-[#17201c] block leading-snug">
                      {req.label}
                    </span>
                    {req.details && (
                      <p className="text-xs text-[#6a736d] mt-0.5 leading-relaxed">
                        {req.details}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0">{renderBadge(req.state)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Passport Rules Card */}
        <div className="md:col-span-5 bg-[#f7f3eb] rounded-2xl border border-[rgba(23,32,28,0.14)] p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <IconPassport size={20} className="text-[#17382f]" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#17382f]">
                Требования к загранпаспорту
              </h3>
            </div>

            <div className="space-y-3 text-xs text-[#17201c]">
              <div className="bg-white/80 p-3 rounded-xl border border-[rgba(23,32,28,0.08)]">
                <span className="text-[#6a736d] block mb-0.5 font-medium">Срок действия:</span>
                <strong className="text-sm text-[#17382f] block leading-snug">
                  {passport.validityRequirement}
                </strong>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-[rgba(23,32,28,0.08)]">
                <span className="text-[#6a736d] block mb-0.5 font-medium">Чистые страницы:</span>
                <span className="text-sm font-semibold">
                  Минимум {passport.blankPagesRequired} страницы для визовых отметок
                </span>
              </div>
              {passport.note && (
                <p className="text-xs text-[#6a736d] leading-relaxed italic px-1">
                  {passport.note}
                </p>
              )}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-[rgba(23,32,28,0.08)] text-[11px] text-[#6a736d]">
            Перед вылетом убедитесь, что паспорт не имеет повреждений, надрывов и следов влаги.
          </div>
        </div>
      </div>
    </section>
  );
};
