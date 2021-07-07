<template>
  <div>
    <section class="top-part">
      <div class="top-title">
        <h1>IntoCareer<sup>TM</sup>校园计划</h1>
        <h1>邀请海内外优秀在校生的加入</h1>
      </div>
    </section>
    <section class="intro">
      <h1 class="intro-title">邀请海内外优秀在校生的加入</h1>
      <div class="line"></div>
      <p class="intro-desc">如果你是积极活跃的校园达人</p>
      <p class="intro-desc">如果优秀的你想要变得更优秀</p>
      <p class="intro-desc">快来加入 IntoCareer<sup>TM</sup> 校园团队吧</p>
    </section>
    <div class="get-list">
      <div v-for="(item, i) in list" :key="i">
        <i class="iconfont" :class="[item.icon]"></i>
        <p>{{ item.p1 }}</p>
        <p>{{ item.p2 }}</p>
      </div>
    </div>
    <div class="submit-btn">点击这里 提交申请</div>
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

  }
};
</script>
<style scoped>
.top-part {
  width: 750px;
  height: 336px;
  background-image: url(../assets/imgs/plan-top.png);
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
  text-align: center;
  line-height: 40px;
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
  border: 2px solid #15479e;
  font-size: 16px;
  font-weight: 400;
  color: #1E4EA1;
  margin: 0 auto;
  margin-bottom: 127px;
}
</style>
