<template>
  <view class="page-container">
    <custom-nav title="我的发布" />
    <scroll-view
      scroll-y
      class="content-scroll"
      refresher-enabled
      :refresher-triggered="refreshing"
      @refresherrefresh="onRefresh"
      @scrolltolower="onLoadMore"
    >
      <view class="publish-list">
        <view v-for="(item, index) in list" :key="index" class="publish-item">
          <view class="item-image">
            <image :src="item.image" mode="aspectFill" />
          </view>
          <view class="item-content">
            <text class="item-title">{{ item.title }}</text>
            <view class="item-price-wrapper">
              <text class="item-price">¥{{ item.price }}</text>
              <text class="item-status" :class="'status-' + getStatusClass(item.status)">{{ item.status }}</text>
            </view>
            <view class="item-meta">
              <text class="item-views">浏览 {{ item.viewCount }}</text>
              <text class="item-time">{{ item.publishTime }}</text>
            </view>
          </view>
        </view>
      </view>

      <view class="load-more" v-if="loading">
        <text>加载中...</text>
      </view>
      <view class="load-more" v-else-if="!hasMore && list.length > 0">
        <text>— 没有更多了 —</text>
      </view>
      <view class="empty-state" v-else-if="list.length === 0 && !loading">
        <text class="empty-icon">📝</text>
        <text class="empty-text">暂无发布内容</text>
        <text class="empty-desc">快去发布第一条信息吧</text>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import CustomNav from '@/components/custom-nav/index.vue'
import { usePagination } from '@/utils/usePagination'
import { mockPublishList } from '@/utils/mock'
import type { MockPublish } from '@/utils/mock'

const { list, loading, refreshing, hasMore, onRefresh, onLoadMore } = usePagination<MockPublish>(mockPublishList, {
  pageSize: 10,
  immediate: true
})

const getStatusClass = (status: string) => {
  if (status === '已发布') return 'success'
  if (status === '审核中') return 'warning'
  return 'default'
}

const goBack = () => {
  uni.navigateBack()
}
</script>

<style lang="scss">
.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: 120rpx;
}

.content-scroll {
  height: calc(100vh - 100rpx);
  padding: 24rpx;
}

.publish-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.publish-item {
  display: flex;
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 20rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.04);

  .item-image {
    width: 200rpx;
    height: 200rpx;
    border-radius: 12rpx;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 24rpx;

    image {
      width: 100%;
      height: 100%;
    }
  }

  .item-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .item-title {
      font-size: 28rpx;
      color: #333333;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .item-price-wrapper {
      display: flex;
      align-items: center;
      margin-top: 12rpx;

      .item-price {
        font-size: 36rpx;
        color: #ff6b35;
        font-weight: 600;
        margin-right: 16rpx;
      }

      .item-status {
        font-size: 22rpx;
        padding: 6rpx 16rpx;
        border-radius: 16rpx;

        &.status-success {
          color: #07c160;
          background-color: rgba(7, 193, 96, 0.1);
        }

        &.status-warning {
          color: #ff976a;
          background-color: rgba(255, 151, 106, 0.1);
        }

        &.status-default {
          color: #999999;
          background-color: #f5f5f5;
        }
      }
    }

    .item-meta {
      display: flex;
      align-items: center;
      margin-top: 12rpx;

      .item-views {
        font-size: 22rpx;
        color: #999999;
        margin-right: 16rpx;
      }

      .item-time {
        font-size: 22rpx;
        color: #999999;
      }
    }
  }
}

.load-more {
  text-align: center;
  padding: 40rpx;
  color: #c0c0c0;
  font-size: 24rpx;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 200rpx;
  .empty-icon {
    font-size: 120rpx;
    margin-bottom: 32rpx;
  }
  .empty-text {
    font-size: 32rpx;
    color: #323233;
    margin-bottom: 16rpx;
  }
  .empty-desc {
    font-size: 26rpx;
    color: #969799;
  }
}
</style>
