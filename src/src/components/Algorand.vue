<template>
  <div class="hello">
    <h1>🌉 Razor → Algorand Bridge 🌉</h1>

    <p>
     This is a Razor → Algorand bridge </p>
     <p>Create and see your query at <a href = "https://razorscan.io/#/query" >https://razorscan.io/#/query</a> </p>
    <p> Access the result from App ID: {{msg}} on Algorand testnet.</p>
     <p><button @click="toggle"  v-if="!show">Show TEAL</button></p>
     <p><button @click="toggle"  v-if="show">Hide TEAL</button></p>
     <code v-if="show">
<pre>
#pragma version 2

byte "id"
txna ApplicationArgs 0
app_global_put

byte "url"
txna ApplicationArgs 1
app_global_put

byte "selector"
txna ApplicationArgs 2
app_global_put

byte "name"
txna ApplicationArgs 3
app_global_put

byte "result"
txna ApplicationArgs 4
app_global_put

int 1
return
</pre>
</code>

      <!-- <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>. -->

</div>
</template>

<script>
export default {
  name: 'Algorand',
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
