<template>
  <div class="cmt_containei">
    <h3 class="cmt_title">发表评论</h3>
    <hr />
    <textarea
      class="cmt_txt"
      placeholder="请不要bb太多（最多bb120字）"
      maxlength="120em"
      v-model="msg"
      @keyup.13="Add_Mone"
    ></textarea>
    <mt-button type="primary" size="large" @click="Add_Mone">发表评论</mt-button>

    <div class="cmt_content" v-for="(item,i) in comments" :key="i">
      <p
        class="cmt_p_top"
      >第{{ i + 1 }}楼&nbsp;&nbsp;{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | Mytime }}</p>
      <p
        class="cmt_p_bottom"
      >{{ (item.content == "" || item.content == "undefined") ? "此用户很懒，什么都没有留下" : item.content}}</p>
    </div>

    <mt-button type="danger" size="large" plain @click="getMone">加载更多</mt-button>
  </div>
</template>

<script>
// 导入toast包
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageSize: 1, //默认为第一页
      comments: [],
      msg: "" //用户发表的内容
    };
  },
  created() {
    this.getNewsCmt();
  },
  methods: {
    getNewsCmt() {
      //获取评论数据
      this.axios
        .get("/api/getcomments/" + this.id + "?pageindex=" + this.pageSize)
        .then(result => {
          if (result.status == 200) {
            this.comments = this.comments.concat(result.data.message);
          } else {
            Toast("评论加载失败");
          }
        });
    },
    getMone() {
      //获取更多数据
      this.pageSize++;
      this.getNewsCmt();
    },
    Add_Mone() {
      // 发表评论
      // 判断msg是否为空
      if (this.msg.trim() == "") {
        return Toast("评论内容不能为空！");
      }
      // 发送请求    post请求的传递参数必须在第二个参数对象
      this.axios
        .post("api/postcomment/" + this.id + "", { content: this.msg })
        .then(result => {
          if (result.status == 200) {
            // 创建一个评论对象
            var cat = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg
            };
            // 把评论的信息添加到数组中
            this.comments.unshift(cat);
            //清空评论的内容
            this.msg = "";
            Toast("评论发表成功")
          }else{
            Toast("评论发表失败")
          }
          
        });
    }
  },
  props: ["id"]
};
</script>

<style lang="less">
.cmt_containei {
  .cmt_title {
    text-align: left;
    font-size: 18px;
  }
  .cmt_txt {
    height: 100px;
    font-size: 12px;
  }
  .cmt_content {
    margin-top: 5px;
    .cmt_p_top {
      // 超出部分显示省略号
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      background-color: #ccc;
      height: 40px;
      line-height: 40px;
      margin-bottom: 0;
    }
    .cmt_p_bottom {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-indent: 2em;
      height: 45px;
      line-height: 45px;
      background-color: #fff;
      margin-bottom: 3px;
      font-size: 12px;
    }
  }
}
</style>