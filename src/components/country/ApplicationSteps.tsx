import React from 'react';
import type { CountryPageData } from '../../types/country-page';

interface ApplicationStepsProps {
  steps?: CountryPageData['applicationSteps'];
}

export const ApplicationSteps: React.FC<ApplicationStepsProps> = ({ steps }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <section id="application-process" className="my-10" aria-labelledby="steps-title">
      <div className="mb-4">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#b66243] block">
          Инструкция
        </span>
        <h2 id="steps-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#17201c]">
          Порядок оформления визы
        </h2>
      </div>

      <div className="bg-[#fffdf8] rounded-2xl border border-[rgba(23,32,28,0.14)] p-5 sm:p-7 shadow-xs">
        <ol className="relative border-l-2 border-[#17382f]/20 ml-3 sm:ml-4 space-y-6 sm:space-y-8 my-2">
          {steps.map((step) => (
            <li key={step.stepNumber} className="ml-6 sm:ml-8">
              {/* Step Number Badge */}
              <span className="absolute -left-[17px] flex items-center justify-center w-8 h-8 rounded-full bg-[#17382f] text-white text-xs font-bold ring-4 ring-[#fffdf8]">
                {step.stepNumber}
              </span>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#17201c] leading-snug">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#17201c]/80 mt-1 leading-relaxed">
                {step.description}
              </p>
              {step.subtext && (
                <p className="text-[11px] text-[#b66243] font-medium mt-1">
                  {step.subtext}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
