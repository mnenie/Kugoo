<script setup lang="ts">
import { useComparison } from '@/stores/comparison';
const comparison = useComparison()
</script>

<template>
  <div class="container">
    <div class="top_part">
      <h1 class="size_1">Сравнение</h1>
      <p class="size_6">Здесь вы можете сравнить выбранные товары по различным параметрам и характеристикам, и выбрать
        оптимальное решение</p>
      <div class="btns">
        <ButtonMore @click="comparison.removeAllComparisonProducts()">Очистить товары</ButtonMore>
        <span class="size_7" style="color: var(--purple-color);">Возможность скрола товаров в блоке сравнения</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top_part {
  margin-top: 50px;
  margin-bottom: 80px;

  & h1 {
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    color: var(--black-color);
    margin-bottom: 17px;
  }

  & p {
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: var(--black-color);
    margin-bottom: 30px;
    max-width: 466px;
  }

  .btns {
    display: flex;
    align-items: flex-end;
    gap: 20px;
    justify-content: space-between;
  }
}

@media screen and (max-width: 768px){
  .top_part{
    margin-top: 40px;
    margin-bottom: 60px;
  }
}
</style>