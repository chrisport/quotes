webpackJsonp([1],{"1/oy":function(e,t){},Id91:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},o,!1,function(e){n("gsu9")},null,null).exports,r=n("/ocq"),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Quotes")]),e._v("\n  Collection of quotes and my playground for "),n("a",{attrs:{href:"https://vuejs.org/"}},[e._v("vue.js")]),e._v(".\n  "),n("hr"),e._v(" "),n("b-form-input",{attrs:{type:"text",placeholder:"Author..."},model:{value:e.authorFilter,callback:function(t){e.authorFilter=t},expression:"authorFilter"}}),e._v(" "),n("b-form-input",{attrs:{type:"text",placeholder:"Book..."},model:{value:e.bookFilter,callback:function(t){e.bookFilter=t},expression:"bookFilter"}}),e._v(" "),n("ul",{staticClass:"list-group"},e._l(e.displayedQuotes,function(t){return n("li",[n("span",{staticClass:"quote"},[e._v(e._s(t.content))]),n("br"),e._v("-\n      "),n("a",{attrs:{href:t.book.author.link,target:"_blank"}},[e._v(e._s(t.book.author.name))]),e._v(",\n      "),n("a",{attrs:{href:t.book.link,target:"_blank"}},[e._v(e._s(t.book.title))]),e._v(" (published "+e._s(t.book.year)+")\n    ")])}))],1)},staticRenderFns:[]};var u=n("VU/8")({name:"Quotes",data:function(){var e={hesse:{link:"https://de.wikipedia.org/wiki/Hermann_Hesse",name:"Hermann Hesse"},camus:{link:"https://de.wikipedia.org/wiki/Albert_Camus",name:"Albert Camus"}},t={demian:{title:"Demian",author:e.hesse,link:"https://de.wikipedia.org/wiki/Demian",year:1919},derFall:{title:"Der Fall",author:e.camus,link:"https://de.wikipedia.org/wiki/Der_Fall_(Roman)",year:1956}},n=[{book:t.demian,content:"Wenn wir einen Menschen hassen, so hassen wir in seinem Bilde etwas, was in uns selber sitzt. Was nicht in uns selber ist, das regt uns nicht auf.",added:"4.2.17"},{book:t.demian,content:"Test 2",added:"4.2.17"},{book:t.derFall,content:"Test 3",added:"4.2.17"}];return{quotes:n,displayedQuotes:n,authorFilter:null,bookFilter:null}},methods:{updateDisplayedQuotes:function(){var e=this.quotes;if(this.authorFilter){var t=this.authorFilter;e=e.filter(function(e){return e.book.author.name.includes(t)})}if(this.bookFilter){var n=this.bookFilter;e=e.filter(function(e){return e.book.title.includes(n)})}this.displayedQuotes=e}},watch:{authorFilter:function(e,t){this.updateDisplayedQuotes()},bookFilter:function(e,t){this.updateDisplayedQuotes()}}},s,!1,function(e){n("gyD+")},"data-v-310547d9",null).exports;i.a.use(r.a);var l=new r.a({routes:[{path:"/",name:"Quotes",component:u}]}),d=n("e6fC");i.a.use(d.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:l,components:{App:a},template:"<App/>"})},gsu9:function(e,t){},"gyD+":function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b8dfe13020e0a3b470ca.js.map