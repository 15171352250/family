<template>
  <div id="app">
    <div class="logo">
      <img src="../../src/assets/family.png" width="100%" height="100%">
    </div>
    <div class="reg">
      <mt-field label="手机号" :value.sync="value1" placeholder="请输入手机号" @click="empty"></mt-field>
      <mt-field label="验证码" :value.sync="value2" placeholder="验证码">
        <input type="button" value="获取验证码" :status.sync="value3" class="btnsend" @click="send">
      </mt-field>

      <div class="logon">
        <mt-button size="large" type="primary" @click="login">登录</mt-button>
      </div>
      <slot></slot>
    </div>

    <div class="newreg">
      <a v-link="{path:'/register'}">新用户注册</a>

    </div>
  </div>
</template>

<script>
  import {Indicator} from 'mint-ui';
  import { MessageBox } from 'mint-ui';
  export default {
    data() {
      return {
        value1: "",
        value2: "",
        value3:"IVACTIVE"
      }
    },
    methods: {
      send: function () {
        this.value3='ACTIVE';
        let phone = this.value1;
        let reg = /^1[34578]\d{9}$/;
        if(reg.test(phone)){
          Indicator.open({
            text: '发送中',
            spinnerType: 'triple-bounce'
          })
          this.$http.post('http://121.42.146.108:19585/sendCaptcha', {"phone": phone}).then((response) => {
            console.log(response.data.captcha)
            this.value2=response.data.captcha
            Indicator.close()
          }, (response) => {
            console.log(response)
          });
        }else{
          MessageBox('提示', '请输入正确的手机号');
        }
      },
      login: function () {
          let phone = this.value1;
          let captcha = this.value2;
        if (phone&&captcha&&this.value3=="ACTIVE")
        {
          Indicator.open({
            text: '登录中',
            spinnerType: 'triple-bounce'
          })
          this.$http.post('http://121.42.146.108:19585/register', {"phone": phone}).then((response) => {
            let  phone=response.data.users.phone;
            this.$route.router.go({name:'index',params:{phone:phone}})
            Indicator.close()
            console.log(response.data.users)
          }, (response) => {
            console.log(response)
          });
        }
        else if(phone)
        {
          MessageBox('提示', '请获取验证码');
        }
        else if(status=="IVACTIVE")
        {
          MessageBox('提示', '请获取验证码');
        }
        else
        {
           MessageBox('提示', '请输入手机号');
        }
      },
      empty:function () {
        if(this.value1=="请输入手机号码")
        {
          this.value1="";
        }
      }
    }
  }
</script>

<style>
  .reg {
    margin-top: 1%;
  }
  
  .logo {
    text-align: center;
  }
  
  .newreg {
    text-align: center;
    margin-top: 15%;
  }
  
  .newreg a {
    text-decoration: none;
    color: darkorange;
  }
  
  .logon {
    margin-top: 5%;
  }
  
  .btnsend {
    background: white;
    border: solid 1px darkorange;
    color: darkorange;
    border-radius: 5px
  }
  
  input:focus {
    outline: none;
  }
</style>