(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});var n=a(7),r=a.n(n),i=(a(75),a(0)),o=a.n(i),l=a(157),s=a(155),c=a(151),d=function(e){return e.toLowerCase().trim().split(" ").join("-")},m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.site.siteMetadata.description,n=e.allElementsJson.edges;return o.a.createElement(l.a,{location:this.props.location,title:t,description:a},o.a.createElement(s.a,{title:"Custom element list",keywords:["Kentico Cloud","caas","javascript","extensions","custom elements"]}),o.a.createElement("h2",null,"Gallery"),o.a.createElement("details",{className:"navigation"},o.a.createElement("summary",null,"Show navigation"),o.a.createElement("ul",null,n.map(function(e){var t=e.node;return o.a.createElement("li",{key:t.id},o.a.createElement("a",{href:"#"+d(t.title)},t.title))}))),n.map(function(e){var t=e.node;return o.a.createElement("div",{key:t.id,id:d(t.title)},o.a.createElement("a",{href:t.readmeUrl},o.a.createElement("h3",{style:{marginBottom:Object(c.a)(.25)}},t.title)),o.a.createElement("p",null,t.description),o.a.createElement("img",{src:t.thumbnailUrl,alt:t.title+" custom element"}))}))},t}(o.a.Component);t.default=m;var u="1314549088"},151:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return c});var n=a(160),r=a.n(n),i=a(161),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},"header p":{color:"grey",fontStyle:"italic"},".navigation ul":{listStyle:"none",padding:"10px 0"},".navigation ul li":{marginBottom:"0"}}},delete o.a.googleFonts;var l=new r.a(o.a);var s=l.rhythm,c=l.scale},152:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(56),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},154:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAPoAAAD6AG1e1JrAAADv0lEQVQ4y3WTa0xTZxjHzzK3DzPZks1kHzTGxcWYmSy66LYsxGnc4sLYnLLJzOqGqCxsQJQQrJWLDFyB0mah425tbQvFUgqloNx6oYCCWC4LMiR0Ulgptlzacs7pub3n7G0rphp28sv5cPL83uc5//d9EYbCGToIAQzBAjLy5jiWCz0sS2JEYJlAl0l0JRpiDbKKgLAWcVhAcCzFAWLmoX10sG9q/IHf4+JAkMT8xNoyjftp3EdhqxQG334KCyDrWgSKZUjHQ3vC0UN7d2zd9+722JgDUuFVr8vJ0TiJ+mh8LRpkXaMjwFnF2Zk73nzjnbe3bNvy1muvbHr95Zfijhz0Ls5zNAEFJog+A3nqsAxsC83F+cdH9r//8c6tvEMf8A7u/Xr/7m8OvLdt86tX+ZkwAiiwJA4BBAZB4JcIgIY5cQPd7Z/t3l5x9qtHlXyPpsjTIFzRClVp336yZ5dzZorjGIZAWQqHwKSjZCYkd+kbMmJjegQ/zV3PdWuKV3WSgF7s0VxL/HSfpfsOLKAINLI7kBflJkVV/vdfGLJ+mFP85jOWe7WlbvW1lcbSzGMxnXdaYQG5oRxJq7Ek/3rKyZtpCbXn4731wp7cM4OlF/ztFcWJX/YbG2EBTeGRrYVEdw4FZquU6FJPmrNO1/JivbI8R3XOvzXZHp3ELExDu9WApQET3EBmw/JET5s1J9kmOFPOi52vEiyrCtm2Sme9+O/yLDA5AOsAvVHnyNhP5h8PlfFvnI0Tnzo6+Htq56XT0xWCCXnhnEUHggGYNUMH/09mcRxVFmTU/Xpcn877R1ZwX3TBVvRzr6yYoUkAyOiL8JwMYWgCNldKS+M/3CVPiuvPPdeelyS/mDBmUMAzT6+bz6X99JABGoQnv6e9eeKjPfmnPpcmH0s9frhDdHFtpJMBFEWiL/jh4wnbhi8hILHZv4aMhRnVKd+VnD+hFCT2VwpcWtGSqS6w8oRlaShQJPZsCQRq8H9cs9NTJr1DK1Gmxd/4JcFalG4pTndqStytf3qby6Zrrty9VeWefRREffAK0BQWXiKILM45hk3G25oaq+qPiWp+4+XE+svnhqSXBsv4k7L8BYPU0yQZqsob7tbZe5pGLEaXYxKeUJgW9BFTk8qsV4RoUd9TiTtzkuoyfxwQp49XX3EoChZuiabUJfaOhtHetlFL6/0uXZ9BPdbf5Vtyh8Y265V9xnpri6rXUGdqVtnkoubsZFNhyowsd7o2xy4XDndox23tdlPLmNX4wNQyYjbAJUYsbUsLzv8AbxO1RzB14psAAAAASUVORK5CYII=",width:50,height:50,src:"/custom-element-samples/gallery/static/e2c6d3619b444326d7ee780d821adaeb/58398/profile-pic.png",srcSet:"/custom-element-samples/gallery/static/e2c6d3619b444326d7ee780d821adaeb/58398/profile-pic.png 1x,\n/custom-element-samples/gallery/static/e2c6d3619b444326d7ee780d821adaeb/fd23f/profile-pic.png 1.5x,\n/custom-element-samples/gallery/static/e2c6d3619b444326d7ee780d821adaeb/fc368/profile-pic.png 2x,\n/custom-element-samples/gallery/static/e2c6d3619b444326d7ee780d821adaeb/521d9/profile-pic.png 3x"}}},site:{siteMetadata:{author:"Ondřej Chrastina",social:{twitter:"ChrastinaOndrej"}}}}}},155:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(162),c=a.n(s);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,s=n.data.site,d=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Custom Elements",description:"Samples of the HTML web pages that can be used as Custom Element Extensions in Kentico Cloud. Custom elements help you with extending the basic functionality of Kentico Cloud UI and thus improving the content editing experience. Custom element is essentially a small HTML application that exists in a sandboxed <iframe> and interacts with the Kentico Cloud app via the Custom Elements API.",author:"Ondřej Chrastina"}}}}},157:function(e,t,a){"use strict";a(34);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(4),s=a.n(l),c=a(33),d=a.n(c),m=(a(152),o.a.createContext({})),u=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};a(158);var p=a(154),h=a(159),g=a.n(h),y=a(151);var f="2598425350",b=function(){return o.a.createElement(u,{query:f,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return o.a.createElement("div",{style:{display:"flex",marginTop:Object(y.a)(2.5)}},o.a.createElement(g.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(y.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),o.a.createElement("p",null,"Written by ",o.a.createElement("strong",null,a),".",o.a.createElement("br",null),o.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"...You should follow him on Twitter")))},data:p})},E=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.description,i=t.children;return e="/custom-element-samples/gallery/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(y.b)(1.5),{marginBottom:Object(y.a)(1.5),marginTop:0})},o.a.createElement(d.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(d.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(y.a)(24),padding:Object(y.a)(1.5)+" "+Object(y.a)(.75)}},o.a.createElement("header",null,e,o.a.createElement("p",null,r)),o.a.createElement("main",null,i),o.a.createElement("footer",null,o.a.createElement(b,null),"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," ","using"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/"},"Gatsby Starter Blog")," ","by"," ",o.a.createElement("a",{href:"https://www.twitter.com/kylemathews"},"Kyle Mathews")))},t}(o.a.Component);t.a=E}}]);
//# sourceMappingURL=component---src-pages-index-js-b794782b1687efa6c9fc.js.map