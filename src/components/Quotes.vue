<template>
  <div>
    <h1>Quotes</h1>
    Collection of quotes and my playground for <a href="https://vuejs.org/">vue.js</a>.
    <hr>
    <b-form-input v-model="authorFilter"
                  type="text"
                  placeholder="Author..."></b-form-input>
    <b-form-input v-model="bookFilter"
                  type="text"
                  placeholder="Book..."></b-form-input>
    <ul class='list-group'>
      <li v-for='quote in displayedQuotes'><span class="quote">{{quote.content}}</span></br>-
        <a v-bind:href='quote.book.author.link' target='_blank'>{{quote.book.author.name}}</a>,
        <a v-bind:href='quote.book.link' target='_blank'>{{quote.book.title}}</a> (published {{quote.book.year}})
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Quotes',
    data () {
      const authors = {
        hesse: {
          link: 'https://de.wikipedia.org/wiki/Hermann_Hesse',
          name: 'Hermann Hesse'
        },
        camus: {
          link: 'https://de.wikipedia.org/wiki/Albert_Camus',
          name: 'Albert Camus'
        },
      }
      const books = {
        demian: {
          title: 'Demian',
          author: authors.hesse,
          link: 'https://de.wikipedia.org/wiki/Demian',
          year: 1919
        },
        derFall: {
          title: 'Der Fall',
          author: authors.camus,
          link: 'https://de.wikipedia.org/wiki/Der_Fall_(Roman)',
          year: 1956
        },
      }
      const quotes = [
        {
          book: books.demian,
          content: 'Wenn wir einen Menschen hassen, so hassen wir in seinem Bilde etwas, was in uns selber sitzt. Was nicht in uns selber ist, das regt uns nicht auf.',
          added: '4.2.17'
        },
        {
          book: books.demian,
          content: 'Test 2',
          added: '4.2.17'
        },
        {
          book: books.derFall,
          content: 'Test 3',
          added: '4.2.17'
        }]
      const authorFilter = null
      const bookFilter = null
      const displayedQuotes = quotes
      return {quotes, displayedQuotes, authorFilter, bookFilter}
    },
    methods: {
      updateDisplayedQuotes(){
        var filteredQuotes = this.quotes;
        if (this.authorFilter) {
          const af = this.authorFilter
          filteredQuotes = filteredQuotes.filter(function (q) {
            return q.book.author.name.includes(af)
          })
        }
        if (this.bookFilter) {
          const bf = this.bookFilter
          filteredQuotes = filteredQuotes.filter(function (q) {
            return q.book.title.includes(bf)
          })
        }
        this.displayedQuotes = filteredQuotes
      }
    },
    watch: {
      authorFilter: function (oldAuthorFilter, newAuthorFilter) {
        this.updateDisplayedQuotes()
      },
      bookFilter: function (oldAuthorFilter, newAuthorFilter) {
        this.updateDisplayedQuotes()
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
    font-size: 1.5em;
  }

  .filters {
    display: inline;
  }

  li {
    margin: 1.7em;
  }

  a {
    color: #1b402a;
  }
</style>
