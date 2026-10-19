import React from 'react';
import type { DocumentItem } from '../../types/country-page';

interface DocumentsSectionProps {
  documents: DocumentItem[];
}

export const DocumentsSection: React.FC<DocumentsSectionProps> = ({ documents }) => {
  if (!documents || documents.length === 0) return null;

  return (
    <section id="documents" className="my-10" aria-labelledby="documents-title">
      <div className="mb-4">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#b66243] block">
          Пакет документов
        </span>
        <h2 id="documents-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#17201c]">
          Необходимые документы
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {documents.map((doc, idx) => (
          <div
            key={idx}
            className="bg-[#fffdf8] rounded-2xl border border-[rgba(23,32,28,0.12)] p-4 sm:p-5 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-serif font-bold text-base text-[#17201c] leading-snug">
                  {doc.name}
                </h3>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold shrink-0 uppercase tracking-wide ${
                    doc.state === 'required'
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                      : 'bg-amber-100 text-amber-900 border border-amber-200'
                  }`}
                >
                  {doc.state === 'required' ? 'Обязательно' : 'По запросу'}
                </span>
              </div>

              {doc.note && (
                <p className="text-xs text-[#6a736d] leading-relaxed mb-3">
                  {doc.note}
                </p>
              )}
            </div>

            {/* Document Technical Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[rgba(23,32,28,0.06)] text-[11px] text-[#17382f]">
              {doc.digitalFormat && (
                <span className="bg-[#f7f3eb] px-2 py-0.5 rounded border border-[rgba(23,32,28,0.08)]">
                  Формат: {doc.digitalFormat}
                </span>
              )}
              {doc.maxFileSize && (
                <span className="bg-[#f7f3eb] px-2 py-0.5 rounded border border-[rgba(23,32,28,0.08)]">
                  До {doc.maxFileSize}
                </span>
              )}
              {doc.language && (
                <span className="bg-[#f7f3eb] px-2 py-0.5 rounded border border-[rgba(23,32,28,0.08)]">
                  Язык: {doc.language}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
