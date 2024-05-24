"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[6751],{3525:function(e,t,l){l.r(t),l.d(t,{Head:function(){return u.F},default:function(){return E}});var n=l(7294),r=l(1151);function a(e){const t=Object.assign({h1:"h1",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",pre:"pre",code:"code",ul:"ul",li:"li"},(0,r.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h1,null,"배경"),"\n",n.createElement(t.p,null,"기존에 예약발송 기능이 있었는데 즉시발송 개발 요청이 왔다\r\n예약발송시 일까지만 기록하면 되는데 즉시 발송은 시간도 필요하다고 생각했고\r\ndateTime 으로 타입을 정했다"),"\n",n.createElement(t.h1,null,"A 테이블"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"id"),n.createElement(t.th,null,"scheduled_date"),n.createElement(t.th,null,"sent"),n.createElement(t.th,null,"sent_date"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"20230629"),n.createElement(t.td,null,"1"),n.createElement(t.td)),n.createElement(t.tr,null,n.createElement(t.td,null,"2"),n.createElement(t.td,null,"20230712"),n.createElement(t.td,null,"1"),n.createElement(t.td)),n.createElement(t.tr,null,n.createElement(t.td,null,"3"),n.createElement(t.td,null,"20230715"),n.createElement(t.td,null,"0"),n.createElement(t.td)),n.createElement(t.tr,null,n.createElement(t.td,null,"4"),n.createElement(t.td,null,"20230721"),n.createElement(t.td,null,"1"),n.createElement(t.td)))),"\n",n.createElement(t.h3,null,"서브쿼리 결과"),"\n",n.createElement(t.p,null,"과거에 발송한 데이터의 경우 6시에 발송되었음으로 18:00:00 를 DATE_FORMAT 으로 형태를 만들었다"),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,"SELECT * FROM A\r\njoin (\r\n    SELECT id, DATE_FORMAT(scheduled_date, '%y-%m-%d 18:00:00') AS sent_date\r\n    FROM A\r\n    WHERE sent = 1\r\n) AS subquery\r\nON A.id = subquery.id;\n")),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"id"),n.createElement(t.th,null,"scheduled_date"),n.createElement(t.th,null,"sent"),n.createElement(t.th,null,"sent_date"),n.createElement(t.th,null,"id"),n.createElement(t.th,null,"sent_date"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"20230629"),n.createElement(t.td,null,"1"),n.createElement(t.td),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"2023-06-29 18:00:00")),n.createElement(t.tr,null,n.createElement(t.td,null,"2"),n.createElement(t.td,null,"20230712"),n.createElement(t.td,null,"1"),n.createElement(t.td),n.createElement(t.td,null,"2"),n.createElement(t.td,null,"2023-06-29 18:00:00")),n.createElement(t.tr,null,n.createElement(t.td,null,"4"),n.createElement(t.td,null,"20230721"),n.createElement(t.td,null,"1"),n.createElement(t.td),n.createElement(t.td,null,"4"),n.createElement(t.td,null,"2023-07-21 18:00:00")))),"\n",n.createElement(t.p,null,"A 테이블에서 특정 데이터를 조회한 서브쿼리 결과를\r\nA 테이블에 업데이트 하고 싶었다"),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,"UPDATE A\r\nJOIN (\r\n    SELECT id, DATE_FORMAT(scheduled_date, '%y-%m-%d 18:00:00') AS sent_date\r\n    FROM A\r\n    WHERE sent = 1\r\n) AS subquery\r\nON A.id = subquery.id\r\nSET A.sent_date = subquery.sent_date;\n")),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"id 컬럼을 기준으로 조인하여 sent_date 컬럼을 업데이트"),"\n"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"id"),n.createElement(t.th,null,"scheduled_date"),n.createElement(t.th,null,"sent"),n.createElement(t.th,null,"sent_date"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"20230629"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"2023-06-29 18:00:00")),n.createElement(t.tr,null,n.createElement(t.td,null,"2"),n.createElement(t.td,null,"20230712"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"2023-07-12 18:00:00")),n.createElement(t.tr,null,n.createElement(t.td,null,"3"),n.createElement(t.td,null,"20230715"),n.createElement(t.td,null,"0"),n.createElement(t.td)),n.createElement(t.tr,null,n.createElement(t.td,null,"4"),n.createElement(t.td,null,"20230721"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"2023-07-21 18:00:00")))),"\n",n.createElement(t.p,null,"컬럼 추가 후 업데이트 전에\r\n",n.createElement(t.code,null,"select count(*) from A where sent =1 and sent_date is null;")," 값을 확인\r\n",n.createElement(t.code,null,"select count(*) from A where sent =1 and sent_date is not null;")," 로 바뀐 결과 확인"),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"MySQL에서 데이터가 NULL인 경우, = 연산자로는 NULL 값을 조회할 수 없음"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?n.createElement(t,e,n.createElement(a,e)):a(e)},u=l(8804);function E(e){return n.createElement(u.Z,e,n.createElement(c,e))}u.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2023-09-12-mysql-update-join-mdx-03ce77f4d182934f7c21.js.map