"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[427],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return g}});var r=n(7294),a=n(8733),l=n(795),o=n(2848),c=n(6799),i=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(o.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const u=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(i.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(p,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),o=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:i}=(0,o.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+i+"/"+n+"/"+e.slug)},e.name)))))}},7156:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return i}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({h1:"h1",p:"p",code:"code",a:"a"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"배경"),"\n",r.createElement(t.p,null,"테스트 케이스를 적용하면서 잘 적용된 것인지 궁금했다.\r\n실제로 코드의 커버가 얼마나 되는지 확인하는 go 커멘드 명령어를 알아보자"),"\n",r.createElement(t.p,null,"reflect 패키지를 통해"),"\n",r.createElement(t.p,null,'t.Log(reflect.TypeOf("string").Kind())\r\n',r.createElement(t.code,null,"go test ./... -v")),"\n",r.createElement(t.p,null,"테스트가 코드의 몇 퍼센트를 통과시키고 있는지 알 수 있음\r\n",r.createElement(t.code,null,"go test -v -coverprofile cover.out ./...")),"\n",r.createElement(t.p,null,"해당 명령어로 cover.out 파일이 생겼다면\r\ncover.out 을 html 파일로 볼 수 있다\r\n",r.createElement(t.code,null,"go tool cover -html cover.out")),"\n",r.createElement(t.p,null,"go 버전에 따라 명령어가 다른거 같다\r\n아래 명령어로 확인\r\n",r.createElement(t.code,null,"go tool cover --help")),"\n",r.createElement(t.h1,null,"참고"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://golangdocs.com/code-coverage-in-golang"},"https://golangdocs.com/code-coverage-in-golang")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},c=n(8804);function i(e){return r.createElement(c.Z,e,r.createElement(o,e))}c.Z},817:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:o="",image:c="",children:i=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:d,siteImage:E,author:h}=s,v={title:t?t+" | "+p:u,description:n||d,url:""+g+(o||""),image:""+g+(c||E)};return r.createElement(r.Fragment,null,r.createElement("title",null,v.title),r.createElement("meta",{name:"description",content:v.description}),r.createElement("meta",{name:"image",content:v.image}),r.createElement("meta",{property:"og:title",content:v.title}),r.createElement("meta",{property:"og:url",content:v.url}),r.createElement("meta",{property:"og:description",content:v.description}),r.createElement("meta",{property:"og:image",content:v.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:v.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:v.title}),r.createElement("meta",{name:"twitter:url",content:v.url}),r.createElement("meta",{name:"twitter:description",content:v.description}),r.createElement("meta",{name:"twitter:image",content:v.image}),r.createElement("meta",{name:"twitter:image:alt",content:v.description}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,i)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-testcase-2022-11-23-testcase-go-coverage-mdx-09ac3af5bc16ec1faeee.js.map