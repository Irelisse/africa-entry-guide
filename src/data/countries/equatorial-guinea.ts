import type { CountryPageData } from '../../types/country-page';

export const equatorialGuineaData: CountryPageData = {
  slug: 'equatorial-guinea',
  nameRu: 'Экваториальная Гвинея',
  nameEn: 'Equatorial Guinea',
  iso2: 'GQ',
  iso3: 'GNQ',
  flagCode: 'GQ',
  region: 'Центральная Африка',
  capital: 'Малабо',
  heroImage: '/images/countries/equatorial-guinea.webp',
  heroCaption: 'Пик Басиле и тропическое побережье острова Биоко',
  criticalNotice: {
    title: 'Консульский сбор 100 EUR наличными и выдача на следующий рабочий день',
    description:
      'По официальному регламенту Административного отдела Посольства Экваториальной Гвинеи в Москве, консульский сбор составляет 100 EUR и оплачивается исключительно наличными купюрами евро. Приём документов проходит в будни с 10:30 до 12:00 (Погорельский пер., 7, стр. 1). Готовая виза выдаётся уже на следующий рабочий день после подачи заявления. Требуются: анкета, 1 фото 3×4 см, оригинал паспорта с копией первой страницы и бронь отеля либо приглашение.',
    type: 'warning',
  },
  currency: {
    code: 'XAF',
    name: 'Франк КФА BEAC',
    symbol: 'FCFA',
  },
  coordinates: {
    countryLat: 1.6508,
    countryLon: 10.2679,
    capitalLat: 3.7504,
    capitalLon: 8.7371,
  },
  quickSummary: {
    visaStatusRu: 'Виза требуется',
    shortDescriptionRu:
      'Гражданам России для въезда в Экваториальную Гвинею требуется виза. Посольство в Москве осуществляет приём документов по утрам и выдаёт готовую визу уже на следующий рабочий день.',
    availableRoutesList: ['Виза в Посольстве в Москве (100 EUR, выдача на следующий день)'],
    maxStay: 'до 30 дней (согласно брони)',
    feeFrom: '100 EUR (наличными)',
    passportValidity: 'не менее 6 месяцев',
    lastVerifiedDate: '21 октября 2026',
    confidence: 'confirmed',
  },
  routes: [
    {
      id: 'consular-visa-moscow',
      name: 'Виза в Посольстве Экваториальной Гвинеи в Москве',
      routeType: 'consular_visa',
      priorityBadge: 'Выдача на следующий день (100 EUR)',
      availableForRussianCitizens: true,
      purpose: 'Туризм, деловые визиты, посещение острова Биоко и континентальной части (Бата)',
      maxStay: 'до 30 дней',
      validity: 'до 90 дней со дня выдачи',
      entries: 'single',
      fee: {
        amount: 100,
        currency: 'EUR',
        paymentMethod: 'Наличными купюрами в евро',
        refundable: false,
        russianCardAccepted: false,
        note: 'Оплата сбора 100 EUR производится исключительно наличными в евро без сдачи.',
      },
      processingTime: '1 рабочий день (выдача на следующий рабочий день)',
      applyWhere: 'Посольство Экваториальной Гвинеи в Москве (Погорельский переулок, д. 7, стр. 1)',
      format: 'sticker',
      allowedBorderCrossings: [
        'Международный аэропорт Малабо на острове Биоко (SSG)',
        'Международный аэропорт Бата в континентальной части (BSG)',
      ],
      extensionAvailable: false,
      extensionRules: 'Продление на территории страны крайне затруднено; рекомендуется сразу запрашивать необходимый срок.',
      description:
        'Приём документов осуществляется с понедельника по пятницу с 10:30 до 12:00. При подаче полного комплекта паспорт с готовой визой выдаётся на следующий рабочий день.',
    },
  ],
  requirementsChecklist: [
    {
      id: 'passport',
      label: 'Оригинал загранпаспорта и копия первой страницы',
      state: 'required',
      details: 'Действующий загранпаспорт со сроком не менее 6 месяцев и минимум 2 чистыми страницами.',
    },
    {
      id: 'application-form',
      label: 'Заполненная визовая анкета (Application Form)',
      state: 'required',
      details: 'Официальный бланк Посольства, заполненный на испанском, французском или английском языке.',
    },
    {
      id: 'photo',
      label: 'Одна фотография 3 × 4 см',
      state: 'required',
      details: 'Цветное фото на светлом фоне, прикреплённое к анкете.',
    },
    {
      id: 'hotel-or-invitation',
      label: 'Бронь отеля или копия приглашения',
      state: 'required',
      details: 'Подтверждённое бронирование гостиницы в Малабо/Бате либо официальное приглашение принимающей стороны.',
    },
    {
      id: 'fee-cash',
      label: 'Консульский сбор 100 EUR наличными',
      state: 'required',
      details: 'Строго наличными купюрами евро в кассу консульского отдела.',
    },
    {
      id: 'yellow-fever',
      label: 'Сертификат о вакцинации от жёлтой лихорадки',
      state: 'required',
      details: 'Обязателен при пересечении границы Экваториальной Гвинеи.',
    },
  ],
  passport: {
    validityRequirement: 'Не менее 6 месяцев со дня планируемого въезда',
    validityFrom: 'entry_date',
    blankPagesRequired: 2,
    biometricOnly: false,
    retainedByEmbassy: true,
    note: 'Паспорт задерживается в консульстве всего на 1 сутки (выдача на следующий рабочий день).',
  },
  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Скачивание официального бланка анкеты',
      description:
        'Скачайте официальный бланк Application Form Посольства Экваториальной Гвинеи (PDF доступен ниже) и распечатайте его.',
    },
    {
      stepNumber: 2,
      title: 'Заполнение анкеты и подготовка документов',
      description:
        'Заполните анкету печатными буквами, наклейте одну фотографию 3×4 см, подготовьте копию 1-й страницы паспорта, бронь отеля и сбор 100 EUR наличными евро.',
    },
    {
      stepNumber: 3,
      title: 'Подача документов в Посольство в Москве',
      description:
        'Посетите консульский отдел (Москва, Погорельский переулок, д. 7, стр. 1) в будний день с 10:30 до 12:00 без предварительной записи.',
    },
    {
      stepNumber: 4,
      title: 'Получение готовой визы на следующий рабочий день',
      description:
        'Придите на следующий рабочий день в приёмные часы и заберите загранпаспорт со вклеенной визой.',
    },
  ],
  documents: [
    {
      name: 'Оригинал загранпаспорта',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Срок действия от 6 месяцев, не менее 2 свободных страниц.',
    },
    {
      name: 'Копия первой страницы паспорта',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Чёткая ксерокопия разворота с личными данными и фотографией.',
    },
    {
      name: 'Официальная анкета (Application Form)',
      state: 'required',
      originalOrCopy: 'original',
      language: 'Испанский, французский или английский',
      digitalFormat: 'PDF',
      note: 'Заполненная и подписанная заявителем анкета.',
    },
    {
      name: 'Одна фотография 3 × 4 см',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Цветная на светлом фоне.',
    },
    {
      name: 'Бронирование гостиницы или приглашение',
      state: 'required',
      originalOrCopy: 'either',
      digitalFormat: 'PDF',
      note: 'Подтверждённая бронь проживания в Экваториальной Гвинее либо приглашение.',
    },
  ],
  consularDocuments: [
    {
      id: 'eg-visa-app',
      title: 'Официальная визовая анкета Посольства Экваториальной Гвинеи',
      filename: 'equatorial-guinea-visa-application-form.pdf',
      url: '/documents/equatorial-guinea/equatorial-guinea-visa-application-form.pdf',
      fileType: 'pdf',
      fileSize: '143 КБ',
      description: 'Официальный бланк Application Form Посольства Республики Экваториальная Гвинея в Москве.',
    },
  ],
  travelAndStay: {
    returnTicketRequired: true,
    hotelBookingRequired: true,
    proofOfFundsRequired: false,
    invitationRequired: false,
    notes: 'Экваториальная Гвинея — единственная испаноязычная страна Африки. Рекомендуется базовое владение испанским или французским языком.',
  },
  health: {
    yellowFever: {
      requiredDirectFromRussia: true,
      requiredFromRiskCountries: true,
      note: 'Вакцинация от жёлтой лихорадки строго обязательна для всех прибывающих пассажиров. Оригинал сертификата проверяется в аэропортах Малабо и Баты.',
    },
    medicalInsuranceRequired: true,
    notes: 'Высокий риск заболевания тропической малярией. Обязателен приём профилактических препаратов (коартем/маларон) и использование репеллентов.',
  },
  departureChecklist: [
    'Загранпаспорт со вклеенной визой',
    'Жёлтый международный сертификат о вакцинации от жёлтой лихорадки',
    'Наличные купюры евро мелкого и среднего номинала',
    'Распечатанные брони гостиницы и авиабилетов',
    'Таблетки для профилактики малярии и качественные репелленты с DEET',
    'Переходники для розеток европейского стандарта (тип C и E)',
  ],
  border: {
    checkpointTypes: ['airport', 'seaport'],
    documentsRequestedOnArrival: [
      'Загранпаспорт с действующей визой',
      'Сертификат о вакцинации от жёлтой лихорадки',
      'Обратные авиабилеты',
      'Бронь отеля',
    ],
    allowedEntryPoints: [
      'Международный аэропорт Малабо (SSG) на острове Биоко',
      'Международный аэропорт Бата (BSG)',
    ],
    arrivalCardRequired: true,
    biometricsOnArrival: false,
    notes: 'При перелётах между островом Биоко (Малабо) и континентальной частью (Бата) также требуется предъявление паспорта.',
  },
  postEntry: {
    registrationRequired: false,
    extensionPossible: false,
    notes: 'Гостиницы регистрируют постояльцев по приезде.',
  },
  transit: {
    visaRequired: true,
    airsideTransitAllowed: false,
    notes: 'Безвизовый транзит не предусмотрен; виза требуется даже для коротких стыковок с пересадкой.',
  },
  contacts: [
    {
      type: 'embassy',
      name: 'Посольство Республики Экваториальная Гвинея в РФ',
      city: 'Москва',
      address: '119017, г. Москва, Погорельский переулок, д. 7, стр. 1',
      phone: '+7 (495) 953-27-66 / +7 (495) 953-35-63',
      email: 'embajada1968@mail.ru',
      workingHours: 'Пн–Пт 10:30–12:00 (приём и выдача)',
    },
    {
      type: 'embassy',
      name: 'Посольство Российской Федерации в Республике Экваториальная Гвинея',
      city: 'Малабо',
      address: 'Malabo II, detrás del Ministerio de Asuntos Exteriores, Malabo',
      phone: '+240 (333) 090-001',
      email: 'russemb.malabo@mid.ru',
    },
  ],
  sources: [
    {
      title: 'Consular Visa Requirements & Application Procedure',
      organization: 'Administrative Department, Embassy of Equatorial Guinea in Moscow',
      url: 'https://mail.google.com/',
      dateChecked: '2026-10-21',
      reliability: 'primary_official',
      note: 'Официальный регламент оформления туристических виз и форма заявления от Посольства Экваториальной Гвинеи в Москве.',
    },
  ],
  verification: {
    lastChecked: '21 октября 2026',
    status: 'confirmed',
    officialSourcesCount: 2,
  },
};
