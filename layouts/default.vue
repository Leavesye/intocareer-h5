<template>
  <div>
    <Header />
    <transition name="fade">
      <Nuxt />
    </transition>
    <Footer />
    <ul class="menus" v-if="$store.state.isShowMenu">
      <li v-for="(item, i) in menus" :key="i" @click="linkTo(item)">{{item.text}}</li>
    </ul>
  </div>
</template>
<script>

export default {
  data() {
    return {
      menus: [
        { text: '首页', link: '/' },
        { text: '咨询服务', link: '/service' },
        { text: '关于我们', link: '/about' },
        { text: '校园计划', link: '/plan' },
        { text: '咨询者注册', link: 'https://intocareer.cn/register/consumer' },
        { text: 'IntoCareer Cookies 政策', link: `/terms?url=${encodeURIComponent('/IntoCareerCookies.pdf')}`},
        { text: 'IntoCareer 隐私政策', link: `/terms?url=${encodeURIComponent('/IntoCareerPrivatePolice.pdf')}`},
      ]
    }
  },
  methods: {
    linkTo(item) {
      if (item.link.includes('http')) {
        window.location.href = item.link
      } else {
        this.$router.push(item.link)
      }
      this.$store.commit(`TOGGLE_MENU`, !this.$store.state.isShowMenu)
    }
  },
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}
body {
  height: 100%;
  -webkit-text-size-adjust: 100% !important;  
  text-size-adjust: 100% !important;  
  -moz-text-size-adjust: 100% !important;  
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.default-layout {
  position: relative;
}
.xf-btns {
  position: fixed;
  z-index: 21000;
  bottom: 20px;
  right: 20px;
}
.xf-btns img {
  width: 80px;
  height: 80px;
  display: block;
  margin-top: 20px;
}
.xf-btns img.blink {
  animation: blink 2s linear infinite;
}
@keyframes blink {
  0%{opacity: 1;}
  50%{opacity: 0.5;}
  100%{opacity: 0.8;}
}
.menus {
  position: absolute;
  top: 88px;
  left: 0;
  z-index:1000;
}
.menus li {
  padding-left: 56px;
  width: 444px;
  height: 112px;
  line-height: 112px;
  opacity: 0.9;
  background: #292E3D;
  font-size: 28px;
  color: #D1D1D1;
  letter-spacing: 0;
  text-align: left;
}
</style>
