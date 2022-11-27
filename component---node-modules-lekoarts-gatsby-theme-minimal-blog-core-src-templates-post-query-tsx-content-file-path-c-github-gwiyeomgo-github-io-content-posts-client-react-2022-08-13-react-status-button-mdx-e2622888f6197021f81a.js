"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[7302],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return g}});var a=n(7294),r=n(8733),l=n(795),i=n(2848),c=n(6799),o=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,r.tZ)(i.Z,null,(0,r.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(a.Fragment,null," — ",(0,r.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.tZ)(m,{post:t}))};const u=e=>{var t,n,a;let{data:{post:l}}=e;return(0,r.tZ)(o.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return a.createElement(p,t)}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},5905:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var a=n(7294),r=n(1151);function l(e){const t=Object.assign({h3:"h3",p:"p",code:"code",a:"a",img:"img"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h3,null,"배경"),"\n",a.createElement(t.p,null,"특정 상태에서 버튼을 활성화 및 비활성화해야 하는 경우가 있습니다.\r\n예를 들어 버튼은 취소할 수 없는 상태일 때 비활성화되어야 합니다.\r\n실제로 코드를 작성하는 동안 중첩된 if 문을 사용하게 되었습니다.\r\n코드의 길이가 길어져 코드를 이해하기 어려워졌습니다.\r\n이를 수정하기 위해 반복되는 코드를 컴포넌트로 만들었습니다."),"\n",a.createElement(t.h3,null,"작업내용"),"\n",a.createElement(t.p,null,"기부 상태 버튼 컴포넌트를 만들었고\r\n해당 버튼을 사용해서 코드를 정리하려고 합니다."),"\n",a.createElement(t.h3,null,"오픈소스로 만들어 보자"),"\n",a.createElement(t.p,null,"1.",a.createElement(t.code,null,"npx create-react-app activate-button-by-status")," 로 react 프로젝트 생성\r\n2. 컴포넌트 작업\r\n3. package.json 구성하고\r\n3. npm publish"),"\n",a.createElement(t.h3,null,"오픈소스등록"),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://www.npmjs.com/package/@gwiyeomgo/activate-button-by-status"},"npm 에 등록한 내 react 모듈"),"\r\n",a.createElement(t.code,null,"npm i @gwiyeomgo/activate-button-by-status"),"\r\n를 통해서 상태에 따라서 활성 비활성화 되도록 수정할 수 있다"),"\n",a.createElement(t.img,{src:"./activate-button.jpg",alt:"button"}),"\n",a.createElement(t.h3,null,"이 후 계획"),"\n",a.createElement(t.p,null,"내가 업무를 하면서 이 버튼을 생각하게 된 계기는\r\n상태 뿐만 아니라 권한까지도 같이 고려해야 했던 상황 때문이다\r\n업무 코드에서는 상태,권한까지 적용한 코드를 만들었는데\r\n오픈 소스는 간단한게 좋다고 생각했다\r\n우선 상태만 고려한것을 만들었으니\r\n해당 모듈에 버전을 추가하거나\r\n아니면 새 모듈을 만들어 권한까지 고려한 버튼을 만들계획이다.\r\n=> 20220822 버전을 0.1.0 으로 변경하고 update 완료"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},c=n(8804);function o(e){return a.createElement(c.Z,e,a.createElement(i,e))}c.Z},817:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:g,siteDescription:d,siteImage:E,author:h}=s,y={title:t?t+" | "+p:u,description:n||d,url:""+g+(i||""),image:""+g+(c||E)};return a.createElement(a.Fragment,null,a.createElement("title",null,y.title),a.createElement("meta",{name:"description",content:y.description}),a.createElement("meta",{name:"image",content:y.image}),a.createElement("meta",{property:"og:title",content:y.title}),a.createElement("meta",{property:"og:url",content:y.url}),a.createElement("meta",{property:"og:description",content:y.description}),a.createElement("meta",{property:"og:image",content:y.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:y.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:y.title}),a.createElement("meta",{name:"twitter:url",content:y.url}),a.createElement("meta",{name:"twitter:description",content:y.description}),a.createElement("meta",{name:"twitter:image",content:y.image}),a.createElement("meta",{name:"twitter:image:alt",content:y.description}),a.createElement("meta",{name:"twitter:creator",content:h}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?a.createElement("link",{rel:"canonical",href:m}):null,o)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-client-react-2022-08-13-react-status-button-mdx-e2622888f6197021f81a.js.map