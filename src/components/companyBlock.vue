<template>
  <div v-if="companyItem.img_data==''">
    <div class="infiListItem">
      <div class="infiListItemTitle">
        <h3>{{companyItem.title}}</h3>
      </div>
      <div>
        <p :class="isShow?'content':'content showTwo'" v-html="companyItem.content"></p>
        <a
          v-if="companyItem.content.length>46"
          @click="onShoweded"
        >{{isShow?'收起':'更多'}}</a>
      </div>

      <div class="itemTime">
        <span>{{companyItem.create_time | setDate() }}</span>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="infiListItem">
      <div class="infiListItemTitle">
        <h3>{{companyItem.title}}</h3>
      </div>
      <div>
        <p :class="isShow?'content':'content showTwo'">{{companyItem.content}}</p>
        <a
          v-if="companyItem.content.length>46"
          @click="onShoweded"
        >{{isShow?'收起':'更多'}}</a>
      </div>

      <div class="itemImgs">
        <ul>
          <li
            v-for="(item1,index1) of companyItem.img_data"
            :key="index1"
            @click="imgPreview(companyItem.img_data,index1)"
          >
            <img :src="'http://img.rosssss.top/'+item1" alt />
          </li>
        </ul>
      </div>
      <div class="itemTime">
        <span>{{companyItem.create_time | setDate() }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

import { ImagePreview } from "vant";
export default {
  props: ["companyItem"],
  data() {
    return { isShow: false };
  },

  filters: {
    setDate: function(value) {
      return moment(value * 1000).format("YYYY-MM-DD HH:mm");
    }
  },
  mounted() {},
  methods: {
    //图片预览功能
    imgPreview(img, i) {
      let images = [];
      img.forEach((item, index) => {
        images[index] = "http://img.rosssss.top/" + item;
      });
      ImagePreview({
        images,
        startPosition: i
      });
    },
    onShoweded() {
     
        this.isShow = !this.isShow;
      
    }
  }
};
</script>
<style lang="less" scoped>
.infiListItem {
  margin: 10px 12px;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
  .infiListItemTitle {
    text-align: left;
    padding: 5px 0;

    h3 {
      font-size: 16px;
      color: #1a8dfd;
      font-weight: 600;
    }
  }
  div {
    p.content {
      text-align: left;
      font-size: 14px;
      color: #333;
    }

    a {
      font-size: 13px;
      float: right;
      color: #ff890ae0;
      :active {
        text-decoration: none;
      }
    }
  }
  .itemImgs {
    padding: 5px 5px;

    ul {
      overflow: hidden;
      flex-wrap: wrap;
      display: flex;
      li {
        width: 33.33%;
        height: 15vh;
        overflow: hidden;

        img {
          height: 100%;
          box-sizing: border-box;
          width: 100%;
          object-fit: cover;
          padding: 5px;
        }
      }
    }
  }

  .itemTime {
    padding-top: 10px;
    font-size: 12px;
    color: #808080;
  }
}
.showTwo {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>