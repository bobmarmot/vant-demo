<template>
  <!-- 底部导航 -->
  <van-tabbar v-if="$route.path !== '/shopcar'" router>
    <van-tabbar-item to="/home" icon="wap-home-o">{{ n1 }}</van-tabbar-item>
    <van-tabbar-item to="/member" icon="manager-o">{{ n2 }}</van-tabbar-item>
    <van-tabbar-item to="/shopcar" icon="cart-o" >{{ n3 }}</van-tabbar-item>
    <van-tabbar-item to="/search" icon="search">{{ n4 }}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  props: ['n1', 'n2', 'n3', 'n4'],
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped></style>
