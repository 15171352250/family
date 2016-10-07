<template>
  <div id="contacts" class="m_contacts">
    <div class="m_search_outer"><input type="search" placeholder="搜索" v-model = "searchKeyword"></div>
    <div class="m_mag_cent">
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
        <div class="m_mag_list" v-for="item in items"  :id="$index">
          <div class="m_img_cont"><img src="../../assets/img/lb1.png" alt=""></div>
          <div class="m_news_cont">
            <p><a>{{item.name}}</a></p>
            <p>{{item.phoneNum}}</p>
          </div>
        </div>
      </mt-loadmore>
    </div>
    <div class="m_right_bar" :class="{changebg:showNext}" @touchstart="changBg" @touchend="recoveryBg">
      <a href="A">A</a>
      <a href="">B</a>
      <a href="">C</a>
      <a href="">D</a>
      <a href="">E</a>
      <a href="">F</a>
      <a href="">G</a>
      <a href="">H</a>
      <a href="">I</a>
      <a href="">J</a>
      <a href="">K</a>
      <a href="">L</a>
      <a href="">M</a>
      <a href="">N</a>
      <a href="">O</a>
      <a href="">P</a>
      <a href="">Q</a>
      <a href="">R</a>
      <a href="">S</a>
      <a href="">T</a>
      <a href="">U</a>
      <a href="">V</a>
      <a href="">W</a>
      <a href="">X</a>
      <a href="">Y</a>
      <a href="#Z">Z</a>
    </div>
  </div>

</template>
<script>
  export default{
    data(){
      return{
        tltle:'hello vue',
        items: [
          { phoneNum: '13047167018',name:"小红" },
          { phoneNum: '13047167018',name:" 小白" },
          { phoneNum: '13047167018',name:"小绿" },
          { phoneNum: '13047167018',name:"小西" },
          { phoneNum: '13047167018',name:"小红" },
          { phoneNum: '13047167018',name:" 小白" },
          { phoneNum: '13047167018',name:"小绿" },
          { phoneNum: '13047167018',name:"小西" },
          { phoneNum: '13047167018',name:"小红" },
          { phoneNum: '13047167018',name:" 小白" },
          { phoneNum: '13047167018',name:"小绿" },
          { phoneNum: '13047167018',name:"小西" },
          { phoneNum: '13047167018',name:"小红" },
          { phoneNum: '13047167018',name:" 小白" },
          { phoneNum: '13047167018',name:"小绿" },
          { phoneNum: '13047167018',name:"小西" },
          { phoneNum: '13047167018',name:"小红" }

        ],
        showNext:'',
        topDistance:100,
        allLoaded:false
      }
    },
    methods:{
      changBg:function(e){
        e.stopPropagation()
        this.showNext = true;
      },
      recoveryBg:function(){
        this.showNext = false;
      },
      loadTop:function(id){
        let me = this
        console.log(id)
        console.log('loadTop')
        setTimeout(()=>{
          this.$broadcast('onTopLoaded', id);
      },2000)


      },
      loadBottom:function(id){

        setTimeout(()=>{
          //this.allLoaded = true;// 若数据已全部获取完毕
          this.$broadcast('onBottomLoaded', id);
      },2000)
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
  function onBottomLoaded(id){
    console.log(id);
  }
</script>
<style>
  .mint-tab-container{position: absolute;width: 100%;height: calc(100%-50px);top:40px;bottom: 50px;overflow: auto;}
</style>
<style scoped>
  .mint-tabbar{
    position: fixed;
    z-index: 999;
  }
  .m_right_bar{
    width: 20px;
    height:100%;
    position: fixed;
    right: 0;
    top: 0;
    /*word-break: break-all;
    word-wrap:break-word;*/
    text-align:center;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    /*justify-content: center;*/
    align-content:center;
    align-items:center;
    flex-wrap:wrap;
    background:none;
  }
  .changebg{
    background:rgba(0,0,0,0.5)
  }
  /*.m_right_bar:hover{
    background:rgba(0,0,0,0.5)
  }*/
  .m_right_bar a{
    width: 20px;
    padding:0;
    margin:0;
    font-size:.7rem;
  }
  #contacts{background:#fff;}
  .mint-header{
    height:50px;
    color:#000000;
    background:none;
    border-bottom:1px solid #e7e6ee;
  }
  .m_search_outer{
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: center;
  }
  .m_search_outer input{
    background:#e8e8e8;
    border-radius:4px;
    width: 95%;
    height:34px;
    text-align:center;
    border:none;
    margin:5px 0;
    padding:0 2%;
  }
  .m_mag_list{
    padding:6px 0;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
  }
  .m_img_cont{
    padding:0 10px;
    width: 15%;
  }
  .m_img_cont img{
    width: 100%;
    height: auto;
    border-radius:50%;
  }
  .m_news_cont{
    flex:1;
    border-bottom:1px solid #e7e6ee;
  }
  .m_news_cont p:nth-of-type(1){
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    font-size:0.8rem;
    padding:0.4rem 0 0.3rem 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .m_news_cont p:nth-of-type(1) a{
    width: 80%;
  }
  .m_news_cont p:nth-of-type(1) span{
    flex:1;
    color:#c0c3c8;
    font-size:0.6rem;
  }
  .m_news_cont p:nth-of-type(2){
    font-size:0.65rem;
    color:#c0c3c8;
    width: 100%;
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
  }
  p{
    font-style: normal;
  }
</style>
