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
      <b-form-input v-model="filters.author"
                    type="text"
                    placeholder="Author..."></b-form-input>
      <b-form-input v-model="filters.book"
                    type="text"
                    placeholder="Book..."></b-form-input>
    </b-form>
    <ul class='list-group'>
      <li v-for='quote in displayedQuotes'>
        <div :id="quote.id | quoteDivIdFilter"
             v-on:mouseenter="hoveredQuoteId = quote.id"
             v-on:mouseleave="hoveredQuoteId = null"
             v-on:click="replaceRoute(hoveredQuoteId)"
             v-bind:class="{ highlight: quote.id == selectedQuoteId }"
             class="quote-card">
          <div class="quote-content">{{quote.content}}</div>
          <div class="quote-card-footer">
            <p class="alignleft"></p>
            <p class="aligncenter">
              - <a v-bind:href='quote.book.author.link' target='_blank'>{{quote.book.author.name}}</a>,
              <a v-bind:href='quote.book.link' target='_blank'>{{quote.book.title}}</a> ({{quote.book.year}})
            </p>
            <p class="quote-options alignright" v-if="hoveredQuoteId == quote.id">
              <b-btn id="copy-button"
                     v-clipboard:copy="quoteAsCopy(quote)"><i class="fa fa-copy icon-big"/></b-btn>
              <b-btn v-clipboard:copy="quoteDeepLink(quote.id)"><i class="fa fa-link icon-big"/></b-btn>
            </p>
          </div>
        </div>
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
          book: query.book,
          author: query.author,
        },
        hoveredQuoteId: null,
        selectedQuoteId: hash ? hash.substr(1) : null,
      }
    },
    async created () {
      const quotes = await this.$datastore.getQuotes();
      for (var i in quotes) {
        this.quotes.push(quotes[i])
      }
    },
    methods: {
      quoteDeepLink: function (quoteId) {
        var queryString = Object.entries(this.filters).filter(val => !!val[1]).map(i => [i[0], encodeURIComponent(i[1])].join('=')).join('&')
        if (queryString) {
          queryString = "?" + queryString
        }
        return `${window.location.origin}${this.$router.currentRoute.path}${queryString}#${this.quoteDivId(quoteId)}`
      },
      quoteAsCopy: function (quote) {
        return `"${quote.content}" - ${quote.book.title}, ${quote.book.author.name}`
      },
      quoteDivId(quoteId){
        return "q" + quoteId
      },
      replaceRoute(quoteId){
        this.$router.replace({
          path: this.$router.currentRoute.path,
          query: this.filters,
          hash: this.quoteDivId(quoteId)
        })
      }

    },
    computed: {
      displayedQuotes: function () {
        var filteredQuotes = this.quotes;
        if (this.filters.author) {
          const af = this.filters.author
          filteredQuotes = filteredQuotes.filter(function (q) {
            return q.book.author.name.toLowerCase().includes(af.toLowerCase())
          })
        }
        if (this.filters.book) {
          const bf = this.filters.book
          filteredQuotes = filteredQuotes.filter(function (q) {
            return q.book.title.toLowerCase().includes(bf.toLowerCase())
          })
        }
        return filteredQuotes
      }
    },
    filters: {
      quoteDivIdFilter(quoteId){
        return "q" + quoteId
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

  .quote-card-footer {
    min-height: 3em;
  }

  .icon-big {
    font-size: 1em;
  }

  .quote-options {
    float: right;
    display: inline-block;
    margin-top: -0.5em;
    padding-right: 0.2em
  }

  .quote-card {
    margin: 1em;
    padding: 2em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }

  .highlight {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: 2px solid forestgreen;
  }

  .alignleft {
    float: left;
    width: 33.33333%;
    text-align: left;
  }

  .alignright {
    float: left;
    width: 33.33333%;
    text-align: right;
  }

  .aligncenter {
    float: left;
    width: 33.33333%;
    text-align: center;
  }

</style>
