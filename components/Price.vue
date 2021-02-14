<template>
    <div >
        <p> {{ currency.name }} </p>
        <p> Price:  {{ amount }} {{ currency.measure }} </p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      amount: '0.0'
    }
  },
  props: ['currency'],
  async fetch () {
    this.amount = await fetch(
        `https://api1.binance.com/api/v3/avgPrice?symbol=${this.currency.point}`
    ).then(res => res.json()).then(res => res.price)
  }
}
</script>
