<template>
  <view class="page-container">
    <view class="custom-nav">
      <view class="nav-left" @click="goBack">
        <text class="nav-arrow">‹</text>
      </view>
      <text class="nav-title">编辑空间</text>
      <view class="nav-right"></view>
    </view>

    <scroll-view scroll-y class="form-content">
      <view class="cover-upload" @click="chooseImage">
        <image v-if="formData.coverImage" :src="formData.coverImage" mode="aspectFill" class="cover-image" />
        <view v-else class="upload-placeholder">
          <text class="upload-icon">📸</text>
          <text class="upload-text">点击上传封面图</text>
        </view>
        <view class="upload-overlay">
          <text class="overlay-text">更换封面</text>
        </view>
      </view>

      <view class="form-section">
        <view class="section-label">
          <text class="label-icon">🏪</text>
          <text class="label-text">店铺名称</text>
        </view>
        <input
          class="form-input"
          v-model="formData.name"
          placeholder="给你的店铺取个名字"
          placeholder-class="input-placeholder"
          maxlength="30"
        />
        <text class="char-count">{{ formData.name.length }}/30</text>
      </view>

      <view class="form-section">
        <view class="section-label">
          <text class="label-icon">✨</text>
          <text class="label-text">店铺介绍</text>
        </view>
        <textarea
          class="form-textarea"
          v-model="formData.description"
          placeholder="介绍一下你的店铺，让更多人了解你"
          placeholder-class="input-placeholder"
          maxlength="500"
          auto-height
        />
        <text class="char-count">{{ formData.description.length }}/500</text>
      </view>

      <view class="form-section">
        <view class="section-label">
          <text class="label-icon">🏷️</text>
          <text class="label-text">服务标签</text>
        </view>
        <view class="tags-container">
          <view v-for="(tag, index) in formData.tags" :key="index" class="tag-item">
            <text>{{ tag }}</text>
            <text class="tag-delete" @click="removeTag(index)">×</text>
          </view>
          <input
            v-if="formData.tags.length < 5"
            class="tag-input"
            v-model="newTag"
            placeholder="添加"
            placeholder-class="input-placeholder"
            @confirm="addTag"
          />
        </view>
        <text class="section-hint">最多5个标签，按回车添加</text>
      </view>

      <view class="form-section">
        <view class="section-title">
          <text class="title-icon">📱</text>
          <text class="title-text">联系方式</text>
        </view>

        <view class="contact-form">
          <view class="contact-item">
            <text class="contact-label">📞</text>
            <input
              class="contact-input"
              v-model="formData.contact.phone"
              placeholder="手机号码"
              placeholder-class="input-placeholder"
              type="number"
              maxlength="11"
            />
          </view>

          <view class="contact-item">
            <text class="contact-label">💬</text>
            <input
              class="contact-input"
              v-model="formData.contact.wechat"
              placeholder="微信号"
              placeholder-class="input-placeholder"
              maxlength="20"
            />
          </view>
        </view>
      </view>

      <view class="form-section">
        <view class="section-label">
          <text class="label-icon">📍</text>
          <text class="label-text">店铺地址</text>
        </view>
        <input
          class="form-input"
          v-model="formData.address"
          placeholder="详细地址"
          placeholder-class="input-placeholder"
          maxlength="100"
        />
      </view>

      <view class="example-section">
        <text class="example-title">🎨 示例数据</text>
        <view class="example-list">
          <view
            v-for="(example, index) in examples"
            :key="index"
            class="example-item"
            @click="loadExample(example)"
          >
            <text class="example-name">{{ example.name }}</text>
          </view>
        </view>
      </view>

      <view class="action-buttons">
        <view class="btn save-btn" @click="saveData">
          <text class="btn-icon">💾</text>
          <text class="btn-text">保存</text>
        </view>
        <view class="btn reset-btn" @click="resetData">
          <text class="btn-icon">🔄</text>
          <text class="btn-text">重置</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const formData = ref({
  coverImage: '',
  name: '',
  description: '',
  contact: {
    phone: '',
    wechat: ''
  },
  address: '',
  tags: [] as string[]
})

