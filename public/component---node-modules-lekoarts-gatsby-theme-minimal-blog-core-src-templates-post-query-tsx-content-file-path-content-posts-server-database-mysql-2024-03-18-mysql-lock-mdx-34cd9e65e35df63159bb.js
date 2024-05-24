"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[5939],{8297:function(e,n,l){l.r(n),l.d(n,{Head:function(){return u.F},default:function(){return m}});var t=l(7294),a=l(1151);function c(e){const n=Object.assign({h1:"h1",p:"p",ol:"ol",li:"li",ul:"ul",blockquote:"blockquote",a:"a"},(0,a.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.h1,null,"배경"),"\n",t.createElement(n.p,null,"개발 환경에서 update 를 시도하다가 id 를 지정하는 코드가 빠져있어서 특정 table 데이터를 update 되었다\n50만건이 넘는 데이터라서 db lock 이 발생했다.\nlock 이 발생했을때 kill 등 방법을 알았다면\n전체 데이터가 업데이트 되지 않았을텐데...\n반성하며 상황을 정리하고 해결 법도 알아보려고 한다"),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"update all 코드 실행"),"\n",t.createElement(n.li,null,"다른 api 조회 -> 응답값 503"),"\n",t.createElement(n.li,null,"log 에 lock 됨 확인"),"\n",t.createElement(n.li,null,"다른 api 돌아옴 -> 전체적으로 느려진거 같으면서.. 어떤 영향이 있는지 모르겠다."),"\n"),"\n",t.createElement(n.h1,null,"Lock 은 뭐지?"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"락은 데이터베이스에서 동시성을 제어하기 위해 사용되는 메커니즘"),"\n"),"\n",t.createElement(n.h1,null,"Lock 을 어떻게 처리?"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"락을 발생시킨 쿼리를 취소시킨다\nLOCK을 발생시키는 쿼리를 종료하면 해당 트랜잭션은 롤백되어 이전 상태로 되돌아간다"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"만약 락이 너무 오랫동안 지속되거나 해결하기 어려운 경우에는 MySQL 서버를 재시작하여 모든 락을 해제"),"\n"),"\n"),"\n",t.createElement(n.h1,null,"lock 된 프로세스 취소 시키지?"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"mysql 프로세스 리스트 보고"),"\n"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"SHOW FULL PROCESSLIST;"),"\n"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"프로세스 죽이기"),"\n"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"kil 2771444"),"\n"),"\n",t.createElement(n.p,null,"2771444 는 프로세스 id"),"\n",t.createElement(n.h1,null,"mysql 프로세스 리스트를 어떻게 봐야헤? Command 뭐야?"),"\n",t.createElement(n.p,null,"Sleep :현재 MySQL 서버에 연결되어 있지만 아무 작업도 수행하고 있지 않는 세션"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"동시에 많은 사용자가 데이터베이스에 접근하는 경우 Command = Sleep 인 경우를 제외하고 조회"),"\n"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"SELECT * FROM information_schema.processlist WHERE command != 'Sleep';"),"\n"),"\n",t.createElement(n.h1,null,"Connection Pooling (커넥션 풀)은 뭐야?"),"\n",t.createElement(n.p,null,t.createElement(n.a,{href:"https://sarc.io/index.php/mariadb/1154-sleep-session"},"https://sarc.io/index.php/mariadb/1154-sleep-session"),"\n",t.createElement(n.a,{href:"https://blog.naver.com/fantom80/40055830246"},"https://blog.naver.com/fantom80/40055830246"),"\n",t.createElement(n.a,{href:"https://johngrib.github.io/wiki/database/processlist/"},"https://johngrib.github.io/wiki/database/processlist/")))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?t.createElement(n,e,t.createElement(c,e)):c(e)},u=l(8804);function m(e){return t.createElement(u.Z,e,t.createElement(r,e))}u.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2024-03-18-mysql-lock-mdx-34cd9e65e35df63159bb.js.map