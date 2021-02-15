<template>
    <div >
        <p> {{ currency.name }} </p>
        <p> Price:  {{ amount.slice(0, 9) }} {{ currency.measure }} </p>
        <button @click="$fetch"> Refresh </button>
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
  },
  methods: {
    refresh () {
      this.$fetch()
    }
  }
}
</script>
