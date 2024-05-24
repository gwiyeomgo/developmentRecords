"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9580],{1997:function(e,n,r){r.r(n),r.d(n,{Head:function(){return c.F},default:function(){return u}});var l=r(7294),t=r(1151);function a(e){const n=Object.assign({ol:"ol",li:"li",pre:"pre",code:"code",p:"p",a:"a",h3:"h3",h2:"h2",ul:"ul"},(0,t.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"입력창에 회원번호,기부번호를 입력한다"),"\n",l.createElement(n.li,null,"직접 키보드로 입력하면서 문자가 포함된다"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},'if (searchText.length > 0) {\r\n  switch (searchType) {\r\n    case "memberId":\r\n      if(isNumeric(searchText) === false){\r\n        return message.error("회원번호가 올바르지 않습니다.");\r\n      }\r\n      break;\r\n    case "id":\r\n      if(isNumeric(searchText) === false){\r\n        return message.error("기부번호가 올바르지 않습니다.");\r\n      }\r\n      break;\r\n  }\r\n}\n')),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},'const NumberValidator = (str) => {\r\n    if (typeof str !== "string") return false\r\n    return !isNaN(str) && !isNaN(parseFloat(str)) //true && true\r\n  }\n')),"\n",l.createElement(n.p,null,"위 예제처럼 사용하면 str 에 숫자만 있는지 확인이 가능하다"),"\n",l.createElement(n.p,null,"isNaN 함수는 숫자를 넣으면 false 를 반환한다.\r\nisNaN 함수는 string 과 숫자가 함께있는 문자를 입력하면 true 값을 반환한다"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"isNaN(123)         // false\r\nisNaN('123')       // false\r\nisNaN('test')      // true\r\nisNaN('123test')   // true\r\n\n")),"\n",l.createElement(n.p,null,"사실 위 예제에서 !isNaN(str) 만 사용해도 확인이 가능하지만\r\n!isNaN(parseFloat(str))을 쓴 이유는?"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"isNaN('')          // false\r\nisNaN(' ')         // false\r\nisNaN(false)       // false\n")),"\n",l.createElement(n.p,null,"이 경우도 false 를 반환하기 때문에 ...\r\n한번 더 확인이 필요하다\r\nex) 스페이스를 클릭하고 검색하면 검색이 된다... 공백을 막기 위해"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-javascript"},"console.log(!isNaN(parseFloat(' '))) //false\r\nconsole.log(!isNaN(' '))             //ture\n")),"\n",l.createElement(n.p,null,"출처\r\n",l.createElement(n.a,{href:"https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number"},"How can I check if a string is a valid number?")),"\n",l.createElement(n.h3,null,l.createElement(n.code,null,"빈문자,null,undefined,0,false")),"\n",l.createElement(n.p,null,"일때 제대로 어떤값이 알지 못하면 에러를 발생시킬 수 있다.\r\n자세하게 알아보자"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'const test = null //빈문자(""),null,undefined,0,false\r\nif(!test){\r\n  console.log("출력")//"여기 들어옴\r\n}\n')),"\n",l.createElement(n.h2,null,"배열안에 empty 값 ?"),"\n",l.createElement(n.p,null,"배열 생성을 10으로 크기 지정해서 생성후\r\nindex 1 부터 데이터를 채우고 console 로 배열을 찍으면\r\nindex 0 에 empty 가 있다"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"배열에 undefined 값이 있는 경우 vs empty 값 있는 경우\r\nundefined 는 값으로 인지하면 map 으로 순회\r\nempty 는  map 사용시  처리도 안함"),"\n"))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},c=r(8804);function u(e){return l.createElement(c.Z,e,l.createElement(s,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-javascript-2022-04-19-javascript-number-validator-mdx-af5be28dfe51c574a69e.js.map