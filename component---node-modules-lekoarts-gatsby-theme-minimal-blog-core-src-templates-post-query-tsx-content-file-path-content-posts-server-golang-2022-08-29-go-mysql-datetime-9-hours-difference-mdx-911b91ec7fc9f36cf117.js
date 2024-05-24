"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[8230],{1687:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c.p},default:function(){return i}});var l=n(6540),r=n(8453);function m(e){const t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",img:"img",ul:"ul",li:"li",a:"a"},(0,r.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"배경"),"\n",l.createElement(t.p,null,"golang 의 grom 을 사용해서 데이터 생성 날짜를 현재 시간으로 자동으로 insert 했다.\ngolang 코드에서 는  ",l.createElement(t.code,null,"time.Time")," 을 사용해서 db 에 insert 한다"),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,'type testEntity struct {\n\tID        string `gorm:"primarykey;type:varchar(10)"`\n\t...\n\tCreatedAt time.Time\n\tUpdatedAt time.Time\n}\n')),"\n",l.createElement(t.h1,null,"문제"),"\n",l.createElement(t.p,null,l.createElement(t.img,{src:"./datetime.jpg",alt:"img"}),"\n",l.createElement(t.img,{src:"./datetime2.jpg",alt:"img2"}),"\n추가된 데이터가가 분,초는 일치하지만 시간만 9시간이 차이가 난다"),"\n",l.createElement(t.h1,null,"찾아보니.."),"\n",l.createElement(t.p,null,"타임존에 대해서 찾아봤다"),"\n",l.createElement(t.p,null,"내가 사용했던 ",l.createElement(t.code,null,"time.Time")," 은  UTC 시간 문자열 로 들어감\n코드를 수정시  KST 기준의 Time으로 변경해서 수정해야 한다"),"\n",l.createElement(t.h1,null,"알아보기"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"utc?"),"\n",l.createElement(t.li,null,"kst?"),"\n"),"\n",l.createElement(t.h1,null,"참고"),"\n",l.createElement(t.p,null,l.createElement(t.a,{href:"https://jeonghwan-kim.github.io/dev/2019/01/14/go-time.html"},"Go time 패키지")))}var a=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?l.createElement(t,e,l.createElement(m,e)):m(e)},c=n(7292);function i(e){return l.createElement(c.A,e,l.createElement(a,e))}c.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-golang-2022-08-29-go-mysql-datetime-9-hours-difference-mdx-911b91ec7fc9f36cf117.js.map