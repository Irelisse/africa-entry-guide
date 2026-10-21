import type { CountryPageData } from '../../types/country-page';

export const mauritiusData: CountryPageData = {
  slug: 'mauritius',
  nameRu: 'Маврикий',
  nameEn: 'Mauritius',
  iso2: 'MU',
  iso3: 'MUS',
  flagCode: 'MU',
  region: 'Восточная Африка',
  capital: 'Порт-Луи',
  heroImage: '/images/countries/mauritius.webp',
  heroCaption: 'Полуостров и монолитная скала Ле-Морн-Брабан в бирюзовой лагуне',
  criticalNotice: {
    title: 'Санитарное ограничение по Эболе и форма All-in-One Form',
    description:
      'Иностранные граждане, побывавшие в ДР Конго, Уганде или Южном Судане в течение 21 дня до вылета, не допускаются к посадке на рейсы на Маврикий. До вылета все пассажиры обязаны заполнить цифровую форму здоровья All-in-One Form на safemauritius.govmu.org и предъявить QR-код при посадке.',
    type: 'warning',
  },
  currency: {

    code: 'MUR',
    name: 'Маврикийская рупия',
    symbol: '₨',
  },
  coordinates: {
    countryLat: -20.3484,
    countryLon: 57.5522,
    capitalLat: -20.1609,
    capitalLon: 57.5012,
  },

  quickSummary: {
    visaStatusRu: 'Безвизовый въезд',
    shortDescriptionRu:
      'Граждане РФ имеют право на безвизовый въезд на срок до 60 дней за одну поездку (и не более 90 дней в течение любого 180-дневного периода) в соответствии с межправительственным соглашением от 23 декабря 2015 года. Обязательно заполнение цифровой формы здоровья All-in-One Form до вылета.',
    availableRoutesList: ['Безвизовый въезд до 60 дней (0 ₨ / 0 $)'],
    maxStay: 'до 60 дней за поездку (максимум 90 дней за 180 дней)',
    feeFrom: '0 ₨ (бесплатно)',
    passportValidity: 'действителен на время поездки (рекомендуется от 6 месяцев)',
    lastVerifiedDate: '16 октября 2026',
    confidence: 'confirmed',
  },

  routes: [
    {
      id: 'visa-free-russia',
      name: 'Безвизовый въезд по двустороннему соглашению (Visa-Free)',
      routeType: 'visa_free',
      priorityBadge: 'Безвизовый въезд до 60 дней',
      availableForRussianCitizens: true,

      purpose: 'Туризм, отдых, краткосрочный визит',
      maxStay: 'до 60 дней за поездку, но не более 90 дней в течение 180 дней',
      validity: 'в рамках лимита 90/180 дней',
      entries: 'multiple',
      fee: {
        amount: 0,
        currency: 'MUR',
        paymentMethod: 'Бесплатно (сбор отсутствует)',
        note: 'Безвизовый режим полностью освобождён от консульских и въездных сборов.',
      },
      processingTime: 'моментально на паспортном контроле',
      applyWhere: 'Паспортный контроль по прибытии в аэропорту MRU',
      format: 'stamp',
      allowedBorderCrossings: [
        'Международный аэропорт имени сэра Сивусагура Рамгулама (MRU)',
        'Морской порт Порт-Луи',
      ],
      extensionAvailable: true,
      extensionRules:
        'При планировании поездки свыше 60 дней МИД РФ рекомендует заранее оформить визу в Посольстве Маврикия. Продление на месте возможно через Passport and Immigration Office (PIO) бесплатно.',
      description:
        'Основание: Соглашение между Правительством Российской Федерации и Правительством Республики Маврикий о взаимной отмене визовых требований от 23 декабря 2015 года.',
    },
  ],

  requirementsChecklist: [
    {
      id: 'passport',
      label: 'Загранпаспорт со сроком действия на период поездки',
      state: 'required',
      details: 'По закону паспорт должен действовать на весь срок пребывания и возвращения; авиационные службы рекомендуют запас от 6 месяцев.',
    },
    {
      id: 'all-in-one-form',
      label: 'Цифровая форма здоровья All-in-One Travel Digital Form',
      state: 'required',
      details: 'Обязательно заполняется на safemauritius.govmu.org до посадки на рейс; QR-код проверяется авиакомпанией.',
    },
    {
      id: 'return-ticket',
      label: 'Подтверждённый обратный авиабилет',
      state: 'required',
      details: 'Билет на выезд из Маврикия в пределах разрешённого 60-дневного срока.',
    },
    {
      id: 'hotel-booking',
      label: 'Подтверждённая бронь отеля или спонсорство',
      state: 'required',
      details: 'Ваучер отеля или спонсорское письмо с адресом проживания.',
    },
    {
      id: 'funds',
      label: 'Финансовое обеспечение ($100 в день на человека)',
      state: 'required',
      details: 'Официальный норматив для расходов (без учёта проживания) — $100 USD в день. Принимаются наличные и карты.',
    },
    {
      id: 'ebola-rule',
      label: 'Санитарное ограничение по странам риска (Эбола)',
      state: 'conditional',
      details: 'Пассажиры, посещавшие ДР Конго, Уганду или Южный Судан в течение последних 21 дней, не допускаются к посадке на рейс.',
    },
  ],

  passport: {
    validityRequirement: 'Действителен на весь срок пребывания и возвращения (рекомендуется 6+ месяцев)',
    validityFrom: 'exit_date',
    blankPagesRequired: 1,
    biometricOnly: false,
    retainedByEmbassy: false,
    note: 'Для безопасности авиаперелётов рекомендуется иметь не менее 6 месяцев действия загранпаспорта.',
  },

  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Проверка срока поездки',
      description:
        'Если вы летите на отдых до 60 дней — оформлять визу заранее не нужно. Если поездка планируется дольше 60 дней — обратитесь в Посольство в Москве.',
    },
    {
      stepNumber: 2,
      title: 'Заполнение формы All-in-One Form',
      description:
        'Перед вылетом заполните обязательную онлайн-декларацию на официальном портале safemauritius.govmu.org и сохраните сгенерированный PDF с QR-кодом.',
    },
    {
      stepNumber: 3,
      title: 'Проверка санитарного маршрута',
      description:
        'Убедитесь, что за последние 21 день перед вылетом вы не посещали ДР Конго, Уганду или Южный Судан.',
    },
    {
      stepNumber: 4,
      title: 'Паспортный контроль в аэропорту MRU',
      description:
        'Покажите паспорт, обратный билет, подтверждение брони отеля и QR-код формы All-in-One. Офицер бесплатно проставит въездной штамп.',
    },
  ],

  documents: [
    {
      name: 'Заграничный паспорт',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Действителен на всё время поездки (рекомендуется запас от 6 месяцев), минимум 1 чистая страница.',
    },
    {
      name: 'Подтверждённый обратный билет',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Билет на вылет из страны с фиксированной датой в пределах 60 дней.',
    },
    {
      name: 'Подтверждение брони отеля или спонсорское письмо',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Ваучер отеля или гарантийное письмо от принимающего лица с адресом на острове.',
    },
    {
      name: 'QR-код All-in-One Travel Digital Form',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF / QR',
      note: 'Оформляется на safemauritius.govmu.org до посадки на рейс.',
    },
    {
      name: 'Доказательство финансовых средств ($100/день)',
      state: 'required',
      originalOrCopy: 'either',
      note: 'Наличные доллары/евро либо международные банковские карты.',
    },
    {
      name: 'Сертификат от жёлтой лихорадки',
      state: 'conditional',
      originalOrCopy: 'original',
      note: 'Требуется только для туристов старше 1 года, прибывающих из эндемичных стран или после транзита более 12 часов.',
    },
  ],

  consularDocuments: [
    {
      id: 'mauritius-advisory',
      title: 'Travel Advisory: Санитарный регламент и форма All-in-One',
      filename: 'mauritius-travel-health-advisory.pdf',
      url: '/documents/mauritius/mauritius-travel-health-advisory.pdf',
      fileType: 'pdf',
      fileSize: '253 КБ',
      description: 'Официальный регламент Министерства здравоохранения и Службы гражданской авиации Маврикия.',
    },
  ],

  travelAndStay: {

    returnTicketRequired: true,
    hotelBookingRequired: true,
    proofOfFundsRequired: true,
    fundsPerDayOrTotal: 'Официальный ориентир — $100 USD в день на человека (наличные или международные карты).',
    invitationRequired: false,
    notes: 'Трудовая или оплачиваемая деятельность по туристическому статусу строго запрещена.',
  },

  health: {
    yellowFever: {
      requiredDirectFromRussia: false,
      requiredFromRiskCountries: true,
      transitThresholdHours: 12,
      note:
        'При прямом следовании из России сертификат НЕ ТРЕБУЕТСЯ. Обязателен только при следовании из зоны риска или транзите свыше 12 часов через аэропорты эндемичных стран.',
    },
    medicalInsuranceRequired: false,
    notes:
      'Внимание: действует чрезвычайная санитарная мера по Эболе — иностранные граждане, побывавшие в ДР Конго, Уганде или Южном Судане в течение 21 дня до прибытия, не допускаются к въезду на Маврикий.',
  },

  departureChecklist: [
    'Загранпаспорт действителен на весь срок (рекомендуется от 6 месяцев)',
    'Заполнена цифровая форма All-in-One Form на safemauritius.govmu.org (сохранён QR-код)',
    'Распечатаны или сохранены в телефон обратные авиабилеты и бронь отеля',
    'Финансовые средства из расчёта $100 в день на человека',
    'Проверено отсутствие поездок в ДР Конго, Уганду и Южный Судан за последние 21 день',
    'Сертификат от жёлтой лихорадки (если была пересадка более 12 ч в эндемичной стране)',
  ],

  border: {
    checkpointTypes: ['airport', 'seaport'],
    documentsRequestedOnArrival: [
      'Оригинал загранпаспорта',
      'QR-код цифровой формы All-in-One Form',
      'Обратный авиабилет',
      'Бронь отеля или спонсорское подтверждение',
      'Подтверждение средств на поездку',
    ],
    allowedEntryPoints: [
      'Международный аэропорт имени сэра Сивусагура Рамгулама (MRU)',
      'Морской порт Порт-Луи',
    ],
    arrivalCardRequired: false,
    biometricsOnArrival: false,
    notes: 'Иммиграционный офицер бесплатно проставляет въездной штамп с указанием разрешённого количества дней пребывания.',
  },

  postEntry: {
    registrationRequired: false,
    extensionPossible: true,
    extensionMaxDuration: 'До 90 дней в полугодии',
    extensionCost: 'Бесплатно',
    notes:
      'Продление оформляется бесплатно в центральном офисе Passport and Immigration Office (PIO) в Порт-Луи при предъявлении паспорта, билетов, выписки за 3 месяца и брони отеля.',
  },

  transit: {
    visaRequired: false,
    airsideTransitAllowed: true,
    maxAirsideTransitHours: 24,
    notes:
      'Поскольку для граждан РФ действует безвизовый режим с Маврикием, транзит через аэропорт не требует оформления отдельной визы. Санитарные ограничения по Эболе продолжают действовать.',
  },

  contacts: [
    {
      type: 'embassy',
      name: 'Посольство Республики Маврикий в Российской Федерации',
      city: 'Москва',
      address: '109240, г. Москва, ул. Николоямская, д. 8',
      phone: '+7 (495) 915-76-17 / +7 (495) 915-04-92',
      email: 'moscow_emb@govmu.org',
      website: 'https://mauritius-moscow.govmu.org/',
    },
    {
      type: 'immigration',
      name: 'Паспортно-иммиграционная служба Маврикия (PIO)',
      city: 'Порт-Луи',
      address: 'Sterling House, 9-11 Lislet Geoffroy Street, Port Louis',
      phone: '+230 260 2073 / +230 5727 6619',
      email: 'piomain@govmu.org',
      website: 'https://passport.govmu.org/',
    },
    {
      type: 'visa_portal',
      name: 'Портал цифровой формы All-in-One Form (Safe Mauritius)',
      website: 'https://safemauritius.govmu.org/',
    },
  ],

  sources: [
    {
      title: 'Bilateral Visa Waiver Agreement (23 Dec 2015)',
      organization: 'Russian Ministry of Foreign Affairs / Government of Mauritius',
      url: 'https://www.kdmid.ru/',
      dateChecked: '2026-10-16',
      reliability: 'primary_official',
      note: 'Межправительственное соглашение о безвизовом режиме до 60 дней за поездку.',
    },
    {
      title: 'Passport and Immigration Office Entry Regulations',
      organization: 'Mauritius Passport and Immigration Office (PIO)',
      url: 'https://passport.govmu.org/',
      dateChecked: '2026-10-16',
      reliability: 'primary_official',
      note: 'Официальные правила въезда, финансовые требования и порядок продления.',
    },
    {
      title: 'Airport Travel Advisory & Ebola Entry Measures',
      organization: 'Department of Civil Aviation / Airport Terminal Operations Ltd',
      url: 'https://mauritius-airport.atol.aero/',
      dateChecked: '2026-10-16',
      reliability: 'primary_official',
      note: 'Оперативное уведомление по санитарным ограничениям и форме All-in-One.',
    },
  ],

  verification: {
    lastChecked: '16 октября 2026',
    status: 'confirmed',
    officialSourcesCount: 5,
  },
};
