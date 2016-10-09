<template>

  <div class="card">
    <div class="card_title">

      <div class="card_img"><img src="../../assets/img/lb1.png" alt=""></div>
      <div class="card_name">
        <div class="card_name_name">刘彬</div>
        <div class="card_name_tiem">今天12:00</div>
      </div>
    </div>
    <div class="card_ctx">
      <p>
        今天不开心今天不开心今天不开心今天不开心今天不开心今天不开心
      </p>
    </div>
    <div class="card_bttom">
      <div class="card_look">浏览10次</div>
      <div class="card_likes">点赞</div>
      <div class="card_commen">评论</div>
    </div>
  </div>
  <div class="card">
    <div class="card_title">

      <div class="card_img"><img src="../../assets/img/lb1.png" alt=""></div>
      <div class="card_name">
        <div class="card_name_name">刘彬</div>
        <div class="card_name_tiem">今天12:00</div>
      </div>
    </div>
    <div class="card_ctx">
      <p>
        今天不开心今天不开心今天不开心今天不开心今天不开心今天不开心
      </p>
    </div>
    <div class="card_bttom">
      <div class="card_look">浏览10次</div>
      <div class="card_likes">点赞</div>
      <div class="card_commen">评论</div>
    </div>
  </div>
</template>
<style>

  .card
  {
    height: 8em;
    border-bottom: solid 1px silver;
  }
  .card_title {
    margin-left: 1%;
    margin-top: 1em
  }
  .card_img
  {
    width: 10%;
    float: left;
  }

  .card_name
  {
    width: 50%;
    margin-left: 1.5em;
  }
  .card_name_name
  {
    width: 50%;
    margin-left: 1.5em;
  }
.card_name_tiem
{
  width: 100%;
  margin-left: 1.5em;
}
  .card_ctx {
    margin-top: 1em;
  }

  .card_bttom {
    font-size: 12px;
    margin-top: 1em;
    width: 100%;
  }

  .card_look {
    float: left;
    margin-right: 40%;
  }

  .card_likes
  {
    float: left;
    margin-left: 10%;

  }

  .card_commen {
    float: right;
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
