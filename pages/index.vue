<template>
  <div class="flex flex-wrap p-6">
    <Price
      v-for="cur in currency"
      :key="cur.id"
      :currency="cur"
    />
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currency: [
        {
          id: 1,
          measure: 'USD/BTC',
          name: 'BTC',
          point: 'BTCUSDT'
        },
        {
          id: 2,
          measure: 'USD/ETH',
          name: 'ETH',
          point: 'ETHUSDT'
        },
        {
          id: 3,
          measure: 'USD/DOGE',
          name: 'DOGE',
          point: 'DOGEUSDT'
        },
        {
          id: 4,
          measure: 'USD/XMR',
          name: 'MONERO',
          point: 'XMRUSDT'
        },
        {
          id: 5,
          measure: 'USD/XRP',
          name: 'RIPPLE',
          point: 'XRPUSDT'
        },
        {
          id: 6,
          measure: 'USD/ADA',
          name: 'CARDANO',
          point: 'ADAUSDT'
        },
        {
          id: 7,
          measure: 'USD/LINK',
          name: 'CHAINLINK',
          point: 'LINKUSDT'
        },
        {
          id: 8,
          measure: 'USD/DAI',
          name: 'MARKETDAO',
          point: 'DAIUSDT'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Cryktomania'
    }
  }
}
</script>
<style>

</style>
