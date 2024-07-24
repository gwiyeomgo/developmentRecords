"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[5324],{1340:function(e,t,l){l.r(t),l.d(t,{Head:function(){return u.p},default:function(){return m}});var n=l(6540),r=l(8453);function a(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",a:"a"},(0,r.RP)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h1,null,"HTTP 상태 코드 정리"),"\n",n.createElement(t.h2,null,"배경"),"\n",n.createElement(t.p,null,"HTTP 상태 코드는 웹 서버와 클라이언트 간의 통신 상태를 나타내는 표준 응답 코드\n이 코드는 클라이언트가 요청한 작업의 결과를 나타내며, 특정 오류 상황을 명확히 전달합니다."),"\n",n.createElement(t.h2,null,"상태 코드별 정리"),"\n",n.createElement(t.h3,null,"클라이언트 오류 (4xx)"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"번호"),n.createElement(t.th,null,"상태"),n.createElement(t.th,null,"상황"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"400"),n.createElement(t.td,null,"Bad Request"),n.createElement(t.td,null,"물품 나눔 서비스에서 담당자가 잘못된 고유 번호로 결과 보고서 조회를 요청하면 서버는 유효성 검사를 통해 잘못된 요청 에러를 반환합니다. 즉, 잘못된 값이 전달되면 400 상태를 반환합니다.")),n.createElement(t.tr,null,n.createElement(t.td,null,"401"),n.createElement(t.td,null,"Unauthorized"),n.createElement(t.td,null,"사용자가 로그인에 실패할 경우 401 상태를 반환합니다. 예를 들어, 로그인 기능이 있는 화면에서 API 응답값이 401이면 자동 로그아웃이 트리거됩니다.")),n.createElement(t.tr,null,n.createElement(t.td,null,"403"),n.createElement(t.td,null,"Forbidden"),n.createElement(t.td,null,"사용자가 권한 없는 메뉴에 접근할 때 403 상태를 반환합니다. 예를 들어, 사용자는 현관문 번호키를 알아도 방마다 허락(인가)이 필요합니다. 권한이 없는 방에 접근하려 할 때 403 상태를 반환합니다.")),n.createElement(t.tr,null,n.createElement(t.td,null,"404"),n.createElement(t.td,null,"Not Found"),n.createElement(t.td,null,"물품 기부 서비스에서 기부 영수증 신청 화면에 기본 공제 영수증 정보가 없다면 404 상태를 반환해야 합니다. 또한, 자신이 기부하지 않은 기부건 정보를 조회하려 할 때도 404 상태를 반환합니다.")),n.createElement(t.tr,null,n.createElement(t.td,null,"409"),n.createElement(t.td,null,"Conflict"),n.createElement(t.td,null,"리소스의 현재 상태와 충돌이 발생할 때 사용됩니다. 예를 들어, 두 사용자가 동시에 동일한 데이터를 수정하려 할 때 발생합니다.")),n.createElement(t.tr,null,n.createElement(t.td,null,"410"),n.createElement(t.td,null,"Gone"),n.createElement(t.td,null,"요청한 리소스가 더 이상 서버에 존재하지 않음을 나타냅니다. 예를 들어, 예전에 존재했던 페이지가 삭제되었을 때 사용됩니다.")))),"\n",n.createElement(t.h3,null,"성공 (2xx)"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"번호"),n.createElement(t.th,null,"상태"),n.createElement(t.th,null,"상황"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"200"),n.createElement(t.td,null,"OK"),n.createElement(t.td,null,"요청이 성공적으로 처리되었습니다.")),n.createElement(t.tr,null,n.createElement(t.td,null,"201"),n.createElement(t.td,null,"Created"),n.createElement(t.td,null,"요청이 성공적으로 처리되었으며, 새로운 리소스가 생성되었습니다.")),n.createElement(t.tr,null,n.createElement(t.td,null,"202"),n.createElement(t.td,null,"Accepted"),n.createElement(t.td,null,"요청이 접수되었으나 아직 처리되지 않았습니다.")),n.createElement(t.tr,null,n.createElement(t.td,null,"203"),n.createElement(t.td,null,"Non-Authoritative Information"),n.createElement(t.td,null,"요청은 성공했으나, 원본 서버가 아닌 다른 소스에서 정보를 가져왔습니다.")),n.createElement(t.tr,null,n.createElement(t.td,null,"204"),n.createElement(t.td,null,"No Content"),n.createElement(t.td,null,"요청이 성공했으나, 반환할 콘텐츠가 없습니다.")))),"\n",n.createElement(t.h3,null,"에러 (5xx)"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"번호"),n.createElement(t.th,null,"상태"),n.createElement(t.th,null,"상황"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"503"),n.createElement(t.td,null,"Service Unavailable"),n.createElement(t.td,null,"서버가 일시적으로 요청을 처리할 수 없습니다. 예를 들어, DB가 잠긴 상태에서 API 요청이 있을 경우 503 상태를 반환합니다.")),n.createElement(t.tr,null,n.createElement(t.td,null,"504"),n.createElement(t.td,null,"Gateway Timeout"),n.createElement(t.td,null,"서버가 게이트웨이 또는 프록시로부터 적절한 응답을 받지 못해 요청 시간이 초과되었습니다.")))),"\n",n.createElement(t.h2,null,"에러 알림 시스템 도입 시 고려사항"),"\n",n.createElement(t.p,null,"404 오류가 발생했을 때 데이터가 없는 상황을 오류로 간주해야 할지 고민 했었다.\n경우에 따라 200번대 메시지를 보내는 것이 더 적절할 수 있습니다.\n예를 들어, 요청은 성공했으나 제공할 내용이 없을 경우 204(No Content) 상태를 반환하는 것을 고려할 수 있습니다."),"\n",n.createElement(t.h2,null,"출처"),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"\n",n.createElement(t.p,null,n.createElement(t.a,{href:"https://kanzler.tistory.com/44"},"HTTP 상태 코드 가이드")),"\n"),"\n",n.createElement(t.li,null,"\n",n.createElement(t.p,null,n.createElement(t.a,{href:"https://developer.mozilla.org/ko/docs/Web/HTTP/Status"},"MDN HTTP 상태 코드")),"\n"),"\n",n.createElement(t.li,null,"\n",n.createElement(t.p,null,n.createElement(t.a,{href:"https://dkswnkk.tistory.com/722"},"504")),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?n.createElement(t,e,n.createElement(a,e)):a(e)},u=l(7292);function m(e){return n.createElement(u.A,e,n.createElement(c,e))}u.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-network-protocol-2022-03-10-protocol-http-response-code-mdx-a29530183bc359ae372c.js.map