const newTag = ref('')

const examples = [
  {
    name: '老王的水果铺 🍎',
    coverImage: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=750&q=80',
    description: '10年老店，专注新鲜水果配送！主营各类国产精品水果，进口热带水果。所有水果当天采摘，隔日送达，新鲜看得见！支持同城配送，买满99元免配送费，欢迎选购~',
    contact: { phone: '13812345678', wechat: 'laowang_fruit888' },
    address: '广东省广州市天河区珠江新城花城大道88号优托邦商场B1层水果区A-12号铺',
    tags: ['10年老店', '新鲜直达', '同城配送', '坏果包赔']
  },
  {
    name: '小李家电维修 🔧',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=750&q=80',
    description: '专业家电维修服务20年！精通空调、冰箱、洗衣机、热水器等各类家电维修与保养。快速上门，收费透明，质保3个月。紧急维修30分钟响应，是您值得信赖的家电好帮手！',
    contact: { phone: '13987654321', wechat: 'xiaoli_fix666' },
    address: '广东省深圳市福田区华强北街道振华路105号家电维修服务中心',
    tags: ['20年经验', '快速上门', '收费透明', '质保3个月']
  },
  {
    name: '甜蜜时光烘焙 🎂',
    coverImage: 'https://images.unsplash.com/photo-1556217477-d325251ece38?w=750&q=80',
    description: '私人定制蛋糕甜品工作室！主打生日蛋糕、婚礼甜品台、企业茶歇等。所有甜品纯手工制作，选用进口食材，无添加更新鲜。支持深圳全城配送，当日下单次日送达~',
    contact: { phone: '13698765432', wechat: 'sweet_time123' },
    address: '广东省深圳市南山区科技园南区高新南七道R2-B栋1楼烘焙工作室',
    tags: ['私人定制', '纯手工', '进口食材', '全城配送']
  },
  {
    name: '安心家政服务 🏠',
    coverImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=750&q=80',
    description: '专业家政保洁服务团队！提供日常保洁、开荒保洁、家电清洗、皮具护理等服务。员工均经过专业培训，服务标准化。首单8折，办理会员更优惠，欢迎预约~',
    contact: { phone: '13567890123', wechat: 'anxin_jiayi99' },
    address: '广东省广州市白云区白云新城云城西路50号白云万达广场A座1208室',
    tags: ['专业团队', '标准服务', '首单8折', '会员优惠']
  },
  {
    name: '优居租房管家 🏠',
    coverImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=750&q=80',
    description: '专业租房中介服务！海量房源，涵盖整租、合租、短租多种类型。经纪人全程陪同看房，签约透明无套路。承诺不收中介费，只收房东服务费，租客完全免费！',
    contact: { phone: '13765432109', wechat: 'youju_zufang' },
    address: '广东省广州市番禺区大学城贝岗村商业街28号二楼优居租房门店',
    tags: ['海量房源', '免费服务', '透明签约', '全程陪同']
  }
]

onMounted(() => {
  loadFromStorage()
})

const loadFromStorage = () => {
  try {
    const data = uni.getStorageSync('space_data')
    if (data) {
      const parsed = JSON.parse(data)
      formData.value = {
        coverImage: parsed.coverImage || '',
        name: parsed.name || '',
        description: parsed.description || '',
        contact: {
          phone: parsed.contact?.phone || '',
          wechat: parsed.contact?.wechat || ''
        },
        address: parsed.address || '',
        tags: parsed.tags || []
      }
      console.log('加载数据成功:', formData.value.name)
    } else {
      loadExample(examples[0])
    }
  } catch (e) {
    console.error('加载失败:', e)
    loadExample(examples[0])
  }
}

