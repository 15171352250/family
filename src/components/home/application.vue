<template>
  <mt-swipe :show-indicators="false">
    <mt-swipe-item><img src="../../assets/family.png" style="width: 100%;height: 100%;">1</mt-swipe-item>
    <mt-swipe-item><img src="../../assets/family.png" style="width: 100%;height: 100%;">2</mt-swipe-item>
    <mt-swipe-item><img src="../../assets/family.png" style="width: 100%;height: 100%;">3</mt-swipe-item>
  </mt-swipe>
  <div class="app_index">
    <a href="#">账本</a>
    <a href="#">快递查询</a>
    <a href="#">购票</a>
    <a href="#">天气</a>
    <a href="#">财务统计</a>
    <a href="#">设置</a>
  </div>
</template>
<style>
  .swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;

  }

  .swipe-item {
    line-height: 200px;
  }
  * {
    padding: 0;
    margin: 0;
  }
  .app_index {
    width: 100%;
    text-align: center;
    background:#ffffff;
  }
  .app_index a {
    float: left;
    width: 24.5%;
    height: 4em;
    border: solid 1px #f1e8e7;
    display: block;
    line-height: 80px;
    _line-height: 70px;
    text-align: center;
    margin: 0 -1px -1px 0;
    z-index: 1;
    position: relative;
  }
  .app_index a:hover {
    z-index: 2;
  }
</style>
<script>
  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    },
    components: {}
  }
</script>
