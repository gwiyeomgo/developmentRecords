"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[3554],{258:function(e,l,t){t.r(l),t.d(l,{Head:function(){return E.F},default:function(){return u}});var n=t(7294),a=t(1151);function c(e){const l=Object.assign({h3:"h3",p:"p",a:"a",pre:"pre",code:"code",blockquote:"blockquote",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li"},(0,a.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(l.h3,null,"배경"),"\n",n.createElement(l.p,null,"최근 특정 기간 데이터를 조회API를 만들면서 ",n.createElement(l.a,{href:"https://gwiyeomgo.github.io/2021-06-19/sql-dateData"},"날짜 데이터 조회 경험"),"로 어려움을 느꼈습니다."),"\n",n.createElement(l.p,null,"이번에는 특정 날짜 데이터를 조회하는 sql을 작성하려고 합니다."),"\n",n.createElement(l.pre,null,n.createElement(l.code,null,"SELECT * FROM table WHERE date(created_at) BETWEEN '2021-06-01' AND '2021-06-22'\n")),"\n",n.createElement(l.pre,null,n.createElement(l.code,null,"SELECT * FROM table WHERE created_at BETWEEN '2021-06-01' AND '2021-06-22'\n")),"\n",n.createElement(l.p,null,"두 SQL중 ",n.createElement(l.code,null,"2021/6/1 부터 2021/6/22 까지"),"(특정 날짜)로 데이터를 조회하는 SQL은 어떤 것일까요?\n지금부터는 실제로 mysql 환경에서 table을 작성하고 결과를 확인하려고 합니다."),"\n",n.createElement(l.h3,null,"실제로 해보기"),"\n",n.createElement(l.blockquote,null,"\n",n.createElement(l.p,null,"created_at 컬럼에 데이터는 날짜와 시간을 모두 포함합니다."),"\n"),"\n",n.createElement(l.pre,null,n.createElement(l.code,null,"SELECT id, created_at FROM table;\n")),"\n",n.createElement(l.table,null,n.createElement(l.thead,null,n.createElement(l.tr,null,n.createElement(l.th,null,"id"),n.createElement(l.th,null,"created_at"))),n.createElement(l.tbody,null,n.createElement(l.tr,null,n.createElement(l.td,null,"1"),n.createElement(l.td,null,"2012-06-01 00:00:00")),n.createElement(l.tr,null,n.createElement(l.td,null,"2"),n.createElement(l.td,null,"2012-06-01 23:59:59")),n.createElement(l.tr,null,n.createElement(l.td,null,"3"),n.createElement(l.td,null,"2012-06-22 23:59:59")))),"\n",n.createElement(l.pre,null,n.createElement(l.code,null,"SELECT id, created_at FROM table where created_at BETWEEN '2021-06-01' AND '2021-06-22';\n")),"\n",n.createElement(l.table,null,n.createElement(l.thead,null,n.createElement(l.tr,null,n.createElement(l.th,null,"id"),n.createElement(l.th,null,"created_at"))),n.createElement(l.tbody,null,n.createElement(l.tr,null,n.createElement(l.td,null,"1"),n.createElement(l.td,null,"2012-06-01 00:00:00")),n.createElement(l.tr,null,n.createElement(l.td,null,"2"),n.createElement(l.td,null,"2012-06-01 23:59:59")))),"\n",n.createElement(l.ul,null,"\n",n.createElement(l.li,null,n.createElement(l.code,null,"created_at"),"은 ",n.createElement(l.code,null,"날짜"),"와 ",n.createElement(l.code,null,"시간")," 모두 포함"),"\n",n.createElement(l.li,null,n.createElement(l.code,null,"'2021-06-01'"),"형태는 ",n.createElement(l.code,null,"날짜"),"만 나타내기 때문에 ",n.createElement(l.code,null,"시간"),"데이터는 ",n.createElement(l.code,null,"'00:00:00'"),"이다"),"\n",n.createElement(l.li,null,n.createElement(l.code,null,"'2021-06-01 00:00:00' 부터'2021-06-22 00:00:00'의 범위 조회")," (6/1일 하루의 데이터만 조회)"),"\n"),"\n",n.createElement(l.pre,null,n.createElement(l.code,null,"SELECT id, created_at FROM table where date(created_at) BETWEEN '2021-06-01' AND '2021-06-22'\n")),"\n",n.createElement(l.table,null,n.createElement(l.thead,null,n.createElement(l.tr,null,n.createElement(l.th,null,"id"),n.createElement(l.th,null,"created_at"))),n.createElement(l.tbody,null,n.createElement(l.tr,null,n.createElement(l.td,null,"1"),n.createElement(l.td,null,"2012-06-01 00:00:00")),n.createElement(l.tr,null,n.createElement(l.td,null,"2"),n.createElement(l.td,null,"2012-06-22 23:59:59")))),"\n",n.createElement(l.ul,null,"\n",n.createElement(l.li,null,n.createElement(l.code,null,"date(created_at)"),"은 ",n.createElement(l.code,null,"날짜"),"만 포함"),"\n",n.createElement(l.li,null,n.createElement(l.code,null,"date()"),"함수를 통해 created_at 의 ",n.createElement(l.code,null,"날짜"),"를 비교했을때 ",n.createElement(l.code,null,"2012-06-01"),"부터'2012-06-02`를 포함하는 모든 데이터 값 조회"),"\n",n.createElement(l.li,null,n.createElement(l.code,null,"'2021-06-01 00:00:00' 부터'2021-06-30 23:59:59'의 범위 조회")," (6/1~6/2일까지 데이터 조회)"),"\n"),"\n",n.createElement(l.h3,null,"결론"),"\n",n.createElement(l.ul,null,"\n",n.createElement(l.li,null,"where절에서 ",n.createElement(l.code,null,"Mysql BETWEEN a AND b")," 를 사용해 a와 b를 포함하는 모든 데이터를 조회한다."),"\n",n.createElement(l.li,null,"기간을 조회시 조건이 ",n.createElement(l.code,null,"날짜")," 형식인지 ",n.createElement(l.code,null,"날짜+시간")," 인지 주의한다."),"\n",n.createElement(l.li,null,"조회할 데이터가 ",n.createElement(l.code,null,"날짜")," 형식일때 조회할 ",n.createElement(l.code,null,"날짜+시간"),"데이터를 date()를 통해",n.createElement(l.code,null,"날짜"),"형식으로 바꿔 조회할 수 있다."),"\n"))}var r=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,a.ah)(),e.components);return l?n.createElement(l,e,n.createElement(c,e)):c(e)},E=t(8804);function u(e){return n.createElement(E.Z,e,n.createElement(r,e))}E.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2021-06-21-mysql-search-data-in-period-mdx-0f98bffe3e5e8d5778f5.js.map