const loadExample = (example: any) => {
  formData.value = {
    coverImage: example.coverImage,
    name: example.name.replace(/[^a-zA-Z\u4e00-\u9fa5]/g, ''),
    description: example.description,
    contact: {
      phone: example.contact.phone,
      wechat: example.contact.wechat
    },
    address: example.address,
    tags: [...example.tags]
  }
  uni.showToast({
    title: `已加载：${example.name}`,
    icon: 'none',
    duration: 1500
  })
}

const chooseImage = () => {
  uni.chooseImage({
    count: 1,
    sizeType: ['compressed'],
    sourceType: ['album', 'camera'],
    success: (res) => {
      if (res.tempFilePaths.length > 0) {
        formData.value.coverImage = res.tempFilePaths[0]
        console.log('选择图片成功')
      }
    }
  })
}

const addTag = () => {
  if (newTag.value.trim() && formData.value.tags.length < 5) {
    formData.value.tags.push(newTag.value.trim())
    newTag.value = ''
  }
}

const removeTag = (index: number) => {
  formData.value.tags.splice(index, 1)
}

const saveData = () => {
  if (!formData.value.name.trim()) {
    uni.showToast({ title: '请输入店铺名称', icon: 'none' })
    return
  }

  if (!formData.value.description.trim()) {
    uni.showToast({ title: '请输入店铺介绍', icon: 'none' })
    return
  }

  uni.showLoading({ title: '保存中...' })

  setTimeout(() => {
    try {
      const data = JSON.stringify({
        coverImage: formData.value.coverImage,
        name: formData.value.name.trim(),
        description: formData.value.description.trim(),
        contact: {
          phone: formData.value.contact.phone.trim(),
          wechat: formData.value.contact.wechat.trim()
        },
        address: formData.value.address.trim(),
        tags: formData.value.tags
      })

      uni.setStorageSync('space_data', data)
      console.log('保存成功')

      uni.hideLoading()
      uni.showToast({ title: '保存成功！', icon: 'success' })

      setTimeout(() => {
        uni.navigateBack()
      }, 1000)
    } catch (e) {
      uni.hideLoading()
      uni.showToast({ title: '保存失败', icon: 'none' })
      console.error('保存失败:', e)
    }
  }, 500)
}

const resetData = () => {
  uni.showModal({
    title: '确认重置',
    content: '确定要重置所有数据吗？',
    success: (res) => {
      if (res.confirm) {
        loadExample(examples[0])
        uni.showToast({ title: '已重置', icon: 'success' })
      }
    }
  })
}

const goBack = () => {
  uni.navigateBack()
}
</script>

<style lang="scss">
page {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.page-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.custom-nav {
  height: 88rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32rpx;
  background: transparent;

  .nav-left {
    width: 80rpx;
    height: 88rpx;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .nav-right {
    width: 80rpx;
  }

  .nav-arrow {
    font-size: 64rpx;
    color: #ffffff;
    font-weight: 300;
    line-height: 1;
  }

  .nav-title {
    font-size: 34rpx;
    font-weight: 600;
    color: #ffffff;
    text-align: center;
  }
}

.form-content {
  height: calc(100vh - 88rpx);
  background: #ffffff;
  border-radius: 40rpx 40rpx 0 0;
  padding: 32rpx;
}

.cover-upload {
  position: relative;
  width: 100%;
  height: 400rpx;
  border-radius: 24rpx;
  overflow: hidden;
  background: #f5f5f5;
  margin-bottom: 32rpx;

  .cover-image {
    width: 100%;
    height: 100%;
  }

  .upload-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .upload-icon {
      font-size: 80rpx;
      margin-bottom: 16rpx;
    }

    .upload-text {
      font-size: 28rpx;
      color: #999999;
    }
  }

  .upload-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;

    .overlay-text {
      font-size: 28rpx;
      color: #ffffff;
    }
  }

  &:active .upload-overlay {
    opacity: 1;
  }
}

