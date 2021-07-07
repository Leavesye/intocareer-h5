<template>
  <div class="header-part">
    <i class="iconfont iconmenu" @click="toggleMenu"></i>
    <img :src="logo" />
  </div>
</template>
<script>

export default {
  computed: {
    logo: function() {
      return require('@/assets/imgs/logo.png')
    },
  },
  methods: {
    toggleMenu() {
      this.$store.commit(`TOGGLE_MENU`, !this.$store.state.isShowMenu)
    }
  }
};
</script>
<style scoped>
.header-part {
  position: relative;
  height: 88px;
  background: #292E3D;
  overflow:hidden;
}
.header-part i {
  position: absolute;
  left: 32px;
  top: 24px;
  font-size: 40px;
  color: #fff;
}
.header-part img {
  display: block;
  margin: 0 auto;
  width: 140px;
  height: 44px;
  margin-top: 24px;
}
</style>
