import type { CountryPageData } from '../../types/country-page';

export const guineaBissauData: CountryPageData = {
  slug: 'guinea-bissau',
  nameRu: 'Гвинея-Бисау',
  nameEn: 'Guinea-Bissau',
  iso2: 'GW',
  iso3: 'GNB',
  flagCode: 'GW',
  region: 'Западная Африка',
  capital: 'Бисау',
  heroImage: '/images/countries/guinea-bissau.webp',
  heroCaption: 'Пляжи атлантического острова Болама в биосферном архипелаге Бижагош',
  criticalNotice: {
    title: 'Требование к паспорту от 1 года и безналичная оплата сбора',
    description:
      'По официальному регламенту Посольства Гвинеи-Бисау в Москве загранпаспорт должен действовать более одного года на момент подачи. Оплата консульского сбора осуществляется строго безналичным банковским переводом по официальным реквизитам посольства.',
    type: 'warning',
  },
  currency: {
    code: 'XOF',
    name: 'Западноафриканский франк КФА',
    symbol: 'CFA',
  },
  coordinates: {
    countryLat: 11.8037,
    countryLon: -15.1804,
    capitalLat: 11.8632,
    capitalLon: -15.5977,
  },

  quickSummary: {
    visaStatusRu: 'Виза требуется',
    shortDescriptionRu:
      'Гражданам РФ для туристической поездки в Гвинею-Бисау требуется виза. Оформление осуществляется через Посольство Республики Гвинея-Бисау в Москве. Срок рассмотрения составляет 4 рабочих дня, сбор оплачивается по официальным банковским реквизитам.',
    availableRoutesList: ['Консульская виза в Москве (10 000 – 15 000 ₽)'],
    maxStay: 'от 30 до 90 дней',
    feeFrom: '10 000 ₽ (30 дней) / 15 000 ₽ (90 дней)',
    passportValidity: 'более 1 года',
    lastVerifiedDate: '21 октября 2026',
    confidence: 'confirmed',
  },

  routes: [
    {
      id: 'consular-tourist-visa-moscow',
      name: 'Туристическая виза в Посольстве Гвинеи-Бисау в Москве',
      routeType: 'consular_visa',
      priorityBadge: 'Подача через Посольство в Москве',
      availableForRussianCitizens: true,
      purpose: 'Туризм, отдых, деловые и частные визиты',
      maxStay: '30 или 90 дней',
      validity: '30–90 дней с момента выдачи',
      entries: 'single',
      fee: {
        amount: '10 000 – 15 000',
        currency: 'RUB',
        paymentMethod: 'Безналичный перевод на расчётный счёт Посольства в банке ВТБ',
        refundable: false,
        russianCardAccepted: true,
        note: 'Тарифы: 30-дневная виза — 10 000 ₽, 90-дневная виза — 15 000 ₽. После оплаты квитанцию необходимо отправить на электронную почту посольства.',
      },
      processingTime: '4 рабочих дня',
      applyWhere: 'Посольство Республики Гвинея-Бисау в Москве',
      format: 'sticker',
      allowedBorderCrossings: [
        'Международный аэропорт Освальдо Виейра в Бисау (OXB)',
        'Морской порт Бисау и пограничные пункты пропуска',
      ],
      extensionAvailable: true,
      extensionRules: 'Продление оформляется через иммиграционную службу в Бисау.',
      description:
        'Приём документов осуществляется по будням с 10:00 до 16:00. После подачи и подтверждения оплаты в паспорт вклеивается визовый стикер.',
    },
  ],

  requirementsChecklist: [
    {
      id: 'passport',
      label: 'Загранпаспорт со сроком действия более 1 года',
      state: 'required',
      details: 'Посольство официально требует остаточный срок действия паспорта более 12 месяцев.',
    },
    {
      id: 'yellow-fever',
      label: 'Международный сертификат о вакцинации от жёлтой лихорадки',
      state: 'required',
      details: 'Строго обязателен для въезда в страну в соответствии с санитарными нормами ВОЗ.',
    },
    {
      id: 'application-form',
      label: 'Визовая анкета в 2 экземплярах с фотографиями 3×4 см',
      state: 'required',
      details: 'Официальный бланк посольства, заполняется на русском или португальском языке.',
    },
    {
      id: 'hotel-reservation',
      label: 'Бронь отеля или подтверждение проживания',
      state: 'required',
      details: 'Подтверждённое размещение на весь период планируемой поездки.',
    },
    {
      id: 'return-ticket',
      label: 'Копия авиабилетов в обе стороны или маршрут',
      state: 'required',
      details: 'Билеты на прилёт и обратный вылет из страны.',
    },
    {
      id: 'bank-statement',
      label: 'Банковская справка о наличии средств',
      state: 'required',
      details: 'Справка из банка с печатью, подтверждающая платёжеспособность туриста.',
    },
  ],

  passport: {
    validityRequirement: 'Более 1 года (12+ месяцев) на дату подачи заявления',
    validityFrom: 'entry_date',
    blankPagesRequired: 2,
    biometricOnly: false,
    retainedByEmbassy: true,
    note: 'Оригинал паспорта сдаётся в консульский отдел на время оформления (4 рабочих дня).',
  },

  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Скачивание и заполнение официальной анкеты',
      description:
        'Скачайте официальный бланк анкеты Посольства Гвинеи-Бисау (доступен ниже в разделе документов), распечатайте и заполните в 2 экземплярах.',
    },
    {
      stepNumber: 2,
      title: 'Сбор пакета документов',
      description:
        'Подготовьте загранпаспорт (1+ год), 2 фото 3×4 см, копию первой страницы паспорта, бронь отеля, авиабилеты и банковскую выписку.',
    },
    {
      stepNumber: 3,
      title: 'Оплата консульского сбора по реквизитам',
      description:
        'Оплатите сбор (10 000 ₽ или 15 000 ₽) безналичным переводом на счёт Посольства в банке ВТБ по официальным реквизитам и сохраните квитанцию.',
    },
    {
      stepNumber: 4,
      title: 'Подача документов в Посольство в Москве',
      description:
        'Подайте документы в консульский отдел по адресу: Москва, ул. Коровий Вал, д. 7, стр. 1 (Пн–Пт 10:00–16:00). Отправьте квитанцию на email посольства.',
    },
    {
      stepNumber: 5,
      title: 'Получение визы и вылет',
      description:
        'Через 4 рабочих дня заберите паспорт с вклеенной визой. Перед вылетом обязательно проверьте наличие сертификата от жёлтой лихорадки.',
    },
  ],

  documents: [
    {
      name: 'Оригинал загранпаспорта и копия первой страницы',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Срок действия более одного года, минимум 2 чистые страницы.',
    },
    {
      name: 'Две фотографии 3×4 см',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Цветные матовые фотографии паспортного формата.',
    },
    {
      name: 'Визовая анкета в 2 экземплярах',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Официальный бланк посольства, заполненный и подписанный заявителем.',
    },
    {
      name: 'Бронирование гостиницы или сведения о размещении',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Подтверждение отеля, лоджа или гостевого дома в Гвинее-Бисау.',
    },
    {
      name: 'Копия авиабилетов или маршрут поездки',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Билет на въезд и выезд из страны.',
    },
    {
      name: 'Банковская справка о наличии средств',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Справка об остатке на счёте с печатью отделения банка.',
    },
  ],

  consularDocuments: [
    {
      id: 'gw-visa-app',
      title: 'Официальная визовая анкета Посольства Гвинеи-Бисау',
      filename: 'guinea-bissau-visa-application-form.pdf',
      url: '/documents/guinea-bissau/guinea-bissau-visa-application-form.pdf',
      fileType: 'pdf',
      fileSize: '319 КБ',
      description: 'Официальный бланк визового заявления в 2 экземплярах для подачи в Москве.',
    },
    {
      id: 'gw-checklist',
      title: 'Официальный консульский перечень документов',
      filename: 'guinea-bissau-visa-checklist.pdf',
      url: '/documents/guinea-bissau/guinea-bissau-visa-checklist.pdf',
      fileType: 'pdf',
      fileSize: '310 КБ',
      description: 'Список обязательных документов и условий приёма от консульского отдела Посольства.',
    },
    {
      id: 'gw-bank-details',
      title: 'Банковские реквизиты Посольства для оплаты сбора',
      filename: 'guinea-bissau-embassy-bank-details.pdf',
      url: '/documents/guinea-bissau/guinea-bissau-embassy-bank-details.pdf',
      fileType: 'pdf',
      fileSize: '195 КБ',
      description: 'Официальные платёжные реквизиты счёта Посольства в банке ВТБ для безналичной оплаты сбора в рублях.',
    },
  ],

  travelAndStay: {
    returnTicketRequired: true,
    hotelBookingRequired: true,
    proofOfFundsRequired: true,
    fundsPerDayOrTotal: 'Подтверждается официальной справкой из банка.',
    invitationRequired: false,
    notes: 'Для туристической поездки с бронью отеля отдельное частное приглашение не требуется.',
  },

  health: {
    yellowFever: {
      requiredDirectFromRussia: true,
      requiredFromRiskCountries: true,
      note: 'Вакцинация от жёлтой лихорадки строго обязательна для всех въезжающих туристов.',
    },
    medicalInsuranceRequired: false,
    notes:
      'Гвинея-Бисау — тропическая страна с высоким риском малярии. Настоятельно рекомендуется оформить международный полис страхования и пройти курс антималярийной профилактики.',
  },

  departureChecklist: [
    'Загранпаспорт с вклеенной визой Гвинеи-Бисау (срок действия >1 года)',
    'Оригинал международного сертификата о вакцинации от жёлтой лихорадки',
    'Распечатанные авиабилеты туда и обратно',
    'Подтверждённая бронь отеля в Бисау или на островах Бижагош',
    'Квитанция об оплате консульского сбора',
  ],

  border: {
    checkpointTypes: ['airport', 'seaport', 'land_border'],
    documentsRequestedOnArrival: [
      'Загранпаспорт с действующей визой',
      'Сертификат о прививке от жёлтой лихорадки',
      'Обратные авиабилеты',
      'Бронь отеля',
    ],
    allowedEntryPoints: ['Международный аэропорт Освальдо Виейра (OXB), морской порт Бисау'],
    arrivalCardRequired: true,
    biometricsOnArrival: false,
    notes: 'По прибытии заполняется миграционная карта въезда.',
  },

  postEntry: {
    registrationRequired: false,
    extensionPossible: true,
    extensionMaxDuration: 'До 90 дней',
    notes: 'Продление осуществляется через иммиграционные службы в Бисау.',
  },

  transit: {
    visaRequired: true,
    airsideTransitAllowed: false,
    notes: 'Прямой безвизовый транзит официальными регламентами не гарантирован, требуется оформление транзитной или туристической визы.',
  },

  contacts: [
    {
      type: 'embassy',
      name: 'Посольство Республики Гвинея-Бисау в Российской Федерации',
      city: 'Москва',
      address: '119049, г. Москва, ул. Коровий Вал, д. 7, стр. 1',
      phone: '+7 (499) 230-01-01',
      email: 'embaixadagb.moscovo@gmail.com',
      workingHours: 'Пн–Пт 10:00–16:00',
    },
  ],

  sources: [
    {
      title: 'Consular Visa Regulations & Attachments',
      organization: 'Embassy of Guinea-Bissau in Moscow',
      url: 'https://mail.google.com/',
      dateChecked: '2026-10-21',
      reliability: 'primary_official',
      note: 'Официальные визовые материалы, анкеты и платёжные реквизиты Посольства Гвинеи-Бисау.',
    },
  ],

  verification: {
    lastChecked: '21 октября 2026',
    status: 'confirmed',
    officialSourcesCount: 3,
  },
};
