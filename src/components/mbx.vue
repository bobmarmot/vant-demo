<template>
  <!-- 头部 -->
  <div class="header_box">
    <span @click="$router.go(-1)" v-if="$route.path != '/home'" class="goback">
      <van-icon style="margin-right:3px;" name="arrow-left" />
      {{ nav1 }}
    </span>
    {{ nav2 }}
  </div>
</template>

<script>
export default {
  props: ['nav1', 'nav2'],
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped></style>
