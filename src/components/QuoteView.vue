<!--
TODO:
 - single quote view
 - open single quote on query parameter quoteId
 - popup on copy success

-->
<template>
  <div  v-if="quote !== null">
    <div :id="quote.id" class="quote-card"
         v-on:mouseenter="showOptions = true"
         v-on:mouseleave="showOptions = false"
    >
      <div class="quote-content">{{quote.content}}</div>
      <div class="quote-card-footer">
        <p class="alignleft"></p>
        <p class="aligncenter">
          - <a v-bind:href='quote.book.author.link' target='_blank'>{{quote.book.author.name}}</a>,
          <a v-bind:href='quote.book.link' target='_blank'>{{quote.book.title}}</a> ({{quote.book.year}})
        </p>
        <p name="footer" v-show="showOptions">
          <b-btn id="copy-button" v-clipboard:copy="quoteAsCopy(quote)"><i class="fa fa-copy icon-big"/></b-btn>
          <!--        <b-btn v-clipboard:copy="quoteDeepLink(quote.id)"><i class="fa fa-link icon-big"/></b-btn>-->
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuoteView',
  props: {
    quote: {
      type: Object,
      default: null

    }
  },
  data () {
    return {
      showOptions: false
    }
  },
  methods: {
    quoteAsCopy: function (quote) {
      return `"${quote.content}" - ${quote.book.title}, ${quote.book.author.name}`
    }
  },
  computed: {},
  filters: {}
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang="less" scoped>

  .quote-content {
    font-size: 1.3em;
    max-width: 100%;
    margin-bottom: 1em;;
    display: inline-block;
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

  .alignleft {
    float: left;
    width: 33.33333%;
    text-align: left;
  }

  .aligncenter {
    float: left;
    width: 33.33333%;
    text-align: center;
  }

</style>
