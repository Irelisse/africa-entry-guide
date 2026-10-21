import type { CountryPageData } from '../../types/country-page';

export const ghanaData: CountryPageData = {
  slug: 'ghana',
  nameRu: 'Гана',
  nameEn: 'Ghana',
  iso2: 'GH',
  iso3: 'GHA',
  flagCode: 'GH',
  region: 'Западная Африка',
  capital: 'Аккра',
  heroImage: '/images/countries/ghana.webp',
  heroCaption: 'Исторический замок Кейп-Кост на побережье Гвинейского залива',
  criticalNotice: {
    title: 'Требования к загранпаспорту: 6 месяцев от выезда и 3 чистые страницы',
    description:
      'По регламенту туристической визы B2 загранпаспорт должен действовать не менее 6 месяцев именно от даты выезда из Ганы и иметь минимум 3 чистые страницы. Обязательны международный сертификат от жёлтой лихорадки и банковская выписка за 3 месяца.',
    type: 'warning',
  },
  currency: {

    code: 'GHS',
    name: 'Ганский седи',
    symbol: 'GH₵',
  },
  coordinates: {
    countryLat: 7.9465,
    countryLon: -1.0232,
    capitalLat: 5.6037,
    capitalLon: -0.187,
  },

  quickSummary: {
    visaStatusRu: 'Электронное разрешение (eVisa / eTA)',
    shortDescriptionRu:
      'Гражданам РФ для туристической поездки в Гану требуется виза. Действует официальная туристическая электронная виза B2 (Ghana eVisa), оформляемая полностью онлайн. Также доступна традиционная подача через Посольство Ганы в Москве.',
    availableRoutesList: ['Туристическая eVisa B2 ($260)', 'Консульская виза в Москве (от 6 000 ₽)'],
    maxStay: 'до 60 дней (решается офицером на границе)',
    feeFrom: '$260 USD / 6 000 ₽',
    passportValidity: 'не менее 6 месяцев от даты выезда из Ганы',
    lastVerifiedDate: '16 октября 2026',
    confidence: 'confirmed',
  },

  routes: [
    {
      id: 'b2-tourist-evisa',
      name: 'Туристическая электронная виза B2 (Ghana Tourist eVisa)',
      routeType: 'evisa',
      priorityBadge: 'Основной онлайн-маршрут (B2 eVisa)',
      availableForRussianCitizens: true,

      purpose: 'Туризм, отдых, краткосрочный визит',
      maxStay: 'до 60 дней (точный срок определяется иммиграционным офицером при въезде)',
      validity: '90 дней с момента выдачи',
      entries: 'single',
      fee: {
        amount: 260,
        currency: 'USD',
        paymentMethod: 'Онлайн на официальном портале зарубежной банковской картой',
        refundable: false,
        russianCardAccepted: false,
        note: 'Тарифы: $260 стандарт (до 96 часов), $338 приоритет (до 48 часов), $442 экспресс (до 5 часов). Российские карты МИР не принимаются.',
      },
      processingTime: 'от 5 часов (экспресс) до 96 часов (стандарт)',
      applyWhere: 'Официальный портал Иммиграционной службы Ганы (GIS)',
      officialUrl: 'https://evisa.immigration.gov.gh/',
      format: 'electronic',
      allowedBorderCrossings: [
        'Международный аэропорт Котока в Аккре (ACC)',
        'Все официальные международные сухопутные и морские КПП Ганы',
      ],
      extensionAvailable: true,
      extensionRules:
        'Продление возможно на территории Ганы через Ghana Immigration Service (GIS) максимум до 6 месяцев суммарно.',
      description:
        'Электронная виза приходит на email в формате PDF (A4). Предъявляется в электронном или распечатанном виде.',
    },
    {
      id: 'moscow-consular-tourist-visa',
      name: 'Консульская виза в Посольстве Ганы в Москве',
      routeType: 'consular_visa',
      priorityBadge: 'Подача через Посольство в Москве',
      availableForRussianCitizens: true,

      purpose: 'Туризм, частный визит',
      maxStay: 'до 60 дней (2 месяца)',
      validity: '3 месяца (однократная) или 6–12 месяцев (мульти)',
      entries: 'single',
      fee: {
        amount: 6000,
        currency: 'RUB',
        paymentMethod: 'Наличными в рублях при подаче в консульском отделе',
        refundable: false,
        russianCardAccepted: true,
        note: 'Однократная виза на 3 мес.: 6 000 ₽ стандарт / 8 000 ₽ за 3 дня / 10 000 ₽ за 24 ч. Мультивиза на 6 мес.: 9 000–13 000 ₽; на 1 год: 12 000–16 000 ₽.',
      },
      processingTime: 'стандартная (до 10 раб. дней) или срочная (3 дня / 24 часа)',
      applyWhere: 'Посольство Ганы в Москве (ул. Пятницкая, д. 33-35/1)',
      format: 'sticker',
      allowedBorderCrossings: ['Все международные пункты пропуска Ганы'],
      extensionAvailable: true,
      extensionRules: 'Продление через GIS в Гане.',
      description:
        'Подача бумажных документов в Москве без предварительной записи: Пн–Чт с 10:30 до 13:00. Оплата производится наличными в рублях.',
    },
  ],

  requirementsChecklist: [
    {
      id: 'passport',
      label: 'Загранпаспорт со сроком действия от 6 месяцев от даты выезда',
      state: 'required',
      details: 'По официальному руководству к eVisa требуется минимум 3 чистые страницы.',
    },
    {
      id: 'yellow-fever',
      label: 'Сертификат о вакцинации от жёлтой лихорадки',
      state: 'required',
      details: 'Строго обязателен для всех туристов при въезде в Гану.',
    },
    {
      id: 'accommodation-proof',
      label: 'Подтверждение проживания на весь срок поездки',
      state: 'required',
      details: 'Бронь отеля/гостевого дома либо приглашение от принимающего лица в Гане.',
    },
    {
      id: 'return-itinerary',
      label: 'Подтверждённый обратный билет или маршрут',
      state: 'required',
      details: 'Загружается при подаче онлайн-заявления на eVisa.',
    },
    {
      id: 'proof-of-funds',
      label: 'Финансовое подтверждение (выписка за 3 месяца)',
      state: 'required',
      details: 'Выписка с банковского счёта или кредитной карты за последние 3 месяца.',
    },
    {
      id: 'travel-insurance',
      label: 'Медицинская страховка',
      state: 'recommended',
      details: 'Не входит в обязательный перечень eVisa, но настоятельно рекомендуется для путешествий по Западной Африке.',
    },
  ],

  passport: {
    validityRequirement: 'Не менее 6 месяцев от предполагаемой даты выезда из Ганы',
    validityFrom: 'exit_date',
    blankPagesRequired: 3,
    biometricOnly: false,
    retainedByEmbassy: false,
    note: 'Для подачи на eVisa паспорт не изымается; в загранпаспорте должно быть 3 чистые страницы.',
  },

  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Подготовка документов и выписки',
      description:
        'Подготовьте скан паспорта (действителен 6+ мес. от выезда), фото 35×45 мм, выписку из банка за 3 месяца, бронь отеля и билет.',
    },
    {
      stepNumber: 2,
      title: 'Подача заявления на портале eVisa',
      description:
        'Зайдите на официальный государственный сайт evisa.immigration.gov.gh, выберите категорию B2 Tourist Visa и заполните анкету.',
    },
    {
      stepNumber: 3,
      title: 'Выбор скорости и оплата сбора',
      description:
        'Выберите тариф ($260 стандарт / $338 приоритет / $442 экспресс) и оплатите сбор зарубежной банковской картой.',
    },
    {
      stepNumber: 4,
      title: 'Получение электронного разрешения (A4 eVisa)',
      description:
        'После проверки на электронную почту придёт файл разрешения на въезд. Сохраните его в телефон и распечатайте копию на бумаге.',
    },
    {
      stepNumber: 5,
      title: 'Въезд в Гану',
      description:
        'На паспортном контроле в Аккре предъявите паспорт, распечатку eVisa и сертификат от жёлтой лихорадки. Офицер проставит штамп с разрешённым сроком пребывания.',
    },
  ],

  documents: [
    {
      name: 'Скан разворота загранпаспорта',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF / JPG',
      note: 'Срок действия минимум 6 месяцев от даты выезда из Ганы, 3 чистые страницы.',
    },
    {
      name: 'Фотография паспортного образца',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'JPG',
      note: 'Размер 35×45 мм, белый/светлый фон, возраст снимка до 6 месяцев.',
    },
    {
      name: 'Выписка с банковского счёта за 3 месяца',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Выписка по счёту или карте за последние 3 месяца, подтверждающая платёжеспособность.',
    },
    {
      name: 'Сертификат о вакцинации от жёлтой лихорадки',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Обязательный санитарный документ для посадки на рейс и пересечения границы.',
    },
    {
      name: 'Подтверждение бронирования жилья на весь срок',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Бронь отеля, лоджа или апартаментов на все дни поездки.',
    },
    {
      name: 'Подтверждённый авиабилет из Ганы',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Билет обратно в РФ или в третью страну.',
    },
  ],

  consularDocuments: [
    {
      id: 'ghana-fees',
      title: 'Официальные тарифы визовых сборов Посольства Ганы',
      filename: 'ghana-consular-visa-fees.pdf',
      url: '/documents/ghana/ghana-consular-visa-fees.pdf',
      fileType: 'pdf',
      fileSize: '6.1 МБ',
      description: 'Официальный регламент визовых сборов и условий срочности Посольства Ганы в Москве.',
    },
    {
      id: 'ghana-app',
      title: 'Анкета на получение визы в Гану (Word)',
      filename: 'ghana-visa-application-form.docx',
      url: '/documents/ghana/ghana-visa-application-form.docx',
      fileType: 'docx',
      fileSize: '157 КБ',
      description: 'Редактируемый бланк анкеты Visa Application Form для заполнения и печати.',
    },
  ],

  travelAndStay: {

    returnTicketRequired: true,
    hotelBookingRequired: true,
    proofOfFundsRequired: true,
    fundsPerDayOrTotal: 'Подтверждается банковской выпиской за 3 месяца.',
    invitationRequired: false,
    notes: 'При размещении у частного лица требуется подписанное письмо-приглашение и копия удостоверения личности хозяина жилья.',
  },

  health: {
    yellowFever: {
      requiredDirectFromRussia: true,
      requiredFromRiskCountries: true,
      note: 'Вакцинация от жёлтой лихорадки обязательна для всех прибывающих в Гану граждан.',
    },
    medicalInsuranceRequired: false,
    notes: 'Габон и Гана — зоны распространения малярии. Рекомендуется профилактический курс таблеток и использование репеллентов.',
  },

  departureChecklist: [
    'Одобренная электронная виза eVisa (распечатана на А4 + сохранена в телефоне)',
    'Загранпаспорт действителен ещё минимум 6 месяцев с даты выезда',
    'В загранпаспорте есть минимум 3 свободные страницы',
    'Оригинал жёлтого международного сертификата о вакцинации',
    'Распечатанные брони отелей на все дни и обратные билеты',
    'Банковская выписка за 3 месяца',
  ],

  border: {
    checkpointTypes: ['airport', 'land_border'],
    documentsRequestedOnArrival: [
      'Оригинал загранпаспорта',
      'Распечатанная или цифровая eVisa B2',
      'Сертификат о прививке от жёлтой лихорадки',
      'Обратный билет',
      'Подтверждение бронирования жилья',
    ],
    allowedEntryPoints: ['Международные аэропорты и сухопутные пункты пропуска Ганы'],
    arrivalCardRequired: true,
    biometricsOnArrival: true,
    notes: 'Иммиграционный офицер принимает окончательное решение о допуске и ставит штамп с количеством разрешённых дней пребывания (обычно до 60 дней).',
  },

  postEntry: {
    registrationRequired: false,
    extensionPossible: true,
    extensionMaxDuration: 'До 6 месяцев суммарно',
    notes: 'Продление разрешений оформляется через офисы Иммиграционной службы Ганы (GIS). Работа по туристической визе запрещена.',
  },

  transit: {
    visaRequired: false,
    airsideTransitAllowed: true,
    maxAirsideTransitHours: 48,
    notes: 'Безвизовый транзит разрешён, если пассажир не покидает транзитную зону аэропорта. Если требуется получение багажа и повторная регистрация (landside) — оформляется транзитная виза ($65 USD на срок до 48 часов).',
  },

  contacts: [
    {
      type: 'embassy',
      name: 'Посольство Республики Гана в Российской Федерации',
      city: 'Москва',
      address: '119017, г. Москва, ул. Пятницкая, д. 33-35, стр. 1',
      phone: '+7 (495) 690-23-27',
      email: 'consulateghana.moscow@mfa.gov.gh',
      website: 'https://moscow.mfa.gov.gh/',
      workingHours: 'Пн–Чт 10:30–13:00 (приём документов без записи)',
    },
    {
      type: 'visa_portal',
      name: 'Поддержка eVisa / Иммиграционная служба Ганы (GIS)',
      phone: '+233 308 249 682',
      email: 'support.evisa@immigration.gov.gh',
      website: 'https://evisa.immigration.gov.gh/',
    },
  ],

  sources: [
    {
      title: 'Ghana eVisa Portal / Visa Information',
      organization: 'Ghana Immigration Service (GIS)',
      url: 'https://evisa.immigration.gov.gh/visa-information',
      dateChecked: '2026-10-16',
      reliability: 'primary_official',
      note: 'Официальный регламент туристической визы B2, тарифы и сроки обработки.',
    },
    {
      title: 'Consular Tariffs & Application Regulations',
      organization: 'Embassy of Ghana in Moscow',
      url: 'https://moscow.mfa.gov.gh/',
      dateChecked: '2026-09-23',
      reliability: 'primary_official',
      note: 'Прямая официальная переписка и тарифы консульского отдела в Москве.',
    },
    {
      title: 'Immigration Regulations L.I. 1691',
      organization: 'Republic of Ghana',
      url: 'https://gis.gov.gh/wp-content/uploads/2024/02/LI-1691.pdf',
      dateChecked: '2026-10-16',
      reliability: 'primary_official',
      note: 'Законодательные нормы въезда и пребывания иностранных граждан.',
    },
  ],

  verification: {
    lastChecked: '16 октября 2026',
    status: 'confirmed',
    officialSourcesCount: 5,
  },
};
