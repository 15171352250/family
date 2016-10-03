<template>
  <div id="app">
    <!--<mt-header title="首页">
      <mt-button v-link="'/'" icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>-->
    <!-- main view -->
    <mt-tabbar :selected.sync="selected">
      <mt-tab-item id="tab1">
        <img slot="icon" src="../assets/mess.svg">
        消息
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../assets/tx.svg">
        通讯录
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="../assets/mess.svg">
        应用
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="../assets/mess.svg">
        发现
      </mt-tab-item>
      <mt-tab-item id="tab5">
        <img slot="icon" src="../assets/mess.svg">
        我的
      </mt-tab-item>
    </mt-tabbar>
    <!-- tab-container -->
    <mt-tab-container :active.sync="selected">
      <mt-tab-container-item id="tab1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab4">
        <mt-cell v-for="n in 6" :title="'选项 ' + n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab5">
        <mt-cell v-for="n in 6" :title="'选项 ' + n"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>

</template>

<script>
  // import Hello from './components/Hello'

   export default {
     data() {
       return {
         title: "这是登录界面"
       }
     }
   }
</script>

<style>

</style>
