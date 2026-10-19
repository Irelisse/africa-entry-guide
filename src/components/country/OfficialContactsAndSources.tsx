import React from 'react';
import type { CountryPageData } from '../../types/country-page';

interface ContactsAndSourcesProps {
  data: CountryPageData;
}

export const OfficialContactsAndSources: React.FC<ContactsAndSourcesProps> = ({ data }) => {
  const { contacts, sources, verification } = data;

  return (
    <section id="contacts-and-sources" className="my-10" aria-labelledby="contacts-title">
      <div className="mb-4">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#b66243] block">
          Проверка данных и контакты
        </span>
        <h2 id="contacts-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#17201c]">
          Официальные источники и контакты
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Contacts */}
        <div className="space-y-3">
          <h3 className="font-serif font-bold text-base text-[#17201c]">
            Дипломатические представительства
          </h3>
          {contacts.map((c, i) => (
            <div
              key={i}
              className="bg-[#fffdf8] rounded-xl border border-[rgba(23,32,28,0.12)] p-4 text-xs space-y-1.5 shadow-xs"
            >
              <strong className="text-sm text-[#17382f] block leading-snug">
                {c.name}
              </strong>
              {c.address && (
                <p className="text-[#6a736d]">
                  <strong>Адрес:</strong> {c.address}
                </p>
              )}
              {c.phone && (
                <p className="text-[#6a736d]">
                  <strong>Телефон:</strong>{' '}
                  <a href={`tel:${c.phone.replace(/[^0-9+]/g, '')}`} className="text-[#17382f] font-medium hover:underline">
                    {c.phone}
                  </a>
                </p>
              )}
              {c.email && (
                <p className="text-[#6a736d]">
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${c.email}`} className="text-[#17382f] font-medium hover:underline">
                    {c.email}
                  </a>
                </p>
              )}
              {c.website && (
                <p className="pt-1">
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#b66243] font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Официальный сайт</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Sources */}
        <div className="space-y-3">
          <h3 className="font-serif font-bold text-base text-[#17201c]">
            Использованные первоисточники
          </h3>
          {sources.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#fffdf8] rounded-xl border border-[rgba(23,32,28,0.12)] p-4 text-xs space-y-1 shadow-xs"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-xs text-[#17201c]">
                  {s.title}
                </span>
                <span className="text-[10px] text-[#6a736d] font-mono shrink-0">
                  {s.dateChecked}
                </span>
              </div>
              <p className="text-[11px] text-[#6a736d]">{s.organization}</p>
              {s.note && <p className="text-[11px] text-[#17201c]/80 italic">{s.note}</p>}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#b66243] font-semibold hover:underline inline-flex items-center gap-1 pt-0.5"
              >
                <span>Перейти к первоисточнику</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Confidence Banner */}
      <div className="bg-[#f7f3eb] rounded-xl border border-[rgba(23,32,28,0.14)] p-4 text-xs flex items-center justify-between gap-4 flex-wrap">
        <div>
          <span className="text-[#6a736d]">Дата последней проверки регламентов:</span>{' '}
          <strong className="text-[#17201c]">{verification.lastChecked}</strong>
        </div>
        <div>
          <span className="text-[#6a736d]">Проверено официальных источников:</span>{' '}
          <strong className="text-[#17382f]">{verification.officialSourcesCount}</strong>
        </div>
      </div>
    </section>
  );
};
