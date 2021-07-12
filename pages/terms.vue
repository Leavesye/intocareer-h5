<template>
    <client-only> 
        <div>
            <pdf :src="url"  v-for="i in numPages"
                :key="i"
                :page="i"></pdf>
        </div>
    </client-only>
</template>
<script>

export default {
  data() {
    return {
      url: '',
      numPages: ''
    };
  },
  watch: {
      $route: function() {
          this.pdfLoadTask() 
      }
  },
  created(){
      if (process.client) { 
          this.vuePdf = require('vue-pdf') 
          this.pdfLoadTask() 
      }
  },
  methods: {
      pdfLoadTask () { 
        const { url } = this.$route.query
        console.log(url, 999)
        this.url = this.vuePdf.default.createLoadingTask(url) 
        console.log(this.url, 777)
        this.url.promise.then(pdf => { 
            this.numPages = pdf.numPages 
        }) 
      }
  }
};
</script>
<style scoped>

</style>
