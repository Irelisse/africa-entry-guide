import type { CountryPageData } from '../../types/country-page';

export const kenyaData: CountryPageData = {
  slug: 'kenya',
  nameRu: 'Кения',
  nameEn: 'Kenya',
  iso2: 'KE',
  iso3: 'KEN',
  flagCode: 'KE',
  region: 'Восточная Африка',
  capital: 'Найроби',
  heroImage: '/images/countries/kenya.webp',
  currency: {
    code: 'KES',
    name: 'Кенийский шиллинг',
    symbol: 'KSh',
  },
  coordinates: {
    countryLat: -0.0236,
    countryLon: 37.9062,
    capitalLat: -1.2921,
    capitalLon: 36.8219,
  },

  quickSummary: {
    visaStatusRu: 'Электронное разрешение (eVisa / eTA)',
    shortDescriptionRu:
      'Традиционные бумажные визы отменены: для всех туристов действует обязательное электронное разрешение на въезд (Kenya eTA), оформляемое до вылета на государственном портале. Также введено обязательное государственное медицинское страхование въезжающих.',
    availableRoutesList: ['Стандартный eTA ($30 USD)', 'Мультивиза eTA на 1 год ($300 USD)', 'Транзитный eTA ($20 USD)'],
    maxStay: 'до 90 дней (продлевается до 6 месяцев)',
    feeFrom: '$30 USD',
    passportValidity: 'не менее 6 месяцев после даты прибытия',
    lastVerifiedDate: '16 октября 2026',
    confidence: 'confirmed',
  },

  routes: [
    {
      id: 'standard-eta',
      name: 'Стандартное электронное разрешение (Standard eTA)',
      routeType: 'eta',
      availableForRussianCitizens: true,
      purpose: 'Туризм, отдых, посещение друзей и родственников',
      maxStay: 'до 90 дней (проставляется иммиграцией при въезде, продлевается)',
      validity: 'въезд в течение 90 дней с даты выдачи',
      entries: 'single',
      fee: {
        amount: 30,
        currency: 'USD',
        paymentMethod: 'Онлайн на портале банковской картой',
        refundable: false,
        russianCardAccepted: false,
        note: 'Сбор составляет $30 USD (ускоренное рассмотрение +$100). Требуется зарубежная карта. Рекомендуется подавать заявку минимум за 2 недели до поездки.',
      },
      processingTime: 'обычно 3 рабочих дня (72 часа); экспресс — сразу',
      applyWhere: 'Официальный портал etakenya.go.ke или мобильное приложение',
      officialUrl: 'https://etakenya.go.ke/',
      format: 'electronic',
      allowedBorderCrossings: [
        'Все официальные международные пункты пропуска (аэропорты Найроби NBO, Момбаса MBA, морские порты и наземные границы)',
      ],
      extensionAvailable: true,
      extensionRules:
        'Продление Visitor Pass оформляется онлайн через eFNS. Сбор за продление составляет $50 USD (согласно Gazette Notice 15494), максимальный общий срок до 6 месяцев.',
      description:
        'Основной способ въезда для подавляющего большинства туристов. Полученное подтверждение необходимо распечатать или сохранить на смартфон.',
    },
    {
      id: 'one-year-multi-entry-eta',
      name: 'Многократное разрешение eTA на 1 год (Multiple Entry eTA)',
      routeType: 'eta',
      availableForRussianCitizens: true,
      purpose: 'Частые туристические и деловые визиты',
      maxStay: 'срок каждого въезда определяется офицером при пересечении границы',
      validity: '1 год с даты одобрения',
      entries: 'multiple',
      fee: {
        amount: 300,
        currency: 'USD',
        paymentMethod: 'Онлайн на официальном портале etakenya.go.ke',
        refundable: false,
        russianCardAccepted: false,
        note: 'Официальный утверждённый тариф для иностранных граждан, въезжающих по eTA.',
      },
      processingTime: '3 рабочих дня',
      applyWhere: 'Портал etakenya.go.ke',
      officialUrl: 'https://etakenya.go.ke/',
      format: 'electronic',
      description: 'Удобно для тех, кто планирует несколько поездок в Кению в течение одного года.',
    },
    {
      id: 'transit-eta',
      name: 'Транзитный eTA (Kenya Transit eTA)',
      routeType: 'transit_visa',
      availableForRussianCitizens: true,
      purpose: 'Транзит с выходом из аэропорта',
      maxStay: 'на время транзитной пересадки',
      validity: 'до даты транзитного рейса',
      entries: 'single',
      fee: {
        amount: 20,
        currency: 'USD',
        paymentMethod: 'Онлайн на портале etakenya.go.ke',
        note: 'Внимание: прямой воздушный транзит без выхода из транзитной зоны аэропорта — ПОЛНОСТЬЮ БЕЗВИЗОВЫЙ и не требует оформления eTA.',
      },
      processingTime: '3 рабочих дня',
      applyWhere: 'Портал etakenya.go.ke',
      officialUrl: 'https://etakenya.go.ke/',
      format: 'electronic',
    },
  ],

  requirementsChecklist: [
    {
      id: 'passport',
      label: 'Загранпаспорт со сроком действия от 6 месяцев после прибытия',
      state: 'required',
      details: 'Минимум 1 чистая страница для въездного штампа.',
    },
    {
      id: 'eta-approved',
      label: 'Одобренное электронное разрешение (Kenya eTA)',
      state: 'required',
      details: 'Оформляется строго до вылета. Без eTA авиакомпания не посадит на рейс.',
    },
    {
      id: 'kenya-insurance',
      label: 'Обязательная государственная медицинская страховка въезжающего',
      state: 'required',
      details:
        'Программа Mandatory Inbound Travel Health Insurance оформляется через портал eCitizen / kenyacares.go.ke.',
    },
    {
      id: 'hotel-confirmation',
      label: 'Подтверждение бронирования жилья (отель / лодж)',
      state: 'required',
      details: 'Загружается при заполнении анкеты eTA.',
    },
    {
      id: 'return-ticket',
      label: 'Билеты туда и обратно или бронь маршрута',
      state: 'required',
      details: 'Даты въезда и выезда должны совпадать с анкетой eTA.',
    },
    {
      id: 'photo',
      label: 'Селфи или фотография паспортного образца',
      state: 'required',
      details: 'Загружается прямо с телефона или компьютера в систему eTA.',
    },
    {
      id: 'yellow-fever',
      label: 'Сертификат от жёлтой лихорадки',
      state: 'conditional',
      details:
        'НЕ ТРЕБУЕТСЯ при прямом вылете из России. Обязателен только при прибытии из эндемичных зон или при транзите через них свыше 12 часов.',
    },
  ],

  passport: {
    validityRequirement: 'Не менее 6 месяцев с предполагаемой даты прибытия в Кению',
    validityFrom: 'entry_date',
    blankPagesRequired: 1,
    biometricOnly: false,
    retainedByEmbassy: false,
    note: 'Паспорт предъявляется офицеру на границе в оригинале, при подаче на eTA сдавать паспорт не нужно.',
  },

  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Вход на официальный портал etakenya.go.ke',
      description:
        'Откройте сайт etakenya.go.ke (или официальное приложение Kenya eTA). Остерегайтесь неофициальных сайтов с комиссиями посредников.',
    },
    {
      stepNumber: 2,
      title: 'Заполнение данных и загрузка фото',
      description:
        'Заполните анкету, загрузите скан первой страницы паспорта, селфи-снимок лица, бронь отеля и билеты прилёта/вылета.',
    },
    {
      stepNumber: 3,
      title: 'Оплата сбора eTA',
      description:
        'Оплатите сбор $30 USD зарубежной банковской картой. Рекомендуется подавать заявку минимум за 2 недели до даты рейса.',
    },
    {
      stepNumber: 4,
      title: 'Оформление государственной страховки',
      description:
        'Перейдите на портал kenyacares.go.ke / eCitizen и оформите обязательную медицинскую страховку въезжающего.',
    },
    {
      stepNumber: 5,
      title: 'Получение PDF и вылет',
      description:
        'В течение 3 дней на почту придёт файл eTA. Сохраните его в смартфон и распечатайте бумажную копию для пограничного контроля в Найроби/Момбасе.',
    },
  ],

  documents: [
    {
      name: 'Скан разворота загранпаспорта',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'JPG / PDF',
      note: 'Срок действия минимум 6 месяцев с момента планируемого въезда, минимум 1 чистая страница.',
    },
    {
      name: 'Селфи-фотография лица паспортного типа',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'JPG',
      note: 'Чёткое фото анфас на светлом фоне, без головных уборов и очков.',
    },
    {
      name: 'Бронь отеля или подтверждение проживания',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Подтверждение бронирования гостиницы, лоджа или кемпа.',
    },
    {
      name: 'Маршрутная квитанция авиабилетов',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Билет на прилёт и подтверждённый вылет из Кении.',
    },
    {
      name: 'Полис обязательного въездного страхования',
      state: 'required',
      originalOrCopy: 'either',
      digitalFormat: 'PDF',
      note: 'Оформляется через государственный сервис kenyacares.go.ke.',
    },
    {
      name: 'Сертификат от жёлтой лихорадки',
      state: 'conditional',
      originalOrCopy: 'original',
      note: 'Требуется только при въезде из эндемичных стран Африки/Америки или длительном транзите (>12 ч).',
    },
  ],

  travelAndStay: {
    returnTicketRequired: true,
    hotelBookingRequired: true,
    proofOfFundsRequired: false,
    invitationRequired: false,
    notes:
      'Иммиграционный контроль на границе может выборочно попросить подтвердить обратный билет и бронь отеля.',
  },

  health: {
    yellowFever: {
      requiredDirectFromRussia: false,
      requiredFromRiskCountries: true,
      transitThresholdHours: 12,
      note:
        'При прямом перелёте из РФ (или с короткой пересадкой в неэндемичной стране, например ОАЭ/Катар/Турция) прививка от жёлтой лихорадки НЕ ТРЕБУЕТСЯ. Обязательна только при транзите свыше 12 часов через аэропорты эндемичных зон.',
    },
    medicalInsuranceRequired: true,
    insuranceMinCoverage:
      'Обязательное государственное страхование Mandatory Inbound Health Insurance покрывает экстренную помощь и эвакуацию.',
    otherVaccinesRecommended: ['Профилактика малярии', 'Гепатит А', 'Брюшной тиф'],
    notes:
      'Большая часть территории Кении (саванны, побережье) является зоной риска малярии. Рекомендуется приём профилактических препаратов (коартем/маларон) и применение средств от укусов комаров.',
  },

  departureChecklist: [
    'Одобренный Kenya eTA (распечатан + сохранён на телефоне)',
    'Загранпаспорт действителен ещё минимум 6 месяцев после даты прибытия',
    'Полис медицинского страхования въезжающего с портала kenyacares.go.ke',
    'Распечатанные брони отелей и авиабилеты',
    'Сертификат от жёлтой лихорадки (только если летите через эндемичные страны >12 часов)',
    'Профилактика малярии начата по схеме врача',
  ],

  border: {
    checkpointTypes: ['airport', 'land_border', 'seaport'],
    documentsRequestedOnArrival: [
      'Оригинал загранпаспорта',
      'Распечатанный или цифровой Kenya eTA',
      'Обратный билет',
      'Подтверждение бронирования отеля',
      'Полис обязательного страхования',
    ],
    allowedEntryPoints: [
      'Международный аэропорт Джомо Кениата в Найроби (NBO)',
      'Международный аэропорт Мои в Момбасе (MBA)',
      'Все официальные пункты пропуска',
    ],
    arrivalCardRequired: false,
    biometricsOnArrival: true,
    notes: 'На паспортном контроле снимаются отпечатки пальцев и делается цифровое фото лица. Офицер проставляет штамп Visitor Pass.',
  },

  postEntry: {
    registrationRequired: false,
    extensionPossible: true,
    extensionMaxDuration: 'До суммарных 6 месяцев',
    extensionCost: '$50 USD',
    notes:
      'Продление Visitor Pass оформляется через электронную систему eFNS на сайте иммиграции. Просрочка (overstay) влечёт за собой крупные штрафы и депортацию.',
  },

  transit: {
    visaRequired: false,
    airsideTransitAllowed: true,
    maxAirsideTransitHours: 24,
    notes:
      'Прямой транзит в транзитной зоне аэропорта Джомо Кениата в Найроби без выхода в город — ПОЛНОСТЬЮ БЕЗВИЗОВЫЙ и не требует eTA. Если вы планируете выйти в город — оформите транзитный eTA за $20 USD.',
  },

  contacts: [
    {
      type: 'visa_portal',
      name: 'Официальная служба Kenya eTA',
      phone: '+254 110 922062 / +254 717 436070',
      email: 'etakenya@immigration.go.ke',
      website: 'https://etakenya.go.ke/',
    },
    {
      type: 'immigration',
      name: 'Управление иммиграционной службы Кении (DIS)',
      city: 'Найроби',
      phone: '+254 20 2222022',
      email: 'info@immigration.go.ke',
      website: 'https://immigration.go.ke/',
    },
    {
      type: 'embassy',
      name: 'Посольство Республики Кения в Российской Федерации',
      city: 'Москва',
      address: '119034, г. Москва, Лопухинский пер., д. 5, стр. 1',
      phone: '+7 (495) 637-21-86 / +7 (495) 637-42-57',
      email: 'moscow@mfa.go.ke',
    },
  ],

  sources: [
    {
      title: 'Kenya Electronic Travel Authorisation (eTA) Portal',
      organization: 'Directorate of Immigration Services, Republic of Kenya',
      url: 'https://etakenya.go.ke/',
      dateChecked: '2026-10-16',
      reliability: 'primary_official',
      note: 'Единственный официальный государственный портал выдачи eTA.',
    },
    {
      title: 'Mandatory Inbound Travel Health Insurance Framework',
      organization: 'Ministry of Health, Republic of Kenya',
      url: 'https://health.go.ke/',
      dateChecked: '2026-10-16',
      reliability: 'primary_official',
      note: 'Официальный регламент обязательного въездного медицинского страхования.',
    },
    {
      title: 'Kenya Gazette Notice No. 15494: Immigration Fees Schedule',
      organization: 'Kenya Law / Government of Kenya',
      url: 'https://new.kenyalaw.org/',
      dateChecked: '2026-10-16',
      reliability: 'primary_official',
      note: 'Официальный тариф продления Visitor Pass ($50 USD).',
    },
  ],

  verification: {
    lastChecked: '16 октября 2026',
    status: 'confirmed',
    officialSourcesCount: 5,
  },
};
