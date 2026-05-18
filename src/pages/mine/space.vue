<template>
  <view class="page-container">
    <view class="custom-nav">
      <text class="nav-title">我的空间</text>
    </view>

    <scroll-view scroll-y class="main-content">
      <view class="hero-section">
        <image
          :src="currentCover"
          mode="aspectFill"
          class="hero-image"
        />
        <view class="hero-overlay">
          <view class="avatar-section">
            <view class="avatar-ring">
              <image :src="currentCover" mode="aspectFill" class="avatar-img" />
            </view>
          </view>
          <text class="shop-name">{{ currentName }}</text>
          <view class="tags-row">
            <text v-for="(tag, index) in currentTags" :key="index" class="tag">{{ tag }}</text>
          </view>
        </view>
      </view>

      <view class="white-card">
        <view class="section-title">
          <text class="section-icon">📝</text>
          <text class="section-text">店铺介绍</text>
        </view>
        <text class="description">{{ currentDescription }}</text>
      </view>

      <view class="white-card">
        <view class="section-title">
          <text class="section-icon">📱</text>
          <text class="section-text">联系方式</text>
        </view>

        <view class="contact-list">
          <view v-if="currentPhone" class="contact-item" @click="handleCall">
            <view class="contact-left">
              <text class="contact-icon">📞</text>
              <view class="contact-info">
                <text class="contact-label">手机号码</text>
                <text class="contact-value">{{ currentPhone }}</text>
              </view>
            </view>
            <text class="contact-action">拨打</text>
          </view>

          <view v-if="currentWechat" class="contact-item" @click="handleCopyWechat">
            <view class="contact-left">
              <text class="contact-icon">💬</text>
              <view class="contact-info">
                <text class="contact-label">微信号</text>
                <text class="contact-value">{{ currentWechat }}</text>
              </view>
            </view>
            <text class="contact-action">复制</text>
          </view>

          <view v-if="currentAddress" class="contact-item" @click="handleOpenMap">
            <view class="contact-left">
              <text class="contact-icon">📍</text>
              <view class="contact-info">
                <text class="contact-label">店铺地址</text>
                <text class="contact-value address">{{ currentAddress }}</text>
              </view>
            </view>
            <text class="contact-action">导航</text>
          </view>
        </view>
      </view>

      <view class="button-group">
        <view class="btn edit-btn" @click="goToEdit">
          <text class="btn-icon">✏️</text>
          <text class="btn-text">编辑空间</text>
        </view>
        <view class="btn share-btn" @click="handleShare">
          <text class="btn-icon">📤</text>
          <text class="btn-text">分享空间</text>
        </view>
      </view>

      <view class="preview-hint">
        <text class="hint-text">💡 点击上方"编辑空间"可以修改店铺信息</text>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { spaceExamples } from '@/utils/spaceExamples'

let currentCover = ref('')
let currentName = ref('')
let currentDescription = ref('')
let currentPhone = ref('')
let currentWechat = ref('')
let currentAddress = ref('')
let currentTags = ref<string[]>([])

const loadData = () => {
  try {
    const data = uni.getStorageSync('space_data')
    if (data) {
      const parsed = JSON.parse(data)
      currentCover.value = parsed.coverImage || ''
      currentName.value = parsed.name || ''
      currentDescription.value = parsed.description || ''
      currentPhone.value = parsed.contact?.phone || ''
      currentWechat.value = parsed.contact?.wechat || ''
      currentAddress.value = parsed.address || ''
      currentTags.value = parsed.tags || []
      console.log('加载数据成功:', parsed.name)
    } else {
      loadDefaultData()
    }
  } catch (e) {
    console.error('加载数据失败:', e)
    loadDefaultData()
  }
}

const loadDefaultData = () => {
  currentCover.value = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=750&q=80'
  currentName.value = '老王的水果铺'
  currentDescription.value = '10年老店，专注新鲜水果配送！主营各类国产精品水果，进口热带水果。所有水果当天采摘，隔日送达，新鲜看得见！支持同城配送，买满99元免配送费，欢迎选购~'
  currentPhone.value = '13812345678'
  currentWechat.value = 'laowang_fruit888'
  currentAddress.value = '广东省广州市天河区珠江新城花城大道88号优托邦商场B1层水果区A-12号铺'
  currentTags.value = ['10年老店', '新鲜直达', '同城配送', '坏果包赔']

  saveData()
}

const saveData = () => {
  try {
    const data = JSON.stringify({
      coverImage: currentCover.value,
      name: currentName.value,
      description: currentDescription.value,
      contact: {
        phone: currentPhone.value,
        wechat: currentWechat.value
      },
      address: currentAddress.value,
      tags: currentTags.value
    })
    uni.setStorageSync('space_data', data)
    console.log('保存数据成功')
  } catch (e) {
    console.error('保存数据失败:', e)
  }
}

onMounted(() => {
  loadData()
})

const goToEdit = () => {
  uni.navigateTo({
    url: '/pages/mine/space/edit'
  })
}

const handleCall = () => {
  if (currentPhone.value) {
    uni.makePhoneCall({
      phoneNumber: currentPhone.value,
      fail: () => {
        uni.showToast({ title: '拨打电话功能暂不可用', icon: 'none' })
      }
    })
  }
}

