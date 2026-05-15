<template>
    <view class="container">
        <view class="header">
            <view class="header-left" @click="goToLocation">
                <text class="location-icon">📍</text>
                <text class="location-text">{{ regionStore.selectedRegion.name }}</text>
                <text class="location-arrow">▼</text>
            </view>
            <view class="search-box">
                <text class="search-icon">🔍</text>
                <input class="search-input" placeholder="搜索商品、服务、租房..." placeholder-class="search-placeholder" />
            </view>
        </view>

        <view class="category-wrapper">
            <scroll-view scroll-x class="category-scroll" enhanced show-scrollbar="{{false}}">
                <view class="category-list">
                    <view v-for="(category, index) in categories" :key="index"
                        :class="['category-item', { active: currentCategory === index }]"
                        @click="selectCategory(index)">
                        <text>{{ category.name }}</text>
                    </view>
                </view>
            </scroll-view>
        </view>

        <scroll-view scroll-y class="content-scroll" @scrolltolower="loadMore">
            <view class="goods-list">
                <view v-for="(item, index) in goodsList" :key="index" class="goods-item" @click="goToDetail(item)">
                    <view class="goods-image">
                        <image :src="item.image" mode="aspectFill" />
                        <view class="goods-tag" v-if="item.isNew">全新</view>
                    </view>
                    <view class="goods-content">
                        <text class="goods-title">{{ item.title }}</text>
                        <view class="goods-price-wrapper">
                            <text class="goods-price">¥{{ item.price }}</text>
                            <text class="goods-origin" v-if="item.originalPrice">¥{{ item.originalPrice }}</text>
                        </view>
                        <view class="goods-meta">
                            <text class="shop-name">{{ item.shopName }}</text>
                            <text class="shop-location">{{ item.location }}</text>
                        </view>
                    </view>
                </view>
            </view>

            <view class="load-more" v-if="hasMore">
                <text>加载中...</text>
            </view>
            <view class="load-more" v-else>
                <text>— 没有更多了 —</text>
            </view>
        </scroll-view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRegionStore } from '@/store'

const regionStore = useRegionStore()

const currentCategory = ref(0)

const categories = [
    { name: '推荐' },
    { name: '水果' },
    { name: '蔬菜' },
    { name: '招租' },
    { name: '上门维修' },
    { name: '家政服务' },
    { name: '二手闲置' },
    { name: '农产品' },
    { name: '宠物' },
]

const goodsList = ref([
    {
        id: 1,
        image: 'https://img.yzcdn.cn/vant/apple-1.jpg',
        title: '新鲜红富士苹果 5斤装 当季水果 脆甜多汁',
        price: '29.9',
        originalPrice: '45',
        shopName: '老王水果店',
        location: '天河区',
        isNew: true
    },
    {
        id: 2,
        image: 'https://img.yzcdn.cn/vant/apple-2.jpg',
        title: '有机青菜 新鲜采摘 当日送达',
        price: '12.8',
        originalPrice: '',
        shopName: '绿色菜园',
        location: '白云区',
        isNew: false
    },
    {
        id: 3,
        image: 'https://img.yzcdn.cn/vant/cat.jpeg',
        title: '精装单间出租 家电齐全 近地铁',
        price: '1800',
        originalPrice: '2200',
        shopName: '房东直租',
        location: '番禺区',
        isNew: true
    },
    {
        id: 4,
        image: 'https://img.yzcdn.cn/vant/dog.jpeg',
        title: '家电维修 快速上门 质保3个月',
        price: '50',
        originalPrice: '',
        shopName: '老李维修',
        location: '全市上门',
        isNew: false
    },
    {
        id: 5,
        image: 'https://img.yzcdn.cn/vant/apple-1.jpg',
        title: '正宗赣南脐橙 10斤装 甜度高',
        price: '39.9',
        originalPrice: '59',
        shopName: '果园直发',
        location: '增城区',
        isNew: true
    },
    {
        id: 6,
        image: 'https://img.yzcdn.cn/vant/apple-2.jpg',
        title: '白菜萝卜套餐 新鲜蔬菜',
        price: '15.9',
        originalPrice: '',
        shopName: '农场直供',
        location: '花都区',
        isNew: false
    },
])

