"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[63],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var r=n(7294),a=n(8733),l=n(795),i=n(2848),o=n(6799),c=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var u=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(i.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const p=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(c.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(u,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),i=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,i.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},1267:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return c}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({h3:"h3",p:"p",ol:"ol",li:"li"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"배경"),"\n",r.createElement(t.p,null,"개발자가 사용할 dev 서버에 배포한다."),"\n",r.createElement(t.p,null,"사용자 페이지\r\n어드민 페이지"),"\n",r.createElement(t.h3,null,"작업 목표"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"사용자 페이지\r\n(프론트_프로젝트) 레포지토리에 dev 브랜치 따기\r\njenkins와 dev 브랜치 연결\r\njenkins에서 새로운 job 생성하기\r\njob 이름 - (프론트_프로젝트)-dev\r\njenkins 셋팅하기\r\n(프론트_프로젝트)-test job 설정 참고\r\ns3 버킷 만들기\r\ncloudFront과 s3 버킷 연결하기\r\nRoute53과 cloudFront 연결하기\r\njenkins 빌드 후 조치 설정\r\ncloudFront ID 연결하기\r\n배포될 코드 설정 수정하기\r\nfront 배포- (프론트_프로젝트) 코드 수정하기\r\n젠킨스 빌드 버튼 누르기\r\nsuccess가 뜨는지 확인\r\ndev url로 들어가서 제대로 페이지가 나오는지 확인\r\n확인 필요\r\n이미 s3에 사용하려 했던 이름의 버킷이 존재한다.\r\n-> 비어 있으므로 그대로 사용해도 되는지 확인해볼 것\r\nimage.png"),"\n"),"\n",r.createElement(t.p,null,"위에 s3 버킷은 cloudFront 설정도 적용이 되어 있다.\r\nimage.png"),"\n",r.createElement(t.p,null,"Route53에 이미 사용하려 했던 레코드(url)이 존재한다.\r\nimage.png\r\nimage.png\r\n=> S3는 객체가 비어 있으므로 그대로 사용하는 것으로 결정됨, CloudFront와 Route53은 기존 것을 지우고 새로 만들어서 연결함"),"\n",r.createElement(t.ol,{start:"2"},"\n",r.createElement(t.li,null,"어드민 페이지\r\n(어드민_프로젝트) 레포지토리에 dev 브랜치 따기\r\njenkins와 dev 브랜치 연결\r\njenkins에서 새로운 job 생성하기\r\njob 이름 - (어드민_프로젝트)-dev\r\njenkins 셋팅하기\r\n(어드민_프로젝트)-test job 설정 참고\r\ns3 버킷 만들기\r\ncloudFront과 s3 버킷 연결하기\r\nRoute53과 cloudFront 연결하기\r\n배포될 코드 config, package.json 파일 수정하기\r\njenkins 빌드 후 조치 설정\r\ncloudFront ID 연결하기\r\ns3에 소스 코드 붓기\r\nurl에 접속해서 확인하기"),"\n"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},o=n(8804);function c(e){return r.createElement(o.Z,e,r.createElement(i,e))}o.Z},817:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:c=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:E,author:h}=s,v={title:t?t+" | "+u:p,description:n||d,url:""+g+(i||""),image:""+g+(o||E)};return r.createElement(r.Fragment,null,r.createElement("title",null,v.title),r.createElement("meta",{name:"description",content:v.description}),r.createElement("meta",{name:"image",content:v.image}),r.createElement("meta",{property:"og:title",content:v.title}),r.createElement("meta",{property:"og:url",content:v.url}),r.createElement("meta",{property:"og:description",content:v.description}),r.createElement("meta",{property:"og:image",content:v.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:v.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:v.title}),r.createElement("meta",{name:"twitter:url",content:v.url}),r.createElement("meta",{name:"twitter:description",content:v.description}),r.createElement("meta",{name:"twitter:image",content:v.image}),r.createElement("meta",{name:"twitter:image:alt",content:v.description}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,c)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-etc-2022-04-11-etc-project-distribute-mdx-fed91f20398393f87055.js.map