

<template>
  <div id="main-app">
    <select class="bridge-select" v-model="selected">
      <option v-for="item in items" :value="item.val" :key="item.id">{{ item.val }}</option>
    </select>

    <div>
      <Algorand v-if="selected == 'Algorand'" />
      <Skale v-if="selected == 'Skale'" />
      <Matic v-if="selected == 'Matic'" />
      <Moonbeam v-if="selected == 'Moonbeam'" />
      <Meter v-if="selected == 'Meter'" />
    </div>
  </div>
</template>

<script>
import Skale from "./SkaleBridge.vue";
import Meter from "./MeterBridge.vue";
import Moonbeam from "./MoonbeamBridge.vue";
import Algorand from "./AlgorandBridge.vue";
import Matic from "./MaticBridge";

export default {
  name: "main-app",
  components: {
    Skale,
    Meter,
    Moonbeam,
    Algorand,
    Matic
  },
  data() {
    return {
      selected: "Algorand",
      input: "",
      items: [
        { id: 1, val: "Algorand" },
        { id: 2, val: "Skale" },
        { id: 3, val: "Matic" },
        { id: 4, val: "Moonbeam" },
        { id: 5, val: "Meter" }
      ]
    };
  },
  mounted: function() {
    var path =
      this.$route.path == "/" ? "/" : this.$route.path.replace(/^\/|\/$/g, "");
    if (path !== "/") {
      path = path.charAt(0).toUpperCase() + path.slice(1);
    } else {
      path = "Algorand";
    }

    window.ethereum.on("networkChanged", chainId => {
      console.log(chainId);

      switch (chainId) {
        case "0x54173":
          this.selected = "Skale";
          break;
        case "80001":
          this.selected = "Matic";
          break;
        case "1287":
          this.selected = "Moonbeam";
          break;
        case "88":
          this.selected = "Meter";
          break;
        default:
          this.selected = "Algorand";
      }
    });

    this.selected = path;
  }
};
</script>

<style scoped>
#main-app {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.bridge-select {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  width: 250px;
  padding: 12px;
  margin: 40px auto;
  font-size: 16px;
  color: #2c3e50;
  border-radius: 6px;
}
.bridge-select:focus {
  outline: none;
}
</style>
