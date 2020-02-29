<template>
  <div class="home">
    <div class="title">
      <h1>面试题分享</h1>
    </div>
    <!-- 密码输入框 -->
    <van-password-input
      :value="value"
      info="密码为 6 位数字"
      :error-info="errorInfo"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />
    <!-- 数字键盘 -->
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      showKeyboard: true,
      errorInfo: ""
    };
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);

      if (this.value !== "666666") {
        this.errorInfo = "密码错误";
      } else {
        console.log("密码正确");
        localStorage.setItem("token",'1')

        this.$router.push({ path: "/Info" });
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
};
</script>
<style lang="less" scoped>
.home {
  position: relative;
  top: 25vh;
  margin: 0 auto;
  .title {
    font-size: 25px;
    margin-bottom: 30px;
    font-weight: 900;
    h1 {
      text-align: center;
    }
  }
}
</style>
