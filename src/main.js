import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'assets/css/common.css';
import resource from 'vue-resource'
import Login from './components/login.vue'
import Register from './components/register.vue'
import Index from './components/Index.vue'
import  regVerify from './components/regVerify.vue'
import  regSave from './components/regSave.vue'


Vue.use(VueRouter);
Vue.use(resource);
Vue.use(MintUI);
// routing
var router = new VueRouter()

router.map({
  '/':{
    component: Login
  },
  '/login': {
    component: Login
  },
  '/register': {
    component: Register
  },
  '/index/:phone': {
    name: 'index',
    component: Index
  },
  '/regVerify': {
    component: regVerify
  },
  '/regSave': {
    component: regSave
  }

})

router.redirect({
  '*': '/login'
})


router.start(App, '#app')

