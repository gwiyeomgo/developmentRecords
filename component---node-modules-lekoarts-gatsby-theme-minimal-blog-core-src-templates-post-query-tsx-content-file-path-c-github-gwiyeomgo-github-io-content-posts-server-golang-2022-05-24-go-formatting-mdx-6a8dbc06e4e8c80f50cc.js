"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[287],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var a=n(7294),r=n(8733),l=n(795),i=n(2848),o=n(6799),c=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(m,{post:t}))};const p=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(c.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(u,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},1466:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return c}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({h3:"h3",blockquote:"blockquote",p:"p",ul:"ul",li:"li",code:"code",h5:"h5",a:"a"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,null,"strconv package"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"strconv.FormatUint(uint64(u), 10)"),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,a.createElement(t.code,null,"var n uint = 123")," 를 문자열로 변환"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"strconv.FormatUint(uint64(u), 10)")),"\n"),"\n",a.createElement(t.blockquote,null,"\n",a.createElement(t.p,null,"strconv.ParseInt"),"\n"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"string to int64"),"\n",a.createElement(t.li,null,a.createElement(t.code,null,"id, _ := strconv.ParseInt(str, 10, 64)")),"\n"),"\n",a.createElement(t.h5,null,"참고"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://stackoverflow.com/questions/57187889/how-to-convert-uint-type-into-string-type-in-golang"},"https://stackoverflow.com/questions/57187889/how-to-convert-uint-type-into-string-type-in-golang")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},o=n(8804);function c(e){return a.createElement(o.Z,e,a.createElement(i,e))}o.Z},817:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:c=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:E,author:h}=s,v={title:t?t+" | "+u:p,description:n||d,url:""+g+(i||""),image:""+g+(o||E)};return a.createElement(a.Fragment,null,a.createElement("title",null,v.title),a.createElement("meta",{name:"description",content:v.description}),a.createElement("meta",{name:"image",content:v.image}),a.createElement("meta",{property:"og:title",content:v.title}),a.createElement("meta",{property:"og:url",content:v.url}),a.createElement("meta",{property:"og:description",content:v.description}),a.createElement("meta",{property:"og:image",content:v.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:v.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:v.title}),a.createElement("meta",{name:"twitter:url",content:v.url}),a.createElement("meta",{name:"twitter:description",content:v.description}),a.createElement("meta",{name:"twitter:image",content:v.image}),a.createElement("meta",{name:"twitter:image:alt",content:v.description}),a.createElement("meta",{name:"twitter:creator",content:h}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,c)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-golang-2022-05-24-go-formatting-mdx-6a8dbc06e4e8c80f50cc.js.map