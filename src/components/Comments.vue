<template>
  <div class="commentBox">
    <h4>发表评论</h4>
    <hr />
    <van-cell-group>
      <van-field rows="3" autosize type="textarea" placeholder="请输入留言" />
    </van-cell-group>
    <van-button type="info" block>发表评论</van-button>
    <van-button block class="more">加载更多</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.van-cell-group {
  border: 2px solid #ededed;
  height: 100px;
}
.commentBox {
  margin: 0 5px;
}
.commentBox button {
  margin: 10px 0;
}
.more {
  border: 1px solid #ffa7a7;
  color: #ff4444;
}
</style>
