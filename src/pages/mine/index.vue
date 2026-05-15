<template>
  <view class="page-container">
    <view class="profile-card">
      <view class="avatar-wrapper">
        <view class="avatar">
          <text class="avatar-text">👤</text>
        </view>
      </view>
      <view class="user-info">
        <text class="username">游客用户</text>
        <text class="user-id">ID: 100000</text>
      </view>
    </view>
    
    <view class="menu-card">
      <van-cell-group>
        <van-cell title="个人资料" icon="user-o" is-link />
        <van-cell title="我的收藏" icon="star-o" is-link />
        <van-cell title="我的订单" icon="orders-o" is-link />
        <van-cell title="设置" icon="setting-o" is-link />
      </van-cell-group>
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

.profile-card {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 48rpx 32rpx;
  display: flex;
  align-items: center;
  margin-bottom: 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
  
  .avatar-wrapper {
    margin-right: 32rpx;
    
    .avatar {
      width: 120rpx;
      height: 120rpx;
      background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      
      .avatar-text {
        font-size: 60rpx;
      }
    }
  }
  
  .user-info {
    .username {
      font-size: 36rpx;
      font-weight: 600;
      color: #323233;
      display: block;
      margin-bottom: 12rpx;
    }
    
    .user-id {
      font-size: 26rpx;
      color: #969799;
    }
  }
}

.menu-card {
  background-color: #ffffff;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.05);
}
</style>