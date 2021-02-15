<template>
    <div class="nes-container with-title is-rounded margin">
        <p class="title"> {{ currency.name }} </p>
        <p> <span class="nes-text is-primary"> Price: </span>  {{ amount.slice(0, 9) }} {{ currency.measure }} </p>
        <button class="nes-btn" @click="$fetch"> Refresh </button>
    </div>
</template>

<script>
import 'nes.css/css/nes.min.css'

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

<style>

.margin {
    margin: 1rem !important;
}

</style>
