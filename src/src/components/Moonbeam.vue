<template>
  <div class="hello">
    <h1>🌉 Razor → Moonbeam Bridge 🌉</h1>

    <h2> Make sure to install metamask and set provider to Moonbase alpha at 'https://rpc.testnet.moonbeam.network' </h2>
    <p>
     This is a Razor → Moonbeam bridge </p>
     <p>Create and see your query at <a href = "https://razorscan.io/#/query" >https://razorscan.io/#/query</a> </p>
    <p> Access the result from {{msg}} on Moonbeam testnet.</p>
     <p><button @click="toggle"  v-if="!show">Show ABI</button></p>
     <p><button @click="toggle"  v-if="show">Hide ABI</button></p>
     <code v-if="show">[{ "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "jobs", "outputs": [{ "name": "url", "type": "string" }, { "name": "selector", "type": "string" }, { "name": "name", "type": "string" }, { "name": "result", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "results", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "result", "type": "uint256" } ], "name": "setResult", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "id", "type": "uint256" }, { "name": "url", "type": "string" }, { "name": "selector", "type": "string" }, { "name": "name", "type": "string" }, { "name": "result", "type": "uint256" } ], "name": "setJob", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "getResult", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "id", "type": "uint256" }], "name": "getJob", "outputs": [{ "name": "url", "type": "string" }, { "name": "selector", "type": "string" }, { "name": "name", "type": "string" }, { "name": "result", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ]</code>

      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->

</div>
</template>

<script>
export default {
  name: 'Skale',
  props: {
    msg: String
},
data () {
    return {
        show: false
    }
},
methods: {
    async toggle() {
        this.show = !this.show

    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
