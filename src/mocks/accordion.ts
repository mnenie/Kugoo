import type { IAccordion } from '@/types/accordion.interface'

export const accordion: IAccordion[] = [
  {
    id: 1,
    expanded: true,
    controls: 'collapseOne',
    target: '#collapseOne',
    title: 'Есть ли доставка в выходные? А в вечернее время?',
    body: 'Доставка товаров по Москве осуществляется собственной службой доставки 7 дней в неделю с 8:00 до 23:00 часов. В выходной день мы точно сможем доставить товар, который Вы закажите до 12.00 пятницы при его наличии на складе.'
  },
  {
    id: 2,
    expanded: false,
    controls: 'collapseTwo',
    target: '#collapseTwo',
    title: 'Сколько времени занимает настройка устройства?',
    body: 'Практически все наши устройства требуют настройки перед эксплуатацией. В зависимости от модели время варьируется от 5 минут до 60 минут.'
  },
  {
    id: 3,
    expanded: false,
    controls: 'collapseThree',
    target: '#collapseThree',
    title: 'Смогу ли я самостоятельно настроить устройство?',
    body: 'Да, все электросамокаты и электровелосипеды рассчитаны на то, что вы самостоятельно сможете полностью настроить их. С электроскутерами будет сложнее. В комплекте идет инструкция и в большинстве моделей есть набор инструментов для самостоятельной настройки.'
  },
  {
    id: 4,
    expanded: false,
    controls: 'collapseFour',
    target: '#collapseFour',
    title: 'Сколько стоит доставка до моего города?',
    body: 'Стоимость доставки вы можете уточнить в разделе «Доставка», либо у нашего менеджера по телефону. Стоимость доставки рассчитывается в зависимости от города, в который осуществляется доставка. Доставка в Регионы рассчитывается от терминала транспортной компании в г. Москва до терминала в Вашем городе. Дополнительные услуги по обрешетке товара и доставки его по адресу оплачиваются отдельно по тарифам компании перевозчика.'
  },
  {
    id: 5,
    expanded: false,
    controls: 'collapseFive',
    target: '#collapseFive',
    title:
      'Как осуществляется сервисное обслуживание в моем городе? Где гарантия, что меня обслужат?',
    body: `При покупке электросамоката у нас, вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание на законодательном уровне.
    Наши сервисные центры находятся в Москве, Санкт-Петербурге и Краснодаре. В случае поломки вы можете обратиться туда.
    Если вы живете в городе, где нет нашего сервисного центра, то наш специалист поможет решить вопрос удаленно. Он сможет понять какая запчасть вышла из строя и отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист создаст трек номер и попросит вас отправить самокат транспортной компанией CDEK. Транспортировку Товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет.
    В соответствии со ст. 20 ФЗ «О защите прав потребителей» на ремонт по гарантии дается не более 45 дней. В городах, где есть наш сервисный центр ремонт проводится за 3-7 дней.`
  }
]

