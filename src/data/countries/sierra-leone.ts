import type { CountryPageData } from '../../types/country-page';

export const sierraLeoneData: CountryPageData = {
  slug: 'sierra-leone',
  nameRu: 'Сьерра-Леоне',
  nameEn: 'Sierra Leone',
  iso2: 'SL',
  iso3: 'SLE',
  flagCode: 'SL',
  region: 'Западная Африка',
  capital: 'Фритаун',
  heroImage: '/images/countries/sierra-leone.webp',
  heroCaption: 'Закат на океанском пляже River No. 2 на полуострове Фритаун',
  criticalNotice: {
    title: 'Оплата новыми долларами ($200), жёлтая лихорадка и собеседование',
    description:
      'Посольство Сьерра-Леоне в Москве оформляет многократную визу на 1 год за $200 USD — оплата принимается исключительно наличными новыми купюрами долларов США. Обязателен сертификат от жёлтой лихорадки. При подаче документов регламент предусматривает короткое собеседование с заявителем.',
    type: 'warning',
  },
  currency: {
    code: 'SLE',
    name: 'Леоне Сьерра-Леоне',
    symbol: 'Le',
  },
  coordinates: {
    countryLat: 8.4606,
    countryLon: -11.7799,
    capitalLat: 8.484,
    capitalLon: -13.2299,
  },

  quickSummary: {
    visaStatusRu: 'Виза требуется',
    shortDescriptionRu:
      'Гражданам РФ для поездки в Сьерра-Леоне требуется виза. Посольство в Москве оформляет туристическую мультивизу на 1 год с выдачей визового стикера в паспорт. Срок оформления составляет около 3 рабочих дней.',
    availableRoutesList: ['Многократная виза в Москве на 1 год ($200 USD)'],
    maxStay: 'до 90 дней за поездку (виза на 1 год)',
    feeFrom: '$200 USD (мультивиза на 1 год)',
    passportValidity: 'не менее 6 месяцев',
    lastVerifiedDate: '21 октября 2026',
    confidence: 'confirmed',
  },

  routes: [
    {
      id: 'consular-tourist-visa-moscow',
      name: 'Многократная виза в Посольстве Сьерра-Леоне в Москве',
      routeType: 'consular_visa',
      priorityBadge: 'Многократная виза на 1 год ($200)',
      availableForRussianCitizens: true,
      purpose: 'Туризм, пляжный отдых, деловые визиты',
      maxStay: 'до 90 дней за поездку',
      validity: '1 год (многократный въезд)',
      entries: 'multiple',
      fee: {
        amount: 200,
        currency: 'USD',
        paymentMethod: 'Наличными в долларах США (новые купюры)',
        refundable: false,
        russianCardAccepted: false,
        note: 'Сбор $200 USD оплачивается наличными долларами. Принимаются только чистые банкноты нового образца без повреждений.',
      },
      processingTime: 'около 3 рабочих дней',
      applyWhere: 'Посольство Сьерра-Леоне в Москве (Рублёвское шоссе, д. 26, корп. 1)',
      format: 'sticker',
      allowedBorderCrossings: [
        'Международный аэропорт Лунги во Фритауне (FNA)',
        'Морские и наземные КПП страны',
      ],
      extensionAvailable: true,
      extensionRules: 'Продление оформляется через иммиграционный департамент во Фритауне.',
      description:
        'Приём заявителей проходит в будни с 11:00 до 16:00 (рекомендуется предварительно позвонить и записаться). По итогам собеседования выдаётся физический стикер на 1 год.',
    },
  ],

  requirementsChecklist: [
    {
      id: 'passport',
      label: 'Действующий загранпаспорт',
      state: 'required',
      details: 'Рекомендуется срок действия от 6 месяцев и минимум 2 чистые страницы.',
    },
    {
      id: 'yellow-fever',
      label: 'Сертификат о вакцинации от жёлтой лихорадки',
      state: 'required',
      details: 'Строго обязателен для оформления визы и посадки на рейс.',
    },
    {
      id: 'application-form',
      label: 'Заполненная визовая анкета с цветной фотографией',
      state: 'required',
      details: 'Официальный бланк Visa Application Form на английском языке.',
    },
    {
      id: 'return-ticket',
      label: 'Копия авиабилетов в обе стороны',
      state: 'required',
      details: 'Подтверждённый авиабилет на въезд и вылет из Сьерра-Леоне.',
    },
    {
      id: 'funds',
      label: 'Доказательство достаточных финансовых средств',
      state: 'required',
      details: 'Банковская справка об остатке средств на поездку.',
    },
    {
      id: 'interview',
      label: 'Собеседование с консулом',
      state: 'required',
      details: 'Краткое собеседование при сдаче документов в консульском отделе в Москве.',
    },
  ],

  passport: {
    validityRequirement: 'Не менее 6 месяцев с даты планируемого въезда',
    validityFrom: 'entry_date',
    blankPagesRequired: 2,
    biometricOnly: false,
    retainedByEmbassy: true,
    note: 'Паспорт сдаётся в посольство в Москве на время оформления визы (около 3 рабочих дней).',
  },

  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Скачивание официальной анкеты',
      description:
        'Скачайте официальный бланк Visa Application Form Посольства Сьерра-Леоне (доступен ниже) и аккуратно заполните его на английском языке.',
    },
    {
      stepNumber: 2,
      title: 'Подготовка наличных долларов и документов',
      description:
        'Подготовьте $200 USD наличными новыми купюрами, 1 цветное фото, загранпаспорт, авиабилеты, бронь отеля и оригинал жёлтой книжки о вакцинации.',
    },
    {
      stepNumber: 3,
      title: 'Запись на приём в Посольство в Москве',
      description:
        'Позвоните в посольство по телефону +7 (495) 415-41-66 и согласуйте время визита (приёмные часы: Пн–Пт 11:00–16:00).',
    },
    {
      stepNumber: 4,
      title: 'Подача документов и собеседование',
      description:
        'Посетите посольство (Москва, Рублёвское шоссе, д. 26, корп. 1), пройдите короткое собеседование и оплатите сбор $200 USD.',
    },
    {
      stepNumber: 5,
      title: 'Получение готовой годовой мультивизы',
      description:
        'Через 3 рабочих дня заберите паспорт с вклеенной мультивизой, дающей право многократного въезда в течение 12 месяцев.',
    },
  ],

  documents: [
    {
      name: 'Оригинал загранпаспорта',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Действующий загранпаспорт с чистыми страницами для визового стикера.',
    },
    {
      name: 'Заполненная визовая анкета',
      state: 'required',
      originalOrCopy: 'original',
      language: 'Английский',
      digitalFormat: 'PDF',
      note: 'Официальный бланк посольства с подписью заявителя.',
    },
    {
      name: 'Цветная фотография паспортного размера',
      state: 'required',
      originalOrCopy: 'original',
      note: '1 свежее цветное фото на светлом фоне.',
    },
    {
      name: 'Копия обратного авиабилета',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Билет на вылет из Сьерра-Леоне.',
    },
    {
      name: 'Сертификат о вакцинации от жёлтой лихорадки',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Оригинал международного сертификата прививок.',
    },
    {
      name: 'Подтверждение достаточных средств',
      state: 'required',
      originalOrCopy: 'either',
      note: 'Выписка из банка или справка о наличии средств на поездку.',
    },
  ],

  consularDocuments: [
    {
      id: 'sl-visa-app',
      title: 'Официальная анкета на визу в Сьерра-Леоне',
      filename: 'sierra-leone-visa-application-form.pdf',
      url: '/documents/sierra-leone/sierra-leone-visa-application-form.pdf',
      fileType: 'pdf',
      fileSize: '364 КБ',
      description: 'Официальный бланк Visa Application Form Посольства Сьерра-Леоне в Москве.',
    },
    {
      id: 'sl-requirements',
      title: 'Официальные требования Посольства к визе',
      filename: 'sierra-leone-visa-requirements.pdf',
      url: '/documents/sierra-leone/sierra-leone-visa-requirements.pdf',
      fileType: 'pdf',
      fileSize: '50 КБ',
      description: 'Консульский регламент и перечень требований для граждан РФ.',
    },
  ],

  travelAndStay: {
    returnTicketRequired: true,
    hotelBookingRequired: true,
    proofOfFundsRequired: true,
    invitationRequired: false,
    notes: 'При наличии брони отеля отдельное частное приглашение не требуется.',
  },

  health: {
    yellowFever: {
      requiredDirectFromRussia: true,
      requiredFromRiskCountries: true,
      note: 'Вакцинация от жёлтой лихорадки строго обязательна для получения визы и въезда в Сьерра-Леоне.',
    },
    medicalInsuranceRequired: false,
    notes: 'Сьерра-Леоне — зона риска малярии. Настоятельно рекомендуется медицинская страховка и прием профилактических медикаментов.',
  },

  departureChecklist: [
    'Загранпаспорт с вклеенной годовой мультивизой Сьерра-Леоне',
    'Оригинал сертификата о вакцинации от жёлтой лихорадки',
    'Распечатанные обратные авиабилеты и бронь отеля',
    'Наличные деньги на личные расходы',
  ],

  border: {
    checkpointTypes: ['airport', 'seaport', 'land_border'],
    documentsRequestedOnArrival: [
      'Загранпаспорт с действующей визой',
      'Сертификат от жёлтой лихорадки',
      'Обратные авиабилеты',
      'Бронь отеля',
    ],
    allowedEntryPoints: ['Международный аэропорт Лунги (FNA)'],
    arrivalCardRequired: true,
    biometricsOnArrival: false,
    notes: 'В аэропорту Лунги для переезда во Фритаун используется водное такси (катер) или вертолёт через залив.',
  },

  postEntry: {
    registrationRequired: false,
    extensionPossible: true,
    notes: 'Продление пребывания возможно через иммиграционную службу во Фритауне.',
  },

  transit: {
    visaRequired: true,
    airsideTransitAllowed: false,
    notes: 'Транзитные правила рекомендуют оформлять визу заранее.',
  },

  contacts: [
    {
      type: 'embassy',
      name: 'Посольство Республики Сьерра-Леоне в Российской Федерации',
      city: 'Москва',
      address: '121609, г. Москва, Рублёвское шоссе, д. 26, корп. 1, кв. 58-59',
      phone: '+7 (495) 415-41-66 / +7 (495) 415-41-55',
      email: 'sierraleoneembassy@mail.ru',
      workingHours: 'Пн–Пт 11:00–16:00',
    },
  ],

  sources: [
    {
      title: 'Consular Visa Requirements & Application Document',
      organization: 'Embassy of Sierra Leone in Moscow',
      url: 'https://mail.google.com/',
      dateChecked: '2026-10-21',
      reliability: 'primary_official',
      note: 'Официальные консульские регламенты и визовая анкета Посольства Сьерра-Леоне.',
    },
  ],

  verification: {
    lastChecked: '21 октября 2026',
    status: 'confirmed',
    officialSourcesCount: 2,
  },
};
