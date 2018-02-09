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
        <div v-on:mouseenter="selectedQuote = quote" v-on:mouseleave="selectedQuote = null">
          <div class="quote">{{quote.content}}</div>
          <div class="footer">
            <p class="alignleft"></p>
            <p class="aligncenter">
              - <a v-bind:href='quote.book.author.link' target='_blank'>{{quote.book.author.name}}</a>,
              <a v-bind:href='quote.book.link' target='_blank'>{{quote.book.title}}</a> ({{quote.book.year}})
            </p>
            <p class="quote-options alignright" v-if="selectedQuote == quote">
              <b-btn id="copy-button"
                     v-clipboard:copy="quoteAsCopy(selectedQuote)"><i class="fa fa-copy icon-big"/></b-btn>
              <b-btn v-clipboard:copy="quoteDeepLink(selectedQuote)"><i class="fa fa-link icon-big"/></b-btn>
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
      const quotes = []

      return {
        quotes: quotes,
        displayedQuotes: quotes,
        filters: {
          book: null,
          author: null,
          quoteId: null
        },
        selectedQuote: null,
        query: null,
      }
    },
    async created () {
      const quotes = await this.$datastore.getQuotes();
      for (var i in quotes) {
        this.quotes.push(quotes[i])
      }
    },
    methods: {
      quoteDeepLink: function (quote) {
        return `${window.location.origin}#${this.$router.currentRoute.path}?quoteId=${quote.id}`
      },
      quoteAsCopy: function (quote) {
        return `"${quote.content}" - ${quote.book.title}, ${quote.book.author.name}`
      },
      filterDisplayedQuotes: function () {
        var filteredQuotes = this.quotes;
        if (this.filters.author) {
          query.author = this.filters.author
          const af = this.filters.author
          filteredQuotes = filteredQuotes.filter(function (q) {
            return q.book.author.name.toLowerCase().includes(af.toLowerCase())
          })
        }
        if (this.filters.book) {
          query.book = this.filters.book
          const bf = this.filters.book
          filteredQuotes = filteredQuotes.filter(function (q) {
            return q.book.title.toLowerCase().includes(bf.toLowerCase())
          })
        }
        this.displayedQuotes = filteredQuotes
      }
    },
    watch: {
      filters: function () {
        this.filterDisplayedQuotes()
      }
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
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

  .quote {
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

  .footer {
    min-height: 3em;
  }

  .quote-options {
    float: right;
    display: inline-block;
    margin-top: -0.5em;
    padding-right: 0.2em
  }

  .icon-big {
    font-size: 1em;
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
