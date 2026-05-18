<template>
    <view>
        <view class="nav-placeholder" :style="{ height: totalHeight + 'px' }"></view>
        <view class="nav-container" :style="{ height: totalHeight + 'px', backgroundColor: backgroundColor }">
            <view class="status-bar" :style="{ height: statusBarHeight + 'px' }"></view>
            <view class="nav-bar" :style="{ height: navBarHeight + 'px' }">
                <view class="back-btn"
                    :style="{ color: iconColor, height: navBarHeight + 'px', lineHeight: navBarHeight + 'px' }"
                    @click="handleBack">
                    <text class="back-icon">‹</text>
                </view>
                <view class="nav-title"
                    :style="{ color: titleColor, height: navBarHeight + 'px', lineHeight: navBarHeight + 'px' }">
                    {{ title }}
                </view>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

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

const statusBarHeight = ref(20)
const navBarHeight = ref(44)

const totalHeight = computed(() => statusBarHeight.value + navBarHeight.value)

onMounted(() => {
    const systemInfo = uni.getSystemInfoSync()
    statusBarHeight.value = systemInfo.statusBarHeight || 20

    const menuButtonBoundingClient = uni.getMenuButtonBoundingClientRect()
    if (menuButtonBoundingClient) {
        navBarHeight.value = menuButtonBoundingClient.bottom - statusBarHeight.value + 10
    }
})

const handleBack = () => {
    uni.navigateBack({
        fail: () => {
            uni.switchTab({ url: '/pages/index/index' })
        }
    })
}
</script>

<style lang="scss">
.nav-placeholder {
    width: 100%;
}

.nav-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    width: 100%;
}

.status-bar {
    width: 100%;
}

.nav-bar {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.back-btn {
    position: absolute;
    left: 0;
    width: 120rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    .back-icon {
        font-size: 48rpx;
        font-weight: bold;
    }
}

.nav-title {
    flex: 1;
    text-align: center;
    font-size: 32rpx;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 120rpx;
}
</style>
