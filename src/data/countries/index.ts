import type { CountryPageData } from '../../types/country-page';
import registryData from '../coverage-registry.json';

import mapPathsData from '../africa-map-paths.json';

const HARDCODED_COUNTRIES: Record<string, CountryPageData> = {};


export function getCountryData(slug: string): CountryPageData | null {
  if (HARDCODED_COUNTRIES[slug]) {
    return HARDCODED_COUNTRIES[slug];
  }

  // Generate clean, dignified placeholder skeleton from registry data
  const regItem = registryData.find((r) => r.slug === slug);
  if (!regItem) return null;

  const mapItem = (mapPathsData as Array<{ slug: string; cx: number; cy: number }>).find(
    (m) => m.slug === slug
  );

  return {
    slug: regItem.slug,
    nameRu: regItem.name,
    nameEn: regItem.slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    iso2: regItem.iso2 || '',
    iso3: '',
    flagCode: regItem.flagCode || regItem.iso2 || '',
    region: 'Африка',
    capital: 'Информация уточняется',
    currency: {
      code: '—',
      name: 'Информация уточняется',
    },
    coordinates: {
      countryLat: mapItem ? Number((38.5 - (mapItem.cy / 800) * 74.5).toFixed(2)) : 0,
      countryLon: mapItem ? Number((-26.5 + (mapItem.cx / 860) * 86.0).toFixed(2)) : 0,
    },
    quickSummary: {
      visaStatusRu: 'Информация уточняется',
      shortDescriptionRu: `Правила въезда и визовые требования для направления «${regItem.name}» находятся в процессе сбора и проверки по официальным источникам.`,
      availableRoutesList: ['Данные собираются'],
      maxStay: 'Уточняется',
      feeFrom: 'Уточняется',
      passportValidity: 'Уточняется',
      lastVerifiedDate: 'В процессе проверки',
      confidence: 'research_in_progress',
    },
    routes: [],
    requirementsChecklist: [
      {
        id: 'passport',
        label: 'Заграничный паспорт',
        state: 'unknown',
        details: 'Требования к сроку действия паспорта уточняются в дипломатическом представительстве.',
      },
      {
        id: 'yellow-fever',
        label: 'Вакцинация от жёлтой лихорадки',
        state: 'unknown',
        details: 'Медицинские предписания проверяются по базе ВОЗ и национального Минздрава.',
      },
    ],
    passport: {
      validityRequirement: 'Информация проверяется',
      validityFrom: 'unknown',
      blankPagesRequired: 1,
      biometricOnly: false,
      retainedByEmbassy: false,
      note: 'Официальные требования будут опубликованы после верификации.',
    },
    documents: [],
    travelAndStay: {
      returnTicketRequired: false,
      hotelBookingRequired: false,
      proofOfFundsRequired: false,
      invitationRequired: false,
      notes: 'Требования к подтверждению бронирований и финансовой состоятельности уточняются.',
    },
    health: {
      yellowFever: {
        requiredDirectFromRussia: false,
        requiredFromRiskCountries: false,
        note: 'Правила санитарного контроля уточняются.',
      },
      medicalInsuranceRequired: false,
      notes: 'Рекомендуется оформление международного полиса медицинского страхования.',
    },
    departureChecklist: [
      'Действующий заграничный паспорт',
      'Проверить актуальные правила въезда перед вылетом',
    ],
    border: {
      checkpointTypes: ['airport'],
      documentsRequestedOnArrival: ['Заграничный паспорт'],
      notes: 'Список документов, проверяемых офицерами на границе, уточняется.',
    },
    postEntry: {
      registrationRequired: false,
      extensionPossible: false,
      notes: 'Правила пребывания и продления визы в процессе верификации.',
    },
    contacts: [],
    sources: [],
    verification: {
      lastChecked: 'Октябрь 2026',
      status: 'research_in_progress',
      officialSourcesCount: 0,
    },
  };
}
