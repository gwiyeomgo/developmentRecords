"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9156],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return g}});var r=n(7294),l=n(8733),a=n(795),i=n(2848),c=n(6799),o=n(817);var m=e=>{let{post:t}=e;return null};const u=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var s=e=>{let{data:{post:t},children:n}=e;return(0,l.tZ)(i.Z,null,(0,l.tZ)(a.X6,{as:"h1",variant:"styles.h1"},t.title),(0,l.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,l.tZ)("time",null,t.date),t.tags&&(0,l.tZ)(r.Fragment,null," — ",(0,l.tZ)(c.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,l.tZ)("span",null,t.timeToRead," min read")),(0,l.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,l.tZ)(m,{post:t}))};const p=e=>{var t,n,r;let{data:{post:a}}=e;return(0,l.tZ)(o.Z,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function g(e){let{...t}=e;return r.createElement(s,t)}},6799:function(e,t,n){var r=n(8733),l=n(7294),a=n(1883),i=n(3494),c=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,i.Z)();return(0,r.tZ)(l.Fragment,null,t.map(((e,t)=>(0,r.tZ)(l.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,c.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},9910:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.F},default:function(){return o}});var r=n(7294),l=n(1151);function a(e){const t=Object.assign({h3:"h3",pre:"pre",code:"code",h4:"h4",ol:"ol",li:"li",p:"p"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"평소 사용"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"1.project clone\r\n2. remote origin 설정\r\n3. project fork\r\n4. remote add (이름) (fork url)\r\n5. origin 의 master branch 를 시작으로 새 브런치 생성\r\n6. 작업 후 새 branch 를 git push (이름) (새 브런치)\r\n7. fork 된 프로젝트에서 => origin master 로 merge request\n")),"\n",r.createElement(t.h3,null,"Git 저장소 만들기"),"\n",r.createElement(t.h4,null,"1.아직 버전관리를 하지 않는 로컬 디렉토리 하나를 선택해서 Git 저장소를 적용하는 방법"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,r.createElement(t.code,null,"git init")," :이 명령은 .git 이라는 하위 디렉토리를 만든다."),"\n",r.createElement(t.li,null,"Git 이 파일을 관리하게 하려면 저장소에 파일을 추가하고 커밋해야 한다.\r\n",r.createElement(t.code,null,"git add")," 명령으로 파일을 추가하고 ",r.createElement(t.code,null,"git commit ")," 명령으로 커밋 => 파일 버전 관리를 시작"),"\n"),"\n",r.createElement(t.p,null,"2.다른 어딘가에서 Git 저장소를 Clone 하는 방법"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,r.createElement(t.code,null,"git clone <url>")," 을 실행하면 프로젝트 히스토리를 전부 받음"),"\n"),"\n",r.createElement(t.h3,null,"리모트 저장소"),"\n",r.createElement(t.p,null,"리모트 저장소는 인터넷이나 네트워크 어딘가에 있는저장소를 말한다"),"\n",r.createElement(t.h3,null,"리모트 저장소 origin 의 url 을 변경하고 싶다면"),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"git remote set-url origin {new url}")),"\n",r.createElement(t.p,null,"명령어로 변경 가능"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(a,e)):a(e)},c=n(8804);function o(e){return r.createElement(c.Z,e,r.createElement(i,e))}c.Z},817:function(e,t,n){var r=n(7294),l=n(1883),a=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:c="",children:o=null,canonicalUrl:m=""}=e;const u=(0,a.Z)(),{siteTitle:s,siteTitleAlt:p,siteUrl:g,siteDescription:d,siteImage:E,author:h}=u,f={title:t?t+" | "+s:p,description:n||d,url:""+g+(i||""),image:""+g+(c||E)};return r.createElement(r.Fragment,null,r.createElement("title",null,f.title),r.createElement("meta",{name:"description",content:f.description}),r.createElement("meta",{name:"image",content:f.image}),r.createElement("meta",{property:"og:title",content:f.title}),r.createElement("meta",{property:"og:url",content:f.url}),r.createElement("meta",{property:"og:description",content:f.description}),r.createElement("meta",{property:"og:image",content:f.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:f.title}),r.createElement("meta",{name:"twitter:url",content:f.url}),r.createElement("meta",{name:"twitter:description",content:f.description}),r.createElement("meta",{name:"twitter:image",content:f.image}),r.createElement("meta",{name:"twitter:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,l.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,l.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,l.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,o)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-git-2021-06-21-git-remote-mdx-c3bd03c2275f5568bf99.js.map