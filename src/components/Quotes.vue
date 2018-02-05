<template>
  <div>
    <h1>Quotes</h1>
    Collection of quotes and my playground for <a href="https://vuejs.org/">vue.js</a>.
    <hr>
    <span class="filters"><b-form-input v-model="authorFilter"
                                        type="text"
                                        placeholder="Author..."></b-form-input>
    <b-form-input v-model="bookFilter"
                  type="text"
                  placeholder="Book..."></b-form-input>
      </span>
    <ul class='list-group'>
      <li v-for='quote in displayedQuotes' @click="selectedQuote = quote" v-b-modal.quote-detail>
        <span class="quote">{{quote.content}}</span></br>
        -
        <a v-bind:href='quote.book.author.link' target='_blank'>{{quote.book.author.name}}</a>,
        <a v-bind:href='quote.book.link' target='_blank'>{{quote.book.title}}</a> (published {{quote.book.year}})
      </li>
    </ul>
    <b-modal id="quote-detail"
             ok-title="Close">

      <span class="quote">{{selectedQuote.content}}</span></br>
      -
      <a v-bind:href='selectedQuote.book.author.link' target='_blank'>{{selectedQuote.book.author.name}}</a>,
      <a v-bind:href='selectedQuote.book.link' target='_blank'>{{selectedQuote.book.title}}</a> (published
      {{selectedQuote.book.year}})
      <template slot="modal-footer">
        <b-btn
            v-clipboard:copy="selectedPermalink"
            v-clipboard:success="copySuccess"
            v-clipboard:error="copyError"><i class="fa fa-copy icon-big"/></b-btn>
        <b-btn><i class="fa fa-link icon-big"/></b-btn>
      </template>
    </b-modal>
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
          content: 'Gewiss sah ich mein Versagen immer ein und bedauerte es. Und doch fuhr ich fort, es mit recht verdienstlicher Beharrlichkeit zu vergessen. Über die Mitmenschen hingegen saß ich in meinem Herzen unablässig zu Gericht. Das finden Sie sicher empörend? Sie denken vielleicht, es sei nicht logisch? Es geht aber nicht darum, logisch zu sein.  Es geht darum, zwischen den Maschen hindurchzuschlüpfen, und vor allem, o ja, vor allem darum, sich dem Urteil zu entziehen. Ich sage nicht, sich der Strafe zu entziehen, denn die Strafe ohne Urteil ist erträglich. Sie hat übrigens einen Namen, der für unsere Unschuld bürgt: das Unglück.',
          added: '4.2.17'
        },
        {
          book: books.derFall,
          content: 'Lächeln Sie nicht, diese Wahrheit ist nicht so selbstverständlich, wie sie scheint. Selbstverständliche Wahrheiten nent man die, die man zuletzt entdeckt hat, das ist alles.',
          added: '4.2.17'
        },
        {
          book: books.derFall,
          content: 'Wissen Sie zum Beispiel, warum man ihn gekreuzigt hat, ihn, an den Sie jetzt vielleicht denken? Nun, dafür gab es eine Menge Gründe. Es fehlt nie an Gründen, einen Menschen umzubringen. Im Gegenteil, es ist unmöglich sein Weiterleben zu rechtfertigen.',
          added: '4.2.17'
        }]

      return {
        quotes: quotes,
        displayedQuotes: quotes,
        bookFilter: null,
        authorFilter: null,
        selectedQuote: quotes[0]
      }
    },
    methods: {
      updateDisplayedQuotes(){
        var filteredQuotes = this.quotes;
        let query = {}
        if (this.authorFilter) {
          query.author = this.authorFilter
          const af = this.authorFilter
          filteredQuotes = filteredQuotes.filter(function (q) {
            return q.book.author.name.includes(af)
          })
        }
        if (this.bookFilter) {
          query.book = this.authorFilter
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

  .icon-big {
    font-size: 1em;
  }
</style>
