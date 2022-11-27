"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[7687],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var r=n(7294),a=n(8733),l=n(795),i=n(2848),c=n(6799),o=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(i.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const p=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(o.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(u,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},9082:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({h3:"h3",p:"p",code:"code",pre:"pre",a:"a"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"배경"),"\n",r.createElement(t.p,null,"업무에서 개발할때\r\n프로젝트를 gitLab 에 올리고 clone 받아서 pc 에 설치한다\r\n그후 origin remote 와 fork 한 프로젝트 url 로 개인 remote 저장소를 만든다\r\n그리고 origin 의 특정 master,dev 등.. branch 에서 새 가지를 뻗어나간다"),"\n",r.createElement(t.p,null,"예) origin/ dev 에서 새 branch 를 생성하는 방법은\r\n",r.createElement(t.code,null," git checkout -b (새 이슈번호)")," 사용\r\n새 이슈번호 ex) #123 과 같이 쓴다"),"\n",r.createElement(t.h3,null,"왜..branch 번호에 ",r.createElement(t.code,null,"#")," 붙였지?"),"\n",r.createElement(t.p,null,"commit 메세지를 쓸때 '#1 ...오류 수정 '과 같이 쓸 경우\r\n#1 이슈번호와 연결해준다"),"\n",r.createElement(t.p,null,"이슈번호 # 을 사용한다면.."),"\n",r.createElement(t.h3,null,'질문  "error: switch "b\' requires a value" =>  에러 발생 왜?'),"\n",r.createElement(t.p,null,"이 경우 아래처럼 \\로 이스케이프하거나 이름을 작은따옴표/큰따옴표로 묶어서 해결"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"git checkout -b \\#1\r\ngit checkout -b \"#1\"\r\ngit checkout -b '#1'\n")),"\n",r.createElement(t.h3,null,"참고"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://stackoverflow.com/questions/49665976/why-cant-a-branch-name-contain-the-hash-char-at-the-begining9"},"error: switch \"b' requires a value")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},c=n(8804);function o(e){return r.createElement(c.Z,e,r.createElement(i,e))}c.Z},817:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:h,siteImage:d,author:E}=s,b={title:t?t+" | "+u:p,description:n||h,url:""+g+(i||""),image:""+g+(c||d)};return r.createElement(r.Fragment,null,r.createElement("title",null,b.title),r.createElement("meta",{name:"description",content:b.description}),r.createElement("meta",{name:"image",content:b.image}),r.createElement("meta",{property:"og:title",content:b.title}),r.createElement("meta",{property:"og:url",content:b.url}),r.createElement("meta",{property:"og:description",content:b.description}),r.createElement("meta",{property:"og:image",content:b.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:b.title}),r.createElement("meta",{name:"twitter:url",content:b.url}),r.createElement("meta",{name:"twitter:description",content:b.description}),r.createElement("meta",{name:"twitter:image",content:b.image}),r.createElement("meta",{name:"twitter:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:creator",content:E}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,o)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-git-2022-11-11-git-branch-mdx-368e167e3f159a6d1306.js.map