const hasMore = ref(false)

const selectCategory = (index: number) => {
    currentCategory.value = index
}

const goToDetail = (item: any) => {
    uni.showToast({ title: '点击查看详情', icon: 'none' })
}

const loadMore = () => {
    if (hasMore.value) {
        uni.showToast({ title: '加载中...', icon: 'none' })
    }
}

const goToLocation = () => {
    uni.navigateTo({
        url: '/pages/location/index'
    })
}
</script>

<style lang="scss">
page {
    background-color: #f5f5f5;
}

.container {
    min-height: 100vh;
    background-color: #f5f5f5;
    padding-bottom: 120rpx;
}

.header {
    display: flex;
    align-items: center;
    padding: 20rpx 24rpx;
    background-color: #ffffff;
    box-shadow: 0 2rpx 8rpx rgba(0, 0, 0, 0.04);

    .header-left {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        margin-right: 20rpx;

        .location-icon {
            font-size: 28rpx;
        }

        .location-text {
            font-size: 28rpx;
            color: #333;
            font-weight: 500;
            margin: 0 4rpx;
        }

        .location-arrow {
            font-size: 20rpx;
            color: #999;
        }
    }

    .search-box {
        flex: 1;
        display: flex;
        align-items: center;
        background-color: #f5f5f5;
        border-radius: 36rpx;
        padding: 16rpx 24rpx;

        .search-icon {
            font-size: 28rpx;
            margin-right: 12rpx;
        }

        .search-input {
            flex: 1;
            font-size: 26rpx;
            color: #333;
        }
    }
}

.search-placeholder {
    color: #999;
    font-size: 26rpx;
}

.category-wrapper {
    padding: 24rpx 0 20rpx;
}

.category-scroll {
    white-space: nowrap;
    padding: 0 24rpx;
}

.category-list {
    display: flex;
    align-items: center;
}

.category-item {
    flex-shrink: 0;
    padding: 16rpx 28rpx;
    font-size: 28rpx;
    color: #666666;
    position: relative;
    white-space: nowrap;

    &.active {
        color: #1890ff;
        font-weight: 600;
        font-size: 30rpx;

        &::after {
            content: '';
            position: absolute;
            bottom: 6rpx;
            left: 50%;
            transform: translateX(-50%);
            width: 36rpx;
            height: 6rpx;
            background-color: #1890ff;
            border-radius: 3rpx;
        }
    }
}

.content-scroll {
    height: calc(100vh - 200rpx);
    padding: 0 24rpx;
}

.goods-list {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
}

.goods-item {
    display: flex;
    background-color: #ffffff;
    border-radius: 16rpx;
    padding: 20rpx;
    box-shadow: 0 2rpx 12rpx rgba(0, 0, 0, 0.04);

    .goods-image {
        width: 200rpx;
        height: 200rpx;
        border-radius: 12rpx;
        position: relative;
        flex-shrink: 0;
        overflow: hidden;

        image {
            width: 100%;
            height: 100%;
        }

        .goods-tag {
            position: absolute;
            top: 12rpx;
            left: 12rpx;
            background-color: #ff6b35;
            color: #ffffff;
            font-size: 20rpx;
            padding: 4rpx 12rpx;
            border-radius: 6rpx;
        }
    }

    .goods-content {
        flex: 1;
        margin-left: 24rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .goods-title {
            font-size: 28rpx;
            color: #333333;
            line-height: 1.5;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .goods-price-wrapper {
            display: flex;
            align-items: baseline;
            margin-top: 12rpx;

            .goods-price {
                font-size: 36rpx;
                color: #ff6b35;
                font-weight: 600;
            }

            .goods-origin {
                font-size: 24rpx;
                color: #c0c0c0;
                text-decoration: line-through;
                margin-left: 12rpx;
            }
        }

        .goods-meta {
            display: flex;
            align-items: center;
            margin-top: 12rpx;

            .shop-name {
                font-size: 22rpx;
                color: #999999;
                background-color: #f5f5f5;
                padding: 6rpx 16rpx;
                border-radius: 20rpx;
                margin-right: 16rpx;
            }

            .shop-location {
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
</style>