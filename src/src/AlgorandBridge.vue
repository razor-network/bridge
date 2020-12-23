<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Algorand :msg="address"/>
    <h3> Datafeeds </h3>
    <table>
        <tr>
        <th>Datafeed ID</th>
        <th> Result </th>
    </tr>
    <tr>
        <td v-if="results.id!=0"> <a :href="'https://razorscan.io/#/custom/'+results.id"> {{results.name}} </a></td>
        <td v-if="results.result!=0">  <a :href="'https://razorscan.io/#/custom/'+results.id"> {{results.result/100000000}}</a> </td>
    </tr>
</table>
  </div>
</template>

<script>
import Algorand from './components/Algorand.vue'
import { getResult, getAddress } from '../utils/algorand'

export default {
  name: 'AlgorandBridge',
  components: {
    Algorand
},
data() {
      return {
          results:[],
          address: 'loading...'
      }
  },
methods: {
    async getResults() {
        let res
        res = await getResult()
        this.results = res
    }
},
async mounted() {
    this.getResults()
    this.address = await getAddress()
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
