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
    <p> {{ JSON.stringify(response) }} </p>
  </div>
</template>

<script>
export default {
  name: 'Wes',
  data () {
    return {
      response: '',
      info: [],
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        console.log(response);
        this.response = response;
        this.info = response.data.bpi;
      })
  }
}
</script>
