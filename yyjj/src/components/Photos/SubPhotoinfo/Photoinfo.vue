<template>
  <div class="Pti">
    <!-- 头部区域 -->
    <div class="Pti_header">
      <h1>{{ lists.title }}</h1>
      <span>发表时间 : {{ lists.add_time | Mytime}}</span>
      <b>点击 {{ lists.click }} 次</b>
    </div>
    <hr />

    <!-- 缩略图 -->
    <div>
      <vue-preview :slides="imgs"></vue-preview>
    </div>
    <!-- 内容区域 -->
    <div class="Pti_content" v-html="lists.content"></div>
    <!-- 发表评论区域   导入组件 需要传入 id -->
    <comment :id="id"></comment>
  </div>
</template>


<script>
// 导入评论区域组件
import comment from "../../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id, //存放详情页图片的id
      lists: [], //数据
      imgs: [], //缩略图数据
     
    };
  },
  created() {
    this.getPhotoinfo(); //详情数据
    this.getsuonuetu(); //缩略图数据
  },
  methods: {
    getPhotoinfo() {
      // 获取图片详情数据
      this.axios.get("/api/getimageInfo/" + this.id).then(result => {
        this.lists = result.data.message[0];
      });
    },
    getsuonuetu() {
      // 获取缩略图的数据
      this.axios.get("/api/getthumimages/" + this.id).then(result => {
        this.imgs = result.data.message;
        this.imgs.forEach(item => {
          item.msrc = item.src;
          item.w = 600;
          item.h = 400;
        });
      });
    }
  },
  components: {
    // 挂在评论组件
    comment
  }
};
</script>


<style lang="less">
.Pti {
  padding: 0 5px;

  .Pti_header {
    overflow: hidden;
    h1 {
      font-size: 13px;
      color: blue;
      text-align: center;
    }
    span {
      float: left;
      font-size: 12px;
    }
    b {
      float: right;
      font-size: 12px;
      font-weight: normal;
    }
  }
  .Pti_content {
    font-size: 12px !important;
  }

  figure {
    width: 33.33%;
    height: 90px;
    margin: 0;
    padding: 5px;
    display: inline-block;

    a {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>