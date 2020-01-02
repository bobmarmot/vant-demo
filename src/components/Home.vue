<template>
  <div>
    <mbx nav2="黑马程序员.vant"></mbx>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="" alt="" />
      </van-swipe-item>
    </van-swipe>
    <tab n1="首页" n2="会员" n3="购物车" n4="搜索"></tab>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    this.getlunbo()
  },
  methods: {
    async getlunbo() {
      const { data: res } = await this.$http.get('/api/getlunbo')
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped></style>