export const accordion2: IAccordion[] = [
  {
    id: 1,
    expanded: false,
    controls: 'collapseOne',
    target: '#collapseOne',
    title: 'Есть ли гарантия на ремонт?',
    body: 'Да, гарантия на ремонт 14 календарных дней'
  },
  {
    id: 2,
    expanded: true,
    controls: 'collapseTwo',
    target: '#collapseTwo',
    title: 'Есть ли ваш сервисный центр в моем городе?',
    body: 'Наш сервисный центр находится в Москве (ул. Ткацкая, 5 стр. 1). В случае поломки вы можете обратиться туда. Если вы живете не в Москве, то наш специалист поможет решить вопрос удаленно. Он сможет понять, какая запчасть вышла из строя, отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист попросит вас отправить самокат транспортной компанией. Транспортировку товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку товара до СЦ своими силами и за свой счет..'
  },
  {
    id: 3,
    expanded: false,
    controls: 'collapseThree',
    target: '#collapseThree',
    title: 'Как специалист может решить проблему удаленно?',
    body: 'Мы всегда стараемся помочь вам. Специалист сможет понять какая запчасть вышла из строя и отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, вас попросят привезти самокат в сервисный центр в Москве (ул. Ткацкая, 5 стр. 1) Если удаленно решить вопрос не удастся, специалист попросит вас отправить самокат транспортной компанией. Транспортировку Товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет.'
  },
  {
    id: 4,
    expanded: false,
    controls: 'collapseFour',
    target: '#collapseFour',
    title:
      'Самокат был приобретен у вас, но я нахожусь в городе, где нет вашего сервисного центра. Как вы будете, в случае чего, ремонтировать мой самокат по гарантии?',
    body: `Если вы живете в городе, где нет нашего сервисного центра, то наш специалист поможет решить вопрос удаленно. Он сможет понять какая запчасть вышла из строя и отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист попросит вас отправить самокат транспортной компанией. Транспортировку товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет.

    При транспортировке товара на ремонт/с ремонта до СЦ с помощью привлечения транспортной компании, Покупатель обязан соблюсти следующие требования:
    1. При транспортировке товар должен находиться в заводской упаковке.
    2. К товару должны быть приложены заказ-наряд, с обязательным заполнением всех граф данной формы (для юридических лиц), копия гарантийного талона, копия чека.
    3. Транспортировку Товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку Товара до СЦ своими силами и за свой счет.
    4. СЦ имеет право отказать в приеме на ремонт/допуслугу Техники в грязном состоянии.
    5. Прием Техники в ремонт/допуслугу в грязном состоянии возможен за дополнительную плату в размере 1000 (одна тысяча) руб.
    
    В соответствии со ст. 20 ФЗ «О защите прав потребителей» на ремонт по гарантии дается не более 45 дней. В городах, где есть наш сервисный центр ремонт проводится за 3-7 дней. Мы заинтересованы, чтобы вы продолжили кататься как можно скорее:)`
  },
  {
    id: 5,
    expanded: false,
    controls: 'collapseFive',
    target: '#collapseFive',
    title: 'У меня сделана гидроизоляция. Мне придется заново платить за нее после ремонта?',
    body: `Если ваш электросамокат уже со сделанной гидроизоляцией, а вид ремонта гарантийный и подразумевает нарушение герметичности отдельных элементов, то гидроизоляцию мы восстанавливаем бесплатно. Если же ремонт платный, то гидроизоляцию восстанавливаем за счет клиента.`
  },
  {
    id: 6,
    expanded: false,
    controls: 'collapseSix',
    target: '#collapseSix',
    title: 'Можете ли вы сделать ремонт по гарантии, если самокат был куплен не в вашем магазине?',
    body: `Бесплатный гарантийный ремонт электротранспорта осуществляется только в случае приобретения его в нашем магазине. Однако, мы всегда готовы помочь с ремонтом вашего электротранспорта!`
  },
  {
    id: 7,
    expanded: false,
    controls: 'collapseSeven',
    target: '#collapseSeven',
    title:
      'Как осуществляется сервисное обслуживание в моем городе? Где гарантия, что меня обслужат?',
    body: `При покупке электросамоката у нас, вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание на законодательном уровне.

    Наш сервисный центр находится в Москве (ул. Ткацкая, 5 стр. 1). В случае поломки вы можете обратиться туда.
    Если вы живете не в Москве, то наш специалист поможет решить вопрос удаленно. Он сможет понять, какая запчасть вышла из строя, отправит ее вам, если вы сможете сами заменить ее. Если удаленно решить вопрос не удастся, специалист попросит вас отправить самокат транспортной компанией. Транспортировку товара (с ремонта/на ремонт) Покупатель оплачивает самостоятельно или осуществляет доставку товара до СЦ своими силами и за свой счет.
    
    В соответствии со ст. 20 ФЗ «О защите прав потребителей» на ремонт по гарантии дается не более 45 дней. В городах, где есть наш сервисный центр, на ремонт может быть затрачено всего 3-7 дней. Мы заинтересованы, чтобы вы продолжили кататься как можно скорее:)`
  },
  {
    id: 8,
    expanded: false,
    controls: 'collapseEight',
    target: '#collapseEight',
    title: 'Осуществляете ли вы ремонт с выездом мастера на дом?',
    body: `К сожалению, такой услуги пока не предоставляем. Однако наш курьер может приехать к вам и забрать ваш электротранспорт в сервисный центр.`
  },
  {
    id: 9,
    expanded: false,
    controls: 'collapseNine',
    target: '#collapseNine',
    title: 'Какие запчасти используются при ремонте?',
    body: `В большинстве случаев мы ставим абсолютно новые запчасти. Если есть возможность поставить б/у запчасть, которая не повлияет на качество выполненной работы и дальнейшую эксплуатацию, мы обязательно предварительно обсудим это с вами.`
  },
  {
    id: 10,
    expanded: false,
    controls: 'collapseTen',
    target: '#collapseTen',
    title: 'Какие документы выдаются после завершения ремонта?',
    body: `При приёме электротранспорта в сервисный центр вам выдается акт приема-передачи техники в ремонт. После завершения ремонта вам выдается акт выполненных работ.`
  }
]
export const accordion3: IAccordion[] = [
  {
    id: 1,
    expanded: true,
    controls: 'collapseOne',
    target: '#collapseOne',
    title: 'Когда происходит отправка заказа?',
    body: 'Отправка заказа после оплаты (при желании, вы можете продавать клиенту с оплатой при получении, но у нас вы выкупаете товар перед отправкой)'
  },
  {
    id: 2,
    expanded: false,
    controls: 'collapseTwo',
    target: '#collapseTwo',
    title: 'Есть ли гарантия на товары?',
    body: 'Гарантию на электросамокаты мы даем как на опт (1 мес). В большинстве случаев этого достаточно, чтобы выявить проблему (если она есть). Вы можете перестраховаться дважды и купить сервисные книжки с годовой гарантией в сервисном центре в вашем городе (обычно стоимость книжки 300-500 руб). В Москве можете приобрести нашу сервисную книжку стоимостью 500 руб.'
  },
  {
    id: 3,
    expanded: false,
    controls: 'collapseThree',
    target: '#collapseThree',
    title: 'Сколько стоит доставка товара до клиента?',
    body: `Рассчитать срок и стоимость доставки вы можете на сайте той ТК, которую выберите, у всех есть калькулятор`
  },
  {
    id: 4,
    expanded: false,
    controls: 'collapseFour',
    target: '#collapseFour',
    title: 'Проверяется ли товар перед отправкой?',
    body: `Да, проверка на брак производится перед отправкой`
  },
  {
    id: 5,
    expanded: false,
    controls: 'collapseFive',
    target: '#collapseFive',
    title: 'Какими ТК вы отправляете заказы?',
    body: `Отправляем следующими ТК: Кит, Байкал, Главдоставка, Жолдо, Мэджик транспорт, Деловые линии, СДЭК, Энергия, Мегатранспорт`
  }
]
