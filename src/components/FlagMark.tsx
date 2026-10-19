import React from 'react';
import { getFlagUrl } from '../utils/registry';

interface FlagMarkProps {
  slug: string;
  name: string;
  code?: string;
  eager?: boolean;
  compact?: boolean;
  grayscale?: boolean;
}

export const FlagMark: React.FC<FlagMarkProps> = ({
  slug,
  name,
  code,
  eager = false,
  compact = false,
  grayscale = false,
}) => {
  const src = getFlagUrl(slug, code, import.meta.env.BASE_URL || '/');
  const isTaafChild = code?.toUpperCase() === 'TF' && slug !== 'taaf';

  return (
    <div
      className={`flag-mark ${compact ? 'flag-mark--compact' : ''} ${
        !src ? 'flag-mark--neutral' : ''
      } ${grayscale ? 'flag-mark--grayscale' : ''}`}
      style={
        compact
          ? {
              height: '100%',
              minHeight: '100%',
              padding: '6px 10px',
              borderRadius: 0,
              boxShadow: 'none',
              border: 'none',
            }
          : undefined
      }
    >
      {src ? (
        <img
          src={src}
          alt={`Флаг: ${name}`}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          style={
            grayscale
              ? {
                  filter: 'grayscale(100%) contrast(0.92) opacity(0.82)',
                }
              : undefined
          }
          onError={(e) => {
            (e.currentTarget as HTMLElement).style.display = 'none';
          }}
        />
      ) : (
        <div
          className="geo-mark"
          aria-label={`Нейтральный географический знак: ${name}`}
          role="img"
          style={grayscale ? { filter: 'grayscale(100%) opacity(0.7)' } : undefined}
        >
          <span className="geo-mark__cross" aria-hidden="true" />
          <span className="geo-mark__dot" aria-hidden="true" />
        </div>
      )}
      {isTaafChild && <span className="flag-mark__tag">TAAF</span>}
    </div>
  );
};
