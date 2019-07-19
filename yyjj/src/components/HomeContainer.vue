<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000" class="lun">
      <mt-swipe-item v-for="item in getlunbolists" :key="item.id">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../images/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/PhotoSharing">
          <img src="../images/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/CommodityPurchase">
          <img src="../images/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../images/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../images/menu5.png" alt />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../images/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>



<script>
export default {
  data() {
    return {
      getlunbolists: []
    };
  },
  methods: {
    getLunbotu() {
      this.axios
        .get("http://www.liulongbin.top:3005/api/getlunbo")
        .then(result => {
          if (result.status == 200) {
            this.getlunbolists = result.data.message;
          }
        });
    }
  },
  created() {
    this.getLunbotu();
  }
};
</script>

<style lang="less">
.lun {
  height: 200px;
  img {
    height: 100%;
    width: 100%;
  }
}
.mui-grid-9 {
  background-color: #fff !important;
  border: none !important;
  li {
    background-color: white;
    width: 33.33% !important;
    border: none !important;
    img {
      width: 60px;
      height: 60%;
    }
  }
}
</style>