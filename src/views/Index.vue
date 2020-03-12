<template>
  <div class="info">
    <!-- 头部 -->
    <van-sticky>
      <van-nav-bar>
        <van-icon
          name="edit"
          slot="left"
          @click="$router.push({name:'Postcompany'})"
          class="iconBtn"
        />
        <van-search
          slot="title"
          v-model="keywords"
          placeholder="请输入搜索关键词"
          input-align="center"
          @clear="clearData"
        />
        <van-icon name="search" slot="right" class="iconBtn" @click="onSearch" />
      </van-nav-bar>
    </van-sticky>
    <!-- 搜索框 -->
    <!-- <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" /> -->
    <!-- 数据列表 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="infoList">
          <compantBlock v-for="(i,index) in companyData" :key="index" :companyItem="i"></compantBlock>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>
<script>
import compantBlock from "@/components/companyBlock.vue";
import { Toast } from "vant";
import { getData } from "@/api/getList.js";
export default {
  data() {
    return {
      isLoading: false,
      companyData: [],
      value: "",
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      page: 1,
      total: "",
      last_id: "",
      keywords: ""
    };
  },
  beforeMount() { this.geteDa();},
  mounted() {
   
  },
  components: {
    compantBlock
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    async geteDa(last_id) {
      let formdata = new FormData();
      formdata.append("keywords", this.keywords);
      formdata.append("last_id", last_id);
      formdata.append("page", this.page);
      const res = await getData(formdata);
      console.log(res);

      this.total = res.data.data.count;

      if (this.companyData.length == 0) {
        this.companyData = res.data.data.res;
      } else {
        res.data.data.res.forEach(item => {
          this.companyData.push(item);
        });
      }
      // this.companyData = res.data.data.res;
    },
    onRefresh() {
      setTimeout(() => {
        this.companyData = [];
        this.keywords = "";
        this.page = 1;
        this.geteDa();
        Toast("刷新成功");
        this.isLoading = false;
        this.loading = false;
        this.finished = false;
      }, 1000);
    },
    onLoad() {
      setTimeout(() => {
        if (Math.ceil(this.total / 10) >= 1) {
          this.last_id = this.companyData[this.companyData.length - 1].id;
          this.page++;
          this.geteDa(this.last_id);
          this.loading = false;
        } else {
          this.finished = true;
        }
      }, 1000);
    },
    onSearch() {
      this.companyData = [];
      this.geteDa();
    },
    clearData() {
      this.keywords = "";
      this.companyData = [];
      this.geteDa();
    }
  }
};
</script>
<style lang="less" scoped>
.iconBtn {
  font-size: 25px;
}
.van-search{
padding: 6px 12px;
}
</style>