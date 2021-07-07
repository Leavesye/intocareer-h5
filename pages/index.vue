<template>
  <div>
    <section class="top-part">
      <div class="top-title">
        <h1>你和职场，</h1>
        <h1>只有一个 IntoCareer<sup>TM</sup>的距离</h1>
      </div>
      <div class="top-content">
        <p>两种1V1咨询服务，</p>
        <p>IntoCareer<sup>TM</sup></p>
        <p>帮你洞见真实职场，</p>
        <p>让信息差无处躲藏</p>
      </div>
      <div class="top-btn">了解更多</div>
    </section>
    <section class="intro">
      <h1 class="intro-title">消除求职信息差，我们是专业的！</h1>
      <p class="intro-desc">
        IntoCareer<sup>TM</sup>致力于打造专业职前咨询平台，
      </p>
      <p class="intro-desc">力求帮助求职者不走弯路</p>
      <ul class="intro-list">
        <li v-for="item in list" :key="item.title">
          <img :src="item.icon" />
          <h1>{{ item.title }}</h1>
          <p v-for="p in item.desc" :key="p">{{ p }}</p>
        </li>
      </ul>
    </section>
    <section class="intro">
      <h1 class="intro-title">两种专业服务，全方位看职场</h1>
      <p class="intro-desc">精准匹配职场达人或资深人力，为你答疑解惑填坑</p>
      <p class="intro-desc">铺路，求职路上不再迷茫</p>
      <ul class="service-list">
        <li>
          <img class="banner-img" :src="service1" />
          <div class="service-main">
            <img :src="homen1" />
            <h1>60min职场达人1V1咨询</h1>
            <div>
              <p>IntoCareer<sup>TM</sup>为你 pick目标行业资深职场达人，</p>
              <p>亲授职场实战经验，行业动向、企业风格、岗位实际需求……</p>
              <p>一网打尽，在分秒必争的求职路上不走弯路。</p>
            </div>
          </div>
        </li>
        <li>
          <img class="banner-img" :src="service2" />
          <div class="service-main">
            <img :src="homen2" />
            <h1>60min资深人力1V1咨询</h1>
            <div>
              <p>IntoCareer<sup>TM</sup>为你pick目标行业资深人力资源专家，</p>
              <p>帮你制定最适合你的求职策略和职业发展道路，</p>
              <p>助力你在职场中更好地实现自我。</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <section class="intro">
      <h1 class="intro-title">IntoCareer<sup>TM</sup>咨询师团队</h1>
      <p class="team-desc">
        在IntoCareer<sup>TM</sup>，每天都有来自各个行业的职场达人和资深HR成为咨询师。
      </p>
      <p class="team-desc">
        IntoCareer<sup>TM</sup>对入驻咨询师都进行严格的把关和筛选，确保每一位咨询师都能用他们丰富的行业和职场经验，为你的求职填坑铺路！
      </p>
      <p class="team-desc">
        快来IntoCareer<sup>TM</sup>找到你的专属职场咨询师吧！
      </p>
      <section class="tongji flex-hb">
        <div class="tj-item" v-for="(item, i) in countList" :key="i">
          <div class="count-box">
            <count-to
              separator=""
              class="count"
              :startVal="0"
              :endVal="item.count"
              :duration="2000"
            />
            <i class="plus" :style="{ right: item.right + 'px' }">+</i>
          </div>
          <p class="tj-desc">{{ item.text }}</p>
        </div>
      </section>
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
        {
          icon: require("@/assets/imgs/home-i1.png"),
          title: "严格筛选的在职精英",
          desc: ["以丰富的行业资深经验", "助力你解决核心需求问题"]
        },
        {
          icon: require("@/assets/imgs/home-i2.png"),
          title: "精准匹配的职业背景",
          desc: ["行业资深人力资源专家", "帮你制定最适合你的职业发展道路"]
        },
        {
          icon: require("@/assets/imgs/home-i3.png"),
          title: "实战经验一对一传授",
          desc: ["亲授职场实战经验", "实时在线一对一语音传授"]
        }
      ],
      countList: [
        { count: 2000, text: "咨询师入驻", right: -15 },
        { count: 60, text: "覆盖企业数量", right: 5 },
        { count: 1500, text: "覆盖职位", right: -15 }
      ]
    };
  },
  computed: {
    service1: function() {
      return require("@/assets/imgs/home-service1.png");
    },
    service2: function() {
      return require("@/assets/imgs/home-service2.png");
    },
    homen1: function() {
      return require("@/assets/imgs/home-n1.png");
    },
    homen2: function() {
      return require("@/assets/imgs/home-n2.png");
    }
  }
};
</script>
<style scoped>
.top-part {
  width: 750px;
  height: 594px;
  background-image: url(../assets/imgs/index-top.png);
  background-size: 100% 100%;
  overflow: hidden;
}
.top-title {
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #ffffff;
  letter-spacing: 0.75px;
  margin-top: 90px;
  margin-left: 80px;
}
.top-content {
  font-family: PingFangSC-Medium;
  font-size: 30px;
  color: #ffffff;
  letter-spacing: 0.75px;
  margin-top: 70px;
  margin-left: 80px;
}
.top-btn {
  background: #ffffff;
  border-radius: 28px;
  border-radius: 28px;
  width: 150px;
  height: 56px;
  line-height: 56px;
  text-align: center;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #226f9b;
  letter-spacing: 0;
  text-align: center;
  margin-top: 40px;
  margin-left: 80px;
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
  margin-bottom: 64px;
}
.intro-desc {
  font-family: PingFangSC-Light;
  font-size: 28px;
  color: #434d57;
  letter-spacing: 0;
  text-align: center;
  line-height: 40px;
}
.intro-list {
  margin-top: 98px;
}
.intro-list li {
  overflow: hidden;
  margin-bottom: 80px;
  background: #ffffff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border-radius: 10px;
  height: 312px;
}
.intro-list li img {
  display: block;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 20px;
}
.intro-list li h1 {
  font-family: PingFangSC-Regular;
  font-size: 30px;
  color: #292e3d;
  letter-spacing: 0;
  text-align: center;
  margin-bottom: 10px;
}
.intro-list li p {
  font-family: PingFangSC-Regular;
  font-size: 26px;
  color: #434d57;
  letter-spacing: 0;
  text-align: center;
  line-height: 40px;
}
.service-list {
  margin-top: 100px;
}
.service-list li:first-child {
  margin-bottom: 140px;
}
.banner-img {
  display: block;
  margin: 0 auto;
  width: 100%;
}
.service-main {
  margin-top: 60px;
}
.service-main img {
  width: 310px;
}
.service-main h1 {
  font-size: 32px;
  color: #36ae82;
  letter-spacing: 0;
  margin-bottom: 33px;
}
.service-main p {
  font-size: 28px;
  color: #434d57;
  letter-spacing: 0;
  text-align: justify;
  line-height: 40px;
}
.team-desc {
  font-size: 28px;
  color: #434d57;
  letter-spacing: 0;
  text-align: justify;
  line-height: 40px;
  margin-bottom: 30px;
}
.tongji {
  margin: 0 auto;
  color: #fff;
  height: 200px;
  font-size: 70px;
  font-weight: 400;
  margin-top: 60px;
}
.tj-item {
  margin-top: 35px;
}
.tj-item:last-child {
  margin-right: 0;
}

.count-box {
  position: relative;
  font-size: 58px;
  color: #36ae82;
  text-align: center;
  font-weight: 600;
}
.count-box i {
  position: absolute;
  top: -6px;
  right: -20px;
  font-size: 42px;
}
.count-box p {
  position: absolute;
  bottom: -6px;
  right: -20px;
  font-size: 42px;
}
.tj-desc {
  font-size: 24px;
  color: #434d57;
  letter-spacing: 0;
  text-align: center;
  margin-top: 10px;
}
</style>
