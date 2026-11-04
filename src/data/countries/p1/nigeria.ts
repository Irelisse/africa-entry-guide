import type { CountryPageData } from '../../../types/country-page';

export const nigeriaData: CountryPageData = {
  slug: 'nigeria',
  nameRu: 'Нигерия',
  nameEn: 'Nigeria',
  iso2: 'NG',
  iso3: 'NGA',
  flagCode: 'NG',
  region: 'Западная Африка',
  capital: 'Абуджа',
  heroImage: '/images/countries/nigeria.webp',
  heroCaption: "Огромный гранитный монолит Зума-Рок в закатных красках саванны близ Абуджи",
  criticalNotice: {
      "title": "Обязательная вакцинация от жёлтой лихорадки и тариф NIS",
      "description": "Сертификат о вакцинации от жёлтой лихорадки строго обязателен для въезда в Нигерию. По регламенту миграционной службы (Service Level Agreement) туристическая виза F5A оформляется на портале evisa.immigration.gov.ng, официальный сбор для граждан РФ составляет от 134 USD плюс комиссия.",
      "type": "warning"
  },
  currency: {
    code: 'NGN',
    name: 'Нигерийская найра',
    symbol: '₦',
  },
  coordinates: {
    countryLat: 9.082,
    countryLon: 8.6753,
    capitalLat: 9.0579,
    capitalLon: 7.4951,
  },
  quickSummary: {
    visaStatusRu: 'Электронное разрешение (eVisa / eTA)',
    shortDescriptionRu: "Граждане России оформляют туристическую визу категории F5A онлайн через официальный портал Миграционной службы Нигерии (NIS) либо в Посольстве в Москве.",
    availableRoutesList: ["Туристическая виза F5A (Tourism Visa)"],
    maxStay: 'до 30 дней',
    feeFrom: 'от 134 USD',
    passportValidity: 'не менее 6 месяцев от даты въезда',
    lastVerifiedDate: '4 ноября 2026',
    confidence: 'confirmed',
  },
  routes: [
      {
          "id": "ng-evisa",
          "name": "Туристическая виза F5A (Tourism Visa)",
          "routeType": "evisa",
          "priorityBadge": "Официальный онлайн-портал NIS",
          "availableForRussianCitizens": true,
          "purpose": "Туризм и частные визиты",
          "maxStay": "до 30 дней",
          "validity": "до 90 дней со дня выдачи",
          "entries": "single",
          "fee": {
              "amount": 134,
              "currency": "USD",
              "paymentMethod": "Онлайн на портале NIS зарубежной банковской картой",
              "note": "Тариф зависит от курса и типа сбора NIS."
          },
          "processingTime": "3–5 рабочих дней",
          "applyWhere": "Государственный портал evisa.immigration.gov.ng",
          "officialUrl": "https://evisa.immigration.gov.ng/",
          "format": "electronic",
          "description": "Электронная виза с последующей вклейкой/штампом на пограничном контроле в Лагосе (LOS) или Абудже (ABV)."
      }
  ],
  requirementsChecklist: [
    {
      id: 'req-passport',
      label: 'Заграничный паспорт гражданина РФ',
      state: 'required',
      details: 'не менее 6 месяцев от даты въезда. Минимум 2 чистые страницы.',
    },
    {
      id: 'req-tickets',
      label: 'Обратный билет или билет в третью страну',
      state: 'required',
      details: 'Требуется для подтверждения выезда из страны в пределах разрешенного срока.',
    },
    {
      id: 'req-accommodation',
      label: 'Подтверждение проживания (бронь отеля или ваучер)',
      state: 'conditional',
      details: 'Рекомендуется иметь распечатку брони гостиницы на весь период пребывания.',
    },
    {
      id: 'req-health',
      label: 'Сертификат о вакцинации от жёлтой лихорадки',
      state: 'required',
      details: "СТРОГО ОБЯЗАТЕЛЬНО для всех въезжающих старше 9 месяцев.",
    },
  ],
  passport: {
    validityRequirement: 'не менее 6 месяцев от даты въезда',
    validityFrom: 'entry_date',
    blankPagesRequired: 2,
    biometricOnly: true,
    retainedByEmbassy: false,
    note: 'Паспорт должен быть в хорошем состоянии, без повреждений и следов влаги.',
  },
  documents: [
    {
      name: 'Заграничный паспорт',
      state: 'required',
      originalOrCopy: 'original',
      note: 'Оригинал паспорта с запасом срока действия.',
    },
    {
      name: 'Обратные авиабилеты',
      state: 'required',
      originalOrCopy: 'copy',
      note: 'Билет с фиксированной датой вылета.',
    },
    {
      name: 'Бронь отеля или ваучер',
      state: 'conditional',
      originalOrCopy: 'copy',
      note: 'Подтверждение бронирования гостиницы или лоджа.',
    },
  ],
  travelAndStay: {
    returnTicketRequired: true,
    hotelBookingRequired: true,
    proofOfFundsRequired: false,
    invitationRequired: false,
    notes: 'Пограничная служба вправе выборочно проверить обратные билеты и бронь размещения.',
  },
  health: {
    yellowFever: {
      requiredDirectFromRussia: true,
      requiredFromRiskCountries: true,
      note: "СТРОГО ОБЯЗАТЕЛЬНО для всех въезжающих старше 9 месяцев.",
    },
    medicalInsuranceRequired: false,
    notes: "Рекомендуется строгая профилактика малярии.",
  },
  departureChecklist: [
      "Сертификат о вакцинации от жёлтой лихорадки (жёлтая книжка)",
      "Загранпаспорт со сроком действия от 6 месяцев",
      "Распечатка одобренной электронной визы и квитанции NIS",
      "Обратные авиабилеты и бронь отеля"
  ],
  applicationSteps: [
      {
          "stepNumber": 1,
          "title": "Прививка от жёлтой лихорадки",
          "description": "Получите международный сертификат о вакцинации."
      },
      {
          "stepNumber": 2,
          "title": "Подача на портале NIS",
          "description": "Заполните анкету на evisa.immigration.gov.ng, прикрепите бронь и оплатите сбор."
      },
      {
          "stepNumber": 3,
          "title": "Получение одобрения",
          "description": "Распечатайте Visa Approval Letter и квитанцию оплаты."
      }
  ],
  border: {
    checkpointTypes: ['airport'],
    documentsRequestedOnArrival: [
      'Заграничный паспорт',
      'Миграционная карточка / подтверждение въезда',
      'Обратный билет',
    ],
    notes: 'Внимательно проверяйте дату и количество дней, проставленных в штампе при прохождении контроля.',
  },
  postEntry: {
    registrationRequired: false,
    extensionPossible: true,
    notes: 'Продление пребывания оформляется в миграционных органах до истечения первоначального срока.',
  },
  contacts: [
      {
          "name": "Посольство Федеративной Республики Нигерия в Москве",
          "type": "embassy",
          "address": "Москва, Мамоновский пер., 5",
          "phone": "+7 495 699 40 52 / +7 495 699 40 54",
          "website": "https://nigeriaembassy.ru"
      },
      {
          "name": "Посольство РФ в Нигерии (Абуджа)",
          "type": "consulate",
          "address": "Abuja, Plot 1119, Constitution Ave, Central Business District",
          "phone": "+234 9 462 0500",
          "emergencyPhone": "+234 803 123 0312",
          "website": "https://nigeria.mid.ru"
      }
  ],
  sources: [
    {
      title: 'Официальный регламент въезда',
      organization: 'Министерство иностранных дел и миграционная служба',
      url: "https://evisa.immigration.gov.ng/",
      dateChecked: '2026-11-04',
      reliability: 'government_portal',
      note: 'Сверено с первичными государственными регламентами на 04.11.2026',
    },
  ],
  verification: {
    lastChecked: '4 ноября 2026',
    status: 'confirmed',
    officialSourcesCount: 2,
  },
  publicationState: "ready_for_technical_qa",
  editorialSections: [
      {
          "number": 1,
          "title": "Краткий ответ и доступные способы въезда",
          "body": "Туристическая виза F5A заранее: eVisa через NIS либо отдельная консульская процедура. Работу по визе F5A осуществлять нельзя."
      },
      {
          "number": 2,
          "title": "Виза: срок действия, допустимое пребывание, кратность",
          "body": "F5A — однократная, действует 90 дней с даты выдачи, пребывание максимум 30 дней, не продлевается.\n\n**Сборы и способы оплаты.** Официальный NIS SLA-2026 Appendix I: базовая однократная виза для граждан Russia 134 USD. Многократный тариф 250 USD относится к другим подходящим категориям, не превращает F5A в multivisa.\n\n**Не смешивать:** срок действия визового документа, срок нахождения на территории, число въездов, дату начала действия и срок подачи анкеты."
      },
      {
          "number": 3,
          "title": "Загранпаспорт",
          "body": "Минимум 6 месяцев; в старом SLA также две чистые визовые страницы, хотя свежая карточка F5A не повторяет число — практический запас две."
      },
      {
          "number": 4,
          "title": "Полный доступный чек-лист документов",
          "body": "Фото, паспорт, обратный билет, отель либо адрес проживания, банковская выписка за 180 дней; детям до 18 — свидетельство о рождении и согласие родителей в соответствующих случаях."
      },
      {
          "number": 5,
          "title": "Санитарные требования и страхование",
          "body": "Жёлтая лихорадка фигурирует в отдельном московском консульском списке; её нельзя автоматически приравнивать к обязательному документу при любом eVisa-маршруте без санитарной проверки. Полис рекомендуется."
      },
      {
          "number": 6,
          "title": "До поездки: порядок действий",
          "body": "1. Выбрать именно F5A Tourism Visa на официальном evisa.immigration.gov.ng.\n2. Подготовить фото, паспорт, билеты, жильё и выписку за 180 дней.\n3. Оплатить базовый тариф и подтверждённые кабинетом комиссии; NIS SLA даёт ориентир 48 часов при отсутствии дополнительных возражений.\n4. Получить электронный визовый документ, сохранить и показать на границе."
      },
      {
          "number": 7,
          "title": "На границе",
          "body": "После одобрения получить и сохранить eVisa-сертификат; визовый офицер принимает окончательное решение. Отдельно NIS публикует электронные landing/exit cards, требование для конкретного аэропорта проверять."
      },
      {
          "number": 8,
          "title": "Транзит без выхода и транзит с въездом",
          "body": "Отдельный визовый режим для landside транзита; F5A не считать транзитной категорией."
      },
      {
          "number": 9,
          "title": "После въезда, регистрация, продление, выезд",
          "body": "F5A непродлеваемая. Въезд и выезд строго в пределах 30-дневного пребывания."
      },
      {
          "number": 10,
          "title": "Граница подтверждения: что нужно проверить дополнительно",
          "body": "Итоговый checkout с комиссиями и способы оплаты российскими/зарубежными картами не подтверждены. Базовая ставка 134 USD подтверждена официальным SLA.\n\n**Правило вывода на сайте:** если конкретный числовой параметр отсутствует в доступном источнике, вывести «уточняется» либо скрыть параметр. Не превращать неизвестные требования в `false` или `0`. Статус `CORE_VERIFIED` относится только к подтверждённому основному режиму, не означает автоматическую готовность всех деталей к релизу."
      },
      {
          "number": 11,
          "title": "Источники",
          "body": "- [1] https://immigration.gov.ng/info-center/tourism-visa-f5a/\n- [2] https://immigration.gov.ng/wp-content/uploads/2026/04/SERVICE-LEVEL-AGREEMENT-2026_.pdf\n- [3] https://evisa.immigration.gov.ng/\n- [4] https://lecard.immigration.gov.ng/\n\n**Консульская переписка:** Предметного письма посольства Нигерии о тарифе РФ в архиве нет; официальные национальные данные NIS. Содержание письма применяется только по прямо раскрытым вопросам; полный оригинал и внутренние идентификаторы хранятся отдельно от публичного набора."
      }
  ],
};
