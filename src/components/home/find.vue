<template>
  <div class="m_mag_cent">
    <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded">
      <div data-id="1" class="card ks-facebook-card">
        <div class="card-header">
          <div class="ks-facebook-avatar" data-avatar-id="5"><img src="http://lorempixel.com/68/68/people/5/" width="34"
                                                                  height="34"></div>
          <div class="ks-facebook-name">Balzac</div>
          <div class="ks-facebook-date" data-time="1404707590">2014-07-07 12:33</div>
        </div>
        <div class="card-content">
          <div class="card-content-inner"><p>There is no such thing as a great talent without great will - power.
            There is no such thing as a great talent without great will - power
            There is no such thing as a great talent without great will - power
            There is no such thing as a great talent without great will - power
            There is no such thing as a great talent without great will - power</p>
            <div class="item-image"><img src="http://lorempixel.com/1000/700/nature/5/" width="100%"></div>
          </div>
        </div>
        <div class="card-footer"><a href="#" class="link">Forward</a><a href="#" class="link">Comment</a><a href="#" class="link">Like</a>
        </div>
      </div>
      <div data-id="2" class="card ks-facebook-card">
        <div class="card-header">
          <div class="ks-facebook-avatar" data-avatar-id="5"><img src="http://lorempixel.com/68/68/people/5/" width="34"
                                                                  height="34"></div>
          <div class="ks-facebook-name">Balzac</div>
          <div class="ks-facebook-date" data-time="1404707590">2014-07-07 12:33</div>
        </div>
        <div class="card-content">
          <div class="card-content-inner"><p>There is no such thing as a great talent without great will - power.
            There is no such thing as a great talent without great will - power
            There is no such thing as a great talent without great will - power
            There is no such thing as a great talent without great will - power
            There is no such thing as a great talent without great will - power</p>
            <div class="item-image"><img src="http://lorempixel.com/1000/700/nature/5/" width="100%"></div>
          </div>
        </div>
        <div class="card-footer"><a href="#" class="link">Forward</a><a href="#" class="link">Comment</a><a href="#" class="link">Like</a>
        </div>
      </div>
      <div data-id="3" class="card ks-facebook-card">
        <div class="card-header">
          <div class="ks-facebook-avatar" data-avatar-id="5"><img src="http://lorempixel.com/68/68/people/5/" width="34"
                                                                  height="34"></div>
          <div class="ks-facebook-name">Balzac</div>
          <div class="ks-facebook-date" data-time="1404707590">2014-07-07 12:33</div>
        </div>
        <div class="card-content">
          <div class="card-content-inner"><p>There is no such thing as a great talent without great will - power.
            There is no such thing as a great talent without great will - power
            There is no such thing as a great talent without great will - power
            There is no such thing as a great talent without great will - power
            There is no such thing as a great talent without great will - power</p>
            <div class="item-image"><img src="http://lorempixel.com/1000/700/nature/5/" width="100%"></div>
          </div>
        </div>
        <div class="card-footer"><a href="#" class="link">Forward</a><a href="#" class="link">Comment</a><a href="#" class="link">Like</a>
        </div>
      </div>
    </mt-loadmore>
  </div>
</template>


<style>
  .card {
    background: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
    margin: 10px;
    position: relative;
    border-radius: 2px;
    font-size: 14px;
  }

  .card-header {
    border-radius: 2px 2px 0 0;
    font-size: 17px
  }

  .card-footer, .card-header {
    min-height: 44px;
    position: relative;
    padding: 10px 15px;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center
  }

  .card-content {
    position: relative
  }

  .ks-facebook-card .card-footer {
    background: #fafafa;
  }

  .card-footer {
    border-radius: 0 0 2px 2px;
    color: #6d6d72;
  }

  .ks-facebook-card .ks-facebook-name {
    margin-left: 44px;
    font-size: 14px;
    font-weight: 500;
    color: #ff9630;
  }

  .ks-facebook-card .ks-facebook-date {
    margin-left: 44px;
    font-size: 13px;
    color: #8e8e93;
  }

  .ks-facebook-card .card-header {
    display: block;
    padding: 10px;
  }

  .ks-facebook-card .card-content-inner {
    padding: 15px 10px;
  }

  .card-content-inner {
    padding: 15px;
    position: relative;
  }

  .card-footer a.link, .card-header a.link {
    line-height: 44px;
    height: 44px;
    text-decoration: none;
    position: relative;
    margin-top: -10px;
    margin-bottom: -10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
  }

  .ks-facebook-card .ks-facebook-avatar {
    float: left;
  }
  .card-header {
    border-radius: 2px 2px 0 0;
    font-size: 17px;
  }
  .ks-facebook-card .card-header {
    display: block;
    padding: 10px;
  }

</style>

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

