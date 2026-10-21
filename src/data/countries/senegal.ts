import type { CountryPageData } from '../../types/country-page';

export const senegalData: CountryPageData = {
  slug: 'senegal',
  nameRu: 'Сенегал',
  nameEn: 'Senegal',
  iso2: 'SN',
  iso3: 'SEN',
  flagCode: 'SN',
  region: 'Западная Африка',
  capital: 'Дакар',
  heroImage: '/images/countries/senegal.webp',
  heroCaption: 'Исторический остров Горе у побережья Дакара',
  criticalNotice: {
    title: 'Бесплатное оформление визы (0 ₽) в Посольстве Сенегала в Москве',
    description:
      'По официальному ответу и регламенту Посольства Сенегала в Москве, для граждан РФ оформляется консульская виза на срок до 3 месяцев. Консульский сбор составляет 0 ₽ (виза бесплатна). Срок рассмотрения составляет от 3 до 7 рабочих дней. Приём документов ведётся по адресу: ул. Коровий Вал, д. 7, стр. 1 с понедельника по пятницу с 11:00 до 16:00 без предварительной записи.',
    type: 'info',
  },
  currency: {
    code: 'XOF',
    name: 'Франк КФА BCEAO',
    symbol: 'CFA',
  },
  coordinates: {
    countryLat: 14.4974,
    countryLon: -14.4524,
    capitalLat: 14.7167,
    capitalLon: -17.4677,
  },
  quickSummary: {
    visaStatusRu: 'Виза требуется',
    shortDescriptionRu:
      'По официальным консульским указаниям Посольства Сенегала в Москве, гражданам России перед поездкой оформляется виза в консульском отделе. Процедура полностью бесплатная (0 ₽) и занимает 3–7 рабочих дней.',
    availableRoutesList: ['Виза в Посольстве Сенегала в Москве (бесплатно, 0 ₽)'],
    maxStay: 'до 90 дней',
    feeFrom: '0 ₽ (бесплатно)',
    passportValidity: 'не менее 6 месяцев',
    lastVerifiedDate: '21 октября 2026',
    confidence: 'confirmed',
  },
  routes: [
    {
      id: 'consular-visa-moscow',
      name: 'Виза в Посольстве Республики Сенегал в Москве',
      routeType: 'consular_visa',
      priorityBadge: 'Бесплатная виза (0 ₽)',
      availableForRussianCitizens: true,
      purpose: 'Туризм, деловые визиты, культурные поездки',
      maxStay: 'до 90 дней (до 3 месяцев)',
      validity: 'до 90 дней',
      entries: 'single',
      fee: {
        amount: 0,
        currency: 'RUB',
        paymentMethod: 'Бесплатно (сбор 0 ₽)',
        refundable: true,
        russianCardAccepted: true,
        note: 'Посольство Сенегала в Москве официально подтверждает: сбор за оформление визы не взимается.',
      },
      processingTime: '3–7 рабочих дней',
      applyWhere: 'Консульский отдел Посольства Сенегала (Москва, ул. Коровий Вал, д. 7, стр. 1)',
      format: 'sticker',
      allowedBorderCrossings: [
        'Международный аэропорт Блез Диань в Дакаре (DSS)',
        'Морской порт Дакара',
      ],
      extensionAvailable: true,
      extensionRules: 'Продление возможно в миграционной полиции (DPV) в Дакаре.',
      description:
        'Приём заявителей проходит с понедельника по пятницу с 11:00 до 16:00. Предварительная запись не требуется.',
    },
  ],
  requirementsChecklist: [
    {
      id: 'passport',
      label: 'Оригинал загранпаспорта и 2 копии первой страницы',
      state: 'required',
      details: 'Действующий загранпаспорт со сроком от 6 месяцев и 2 чистыми страницами, плюс 2 чёткие копии главного разворота.',
    },
    {
      id: 'application-form',
      label: 'Визовая анкета в 2 экземплярах',
      state: 'required',
      details: 'Заполненная официальная анкета на французском языке с личной подписью заявителя на каждом экземпляре.',
    },
    {
      id: 'photos',
      label: 'Две фотографии 3 × 4 см',
      state: 'required',
      details: 'Цветные фото паспортного формата (по одной прикрепляется к каждому экземпляру анкеты).',
    },
    {
      id: 'tickets',
      label: 'Бронирование авиабилетов туда и обратно',
      state: 'required',
      details: 'Подтверждённый маршрутный лист перелёта в Сенегал и обратно с датами.',
    },
    {
      id: 'accommodation',
      label: 'Бронь гостиницы или письмо-приглашение',
      state: 'required',
      details: 'Подтверждение резервации проживания на весь срок пребывания или официальное приглашение принимающей стороны.',
    },
    {
      id: 'employment-certificate',
      label: 'Справка с места работы',
      state: 'required',
      details: 'Справка от работодателя на бланке компании с указанием должности и заработной платы.',
    },
    {
      id: 'yellow-fever',
      label: 'Сертификат о вакцинации от жёлтой лихорадки',
      state: 'required',
      details: 'Сенегал входит в зону риска передачи жёлтой лихорадки; прививка рекомендуется ВОЗ и требуется при въезде.',
    },
  ],
  passport: {
    validityRequirement: 'Не менее 6 месяцев с даты въезда в Сенегал',
    validityFrom: 'entry_date',
    blankPagesRequired: 2,
    biometricOnly: false,
    retainedByEmbassy: true,
    note: 'Паспорт сдаётся в консульский отдел в Москве на 3–7 рабочих дней.',
  },
  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Скачивание официальной анкеты Сенегала',
      description:
        'Скачайте официальный бланк визового заявления Посольства Сенегала (доступен в блоке документов ниже) и распечатайте в 2 экземплярах.',
    },
    {
      stepNumber: 2,
      title: 'Заполнение анкеты на французском языке',
      description:
        'Заполните анкету на французском языке печатными буквами, наклейте по одной фотографии на каждый экземпляр и подпишите.',
    },
    {
      stepNumber: 3,
      title: 'Сбор пакета документов',
      description:
        'Подготовьте оригинал загранпаспорта, 2 копии первой страницы, брони билетов туда-обратно, бронь отеля и справку с места работы.',
    },
    {
      stepNumber: 4,
      title: 'Подача в консульский отдел в Москве',
      description:
        'Посетите посольство (Москва, ул. Коровий Вал, д. 7, стр. 1) в будний день с 11:00 до 16:00 без записи. Сбор 0 ₽.',
    },
    {
      stepNumber: 5,
      title: 'Получение готовой визы',
      description:
        'Через 3–7 рабочих дней получите паспорт со вклеенной визой Сенегала.',
    },
  ],
  documents: [
    {
      name: 'Оригинал загранпаспорта',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Срок действия не менее 6 месяцев.',
    },
    {
      name: 'Две копии первой страницы загранпаспорта',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Две чёткие копии страницы с персональными данными.',
    },
    {
      name: 'Визовая анкета в 2 экземплярах',
      state: 'required',
      originalOrCopy: 'original',
      language: 'Французский',
      digitalFormat: 'PDF',
      note: 'Официальный бланк Посольства Республики Сенегал.',
    },
    {
      name: 'Две фотографии 3 × 4 см',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Цветные на светлом фоне.',
    },
    {
      name: 'Бронь авиабилетов туда и обратно',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Авиабилеты или подтверждённое бронирование перелёта.',
    },
    {
      name: 'Подтверждение проживания / приглашение',
      state: 'required',
      originalOrCopy: 'either',
      digitalFormat: 'PDF',
      note: 'Бронирование отеля либо пригласительное письмо.',
    },
    {
      name: 'Справка с места работы',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Справка с указанием должности и заработной платы.',
    },
  ],
  consularDocuments: [
    {
      id: 'senegal-visa-app',
      title: 'Официальная визовая анкета Посольства Сенегала',
      filename: 'senegal-visa-application-form.pdf',
      url: '/documents/senegal/senegal-visa-application-form.pdf',
      fileType: 'pdf',
      fileSize: '104 КБ',
      description: 'Официальная форма визового заявления Посольства Республики Сенегал в Москве.',
    },
  ],
  travelAndStay: {
    returnTicketRequired: true,
    hotelBookingRequired: true,
    proofOfFundsRequired: false,
    invitationRequired: false,
    notes: 'Сенегал — одна из самых стабильных и гостеприимных стран Западной Африки (культура «тера́нга»).',
  },
  health: {
    yellowFever: {
      requiredDirectFromRussia: true,
      requiredFromRiskCountries: true,
      note: 'Вакцинация от жёлтой лихорадки строго рекомендуется ВОЗ и санитарными властями Сенегала. Жёлтый международный сертификат проверяется при пересечении границы.',
    },
    medicalInsuranceRequired: true,
    notes: 'Риск малярии присутствует круглогодично на всей территории страны. Рекомендуется профилактический приём препаратов (маларон/доксициклин) и качественные репелленты с DEET.',
  },
  departureChecklist: [
    'Загранпаспорт со вклеенной визой Сенегала',
    'Жёлтый международный сертификат о вакцинации от жёлтой лихорадки',
    'Распечатанные брони отеля и обратных авиабилетов',
    'Наличные евро для удобного обмена на франки КФА',
    'Эффективные репелленты от комаров с DEET',
    'Легкую хлопковую одежду и солнцезащитные средства',
  ],
  border: {
    checkpointTypes: ['airport', 'seaport', 'land_border'],
    documentsRequestedOnArrival: [
      'Загранпаспорт с действующей визой',
      'Сертификат о вакцинации от жёлтой лихорадки',
      'Обратные авиабилеты',
      'Бронь отеля',
    ],
    allowedEntryPoints: [
      'Международный аэропорт Блез Диань (DSS) в Диас / Дакаре',
    ],
    arrivalCardRequired: true,
    biometricsOnArrival: false,
    notes: 'Новый международный аэропорт Блез Диань (DSS) расположен в 45 км к востоку от Дакара, связан со столицей скоростным экспресс-поездом TER и автобаном.',
  },
  postEntry: {
    registrationRequired: false,
    extensionPossible: true,
    notes: 'Отели регистрируют постояльцев самостоятельно.',
  },
  transit: {
    visaRequired: false,
    airsideTransitAllowed: true,
    notes: 'Безвизовый транзит разрешён в аэропорту Дакара до 24 часов при наличии билета в третью страну без выхода из транзитной зоны.',
  },
  contacts: [
    {
      type: 'embassy',
      name: 'Посольство Республики Сенегал в Российской Федерации',
      city: 'Москва',
      address: '119049, г. Москва, ул. Коровий Вал, д. 7, стр. 1, кв. 193-195',
      phone: '+7 (499) 230-21-02 / +7 (499) 230-22-75',
      email: 'ambasendakar@gmail.com',
      workingHours: 'Пн–Пт 11:00–16:00',
    },
    {
      type: 'embassy',
      name: 'Посольство Российской Федерации в Республике Сенегал',
      city: 'Дакар',
      address: 'Avenue Jean Mermoz, Fann-Résidence, Dakar, B.P. 3180',
      phone: '+221 (33) 839-70-99',
      email: 'ambrassenegal@mid.ru',
    },
  ],
  sources: [
    {
      title: 'Consular Visa Notice & Application Document',
      organization: 'Embassy of the Republic of Senegal in Moscow',
      url: 'https://mail.google.com/',
      dateChecked: '2026-10-21',
      reliability: 'primary_official',
      note: 'Официальное уведомление визового отдела Посольства Сенегала в Москве о бесплатном оформлении визы для граждан РФ.',
    },
  ],
  verification: {
    lastChecked: '21 октября 2026',
    status: 'confirmed',
    officialSourcesCount: 2,
  },
};
