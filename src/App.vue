<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  updated() {
    this.test()
    let dataCart = window.sessionStorage.getItem('cartData')
    if (dataCart === null) {
      window.sessionStorage.setItem('cartData', '[]')
      dataCart = []
    }
    this.$store.commit(
      'StrSaveCartData',
      JSON.parse(window.sessionStorage.getItem('cartData'))
    )
  },
  methods: {
    test() {
      let path = this.$router.history.current.path
      window.sessionStorage.setItem('path', path)
      this.$store.commit('StrGetRouter', path)
    }
  }
}
</script>

<style lang="less"></style>
