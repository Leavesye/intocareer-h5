<template>
  <section class="footer-part">
    <div class="link-line flex-hb">
      <img :src="logo" />
      <div @click="linkTo('/service')">咨询服务</div>
      <div @click="linkTo('/about')">关于我们</div>
      <div @click="linkTo('/plan')">校园计划</div>
    </div>
    <div class="link-line flex-hb">
      <div @click="linkTo(`/terms?url=${encodeURIComponent('/IntoCareerCookies.pdf')}`)">IntoCareer Cookies 政策</div>
      <div @click="linkTo(`/terms?url=${encodeURIComponent('/IntoCareerPrivatePolice.pdf')}`)">IntoCareer 隐私政策</div>
    </div>
    <ul class="flex-he icon-list">
      <li v-for="(o,i) in icons"
          :key="i"><i :class="[o.code]"></i></li>
    </ul>
    <div class="line"></div>
    <a class="copyright" href="https://beian.miit.gov.cn/">Copyright © 2021 intocareer All rights reserved 好途网络科技（上海）有限公司 版权所有</a>
    <a class="copyright" href="https://beian.miit.gov.cn/">沪ICP备2020029242号-2</a>
  </section>
</template>
<script>

export default {
  data() {
    return {
      icons: [
        { code: 'iconfont iconweixin' },
        { code: 'iconfont iconweibo' },
        { code: 'iconfont iconTwitter' },
        { code: 'iconfont iconin-01' },
        { code: 'iconfont iconf' },
      ],
    }
  },
  computed: {
    logo: function() {
      return require('@/assets/imgs/logo.png')
    },
  },
  methods: {
    linkTo(path) {
      if (path.includes('http')) {
        window.location.href = path
      } else {
        this.$router.push(path)
      }
    }
  }
};
</script>
<style scoped>
.footer-part {
  background: #292E3D;
  padding: 30px 60px 60px 60px;
}
.link-line {
  width: 550px;
  margin-bottom: 22px;
}
.link-line img {
  width: 140px;
}
.link-line > div {
  font-size: 24px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 26px;
}
.icon-list {
  color: #fff;
  width: 550px;
  padding-bottom: 51px;
  margin-top: 53px;
}
.icon-list li {
  margin-left: 62px;
}
.icon-list i {
  font-size: 40px;
}
.line {
  height: 2px;
  background: rgba(255,255,255,.3);
  margin-bottom: 40px;
}
.copyright {
  font-size: 24px;
  color: #FFFFFF;
  letter-spacing: 0;
  line-height: 26px;
  text-decoration: none;
  display: block;
  margin-top: 20px;
}
</style>
