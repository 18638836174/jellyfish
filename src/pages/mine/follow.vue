<template>
  <view class="page-container">
    <custom-nav title="我的关注" />
    <scroll-view
      scroll-y
      class="content-scroll"
      refresher-enabled
      :refresher-triggered="refreshing"
      @refresherrefresh="onRefresh"
      @scrolltolower="onLoadMore"
    >
      <view class="follow-list">
        <view v-for="(item, index) in list" :key="index" class="follow-item">
          <view class="item-avatar">
            <image :src="item.avatar" mode="aspectFill" />
          </view>
          <view class="item-content">
            <view class="item-header">
              <text class="item-name">{{ item.name }}</text>
              <text class="item-type">{{ item.type }}</text>
            </view>
            <text class="item-desc">{{ item.description }}</text>
            <text class="item-time">关注于 {{ item.followTime }}</text>
          </view>
          <view class="item-action">
            <text class="action-btn">已关注</text>
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
        <text class="empty-icon">❤️</text>
        <text class="empty-text">暂无关注内容</text>
        <text class="empty-desc">快去关注感兴趣的内容吧</text>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import CustomNav from '@/components/custom-nav/index.vue'
import { usePagination } from '@/utils/usePagination'
import { mockFollowList } from '@/utils/mock'
import type { MockFollow } from '@/utils/mock'

const { list, loading, refreshing, hasMore, onRefresh, onLoadMore } = usePagination<MockFollow>(mockFollowList, {
  pageSize: 10,
  immediate: true
})
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

.follow-list {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}

.follow-item {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 24rpx;
  box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.04);

  .item-avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 60rpx;
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
    justify-content: center;

    .item-header {
      display: flex;
      align-items: center;
      margin-bottom: 8rpx;

      .item-name {
        font-size: 30rpx;
        font-weight: 600;
        color: #333333;
        margin-right: 12rpx;
      }

      .item-type {
        font-size: 20rpx;
        color: #1890ff;
        background-color: rgba(24, 144, 255, 0.1);
        padding: 4rpx 12rpx;
        border-radius: 12rpx;
      }
    }

    .item-desc {
      font-size: 24rpx;
      color: #666666;
      margin-bottom: 8rpx;
      line-height: 1.4;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .item-time {
      font-size: 22rpx;
      color: #999999;
    }
  }

  .item-action {
    flex-shrink: 0;
    margin-left: 16rpx;

    .action-btn {
      display: inline-block;
      font-size: 24rpx;
      color: #999999;
      background-color: #f5f5f5;
      padding: 12rpx 24rpx;
      border-radius: 24rpx;
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
