<template>
  <div>
    <!-- 顶部滑动条 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id == 0? 'mui-active' : '']"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
            v-for="item in list"
            :key="item.id"
            @click="getPhoto(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="info-list">
      <router-link
        tag="li"
        :to="'/home/PhotoSharing/Shotoinfo/' + item.id"
        v-for="item in photos"
        :key="item.id"
        
      >
        <img v-lazy="item.img_url" />
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <span class="info-content">{{ item.zhaiyao }}</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>


<script>
// 引入mui js文件
import mui from "../../dist/js/mui.min.js";

export default {
  data() {
    return {
      list: [], //列表数据
      photos: [] //图片列表数据
    };
  },
  methods: {
    getList() {
      //获取图片列表
      // 发送axios请求
      this.axios.get("/api/getimgcategory").then(result => {
        //需要手动往前面添加一个  全部  的数据
        result.data.message.unshift({ title: "全部", id: 0 });
        this.list = result.data.message;
      });
    },
    getPhoto(id) {
      //获取图片数据
      this.axios.get("/api/getimages/" + id).then(result => {
        this.photos = result.data.message;
      });
      console.log(11);
    }
  },
  created() {
    this.getList(); //分类列表
    this.getPhoto(0); //图片数据列表
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="less">
* {
  touch-action: pan-y;
}

.info-list {
  list-style: none;
  margin: 0;
  padding: 0 10px;
  li {
    background-color: #ccc;
    position: relative;
    width: 100%;
    img {
      width: 100%;
      display: block;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;
    }
    // 图片样式
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    //字体样式
    .info {
      width: 100%;
      height: 70px;
      color: white;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.4);
      .info-title {
        font-size: 13px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .info-content {
        display: block;
        font-size: 12px;
        height: 40px;
        width: 100%;

        // 超出文本两行隐藏文字显示省略号
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}
</style>