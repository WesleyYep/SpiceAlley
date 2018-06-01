<template>
  <div>
    <p> {{ JSON.stringify(response) }} </p>
  </div>
</template>

<script>
export default {
  name: 'Wes',
  data () {
    return {
      response: '',
    }
  },
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        console.log(response);
        this.response = response;
      })
  }
}
</script>
