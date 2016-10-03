<template>
  <div id="register">
    <mt-header title="注册">
      <mt-button v-link="{path:'/login'}" icon="back" slot="left"></mt-button>
    </mt-header>

    <div class="getCaptcha">
      <p class="m_set_outer"><span>手机号</span><input type="tel" v-model="telNumber" placeholder="请输入手机号码"
                                                    class="m_set_input"></p>

      <input type="button" v-link="{path:'/regVerify'}" value="获取验证码" class="m_next_btn" :class="{m_next_btn2:showNext}" @click="sendCaptcha">
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        telNumber: '',
        showNext: false
      }
    },
    ready () {
      this.$watch('telNumber', function (newVal, oldVal) {
        let reg = /^1[34578]\d{9}$/;
        if (reg.test(newVal)) {
          console.log('newVal');
          this.showNext = true;
        } else {
          this.showNext = false;
        }
      });
    },
    methods:{
      sendCaptcha:function()
      {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #register {
    font-size: 0.7rem;
  }

  .mint-header {
    background: #ffffff;
    color: #333;
    border-bottom: solid 1px #9E9E9E
  }

  .mint-field {
    margin-top: 0.6rem;
  }

  .m_next_btn {
    background: #eee;
    color: #ccc;
    border: none;
    height: 2.5rem;
    margin-left: 5%;
    margin-top: 10%;
    width: 90%;
    border-radius: .2rem;
    font-size: medium;
  }

  .m_next_btn2 {
    background: #ffa130;
    color: #fff;
  }

  .m_set_outer {
    border: none;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    font-size: medium;
  }

  .m_set_outer span {
    line-height: 2rem;
    text-align: center;
    display: block;
    width: 20%;
  }

  .m_set_input {
    height: 2rem;
    border: none;
    border-bottom: 1px solid #eee;
    margin: 0;
    flex: 1;
    font-size: medium
  }

  .getCaptcha {
    margin-top: 60%;
  }

</style>
