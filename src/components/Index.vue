<template>
    <div class="page-tabbar">
    <div class="page-wrap">
     <mt-header :title="selected">
  <mt-button v-link="'/'" slot="left"></mt-button>
  <mt-button slot="right"></mt-button>
</mt-header>
      <mt-tab-container :active.sync="selected">
      <mt-tab-container-item id="消息">
        <message></message>
      </mt-tab-container-item>
      <mt-tab-container-item id="通讯录">
        <contacts></contacts>
      </mt-tab-container-item>
      <mt-tab-container-item id="应用">
        <application></application>
      </mt-tab-container-item>
      <mt-tab-container-item id="发现">
        <find></find>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <my></my>
      </mt-tab-container-item>
    </mt-tab-container>
    </div>


  <mt-tabbar :selected.sync="selected">
    <mt-tab-item id="消息">
      <img slot="icon" src="../assets/img/mess.svg">
      消息
    </mt-tab-item>
    <mt-tab-item id="通讯录">
      <img slot="icon" src="../assets/img/tx2.svg">
      通讯录
    </mt-tab-item>
    <mt-tab-item id="应用">
      <img slot="icon" src="../assets/img/yy1.png">
      应用
    </mt-tab-item>
    <mt-tab-item id="发现">
      <img slot="icon" src="../assets/img/fx1.png">
      发现
    </mt-tab-item>
    <mt-tab-item id="我的">
      <img slot="icon" src="../assets/img/my1.png">
      我的
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
  import contacts from '../components/home/contacts'
  import application from '../components/home/application'
  import find from '../components/home/find'
  import message from '../components/home/message'
  import my from '../components/home/my'
  import { MessageBox } from 'mint-ui';
  export default {
    data() {
      return {
        title: "这是登录界面",
        phone: "",
        selected: '消息',
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ]
      }


    },
    components:{
      contacts,
      application,
      find,
      message,
      my
    },
    ready: function () {
      console.log(localStorage.getItem('phone'))
      if (!localStorage.getItem('phone'))
      {
        this.$route.router.go({name:'login'})
      }
      this.phone = this.$route.params.phone
    },
    methods: {
      loadTop(id) {
        this.$broadcast('onTopLoaded', id);
      }
    }
  }


</script>

<style>
  .index_title{
    text-align: center;
  }
</style>
