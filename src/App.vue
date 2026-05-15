<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
@import "vant-weapp/lib/common/index.wxss";

@font-face {
  font-weight: 400;
  font-family: vant-icon;
  font-style: normal;
  font-display: auto;
  src: url('/static/fonts/vant-icon-d3825a.woff2') format('woff2'),
    url('/static/fonts/vant-icon-d3825a.woff') format('woff'),
    url('/static/fonts/vant-icon-d3825a.ttf') format('truetype');
}

.van-icon {
  position: relative;
  font: normal normal normal 14px/1 vant-icon;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}
</style>