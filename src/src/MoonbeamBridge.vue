<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Skale :msg="address"/>
    <h3> Datafeeds </h3>
    <table>
        <tr>
        <th>Datafeed ID</th>
        <th> Result </th>
    </tr>
    <tr v-for="res in results">
        <td v-if="res[2]!==0"> <a :href="'https://razorscan.io/#/custom/'+res[0]"> {{res[1]}} </a></td>
        <td v-if="res[2]!==0">  <a :href="'https://razorscan.io/#/custom/'+res[0]"> {{res[2]}}</a> </td>
    </tr>
</table>
  </div>
</template>

<script>
import Skale from './components/Moonbeam.vue'
import { enableEth, getResult, getAddress } from '../utils/moonbeam'

export default {
  name: 'Moonbeam',
  components: {
    Skale
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
        for(let i = 1; i<20; i++) {
            res = await getResult(i)
            this.results.push([i,res[0],res[1]/100000000])
        }
    }
},
async mounted() {
    await enableEth()
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
