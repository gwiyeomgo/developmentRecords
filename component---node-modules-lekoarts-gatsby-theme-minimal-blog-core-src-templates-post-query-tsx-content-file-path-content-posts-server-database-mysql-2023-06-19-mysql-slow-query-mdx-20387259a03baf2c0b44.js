"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[2338],{1629:function(e,l,t){t.r(l),t.d(l,{Head:function(){return s.p},default:function(){return c}});var n=t(6540),r=t(8453);function a(e){const l=Object.assign({h3:"h3",p:"p",ol:"ol",li:"li",code:"code",pre:"pre",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h1:"h1",a:"a"},(0,r.RP)(),e.components);return n.createElement(n.Fragment,null,n.createElement(l.h3,null,"배경"),"\n",n.createElement(l.p,null,"1.최근에 갑자기 시스템이\nDBMS 가 query 실행 시 일정시간 보다 오래걸리는 경우 (8/1)"),"\n",n.createElement(l.h3,null,"db 설정 (* mac 에서 brew 로 mysql 을 설치했고 이후 슬로우 쿼리를 기록하도록 설정을 바꿨다)"),"\n",n.createElement(l.ol,null,"\n",n.createElement(l.li,null,"\n",n.createElement(l.p,null,"터미널에서 mysql 에 접속\n",n.createElement(l.code,null,"mysql -u root -p")),"\n"),"\n",n.createElement(l.li,null,"\n",n.createElement(l.p,null,"mysql 에 접속해서 값을 확인한다\n",n.createElement(l.code,null,"SHOW GLOBAL VARIABLES like 'slow_%';")),"\n"),"\n",n.createElement(l.li,null,"\n",n.createElement(l.p,null,"slow_query_log 값이 'OFF' 에서 'ON' 으로 바꿔주고\n4초가 넘는 쿼리를 mysql_slow.log 에 기록되도록 설정했다"),"\n"),"\n"),"\n",n.createElement(l.pre,null,n.createElement(l.code,null,"SET GLOBAL slow_query_log_file='/var/log/mysql/mysql-slow.log';\nSET GLOBAL slow_query_log=1;\nSET GLOBAL long_query_time=4; \n")),"\n",n.createElement(l.table,null,n.createElement(l.thead,null,n.createElement(l.tr,null,n.createElement(l.th),n.createElement(l.th))),n.createElement(l.tbody,null,n.createElement(l.tr,null,n.createElement(l.td,null,"slow_query_log"),n.createElement(l.td,null,"ON")),n.createElement(l.tr,null,n.createElement(l.td,null,"slow_query_log_file"),n.createElement(l.td,null,"/var/log/mysql/mysql-slow.log")))),"\n",n.createElement(l.ol,{start:"4"},"\n",n.createElement(l.li,null,"mysql 재시작한다\n",n.createElement(l.code,null,"mysql.server restart")),"\n"),"\n",n.createElement(l.p,null,"이후 다시 설정값을 확인하면 slow_query_log 값이 'ON'으로 변한 것을 알 수 있다"),"\n",n.createElement(l.h1,null,"분석 -(1)"),"\n",n.createElement(l.ol,null,"\n",n.createElement(l.li,null,"mysql 에 접속해 10초 실행 쿼리를 동작시킨다"),"\n"),"\n",n.createElement(l.pre,null,n.createElement(l.code,null,"mysql> select sleep(10);\n+-----------+\n| sleep(10) |\n+-----------+\n|         0 |\n+-----------+\n1 row in set (10.01 sec)\n")),"\n",n.createElement(l.p,null,"2.",n.createElement(l.code,null,"/var/log/mysql/mysql-slow.log")," 파일 내용에 슬로우 쿼리 내용이 기록되며\n아래 방법을 사용해 통계 파일도 생성이 가능하다"),"\n",n.createElement(l.h1,null,"분석"),"\n",n.createElement(l.p,null,"터미널에서\n",n.createElement(l.code,null,"mysqldumpslow -s c /var/log/mysql/mysql-slow.log > slow_result.log")),"\n",n.createElement(l.p,null,"~/ 위치에 slow_result.log가 생성된다"),"\n",n.createElement(l.h1,null,"분석 -(2)"),"\n",n.createElement(l.p,null,"Install the MySQL slow query analyser pt-query-digest on Mac"),"\n",n.createElement(l.p,null,"슬로우 쿼리 위해 스크립트 설치"),"\n",n.createElement(l.pre,null,n.createElement(l.code,null,"cd ~\n\ncurl -LO https://percona.com/get/pt-query-digest\nchmod +x pt-query-digest\n\n./pt-query-digest --help\n")),"\n",n.createElement(l.p,null,n.createElement(l.code,null,"./pt-query-digest --type='slowlog' /var/log/mysql/mysql-slow.log > parsed_mysql-slog.log")),"\n",n.createElement(l.p,null,n.createElement(l.a,{href:"https://www.glenscott.co.uk/install-mysql-slow-query-analyser-pt-query-digest-mac/"},"https://www.glenscott.co.uk/install-mysql-slow-query-analyser-pt-query-digest-mac/")),"\n",n.createElement(l.p,null,"local 에서 슬로우 쿼리는 잘 발생하지 않는거 같다\n일반적인 로그도 기록하도록 설정하고 파일을 분석해보자"),"\n",n.createElement(l.pre,null,n.createElement(l.code,null,"SHOW GLOBAL VARIABLES;\n\nSET GLOBAL general_log_file='/var/log/mysql/mysql-general.log';\nSET GLOBAL general_log =1;\n")),"\n",n.createElement(l.p,null,n.createElement(l.code,null,"mysqldumpslow -s c /var/log/mysql/mysql-general.log > general_result.log"),"\n",n.createElement(l.code,null,"./pt-query-digest --type='genlog' /var/log/mysql/mysql-general.log > parsed_mysql-general.log")),"\n",n.createElement(l.h1,null,"참고"),"\n",n.createElement(l.p,null,n.createElement(l.a,{href:"https://darksharavim.tistory.com/917"},"https://darksharavim.tistory.com/917"),"\n",n.createElement(l.a,{href:"https://neocan.tistory.com/406"},"https://neocan.tistory.com/406"),"\n",n.createElement(l.a,{href:"https://nirsa.tistory.com/227"},"https://nirsa.tistory.com/227"),"\n",n.createElement(l.a,{href:"https://www.howtogeek.com/devops/how-to-enable-mysqls-slow-query-log/"},"https://www.howtogeek.com/devops/how-to-enable-mysqls-slow-query-log/")))}var o=function(e){void 0===e&&(e={});const{wrapper:l}=Object.assign({},(0,r.RP)(),e.components);return l?n.createElement(l,e,n.createElement(a,e)):a(e)},s=t(7292);function c(e){return n.createElement(s.A,e,n.createElement(o,e))}s.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2023-06-19-mysql-slow-query-mdx-20387259a03baf2c0b44.js.map