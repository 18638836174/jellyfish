<template>
  <view class="container">
    <custom-nav title="选择省市" @back="goBack" />

    <scroll-view class="content" scroll-y :scroll-into-view="scrollIntoView">
      <view class="current-location" v-if="!searchKeyword">
        <text class="section-title">当前定位</text>
        <view class="current-city" @click="selectRegion(regionStore.selectedRegion)">
          <text class="city-name">{{ regionStore.selectedRegion.name }}</text>
          <text class="city-code">{{ regionStore.selectedRegion.code }}</text>
        </view>
      </view>

      <view class="hot-cities" v-if="!searchKeyword" id="letter-热">
        <text class="section-title">热门省市</text>
        <view class="hot-list">
          <view v-for="(city, index) in hotCities" :key="index" class="hot-item" @click="selectRegion(city)">
            {{ city.name }}
          </view>
        </view>
      </view>

      <view class="search-result" v-if="searchKeyword">
        <view v-for="(region, index) in searchResult" :key="index" class="result-item" @click="selectRegion(region)">
          <text class="result-name">{{ region.name }}</text>
          <text class="result-pinyin">{{ region.pinyin }}</text>
        </view>
        <view class="no-result" v-if="searchResult.length === 0">
          <text>未找到匹配结果</text>
        </view>
      </view>

      <view v-if="!searchKeyword">
        <view v-for="(group, gIndex) in regionGroups" :key="gIndex">
          <view class="letter-title" :id="'letter-' + group.letter">{{ group.letter }}</view>
          <view class="letter-list">
            <view v-for="(region, rIndex) in group.list" :key="rIndex" class="letter-item"
              @click="selectRegion(region)">
              {{ region.name }}
            </view>
          </view>
        </view>
      </view>
    </scroll-view>

    <view class="letter-nav" v-if="!searchKeyword">
      <view v-for="letter in availableLetters" :key="letter" class="letter-btn" @click="scrollToLetter(letter)">
        {{ letter }}
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRegionStore, type Region } from '@/store'
import {
  hotCities,
  getRegionGroups,
  getLetters,
  searchRegions
} from '@/utils/region'

const regionStore = useRegionStore()

const searchKeyword = ref('')
const regionGroups = ref<any[]>([])
const letters = ref<string[]>([])
const scrollIntoView = ref('')

const searchResult = computed(() => {
  const allRegions = [
    ...hotCities,
    ...regionGroups.value.flatMap((g: any) => g.list)
  ]
  return searchRegions(searchKeyword.value, allRegions)
})

const availableLetters = computed(() => {
  return ['热', ...regionGroups.value.map((g: any) => g.letter)]
})

onMounted(() => {
  regionGroups.value = getRegionGroups()
  letters.value = getLetters()
})

const selectRegion = (region: Region) => {
  regionStore.setRegion(region)
  uni.showToast({
    title: `已选择：${region.name}`,
    icon: 'none'
  })
  setTimeout(() => {
    goBack()
  }, 500)
}

const goBack = () => {
  uni.navigateBack()
}

const scrollToLetter = (letter: string) => {
  scrollIntoView.value = 'letter-' + letter
  setTimeout(() => {
    scrollIntoView.value = ''
  }, 100)
}
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}

.container {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.content {
  height: calc(100vh - 120rpx);
  padding-bottom: 60rpx;
}

.current-location {
  padding: 24rpx;

  .section-title {
    font-size: 24rpx;
    color: #999;
    margin-bottom: 16rpx;
    display: block;
  }

  .current-city {
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 28rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .city-name {
      font-size: 32rpx;
      color: #333;
      font-weight: 500;
    }

    .city-code {
      font-size: 24rpx;
      color: #1890ff;
    }
  }
}

.hot-cities {
  padding: 0 24rpx 24rpx;

  .section-title {
    font-size: 24rpx;
    color: #999;
    margin-bottom: 16rpx;
    display: block;
  }

  .hot-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20rpx;
  }

  .hot-item {
    background-color: #ffffff;
    border-radius: 8rpx;
    padding: 20rpx 32rpx;
    font-size: 28rpx;
    color: #333;
    box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.04);
  }
}

.search-result {
  padding: 0 24rpx;

  .result-item {
    background-color: #ffffff;
    border-radius: 12rpx;
    padding: 28rpx;
    margin-bottom: 16rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .result-name {
      font-size: 30rpx;
      color: #333;
    }

    .result-pinyin {
      font-size: 24rpx;
      color: #999;
    }
  }

  .no-result {
    text-align: center;
    padding: 60rpx 0;
    color: #999;
    font-size: 28rpx;
  }
}

.letter-title {
  background-color: #f5f5f5;
  padding: 12rpx 24rpx;
  font-size: 24rpx;
  color: #999;
  font-weight: 600;
}

.letter-list {
  display: flex;
  flex-wrap: wrap;
  padding: 16rpx 24rpx;
  gap: 20rpx;

  .letter-item {
    width: calc(25% - 15rpx);
    background-color: #ffffff;
    border-radius: 8rpx;
    padding: 24rpx 0;
    text-align: center;
    font-size: 28rpx;
    color: #333;
    box-sizing: border-box;
  }
}

.letter-nav {
  position: fixed;
  right: 8rpx;
  top: 200rpx;
  z-index: 100;

  .letter-btn {
    font-size: 20rpx;
    color: #1890ff;
    padding: 6rpx 4rpx;
    text-align: center;
  }
}
</style>