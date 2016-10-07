<template>
    <div id="regVerify">


      <mt-header title="注册">
        <mt-button v-link="{path:'/register'}"  slot="left">返回</mt-button>
      </mt-header>

      <div class="VerifyCaptcha">
          <p>验证码已经发送到手机号：15171352250</p>

           <div class="Verify">
            <mt-field label="验证码" placeholder="验证码">
              <input type="button" value="重新获取" class="btnagain" @click="send">
            </mt-field>
            </div>

          <div class="VerifyNext">
            <mt-button size="large" type="primary" @click="login" v-link="{path:'/regSave'}">提交</mt-button>
          </div>
        </div>
    </div>
</template>
<style>
  .VerifyCaptcha
  {
    margin-top: 60%;
  }
  .Verify
  {
    margin-top: 10%;
  }
  .VerifyNext
  {
    margin-top: 2em;
    width: 90%;
    text-align: center;
    margin-left: 5%;
    margin-right: 5%;
  }
  .btnagain
  {
    background:darkorange ;
    border: solid 1px darkorange;
    color: white;
    border-radius: 5px
  }
  .mint-header {
    background: #ffffff;
    color: #333;
    border-bottom: solid 1px #9E9E9E
  }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
