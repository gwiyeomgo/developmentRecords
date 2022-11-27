"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[5192],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return g}});var a=n(7294),r=n(8733),l=n(795),o=n(2848),i=n(6799),c=n(817);var m=e=>{let{post:t}=e;return null};const p=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var s=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(o.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(i.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:p.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(m,{post:t}))};const u=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(c.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(s,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),o=n(3494),i=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,o.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,i.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},7124:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i.F},default:function(){return c}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({h3:"h3",ol:"ol",li:"li",p:"p",a:"a",h1:"h1",code:"code",pre:"pre"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,null,"dooray api 사용하기"),"\n",a.createElement(t.ol,null,"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,"dooray api를 호출하기 위한 토큰 생성\r\ndooray 설정> api 서비스 > 인증 토큰 생성"),"\n"),"\n",a.createElement(t.li,null,"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://helpdesk.dooray.com/share/pages/9wWo-xwiR66BO5LGshgVTg/2939987647631384419"},"서비스 api")," 에서\r\n프로젝트에 새업무를 등록하는 api 찾기"),"\n"),"\n"),"\n",a.createElement(t.h1,null,"postman 에서 Authorization 설정"),"\n",a.createElement(t.p,null,"type : API key\r\n=> key :Authorization\r\n=> Value : ",a.createElement(t.code,null,"dooray-api {두레이에서 받은 key}")),"\n",a.createElement(t.h1,null,"postman 에서 Header 설정"),"\n",a.createElement(t.p,null,"Content-Type : application/json 으로 설정"),"\n",a.createElement(t.h1,null,"environment"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://api.dooray.com/"},"https://api.dooray.com/")),"\n",a.createElement(t.h1,null,"사용했었던 API"),"\n",a.createElement(t.p,null,"1.프로젝트에 업무를 생성"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"Project > Projects > Posts\r\nPOST /project/v1/projects/{project-id}/posts\n")),"\n",a.createElement(t.p,null,"2.프로젝트 속한 멤버 조회"),"\n",a.createElement(t.pre,null,a.createElement(t.code,null,"GET /project/v1/projects/{project-id}/member-groups\n")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},i=n(8804);function c(e){return a.createElement(i.Z,e,a.createElement(o,e))}i.Z},817:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:o="",image:i="",children:c=null,canonicalUrl:m=""}=e;const p=(0,l.Z)(),{siteTitle:s,siteTitleAlt:u,siteUrl:g,siteDescription:d,siteImage:E,author:h}=p,y={title:t?t+" | "+s:u,description:n||d,url:""+g+(o||""),image:""+g+(i||E)};return a.createElement(a.Fragment,null,a.createElement("title",null,y.title),a.createElement("meta",{name:"description",content:y.description}),a.createElement("meta",{name:"image",content:y.image}),a.createElement("meta",{property:"og:title",content:y.title}),a.createElement("meta",{property:"og:url",content:y.url}),a.createElement("meta",{property:"og:description",content:y.description}),a.createElement("meta",{property:"og:image",content:y.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:y.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:y.title}),a.createElement("meta",{name:"twitter:url",content:y.url}),a.createElement("meta",{name:"twitter:description",content:y.description}),a.createElement("meta",{name:"twitter:image",content:y.image}),a.createElement("meta",{name:"twitter:image:alt",content:y.description}),a.createElement("meta",{name:"twitter:creator",content:h}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,c)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-network-rest-2022-01-04-rest-dooray-api-mdx-c329d0cb7cb3724de034.js.map