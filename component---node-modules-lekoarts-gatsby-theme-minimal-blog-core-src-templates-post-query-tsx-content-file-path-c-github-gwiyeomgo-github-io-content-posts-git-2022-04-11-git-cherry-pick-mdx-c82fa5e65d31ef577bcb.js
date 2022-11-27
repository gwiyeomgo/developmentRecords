"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9577],{8804:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return u}});var r=n(7294),a=n(8733),i=n(795),c=n(2848),l=n(6799),o=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var g=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(c.Z,null,(0,a.tZ)(i.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(l.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const p=e=>{var t,n,r;let{data:{post:i}}=e;return(0,a.tZ)(o.Z,{title:i.title,description:i.description?i.description:i.excerpt,image:i.banner?null===(t=i.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:i.slug,canonicalUrl:i.canonicalUrl})};function u(e){let{...t}=e;return r.createElement(g,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),i=n(1883),c=n(3494),l=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:o}=(0,c.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,l.Z)("/"+o+"/"+n+"/"+e.slug)},e.name)))))}},78:function(e,t,n){n.r(t),n.d(t,{Head:function(){return l.F},default:function(){return o}});var r=n(7294),a=n(1151);function i(e){const t=Object.assign({h1:"h1",p:"p",h4:"h4",pre:"pre",code:"code",a:"a"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"git cherry-pick"),"\n",r.createElement(t.p,null,"커밋을 선택적으로 브랜치에 적용시킬 때 사용한다."),"\n",r.createElement(t.h1,null,"배경"),"\n",r.createElement(t.p,null,"우리는 dev(개발계),staging(계발계2),master(운영) 브런치가 있다\r\n배포날 master 에 급하게 고쳐야할 이슈가 생김\r\nmaster 에서 a branch 생성하고 master 로 머지함\r\nmaster 에 머지했던 commit 을 dev 에 추가시켜야함"),"\n",r.createElement(t.h4,null,"해결 방법"),"\n",r.createElement(t.p,null,"로컬에서 command 로 직접 cheery pick 을 해야 한다고 함"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"(master)    1 - 2  - hoxfix-2\r\n                 \\   /(merge)\r\n                hoxfix-2\r\n\r\nhoxfix-2 의 commit 해쉬 복사 ex) a123bced22\r\n\r\n(dev)  1 - 2 - 3  -  dev-cherry-3\r\n                 \\    /(merge)\r\n            dev-cherry-3\r\n            git cherry-pick a123bced22\n")),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"master 브랜치에서\r\ngit pull origin master\r\n\r\ngit checkout dev\r\ngit pull origin dev\r\ngit checkout -b dev-cherry-3\r\n\r\ngit checkout master\r\ngit log --pretty=oneline\r\n\r\n>> (체리픽 할 코드) 복사\r\n\r\ngit checkout dev-cherry-3\r\ngit cherry-pick (체리픽 할 코드)\r\n\r\ngit push origin dev-cherry-3\r\n\r\n이후 mr을 staging으로\n")),"\n",r.createElement(t.h1,null,"방법 2 (cherry-pick a button) gitLab 자체 cherry-pick a button 있음"),"\n",r.createElement(t.p,null,"git 의 origin 의 dev 브렌치와 같은 환경을 로컬에 받음\r\n",r.createElement(t.code,null,"git checkout -t origin/dev"),"\r\n",r.createElement(t.code,null,"git remote update")),"\n",r.createElement(t.p,null,"그 후에 dev 에서 branch 를 새로 생성 (#1)\r\n작업\r\n작업 후 commit\r\ngit push origin #1\r\norigin 의 #1 을 origin 의 dev 로 merge request\r\nmerge 이후 gitLab의 경우 cherry-pick 버튼 클릭\r\n해당 commit 만 staging이나 master로 cherry-pick 가능"),"\n",r.createElement(t.h1,null,"참고"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://docs.gitlab.com/ee/user/project/merge_requests/cherry_pick_changes.html"},"gitLab docs"),"\r\n",r.createElement(t.a,{href:"https://itzjamie96.github.io/2020/12/10/git-cherry-pick-basics/"},"https://itzjamie96.github.io/2020/12/10/git-cherry-pick-basics/"),"\r\n",r.createElement(t.a,{href:"https://cjh5414.github.io/get-git-remote-branch/"},"https://cjh5414.github.io/get-git-remote-branch/")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)},l=n(8804);function o(e){return r.createElement(l.Z,e,r.createElement(c,e))}l.Z},817:function(e,t,n){var r=n(7294),a=n(1883),i=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:c="",image:l="",children:o=null,canonicalUrl:m=""}=e;const s=(0,i.Z)(),{siteTitle:g,siteTitleAlt:p,siteUrl:u,siteDescription:h,siteImage:d,author:E}=s,y={title:t?t+" | "+g:p,description:n||h,url:""+u+(c||""),image:""+u+(l||d)};return r.createElement(r.Fragment,null,r.createElement("title",null,y.title),r.createElement("meta",{name:"description",content:y.description}),r.createElement("meta",{name:"image",content:y.image}),r.createElement("meta",{property:"og:title",content:y.title}),r.createElement("meta",{property:"og:url",content:y.url}),r.createElement("meta",{property:"og:description",content:y.description}),r.createElement("meta",{property:"og:image",content:y.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:y.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:y.title}),r.createElement("meta",{name:"twitter:url",content:y.url}),r.createElement("meta",{name:"twitter:description",content:y.description}),r.createElement("meta",{name:"twitter:image",content:y.image}),r.createElement("meta",{name:"twitter:image:alt",content:y.description}),r.createElement("meta",{name:"twitter:creator",content:E}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,o)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-git-2022-04-11-git-cherry-pick-mdx-c82fa5e65d31ef577bcb.js.map