<template>
  <div>
    <mbx nav2="黑马程序员.vant"></mbx>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in getUrlList" :key="item.id">
        <img :src="item.img" class="slide" />
      </van-swipe-item>
    </van-swipe>
    <!-- 九宫格 -->
  <van-grid :border="false" :column-num="3">
      <van-grid-item to="/news/list">
        <img src="../assets/images/menu1.png" alt="">
        <p>新闻资讯</p>
      </van-grid-item>
      <van-grid-item to="/photo/list">
        <img src="../assets/images/menu2.png" alt="">
        <p>图片分享</p>
      </van-grid-item>
      <van-grid-item to="/goods/list">
        <img src="../assets/images/menu3.png" alt="">
        <p>商品购买</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/images/menu4.png" alt="">
        <p>留言反馈</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/images/menu5.png" alt="">
        <p>视频专区</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/images/menu6.png" alt="">
        <p>联系我们</p>
      </van-grid-item>
    </van-grid>
    <tab n1="首页" n2="会员" n3="购物车" n4="搜索"></tab>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getUrlList: []
    }
  },
  created() {
    this.getlunbo()
  },
  methods: {
    async getlunbo() {
      const { data: res } = await this.$http.get('/api/getlunbo')
      console.log(res)
      if (res.status !== 0) return
      this.getUrlList = res.message
    }
  }
}
</script>

<style lang="less" scoped>
.slide {
  width: 100%;
  height: 200px;
}
.van-grid-item {
  width: 33.333333%;
  box-sizing: border-box;
  img {
    width: 60px;
  }
  p {
    font-size: 14px;
  }
}
</style>
