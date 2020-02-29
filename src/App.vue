<template>
  <div id="app">
    <router-view />
    <a href="http://www.beian.miit.gov.cn" class="block">粤ICP备18117384号</a>
  </div>
</template>
<script>
export default {
  name: "app",
  mounted() {
    // 关闭浏览器窗口的时候清空浏览器缓存在localStorage的数据
    window.onbeforeunload = function(e) {
      window.localStorage.clear();
    };
  }
};
</script>
<style lang="less">
.block {
  display: none;
}
</style>
