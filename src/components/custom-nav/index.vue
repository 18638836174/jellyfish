<template>
    <view class="nav-bar" :style="{ backgroundColor: backgroundColor }">
        <view class="nav-content" :style="{ paddingTop: statusBarHeight + 'px' }">
            <view class="nav-header" :style="{ height: capsuleHeight + 'px' }">
                <view class="nav-left" :style="{ color: iconColor }">
                    <view v-if="showBack" class="back-btn" @click="handleBack">
                        <text class="back-icon">‹</text>
                    </view>
                </view>
                <view class="nav-title">
                    <text class="title-text" :style="{ color: titleColor }">{{ title }}</text>
                </view>
                <view class="nav-right"></view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
    title?: string
    showBack?: boolean
    iconColor?: string
    backgroundColor?: string
    titleColor?: string
}

const props = withDefaults(defineProps<Props>(), {
    title: '',
    showBack: true,
    iconColor: '#333333',
    backgroundColor: '#ffffff',
    titleColor: '#333333'
})

const emit = defineEmits(['back'])

const statusBarHeight = ref(0)
const capsuleHeight = ref(32)

onMounted(() => {
    const systemInfo = uni.getSystemInfoSync()
    statusBarHeight.value = systemInfo.statusBarHeight || 20

    const menuButtonBoundingClient = uni.getMenuButtonBoundingClientRect()
    if (menuButtonBoundingClient) {
        const navHeight = menuButtonBoundingClient.top - statusBarHeight.value
        const capsuleHeightValue = menuButtonBoundingClient.height
        capsuleHeight.value = capsuleHeightValue
    }
})

const handleBack = () => {
    emit('back')
    uni.navigateBack({
        delta: 1,
        fail: () => {
            uni.switchTab({
                url: '/pages/index/index'
            })
        }
    })
}
</script>

<style lang="scss">
.nav-bar {
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;
}

.nav-content {
    position: relative;
}

.nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16rpx;
    box-sizing: border-box;
}

.nav-left {
    width: 120rpx;
    display: flex;
    align-items: center;
}

.back-btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8rpx;

    .back-icon {
        font-size: 48rpx;
        font-weight: bold;
        line-height: 1;
    }
}

.nav-title {
    flex: 1;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
}

.title-text {
    font-size: 32rpx;
    font-weight: 500;
    max-width: 400rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.nav-right {
    width: 120rpx;
}
</style>