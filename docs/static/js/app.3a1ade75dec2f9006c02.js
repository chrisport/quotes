webpackJsonp([1],{"5W1q":function(e,t){},"9M+g":function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};n.d(r,"getQuote",function(){return x}),n.d(r,"getQuotes",function(){return z});var i=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},o,!1,function(e){n("QUY2")},null,null).exports,a=n("/ocq"),u=n("W3Iv"),c=n.n(u),l=n("Xxa5"),d=n.n(l),h=n("exGp"),f=n.n(h),p={name:"Quotes",data:function(){var e=this.$router.currentRoute.query,t=this.$router.currentRoute.hash;return{quotes:[],filters:{search:e.search},hoveredQuoteId:null,selectedQuoteId:t?t.substr(1):null}},created:function(){var e=this;return f()(d.a.mark(function t(){var n,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$datastore.getQuotes();case 2:for(r in n=t.sent)e.quotes.push(n[r]);case 4:case"end":return t.stop()}},t,e)}))()},methods:{quoteDeepLink:function(e){var t=c()(this.filters).filter(function(e){return!!e[1]}).map(function(e){return[e[0],encodeURIComponent(e[1])].join("=")}).join("&");return t&&(t="?"+t),""+window.location.origin+this.$router.currentRoute.path+t+"#"+this.quoteDivId(e)},openQuote:function(e){this.$router.push({path:this.$router.currentRoute.path+"/"+e})}},computed:{displayedQuotes:function(){var e=this.quotes;if(this.filters.search){var t=this.filters.search;e=e.filter(function(e){return e.book.author.name.toLowerCase().includes(t.toLowerCase())||e.book.title.toLowerCase().includes(t.toLowerCase())})}return e}},filters:{quoteDivIdFilter:function(e){return"q"+e}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Quotes")]),e._v("\n  Collection of quotes and my playground for "),n("a",{attrs:{href:"https://vuejs.org/"}},[e._v("vue.js")]),e._v(".\n  "),n("hr"),e._v(" "),n("b-form",{staticClass:"filters",attrs:{inline:""}},[n("b-form-input",{attrs:{type:"text",placeholder:"Book or Author..."},model:{value:e.filters.search,callback:function(t){e.$set(e.filters,"search",t)},expression:"filters.search"}})],1),e._v(" "),n("ul",e._l(e.displayedQuotes,function(t){return n("li",{on:{click:function(n){return e.openQuote(t.id)}}},[n("QuoteView",{attrs:{quote:t},on:{mouseenter:function(n){e.hoveredQuoteId=t.id},mouseleave:function(t){e.hoveredQuoteId=null}}})],1)}),0)],1)},staticRenderFns:[]};var m=n("VU/8")(p,v,!1,function(e){n("l3kA")},"data-v-5621179c",null).exports,k={name:"SingleQuotePage",data:function(){return{quoteId:this.$route.params.quoteId,quote:null}},created:function(){var e=this;return f()(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$datastore.getQuote(e.quoteId);case 2:e.quote=t.sent;case 3:case"end":return t.stop()}},t,e)}))()},methods:{backClick:function(){this.$router.back()}}},w={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Quotes")]),e._v("\n  Collection of quotes and my playground for "),n("a",{attrs:{href:"https://vuejs.org/"}},[e._v("vue.js")]),e._v(".\n  "),n("hr"),e._v(" "),n("div",{staticClass:"single-card",attrs:{id:"quote-view"}},[n("div",{on:{click:e.backClick}},[n("p",[e._v("Close")])]),e._v(" "),n("QuoteView",{directives:[{name:"show",rawName:"v-show",value:!!e.quote,expression:"!!quote"}],attrs:{quote:e.quote}})],1)])},staticRenderFns:[]};var g=n("VU/8")(k,w,!1,function(e){n("dxOB")},"data-v-1ccf97d1",null).exports;i.default.use(a.a);var b,q,_=new a.a({routes:[{path:"/",redirect:"/quotes"},{path:"/quotes",name:"Quotes",component:m},{path:"/quotes/:quoteId",name:"Quote",component:g}],mode:"history",scrollBehavior:function(e,t,n){return e.hash?{selector:e.hash}:n||{x:0,y:0}}}),Q=n("Tqaz"),y=n("wvfG"),C=n.n(y),x=(b=f()(d.a.mark(function e(t){var n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:return n=e.sent,r=n.filter(function(e){return e.id===t}),e.abrupt("return",r.length>0?r[0]:null);case 5:case"end":return e.stop()}},e,this)})),function(e){return b.apply(this,arguments)}),z=(q=f()(d.a.mark(function e(){var t,n,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={demian:{title:"Demian",author:(t={hesse:{link:"https://de.wikipedia.org/wiki/Hermann_Hesse",name:"Hermann Hesse"},camus:{link:"https://de.wikipedia.org/wiki/Albert_Camus",name:"Albert Camus"}}).hesse,link:"https://de.wikipedia.org/wiki/Demian",year:1919},derFall:{title:"Der Fall",author:t.camus,link:"https://de.wikipedia.org/wiki/Der_Fall_(Roman)",year:1956}},r=[{id:"0",book:n.demian,content:"Wenn wir einen Menschen hassen, so hassen wir in seinem Bilde etwas, was in uns selber sitzt. Was nicht in uns selber ist, das regt uns nicht auf.",added:"4.2.17"},{id:"1",book:n.derFall,content:"Gewiss sah ich mein Versagen immer ein und bedauerte es. Und doch fuhr ich fort, es mit recht verdienstlicher Beharrlichkeit zu vergessen. Über die Mitmenschen hingegen saß ich in meinem Herzen unablässig zu Gericht. Das finden Sie sicher empörend? Sie denken vielleicht, es sei nicht logisch? Es geht aber nicht darum, logisch zu sein.  Es geht darum, zwischen den Maschen hindurchzuschlüpfen, und vor allem, o ja, vor allem darum, sich dem Urteil zu entziehen. Ich sage nicht, sich der Strafe zu entziehen, denn die Strafe ohne Urteil ist erträglich. Sie hat übrigens einen Namen, der für unsere Unschuld bürgt: das Unglück.",added:"4.2.17"},{id:"2",book:n.derFall,content:"Lächeln Sie nicht, diese Wahrheit ist nicht so selbstverständlich, wie sie scheint. Selbstverständliche Wahrheiten nent man die, die man zuletzt entdeckt hat, das ist alles.",added:"4.2.17"},{id:"3",book:n.derFall,content:"Wissen Sie zum Beispiel, warum man ihn gekreuzigt hat, ihn, an den Sie jetzt vielleicht denken? Nun, dafür gab es eine Menge Gründe. Es fehlt nie an Gründen, einen Menschen umzubringen. Im Gegenteil, es ist unmöglich sein Weiterleben zu rechtfertigen.",added:"4.2.17"}],e.abrupt("return",r);case 4:case"end":return e.stop()}},e,this)})),function(){return q.apply(this,arguments)}),$=(n("Jmt5"),n("9M+g"),n("5W1q"),{name:"QuoteView",props:{quote:{type:Object,default:null}},data:function(){return{showOptions:!1}},methods:{quoteAsCopy:function(e){return'"'+e.content+'" - '+e.book.title+", "+e.book.author.name}},computed:{},filters:{}}),I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return null!==e.quote?n("div",[n("div",{staticClass:"quote-card",attrs:{id:e.quote.id},on:{mouseenter:function(t){e.showOptions=!0},mouseleave:function(t){e.showOptions=!1}}},[n("div",{staticClass:"quote-content"},[e._v(e._s(e.quote.content))]),e._v(" "),n("div",{staticClass:"quote-card-footer"},[n("p",{staticClass:"alignleft"}),e._v(" "),n("p",{staticClass:"aligncenter"},[e._v("\n        - "),n("a",{attrs:{href:e.quote.book.author.link,target:"_blank"}},[e._v(e._s(e.quote.book.author.name))]),e._v(",\n        "),n("a",{attrs:{href:e.quote.book.link,target:"_blank"}},[e._v(e._s(e.quote.book.title))]),e._v(" ("+e._s(e.quote.book.year)+")\n      ")]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.showOptions,expression:"showOptions"}],attrs:{name:"footer"}},[n("b-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.quoteAsCopy(e.quote),expression:"quoteAsCopy(quote)",arg:"copy"}],attrs:{id:"copy-button"}},[n("i",{staticClass:"fa fa-copy icon-big"})])],1)])])]):e._e()},staticRenderFns:[]};var S=n("VU/8")($,I,!1,function(e){n("SQS3")},"data-v-5653d349",null).exports;i.default.use(C.a),i.default.use(Q.a),i.default.component("QuoteView",S),i.default.prototype.$datastore=r,i.default.config.productionTip=!1,new i.default({el:"#app",router:_,components:{App:s},template:"<App/>"})},QUY2:function(e,t){},SQS3:function(e,t){},dxOB:function(e,t){},l3kA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.3a1ade75dec2f9006c02.js.map