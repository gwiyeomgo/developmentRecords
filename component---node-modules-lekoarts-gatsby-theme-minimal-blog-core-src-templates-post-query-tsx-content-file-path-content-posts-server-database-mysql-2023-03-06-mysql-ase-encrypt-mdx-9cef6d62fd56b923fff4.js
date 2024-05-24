"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[2284],{9280:function(e,t,n){n.r(t),n.d(t,{Head:function(){return l.p},default:function(){return s}});var r=n(6540),c=n(8453);function o(e){const t=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code",h1:"h1",a:"a"},(0,c.RP)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h3,null,"배경"),"\n",r.createElement(t.p,null,"어드민 어카운트 서비스에서 매니저님의 번호를 관리하도록 수정했다\n기존에 site 에서 관리하던 매니저님 정보(gmail 과 휴대번호),\n그리고 매달 바뀌는 매니저님 정보를 엑셀로 정리했다\n정리한 데이터를 마이그레이션 하려고 보니\n휴대번호를 암호화 해야 했고\nmysql 에서 암호화 하는 방법을 찾아봤다"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"SET @@session.block_encryption_mode = 'aes-256-cbc';\nSET @key = 'abcabcabcabcabc';\nSET @iv =  UNHEX('1c56d926e2be1c56d926e2be1c56d926e2be');\nSELECT TO_BASE64(AES_ENCRYPT('01000000000' , @key,@iv ) ) AS '암호화';\nselect cast(AES_DECRYPT(FROM_BASE64('WFtOYxaQX9+Tg0YrB/Zhrg=='), @key ,@iv) as char character set utf8) as '복호화';\n")),"\n",r.createElement(t.p,null,"이렇게 예제를 만들어 테스트 후\n엑셀 데이터를 db table 에 추가 하고"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"update  members\n    set\n        mobile = case\nwhen mail = 'a@b.com' then '01000000000'\nwhen mail = 'b@b.com' then '01000000000'\nEND\n")),"\n",r.createElement(t.p,null,"휴대번호 컬럼을 아래 쿼리로 업데이트 했다."),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,'UPDATE members SET mobile =TO_BASE64(AES_ENCRYPT(\n    mobile,\n    @key ,\n    @iv\n) ) WHERE mobile != ""\n')),"\n",r.createElement(t.h1,null,"참고"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://ko.calcuworld.com/%EC%88%98%ED%95%99/16%EC%A7%84%EB%B2%95-%EA%B3%84%EC%82%B0%EA%B8%B0"},"https://ko.calcuworld.com/%EC%88%98%ED%95%99/16%EC%A7%84%EB%B2%95-%EA%B3%84%EC%82%B0%EA%B8%B0"),"\n",r.createElement(t.a,{href:"https://e2e2e2.tistory.com/28"},"https://e2e2e2.tistory.com/28"),"\n",r.createElement(t.a,{href:"https://huskdoll.tistory.com/608"},"https://huskdoll.tistory.com/608"),"\n",r.createElement(t.a,{href:"https://stackoverflow.com/questions/51831239/mysql-workbench-aes-256-decryption"},"https://stackoverflow.com/questions/51831239/mysql-workbench-aes-256-decryption"),"\n",r.createElement(t.a,{href:"https://blog.naver.com/PostView.naver?blogId=kkh0977&logNo=222479974414&categoryNo=23&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=search"},"https://blog.naver.com/PostView.naver?blogId=kkh0977&logNo=222479974414&categoryNo=23&parentCategoryNo=0&viewDate=&currentPage=1&postListTopCurrentPage=1&from=search")))}var a=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,c.RP)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)},l=n(7292);function s(e){return r.createElement(l.A,e,r.createElement(a,e))}l.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2023-03-06-mysql-ase-encrypt-mdx-9cef6d62fd56b923fff4.js.map