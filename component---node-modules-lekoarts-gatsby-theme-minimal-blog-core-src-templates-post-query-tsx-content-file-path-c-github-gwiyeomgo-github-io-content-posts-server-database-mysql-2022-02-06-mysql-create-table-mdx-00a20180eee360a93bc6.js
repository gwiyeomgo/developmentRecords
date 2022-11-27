"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9402],{8804:function(e,t,n){n.d(t,{F:function(){return u},Z:function(){return d}});var r=n(7294),a=n(8733),i=n(795),l=n(2848),o=n(6799),c=n(817);var m=e=>{let{post:t}=e;return null};const s=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:n}=e;return(0,a.tZ)(l.Z,null,(0,a.tZ)(i.X6,{as:"h1",variant:"styles.h1"},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,a.tZ)("span",null,t.timeToRead," min read")),(0,a.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:s.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,a.tZ)(m,{post:t}))};const u=e=>{var t,n,r;let{data:{post:i}}=e;return(0,a.tZ)(c.Z,{title:i.title,description:i.description?i.description:i.excerpt,image:i.banner?null===(t=i.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(r=n.resize)||void 0===r?void 0:r.src:void 0,pathname:i.slug,canonicalUrl:i.canonicalUrl})};function d(e){let{...t}=e;return r.createElement(p,t)}},6799:function(e,t,n){var r=n(8733),a=n(7294),i=n(1883),l=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:c}=(0,l.Z)();return(0,r.tZ)(a.Fragment,null,t.map(((e,t)=>(0,r.tZ)(a.Fragment,{key:e.slug},!!t&&", ",(0,r.tZ)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+c+"/"+n+"/"+e.slug)},e.name)))))}},9371:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return c}});var r=n(7294),a=n(1151);function i(e){const t=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"배경"),"\n",r.createElement(t.p,null,"1년동안 플랫폼이 많이 커졌다\r\ndb테이블도 많아지고 erd로 관리되고 있다"),"\n",r.createElement(t.p,null,"해당 플랫폼의 기능들또한 다른 용도로 개선하거나 신규 기능이 추가되면서\r\n새로운 table이 필요하다\r\nex)\r\n현재 상세페이지에서\r\n취소버튼,전환버튼을 클릭해서 사용자가 상태를 바꾼다\r\n누가 상태를 변경했는지는 table의 updated_by 로 알 수 있지만\r\n정확인 이유는 알 수 없다"),"\n",r.createElement(t.p,null,"그래서 상태 이력에 따라 메모를 남기는 table을 추가하기로 했다\r\n이 작업으로 기존 api들도 수정했다."),"\n",r.createElement(t.h3,null,"추가된 table"),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-sql"},"CREATE TABLE IF NOT EXISTS `status_revisions_memo`\r\n(\r\n    `id`               INT          NOT NULL COMMENT 'donation_status_revisions_id' ,\r\n    `note`             VARCHAR(50)  NOT NULL COMMENT 'note',\r\n    `created`          JSON         NOT NULL,\r\n    `updated`          JSON         NOT NULL,\r\n    `deleted_at`       DATETIME     NULL,\r\n    PRIMARY KEY (`id`),\r\n    FOREIGN KEY (`id`)\r\n    REFERENCES `status_revisions` (`id`)\r\n);\n")))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)},o=n(8804);function c(e){return r.createElement(o.Z,e,r.createElement(l,e))}o.Z},817:function(e,t,n){var r=n(7294),a=n(1883),i=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:l="",image:o="",children:c=null,canonicalUrl:m=""}=e;const s=(0,i.Z)(),{siteTitle:p,siteTitleAlt:u,siteUrl:d,siteDescription:g,siteImage:E,author:h}=s,b={title:t?t+" | "+p:u,description:n||g,url:""+d+(l||""),image:""+d+(o||E)};return r.createElement(r.Fragment,null,r.createElement("title",null,b.title),r.createElement("meta",{name:"description",content:b.description}),r.createElement("meta",{name:"image",content:b.image}),r.createElement("meta",{property:"og:title",content:b.title}),r.createElement("meta",{property:"og:url",content:b.url}),r.createElement("meta",{property:"og:description",content:b.description}),r.createElement("meta",{property:"og:image",content:b.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:b.title}),r.createElement("meta",{name:"twitter:url",content:b.url}),r.createElement("meta",{name:"twitter:description",content:b.description}),r.createElement("meta",{name:"twitter:image",content:b.image}),r.createElement("meta",{name:"twitter:image:alt",content:b.description}),r.createElement("meta",{name:"twitter:creator",content:h}),r.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,a.withPrefix)("/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,a.withPrefix)("/favicon-16x16.png")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,a.withPrefix)("/apple-touch-icon.png")}),m?r.createElement("link",{rel:"canonical",href:m}):null,c)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-database-mysql-2022-02-06-mysql-create-table-mdx-00a20180eee360a93bc6.js.map