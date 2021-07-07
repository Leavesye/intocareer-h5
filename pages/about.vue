<template>
  <div>
    <section class="top-part">
      <div class="top-title">
        <h1>IntoCareer<sup>TM</sup></h1>
        <h1>求职信息咨询领域的开拓者和引领者</h1>
      </div>
    </section>
    <section class="intro">
      <h1 class="intro-title">关于我们</h1>
      <div class="line"></div>
      <p class="intro-desc">IntoCareer<sup>TM</sup> 是求职信息咨询领域的开拓者和引领者，致力于打造一个专业的职场知识咨询平台。</p>
      <p class="intro-desc">我们汇聚各行业的职场精英人士，掌握最前沿的职场知识，力图打破求职过程中的信息不对称。</p>
      <p class="intro-desc">从最真实的职场经验出发，为求职者打造属于自己的职业发展策略。</p>
    </section>
    <section class="intro">
      <h1 class="intro-title">联系我们</h1>
      <div class="line"></div>
      <p class="intro-desc">IntoCareer<sup>TM</sup> 职前咨询平台，全权由好途网络科技（上海）有限公司运营。</p>
      <p class="intro-desc">如果您有任何关于我们的问题或商务合作的需求，请通过下面的邮箱联系我们，我们会尽快与您取得联系</p>
      <div class="flex contact-item">
        <svg-icon icon-class="map-pin" class="svg-pin"></svg-icon>
        <p>公司地址：中国（上海）自由贸易试验区临港新片区环湖西二路888号C楼</p>
      </div>
      <div class="flex contact-item">
        <svg-icon icon-class="mail" class="svg-mail"></svg-icon>
        <p>联系邮箱：info@h2career.com</p>
      </div>
      <img class="wechat-img" :src="wechat" />
    </section>
  </div>
</template>
<script>
import CountTo from "vue-count-to";

export default {
  components: { CountTo },
  data() {
    return {
      list: [
        { icon: "iconzan-01", p1: "一个发挥你个人实力", p2: "和影响力的平台" },
        { icon: "iconrenmai-01", p1: "助力你打造更广阔的", p2: "校内外人脉网络" },
        { icon: "icon1-01", p1: "属于你的从0到1", p2: "创业项目实战经验" },
        { icon: "icon0-1-01", p1: "结识各个行业", p2: "职场达人的宝贵经历" },
        { icon: "iconzhiye-01", p1: "深入了解职场，", p2: "引领你探索职业发展" },
        { icon: "iconfuli-01", p1: "还有实习工资、实习证明… ", p2: "及更多福利！" }
      ]
    };
  },
  computed: {
    wechat: function() {
      return require('@/assets/imgs/wxgzh.jpg')
    }
  }
};
</script>
<style scoped>
.top-part {
  width: 750px;
  height: 336px;
  background-image: url(../assets/imgs/about-top.png);
  background-size: 100% 100%;
  overflow: hidden;
}
.top-title {
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #ffffff;
  letter-spacing: 0.75px;
  margin-top: 110px;
  margin-left: 80px;
}
.top-title h1 {
  font-size: 38px;
}
.intro {
  padding: 88px 56px;
}
.intro-title {
  font-family: PingFangSC-Semibold;
  font-size: 36px;
  color: #292e3d;
  letter-spacing: 0;
  text-align: center;
}
.intro-desc {
  font-family: PingFangSC-Light;
  font-size: 28px;
  color: #434d57;
  letter-spacing: 0;
  line-height: 40px;
  margin-bottom: 30px;
}
.line {
  width: 144px;
  height: 2px;
  background: #292E3D;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 38px;
}
.get-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
}
.get-list div {
  width: 50%;
  font-size: 14px;
  font-weight: 300;
  color: #434d57;
  line-height: 26px;
  margin-bottom: 30px;
  text-align: center;
  margin-bottom: 110px;
}
.get-list i {
  color: #15479E;
  font-size: 80px;
  display: block;
  margin-bottom: 40px;
}
.submit-btn {
  width: 360px;
  height: 88px;
  line-height: 88px;
  text-align: center;
  border-radius: 44px;
  border: 1px solid #15479e;
  font-size: 16px;
  font-weight: 400;
  color: #1E4EA1;
  margin: 0 auto;
  margin-bottom: 127px;
}
.contact-item {
  margin-top: 44px;
}
.svg-pin {
  width: 60px;
  font-size: 30px;
  margin-top: 10px;
}
.svg-mail {
  width: 60px;
  font-size: 20px;
  margin-top: 10px;
}
.contact-item p {
  font-family: PingFangSC-Light;
  font-size: 28px;
  color: #434D57;
  letter-spacing: 0;
  flex: 1;
}
.wechat-img {
  display: block;
  margin: 0 auto;
  margin-top: 120px;
  width: 260px;
  height: 260px;
}
</style>
