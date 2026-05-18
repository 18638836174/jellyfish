<template>
  <view class="page-container">
    <custom-nav title="设置" @back="goBack" />

    <view class="menu-list">
      <view class="menu-item" @click="goToPrivacy">
        <view class="menu-left">
          <text class="menu-icon">🔒</text>
          <text class="menu-text">隐私政策</text>
        </view>
        <text class="arrow">›</text>
      </view>

      <view class="menu-item" @click="goToAgreement">
        <view class="menu-left">
          <text class="menu-icon">📄</text>
          <text class="menu-text">用户协议</text>
        </view>
        <text class="arrow">›</text>
      </view>

      <view class="menu-item" @click="goToAbout">
        <view class="menu-left">
          <text class="menu-icon">ℹ️</text>
          <text class="menu-text">关于平台</text>
        </view>
        <text class="arrow">›</text>
      </view>

      <view class="menu-item logout" @click="handleLogout">
        <view class="menu-left">
          <text class="menu-icon">🚪</text>
          <text class="menu-text">退出登录</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CustomNav from '@/components/custom-nav/index.vue'


const goToPrivacy = () => {
  uni.navigateTo({ url: '/pages/settings/privacy' })
}

const goToAgreement = () => {
  uni.navigateTo({ url: '/pages/settings/agreement' })
}

const goToAbout = () => {
  uni.navigateTo({ url: '/pages/settings/about' })
}

const handleLogout = () => {
  uni.showModal({
    title: '提示',
    content: '确定要退出登录吗？',
    success: (res) => {
      if (res.confirm) {
        uni.showToast({ title: '已退出登录', icon: 'success' })
        setTimeout(() => {
          uni.switchTab({
            url: '/pages/index/index'
          })
        }, 1000)
      }
    }
  })
}
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}

.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: env(safe-area-inset-bottom);
}

.menu-list {
  background-color: #ffffff;
  margin-top: 20rpx;

  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 36rpx 32rpx;
    border-bottom: 1rpx solid #f5f5f5;

    &:last-child {
      border-bottom: none;
    }

    .menu-left {
      display: flex;
      align-items: center;

      .menu-icon {
        font-size: 44rpx;
        margin-right: 24rpx;
      }

      .menu-text {
        font-size: 32rpx;
        color: #323233;
      }
    }

    .arrow {
      font-size: 40rpx;
      color: #c8c9cc;
    }
  }

  .logout {
    margin-top: 40rpx;

    .menu-text {
      color: #ee0a24;
    }
  }
}
</style>