.form-section {
  margin-bottom: 32rpx;

  .section-label {
    display: flex;
    align-items: center;
    margin-bottom: 16rpx;

    .label-icon {
      font-size: 32rpx;
      margin-right: 12rpx;
    }

    .label-text {
      font-size: 28rpx;
      font-weight: 600;
      color: #1a1a1a;
    }
  }

  .section-title {
    display: flex;
    align-items: center;
    margin-bottom: 24rpx;
    padding-bottom: 16rpx;
    border-bottom: 2rpx solid #f0f0f0;

    .title-icon {
      font-size: 36rpx;
      margin-right: 12rpx;
    }

    .title-text {
      font-size: 32rpx;
      font-weight: 600;
      color: #1a1a1a;
    }
  }

  .section-hint {
    font-size: 22rpx;
    color: #999999;
    margin-top: 12rpx;
    display: block;
  }

  .char-count {
    font-size: 22rpx;
    color: #999999;
    margin-top: 8rpx;
    display: block;
    text-align: right;
  }
}

.form-input {
  width: 100%;
  height: 88rpx;
  background: #f8fafc;
  border: 2rpx solid #f0f0f0;
  border-radius: 16rpx;
  padding: 0 24rpx;
  font-size: 28rpx;
  color: #1a1a1a;

  &:focus {
    border-color: #667eea;
    background: #ffffff;
  }
}

.form-textarea {
  width: 100%;
  min-height: 180rpx;
  background: #f8fafc;
  border: 2rpx solid #f0f0f0;
  border-radius: 16rpx;
  padding: 24rpx;
  font-size: 28rpx;
  color: #1a1a1a;
  line-height: 1.8;

  &:focus {
    border-color: #667eea;
    background: #ffffff;
  }
}

.input-placeholder {
  color: #c0c0c0;
  font-size: 28rpx;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16rpx;

  .tag-item {
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 12rpx 20rpx;
    border-radius: 24rpx;
    font-size: 24rpx;
    color: #ffffff;

    .tag-delete {
      margin-left: 12rpx;
      font-size: 32rpx;
      opacity: 0.8;
    }
  }

  .tag-input {
    background: #f5f5f5;
    padding: 12rpx 20rpx;
    border-radius: 24rpx;
    font-size: 24rpx;
    min-width: 120rpx;
  }
}

.contact-form {
  .contact-item {
    display: flex;
    align-items: center;
    background: #f8fafc;
    border: 2rpx solid #f0f0f0;
    border-radius: 16rpx;
    padding: 0 24rpx;
    margin-bottom: 16rpx;
    height: 88rpx;

    .contact-label {
      font-size: 32rpx;
      margin-right: 16rpx;
    }

    .contact-input {
      flex: 1;
      font-size: 28rpx;
      color: #1a1a1a;
    }

    &:focus-within {
      border-color: #667eea;
      background: #ffffff;
    }
  }
}

.example-section {
  margin: 40rpx 0;
  padding: 24rpx;
  background: #f8fafc;
  border-radius: 16rpx;

  .example-title {
    font-size: 28rpx;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 20rpx;
    display: block;
  }

  .example-list {
    display: flex;
    flex-direction: column;
    gap: 12rpx;

    .example-item {
      background: #ffffff;
      padding: 20rpx;
      border-radius: 12rpx;
      border: 2rpx solid #e8e8e8;

      .example-name {
        font-size: 26rpx;
        color: #333333;
      }

      &:active {
        background: #f0f0f0;
      }
    }
  }
}

.action-buttons {
  display: flex;
  gap: 20rpx;
  margin-top: 40rpx;

  .btn {
    flex: 1;
    height: 96rpx;
    border-radius: 48rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);

    .btn-icon {
      font-size: 36rpx;
      margin-right: 12rpx;
    }

    .btn-text {
      font-size: 30rpx;
      font-weight: 600;
    }

    &.save-btn {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #ffffff;
    }

    &.reset-btn {
      background: #ffffff;
      color: #1a1a1a;
    }
  }
}
</style>
