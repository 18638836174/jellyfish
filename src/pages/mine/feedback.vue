<template>
  <view class="page-container">
    <custom-nav title="意见反馈" />
    <view class="form-content">
      <view class="form-section">
        <view class="section-title">反馈类型</view>
        <view class="type-list">
          <view v-for="type in feedbackTypes" :key="type.value" 
                class="type-item" 
                :class="{ active: selectedType === type.value }"
                @click="selectedType = type.value">
            {{ type.label }}
          </view>
        </view>
      </view>

      <view class="form-section">
        <view class="section-title">问题描述</view>
        <view class="textarea-wrapper">
          <textarea v-model="content" 
                    placeholder="请详细描述您的问题或建议..." 
                    :maxlength="500"
                    style="display: block; width: 100%; height: 240rpx; background-color: #f7f8fa; border: none; border-radius: 12rpx; padding: 24rpx; font-size: 28rpx; color: #323233; box-sizing: border-box;" />
          <view class="word-count">{{ content.length }}/500</view>
        </view>
      </view>

      <view class="form-section">
        <view class="section-title">联系方式</view>
        <input v-model="contact" class="contact-input" placeholder="请输入手机号或邮箱" />
      </view>

      <view class="submit-section">
        <view class="submit-btn" @click="handleSubmit">
          <text class="submit-text">提交反馈</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomNav from '@/components/custom-nav/index.vue'

const feedbackTypes = [
  { label: '功能建议', value: 'suggest' },
  { label: '问题反馈', value: 'bug' },
  { label: '体验反馈', value: 'experience' },
  { label: '其他', value: 'other' }
]

const selectedType = ref('suggest')
const content = ref('')
const contact = ref('')

const goBack = () => {
  uni.navigateBack()
}

const handleSubmit = () => {
  if (!content.value.trim()) {
    uni.showToast({ title: '请输入反馈内容', icon: 'none' })
    return
  }
  uni.showLoading({ title: '提交中...' })
  setTimeout(() => {
    uni.hideLoading()
    uni.showToast({ title: '提交成功！', icon: 'success' })
    setTimeout(() => {
      goBack()
    }, 1500)
  }, 1000)
}
</script>

<style lang="scss">
.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
}
.form-content {
  padding: 24rpx;
}
.form-section {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  .section-title {
    font-size: 32rpx;
    font-weight: 600;
    color: #323233;
    margin-bottom: 24rpx;
  }
}
.type-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20rpx;
  .type-item {
    padding: 16rpx 32rpx;
    background-color: #f5f5f5;
    border-radius: 50rpx;
    font-size: 26rpx;
    color: #646566;
    &.active {
      background-color: #fff2e8;
      color: #ff6b35;
    }
  }
}
.textarea-wrapper {
  position: relative;
  .word-count {
    position: absolute;
    right: 16rpx;
    bottom: 16rpx;
    font-size: 22rpx;
    color: #c8c9cc;
  }
}
.contact-input {
  width: 100%;
  height: 88rpx;
  background-color: #f7f8fa;
  border-radius: 12rpx;
  padding: 0 24rpx;
  font-size: 28rpx;
  color: #323233;
  box-sizing: border-box;
}
.submit-section {
  padding: 40rpx 0;
  .submit-btn {
    background: linear-gradient(135deg, #ff9a56 0%, #ff6b35 100%);
    border-radius: 50rpx;
    padding: 32rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8rpx 24rpx rgba(255, 107, 53, 0.35);
    .submit-text {
      font-size: 36rpx;
      font-weight: 600;
      color: #ffffff;
      letter-spacing: 4rpx;
    }
  }
}
</style>
