"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1718],{4983:function(e,n,t){t.r(n),t.d(n,{Head:function(){return i.p},default:function(){return o}});var l=t(6540),a=t(8453);function r(e){const n=Object.assign({p:"p",h1:"h1",ol:"ol",li:"li",a:"a"},(0,a.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.p,null,"why does autoincrement increase on failed insert"),"\n",l.createElement(n.h1,null,"배경"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"카카오톡 알림톡 기능을 사용해서 기부자에게 알림톡을 보내고 있다."),"\n",l.createElement(n.li,null,"인포뱅크(카카오 알림톡 협력 업체) 서버에 접속되지 않아 Timeout 이 발생했음"),"\n"),"\n",l.createElement(n.h1,null,"문제"),"\n",l.createElement(n.p,null,"기존 코드는\n기부 등록 API 를 호출하면 하나에 트랜젝션이\n카카오톡 알림톡발송이 실패하면 rollback 되도록 되어있었다"),"\n",l.createElement(n.h1,null,"앞으로는.."),"\n",l.createElement(n.p,null,"알림톡 보내는 방식을 재 설계하여 의존성을 느슨하게 해서\n알림톡 업체가 장애가 나더라도 기부는 동작되도록 변경해야 한다"),"\n",l.createElement(n.h1,null,"궁금한점.."),"\n",l.createElement(n.p,null,"해당 이슈 발생시 db 에는 rollback 되어 데이터가 쌓이지 않았다.\ninsert 가 실패했는데 id 값이 증가되었다\nid 는 autoincrement 로 생성된다\n왜 증가되었지?\n또한 이렇게 데이터가 널뛰었을때 문제는 없는건가?"),"\n",l.createElement(n.h1,null,"결론"),"\n",l.createElement(n.p,null,"id는 식별을 위한 것이다\nid는 기계적으로 만들어지는 대체키이다\n식별이 목적이라면\n비동기 적으로 id 가 생성되며\n다른 id 와 다른것은 정상적이고 일을 잘 하고 있는 것이다\n(\n관계형 데이터 베이스를 쓸때\nid 를 정하는 기준\n대체키\n자연키 ex) 주민등록번호,siteCode"),"\n",l.createElement(n.p,null,"자연키: 바뀔 수 있는 것\n대체키:시스템적으로 id 부여하는 것"),"\n",l.createElement(n.p,null,"id 는 식별하는 용도로\n유효 id 도 있을 수 있다"),"\n",l.createElement(n.p,null,"식별성에는 문제가 없다)\n왜 이럴까? 의 질문을 모두 문제일거라 생각하지 말자"),"\n",l.createElement(n.h1,null,"참고"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://stackoverflow.com/questions/2787910/why-does-mysql-autoincrement-increase-on-failed-inserts"},"https://stackoverflow.com/questions/2787910/why-does-mysql-autoincrement-increase-on-failed-inserts"),"\n",l.createElement(n.a,{href:"https://suhwan.dev/2019/06/09/transaction-isolation-level-and-lock/"},"https://suhwan.dev/2019/06/09/transaction-isolation-level-and-lock/")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},i=t(7292);function o(e){return l.createElement(i.A,e,l.createElement(c,e))}i.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2022-08-29-mysql-why-does-autoincrement-increase-on-failed-insert-mdx-4c5ddf40f70b8c99699b.js.map