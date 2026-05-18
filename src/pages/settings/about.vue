<template>
  <view class="page-container">
    <custom-nav title="关于平台" />
    <view class="content">
      <view class="logo-section">
        <view class="logo">🏪</view>
        <view class="app-name">信息广场</view>
        <view class="version">版本 1.0.0</view>
      </view>

      <view class="intro-section">
        <view class="intro-title">平台简介</view>
        <view class="intro-text">
          信息广场是一个专注于本地生活服务的信息发布平台，为用户提供便捷的商品交易、二手买卖、房屋租售、家政服务等各类信息的发布与浏览服务。
        </view>
      </view>

      <view class="feature-section">
        <view class="feature-title">核心功能</view>
        <view class="feature-list">
          <view class="feature-item">
            <text class="feature-icon">📦</text>
            <text class="feature-text">商品交易</text>
          </view>
          <view class="feature-item">
            <text class="feature-icon">🏠</text>
            <text class="feature-text">房屋租售</text>
          </view>
          <view class="feature-item">
            <text class="feature-icon">🔧</text>
            <text class="feature-text">生活服务</text>
          </view>
          <view class="feature-item">
            <text class="feature-icon">📱</text>
            <text class="feature-text">便捷发布</text>
          </view>
        </view>
      </view>

      <view class="contact-section">
        <view class="contact-title">联系我们</view>
        <view class="contact-item">
          <text class="contact-label">客服邮箱</text>
          <text class="contact-value">support@example.com</text>
        </view>
        <view class="contact-item">
          <text class="contact-label">官方网站</text>
          <text class="contact-value">www.example.com</text>
        </view>
      </view>

      <view class="copyright">
        © 2024 信息广场 All Rights Reserved
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CustomNav from '@/components/custom-nav/index.vue'

const goBack = () => {
  uni.navigateBack()
}
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}
.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
}
.content {
  padding: 24rpx;
}
.logo-section {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 60rpx 32rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24rpx;
  .logo {
    font-size: 120rpx;
    margin-bottom: 24rpx;
  }
  .app-name {
    font-size: 40rpx;
    font-weight: 600;
    color: #323233;
    margin-bottom: 12rpx;
  }
  .version {
    font-size: 26rpx;
    color: #969799;
  }
}
.intro-section {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  .intro-title {
    font-size: 32rpx;
    font-weight: 600;
    color: #323233;
    margin-bottom: 20rpx;
  }
  .intro-text {
    font-size: 28rpx;
    color: #646566;
    line-height: 1.8;
  }
}
.feature-section {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  .feature-title {
    font-size: 32rpx;
    font-weight: 600;
    color: #323233;
    margin-bottom: 24rpx;
  }
  .feature-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24rpx;
    .feature-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .feature-icon {
        font-size: 60rpx;
        margin-bottom: 12rpx;
      }
      .feature-text {
        font-size: 26rpx;
        color: #646566;
      }
    }
  }
}
.contact-section {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  .contact-title {
    font-size: 32rpx;
    font-weight: 600;
    color: #323233;
    margin-bottom: 24rpx;
  }
  .contact-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx 0;
    border-bottom: 1rpx solid #f5f5f5;
    &:last-child {
      border-bottom: none;
    }
    .contact-label {
      font-size: 28rpx;
      color: #646566;
    }
    .contact-value {
      font-size: 28rpx;
      color: #323233;
    }
  }
}
.copyright {
  text-align: center;
  font-size: 24rpx;
  color: #969799;
  padding: 32rpx 0;
}
</style>
