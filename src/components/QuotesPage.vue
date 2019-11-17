<!--
TODO:
 - single quote view
 - open single quote on query parameter quoteId
 - popup on copy success

-->
<template>
  <div>
    <h1>Quotes</h1>
    Collection of quotes and my playground for <a href="https://vuejs.org/">vue.js</a>.
    <hr>
    <b-form inline class="filters">
      <b-form-input v-model="filters.search"
                    type="text"
                    placeholder="Book or Author..."></b-form-input>
    </b-form>
    <ul>
      <li v-for='quote in displayedQuotes' v-on:click="openQuote(quote.id)">
        <QuoteView :quote="quote"
                   v-on:mouseenter="hoveredQuoteId = quote.id"
                   v-on:mouseleave="hoveredQuoteId = null"
        ></QuoteView>
        <!--        TODO: reimplement the following functionalities-->
        <!--             v-on:click="replaceRoute(hoveredQuoteId)"-->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Quotes',
  data () {
    const query = this.$router.currentRoute.query
    const hash = this.$router.currentRoute.hash
    const quotes = []
    return {
      quotes: quotes,
      filters: {
        search: query.search
      },
      hoveredQuoteId: null,
      selectedQuoteId: hash ? hash.substr(1) : null
    }
  },
  async created () {
    const quotes = await this.$datastore.getQuotes()
    for (var i in quotes) {
      this.quotes.push(quotes[i])
    }
  },
  methods: {
    quoteDeepLink: function (quoteId) {
      var queryString = Object.entries(this.filters).filter(val => !!val[1]).map(i => [i[0], encodeURIComponent(i[1])].join('=')).join('&')
      if (queryString) {
        queryString = '?' + queryString
      }
      return `${window.location.origin}${this.$router.currentRoute.path}${queryString}#${this.quoteDivId(quoteId)}`
    },
    openQuote (quoteId) {
      this.$router.push({
        path: this.$router.currentRoute.path + '/' + quoteId
      })
    }
  },
  computed: {
    displayedQuotes: function () {
      var filteredQuotes = this.quotes
      if (this.filters.search) {
        const af = this.filters.search
        filteredQuotes = filteredQuotes.filter(function (q) {
          return q.book.author.name.toLowerCase().includes(af.toLowerCase()) ||
            q.book.title.toLowerCase().includes(af.toLowerCase())
        })
      }
      return filteredQuotes
    }
  },
  filters: {
    quoteDivIdFilter (quoteId) {
      return 'q' + quoteId
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

  ul {
    list-style-type: none;
    padding: 0;
  }

  .quote-content {
    font-size: 1.3em;
    max-width: 100%;
    margin-bottom: 1em;;
    display: inline-block;
  }

  .filters {
    display: inline;
  }

  li {
    margin: 1.7em auto;
    overflow: hidden;
    width: 60%;
  }

  a {
    color: #1b402a;
  }

</style>
