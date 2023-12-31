<script setup lang="ts">
import smoothScroll from '@/helpers/smoothScrollHelper';
import { useInput } from '@/stores/search';
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const inputMain = useInput()
const myBlock = ref<HTMLElement | null>(null)

const filteredCards = computed(() => {
  return inputMain.filteredProducts
})
const error = computed(() => {
  return inputMain.error
})

const mouseDown1 = (event: MouseEvent) => {
  if (myBlock.value && event.target instanceof HTMLElement && !myBlock.value.contains(event.target) && !event.target.closest('.dropdown-cards')) {
    inputMain.change();
  }
};
onMounted(async () => {
  document.addEventListener("mousedown", mouseDown1);
  await inputMain.getProducts()
})
onUnmounted(() => {
  document.removeEventListener("mousedown", mouseDown1)
})
const router = useRouter()

const { smoothScrollToTop } = smoothScroll()
const goToCard = (cardId: number) => {
  router.push(`/products/${cardId}`);
  inputMain.searchThis();
  smoothScrollToTop()
};
</script>

<template>
  <Transition name="slide-fade">
    <div ref="myBlock" v-if="inputMain.flCatalog && (filteredCards.length > 0 || error)" class="dropdown-cards" :class="[inputMain.focusStyle ? 'border_focus' : '']">
      <div v-if="error" style="color: var(--purple-color); padding: 10px;" class="error_drop">
        Нет товаров
      </div>
      <div v-else class="cards_dropdown">
        <div v-for="card in filteredCards" :key="card.id" @click="goToCard(card.id)" class="card_dropdown"
          style="cursor: pointer;">
          <img class="img" :src="card.img" alt="">
          <div class="text_card_dropdown">
            <div class="text_card_main_dropdown">
              <span style="font-weight: 500;" class="size_6">{{ card.title }}</span>
              <span style="font-weight: 500; white-space: nowrap;" class="size_6">{{ card.price }} ₽</span>
            </div>
            <div class="more_dropdown">
              <div class="element_dropdown">
                <img :src="card.accumSvg" alt="">
                <span class="size_8">{{ card.accum }}</span>
              </div>
              <div class="element_dropdown">
                <img :src="card.powerSvg" alt="">
                <span class="size_8">{{ card.power }}</span>
              </div>
              <div class="element_dropdown">
                <img :src="card.speedSvg" alt="">
                <span class="size_8">{{ card.speed }}</span>
              </div>
              <div class="element_dropdown">
                <img :src="card.timeSvg" alt="">
                <span class="size_8">{{ card.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>


<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.dropdown-cards {
  border-radius: 5px;
  background: #FFF;
  box-shadow: 0px 20px 40px 0px rgba(30, 33, 142, 0.10);
  position: absolute;
  z-index: 1001;
  width: 100%;
  height: auto;
  max-height: 320px;
  top: 50px;
  left: 0;

  .cards_dropdown {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    align-items: flex-start;
    height: auto !important;
    max-height: 315px;
    overflow-y: scroll;

    .card_dropdown {
      width: 100%;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--gray-200-color);
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 18px;

      &:last-child {
        padding-bottom: 0;
        border-bottom: unset;
      }

      .img {
        width: 68px;
        height: 56px;
        background: var(--gray-200-color);
        border-radius: 5px;
      }

      .text_card_dropdown {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        gap: 7px;

        .text_card_main_dropdown {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 20px;
        }

        .more_dropdown {
          display: flex;
          align-items: center;
          // justify-content: space-between;
          gap: 20px;
          width: 100%;
          flex-wrap: wrap;

          .element_dropdown {
            display: flex;
            align-items: center;
            gap: 10px;
          }
        }
      }
    }
  }
}

.border_focus{
  border: 1px solid var(--purple-color);
  animation: blink 1s ease 2 forwards;
}

@keyframes blink {
  0%, 100% {
    border-color: transparent;
  }
  50% {
    border-color: var(--purple-color);
  }
}

@media screen and (max-width: 1200px){
  .dropdown-cards .cards_dropdown .card_dropdown{
    align-items: flex-start;
  }
}
@media screen and (max-width: 992px){
  .dropdown-cards .cards_dropdown .card_dropdown{
    align-items: center;
  }
}
</style>