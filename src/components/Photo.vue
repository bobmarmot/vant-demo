<template>
  <div>
    <!-- 导入头部组件 -->
    <mbx nav1="返回" nav2="黑马程序员.vant"></mbx>
    <van-tabs @click="changeTab">
      <van-tab :title="item.title" :name="item.id" v-for="item in imgCateList" :key="item.id">
        <ul>
          <li v-for="item in imgList" :key="item.id" id="img-list" @click="toImgDetail(item.id)">
            <van-image id="van-image" :src="item.img_url"></van-image>
            <div id="text">
              <div>{{ item.title }}</div>
              <div v-html="item.zhaiyao"></div>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
    <tab n1="首页" n2="会员" n3="购物车" n4="搜索"></tab>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      imgCateList: [],
      imgList: []
    }
  },
  created() {
    this.getImgCateList()
    this.getDefaultImgList()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    async getImgCateList() {
      const res = await this.$http.get(`/api/getimgcategory`)
      this.imgCateList = res.data.message
      this.imgCateList.unshift({
        id: 0,
        title: '全部'
      })
    },
    async getDefaultImgList(id) {
      if (id === undefined) {
        id = 0
      }
      const res = await this.$http.get(`/api/getimages/${id}`)
      this.imgList = res.data.message
    },
    changeTab(id) {
      this.getDefaultImgList(id)
    },
    // 查看 图片详情
    toImgDetail(id) {
      this.$store.commit('StrGetDetailID', id)
      this.$router.push('/imagedetail')
    }
  },
  computed: {
    ...mapState(['detailId'])
  }
}
</script>

<style lang="less" scope>
#van-image {
  width: 100%;
  height: auto;
}
#img-list {
  margin: 12px 12px 0;
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 2%;
  overflow: hidden;
  .van-image {
    width: 100%;
  }
  #text {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    div:nth-child(2) {
      color: #ccc;
      font-size: 14px;
    }
  }
}
</style>
