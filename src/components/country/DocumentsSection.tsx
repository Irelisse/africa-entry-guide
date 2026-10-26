import React from 'react';
import type { DocumentItem, ConsularDocument } from '../../types/country-page';
import { resolveAssetUrl } from '../../utils/assets';

interface DocumentsSectionProps {
  documents: DocumentItem[];
  consularDocuments?: ConsularDocument[];
}

export const DocumentsSection: React.FC<DocumentsSectionProps> = ({
  documents,
  consularDocuments,
}) => {
  const hasDocuments = documents && documents.length > 0;
  const hasConsularFiles = consularDocuments && consularDocuments.length > 0;

  if (!hasDocuments && !hasConsularFiles) return null;

  const getFormatBadge = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf':
        return 'bg-rose-100 text-rose-900 border-rose-200';
      case 'docx':
      case 'doc':
        return 'bg-blue-100 text-blue-900 border-blue-200';
      default:
        return 'bg-[#eee8dd] text-[#17382f] border-[rgba(23,32,28,0.1)]';
    }
  };

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

      {/* Official Consular Downloadable Attachments (if available for this country) */}
      {hasConsularFiles && (
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#eee8dd]/80 border border-[rgba(23,32,28,0.14)] shadow-xs">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-lg">📥</span>
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#17382f] leading-snug">
                Официальные бланки и документы консульства
              </h3>
              <p className="text-xs text-[#6a736d]">
                Оригинальные файлы, полученные от официальных дипломатических представительств
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {consularDocuments.map((file) => (
              <div
                key={file.id}
                className="bg-[#fffdf8] rounded-xl border border-[rgba(23,32,28,0.12)] p-4 flex flex-col justify-between shadow-2xs hover:shadow-xs transition"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <strong className="text-sm font-serif font-bold text-[#17201c] leading-snug">
                      {file.title}
                    </strong>
                    <span
                      className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border shrink-0 ${getFormatBadge(
                        file.fileType
                      )}`}
                    >
                      {file.fileType.toUpperCase()}
                    </span>
                  </div>
                  {file.description && (
                    <p className="text-xs text-[#6a736d] leading-relaxed mb-3">
                      {file.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2.5 border-t border-[rgba(23,32,28,0.06)] text-xs">
                  {file.fileSize && (
                    <span className="text-[11px] font-mono text-[#6a736d]">
                      {file.fileSize}
                    </span>
                  )}
                  <a
                    href={resolveAssetUrl(file.url)}
                    download={file.filename}
                    className="btn-primary text-xs py-1.5 px-3 ml-auto shadow-2xs inline-flex items-center gap-1.5"
                  >
                    <span>⬇</span>
                    <span>Скачать файл</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Required Documents Grid */}
      {hasDocuments && (
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
      )}
    </section>
  );
};
