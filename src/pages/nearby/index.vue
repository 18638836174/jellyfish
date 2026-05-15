<template>
  <view class="page-container">
    <view class="content-card">
      <view class="card-header">
        <view class="icon-wrapper">
          <text class="icon-text">📍</text>
        </view>
        <text class="card-title">附近</text>
      </view>
      <view class="card-content">
        <text class="content-desc">发现身边的精彩内容</text>
        <van-cell-group inset>
          <van-cell title="附近的人" icon="friends-o" is-link />
          <van-cell title="附近的商家" icon="shop-o" is-link />
          <van-cell title="附近的活动" icon="gift-o" is-link />
        </van-cell-group>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.page-container {
  padding: 24rpx;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.content-card {
  background-color: #ffffff;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
}

.card-header {
  display: flex;
  align-items: center;
  padding: 32rpx;
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  
  .icon-wrapper {
    width: 80rpx;
    height: 80rpx;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 24rpx;
    
    .icon-text {
      font-size: 40rpx;
    }
  }
  
  .card-title {
    font-size: 36rpx;
    font-weight: 600;
    color: #ffffff;
  }
}

.card-content {
  padding: 24rpx 32rpx 32rpx;
  
  .content-desc {
    font-size: 26rpx;
    color: #969799;
    margin-bottom: 24rpx;
    display: block;
  }
}
</style>