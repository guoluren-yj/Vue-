<template>
  <div class="Newsinfo_container">
    <!-- 主标题 -->
    <h3 class="Newsinfo_title">{{ result.title }}</h3>
    <!-- 子标题 -->
    <div class="subtitle">
      <span>发布时间：{{ result.add_time | Mytime }}</span>
      <span>点击次数：{{ result.click }}</span>
    </div>
    <!-- 内容区域 -->
    <div class="Newsinfo_content" v-html="result.content"></div>

    <!-- 评论模块 -->
    <comment :id="this.id"></comment>
  </div>
</template>



<script>
// 导入评论路由模块
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      result: ""
    };
  },
  created() {
    this.getNewsinfo();
  },
  methods: {
    getNewsinfo() {
      this.axios.get("/api/getnew/" + this.id).then(result => {
        if (result.status == 200) {
          this.result = result.data.message[0];
        }
      });
    }
  },
  components: {
    comment
  }
};
</script>



<style lang="less">
.Newsinfo_container {
  padding: 0 6px;
  h3 {
    text-align: center;
    font-size: 14px;
    color: darkred;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
  }
  img {
    width: 100%;
  }
}
</style>