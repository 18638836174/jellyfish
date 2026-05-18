import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface SpaceInfo {
  id: string
  coverImage: string
  name: string
  description: string
  contact: {
    phone: string
    wechat: string
  }
  address: string
  tags: string[]
  createTime: string
  updateTime: string
}

export const useSpaceStore = defineStore('space', () => {
  const spaceInfo = ref<SpaceInfo>({
    id: 'space_001',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=750&q=80',
    name: '老王的水果铺',
    description: '10年老店，专注新鲜水果配送！主营各类国产精品水果，进口热带水果。所有水果当天采摘，隔日送达，新鲜看得见！支持同城配送，买满99元免配送费，欢迎选购~',
    contact: {
      phone: '13812345678',
      wechat: 'laowang_fruit888'
    },
    address: '广东省广州市天河区珠江新城花城大道88号优托邦商场B1层水果区A-12号铺',
    tags: ['10年老店', '新鲜直达', '同城配送', '坏果包赔'],
    createTime: new Date().toISOString(),
    updateTime: new Date().toISOString()
  })

  const setSpaceInfo = (info: Partial<SpaceInfo>) => {
    spaceInfo.value = {
      ...spaceInfo.value,
      ...info,
      updateTime: new Date().toISOString()
    }
  }

  const getSpaceInfo = () => {
    return spaceInfo.value
  }

  return {
    spaceInfo,
    setSpaceInfo,
    getSpaceInfo
  }
}, {
  persist: true
})
