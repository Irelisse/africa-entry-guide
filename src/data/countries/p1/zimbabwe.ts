import type { CountryPageData } from '../../../types/country-page';

export const zimbabweData: CountryPageData = {
  slug: 'zimbabwe',
  nameRu: 'Зимбабве',
  nameEn: 'Zimbabwe',
  iso2: 'ZW',
  iso3: 'ZWE',
  flagCode: 'ZW',
  region: 'Южная Африка',
  capital: 'Хараре',
  heroImage: '/images/countries/zimbabwe.webp',
  heroCaption: "Древние каменные башни Великого Зимбабве среди гранитных скал на закате",
  criticalNotice: {
      "title": "Виза категории B по прилёте (30 USD) и KAZA Univisa",
      "description": "Россия входит в категорию В визового режима Зимбабве (виза по прибытии без предварительного согласования). Однократная виза стоит 30 USD, двукратная — 45 USD. Единая KAZA Univisa (50 USD) позволяет посещать и Зимбабве, и Замбию. Оплата производится наличными долларами США на контроле.",
      "type": "info"
  },
  currency: {
    code: 'USD',
    name: 'Доллар США / Золотой ZWG',
    symbol: '$',
  },
  coordinates: {
    countryLat: -19.0154,
    countryLon: 29.1549,
    capitalLat: -17.8252,
    capitalLon: 31.0335,
  },
  quickSummary: {
    visaStatusRu: 'Виза по прибытии',
    shortDescriptionRu: "Граждане России получают визу по прибытии в аэропортах и на КПП Зимбабве (30 USD однократная, 45 USD двукратная) либо единую KAZA Univisa (50 USD) для Замбии и Зимбабве.",
    availableRoutesList: ["Виза по прибытии (Single Entry)","Единая виза KAZA Univisa (Зимбабве + Замбия)"],
    maxStay: 'до 30 дней',
    feeFrom: 'от 30 USD',
    passportValidity: 'не менее 6 месяцев от даты въезда',
    lastVerifiedDate: '4 ноября 2026',
    confidence: 'confirmed',
  },
  routes: [
      {
          "id": "zw-voa-single",
          "name": "Виза по прибытии (Single Entry)",
          "routeType": "visa_on_arrival",
          "priorityBadge": "Стандартный въезд",
          "availableForRussianCitizens": true,
          "purpose": "Туризм, сафари в парке Хванге, водопад Виктория",
          "maxStay": "до 30 дней",
          "validity": "30 дней с момента въезда",
          "entries": "single",
          "fee": {
              "amount": 30,
              "currency": "USD",
              "paymentMethod": "Наличными долларами США на контроле",
              "note": "30 USD за однократный въезд."
          },
          "processingTime": "5–10 минут на КПП",
          "applyWhere": "Аэропорты Хараре (HRE), Виктория-Фолс (VFA), Булавайо (BUQ) и наземные границы",
          "format": "sticker",
          "description": "Визовый стикер вклеивается в паспорт на паспортном контроле."
      },
      {
          "id": "zw-kaza",
          "name": "Единая виза KAZA Univisa (Зимбабве + Замбия)",
          "routeType": "visa_on_arrival",
          "priorityBadge": "Для поездок между двумя странами",
          "availableForRussianCitizens": true,
          "purpose": "Туризм в Зимбабве и Замбии",
          "maxStay": "до 30 дней",
          "validity": "30 дней",
          "entries": "multiple",
          "fee": {
              "amount": 50,
              "currency": "USD",
              "paymentMethod": "Наличными долларами США",
              "note": "50 USD за обе страны."
          },
          "processingTime": "На контроле",
          "applyWhere": "Аэропорт Виктория-Фолс (VFA), аэропорт Хараре, мост Victoria Falls Bridge",
          "format": "sticker",
          "description": "Идеально для осмотра водопада Виктория с двух берегов."
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
      state: 'conditional',
      details: "Прививка обязательна только при въезде из зон риска.",
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
      requiredDirectFromRussia: false,
      requiredFromRiskCountries: true,
      note: "Прививка обязательна только при въезде из зон риска.",
    },
    medicalInsuranceRequired: false,
    notes: "Рекомендуется полис с покрытием сафари и активного туризма.",
  },
  departureChecklist: [
      "Загранпаспорт со сроком более 6 месяцев",
      "Наличные доллары США (в Зимбабве доллар — главная валюта расчётов)",
      "Подтверждение бронирования гостиницы или сафари-тура",
      "Обратные авиабилеты"
  ],
  applicationSteps: [
      {
          "stepNumber": 1,
          "title": "Загранпаспорт",
          "description": "Срок действия от 6 месяцев, не менее 2 свободных страниц."
      },
      {
          "stepNumber": 2,
          "title": "Наличные доллары",
          "description": "Подготовьте точную сумму 30 или 50 USD без сдачи чистыми купюрами."
      },
      {
          "stepNumber": 3,
          "title": "Иммиграционный бланк",
          "description": "Заполните въездную карточку и оплатите визу офицеру на стойке."
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
          "name": "Посольство Республики Зимбабве в Москве",
          "type": "embassy",
          "address": "Москва, ул. Мытная, 3, кв. 29–31",
          "phone": "+7 499 230 17 87",
          "website": "https://zimembassy.ru"
      },
      {
          "name": "Посольство РФ в Зимбабве (Хараре)",
          "type": "consulate",
          "address": "Harare, 70 Fife Ave",
          "phone": "+263 242 701 957 / +263 242 701 958",
          "emergencyPhone": "+263 772 135 150",
          "website": "https://zimbabwe.mid.ru"
      }
  ],
  sources: [
    {
      title: 'Официальный регламент въезда',
      organization: 'Министерство иностранных дел и миграционная служба',
      url: "https://www.kdmid.ru",
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
          "body": "Россия — категория B: туристическая виза по прибытии в официальных пунктах въезда либо предварительная eVisa. Московское посольство визы не выдаёт."
      },
      {
          "number": 2,
          "title": "Виза: срок действия, допустимое пребывание, кратность",
          "body": "Single один въезд; double два въезда, действительна до 90 дней с даты выдачи по сайту посольства. Multiple оформляется в местном иммиграционном офисе, не на границе.\n\n**Сборы и способы оплаты.** Посольство в Москве: single 30 USD, double 45 USD, multiple 55 USD (последняя не выдаётся на въезде).\n\n**Не смешивать:** срок действия визового документа, срок нахождения на территории, число въездов, дату начала действия и срок подачи анкеты."
      },
      {
          "number": 3,
          "title": "Загранпаспорт",
          "body": "Паспорт действителен минимум 6 месяцев с даты въезда, достаточные чистые страницы для визы и штампов."
      },
      {
          "number": 4,
          "title": "Полный доступный чек-лист документов",
          "body": "Две фотографии паспортного типа, оригинал паспорта, бронь проживания/маршрут; по запросу билет на выезд и подтверждение средств."
      },
      {
          "number": 5,
          "title": "Санитарные требования и страхование",
          "body": "Жёлтая лихорадка условно по маршруту через страны риска; без доказательства не объявлять универсальной обязанностью."
      },
      {
          "number": 6,
          "title": "До поездки: порядок действий",
          "body": "1. Выбрать visa on arrival (категория B) либо eVisa заранее.\n2. Приготовить паспорт 6+ месяцев и две фотографии.\n3. На границе оплатить 30 USD single или 45 USD double, проверить штамп.\n4. Для Замбии и Зимбабве сравнить KAZA $50 при использовании разрешённого пункта въезда."
      },
      {
          "number": 7,
          "title": "На границе",
          "body": "Виза по прибытии оформляется на официальных пунктах; eVisa предварительно по официальному порталу. Для поездки через Замбию может подойти отдельная KAZA UNIVISA."
      },
      {
          "number": 8,
          "title": "Транзит без выхода и транзит с въездом",
          "body": "Airside-транзит и выход через пограничный контроль различать; KAZA допускает только перечисленные пункты въезда и маршруты."
      },
      {
          "number": 9,
          "title": "После въезда, регистрация, продление, выезд",
          "body": "Продление и особые многократные визы оформляются через Immigration Department на месте по отдельной процедуре."
      },
      {
          "number": 10,
          "title": "Граница подтверждения: что нужно проверить дополнительно",
          "body": "Наличие KAZA на конкретном пункте и динамические условия электронного визового кабинета проверять перед поездкой.\n\n**Правило вывода на сайте:** если конкретный числовой параметр отсутствует в доступном источнике, вывести «уточняется» либо скрыть параметр. Не превращать неизвестные требования в `false` или `0`. Статус `CORE_VERIFIED` относится только к подтверждённому основному режиму, не означает автоматическую готовность всех деталей к релизу."
      },
      {
          "number": 11,
          "title": "Источники",
          "body": "- [1] https://zimmoscow.ru/visa\n- [2] https://www.evisa.gov.zw/faq.html\n- [3] https://www.zambiaimmigration.gov.zm/kaza-univisa/\n\n**Консульская переписка:** Официальный сайт посольства Зимбабве в Москве; прямого отдельного email по цене в текущем архиве нет. Содержание письма применяется только по прямо раскрытым вопросам; полный оригинал и внутренние идентификаторы хранятся отдельно от публичного набора."
      }
  ],
};
