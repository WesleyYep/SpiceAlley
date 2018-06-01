<template>
  <div>
    <div id="app">
      <h1>Bitcoin Price Index</h1>
      <div v-for="currency in info" class="currency" v-bind:key="currency.id">
        {{ currency.description }}:
        <span class="lighten">
          <span v-html="currency.symbol"></span>{{ currency.rate_float }}
        </span>
      </div>
    </div>
    <div>
      <p>
        <label>Enter bitcoin amount: </label>
        <input v-model="bitcoinAmount">
      </p>
      <p>
        <label>Enter spice alley food price: </label>
        <input v-model="foodPrice">
      </p>
    </div>
    <div>
      <p>
        {{ "You can buy " + (bitcoinAmount * bitcoinPrice) / foodPrice + " spice alley foods in " + currencyPicked }}
      </p>
    </div>
    <div>
      <input type="radio" id="usd" value="USD" v-model="currencyPicked">
      <label for="usd">USD</label>
      <br>
      <input type="radio" id="gbr" value="GBR" v-model="currencyPicked">
      <label for="gbr">GBR</label>
      <br>
      <input type="radio" id="eur" value="EUR" v-model="currencyPicked">
      <label for="eur">EUR</label>
      <br>
      <span>Picked: {{ currencyPicked }}</span>
    </div>
    <!-- <p> {{ JSON.stringify(response) }} </p> -->
  </div>
</template>

<script>
export default {
  name: "Wes",
  data() {
    return {
      response: "",
      info: [],
      bitcoinAmount: 1,
      foodPrice: 10,
      bitcoinPrice: 0,
      currencyPicked: 'USD'
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        console.log(response);
        this.response = response;
        this.info = response.data.bpi;
        this.bitcoinPrice = response.data.bpi[this.currencyPicked].rate_float;
      });
  },
  watch: {
    currencyPicked: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal);
      console.log(this.response.data.bpi);
      this.bitcoinPrice = this.response.data.bpi.get(val).rate_float;
    },
  }
};
</script>
