import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// 引入组件模块
// 首页四个底部按钮
import HomeContainer from "./components/HomeContainer.vue"
import MemberContainer from "./components/MemberContainer.vue"
import ShopcarContainer from "./components/ShopcarContainer.vue"
import SearchContainer from "./components/SearchContainer.vue"
// 新闻咨询
import Newslist from "./components/news/Newslist.vue"
import Newsinfo from "./components/news/Newsinfo.vue"
// 图片分享
import PhotoSharing from "./components/Photos/PhotoSharing.vue"
// 图片分享详情
import Photoinfo from "./components/Photos/SubPhotoinfo/Photoinfo.vue"

// 商品购买
import Commodity_Purchase from "./components/shopping/CommodityPurchase"
// 导入商品购买详情页
import Commodity_info from "./components/shopping/shopping_info/Commodity_info.vue"
export default new Router({
  routes: [{ // 主页下面的菜单页面
      path: "/",
      component: HomeContainer
    }, {
      path: "/home",
      component: HomeContainer
    },
    {
      path: "/member",
      component: MemberContainer
    }, {
      path: "/search",
      component: SearchContainer
    }, {
      path: "/shopcar",
      component: ShopcarContainer
    },
    // 新闻资讯
    {
      path: "/home/newslist",
      component: Newslist
    },
    // 新闻详情
    {
      path: "/home/newsinfo/:id",
      component: Newsinfo
    },
    { //图片分享
      path: "/home/PhotoSharing",
      component: PhotoSharing
    },
    {
      //图片分享详情
      path: "/home/PhotoSharing/Shotoinfo/:id",
      component: Photoinfo
    },
    {
      //图片分享详情
      path: "/home/CommodityPurchase",
      component: Commodity_Purchase
    },
    {
      //商品详情页
      path: "/home/shopping_info/Commodity_info/:id",
      name:"Commodity_info",
      component: Commodity_info
    }
  ],
  linkActiveClass: "mui-active"
})