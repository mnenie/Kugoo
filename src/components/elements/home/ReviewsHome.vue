<script setup lang="ts">
import SwiperReviews from '@/components/UI/swiper/SwiperReviews.vue'
</script>

<template>
  <div class="container_lg">
    <div class="reviews">
      <h1 class="size_1">Отзывы и фото реальных покупателей</h1>
      <a style="text-decoration: none;" target="_blank"
        href="https://market.yandex.ru/shop--kugoo-russia/1071730/reviews">
        <LinkArrow>Читать отзывы на Яндекс</LinkArrow>
      </a>
      <SwiperReviews />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reviews {
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
    text-align: center;
    margin-bottom: 17px;
  }

  & a {
    margin: 0 auto;
    display: block;
    margin-bottom: 53px;
  }
}

@media screen and (max-width: 768px){
  .reviews{
    & a{
      margin-bottom: 30px;
    }
  }
}
@media screen and (max-width: 600px){
  .reviews{
   padding-bottom: 60px;
  }
}
</style>