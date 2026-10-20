import React from 'react';
import type { EntryRoute } from '../../types/country-page';

interface EntryRouteCardProps {
  route: EntryRoute;
}

export const EntryRouteCard: React.FC<EntryRouteCardProps> = ({ route }) => {
  const getRouteBadge = () => {
    if (route.priorityBadge) {
      return {
        label: route.priorityBadge,
        color: 'bg-emerald-900 text-emerald-100 border border-emerald-700/60',
      };
    }
    switch (route.routeType) {
      case 'visa_free':
        return {
          label: 'Безвизовый режим',
          color: 'bg-[#17382f] text-white',
        };
      case 'evisa':
        return {
          label: 'Электронная виза (eVisa)',
          color: 'bg-[#17382f] text-white',
        };
      case 'eta':
        return {
          label: 'Электронное разрешение (eTA)',
          color: 'bg-[#17382f] text-white',
        };
      case 'visa_on_arrival':
        return {
          label: 'Виза по прибытии (VoA)',
          color: 'bg-[#b66243] text-white',
        };
      case 'consular_visa':
        return {
          label: 'Консульская виза (в Посольстве)',
          color: 'bg-[#6a736d] text-white',
        };
      case 'transit_visa':
        return {
          label: 'Транзитный въезд',
          color: 'bg-[#22483d] text-white',
        };
      default:
        return {
          label: 'Официальный маршрут',
          color: 'bg-[#17382f]/10 text-[#17382f]',
        };
    }
  };

  const badge = getRouteBadge();

  const getEntriesLabel = (entries: EntryRoute['entries']) => {
    switch (entries) {
      case 'single':
        return 'Однократный';
      case 'double':
        return 'Двукратный';
      case 'multiple':
        return 'Многократный (мульти)';
      default:
        return 'По регламенту';
    }
  };

  return (
    <div className="bg-[#fffdf8] rounded-2xl border border-[rgba(23,32,28,0.14)] p-5 sm:p-7 shadow-xs transition hover:shadow-md">
      {/* Header: Priority Badge, Title, and Rock-Solid Fee Badge */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-[rgba(23,32,28,0.08)]">
        <div className="min-w-0 pr-2">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span
              className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs ${badge.color}`}
            >
              {badge.label}
            </span>
            {route.format && route.format !== 'none' && (
              <span className="text-[10px] uppercase font-semibold text-[#6a736d] bg-[#f7f3eb] px-2 py-0.5 rounded border border-[rgba(23,32,28,0.08)]">
                Формат: {route.format === 'electronic' ? 'Электронный' : route.format === 'sticker' ? 'Вклейка в паспорт' : 'Штамп'}
              </span>
            )}
          </div>
          <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#17201c] leading-snug">
            {route.name}
          </h3>
          {route.description && (
            <p className="text-xs text-[#6a736d] mt-1.5 leading-relaxed max-w-2xl">
              {route.description}
            </p>
          )}
        </div>

        {/* Rock-Solid Fee Badge: Fixed-width, no wrap collision, beautiful typography */}
        <div className="shrink-0 self-start sm:self-auto bg-[#eee8dd] px-4 py-2.5 rounded-xl border border-[rgba(23,32,28,0.12)] min-w-[130px] sm:min-w-[150px] text-right shadow-2xs">
          <span className="text-[10px] uppercase font-bold text-[#6a736d] block tracking-wider leading-none mb-1">
            Консульский сбор
          </span>
          <div className="font-serif font-bold text-xl sm:text-2xl text-[#17382f] leading-none whitespace-nowrap">
            {typeof route.fee.amount === 'number' && route.fee.amount === 0 ? (
              <span className="text-emerald-800">Бесплатно</span>
            ) : (
              <span>
                {route.fee.amount} <small className="text-sm font-sans font-semibold text-[#17201c]/80">{route.fee.currency}</small>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Monolithic Spec Grid: Connected, unified architectural specification bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 rounded-xl border border-[rgba(23,32,28,0.1)] bg-[#f7f3eb] overflow-hidden my-4 divide-y md:divide-y-0 md:divide-x divide-[rgba(23,32,28,0.1)]">
        <div className="p-3 sm:p-3.5">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#6a736d] block mb-1">
            Срок пребывания
          </span>
          <strong className="text-xs sm:text-sm font-bold text-[#17201c] block leading-tight">
            {route.maxStay}
          </strong>
        </div>

        <div className="p-3 sm:p-3.5">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#6a736d] block mb-1">
            Срок оформления
          </span>
          <strong className="text-xs sm:text-sm font-bold text-[#17201c] block leading-tight">
            {route.processingTime}
          </strong>
        </div>

        <div className="p-3 sm:p-3.5">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#6a736d] block mb-1">
            Коридор действия
          </span>
          <strong className="text-xs sm:text-sm font-bold text-[#17201c] block leading-tight">
            {route.validity}
          </strong>
        </div>

        <div className="p-3 sm:p-3.5">
          <span className="text-[10px] uppercase font-semibold tracking-wider text-[#6a736d] block mb-1">
            Въезд
          </span>
          <strong className="text-xs sm:text-sm font-bold text-[#17201c] block leading-tight">
            {getEntriesLabel(route.entries)}
          </strong>
        </div>
      </div>

      {/* Payment Note / Card Warning */}
      {route.fee.note && (
        <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/70 text-xs text-amber-950 flex items-start gap-2 mb-3">
          <span className="text-sm font-bold text-amber-700 leading-none mt-0.5">ℹ</span>
          <p className="leading-relaxed">{route.fee.note}</p>
        </div>
      )}

      {/* Allowed Checkpoints & Extension */}
      <div className="space-y-1.5 text-xs text-[#17201c]/90 pt-3 border-t border-[rgba(23,32,28,0.08)]">
        {route.allowedBorderCrossings && route.allowedBorderCrossings.length > 0 && (
          <p>
            <strong className="text-[#17382f]">Разрешённые пункты пропуска:</strong>{' '}
            {route.allowedBorderCrossings.join('; ')}
          </p>
        )}
        {route.extensionRules && (
          <p>
            <strong className="text-[#17382f]">Продление в стране:</strong> {route.extensionRules}
          </p>
        )}
      </div>

      {/* Official Link Button */}
      {route.officialUrl && (
        <div className="mt-4 pt-3 flex justify-end border-t border-[rgba(23,32,28,0.08)]">
          <a
            href={route.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2 px-4 shadow-xs"
          >
            <span>Подать заявление на портале</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </div>
  );
};
