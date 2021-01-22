import Vue from 'vue'
import Router from 'vue-router'
// import Skale from '../SkaleBridge.vue';
// import Meter from '../MeterBridge.vue';
// import Moonbeam from '../MoonbeamBridge.vue';
// import Algorand from '../AlgorandBridge.vue';
// import Matic from '../MaticBridge';
import App from '../App.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/moonbeam',
      name: 'Moonbeam',
      component: App
    },
    {
      path: '/skale',
      name: 'Skale',
      component: App
    },
    {
      path: '/meter',
      name: 'Meter',
      component: App
    },
    {
      path: '/algorand',
      name: 'Algorand',
      component: App
    },
    {
      path: '/matic',
      name: 'Matic',
      component: App
    }
  ]
})