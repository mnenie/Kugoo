<script setup lang="ts">
import FilterTop from '@/components/elements/catalog/FilterTop.vue';
import BannerScooters from '@/components/elements/catalog/scooters/BannerScooters.vue'
import ScootersCatalogFilter from '@/components/elements/catalog/scooters/ScootersCatalogFilter.vue';
import NavigationTopPage from '@/components/UI/links/NavigationTopPage.vue';
import FilterCatalog from '@/components/elements/catalog/FilterCatalog.vue';
import Alert from '@/components/UI/Alert.vue';
import { ref, onUnmounted } from 'vue';
import useFilterCatalog from '@/hooks/useFilterCatalog';
import { CATALOG_ROUTE } from '@/utils/consts';

const title = ref<string>('Каталог')
const range = ref([0, 500000])
const items = ref([])
const tempItems = ref([])
const { filters, filterProductsByTop, filterProductsPanel, clearFilters, filterProductsByPrice } = useFilterCatalog(items, tempItems, range)

onUnmounted(() => {
  clearFilters()
})

const bannerTitle = ref('Гироскутеры')
</script>

<template>
  <NavigationTopPage :title="title" :path="CATALOG_ROUTE" :title2="'Гироскутеры'" />
  <BannerScooters :banner-title="bannerTitle" />
  <div class="container">
    <FilterTop :filters="filters" @filter-cards="filterProductsByTop" />
    <div class="blocks">
      <FilterCatalog :range="range" @update:range="filterProductsByPrice" @onChecked="filterProductsPanel" />
      <ScootersCatalogFilter v-if="items.length > 0" :items="items" />
      <div style="width: 100%;" v-else class="text">
        <p class="size_5"
          style="text-align: center; width: 100%; margin-top: 50px; margin-bottom: 50px; color: var(--pink-color);">Ничего
          не найдено по товарам гироскутеры</p>
      </div>
    </div>
  </div>
  <Alert />
</template>

<style lang="scss" scoped>
.blocks {
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 100px;
}

@media screen and (max-width: 992px){
  .blocks{
    margin-bottom: 80px;
  }
}
@media screen and (max-width: 860px) {
  .blocks {
    flex-direction: column;
    gap: 20px;
  }
}
@media screen and (max-width: 600px){
  .blocks{
    margin-bottom: 60px;
  }
}
</style>