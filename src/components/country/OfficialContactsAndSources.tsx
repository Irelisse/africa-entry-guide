import React, { useState } from 'react';
import type { CountryPageData } from '../../types/country-page';

interface ContactsAndSourcesProps {
  data: CountryPageData;
}

export const OfficialContactsAndSources: React.FC<ContactsAndSourcesProps> = ({ data }) => {
  const { contacts, sources, verification } = data;
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyAddress = (address: string, idx: number) => {
    navigator.clipboard.writeText(address);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getContactBadge = (type: string) => {
    switch (type) {
      case 'embassy':
        return { label: 'Посольство в Москве', color: 'bg-[#17382f] text-white' };
      case 'immigration':
        return { label: 'Миграционная служба', color: 'bg-[#22483d] text-white' };
      case 'visa_portal':
        return { label: 'Государственный портал', color: 'bg-[#b66243] text-white' };
      default:
        return { label: 'Официальный орган', color: 'bg-[#6a736d] text-white' };
    }
  };

  return (
    <section id="contacts-and-sources" className="my-8" aria-labelledby="contacts-title">
      <div className="mb-4">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#b66243] block">
          Проверка данных и контакты
        </span>
        <h2 id="contacts-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#17201c]">
          Официальные ведомства и первоисточники
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Diplomatic & Official Contacts */}
        <div className="space-y-3.5">
          <h3 className="font-serif font-bold text-lg text-[#17201c] flex items-center gap-2">
            <span>🏛️</span>
            <span>Дипломатические контакты</span>
          </h3>
          {contacts.map((c, i) => {
            const badge = getContactBadge(c.type);
            return (
              <div
                key={i}
                className="bg-[#fffdf8] rounded-2xl border border-[rgba(23,32,28,0.14)] p-4 sm:p-5 text-xs shadow-xs space-y-2.5 transition hover:shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-2xs ${badge.color}`}
                  >
                    {badge.label}
                  </span>
                  {c.city && (
                    <span className="text-[11px] font-semibold text-[#6a736d]">
                      г. {c.city}
                    </span>
                  )}
                </div>

                <strong className="text-sm font-serif font-bold text-[#17382f] block leading-snug">
                  {c.name}
                </strong>

                {c.address && (
                  <div className="text-[#17201c]/90 bg-[#f7f3eb] p-2.5 rounded-xl border border-[rgba(23,32,28,0.08)] flex items-start justify-between gap-2">
                    <p className="leading-relaxed">
                      <strong className="text-[#17382f]">Адрес:</strong> {c.address}
                    </p>
                    <button
                      type="button"
                      onClick={() => handleCopyAddress(c.address!, i)}
                      className="shrink-0 text-[10px] font-semibold uppercase text-[#17382f] hover:text-[#b66243] cursor-pointer bg-white px-2 py-1 rounded border border-[rgba(23,32,28,0.1)] transition"
                      title="Скопировать адрес"
                    >
                      {copiedIndex === i ? '✓ Скопировано' : 'Копировать'}
                    </button>
                  </div>
                )}

                {/* Direct Action Links (Phone, Email, Web) */}
                <div className="flex items-center gap-2 pt-1 flex-wrap">
                  {c.phone && (
                    <a
                      href={`tel:${c.phone.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[rgba(23,32,28,0.12)] text-[#17382f] hover:bg-[#17382f] hover:text-white transition font-semibold text-xs shadow-2xs"
                    >
                      <span>📞</span>
                      <span>{c.phone.split('/')[0].trim()}</span>
                    </a>
                  )}

                  {c.email && (
                    <a
                      href={`mailto:${c.email}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[rgba(23,32,28,0.12)] text-[#17382f] hover:bg-[#17382f] hover:text-white transition font-semibold text-xs shadow-2xs"
                    >
                      <span>✉️</span>
                      <span>{c.email}</span>
                    </a>
                  )}

                  {c.website && (
                    <a
                      href={c.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#eee8dd] text-[#17382f] hover:bg-[#17382f] hover:text-white transition font-semibold text-xs ml-auto shadow-2xs"
                    >
                      <span>Портал</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>

                {c.workingHours && (
                  <p className="text-[11px] text-[#6a736d] italic pt-0.5">
                    Часы приёма: {c.workingHours}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Official Sources Audit */}
        <div className="space-y-3.5">
          <h3 className="font-serif font-bold text-lg text-[#17201c] flex items-center gap-2">
            <span>📚</span>
            <span>Проверенные первоисточники</span>
          </h3>
          {sources.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#fffdf8] rounded-2xl border border-[rgba(23,32,28,0.14)] p-4 sm:p-5 text-xs shadow-xs space-y-1.5 transition hover:shadow-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-serif font-bold text-sm text-[#17201c] leading-snug">
                  {s.title}
                </span>
                <span className="text-[10px] text-[#6a736d] font-mono shrink-0 bg-[#f7f3eb] px-1.5 py-0.5 rounded border border-[rgba(23,32,28,0.08)]">
                  {s.dateChecked}
                </span>
              </div>
              <p className="text-[11px] font-semibold text-[#17382f]">{s.organization}</p>
              {s.note && <p className="text-[11px] text-[#6a736d] leading-relaxed">{s.note}</p>}
              <div className="pt-1 flex justify-end">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#b66243] font-semibold hover:underline inline-flex items-center gap-1"
                >
                  <span>Официальный первоисточник</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Confidence Banner */}
      <div className="bg-[#eee8dd] rounded-2xl border border-[rgba(23,32,28,0.14)] p-4 sm:p-5 text-xs flex items-center justify-between gap-4 flex-wrap shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-base">🛡️</span>
          <div>
            <span className="text-[#6a736d] block text-[11px]">Статус аудита источников:</span>
            <strong className="text-[#17382f] text-sm">
              Данные верифицированы по официальным правительственным регламентам
            </strong>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <div>
            <span className="text-[#6a736d] block text-[10px] uppercase font-bold tracking-wider">Дата проверки</span>
            <strong className="text-[#17201c] font-semibold">{verification.lastChecked}</strong>
          </div>
          <div>
            <span className="text-[#6a736d] block text-[10px] uppercase font-bold tracking-wider">Источников</span>
            <strong className="text-[#17382f] font-bold text-sm">{verification.officialSourcesCount}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
