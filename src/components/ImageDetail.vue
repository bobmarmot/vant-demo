<template>
  <div>
    <!-- 导入头部组件 -->
    <mbx nav1="返回" nav2="黑马程序员.vant"></mbx>
    <!-- 标题文章盒子 -->
    <div id="article-box">
      <div id="title">
        {{ imgDetailInfo.title }}
      </div>
      <div id="article-info">
        <span id="add-time">
          {{ imgDetailInfo.add_time }}
        </span>
        <span id="clickNum"> 点击 : {{ imgDetailInfo.click }} </span>
      </div>
      <hr />
      <!-- 图片展示区 -->
      <van-grid :border="false" :column-num="3" square>
        <van-grid-item v-for="(item, index) in imgDetailList" :key="index" @click="previewImage(index)">
          <van-image :src="item.src" />
        </van-grid-item>
      </van-grid>
      <div id="content" v-html="imgDetailInfo.content"></div>
    </div>
    <Comments />
    <!-- 导入底部组件 -->
    <tab n1="首页" n2="会员" n3="购物车" n4="搜索"></tab>
  </div>
</template>

<script>
import Comments from './Comments'
export default {
  data() {
    return {
      imgDetailList: [],
      imgDetailInfo: {}
    }
  },
  created() {
    this.getImgDetailList()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    async getImgDetailList() {
      let id = sessionStorage.getItem('detailId')
      const reslist = await this.$http.get(`/api/getthumimages/${id}`)
      this.imgDetailList = reslist.data.message
      const resInfo = await this.$http.get(`/api/getimageInfo/${id}`)
      this.imgDetailInfo = resInfo.data.message[0]
    },
    previewImage(index) {
      let srcList = []
      this.imgDetailList.forEach(item => {
        srcList.push(item.src)
      })
      console.log(srcList)
      this.$imagePreview({
        images: srcList,
        startPosition: index
      })
    }
  },
  components: {
    Comments
  }
}
</script>

<style lang="less">
#article-info {
  font-size: 10px;
  color: #8f8f94;
  padding: 0 10px 10px 10px;
}
#title {
  font-weight: bold;
  padding: 20px;
  color: #4da2f8;
  font-size: 15px;
  text-align: center;
}
#clickNum {
  float: right;
}
.van-image-preview__image {
  margin: auto;
  width: 100%;
}
</style>
