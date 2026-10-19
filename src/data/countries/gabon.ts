import type { CountryPageData } from '../../types/country-page';

export const gabonData: CountryPageData = {
  slug: 'gabon',
  nameRu: 'Габон',
  nameEn: 'Gabon',
  iso2: 'GA',
  iso3: 'GAB',
  flagCode: 'GA',
  region: 'Центральная Африка',
  capital: 'Либревиль',
  heroImage: '/images/countries/gabon.webp',
  currency: {
    code: 'XAF',
    name: 'Центральноафриканский франк КФА',
    symbol: 'FCFA',
  },
  coordinates: {
    countryLat: -0.8037,
    countryLon: 11.6094,
    capitalLat: 0.4162,
    capitalLon: 9.4673,
  },

  quickSummary: {
    visaStatusRu: 'Виза требуется',
    shortDescriptionRu:
      'Гражданам РФ для туристической поездки в Габон требуется виза. Доступно быстрое оформление официальной электронной визы (eVisa) с получением в аэропорту Либревиля либо классическая подача через Посольство Габона в Москве.',
    availableRoutesList: ['Электронная виза eVisa (€85)', 'Консульская виза в Москве (€100–150)'],
    maxStay: 'от 30 до 90 дней (до 6 мес. при мультивизе)',
    feeFrom: '€85 EUR (~€70 + €15)',
    passportValidity: 'не менее 6 месяцев',
    lastVerifiedDate: '16 октября 2026',
    confidence: 'confirmed',
  },

  routes: [
    {
      id: 'tourist-evisa',
      name: 'Туристическая электронная виза (Gabon eVisa)',
      routeType: 'evisa',
      availableForRussianCitizens: true,
      purpose: 'Туризм, отдых, частный визит',
      maxStay: '1, 2 или 3 месяца (однократная) или 6 месяцев (многократная)',
      validity: '1–3 месяца (однократная) / 6 месяцев (мульти)',
      entries: 'single',
      fee: {
        amount: 85,
        currency: 'EUR',
        paymentMethod: 'Наличными евро или франками КФА по прибытии в аэропорту',
        refundable: false,
        russianCardAccepted: false,
        note: 'Оплата происходит наличными на границе в аэропорту Либревиля (€70 визовый сбор + €15 сервисный сбор, либо 45 000 XAF). Банковские карты РФ не требуются.',
      },
      processingTime: '72 часа с момента подачи онлайн-заявки',
      applyWhere: 'Официальный правительственный сервис DGDI Gabon',
      officialUrl: 'https://evisa.dgdi.ga/',
      format: 'electronic',
      allowedBorderCrossings: [
        'Исключительно Международный аэропорт Леон-Мба в Либревиле (LBV)',
      ],
      extensionAvailable: true,
      extensionRules:
        '1-месячную eVisa можно продлить до 2 месяцев; 2-месячную — до 1 месяца в центральном офисе DGDI.',
      description:
        'Заявка подаётся онлайн до вылета. После получения электронного разрешения (Entry Authorisation) физический визовый стикер вклеивается в паспорт на паспортном контроле в аэропорту Либревиля.',
    },
    {
      id: 'consular-tourist-visa-moscow',
      name: 'Консульская виза в Посольстве Габона в Москве',
      routeType: 'consular_visa',
      availableForRussianCitizens: true,
      purpose: 'Туризм, посещение страны',
      maxStay: 'до 90 дней (3 месяца)',
      validity: 'до 90 дней',
      entries: 'single',
      fee: {
        amount: 100,
        currency: 'EUR',
        paymentMethod: 'Оплата исключительно в евро наличными в консульском отделе',
        refundable: false,
        russianCardAccepted: false,
        note: 'Однократная виза — €100 EUR, двукратная или многократная — €150 EUR.',
      },
      processingTime: '4–14 рабочих дней',
      applyWhere: 'Посольство Габонской Республики в Москве',
      format: 'sticker',
      allowedBorderCrossings: [
        'Любые официальные международные пункты пропуска Габона (авиа, море, суша)',
      ],
      extensionAvailable: false,
      extensionRules:
        'Для пребывания свыше 90 дней МИД Габона предписывает оформление вида на жительство через DGDI.',
      description:
        'Подача документов осуществляется лично в консульский отдел в Москве по предварительной записи по электронной почте ambgab_ru@mail.ru.',
    },
  ],

  requirementsChecklist: [
    {
      id: 'passport',
      label: 'Загранпаспорт со сроком действия от 6 месяцев',
      state: 'required',
      details: 'Минимум 1 чистая страница для визового стикера.',
    },
    {
      id: 'yellow-fever',
      label: 'Международный сертификат о вакцинации от жёлтой лихорадки',
      state: 'required',
      details: 'Строго обязателен для всех путешественников независимо от маршрута.',
    },
    {
      id: 'hiv-certificate',
      label: 'Справка об отрицательном ВИЧ-статусе (HIV-negative)',
      state: 'required',
      details:
        'Оригинал и копия справки не старше 3 месяцев. Принимаются документы на русском, английском или французском языках.',
    },
    {
      id: 'hotel-booking',
      label: 'Подтверждённая бронь отеля',
      state: 'required',
      details:
        'Бронь должна быть подлинной: иммиграционные службы в аэропорту регулярно проверяют её звонком в отель.',
    },
    {
      id: 'return-ticket',
      label: 'Билеты туда и обратно или подтверждённая бронь',
      state: 'required',
      details: 'Официальный регламент принимает как выкупленный билет, так и подтверждённое бронирование.',
    },
    {
      id: 'employment-cert',
      label: 'Справка с места работы',
      state: 'required',
      details: 'Требуется при подаче заявления в Посольстве Габона в Москве.',
    },
    {
      id: 'proof-of-funds',
      label: 'Подтверждение достаточных финансовых средств',
      state: 'conditional',
      details: 'Средства для пребывания и обратного выезда могут быть запрошены офицером на границе.',
    },
  ],

  passport: {
    validityRequirement: 'Не менее 6 месяцев на момент подачи и въезда',
    validityFrom: 'entry_date',
    blankPagesRequired: 1,
    biometricOnly: false,
    retainedByEmbassy: true,
    note: 'При подаче в Москве паспорт сдаётся для вклейки визы на срок от 4 до 14 рабочих дней.',
  },

  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Выбор способа оформления',
      description:
        'Если вы прилетаете в аэропорт Либревиля — оформите онлайн eVisa на evisa.dgdi.ga. Если въезжаете по суше/морю — подайте документы в Посольство в Москве.',
    },
    {
      stepNumber: 2,
      title: 'Подготовка медицинских справок',
      description:
        'Сделайте прививку от жёлтой лихорадки (минимум за 10 дней до поездки) и получите справку об отсутствии ВИЧ (действует 3 месяца).',
    },
    {
      stepNumber: 3,
      title: 'Подача онлайн-заявки на eVisa',
      description:
        'Заполните анкету на evisa.dgdi.ga, прикрепите скан паспорта (6+ мес.) и цветное фото 35×45 мм.',
      subtext: 'Срок рассмотрения — 72 часа.',
    },
    {
      stepNumber: 4,
      title: 'Получение Entry Authorisation',
      description:
        'Распечатайте полученный по электронной почте документ с разрешением на въезд для посадки на рейс.',
    },
    {
      stepNumber: 5,
      title: 'Оплата и получение визы по прилёту',
      description:
        'В аэропорту Либревиля оплатите наличными €85 EUR (или 45 000 XAF) и получите визовый стикер в паспорт.',
    },
  ],

  documents: [
    {
      name: 'Скан страницы загранпаспорта с данными',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF / JPG',
      note: 'Срок действия паспорта более 6 месяцев.',
    },
    {
      name: 'Цветная фотография 35×45 мм',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'JPG',
      note: 'Светлый фон, сделана не более 6 месяцев назад.',
    },
    {
      name: 'Справка об отрицательном ВИЧ-статусе',
      state: 'required',
      originalOrCopy: 'either',
      language: 'Русский, английский или французский',
      note: 'Срок выдачи не более 3 месяцев на момент въезда.',
    },
    {
      name: 'Сертификат о вакцинации от жёлтой лихорадки',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Международная жёлтая книжка, прививка действует пожизненно.',
    },
    {
      name: 'Бронь отеля в Габоне',
      state: 'required',
      originalOrCopy: 'copy',
      note: 'Подлинное бронирование с контактами принимающей стороны.',
    },
    {
      name: 'Авиабилеты в обе стороны',
      state: 'required',
      originalOrCopy: 'copy',
      note: 'Билет туда и обратно либо подтверждённая бронь.',
    },
  ],

  travelAndStay: {
    returnTicketRequired: true,
    hotelBookingRequired: true,
    proofOfFundsRequired: true,
    fundsPerDayOrTotal: 'Достаточные финансовые средства для проживания и выезда.',
    invitationRequired: false,
    notes: 'Для туристической поездки с бронью отеля отдельное приглашение не требуется.',
  },

  health: {
    yellowFever: {
      requiredDirectFromRussia: true,
      requiredFromRiskCountries: true,
      note: 'Вакцинация от жёлтой лихорадки строго обязательна для всех путешественников.',
    },
    medicalInsuranceRequired: false,
    notes:
      'Обязательное страхование в регламентах не зафиксировано, однако настоятельно рекомендуется оформить международный полис с эвакуацией. Габон — зона риска по малярии, рекомендуется профилактический курс.',
  },

  departureChecklist: [
    'Загранпаспорт действителен более 6 месяцев',
    'Распечатанное подтверждение eVisa (Entry Authorisation) или консульская виза',
    'Оригинал международного сертификата от жёлтой лихорадки',
    'Справка об отрицательном ВИЧ-тесте (не старше 3 месяцев)',
    'Подтверждённая бронь отеля и авиабилеты',
    'Наличные евро для оплаты сбора в аэропорту (€85 на человека мелким номиналом)',
  ],

  border: {
    checkpointTypes: ['airport'],
    documentsRequestedOnArrival: [
      'Загранпаспорт',
      'Entry Authorisation (распечатка)',
      'Сертификат от жёлтой лихорадки',
      'Справка о ВИЧ-статусе',
      'Бронь отеля (служба аэропорта может позвонить в отель)',
      'Обратный билет',
    ],
    allowedEntryPoints: ['Международный аэропорт Леон-Мба в Либревиле (для eVisa)'],
    arrivalCardRequired: true,
    biometricsOnArrival: true,
    notes: 'В аэропорту снимаются биометрические данные при выдаче визового стикера.',
  },

  postEntry: {
    registrationRequired: false,
    extensionPossible: true,
    extensionMaxDuration: 'До 1–2 месяцев в зависимости от срока визы',
    notes: 'Продление осуществляется через Генеральный директорат документации и иммиграции (DGDI).',
  },

  transit: {
    visaRequired: true,
    airsideTransitAllowed: false,
    notes: 'Габонское законодательство признаёт транзитную визу. Прямой безвизовый транзит без визы официальными источниками не гарантируется.',
  },

  contacts: [
    {
      type: 'embassy',
      name: 'Посольство Габонской Республики в Российской Федерации',
      city: 'Москва',
      address: '115127, г. Москва, Денежный переулок, д. 16, стр. 1',
      phone: '+7 (499) 241-00-80 / +7 (499) 241-15-85',
      email: 'ambgab_ru@mail.ru',
    },
    {
      type: 'immigration',
      name: 'Генеральный директорат документации и иммиграции Габона (DGDI)',
      city: 'Либревиль',
      phone: '011 76 24 24 / 011 76 00 24',
      email: 'contact@dgdi.ga',
      website: 'https://edgdi.dgdi.ga/',
    },
    {
      type: 'visa_portal',
      name: 'Официальный портал электронных виз Габона (e-Visa DGDI)',
      website: 'https://evisa.dgdi.ga/',
    },
  ],

  sources: [
    {
      title: 'e-Visa Application Service',
      organization: 'Direction Générale de la Documentation et de l’Immigration (DGDI Gabon)',
      url: 'https://evisa.dgdi.ga/',
      dateChecked: '2026-10-16',
      reliability: 'primary_official',
      note: 'Официальный государственный портал оформления электронных виз Габона.',
    },
    {
      title: 'Consular Regulations & Tourist Visa Checklist',
      organization: 'Embassy of Gabon in Moscow',
      url: 'https://mail.google.com/',
      dateChecked: '2026-09-23',
      reliability: 'primary_official',
      note: 'Официальные регламенты и переписка консульского отдела Посольства Габона в Москве.',
    },
    {
      title: 'Conditions d’entrée au Gabon',
      organization: 'Ministère des Affaires Étrangères du Gabon',
      url: 'https://www.affaires-etrangeres.gouv.ga/4-services-aux-usagers/244-visa/',
      dateChecked: '2026-10-16',
      reliability: 'primary_official',
      note: 'Официальный портал МИД Габона.',
    },
  ],

  verification: {
    lastChecked: '16 октября 2026',
    status: 'confirmed',
    officialSourcesCount: 5,
  },
};
