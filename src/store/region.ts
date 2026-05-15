import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Region {
  name: string
  code: string
  pinyin: string
  letter: string
}

export const useRegionStore = defineStore('region', () => {
  const selectedRegion = ref<Region>({
    name: '全国',
    code: '00',
    pinyin: 'quanguo',
    letter: 'Q'
  })

  const setRegion = (region: Region) => {
    selectedRegion.value = region
  }

  const getRegion = () => {
    return selectedRegion.value
  }

  return {
    selectedRegion,
    setRegion,
    getRegion
  }
}, {
  persist: true
})
