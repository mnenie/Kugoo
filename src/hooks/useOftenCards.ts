import type { ICards } from "@/types/cards.interface"
import axios from "axios"
import {onMounted, ref} from 'vue'
export default function useOftenCards() {
  const cardsOften = ref<ICards[]>([])

  const loadOften = async () => {
    try {
      const response = await axios.get(`https://kugoo-ffd41-default-rtdb.europe-west1.firebasedatabase.app/scooters/cardsOften.json`)
      cardsOften.value = response.data
    } catch(error) {
      console.log(error)
    }
  }
  onMounted(loadOften)
  return {
    cardsOften
  }
}