"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[8663],{635:function(e,n,t){t.r(n),t.d(n,{Head:function(){return s.F},default:function(){return u}});var r=t(7294),l=t(1151);function c(e){const n=Object.assign({h1:"h1",ol:"ol",li:"li",ul:"ul",pre:"pre",code:"code",p:"p",a:"a"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h1,null,"record 사용 예시"),"\n",r.createElement(n.ol,null,"\n",r.createElement(n.li,null,"템플릿"),"\n",r.createElement(n.li,null,"객체 타입 지정"),"\n"),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"'name', 'age', 'email'이라는 세 개의 키를 가진 객체"),"\n",r.createElement(n.li,null,"'name', 'age', 'email' 각 키의 값은 문자열 또는 숫자"),"\n",r.createElement(n.li,null,"만약 name과 email 은 string,age 만 number 로 엄격하게 지정 하고 싶다면 type 또는 interface 사용"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"type User = Record<'name' | 'age' | 'email', string | number>;\n\nconst user: User = {\n  name: 'test',\n  age: 21,\n  email: 't@test.com',\n};\n")),"\n",r.createElement(n.ul,null,"\n",r.createElement(n.li,null,"문자열 키와 User 타입의 값으로 이루어진 객체"),"\n"),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,"type User = {\n  name :string,\n  age : number,\n  email: string\n}\n//type userMap = Record<'userA' | 'userB' , User>;\nconst users: Record<string, User> = {\n  'userA': { name: 'userA', age: 30, email: 'userA@t.com' },\n  'userB': { name: 'userB', age: 25, email: 'userB@t.com' },\n};\n")),"\n",r.createElement(n.h1,null,"참고"),"\n",r.createElement(n.p,null,r.createElement(n.a,{href:"https://www.squash.io/how-to-use-the-record-type-in-typescript/"},"https://www.squash.io/how-to-use-the-record-type-in-typescript/"),"\n",r.createElement(n.a,{href:"https://itnext.io/use-typescript-record-types-for-better-code-ce1768c6cb53"},"https://itnext.io/use-typescript-record-types-for-better-code-ce1768c6cb53")))}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(c,e)):c(e)},s=t(8804);function u(e){return r.createElement(s.Z,e,r.createElement(a,e))}s.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-typescript-2024-03-13-typescript-record-mdx-9a24ca298becdc3340d9.js.map