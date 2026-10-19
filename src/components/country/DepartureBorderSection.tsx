import React from 'react';
import type { CountryPageData } from '../../types/country-page';
import { IconClipboardCheck, IconBorderStamp } from '../icons/CountryIcons';

interface DepartureBorderSectionProps {
  data: CountryPageData;
}

export const DepartureBorderSection: React.FC<DepartureBorderSectionProps> = ({ data }) => {
  const { departureChecklist, border, postEntry, transit } = data;

  return (
    <section id="border-and-logistics" className="my-10" aria-labelledby="border-title">
      <div className="mb-4">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#b66243] block">
          Практика поездки
        </span>
        <h2 id="border-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#17201c]">
          Перед вылетом и на границе
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Pre-Departure Checklist */}
        <div className="bg-[#fffdf8] rounded-2xl border border-[rgba(23,32,28,0.14)] p-5 sm:p-6 shadow-xs">
          <h3 className="font-serif font-bold text-lg text-[#17201c] mb-3 flex items-center gap-2.5">
            <IconClipboardCheck size={20} className="text-[#17382f]" />
            <span>Чеклист перед вылетом</span>
          </h3>
          <ul className="space-y-2 text-xs text-[#17201c]/90">
            {departureChecklist.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-[#17382f] font-bold text-sm leading-none mt-0.5">✓</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* On-Arrival Border Control */}
        <div className="bg-[#fffdf8] rounded-2xl border border-[rgba(23,32,28,0.14)] p-5 sm:p-6 shadow-xs">
          <h3 className="font-serif font-bold text-lg text-[#17201c] mb-3 flex items-center gap-2.5">
            <IconBorderStamp size={20} className="text-[#17382f]" />
            <span>Паспортный контроль по прибытии</span>
          </h3>

          <div className="space-y-2.5 text-xs text-[#17201c]/90">
            <p className="font-medium text-[#17382f]">Документы к предъявлению:</p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-[#6a736d]">
              {border.documentsRequestedOnArrival.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>

            {border.notes && (
              <p className="bg-[#f7f3eb] p-2.5 rounded-xl border border-[rgba(23,32,28,0.08)] mt-2">
                {border.notes}
              </p>
            )}
          </div>
        </div>

        {/* Post-Entry & Extension */}
        {postEntry && (
          <div className="bg-[#f7f3eb] rounded-2xl border border-[rgba(23,32,28,0.14)] p-5 sm:p-6 shadow-xs">
            <h3 className="font-serif font-bold text-base text-[#17201c] mb-2">
              После въезда и продление визы
            </h3>
            <div className="space-y-2 text-xs text-[#17201c]/85">
              <p>
                <strong>Регистрация:</strong> {postEntry.registrationAuthority || 'Не требуется для обычных туристов.'}
              </p>
              <p>
                <strong>Продление:</strong>{' '}
                {postEntry.extensionPossible
                  ? `Возможно (${postEntry.extensionMaxDuration || 'по решению миграционной службы'}, сбор ${postEntry.extensionCost || 'уточняется'}).`
                  : 'Продление не предусмотрено.'}
              </p>
              {postEntry.notes && (
                <p className="italic text-[#6a736d] pt-1">{postEntry.notes}</p>
              )}
            </div>
          </div>
        )}

        {/* Transit Rules */}
        {transit && (
          <div className="bg-[#f7f3eb] rounded-2xl border border-[rgba(23,32,28,0.14)] p-5 sm:p-6 shadow-xs">
            <h3 className="font-serif font-bold text-base text-[#17201c] mb-2">
              Правила транзита
            </h3>
            <div className="space-y-2 text-xs text-[#17201c]/85">
              <p>
                <strong>Транзитная зона аэропорта:</strong>{' '}
                {transit.airsideTransitAllowed
                  ? `Разрешена без визы на срок до ${transit.maxAirsideTransitHours || 24} часов (без выхода в город).`
                  : 'Безвизовый транзит не предусмотрен.'}
              </p>
              {transit.notes && (
                <p className="italic text-[#6a736d] pt-1">{transit.notes}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
