<template>
  <div>
    <h1>Quotes</h1>
    Collection of quotes and my playground for <a href="https://vuejs.org/">vue.js</a>.
    <hr>
    <div class="single-card" id="quote-view">
      <div v-on:click="backClick">
        <p>Close</p>
      </div>
      <QuoteView :quote="quote" v-show="!!quote" class=""></QuoteView>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleQuotePage',
  data () {
    const quoteId = this.$route.params.quoteId
    return {
      quoteId: quoteId,
      quote: null
    }
  },
  async created () {
    this.quote = await this.$datastore.getQuote(this.quoteId)
  },
  methods: {
    backClick () {
      this.$router.back()
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="less" scoped>
  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  a {
    color: #1b402a;
  }

  .single-card {
    margin: 1.7em auto;
    overflow: hidden;
    width: 60%;
  }
</style>
