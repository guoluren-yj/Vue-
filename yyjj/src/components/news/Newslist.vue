<template lang="">
    <div>
        <ul class="mui-table-view fz">
			<li class="mui-table-view-cell mui-media" v-for="item in lists" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1 style="font-size:12px">{{ item.title }}</h1>
                        <div class='mui-ellipsis news_flex'>
                            <span>发表时间：{{ item.add_time | Mytime }}</span>  
                            <i>点击次数：{{ item.click }}</i>
                        </div>  
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  // 获取数据
  data() {
    return {
      lists: ""
    };
  },
  created() {
    this.getNewslist();
  },
  methods: {
    getNewslist() {
      this.axios.get("/api/getNewslist").then(result => {
        if (result.status == 200) {
          this.lists = result.data.message;
        }
      });
    }
  }
};
</script>


<style lang="less">
.fz {
    h1{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
  font-size: 12px !important;
  i {
    font-style: normal;
  }
  .news_flex {
    display: flex;
    justify-content: space-between;
  }
}
</style>