<script lang="ts" setup>
import { ref } from 'vue';
import HeaderTop from './header/HeaderTop.vue'
import HeaderMain from './header/HeaderMain.vue'
import HeaderBottom from './header/HeaderBottom.vue';
import { ABOUT_ROUTE, BLOGS_ROUTE, CONTACTS_ROUTE, COOPERATION_ROUTE, DELIVERY_ROUTE, SERVICE_ROUTE, STOCKS_ROUTE, TEST_ROUTE, FAVOURITES_ROUTE, COMPARISON_ROUTE } from '@/utils/consts';
import { useRouter } from 'vue-router';
import HeaderMobile from './header/HeaderMobile.vue';
import { useLimitation } from '@/stores/limitation';
import { AUTH_ROUTE } from '../../utils/consts';
const router = useRouter();

const items = ref([
  {
    itemTo: 'Сервис',
    pathTo: SERVICE_ROUTE
  },
  {
    itemTo: 'Сотрудничество',
    pathTo: COOPERATION_ROUTE
  },
])

const svg = ref([
  {
    pathSvg: 'https://github.com/mnenie?tab=repositories',
    svgItem: '/icons/viber.svg'
  },
  {
    pathSvg: 'https://github.com/mnenie?tab=repositories',
    svgItem: '/icons/whatsapp.svg'
  },
  {
    pathSvg: 'https://vk.com/mnenie_mozhno',
    svgItem: '/icons/telegram.svg'
  },
])
const shopItems = ref([
  { id: 1, img: '/icons/header/smile.svg' },
  { id: 2, img: '/icons/glasses.svg' },
  { id: 3, img: '/icons/balance.svg' },
  { id: 4, img: '/icons/heart.svg' },
])

const menuItems = ref([
  {
    id: 1,
    routeTo: ABOUT_ROUTE,
    about: 'О магазине'
  },
  {
    id: 2,
    routeTo: DELIVERY_ROUTE,
    about: 'Доставка и оплата',
    more: 'Доступна рассрочка'
  },
  {
    id: 3,
    routeTo: TEST_ROUTE,
    about: 'Тест-драйв'
  },
  {
    id: 4,
    routeTo: BLOGS_ROUTE,
    about: 'Блог'
  },
  {
    id: 5,
    routeTo: CONTACTS_ROUTE,
    about: 'Контакты'
  },
  {
    id: 6,
    routeTo: STOCKS_ROUTE,
    about: 'Акции',
    svg: '/icons/persent.svg'
  },
])
const limitation = useLimitation()
const rightPart = (index: number) => {
  if(shopItems.value[index].id === 1){
    router.push(AUTH_ROUTE)
  }
  if (shopItems.value[index].id === 2) {
    limitation.changeShowLimitation()
  }
  if (shopItems.value[index].id === 3) {
    router.push(COMPARISON_ROUTE);
  }
  if (shopItems.value[index].id === 4) {
    router.push(FAVOURITES_ROUTE);
  }
};


</script>

<template>
  <header>
    <div class="header_main">
      <HeaderTop :items="items" :svg="svg" />
      <HeaderMain @right-part="rightPart" :shop-items="shopItems" />
      <HeaderBottom :menu-items="menuItems" />
    </div>
    <HeaderMobile class="mobile" />
  </header>
</template>

<style lang="scss" scoped>
header {
  .mobile {
    display: none;
  }

  .header_main {
    display: block;
    min-height: 184px;
  }
}

@media screen and (max-width: 540px) {
  header {
    .mobile {
      display: flex;
    }

    .header_main {
      display: none;
    }
  }
}
</style>