<template>
  <view class="page-container">
    <custom-nav title="用户协议" @back="goBack" />
    <view class="content">
      <view class="section">
        <view class="section-title">一、服务说明</view>
        <view class="section-text">
          本平台致力于为用户提供便捷的商品和服务信息发布、浏览服务。用户在使用本平台服务前，请仔细阅读本协议。
        </view>
      </view>

      <view class="section">
        <view class="section-title">二、用户注册</view>
        <view class="section-text">1. 您有权选择是否注册成为本平台用户</view>
        <view class="section-text">2. 您承诺注册信息真实、准确、完整</view>
        <view class="section-text">3. 您有责任妥善保管账户信息，因个人保管不当造成的损失由用户自行承担</view>
      </view>

      <view class="section">
        <view class="section-title">三、信息发布规范</view>
        <view class="section-text">用户发布信息应遵守以下规范：</view>
        <view class="section-text">1. 不得发布违法、违规、有害信息</view>
        <view class="section-text">2. 不得发布虚假、欺诈信息</view>
        <view class="section-text">3. 不得侵犯他人合法权益</view>
        <view class="section-text">4. 信息内容应真实、准确、完整</view>
      </view>

      <view class="section">
        <view class="section-title">四、知识产权</view>
        <view class="section-text">
          本平台的所有内容，包括但不限于文字、图片、界面设计等，均受知识产权法律保护。用户在使用本平台服务时，不得擅自复制、修改、传播相关内容。
        </view>
      </view>

      <view class="section">
        <view class="section-title">五、免责声明</view>
        <view class="section-text">
          用户在使用本平台服务时，应自行判断信息的真实性和可靠性。因交易行为产生的任何纠纷，由用户自行解决，与本平台无关。
        </view>
      </view>

      <view class="section">
        <view class="section-title">六、协议修改</view>
        <view class="section-text">
          我们有权随时修改本协议，修改后的协议将在平台上公布。如您继续使用服务，视为接受修改后的协议。
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
