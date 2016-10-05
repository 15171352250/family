<template>
  <div id="message">


    <div class="m_search_outer"><input type="search" placeholder="搜索"></div>
    <div class="m_mag_cent">

      <li v-for="item in items" style="list-style-type: none">
        <div class="m_mag_list">
          <div class="m_img_cont"><img src="../../assets/img/lb1.png" alt=""></div>
          <div class="m_news_cont">
            <p><a>{{item.name}}</a><span>{{item.time}}</span></p>
            <p>{{item.message}}</p>
          </div>
        </div>
      </li>
    </div>
  </div>

</template>
<style scoped>
  #message{background:#fff;}
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
    padding:10px 0;
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
    font-size:0.9rem;
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
    font-size:0.7rem;
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
<script>
  export default{
    data(){
      return{
        tltle:'hello vue',
        items: [
          { message: '今天你吃饭么？',time:"13:20",name:"小红" },
          { message: '今天你吃饭么？',time:"13:20",name:" 小白" },
          { message: '今天你吃饭么？',time:"13:20",name:"小绿" },
          { message: '今天你吃饭么？',time:"13:20",name:"小西" },
          { message: '今天你吃饭么？',time:"13:20",name:"小白" }
        ]
      }
    },
    components:{

    }
  }
</script>
