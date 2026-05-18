<template>
  <view class="page-container">
    <view class="publish-hero">
      <view class="hero-content">
        <view class="hero-icon">
          <text>🏪</text>
        </view>
        <text class="hero-title">发布商品 · 服务</text>
        <text class="hero-subtitle">轻松发布，让生意触手可及</text>
      </view>
    </view>

    <view class="category-section">
      <view class="section-header">
        <text class="section-title">选择分类</text>
      </view>
      <view class="category-grid">
        <view v-for="category in categories" :key="category.code" class="category-card"
          @click="selectCategory(category)">
          <view class="category-icon">
            <text>{{ category.icon }}</text>
          </view>
          <text class="category-name">{{ category.name }}</text>
        </view>
      </view>
    </view>

    <view class="tips-section">
      <view class="tips-header">
        <text class="tips-title">💡 发布小贴士</text>
      </view>
      <view class="tips-list">
        <view class="tip-item">
          <text class="tip-bullet">•</text>
          <text class="tip-text">详细的商品描述和实物图片能提高成交率</text>
        </view>
        <view class="tip-item">
          <text class="tip-bullet">•</text>
          <text class="tip-text">合理定价，标注新旧程度让买家更放心</text>
        </view>
        <view class="tip-item">
          <text class="tip-bullet">•</text>
          <text class="tip-text">选择正确的分类能让信息更快被发现</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
const categories = [
  { code: 'fruits', name: '水果生鲜', icon: '🍎' },
  { code: 'vegetables', name: '蔬菜粮油', icon: '🥬' },
  { code: 'rent', name: '房屋租售', icon: '🏠' },
  { code: 'repair', name: '上门维修', icon: '🔧' },
  { code: 'cleaning', name: '家政保洁', icon: '🧹' },
  { code: 'delivery', name: '搬家运输', icon: '🚚' },
  { code: 'education', name: '教育培训', icon: '📚' },
  { code: 'more', name: '更多分类', icon: '📋' }
]

const selectCategory = (category: any) => {
  uni.navigateTo({
    url: `/pages/publish/form?code=${category.code}&name=${encodeURIComponent(category.name)}`
  })
}
</script>

<style lang="scss">
.page-container {
  min-height: 100vh;
  background: linear-gradient(180deg, #fff9f0 0%, #fff5e6 100%);
  padding-bottom: env(safe-area-inset-bottom);
}

.publish-hero {
  background: linear-gradient(135deg, #ff9a56 0%, #ff6b35 50%, #f7931e 100%);
  padding: 80rpx 40rpx;
  margin-bottom: 30rpx;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    .hero-icon {
      width: 120rpx;
      height: 120rpx;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 32rpx;

      text {
        font-size: 60rpx;
      }
    }

    .hero-title {
      font-size: 48rpx;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 16rpx;
      letter-spacing: 2rpx;
    }

    .hero-subtitle {
      font-size: 28rpx;
      color: rgba(255, 255, 255, 0.95);
      letter-spacing: 1rpx;
    }
  }
}

.category-section {
  padding: 0 30rpx;
  margin-bottom: 30rpx;

  .section-header {
    margin-bottom: 24rpx;

    .section-title {
      font-size: 32rpx;
      font-weight: 600;
      color: #323233;
    }
  }

  .category-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20rpx;

    .category-card {
      background-color: #ffffff;
      border-radius: 16rpx;
      padding: 28rpx 16rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 2rpx 12rpx rgba(255, 107, 53, 0.08);
      transition: transform 0.2s ease;

      &:active {
        transform: scale(0.95);
      }

      .category-icon {
        width: 80rpx;
        height: 80rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 12rpx;

        text {
          font-size: 48rpx;
        }
      }

      .category-name {
        font-size: 22rpx;
        color: #646566;
        text-align: center;
      }
    }
  }
}

.quick-publish {
  padding: 0 30rpx;
  margin-bottom: 30rpx;

  .publish-btn {
    background: linear-gradient(135deg, #ff9a56 0%, #ff6b35 100%);
    border-radius: 50rpx;
    padding: 32rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8rpx 24rpx rgba(255, 107, 53, 0.35);

    .btn-icon {
      font-size: 40rpx;
      margin-right: 16rpx;
    }

    .btn-text {
      font-size: 36rpx;
      font-weight: 600;
      color: #ffffff;
      letter-spacing: 4rpx;
    }
  }
}

.tips-section {
  margin: 0 30rpx;
  background-color: #ffffff;
  border-radius: 20rpx;
  padding: 32rpx;
  box-shadow: 0 4rpx 20rpx rgba(255, 107, 53, 0.08);

  .tips-header {
    margin-bottom: 24rpx;

    .tips-title {
      font-size: 30rpx;
      font-weight: 600;
      color: #323233;
    }
  }

  .tips-list {
    .tip-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 16rpx;

      &:last-child {
        margin-bottom: 0;
      }

      .tip-bullet {
        color: #ff6b35;
        font-size: 28rpx;
        margin-right: 16rpx;
        line-height: 1.5;
      }

      .tip-text {
        flex: 1;
        font-size: 26rpx;
        color: #646566;
        line-height: 1.6;
      }
    }
  }
}
</style>
