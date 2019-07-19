<template>
  <div class="Photo">
    <div class="Photo_lists" v-for="item in photos" :key="item.id" @click="shopping_goinfo(item.id)">
      <img :src="item.img_url" alt />
      <p class="title">{{ item.title }}</p>
      <div class="Stock_info">
        <div class="info">
          <span>￥{{ item.sell_price }}</span>
          <b>{{ item.market_price }}</b>
        </div>
        <div class="Stock">
          <span>热卖中</span>
          <b>剩 {{ item.stock_quantity }} 件</b>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {

      pageSize: 1, //数据页码
      photos: [] //数据
    };
  },
  created() {
    this.getShopping();
  },
  methods: {
    getShopping() {
      this.axios
        .get("/api/getgoods?pageindex=" + this.pageSize)
        .then(result => {
          this.photos = result.data.message;
        });
    },
    shopping_goinfo(id){
        this.$router.push({path:"/home/shopping_info/Commodity_info/"+id});
    }
  }
};
</script>


<style lang="less">
.Photo {
  margin: 0;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .Photo_lists {
    width: 49%;
    display: inline-block;
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;
    img {
      display: block;
      width: 100%;
    }
    .title {
      font-size: 13px;
      color: black;
      font-weight: 700;
      background-color: #fff;
    }
    .Stock_info {
      .info {
        display: flex;
        span {
          color: red;
        }
        b {
          color: #bbb;
          font-weight: normal;
          text-decoration: line-through;
          margin-left: 10px;
        }
      }
      .Stock {
        display: flex;
        justify-content: space-between;
        color: #ccc;
        span {
          font-size: 12px;
        }
        b {
          font-size: 13px;
        }
      }
    }
  }
}
</style>