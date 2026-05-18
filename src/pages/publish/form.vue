<template>
  <view class="page-container">
    <custom-nav :title="categoryName" />

    <view class="form-content">
      <view class="form-section">
        <view class="section-title">📷 图片上传</view>
        <view class="section-desc">至少上传1张，最多10张</view>
        <view class="image-upload">
          <view class="upload-list">
            <view v-for="(img, index) in fileList" :key="index" class="upload-item">
              <image :src="img" mode="aspectFill" class="upload-image" />
              <view class="delete-btn" @click="deleteImage(index)">✕</view>
            </view>
            <view v-if="fileList.length < 10" class="upload-btn" @click="chooseImage">
              <text class="upload-icon">+</text>
              <text class="upload-text">添加图片</text>
            </view>
          </view>
        </view>
      </view>

      <view class="form-section">
        <view class="section-title">📝 商品描述</view>
        <view class="textarea-wrapper">
          <textarea v-model="description" class="description-input" placeholder="请详细描述商品或服务信息..." :maxlength="1000"
            style="display: block; width: 100%; height: 240rpx; background-color: #f7f8fa; border: none; border-radius: 12rpx; padding: 24rpx; font-size: 28rpx; color: #323233; box-sizing: border-box;" />
          <view class="word-count">{{ description.length }}/1000</view>
        </view>
      </view>

      <view class="form-section">
        <view class="section-title">📞 联系方式</view>
        <view class="section-desc">至少填写一项联系方式</view>

        <view class="contact-item">
          <text class="contact-label">手机号</text>
          <input v-model="phone" type="number" class="contact-input" placeholder="请输入手机号码" maxlength="11" />
        </view>

        <view class="contact-item">
          <text class="contact-label">微信号</text>
          <input v-model="wechat" class="contact-input" placeholder="请输入微信号" />
        </view>

        <view class="contact-item">
          <text class="contact-label">QQ号</text>
          <input v-model="qq" type="number" class="contact-input" placeholder="请输入QQ号码" />
        </view>
      </view>

      <view class="form-section">
        <view class="section-title">📍 联系地址</view>
        <view class="section-desc" style="color: #969799;">选填</view>
        <view class="textarea-wrapper">
          <textarea v-model="address" class="address-input" placeholder="请输入详细地址..." :maxlength="200"
            style="display: block; width: 100%; height: 160rpx; background-color: #f7f8fa; border: none; border-radius: 12rpx; padding: 24rpx; font-size: 28rpx; color: #323233; box-sizing: border-box;" />
          <view class="word-count">{{ address.length }}/200</view>
        </view>
      </view>

      <view class="submit-placeholder"></view>
    </view>

    <view class="submit-fixed">
      <view class="submit-btn" @click="handleSubmit">
        <text class="submit-text">立即发布</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CustomNav from '@/components/custom-nav/index.vue'

interface FileItem {
  url: string
  isImage: boolean
  status?: string
  message?: string
}

const categoryName = ref('')
const description = ref('')
const phone = ref('')
const wechat = ref('')
const qq = ref('')
const address = ref('')
const categoryCode = ref('')
const fileList = ref<string[]>([])

onMounted(() => {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1] as any
  const options = currentPage?.options || {}

  if (options) {
    categoryCode.value = options.code || ''
    categoryName.value = options.name ? decodeURIComponent(options.name) : '发布信息'
  }
})


const chooseImage = () => {
  const count = 10 - fileList.value.length
  if (count <= 0) return

  uni.chooseImage({
    count: count,
    sizeType: ['compressed'],
    sourceType: ['album', 'camera'],
    success: (res: any) => {
      fileList.value = [...fileList.value, ...res.tempFilePaths]
    }
  })
}

const deleteImage = (index: number) => {
  fileList.value.splice(index, 1)
}

const handleSubmit = () => {
  if (fileList.value.length === 0) {
    uni.showToast({ title: '请至少上传1张图片', icon: 'none' })
    return
  }

  if (!description.value.trim()) {
    uni.showToast({ title: '请填写商品描述', icon: 'none' })
    return
  }

  if (!phone.value.trim() && !wechat.value.trim() && !qq.value.trim()) {
    uni.showToast({ title: '请至少填写一种联系方式', icon: 'none' })
    return
  }

  if (phone.value && !/^1[3-9]\d{9}$/.test(phone.value)) {
    uni.showToast({ title: '请输入正确的手机号码', icon: 'none' })
    return
  }

  uni.showLoading({ title: '发布中...' })

  setTimeout(() => {
    uni.hideLoading()
    uni.showToast({ title: '发布成功！', icon: 'success' })
    setTimeout(() => {
      uni.switchTab({ url: '/pages/index/index' })
    }, 1500)
  }, 1000)
}
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}

.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding-bottom: env(safe-area-inset-bottom);
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
    margin-bottom: 8rpx;
  }

  .section-desc {
    font-size: 24rpx;
    color: #969799;
    margin-bottom: 24rpx;
  }
}

.image-upload {
  .upload-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20rpx;
  }

  .upload-item {
    position: relative;
    aspect-ratio: 1;
    border-radius: 12rpx;
    overflow: hidden;

    .upload-image {
      width: 100%;
      height: 100%;
    }

    .delete-btn {
      position: absolute;
      top: 8rpx;
      right: 8rpx;
      width: 44rpx;
      height: 44rpx;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 24rpx;
    }
  }

  .upload-btn {
    aspect-ratio: 1;
    background-color: #f7f8fa;
    border: 2rpx dashed #dcdee0;
    border-radius: 12rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .upload-icon {
      font-size: 60rpx;
      color: #969799;
      line-height: 1;
      margin-bottom: 8rpx;
    }

    .upload-text {
      font-size: 22rpx;
      color: #969799;
    }
  }
}

.textarea-wrapper {
  position: relative;

  textarea.description-input,
  textarea.address-input {
    display: block;
    width: 100%;
    background-color: #f7f8fa;
    border: none;
    border-radius: 12rpx;
    padding: 24rpx;
    font-size: 28rpx;
    color: #323233;
    box-sizing: border-box;
    line-height: 1.6;
  }

  textarea.description-input {
    height: 240rpx;
  }

  textarea.address-input {
    height: 160rpx;
  }

  .word-count {
    position: absolute;
    right: 16rpx;
    bottom: 16rpx;
    font-size: 22rpx;
    color: #c8c9cc;
    background: transparent;
  }
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 24rpx 0;
  border-bottom: 1rpx solid #f5f5f5;

  &:last-child {
    border-bottom: none;
  }

  .contact-label {
    width: 140rpx;
    font-size: 28rpx;
    color: #323233;
  }

  .contact-input {
    flex: 1;
    font-size: 28rpx;
    color: #323233;
  }
}

.submit-placeholder {
  height: 140rpx;
}

.submit-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24rpx;
  padding-bottom: calc(24rpx + env(safe-area-inset-bottom));
  background-color: #ffffff;
  z-index: 100;
}

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
</style>
