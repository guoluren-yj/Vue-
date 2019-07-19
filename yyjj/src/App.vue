<template>
  <div class="App_container">
    <!-- 顶部 -->
    <mt-header fixed title="绅士的流氓"></mt-header>
    <!-- 返回按钮 -->
    <span class="go" @click="go">
      <span class="mui-icon mui-icon-redo"></span>
    </span>
    <span class="out" @click="out">
      <span class="mui-icon mui-icon-undo"></span>
    </span>

    <!-- content -->
    <transition name="my">
      <router-view></router-view>
    </transition>

    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-yj" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-yj blue" to="/member">
        <span class="mui-icon mui-icon-contact">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-yj" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-yj" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    go() {
      this.$router.go(1)
    },
    out(){
     this.$router.go(-1)
    }
  }
};
</script>


<style lang="less">
.App_container {
  padding: 40px 0 60px 0;
  overflow-x: hidden;
}
.my-enter {
  opacity: 0;
  transform: translateX(100%);
}

.my-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.my-enter-active,
.my-leave-active {
  transition: all 0.1s ease;
}

// 返回按钮
.go {
  position: fixed;
  z-index: 99999;
  top: 10px;
  right: 0;
  color: white;
  font-size: 14px;
}
.out {
  position: fixed;
  z-index: 99999;
  top: 10px;
  left: 0;
  color: white;
  font-size: 14px;
}

// 该类名  解决底部4个nav的点击bug

.mui-active {
  color: blue !important;
}

.mui-bar-tab .mui-tab-item-yj {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-yj .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-yj {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-yj .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item-yj {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
</style>