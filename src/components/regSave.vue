<template>
  <div id="regSave">


    <mt-header title="注册">
      <mt-button v-link="{path:'/register'}" icon="back" slot="left"></mt-button>
    </mt-header>
    <div class="regSave">
      <mt-field label="手机号" placeholder="请输入用户名"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱地址"></mt-field>
      <div class="logon">
        <mt-button size="large" type="primary" @click="login" v-link="{path:'/Index'}">提交</mt-button>
      </div>

    </div>
  </div>
</template>
<style>
  .regSave
  {
    margin-top: 60%;
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
