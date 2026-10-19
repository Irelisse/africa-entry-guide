import React from 'react';
import type { EntryRoute } from '../../types/country-page';

interface EntryRouteCardProps {
  route: EntryRoute;
}

export const EntryRouteCard: React.FC<EntryRouteCardProps> = ({ route }) => {
  const getRouteTypeLabel = (type: EntryRoute['routeType']) => {
    switch (type) {
      case 'evisa':
        return 'Электронная виза (eVisa)';
      case 'visa_free':
        return 'Безвизовый режим';
      case 'visa_on_arrival':
        return 'Виза по прибытии (VoA)';
      case 'eta':
        return 'Электронное разрешение (eTA)';
      case 'consular_visa':
        return 'Виза в консульстве';
      case 'transit_visa':
        return 'Транзитная виза';
      default:
        return 'Специальное разрешение';
    }
  };

  const getEntriesLabel = (entries: EntryRoute['entries']) => {
    switch (entries) {
      case 'single':
        return 'Однократный';
      case 'double':
        return 'Двукратный';
      case 'multiple':
        return 'Многократный (мультивиза)';
      default:
        return 'Уточняется';
    }
  };

  return (
    <div className="bg-[#fffdf8] rounded-2xl border border-[rgba(23,32,28,0.14)] p-5 sm:p-6 shadow-xs transition hover:border-[rgba(23,32,28,0.28)]">
      {/* Route Header */}
      <div className="flex items-start justify-between gap-3 mb-4 flex-wrap">
        <div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[#17382f]/10 text-[#17382f] inline-block mb-1.5">
            {getRouteTypeLabel(route.routeType)}
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#17201c] leading-tight">
            {route.name}
          </h3>
          {route.description && (
            <p className="text-xs text-[#6a736d] mt-1 leading-relaxed">
              {route.description}
            </p>
          )}
        </div>

        {/* Big Fee Badge */}
        <div className="bg-[#f7f3eb] px-4 py-2 rounded-xl border border-[rgba(23,32,28,0.1)] text-right shrink-0">
          <span className="text-[10px] text-[#6a736d] block uppercase font-medium">Консульский сбор</span>
          <strong className="text-lg font-serif font-bold text-[#17382f]">
            {typeof route.fee.amount === 'number'
              ? `${route.fee.amount} ${route.fee.currency}`
              : `${route.fee.amount}`}
          </strong>
        </div>
      </div>

      {/* Grid of Key Route Parameters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4 text-xs">
        <div className="bg-[#f7f3eb] p-3 rounded-lg border border-[rgba(23,32,28,0.06)]">
          <span className="text-[#6a736d] block mb-0.5">Максимальный срок</span>
          <strong className="text-[#17201c] font-semibold">{route.maxStay}</strong>
        </div>
        <div className="bg-[#f7f3eb] p-3 rounded-lg border border-[rgba(23,32,28,0.06)]">
          <span className="text-[#6a736d] block mb-0.5">Коридор действия</span>
          <strong className="text-[#17201c] font-semibold">{route.validity}</strong>
        </div>
        <div className="bg-[#f7f3eb] p-3 rounded-lg border border-[rgba(23,32,28,0.06)]">
          <span className="text-[#6a736d] block mb-0.5">Въезд</span>
          <strong className="text-[#17201c] font-semibold">{getEntriesLabel(route.entries)}</strong>
        </div>
        <div className="bg-[#f7f3eb] p-3 rounded-lg border border-[rgba(23,32,28,0.06)]">
          <span className="text-[#6a736d] block mb-0.5">Срок оформления</span>
          <strong className="text-[#17201c] font-semibold">{route.processingTime}</strong>
        </div>
      </div>

      {/* Payment and Russian Card Notice */}
      {route.fee.note && (
        <div className="bg-amber-50/80 border border-amber-200/80 p-3 rounded-xl text-xs text-amber-950 mb-3 flex items-start gap-2">
          <span className="shrink-0 text-amber-700 font-bold">ℹ</span>
          <span>{route.fee.note}</span>
        </div>
      )}

      {/* Allowed Checkpoints & Extension */}
      <div className="space-y-2 text-xs text-[#17201c]/90 pt-2 border-t border-[rgba(23,32,28,0.08)]">
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
