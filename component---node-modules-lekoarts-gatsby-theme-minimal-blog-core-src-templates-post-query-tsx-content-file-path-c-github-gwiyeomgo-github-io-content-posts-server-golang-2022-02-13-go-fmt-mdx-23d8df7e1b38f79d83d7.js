"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[4267],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return g}});var r=n(7294),a=n(8733),l=n(795),i=n(2848),c=n(6799),o=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(i.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const u=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(o.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(p,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},2179:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({h1:"h1",p:"p",code:"code"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"배경"),"\n",r.createElement(t.p,null,"go 코드를 사용하면서\r\n가장 자주 썼던 패키지는 ",r.createElement(t.code,null,"fmt"),"패키지 인거 같다."),"\n",r.createElement(t.p,null,"코드를 작성하고 결과가 예상과 일치하는지 또는\r\n또는 데이터의 형태를 변환할때 사용했었다."),"\n",r.createElement(t.p,null,r.createElement(t.code,null," x := 123")),"\n",r.createElement(t.p,null,r.createElement(t.code,null,'fmt.Printf("%b\\n",x) //integer => binary'),"\r\n1111011\r\n",r.createElement(t.code,null,'fmt.Printf("%o\\n",x)//8진법'),"\r\n173\r\n",r.createElement(t.code,null,'fmt.Printf("%d\\n",x)//bytes 16진수'),"\r\n123"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},c=n(8804);function o(e){return r.createElement(c.Z,e,r.createElement(i,e))}c.Z},817:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:d,siteImage:E,author:f}=s,h={title:t?t+" | "+p:u,description:n||d,url:""+g+(i||""),image:""+g+(c||E)};return r.createElement(r.Fragment,null,r.createElement("title",null,h.title),r.createElement("meta",{name:"description",content:h.description}),r.createElement("meta",{name:"image",content:h.image}),r.createElement("meta",{property:"og:title",content:h.title}),r.createElement("meta",{property:"og:url",content:h.url}),r.createElement("meta",{property:"og:description",content:h.description}),r.createElement("meta",{property:"og:image",content:h.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:h.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:h.title}),r.createElement("meta",{name:"twitter:url",content:h.url}),r.createElement("meta",{name:"twitter:description",content:h.description}),r.createElement("meta",{name:"twitter:image",content:h.image}),r.createElement("meta",{name:"twitter:image:alt",content:h.description}),r.createElement("meta",{name:"twitter:creator",content:f}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,o)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-golang-2022-02-13-go-fmt-mdx-23d8df7e1b38f79d83d7.js.map