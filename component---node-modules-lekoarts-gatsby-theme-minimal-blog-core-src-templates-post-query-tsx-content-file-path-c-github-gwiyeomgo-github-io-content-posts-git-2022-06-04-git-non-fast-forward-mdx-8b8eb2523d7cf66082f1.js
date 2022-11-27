"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[3336],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return E}});var r=n(7294),a=n(8733),l=n(795),i=n(2848),o=n(6799),c=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(i.Z,null,(0,a.tZ)(l.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const u=e=>{var t,n,r;let{data:{post:l}}=e;return(0,a.tZ)(c.Z,{title:l.title,description:l.description?l.description:l.excerpt,image:l.banner?null===(t=l.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:l.slug,canonicalUrl:l.canonicalUrl})};function E(e){let{...t}=e;return r.createElement(p,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),l=n(1883),i=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,i.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},5591:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return c}});var r=n(7294),a=n(1151);function l(e){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",ol:"ol",li:"li",a:"a"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"문제"),"\n",r.createElement(t.p,null,"에러발생"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"To https://gitlab.com/gwiyeomGo/service.git\r\n ! [rejected]        #15 -> #15 (non-fast-forward)\r\nerror: failed to push some refs to 'https://gitlab.com/gwiyeomGo/service.git'\r\nhint: Updates were rejected because the tip of your current branch is behind\r\nhint: its remote counterpart. Integrate the remote changes (e.g.\r\nhint: 'git pull ...') before pushing again.\r\nhint: See the 'Note about fast-forwards' in 'git push --help' for details.\n")),"\n",r.createElement(t.h1,null,"문제가 발생했던 상황..."),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"git repository 에 service 라는 프로젝트가 있다."),"\n",r.createElement(t.li,null,"service 를 fork 하고,fork 한 프로젝트를 로컬에서 gwiyeom 라는 이름붙이고 remote 를 추가했다."),"\n",r.createElement(t.li,null,"origin/dev branch 에서 #15 라는 branch 를 생성하고 작업했다."),"\n",r.createElement(t.li,null,"작업 후 #15 test 라는 커밋을 fork 했던 프로젝트로 push 했다. ",r.createElement(t.code,null,"git push gwiyeom #15")),"\n",r.createElement(t.li,null,"로컬에 #15에서 더 코드를 수정해야했고 ",r.createElement(t.code,null,"git reset HEAD~1"),"을 해서 커밋을 취소했다."),"\n",r.createElement(t.li,null,"그리고 작업을 다시하고 같은 코드,같은 comit 으로 다시 #15에 push 했다."),"\n"),"\n",r.createElement(t.h1,null,"결론"),"\n",r.createElement(t.p,null,"내가 push하려고 했던\r\ngwiyeom /#15  에 있는 commit 을\r\n로컬에서 reset해서\r\npush 할 때 그 commit 이 없어서 발생했다"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"브랜치의 끝이 리모트 브랜치보다 뒤에 있으므로 업데이트가\r\n거부되었습니다. 푸시하기 전에 ('git pull ...' 등 명령으로) 리모트\r\n변경 사항을 포함하십시오.\n")),"\n",r.createElement(t.p,null,"#질문\r\ncommit 이름을 와전히 똑같이 했는데\r\n커밋의 SHA-1 체크섬 달라지면서 이전 커밋의 SHA-1 체크섬이 없어서 그런가?"),"\n",r.createElement(t.p,null,"git 상태는\r\n커밋의 SHA-1 체크섬 으로 인식하는 건가?"),"\n",r.createElement(t.h1,null,"출처"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://velog.io/@rain98/%EA%B9%83%ED%97%88%EB%B8%8C-non-fast-forward-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0"},"https://velog.io/@rain98/%EA%B9%83%ED%97%88%EB%B8%8C-non-fast-forward-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0"),"\r\n",r.createElement(t.a,{href:"https://www.zehye.kr/git/2019/10/27/11git_push_error/"},"https://www.zehye.kr/git/2019/10/27/11git_push_error/"),"\r\n",r.createElement(t.a,{href:"https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%BB%A4%EB%B0%8B-%ED%9E%88%EC%8A%A4%ED%86%A0%EB%A6%AC-%EC%A1%B0%ED%9A%8C%ED%95%98%EA%B8%B0"},"https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%BB%A4%EB%B0%8B-%ED%9E%88%EC%8A%A4%ED%86%A0%EB%A6%AC-%EC%A1%B0%ED%9A%8C%ED%95%98%EA%B8%B0")))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},o=n(8804);function c(e){return r.createElement(o.Z,e,r.createElement(i,e))}o.Z},817:function(e,t,n){var r=n(7294),a=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:c=null,canonicalUrl:m=""}=e;const s=(0,l.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:E,siteDescription:g,siteImage:h,author:d}=s,f={title:t?t+" | "+p:u,description:n||g,url:""+E+(i||""),image:""+E+(o||h)};return r.createElement(r.Fragment,null,r.createElement("title",null,f.title),r.createElement("meta",{name:"description",content:f.description}),r.createElement("meta",{name:"image",content:f.image}),r.createElement("meta",{property:"og:title",content:f.title}),r.createElement("meta",{property:"og:url",content:f.url}),r.createElement("meta",{property:"og:description",content:f.description}),r.createElement("meta",{property:"og:image",content:f.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:f.title}),r.createElement("meta",{name:"twitter:url",content:f.url}),r.createElement("meta",{name:"twitter:description",content:f.description}),r.createElement("meta",{name:"twitter:image",content:f.image}),r.createElement("meta",{name:"twitter:image:alt",content:f.description}),r.createElement("meta",{name:"twitter:creator",content:d}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,c)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-git-2022-06-04-git-non-fast-forward-mdx-8b8eb2523d7cf66082f1.js.map