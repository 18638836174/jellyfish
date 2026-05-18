<template>
  <view class="page-container">
    <view class="profile-section">
      <view class="avatar-wrapper" @click="goToProfile">
        <image class="avatar" src="/static/user-avatar.svg" mode="aspectFill" />
      </view>
      <view class="user-info">
        <text class="username">{{ userName }}</text>
        <text class="user-id">ID: {{ userId }}</text>
      </view>
    </view>

    <view class="quick-actions">
      <view class="action-item" @click="goToPublish">
        <view class="action-icon">
          <text class="icon-text">📝</text>
        </view>
        <text class="action-label">我的发布</text>
      </view>
      <view class="action-item" @click="goToCollect">
        <view class="action-icon">
          <text class="icon-text">⭐</text>
        </view>
        <text class="action-label">我的收藏</text>
      </view>
      <view class="action-item" @click="goToHistory">
        <view class="action-icon">
          <text class="icon-text">🕐</text>
        </view>
        <text class="action-label">浏览记录</text>
      </view>
      <view class="action-item" @click="goToFollow">
        <view class="action-icon">
          <text class="icon-text">❤️</text>
        </view>
        <text class="action-label">我的关注</text>
      </view>
      <view class="action-item" @click="goToSpace">
        <view class="action-icon">
          <text class="icon-text">🏠</text>
        </view>
        <text class="action-label">我的空间</text>
      </view>
    </view>

    <view class="menu-list">
      <view class="menu-item" @click="goToFeedback">
        <view class="menu-left">
          <text class="menu-icon">💬</text>
          <text class="menu-text">意见反馈</text>
        </view>
        <text class="arrow">›</text>
      </view>
      <view class="menu-item" @click="goToSettings">
        <view class="menu-left">
          <text class="menu-icon">⚙️</text>
          <text class="menu-text">设置</text>
        </view>
        <text class="arrow">›</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userName = ref('游客用户')
const userId = ref('100000')

const goToProfile = () => {
  uni.showToast({ title: '进入个人资料编辑', icon: 'none' })
}

const goToPublish = () => {
  uni.navigateTo({ url: '/pages/mine/publish' })
}

const goToCollect = () => {
  uni.navigateTo({ url: '/pages/mine/collect' })
}

const goToHistory = () => {
  uni.navigateTo({ url: '/pages/mine/history' })
}

const goToFollow = () => {
  uni.navigateTo({ url: '/pages/mine/follow' })
}

const goToSpace = () => {
  uni.navigateTo({ url: '/pages/mine/space' })
}

const goToFeedback = () => {
  uni.navigateTo({ url: '/pages/mine/feedback' })
}

const goToSettings = () => {
  uni.navigateTo({
    url: '/pages/settings/index'
  })
}
</script>

<style lang="scss">
.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: env(safe-area-inset-bottom);
}

.profile-section {
  background-color: #ffffff;
  padding: 48rpx 32rpx;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20rpx;

  .avatar-wrapper {
    margin-right: 32rpx;

    .avatar {
      width: 140rpx;
      height: 140rpx;
      border-radius: 50%;
      box-shadow: 0 8rpx 24rpx rgba(255, 107, 53, 0.35);
    }
  }

  .user-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .username {
      font-size: 40rpx;
      font-weight: 600;
      color: #323233;
      margin-bottom: 12rpx;
    }

    .user-id {
      font-size: 28rpx;
      color: #969799;
    }
  }
}

.quick-actions {
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  padding: 40rpx 20rpx;
  margin-bottom: 20rpx;

  .action-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    .action-icon {
      width: 96rpx;
      height: 96rpx;
      background-color: #f5f5f5;
      border-radius: 24rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16rpx;

      .icon-text {
        font-size: 48rpx;
      }
    }

    .action-label {
      font-size: 24rpx;
      color: #323233;
    }
  }
}

.menu-list {
  background-color: #ffffff;

  .menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32rpx;
    border-bottom: 1rpx solid #f5f5f5;

    &:last-child {
      border-bottom: none;
    }

    .menu-left {
      display: flex;
      align-items: center;

      .menu-icon {
        font-size: 40rpx;
        margin-right: 20rpx;
      }

      .menu-text {
        font-size: 30rpx;
        color: #323233;
      }
    }

    .arrow {
      font-size: 36rpx;
      color: #c8c9cc;
    }
  }
}
</style>
