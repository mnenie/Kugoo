<script setup lang="ts">
import type { ICards } from '@/types/cards.interface';
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
import ProductDetails from './ProductDetails.vue';
import { CATALOG_ROUTE} from '@/utils/consts';
import { ref } from 'vue';


const title = ref<string>('Каталог')
const title2 = ref<string>('Электросамокаты')
const props = defineProps<{
  card: ICards | null, 
  active: boolean,
}>()
const emit = defineEmits<{
  (e: 'changeImg', img: string): void
}>()
</script>

<template>
  <div>
    <div v-if="card">
      <NavigationTopPage :title="title" :path="CATALOG_ROUTE" :title2="title2" :title3="card.title" />
      <div class="container">
        <ProductDetails :card="card" @change-img="emit('changeImg', $event)" :active="active" />
      </div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; margin: 50px 0;" v-else>
      <span style="color: var(--pink-color); text-align: center;" class="size_6">Информация о товаре не найдена</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>