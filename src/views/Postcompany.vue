<template>
  <div class="company">
    <div class="header">
      <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="companyName"
        name="title"
        label="公司名"
        placeholder="公司名"
        required
        maxlength="20"
      />
      <van-field
        v-model="message"
        name="content"
        rows="6"
        autosize
        label="留言"
        type="textarea"
        placeholder="请输入留言"
        required
      />
      <van-field name="img_data" label="文件上传">
        <template #input>
          <van-uploader
            v-model="img_data"
            :after-read="afterRead"
            :max-count="9"
            :before-delete="beforeDelete"
          />
        </template>
      </van-field>

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Toast } from "vant";
import { getImg, postCompany } from "@/api/postUrl.js";
export default {
  data() {
    return {
      companyName: "", //公司名字
      img_data: [],
      message: "",
      imgs: []
    };
  },

  methods: {
    onClickLeft() {
      this.$router.back();
    },
    //文件上传
    async afterRead(file, detail) {
      // 此时可以自行将文件上传至服务器
      file.status = "uploading";
      file.message = "上传中...";
      document.querySelector('.van-button').disabled=true;
      let formdata = new FormData();
      formdata.append("tmp_file", file.file);

      const res = await getImg(formdata);
      console.log(res);
      if (res.data.msg === "success") {
        file.status = "done";
        document.querySelector('.van-button').disabled='';
      }
      // if (this.imgs[detail.index]==undefined ) {
      //   console.log(11);

      // this.imgs.push(res.data.data);
      this.imgs[detail.index] = res.data.data;
      // } else {
      //   console.log(22);

      //   this.imgs.splice(detail.index,1,res.data.data)
      // }
    },
    beforeDelete(file, detail) {
      console.log(file, detail);
      this.imgs.splice(detail.index, 1);
      return true;
    },

    async onSubmit(values) {
      let formdata = new FormData();
      let img_data = this.imgs.toString();
      formdata.append("title", values.title);
      formdata.append("content", values.content);
      formdata.append("img_data", img_data);

      const res = await postCompany(formdata);
      if (res.data.msg == "success") {
        document.querySelector('.van-button').disabled=true;
        Toast("提交成功");
         this.$router.push({name:'Index'})
      }
    }
  }
};
</script>
<style lang="less" scoped>
</style>