import type { CountryPageData } from '../../types/country-page';

export const angolaData: CountryPageData = {
  slug: 'angola',
  nameRu: 'Ангола',
  nameEn: 'Angola',
  iso2: 'AO',
  iso3: 'AGO',
  flagCode: 'AO',
  region: 'Центральная и Южная Африка',
  capital: 'Луанда',
  heroImage: '/images/countries/angola.webp',
  heroCaption: 'Мощный каскад водопадов Каландула в провинции Маланже',
  criticalNotice: {
    title: 'Безвизовый въезд до 30 дней и обязательная вакцинация от жёлтой лихорадки',
    description:
      'По Президентскому декрету № 189/23 (Decreto Presidencial n.º 189/23), граждане РФ освобождены от виз для туристических поездок на срок до 30 дней за въезд (суммарно не более 90 дней в календарном году). ВНИМАНИЕ: Международный сертификат о вакцинации от жёлтой лихорадки СТРОГО ОБЯЗАТЕЛЕН для всех въезжающих старше 9 месяцев — без него авиакомпании отказывают в посадке на рейс.',
    type: 'warning',
  },
  currency: {
    code: 'AOA',
    name: 'Ангольская кванза',
    symbol: 'Kz',
  },
  coordinates: {
    countryLat: -11.2027,
    countryLon: 17.8739,
    capitalLat: -8.839,
    capitalLon: 13.2894,
  },

  quickSummary: {
    visaStatusRu: 'Безвизовый въезд',
    shortDescriptionRu:
      'С конца 2023 года для граждан России действует безвизовый режим для туризма: до 30 дней за поездку (до 90 дней в год). На пограничном контроле в аэропорту Луанды необходимо предъявить загранпаспорт со сроком действия от 6 месяцев, сертификат от жёлтой лихорадки, обратный билет и бронь проживания.',
    availableRoutesList: ['Безвизовый въезд до 30 дней (туризм)', 'Электронная виза eVisa / SME ($120)', 'Консульская виза в Москве'],
    maxStay: 'до 30 дней (до 90 дней в календарном году)',
    feeFrom: '0 ₽ (бесплатно при безвизе)',
    passportValidity: 'не менее 6 месяцев с даты въезда',
    lastVerifiedDate: '25 октября 2026',
    confidence: 'confirmed',
  },

  routes: [
    {
      id: 'tourist-visa-free-30d',
      name: 'Безвизовый въезд для туристов (Decreto Presidencial n.º 189/23)',
      routeType: 'visa_free',
      priorityBadge: 'Основной туристический маршрут (без визы)',
      availableForRussianCitizens: true,
      purpose: 'Туризм, отдых, осмотр природных достопримечательностей, краткосрочный частный визит',
      maxStay: 'до 30 дней непрерывно',
      validity: 'Суммарно до 90 дней в течение одного календарного года',
      entries: 'single',
      fee: {
        amount: 0,
        currency: 'USD',
        paymentMethod: 'Бесплатно (сбор не взимается)',
        refundable: true,
        russianCardAccepted: true,
        note: 'При соблюдении условий декрета въездной сбор на границе равен нулю.',
      },
      processingTime: 'Мгновенно на паспортном контроле (проставление въездного штампа)',
      applyWhere: 'Международный аэропорт Луанды «4 Февраля» (LAD) или новый аэропорт Антонио Агостиньо Нето (AIAAN)',
      officialUrl: 'https://sme.gov.ao',
      format: 'stamp',
      allowedBorderCrossings: [
        'Международный аэропорт Луанда «4 Февраля» (LAD)',
        'Международный аэропорт им. Антонио Агостиньо Нето (AIAAN)',
        'Морской порт Луанды',
      ],
      extensionAvailable: true,
      extensionRules: 'Можно продлить один раз ещё на 30 дней в центральном управлении SME в Луанде до истечения первых 30 дней.',
      description:
        'В соответствии с Указом Президента Республики Ангола № 189/23 от 29 сентября 2023 года граждане Российской Федерации имеют право безвизового въезда с туристической целью на срок до 30 дней за одну поездку.',
    },
    {
      id: 'angola-evisa-sme',
      name: 'Предварительная электронная виза через портал миграционной службы (SME eVisa)',
      routeType: 'evisa',
      priorityBadge: 'Альтернатива для длительных поездок',
      availableForRussianCitizens: true,
      purpose: 'Деловые поездки, визиты к родственникам, туризм свыше 30 дней',
      maxStay: 'до 30 дней с возможностью двукратного продления',
      validity: '30 дней с момента одобрения предварительной авторизации',
      entries: 'single',
      fee: {
        amount: 120,
        currency: 'USD',
        paymentMethod: 'Наличными долларами США нового образца в аэропорту Луанды или международной картой онлайн',
        refundable: false,
        russianCardAccepted: false,
        note: 'Банкноты долларов должны быть выпущены не ранее 2013 года, без штампов, надписей и надрывов.',
      },
      processingTime: '3–5 рабочих дней на онлайн-одобрение предварительного письма (Pré-visto)',
      applyWhere: 'Официальный портал миграционной службы SME (Serviço de Migração e Estrangeiros)',
      officialUrl: 'https://www.sme.gov.ao',
      format: 'sticker',
      allowedBorderCrossings: ['Международный аэропорт Луанды (LAD / AIAAN)'],
      extensionAvailable: true,
      extensionRules: 'Продлевается в территориальных органах SME в Луанде.',
      description:
        'Предварительное электронное разрешение, выдаваемое миграционной службой Анголы. После одобрения заявитель распечатывает подтверждение и получает вклейку визы на стойке иммиграции по прилёте.',
    },
    {
      id: 'consular-visa-moscow',
      name: 'Консульская виза через Посольство Анголы в Москве',
      routeType: 'consular_visa',
      priorityBadge: 'Для работы, учёбы и бизнеса',
      availableForRussianCitizens: true,
      purpose: 'Бизнес-контракты, работа, волонтёрство, учёба, семейные поездки',
      maxStay: 'от 30 до 90 дней (в зависимости от категории визы)',
      validity: 'до 60 дней для въезда с момента выдачи',
      entries: 'single',
      fee: {
        amount: 120,
        currency: 'USD',
        paymentMethod: 'Безналичный платёж в рублях по курсу посольства через отделения ВТБ или Газпромбанка',
        refundable: false,
        russianCardAccepted: true,
        note: 'Оплата производится исключительно по официальным реквизитам Посольства после проверки анкеты.',
      },
      processingTime: 'от 5 до 14 рабочих дней (срочный тариф — 3 рабочих дня с надбавкой 50%)',
      applyWhere: 'Консульский отдел Посольства Республики Ангола в Москве (ул. Улофа Пальме, д. 6)',
      officialUrl: 'https://angolarussia.ru',
      format: 'sticker',
      description:
        'Оформляется непосредственно в консульском отделе в Москве при предоставлении оригиналов справок, официального приглашения (Termo de Responsabilidade) и квитанции об оплате сбора.',
    },
  ],

  requirementsChecklist: [
    {
      id: 'passport',
      label: 'Загранпаспорт со сроком действия от 6 месяцев',
      state: 'required',
      details: 'Срок действия — не менее 6 месяцев с даты въезда, минимум 2 чистые страницы подряд для штампов.',
    },
    {
      id: 'yellow-fever',
      label: 'Сертификат о вакцинации против жёлтой лихорадки',
      state: 'required',
      details: 'СТРОГО ОБЯЗАТЕЛЕН. Проверяется санитарной службой перед выходом в зону паспортного контроля.',
    },
    {
      id: 'return-ticket',
      label: 'Обратный билет или билет в третью страну',
      state: 'required',
      details: 'Фиксированная дата вылета в пределах разрешённых 30 дней. Требуется при регистрации на рейс и на границе.',
    },
    {
      id: 'hotel-reservation',
      label: 'Подтверждение бронирования гостиницы или приглашение',
      state: 'required',
      details: 'Бронь отеля в Луанде либо официальное письмо-приглашение (Termo de Responsabilidade) с указанием адреса.',
    },
    {
      id: 'proof-of-funds',
      label: 'Финансовые средства ($200 USD в сутки)',
      state: 'required',
      details: 'Официальный регламент требует подтверждения наличия средств: наличные доллары/евро или международные банковские карты.',
    },
    {
      id: 'malaria-prevention',
      label: 'Профилактика малярии',
      state: 'recommended',
      details: 'Высокий риск малярии по всей стране. Настоятельно рекомендуется приём профилактических препаратов и наличие репеллентов.',
    },
  ],

  passport: {
    validityRequirement: 'Не менее 6 месяцев на дату предполагаемого въезда в страну',
    validityFrom: 'entry_date',
    blankPagesRequired: 2,
    biometricOnly: false,
    retainedByEmbassy: false,
    note: 'Подходят как биометрические 10-летние загранпаспорта, так и паспорта старого образца на 5 лет.',
  },

  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Сделать прививку от жёлтой лихорадки',
      description:
        'Вакцинация должна быть проведена не менее чем за 10 дней до вылета. Получите жёлтую книжку международного образца (ICVP).',
    },
    {
      stepNumber: 2,
      title: 'Подготовить документы для безвизового въезда',
      description:
        'Распечатайте обратный авиабилет (до 30 дней), подтверждение брони отеля и подготовьте наличную валюту ($200 в сутки).',
    },
    {
      stepNumber: 3,
      title: 'Посадка на рейс и санитарный контроль',
      description:
        'Авиакомпания при посадке проверит сертификат жёлтой лихорадки и обратный билет. По прилёте в Луанду первой проходится стойка санитарного контроля.',
    },
    {
      stepNumber: 4,
      title: 'Прохождение границы и получение штампа',
      description:
        'Офицер пограничной службы SME ставит бесплатный въездной штамп со сроком пребывания до 30 дней.',
    },
  ],

  documents: [
    {
      name: 'Действующий заграничный паспорт',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Срок действия более 6 месяцев с даты въезда, минимум 2 чистые страницы.',
    },
    {
      name: 'Международный сертификат от жёлтой лихорадки (ICVP)',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Оригинал жёлтого сертификата международного образца с отметкой о вакцинации.',
    },
    {
      name: 'Подтверждённый обратный авиабилет',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Электронный билет с указанием номера бронирования и даты вылета в пределах 30 дней.',
    },
    {
      name: 'Бронь отеля или приглашение (Termo de Responsabilidade)',
      state: 'required',
      originalOrCopy: 'copy',
      digitalFormat: 'PDF',
      note: 'Ваучер размещения или нотариально заверенное заявление от принимающей стороны.',
    },
    {
      name: 'Подтверждение платёжеспособности ($200/сутки)',
      state: 'required',
      originalOrCopy: 'either',
      note: 'Наличные доллары нового образца (без печатей и потёртостей) либо выписка по зарубежной карте.',
    },
  ],

  consularDocuments: [
    {
      id: 'angola-decree-189-23',
      title: 'Президентский декрет № 189/23 об отмене виз для туризма (Diário da República)',
      filename: 'angola-visa-waiver-decree.pdf',
      url: '/documents/angola/angola-visa-waiver-decree.pdf',
      fileType: 'pdf',
      fileSize: '3 КБ',
      description:
        'Официальный текст законодательного акта Республики Ангола, устанавливающий безвизовый въезд для туристов из РФ до 30 дней за поездку.',
    },
    {
      id: 'angola-bank-details',
      title: 'Официальные банковские реквизиты Посольства Анголы в Москве',
      filename: 'angola-embassy-bank-details.pdf',
      url: '/documents/angola/angola-embassy-bank-details.pdf',
      fileType: 'pdf',
      fileSize: '3 КБ',
      description:
        'Счета и порядок оплаты консульских сборов в рублях в авторизованных банках (при оформлении рабочих и деловых виз).',
    },
    {
      id: 'angola-requirements-memo',
      title: 'Официальный регламент въезда и санитарных требований SME',
      filename: 'angola-consular-visa-requirements.pdf',
      url: '/documents/angola/angola-consular-visa-requirements.pdf',
      fileType: 'pdf',
      fileSize: '3 КБ',
      description:
        'Правила пересечения границы, требования к паспорту, финансовому обеспечению и обязательной вакцинации от жёлтой лихорадки.',
    },
  ],

  travelAndStay: {
    returnTicketRequired: true,
    hotelBookingRequired: true,
    proofOfFundsRequired: true,
    fundsPerDayOrTotal: 'Официальный норматив — не менее $200 USD в день на человека.',
    invitationRequired: false,
    notes:
      'Для туристического безвизового въезда достаточно подтверждённой брони гостиницы. При проживании у частных лиц требуется Termo de Responsabilidade, заверенное ангольским нотариусом.',
  },

  health: {
    yellowFever: {
      requiredDirectFromRussia: true,
      requiredFromRiskCountries: true,
      note: 'ОБЯЗАТЕЛЬНО ДЛЯ ВСЕХ ПАССАЖИРОВ старше 9 месяцев, независимо от страны вылета и маршрута следования. Прививка действует пожизненно.',
    },
    medicalInsuranceRequired: false,
    notes:
      'Высокий риск малярии (преимущественно тропическая малярия falciparum). Водопроводная вода опасна для питья, употреблять только фабрично запечатанную бутилированную воду.',
  },

  departureChecklist: [
    'Заграничный паспорт со сроком действия от 6 месяцев',
    'Оригинал международного сертификата о вакцинации от жёлтой лихорадки',
    'Распечатка обратного авиабилета из Анголы (в пределах 30 дней)',
    'Распечатка подтверждения брони отеля в Луанде',
    'Наличные доллары США выпуска после 2013 года в идеальном состоянии',
    'Профилактические противомалярийные препараты и репелленты с концентрацией ДЭТА от 30%',
    'Переходник для розеток европейского типа C / F',
  ],

  border: {
    checkpointTypes: ['airport', 'seaport'],
    documentsRequestedOnArrival: [
      'Заграничный паспорт',
      'Жёлтый сертификат вакцинации против жёлтой лихорадки',
      'Обратный авиабилет',
      'Бронь отеля или подтверждение адреса проживания',
      'Заполненная миграционная карточка въезда',
    ],
    allowedEntryPoints: [
      'Международный аэропорт Луанда «4 Февраля» (LAD)',
      'Международный аэропорт им. Антонио Агостиньо Нето (AIAAN)',
      'Морской терминал порта Луанда',
    ],
    notes:
      'На паспортном контроле офицер миграционной службы SME сканирует отпечатки пальцев, делает цифровое фото и ставит въездной штамп с датой въезда.',
  },

  postEntry: {
    registrationRequired: false,
    registrationDeadlineDays: 0,
    extensionPossible: true,
    extensionMaxDuration: 'до 30 дней',
    notes:
      'Регистрация по месту пребывания для туристов на срок до 30 дней не требуется (отель регистрирует автоматически). Продление безвизового пребывания осуществляется в центральном офисе SME в Луанде.',
  },

  contacts: [
    {
      type: 'embassy',
      name: 'Посольство Республики Ангола в Москве',
      city: 'Москва',
      address: '119590, г. Москва, ул. Улофа Пальме, д. 6',
      phone: '+7 (499) 143-63-24',
      email: 'servicos.consulares@angolarussia.ru',
      website: 'https://angolarussia.ru',
      workingHours: 'Пн–Чт 09:30–13:00 (приём и выдача документов)',
    },
    {
      type: 'embassy',
      name: 'Посольство Российской Федерации в Анголе',
      city: 'Луанда',
      address: 'Luanda, Rua Houari Boumedienne, 141 (Miramar)',
      phone: '+244 (222) 445-028',
      email: 'russembangola@mid.ru',
      website: 'https://angola.mid.ru',
    },
    {
      type: 'immigration',
      name: 'Миграционная служба Анголы (SME)',
      city: 'Луанда',
      address: 'Luanda, Avenida 4 de Fevereiro',
      phone: '+244 (222) 321-488',
      website: 'https://sme.gov.ao',
    },
  ],

  sources: [
    {
      title: 'Decreto Presidencial n.º 189/23 de 29 de Setembro — Isenção de Vistos de Turismo',
      organization: 'Governo da República de Angola / Diário da República',
      url: 'https://sme.gov.ao',
      dateChecked: '2026-10-25',
      reliability: 'primary_official',
      note: 'Официальный президентский декрет об отмене туристических виз для граждан РФ на срок до 30 дней.',
    },
    {
      title: 'Порядок въезда граждан РФ в Республику Ангола',
      organization: 'Консульский департамент МИД РФ (КД МИД)',
      url: 'https://kdmid.ru',
      dateChecked: '2026-10-25',
      reliability: 'government_portal',
      note: 'Официальные сведения о 30-дневном безвизе и обязательной вакцинации от жёлтой лихорадки.',
    },
    {
      title: 'Serviço de Migração e Estrangeiros — Requisitos de Entrada',
      organization: 'Ministério do Interior de Angola (SME)',
      url: 'https://sme.gov.ao',
      dateChecked: '2026-10-25',
      reliability: 'government_portal',
      note: 'Официальные пограничные требования и регламент продления пребывания.',
    },
    {
      title: 'International Travel and Health — Yellow Fever Vaccination Requirements',
      organization: 'World Health Organization (WHO)',
      url: 'https://www.who.int',
      dateChecked: '2026-10-25',
      reliability: 'primary_official',
      note: 'Международные медико-санитарные правила (МСП): сертификат обязателен для всех путешественников от 9 месяцев.',
    },
  ],

  verification: {
    lastChecked: '25 октября 2026',
    status: 'confirmed',
    officialSourcesCount: 4,
  },
};
