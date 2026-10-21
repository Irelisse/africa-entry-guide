import type { CountryPageData } from '../../types/country-page';

export const lesothoData: CountryPageData = {
  slug: 'lesotho',
  nameRu: 'Лесото',
  nameEn: 'Lesotho',
  iso2: 'LS',
  iso3: 'LSO',
  flagCode: 'LS',
  region: 'Южная Африка',
  capital: 'Масеру',
  heroImage: '/images/countries/lesotho.webp',
  heroCaption: 'Высокогорный перевал Сани-Пасс на въезде в Королевство Лесото',
  criticalNotice: {
    title: 'Транзит через ЮАР, медицинское заключение и английский язык',
    description:
      'Королевство Лесото является анклавом внутри ЮАР — для прибытия в страну туристу обязательно требуется соблюдение визовых и транзитных правил Южно-Африканской Республики. Все документы для визы Лесото подаются на английском языке в формате PDF и требуют медицинского заключения врача (Medical Report).',
    type: 'warning',
  },
  currency: {
    code: 'LSL',
    name: 'Лесотский лоти (равен южноафриканскому ранду ZAR)',
    symbol: 'M / R',
  },
  coordinates: {
    countryLat: -29.61,
    countryLon: 28.2336,
    capitalLat: -29.3151,
    capitalLon: 27.4869,
  },

  quickSummary: {
    visaStatusRu: 'Виза требуется',
    shortDescriptionRu:
      'Гражданам РФ для посещения Королевства Лесото требуется виза. Миграционная служба Лесото подтвердила возможность направления визового пакета по электронной почте. Срок рассмотрения составляет от 5 рабочих дней, сбор — R1000 (южноафриканских рандов).',
    availableRoutesList: ['Электронная процедура согласования (R1000 / ~55$)'],
    maxStay: 'до 30–90 дней',
    feeFrom: 'R1000 ZAR / LSL (~$55 USD)',
    passportValidity: 'не менее 6 месяцев',
    lastVerifiedDate: '21 октября 2026',
    confidence: 'confirmed',
  },

  routes: [
    {
      id: 'email-evisa-procedure',
      name: 'Виза через Миграционную службу Королевства Лесото',
      routeType: 'evisa',
      priorityBadge: 'Электронная процедура согласования',
      availableForRussianCitizens: true,
      purpose: 'Туризм, горный треккинг, краткосрочный визит',
      maxStay: 'до 30 дней (с возможностью продления)',
      validity: 'до 90 дней',
      entries: 'single',
      fee: {
        amount: 1000,
        currency: 'ZAR',
        paymentMethod: 'Сбор R1000 / M1000 (южноафриканский ранд / лоти)',
        refundable: false,
        russianCardAccepted: false,
        note: 'Официальный тариф из чек-листа составляет 1 000 рандов/лоти (около $55 USD). Пакет документов направляется в миграционное ведомство.',
      },
      processingTime: 'не менее 5 рабочих дней',
      applyWhere: 'Департамент иммиграции Королевства Лесото',
      format: 'electronic',
      allowedBorderCrossings: [
        'Международный аэропорт Мошвешве I в Масеру (MSU)',
        'Пограничные пункты на границе с ЮАР (Сани-Пасс, Масеру-Бридж и др.)',
      ],
      extensionAvailable: true,
      extensionRules: 'Продление оформляется через центральный офис иммиграции в Масеру.',
      description:
        'Пакет документов в формате PDF на английском языке направляется по официальному каналу в миграционную службу Лесото. После одобрения выдаётся визовое подтверждение.',
    },
  ],

  requirementsChecklist: [
    {
      id: 'passport',
      label: 'Действующий загранпаспорт',
      state: 'required',
      details: 'Рекомендуется запас срока действия не менее 6 месяцев и свободные страницы для штампов.',
    },
    {
      id: 'sa-visa',
      label: 'Транзитные документы через ЮАР',
      state: 'required',
      details: 'Лесото окружено ЮАР со всех сторон. Проверьте условия пересадки и въезда в ЮАР.',
    },
    {
      id: 'cover-letter',
      label: 'Письмо-заявление на имя директора миграции (Application Letter)',
      state: 'required',
      details: 'Заявление с описанием цели поездки, маршрута и дат на английском языке.',
    },
    {
      id: 'medical-report',
      label: 'Медицинское заключение (Medical Report) и страховка',
      state: 'required',
      details: 'Справка от врача о пригодности к путешествиям и международная медицинская страховка.',
    },
    {
      id: 'hotel-reservation',
      label: 'Подтверждение размещения в Лесото',
      state: 'required',
      details: 'Бронь отеля, лоджа или подтверждённое жильё.',
    },
    {
      id: 'bank-statement',
      label: 'Банковская выписка за 3 месяца',
      state: 'required',
      details: 'Подтверждение достаточных финансовых средств для пребывания в горном королевстве.',
    },
  ],

  passport: {
    validityRequirement: 'Не менее 6 месяцев на момент предполагаемого въезда',
    validityFrom: 'entry_date',
    blankPagesRequired: 2,
    biometricOnly: false,
    retainedByEmbassy: false,
    note: 'Для электронной процедуры подаётся скан; оригинал предъявляется при пересечении границы.',
  },

  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Подготовка и перевод документов на английский язык',
      description:
        'Соберите загранпаспорт, бронь отеля, выписку за 3 месяца, медстраховку и справку от врача (Medical Report). Все файлы объединяются в PDF на английском языке.',
    },
    {
      stepNumber: 2,
      title: 'Заполнение визового бланка Лесото',
      description:
        'Скачайте официальный бланк визового заявления Королевства Лесото (доступен ниже) и заполните его.',
    },
    {
      stepNumber: 3,
      title: 'Составление сопроводительного письма',
      description:
        'Напишите официальное письмо-заявление с подробным описанием маршрута поездки и дат на английском языке.',
    },
    {
      stepNumber: 4,
      title: 'Направление документов в миграционную службу',
      description:
        'Отправьте PDF-пакет в адрес Департамента иммиграции Лесото. Срок рассмотрения составляет от 5 рабочих дней.',
    },
    {
      stepNumber: 5,
      title: 'Въезд через ЮАР в Лесото',
      description:
        'Следуя в Лесото через ЮАР (аэропорт Йоханнесбурга или наземные КПП), предъявите паспорт, одобренное разрешение и обратные билеты.',
    },
  ],

  documents: [
    {
      name: 'Копия разворота заграничного паспорта',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Чёткий скан разворота с личными данными.',
    },
    {
      name: 'Заполненный официальный визовый бланк',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Официальная форма визового заявления Королевства Лесото.',
    },
    {
      name: 'Письмо-заявление с описанием маршрута',
      state: 'required',
      originalOrCopy: 'copy',
      language: 'Английский',
      digitalFormat: 'PDF',
      note: 'Application letter с детальным планом поездки.',
    },
    {
      name: 'Подтверждение бронирования жилья',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Ваучер отеля или кемпинга в Лесото.',
    },
    {
      name: 'Выписка с банковского счёта за 3 месяца',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Выписка об остатке и движении средств за последние 3 месяца.',
    },
    {
      name: 'Медицинская страховка и заключение врача',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Полис международного медстрахования и Medical Report о здоровье путешественника.',
    },
  ],

  consularDocuments: [
    {
      id: 'lesotho-visa-form',
      title: 'Официальный визовый бланк Королевства Лесото',
      filename: 'lesotho-visa-application-form.pdf',
      url: '/documents/lesotho/lesotho-visa-application-form.pdf',
      fileType: 'pdf',
      fileSize: '337 КБ',
      description: 'Официальная форма визового заявления (The Kingdom of Lesotho Visa Form).',
    },
    {
      id: 'lesotho-requirements',
      title: 'Консульские требования к туристической визе (Word)',
      filename: 'lesotho-tourist-visa-requirements.docx',
      url: '/documents/lesotho/lesotho-tourist-visa-requirements.docx',
      fileType: 'docx',
      fileSize: '13 КБ',
      description: 'Официальный перечень обязательных документов от миграционного ведомства Лесото.',
    },
  ],

  travelAndStay: {
    returnTicketRequired: true,
    hotelBookingRequired: true,
    proofOfFundsRequired: true,
    fundsPerDayOrTotal: 'Подтверждается выпиской из банка за 3 месяца.',
    invitationRequired: false,
    notes: 'Для туристической поездки достаточно гостиничного ваучера.',
  },

  health: {
    yellowFever: {
      requiredDirectFromRussia: false,
      requiredFromRiskCountries: true,
      transitThresholdHours: 12,
      note: 'Требуется только при въезде из эндемичных стран или длительном транзите через них.',
    },
    medicalInsuranceRequired: true,
    notes: 'Лесото расположено на высотах свыше 1400–3000 метров (горный климат, перепады температур). Обязательно наличие медицинской страховки.',
  },

  departureChecklist: [
    'Заграничный паспорт',
    'Одобренное визовое подтверждение Лесото',
    'Транзитные документы для проезда через ЮАР',
    'Распечатанные брони отелей и маршрут путешествия',
    'Медицинская страховка с покрытием высокогорья и заключение врача',
    'Выписка из банка за 3 месяца',
  ],

  border: {
    checkpointTypes: ['airport', 'land_border'],
    documentsRequestedOnArrival: [
      'Загранпаспорт',
      'Визовое подтверждение',
      'Обратные авиабилеты',
      'Бронь отеля',
      'Медицинские документы',
    ],
    allowedEntryPoints: [
      'Международный аэропорт Мошвешве I в Масеру',
      'Пограничные наземные переходы из ЮАР',
    ],
    arrivalCardRequired: true,
    biometricsOnArrival: false,
    notes: 'На наземных границах с ЮАР контроль осуществляется быстро при наличии полного комплекта документов.',
  },

  postEntry: {
    registrationRequired: false,
    extensionPossible: true,
    notes: 'Продление пребывания возможно в Масеру через Департамент иммиграции.',
  },

  transit: {
    visaRequired: true,
    airsideTransitAllowed: false,
    notes: 'Особое внимание: авиаперелёт в Лесото практически всегда осуществляется с пересадкой в ЮАР (Йоханнесбург), поэтому проверьте транзитные правила ЮАР.',
  },

  contacts: [
    {
      type: 'immigration',
      name: 'Департамент иммиграции Королевства Лесото',
      city: 'Масеру',
      email: 'lesotho.visa.queries@gmail.com',
      website: 'https://evisalesotho.com/',
    },
  ],

  sources: [
    {
      title: 'Official Consular Requirements & Application Form',
      organization: 'Department of Immigration, Kingdom of Lesotho',
      url: 'https://mail.google.com/',
      dateChecked: '2026-10-21',
      reliability: 'primary_official',
      note: 'Официальные материалы и переписка с миграционным ведомством Лесото.',
    },
  ],

  verification: {
    lastChecked: '21 октября 2026',
    status: 'confirmed',
    officialSourcesCount: 2,
  },
};
