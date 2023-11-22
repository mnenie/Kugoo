import type { ICategories } from "@/types/categories.interface";
import { ref } from "vue";

export const homeCategories = ref<ICategories[]>([
  {
    id: 1,
    img: '/img/categories/1.png',
    title: 'Робот-пылесоссы',
    body: 'от 11 300 ₽',
    more: 'Робот-пылесос — пылесос, предназначенный для автоматической уборки помещений с минимальным участием человека или без него.'
  },
  {
    id: 2,
    img: '/img/categories/2.png',
    title: 'Электровелосипеды',
    body: 'от 29 900 ₽',
    more: 'Электровелосипед представляет собой велосипед с электрическим приводом, который частично или полностью обеспечивает его движение.'
  },
  {
    id: 3,
    img: '/img/categories/3.png',
    title: 'Весы',
    body: 'от 4 600 ₽',
    more: 'Электронные весы - предназначенные для взвешивания товара, передачи информации о цене и стоимости товара в кассовый терминал (кассовую программу) и на дисплей.',
  },
  {
    id: 4,
    img: '/img/categories/1.png',
    title: 'Робот-пылесоссы',
    body: 'от 11 300 ₽',
    more: 'Робот-пылесос — пылесос, предназначенный для автоматической уборки помещений с минимальным участием человека или без него.'
  },
  {
    id: 5,
    img: '/img/categories/3.png',
    title: 'Весы',
    body: 'от 4 600 ₽',
    more: 'Электронные весы - предназначенные для взвешивания товара, передачи информации о цене и стоимости товара в кассовый терминал (кассовую программу) и на дисплей.',
  },
  {
    id: 6,
    img: '/img/categories/1.png',
    title: 'Робот-пылесоссы',
    body: 'от 11 300 ₽',
    more: 'Робот-пылесос — пылесос, предназначенный для автоматической уборки помещений с минимальным участием человека или без него.'
  },
  {
    id: 7,
    img: '/img/categories/2.png',
    title: 'Электровелосипеды',
    body: 'от 29 900 ₽',
    more: 'Электровелосипед представляет собой велосипед с электрическим приводом, который частично или полностью обеспечивает его движение.'

  },
  {
    id: 8,
    img: '/img/categories/3.png',
    title: 'Весы',
    body: 'от 4 600 ₽',
    more: 'Электронные весы - предназначенные для взвешивания товара, передачи информации о цене и стоимости товара в кассовый терминал (кассовую программу) и на дисплей.',
  },
])
