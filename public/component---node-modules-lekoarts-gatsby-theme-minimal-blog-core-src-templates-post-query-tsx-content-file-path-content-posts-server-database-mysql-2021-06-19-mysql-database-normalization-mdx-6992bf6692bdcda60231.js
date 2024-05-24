"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[5149],{8304:function(e,t,l){l.r(t),l.d(t,{Head:function(){return u.F},default:function(){return m}});var n=l(7294),r=l(1151);function a(e){const t=Object.assign({h3:"h3",p:"p",strong:"strong",ul:"ul",li:"li",pre:"pre",code:"code",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h3,null,"- ",n.createElement("a",{href:"https://ko.wikipedia.org/wiki/%ED%95%A8%EC%88%98_%EC%A2%85%EC%86%8D",target:"_blank"},"함수 종속")),"\n",n.createElement(t.p,null,"어떤 릴레이션 R에서, X와 Y를 각각 R의 애트리뷰트 집합의 부분 집합일때\r\n애트리뷰트 X의 값 각각에 대해 시간에 관계없이\r\n항상 애트리뷰트 Y의 값이 오직 하나만 연관되어 있을 때\r\nY는 X에 함수 종속이라 하고, X → Y라고 표기한다.\r\n(",n.createElement(t.strong,null,"X를 결정자"),", ",n.createElement(t.strong,null,"Y를 종속자)")),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"members 테이블에 id는 members테이블에 nickname을 결정한다"),"\n",n.createElement(t.li,null,"donations 테이블에 member_id는 members테이블의 속성을 결정한다."),"\n"),"\n",n.createElement(t.h3,null,"정규화"),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"불만족스러운 릴레이션의 애트리뷰트들을 애트리뷰트들을 나누어서 더 작은 릴레이션으로 분해하는 과정"),"\n",n.createElement(t.li,null,"목적 :데이터의 중복의 최소화와 여러 가지 이상을 제거함"),"\n"),"\n",n.createElement(t.h3,null,"1) ",n.createElement("a",{href:"https://ko.wikipedia.org/wiki/%EC%A0%9C1%EC%A0%95%EA%B7%9C%ED%98%95",target:"_blank"},"1NF (제1정규형)")),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"테이블에 속한 모든 도메인이 원자값으로만 되어 있다."),"\n",n.createElement(t.li,null,"모든 속성에 반복되는 그룹이 나타나지 않는다."),"\n",n.createElement(t.li,null,"기본 키를 사용하여 관련 데이터의 각 집합을 고유하게 식별할 수 있어야 한다."),"\n"),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,'<a href="https://wkdtjsgur100.github.io/database-normalization" target="_blank">위 3개 개념 출처이며 각각 예제가 포함된 블로그 글 링크 입니다.</a>\n')),"\n",n.createElement(t.h3,null,"2) 2NF (제2정규형): 모든 컬럼이 완전 함수적 종속을 만족한다"),"\n",n.createElement(t.pre,null,n.createElement(t.code,null,'* 완전 함수적 종속 : <span style="color:#212529">Y가 집합 X 전체에 대해서 종속관계를 가지면 완전 함수적 종속이다.</span>\r\n* 부분 함수 종속: <span style="color:#212529">Y가 집합 X의 부분 집합에 종속관계를 가지면 부분 함수적 종속이다.</span>\r\n* 릴레이션 스키마 R의모든 비주요 애트리뷰트들이 기본키에 대해서 완전 함수적 종속이면,R은 제2정규형에 속한다.\n')),"\n",n.createElement(t.p,null,n.createElement(t.a,{href:"https://dodo000.tistory.com/20"},"예시 출처")),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,null,"고객ID"),n.createElement(t.th,null,"삼품코드"),n.createElement(t.th,null,"주문상품"),n.createElement(t.th,null,"수량"),n.createElement(t.th,null,"가격"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,null,"1"),n.createElement(t.td,null,"a"),n.createElement(t.td,null,"티셔츠"),n.createElement(t.td,null,"2"),n.createElement(t.td,null,"2000")),n.createElement(t.tr,null,n.createElement(t.td,null,"2"),n.createElement(t.td,null,"b"),n.createElement(t.td,null,"청바지"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"3000")),n.createElement(t.tr,null,n.createElement(t.td,null,"3"),n.createElement(t.td,null,"b"),n.createElement(t.td,null,"청바지"),n.createElement(t.td,null,"2"),n.createElement(t.td,null,"6000")),n.createElement(t.tr,null,n.createElement(t.td,null,"2"),n.createElement(t.td,null,"c"),n.createElement(t.td,null,"와이셔츠"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"4000")),n.createElement(t.tr,null,n.createElement(t.td,null,"3"),n.createElement(t.td,null,"d"),n.createElement(t.td,null,"원피스"),n.createElement(t.td,null,"1"),n.createElement(t.td,null,"5000")))),"\n",n.createElement(t.p,null,"(기본키는 '고객ID'와 '상품코드' )"),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"여기서 '수량' 속성은 기본키를 구성하는 '고객ID', '상품코드' 속성을 모두 알아야 식별할 수 있습니다. 따라서 '수량'은 ",n.createElement(t.strong,null,"완전 함수 종속"),"된 관계입니다."),"\n",n.createElement(t.li,null,"기본키가 '고객ID'와 '상품코드' 속성으로 구성된 위의 릴리이션에서서 '주문상품'은 기본키 중 '상품코드'만 알아도 식별할 수 있습니다. 이 경우에는 '주문상품' 속성은 기본키에 ",n.createElement(t.strong,null,"부분 함수 종속"),"된 관계입니다"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?n.createElement(t,e,n.createElement(a,e)):a(e)},u=l(8804);function m(e){return n.createElement(u.Z,e,n.createElement(c,e))}u.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2021-06-19-mysql-database-normalization-mdx-6992bf6692bdcda60231.js.map