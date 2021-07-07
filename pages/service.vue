<template>
  <div>
    <section class="top-part">
      <div class="top-title">
        <h1>你和职场，</h1>
        <h1>只有一个 IntoCareer<sup>TM</sup>的距离</h1>
      </div>
    </section>
    <section class="intro">
      <ul class="service-list">
        <li>
          <div class="service-main">
            <img :src="homen1" />
            <h1>60min职场达人1V1咨询</h1>
            <div>
              <p>IntoCareer<sup>TM</sup>为你 pick目标行业资深职场达人，</p>
              <p>亲授职场实战经验，行业动向、企业风格、岗位实际需求……</p>
              <p>一网打尽，在分秒必争的求职路上不走弯路。</p>
            </div>
          </div>
          <img class="banner-img" :src="service1" />
        </li>
        <li>
          <div class="service-main">
            <img :src="homen2" />
            <h1>60min资深人力1V1咨询</h1>
            <div>
              <p>IntoCareer<sup>TM</sup>为你pick目标行业资深人力资源专家，</p>
              <p>帮你制定最适合你的求职策略和职业发展道路，</p>
              <p>助力你在职场中更好地实现自我。</p>
            </div>
          </div>
          <img class="banner-img" :src="service2" />
        </li>
      </ul>
      <div>
        <p class="team-desc">
          在IntoCareer<sup>TM</sup>，每天都有来自各个行业的职场达人和资深HR成为咨询师。
        </p>
        <p class="team-desc">
          IntoCareer<sup>TM</sup>对入驻咨询师都进行严格的把关和筛选，确保每一位咨询师都能用他们丰富的行业和职场经验，为你的求职填坑铺路！
        </p>
        <p class="team-desc">
          快来在IntoCareer<sup>TM</sup>找到你的专属职场咨询师吧！
        </p>
      </div>
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
            <p v-show="item.unit == 'percent'">%</p>
            <i class="plus" :style="{ right: item.right + 'px' }">+</i>
          </div>
          <p class="tj-desc">{{ item.text }}</p>
        </div>
      </section>
    </section>
    <section class="intro">
      <h1 class="intro-title">IntoCareer<sup>TM</sup>打开方式</h1>
      <p class="intro-desc">想要和目标行业的职场精英聊聊未来发展吗？</p>
      <p class="intro-desc">想要了解自己和目标职位的实际匹配程度吗？</p>
      <p class="intro-desc">想要在求职前明确努力的方向，</p>
      <p class="intro-desc">在职场中充分发挥自我价值吗？</p>
      <p class="intro-desc">Follow以下步骤，找到你的职场领路人！</p>
    </section>
    <section class="step-list">
      <div class="step-item" v-for="(item, i) in stepList" :key="i">
        <div class="step-i">{{`0${i+1}`}}</div>
        <div class="step-num">{{ item.step }}</div>
        <h1>{{ item.title }}</h1>
        <p v-for="(subitem, j) in item.content" :key="j">{{ subitem }}</p>
        <div class="angle"></div>
      </div>
    </section>
  </div>
</template>
<script>
import CountTo from "vue-count-to";

export default {
  components: { CountTo },
  data() {
    return {
      countList: [
        { count: 2000, text: "已帮助求职应届生", right: 0 },
        { count: 60, text: "已帮助海归求职者 ", right: 16 },
        { count: 90, unit: "percent", text: "用户认为很有帮助", right: -2 }
      ],
      stepList: [
        {
          step: "STEP 1",
          title: "快速注册，填写基本信息",
          content: [
            "在个人信息页填写你的详细简历，让我们更好地了解你的教育经历和求职兴趣。",
            "简历资料的完成度越高，越能为你匹配到适合的咨询师。"
          ]
        },
        {
          step: "STEP 2",
          title: "搜索咨询师",
          content: [
            "在咨询师搜索页面，选择“向专业人士咨询”或“向人力资源咨询”。",
            "输入搜索条件，结合你的个人简历，我们将为你匹配出所有符合条件的咨询师。"
          ]
        },
        {
          step: "STEP 3",
          title: "预约咨询师时间，确认订单",
          content: [
            "选择咨询师，查看可预约时间表，从中选择（最多）三个候选时间段。",
            "确认订单并完成付款，即可向咨询师直接发出预约邀请！"
          ]
        },
        {
          step: "STEP 4",
          title: "咨询师确认预约，完善信息",
          content: [
            "待咨询师确认时间后，请登录个人中心填写补充信息。",
            "并在待服务订单中添加你想要得到针对性解答的个人求职问题。"
          ]
        },
        {
          step: "STEP 5",
          title: "开始服务",
          content: [
            "按照预约确认的时间准时进入咨询房间，与你的咨询师完成线上语音通话。"
          ]
        },
        {
          step: "STEP 6",
          title: "评价服务",
          content: ["通话结束后，为你的咨询师打个分数，并留下你的真实评价吧！"]
        }
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
  height: 328px;
  background-image: url(../assets/imgs/service-top.png);
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
  margin-bottom: 140px;
}
.service-list li:first-child {
  margin-bottom: 140px;
}
.banner-img {
  display: block;
  margin: 0 auto;
  width: 100%;
  margin-top: 80px;
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
  bottom: 0;
  right: 12px;
}
.tj-desc {
  font-size: 24px;
  color: #434d57;
  letter-spacing: 0;
  text-align: center;
  margin-top: 10px;
}
.step-list {
  padding: 100px 55px;
}
.step-item {
  box-shadow: 5px 0 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 30px;
  padding: 40px 47px;
  position: relative;
}
.step-item .step-i {
  position:absolute;
  top: 0px;
  right: 15px;
  color: #000;
  font-size: 70px;
  font-weight: 700;
  color: rgba(54,174,130, 0.07);
  line-height: 70px;
}
.step-item .angle {
  display: block;
  position: absolute;
  bottom: -40px;
  left: 50px;
  border-width: 20px;
  border-color: transparent;
  border-style: solid;
  border-top-color: #fff;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
}
.step-item .step-num {
  font-family: Helvetica;
  font-size: 28px;
  color: #36AE82;
  letter-spacing: 0;
  margin-bottom: 10px;
}
.step-item h1 {
  font-family: PingFangSC-Regular;
  font-size: 30px;
  color: #292e3d;
  letter-spacing: 0;
  margin-bottom: 12px;
}
.step-item p {
  font-family: PingFangSC-Light;
  font-size: 26px;
  color: #434d57;
  letter-spacing: 0;
  text-align: justify;
  line-height: 35px;
}
</style>
