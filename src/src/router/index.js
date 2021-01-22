import Vue from 'vue'
import Router from 'vue-router'
import Skale from '../SkaleBridge.vue';
import Meter from '../MeterBridge.vue';
import Moonbeam from '../MoonbeamBridge.vue';
import Algorand from '../AlgorandBridge.vue';
import Matic from '../MaticBridge';
import App from '../App.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/moonbeam',
      name: 'Moonbeam',
      component: Moonbeam
    },
    {
      path: '/skale',
      name: 'Skale',
      component: Skale
    },
    {
      path: '/meter',
      name: 'Meter',
      component: Meter
    },
    {
      path: '/algorand',
      name: 'Algorand',
      component: Algorand
    },
    {
      path: '/matic',
      name: 'Matic',
      component: Matic
    }
  ]
})