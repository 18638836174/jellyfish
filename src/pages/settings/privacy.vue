<template>
  <view class="page-container">
    <custom-nav title="隐私政策" />
    <view class="content">
      <view class="section">
        <view class="section-title">一、信息收集</view>
        <view class="section-text">
          我们承诺尊重并保护您的个人隐私。当您使用我们的服务时，我们可能会收集您主动提供的信息，包括但不限于：
        </view>
        <view class="section-text">1. 基本信息：昵称、头像、联系方式等</view>
        <view class="section-text">2. 发布信息：您发布的商品、服务等内容的文字、图片等</view>
        <view class="section-text">3. 位置信息：您选择或上传的位置相关信息</view>
      </view>

      <view class="section">
        <view class="section-title">二、信息使用</view>
        <view class="section-text">
          我们收集的信息将用于：
        </view>
        <view class="section-text">1. 提供、维护和改进我们的服务</view>
        <view class="section-text">2. 响应您的请求和反馈</view>
        <view class="section-text">3. 向您推送相关的产品更新、活动信息</view>
        <view class="section-text">4. 预防、发现和调查欺诈或违法行为</view>
      </view>

      <view class="section">
        <view class="section-title">三、信息共享</view>
        <view class="section-text">
          除以下情况外，我们不会与任何无关第三方共享您的个人信息：
        </view>
        <view class="section-text">1. 获得您的明确同意</view>
        <view class="section-text">2. 根据法律法规、法院命令或政府要求</view>
        <view class="section-text">3. 为保护我们的合法权益而必须披露</view>
      </view>

      <view class="section">
        <view class="section-title">四、信息安全</view>
        <view class="section-text">
          我们采用行业标准的安全措施来保护您的个人信息，防止数据遭到未经授权的访问、使用或泄露。
        </view>
      </view>

      <view class="section">
        <view class="section-title">五、联系我们</view>
        <view class="section-text">
          如您对本隐私政策有任何疑问，请通过意见反馈功能联系我们。我们将尽快回复您的咨询。
        </view>
      </view>

      <view class="update-time">更新日期：2024年1月1日</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CustomNav from '@/components/custom-nav/index.vue'

</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}
.page-container {
  min-height: 100vh;
  background-color: #f5f5f5;
}
.content {
  padding: 24rpx;
}
.section {
  background-color: #ffffff;
  border-radius: 16rpx;
  padding: 32rpx;
  margin-bottom: 24rpx;
  .section-title {
    font-size: 32rpx;
    font-weight: 600;
    color: #323233;
    margin-bottom: 20rpx;
  }
  .section-text {
    font-size: 28rpx;
    color: #646566;
    line-height: 1.8;
    margin-bottom: 12rpx;
    text-indent: 2em;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.update-time {
  text-align: center;
  font-size: 24rpx;
  color: #969799;
  padding: 32rpx 0;
}
</style>
