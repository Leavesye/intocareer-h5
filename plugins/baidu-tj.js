if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?e389e88cca1128696b2b6fc16af25550";
      hm.id = "baidu_tj";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  }
  
  export default ({ app: { router }, store }) => {
    router.afterEach((to, from) => {
      var _hmt = _hmt || [];
      (function() {
        document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?e389e88cca1128696b2b6fc16af25550";
        hm.id = "baidu_tj";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    })
  }