const handleCopyWechat = () => {
  if (currentWechat.value) {
    uni.setClipboardData({
      data: currentWechat.value,
      success: () => {
        uni.showToast({ title: '微信号已复制', icon: 'success' })
      }
    })
  }
}

const handleOpenMap = () => {
  if (currentAddress.value) {
    uni.openLocation({
      latitude: 23.1291,
      longitude: 113.2644,
      name: currentName.value,
      address: currentAddress.value,
      fail: () => {
        uni.showToast({ title: '地图功能暂不可用', icon: 'none' })
      }
    })
  }
}

const handleShare = () => {
  uni.showActionSheet({
    itemList: ['分享给好友', '生成分享图片'],
    success: (res) => {
      if (res.tapIndex === 0) {
        handleShareToFriend()
      } else if (res.tapIndex === 1) {
        handleGenerateImage()
      }
    }
  })
}

const handleShareToFriend = () => {
  uni.showToast({ title: '请选择分享方式', icon: 'none' })
  uni.share({
    provider: 'weixin',
    scene: 'WXSceneSession',
    type: 0,
    title: currentName.value,
    imageUrl: currentCover.value,
    success: () => {
      uni.showToast({ title: '分享成功', icon: 'success' })
    },
    fail: () => {
      uni.showToast({ title: '分享功能暂不可用', icon: 'none' })
    }
  })
}

const handleGenerateImage = () => {
  uni.showToast({ title: '生成分享图片功能开发中', icon: 'none' })
}
</script>

<style lang="scss">
page {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.page-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.custom-nav {
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;

  .nav-title {
    font-size: 34rpx;
    font-weight: 600;
    color: #ffffff;
  }
}

.main-content {
  height: calc(100vh - 88rpx);
  padding: 20rpx;
}

.hero-section {
  position: relative;
  height: 500rpx;
  border-radius: 32rpx;
  overflow: hidden;
  margin-bottom: 24rpx;
  box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.2);

  .hero-image {
    width: 100%;
    height: 100%;
  }

  .hero-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    padding: 120rpx 32rpx 32rpx;
    display: flex;
    flex-direction: column;
    align-items: center;

    .avatar-section {
      margin-bottom: 20rpx;

      .avatar-ring {
        width: 140rpx;
        height: 140rpx;
        border-radius: 50%;
        border: 6rpx solid rgba(255, 255, 255, 0.8);
        overflow: hidden;
        box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.3);

        .avatar-img {
          width: 100%;
          height: 100%;
        }
      }
    }

    .shop-name {
      font-size: 42rpx;
      font-weight: 700;
      color: #ffffff;
      text-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.3);
      margin-bottom: 16rpx;
    }

    .tags-row {
      display: flex;
      gap: 12rpx;
      flex-wrap: wrap;
      justify-content: center;

      .tag {
        font-size: 22rpx;
        color: #ffffff;
        background: rgba(255, 255, 255, 0.25);
        padding: 8rpx 20rpx;
        border-radius: 24rpx;
      }
    }
  }
}

.white-card {
  background: #ffffff;
  border-radius: 24rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.08);

  .section-title {
    display: flex;
    align-items: center;
    margin-bottom: 20rpx;

    .section-icon {
      font-size: 36rpx;
      margin-right: 12rpx;
    }

    .section-text {
      font-size: 32rpx;
      font-weight: 600;
      color: #1a1a1a;
    }
  }

  .description {
    font-size: 28rpx;
    color: #666666;
    line-height: 1.8;
  }
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 16rpx;

  .contact-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f8fafc;
    padding: 24rpx;
    border-radius: 16rpx;

    .contact-left {
      display: flex;
      align-items: center;
      flex: 1;

      .contact-icon {
        font-size: 40rpx;
        margin-right: 16rpx;
      }

      .contact-info {
        display: flex;
        flex-direction: column;

        .contact-label {
          font-size: 22rpx;
          color: #999999;
          margin-bottom: 4rpx;
        }

        .contact-value {
          font-size: 28rpx;
          color: #1a1a1a;
          font-weight: 500;

          &.address {
            font-size: 24rpx;
            max-width: 400rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }

    .contact-action {
      font-size: 26rpx;
      color: #667eea;
      font-weight: 500;
    }
  }
}

.button-group {
  display: flex;
  gap: 20rpx;
  margin-top: 32rpx;

  .btn {
    flex: 1;
    height: 96rpx;
    border-radius: 48rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);

    .btn-icon {
      font-size: 36rpx;
      margin-right: 12rpx;
    }

    .btn-text {
      font-size: 30rpx;
      font-weight: 600;
    }

    &.edit-btn {
      background: #ffffff;
      color: #1a1a1a;
    }

    &.share-btn {
      background: linear-gradient(135deg, #ff6b35 0%, #ff4d3a 100%);
      color: #ffffff;
      box-shadow: 0 4rpx 16rpx rgba(255, 107, 53, 0.3);
    }
  }
}

.preview-hint {
  text-align: center;
  margin-top: 32rpx;
  padding: 20rpx;

  .hint-text {
    font-size: 24rpx;
    color: rgba(255, 255, 255, 0.8);
  }
}
</style>
