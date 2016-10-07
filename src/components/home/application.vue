<template>

  <div id="application" class="m_application">
    <div class="m_mag_cent">
      <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded">
        <mt-swipe :show-indicators="false">
          <mt-swipe-item><img src="../../assets/family.png" style="width: 100%;height: 100%;">1</mt-swipe-item>
          <mt-swipe-item><img src="../../assets/family.png" style="width: 100%;height: 100%;">2</mt-swipe-item>
          <mt-swipe-item><img src="../../assets/family.png" style="width: 100%;height: 100%;">3</mt-swipe-item>
        </mt-swipe>
        <div class="app_index">
          <a >账本</a>
          <a >快递查询</a>
          <a >购票</a>
          <a >天气</a>
          <a>财务统计</a>
          <a>设置</a>
        </div>
      </mt-loadmore>
    </div>
  </div>

</template>
<script>
  export default{
    data(){
      return{
        tltle:'hello vue',
        items: [
        ],
        showNext:'',
        topDistance:100,
        allLoaded:false
      }
    },
    methods:{
      loadTop:function(id){
        let me = this
        console.log(id)
        console.log('loadTop')
        setTimeout(()=>{
          this.$broadcast('onTopLoaded', id);
      },1000)


      }
    },
    ready(){
      this.$watch('searchKeyword',(res)=>{
        console.log(this.searchKeyword)
      console.log(this.items[0].name)
    })
    },
    components:{

    }
  }
  function onTopLoaded(id){
    console.log(id);
  }
</script>
<style>
  .mint-tab-container{position: absolute;width: 100%;height: calc(100%-50px);top:40px;bottom: 50px;overflow: auto;}
</style>
<style scoped>
  .mint-loadmore
  {
    overflow: inherit;
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
