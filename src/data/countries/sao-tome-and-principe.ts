import type { CountryPageData } from '../../types/country-page';

export const saoTomeData: CountryPageData = {
  slug: 'sao-tome-and-principe',
  nameRu: 'Сан-Томе и Принсипи',
  nameEn: 'São Tomé and Príncipe',
  iso2: 'ST',
  iso3: 'STP',
  flagCode: 'ST',
  region: 'Центральная Африка',
  capital: 'Сан-Томе',
  heroImage: '/images/countries/sao-tome-and-principe.webp',
  heroCaption: 'Вулканический обелиск Пику-Кан-Гранде в экваториальном тумане',
  criticalNotice: {
    title: 'Туристический сбор в аэропорту и финансовый норматив',
    description:
      'В аэропорту взимается отдельный туристический сбор (€25 на Сан-Томе, €10 на острове Принсипи) наличными для туристов от 12 лет. Официальный норматив обеспечения составляет €100 в сутки на человека. Для перемещения между островами Сан-Томе и Принсипи отдельное разрешение не требуется.',
    type: 'info',
  },
  currency: {

    code: 'STN',
    name: 'Добра Сан-Томе и Принсипи',
    symbol: 'Db',
  },
  coordinates: {
    countryLat: 0.1864,
    countryLon: 6.6131,
    capitalLat: 0.3365,
    capitalLon: 6.7273,
  },

  quickSummary: {
    visaStatusRu: 'Безвизовый въезд',
    shortDescriptionRu:
      'Граждане РФ имеют право на безвизовый въезд на срок до 15 дней. Для более длительного туристического визита Миграционная служба Сан-Томе (SMF) рекомендует оформление 30-дневной туристической визы по прибытии в аэропорту за €20 EUR.',
    availableRoutesList: ['Безвизовый въезд до 15 дней (0 €)', 'Виза по прибытии на 30 дней (€20)', 'Электронная виза online visa'],
    maxStay: '15 дней без визы / 30 дней по прибытии (до 90 дней с продлением)',
    feeFrom: '0 € (до 15 дней) / €20 EUR (30 дней)',
    passportValidity: 'не менее 3 месяцев на дату въезда',
    lastVerifiedDate: '16 октября 2026',
    confidence: 'confirmed',
  },

  routes: [
    {
      id: 'visa-free-15-days',
      name: 'Безвизовый въезд до 15 дней (Visa-Free Regime)',
      routeType: 'visa_free',
      priorityBadge: 'Безвизовый въезд (до 15 дней)',
      availableForRussianCitizens: true,
      purpose: 'Краткосрочный туризм, отдых, экскурсии',
      maxStay: 'до 15 дней на каждую поездку',
      validity: 'на время поездки',
      entries: 'single',
      fee: {
        amount: 0,
        currency: 'EUR',
        paymentMethod: 'Бесплатно (визовый сбор отсутствует)',
        note: 'Визовый сбор равен нулю. Отдельно при въезде взимается туристический налог (Tourism Tax): €25 в аэропорту Сан-Томе / €10 на острове Принсипи для туристов от 12 лет.',
      },
      processingTime: 'моментально на паспортном контроле',
      applyWhere: 'Паспортный контроль по прибытии',
      format: 'none',
      allowedBorderCrossings: [
        'Международный аэропорт Сан-Томе (TMS)',
        'Морской порт Сан-Томе',
      ],
      extensionAvailable: true,
      extensionRules:
        '15-дневное безвизовое пребывание может быть продлено в центральном офисе SMF до суммарных 90 дней.',
      description:
        'Граждане Российской Федерации официально включены миграционной службой SMF в список стран, освобождённых от виз на срок до 15 дней. Наличие шенгенских или американских виз не требуется.',
    },
    {
      id: 'tourist-visa-on-arrival-30-days',
      name: 'Туристическая виза по прибытии на 30 дней (Visa on Arrival)',
      routeType: 'visa_on_arrival',
      priorityBadge: 'Виза по прибытии (€20 на 30 дней)',
      availableForRussianCitizens: true,
      purpose: 'Туризм на срок от 15 до 30 дней',
      maxStay: '30 дней',
      validity: '30 дней',
      entries: 'single',
      fee: {
        amount: 20,
        currency: 'EUR',
        paymentMethod: 'Оплата наличными €20 EUR на пограничном контроле',
        refundable: false,
        russianCardAccepted: false,
        note: 'Рекомендованный официальный способ для туристов, планирующих находиться в стране более 15 дней.',
      },
      processingTime: 'по прибытии в аэропорту Сан-Томе',
      applyWhere: 'Служба миграции и границ (SMF) в Международном аэропорту Сан-Томе',
      format: 'stamp',
      allowedBorderCrossings: ['Международный аэропорт Сан-Томе (TMS)'],
      extensionAvailable: true,
      extensionRules: 'Может быть продлена в офисе SMF до общего срока в 90 дней.',
      description:
        'Оформляется непосредственно офицером SMF на стойке паспортного контроля по прилёту в Сан-Томе.',
    },
    {
      id: 'online-visa',
      name: 'Электронная виза / предварительное разрешение (e-Visa SMF)',
      routeType: 'evisa',
      priorityBadge: 'Предварительное онлайн-согласование',
      availableForRussianCitizens: true,

      purpose: 'Предварительное согласование въезда',
      maxStay: 'до 3 месяцев (устанавливается в решении)',
      validity: 'до 180 дней (коридор въезда 90 дней)',
      entries: 'single',
      fee: {
        amount: 20,
        currency: 'EUR',
        paymentMethod: 'Оплата на границе по прилёту',
      },
      processingTime: '7 рабочих дней',
      applyWhere: 'Официальный портал SMF virtualvisa',
      officialUrl: 'http://www.smf.st/virtualvisa/',
      format: 'electronic',
      description:
        'Позволяет заранее подать заявку и получить электронное одобрение от миграционной службы.',
    },
  ],

  requirementsChecklist: [
    {
      id: 'passport',
      label: 'Загранпаспорт со сроком действия от 3 месяцев',
      state: 'required',
      details: 'Для 15-дневного безвиза — 3 месяца на дату въезда; для виз — 3 месяца после окончания поездки.',
    },
    {
      id: 'return-ticket',
      label: 'Билет обратно или в третью страну',
      state: 'required',
      details: 'Строго обязателен для посадки на рейс и предъявления на границе.',
    },
    {
      id: 'proof-of-funds',
      label: 'Финансовые средства (€100 в сутки)',
      state: 'required',
      details: 'Официальный норматив прожиточного минимума туриста по закону Сан-Томе составляет €100 в день.',
    },
    {
      id: 'yellow-fever',
      label: 'Сертификат от жёлтой лихорадки',
      state: 'conditional',
      details:
        'НЕ ТРЕБУЕТСЯ при прямом вылете из РФ. Обязателен при прибытии из эндемичных стран или если в течение последних 3 месяцев вы посещали другие страны Африки.',
    },
    {
      id: 'tourism-tax',
      label: 'Туристический налог (Tourism Tax)',
      state: 'required',
      details: '€25 на Сан-Томе и €10 на Принсипи, оплачивается в аэропорту туристами старше 12 лет.',
    },
    {
      id: 'hotel-reservation',
      label: 'Бронь отеля или адрес проживания',
      state: 'recommended',
      details: 'Обязательно для eVisa; при 15-дневном безвизе достаточно знать название отеля или адрес.',
    },
  ],

  passport: {
    validityRequirement: 'Не менее 3 месяцев на дату въезда (безвиз) / после окончания срока (виза)',
    validityFrom: 'entry_date',
    blankPagesRequired: 1,
    biometricOnly: false,
    retainedByEmbassy: false,
    note: 'Подходят обычные заграничные паспорта граждан РФ.',
  },

  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Определение длительности поездки',
      description:
        'Если поездка до 15 дней — виза не требуется вообще. Если от 15 до 30 дней — оформите визу по прибытии в аэропорту за €20 EUR.',
    },
    {
      stepNumber: 2,
      title: 'Подготовка билетов и наличных',
      description:
        'Купите обратный билет и подготовьте наличные евро для оплаты туристического налога (€25) и суточных расходов (€100/день).',
    },
    {
      stepNumber: 3,
      title: 'Проверка санитарных требований',
      description:
        'Если перед Сан-Томе вы посещали другие африканские страны в течение последних 3 месяцев — обязательно возьмите сертификат о прививке от жёлтой лихорадки.',
    },
    {
      stepNumber: 4,
      title: 'Прохождение границы в Сан-Томе',
      description:
        'В аэропорту предъявите паспорт и обратный билет, оплатите туристический налог и получите въездной штамп.',
    },
  ],

  documents: [
    {
      name: 'Заграничный паспорт',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Срок действия минимум 3 месяца на момент въезда, минимум 1 чистая страница.',
    },
    {
      name: 'Подтверждённый обратный авиабилет',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Билет обратно или в следующую страну маршрута.',
    },
    {
      name: 'Финансовое обеспечение (€100 в день)',
      state: 'required',
      originalOrCopy: 'either',
      note: 'Наличные евро или международные банковские карты.',
    },
    {
      name: 'Сертификат от жёлтой лихорадки',
      state: 'conditional',
      originalOrCopy: 'original',
      note: 'Обязателен при посещении других стран Африки за последние 3 месяца или транзите через зону риска.',
    },
    {
      name: 'Бронь гостиницы или апартаментов',
      state: 'recommended',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Подтверждение размещения на острове.',
    },
  ],

  consularDocuments: [
    {
      id: 'sao-tome-decree',
      title: 'Указ об освобождении от виз (Diário da República)',
      filename: 'sao-tome-visa-waiver-decree.pdf',
      url: '/documents/sao-tome-and-principe/sao-tome-visa-waiver-decree.pdf',
      fileType: 'pdf',
      fileSize: '969 КБ',
      description: 'Официальный текст правительственного декрета Сан-Томе и Принсипи о безвизовом режиме до 15 дней для граждан РФ.',
    },
  ],

  travelAndStay: {

    returnTicketRequired: true,
    hotelBookingRequired: false,
    proofOfFundsRequired: true,
    fundsPerDayOrTotal: 'Официальный норматив — не менее €100 EUR в день на человека.',
    invitationRequired: false,
    notes:
      'Для поездки между островами Сан-Томе и Принсипи никакого отдельного разрешения не требуется: въездной статус действует на всей территории страны.',
  },

  health: {
    yellowFever: {
      requiredDirectFromRussia: false,
      requiredFromRiskCountries: true,
      note:
        'При прямом следовании из России вакцинация от жёлтой лихорадки не требуется. Она обязательна, если вы прибываете из эндемичной страны либо находились в любой другой стране Африки в течение предшествующих 3 месяцев.',
    },
    medicalInsuranceRequired: false,
    notes:
      'Медицинская страховка рекомендуется МИД РФ. В стране присутствует риск малярии, рекомендуется стандартная тропическая профилактика.',
  },

  departureChecklist: [
    'Загранпаспорт действителен ещё минимум 3 месяца',
    'Обратный авиабилет распечатан или сохранён в телефоне',
    'Наличные евро (€25 на туристический сбор + деньги на проживание из расчёта €100/день)',
    'Сертификат от жёлтой лихорадки (если посещали Африку за последние 3 месяца)',
    'Бронь отеля или контакты принимающей стороны',
  ],

  border: {
    checkpointTypes: ['airport', 'seaport'],
    documentsRequestedOnArrival: [
      'Оригинал загранпаспорта',
      'Обратный авиабилет',
      'Подтверждение средств (€100 в день)',
      'Оплата туристического сбора (€25 Сан-Томе, €10 Принсипи)',
      'Сертификат от жёлтой лихорадки (при наличии факторов риска)',
    ],
    allowedEntryPoints: [
      'Международный аэропорт Сан-Томе (TMS)',
      'Морской порт Сан-Томе',
    ],
    arrivalCardRequired: true,
    biometricsOnArrival: false,
    notes: 'На паспортном контроле заполняется миграционная въездная карточка.',
  },

  postEntry: {
    registrationRequired: false,
    extensionPossible: true,
    extensionMaxDuration: 'До 90 дней',
    notes:
      'И 15-дневный безвиз, и 30-дневная виза по прибытии могут быть продлены в центральном отделении Миграционной службы (SMF) в городе Сан-Томе.',
  },

  transit: {
    visaRequired: false,
    airsideTransitAllowed: true,
    maxAirsideTransitHours: 96,
    notes:
      'Транзитная виза не требуется при непрерывном перелёте через аэропорт Сан-Томе без выхода из транзитной зоны. При необходимости выхода транзитная виза выдаётся на срок до 4 дней.',
  },

  contacts: [
    {
      type: 'immigration',
      name: 'Служба миграции и границ Сан-Томе и Принсипи (SMF)',
      city: 'Сан-Томе',
      address: 'Av. Marginal 12 de Julho, C.P. 513, São Tomé',
      phone: '+239 2 222 098 / +239 2 221 695',
      email: 'secretaria.geral@smf.gov.st',
      website: 'http://www.smf.st/',
    },
    {
      type: 'visa_portal',
      name: 'Официальный туристический портал Сан-Томе и Принсипи',
      website: 'https://turismo.gov.st/',
    },
  ],

  sources: [
    {
      title: 'Isenção de Vistos / 15-Day Visa Exemption Regulations',
      organization: 'Serviço de Migração e Fronteiras (SMF)',
      url: 'https://www.smf.st/',
      dateChecked: '2026-10-16',
      reliability: 'primary_official',
      note: 'Официальный перечень стран с 15-дневным безвизовым въездом (РФ включена).',
    },
    {
      title: 'Direct Consular Clarifications on 30-Day VoA and Fees',
      organization: 'Serviço de Migração e Fronteiras (SMF)',
      url: 'https://mail.google.com/',
      dateChecked: '2026-09-29',
      reliability: 'primary_official',
      note: 'Прямая официальная переписка с руководством SMF по визам на 30 дней (€20).',
    },
    {
      title: 'Practical Information & Tourism Tax',
      organization: 'São Tomé and Príncipe Tourism Authority',
      url: 'https://turismo.gov.st/en/guide-pratique/tourism-tax',
      dateChecked: '2026-10-16',
      reliability: 'primary_official',
      note: 'Официальные ставки туристического сбора и санитарные правила.',
    },
  ],

  verification: {
    lastChecked: '16 октября 2026',
    status: 'confirmed',
    officialSourcesCount: 4,
  },
};
