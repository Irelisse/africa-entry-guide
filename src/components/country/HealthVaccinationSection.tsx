import React from 'react';
import type { HealthRules } from '../../types/country-page';
import { IconSyringe, IconMedicalShield } from '../icons/CountryIcons';

interface HealthSectionProps {
  health: HealthRules;
}

export const HealthVaccinationSection: React.FC<HealthSectionProps> = ({ health }) => {
  const { yellowFever } = health;

  return (
    <section id="health" className="my-10" aria-labelledby="health-title">
      <div className="mb-4">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#b66243] block">
          Медицина и санитарные нормы
        </span>
        <h2 id="health-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#17201c]">
          Вакцинация и здоровье
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Yellow Fever Card */}
        <div className="bg-[#fffdf8] rounded-2xl border border-[rgba(23,32,28,0.14)] p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <IconSyringe size={22} className="text-[#b66243]" />
            <h3 className="font-serif font-bold text-lg text-[#17201c]">
              Жёлтая лихорадка (Yellow Fever)
            </h3>
          </div>


          <div className="space-y-2.5 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#f7f3eb] border border-[rgba(23,32,28,0.08)]">
              <span className="text-[#6a736d]">При прямом прибытии из РФ:</span>
              <span
                className={`font-semibold px-2 py-0.5 rounded ${
                  yellowFever.requiredDirectFromRussia
                    ? 'bg-rose-100 text-rose-900 border border-rose-200'
                    : 'bg-emerald-100 text-emerald-900'
                }`}
              >
                {yellowFever.requiredDirectFromRussia ? 'Обязательно для всех' : 'Не требуется'}
              </span>
            </div>

            <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#f7f3eb] border border-[rgba(23,32,28,0.08)]">
              <span className="text-[#6a736d]">При въезде из эндемичных стран:</span>
              <span className="font-semibold text-rose-900 bg-rose-100 px-2 py-0.5 rounded border border-rose-200">
                Обязательно
              </span>
            </div>

            {yellowFever.note && (
              <p className="text-xs text-[#17201c]/85 leading-relaxed pt-1">
                {yellowFever.note}
              </p>
            )}
          </div>
        </div>

        {/* Other Health & Malaria Card */}
        <div className="bg-[#fffdf8] rounded-2xl border border-[rgba(23,32,28,0.14)] p-5 sm:p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <IconMedicalShield size={22} className="text-[#17382f]" />
              <h3 className="font-serif font-bold text-lg text-[#17201c]">
                Малярия и медицинская страховка
              </h3>
            </div>


            <div className="space-y-3 text-xs text-[#17201c]/90">
              {health.notes && (
                <p className="leading-relaxed bg-amber-50/70 p-3 rounded-xl border border-amber-200/80 text-amber-950">
                  {health.notes}
                </p>
              )}

              {health.otherVaccinesRecommended && health.otherVaccinesRecommended.length > 0 && (
                <div>
                  <span className="text-[#6a736d] block mb-1 font-medium">
                    Рекомендуемые прививки:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {health.otherVaccinesRecommended.map((v, i) => (
                      <span
                        key={i}
                        className="bg-[#f7f3eb] px-2.5 py-1 rounded-md text-[11px] font-medium text-[#17382f] border border-[rgba(23,32,28,0.08)]"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {health.insuranceMinCoverage && (
            <div className="pt-3 mt-3 border-t border-[rgba(23,32,28,0.08)] text-xs text-[#6a736d]">
              <strong>Страховка:</strong> {health.insuranceMinCoverage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
