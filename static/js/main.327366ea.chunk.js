(this["webpackJsonpfortune-cookies-app"]=this["webpackJsonpfortune-cookies-app"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),o=n(3),a=n.n(o),r=n(5),i=n(2),l=n(10),u=(n(26),n(8)),d={quotes:[]},m="GET_QUOTES",j=n(11),h=n(12),b=n(4),f=n(15),x=n(14),O=(n(27),n(13)),p=n(1),v=function(e){Object(f.a)(n,e);var t=Object(x.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).state={quotes:[],randomIndex:0},c.ask=c.ask.bind(Object(b.a)(c)),c}return Object(h.a)(n,[{key:"ask",value:function(){this.setState({randomIndex:Math.floor(100*Math.random())})}},{key:"componentDidMount",value:function(){this.props.fetchGetQuotes()}},{key:"render",value:function(){var e=this.props.quotes,t={text:"texto",author:"none"};return"undefined"!==typeof e[this.state.randomIndex]&&(t=e[this.state.randomIndex]),t.author=null!==t.author?t.author:"Unknown",Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"center-center-container",children:Object(p.jsx)("div",{className:"center-center-child",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"column column-xs-100 column-xs-offset-0 column-md-50 column-md-offset-25",children:Object(p.jsx)("div",{className:"align-xs-center py-25",children:Object(p.jsx)("h2",{className:"m-0",children:"The Fortune Cookie App"})})})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"column column-xs-100 column-xs-offset-0 column-md-50 column-md-offset-25",children:Object(p.jsx)("div",{className:"align-xs-left",children:Object(p.jsxs)("blockquote",{className:"m-0 quote",children:[Object(p.jsxs)("p",{className:"m-0 text-center",children:['"',t.text,'"']}),Object(p.jsx)("footer",{className:"mt-10 text-center text-lg-right",children:Object(p.jsxs)("p",{children:["- ",Object(p.jsx)("small",{children:t.author})]})}),Object(p.jsx)("div",{className:"m-0 align-xs-center align-lg-left",children:Object(p.jsx)("a",{id:"tweet-quote",className:"button button-transparent icon icon-twitter button-icon",href:'https://twitter.com/intent/tweet?text="'+t.text+'" - '+t.author+"&hashtags=FortuneCookie"})})]})})})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"column column-xs-100 column-xs-offset-0 column-md-50 column-md-offset-25",children:Object(p.jsx)("div",{className:"align-xs-center py-25",children:Object(p.jsx)("button",{className:"button button-lg button-orange m-0 p-10",onClick:this.ask,children:"Crack the cookie!"})})})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"column column-xs-100 column-xs-offset-0 column-md-50 column-md-offset-25",children:Object(p.jsx)("div",{className:"align-xs-center py-5",children:Object(p.jsxs)("p",{className:"m-0 text-center credits",children:["by ",Object(p.jsx)("a",{href:"https://claudiainbytes.github.io/",target:"_blank",rel:"noreferrer",children:"@claudiainbytes"})]})})})})]})})}),Object(p.jsx)(O.Dots,{color:"#f7f7f7",background:"linear-gradient(180deg, #cd92e6 0%, #c47ce2 100%)",animation:"fade"})]})}}]),n}(s.a.Component),g=Object(r.b)((function(e){return{quotes:e.quotes.quotes}}),{fetchGetQuotes:function(){return function(e){fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(t){var n,c=t.map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}));e((n=c.slice(0,100),{type:m,payload:n}))})).catch((function(e){console.log(e)}))}}})(v),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),o(e),a(e)}))},k=Object(i.b)({quotes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return t.type===m?Object(u.a)(Object(u.a)({},e),{},{quotes:t.payload}):e}}),y=Object(i.c)(k,Object(i.a)(l.a));a.a.render(Object(p.jsx)(r.a,{store:y,children:Object(p.jsx)(g,{})}),document.getElementById("root")),N()}},[[29,1,2]]]);
//# sourceMappingURL=main.327366ea.chunk.js.map