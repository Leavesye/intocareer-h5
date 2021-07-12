<template>
    <div class="ifr-box" style="overflow: auto">
        <iframe class="ife" height="100%" :src="url" width="100%" />
    </div>
</template>
<script>

export default {
  data() {
    return {
      url: 'https://intocareer.cn/html/yinsi.html',
      numPages: ''
    };
  },
  created(){
      if (process.client) { 
            document.querySelector(".ifr-box").style.height = document.body.clientHeight-280 + 'px';
      }
  },
  methods: {

  }
};
</script>
<style scoped>

</style>
