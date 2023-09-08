"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9580],{3844:function(e,n,t){t.r(n),t.d(n,{Head:function(){return c.F},default:function(){return i}});var a=t(7294),l=t(1151);function r(e){const n=Object.assign({ol:"ol",li:"li",pre:"pre",code:"code",p:"p",a:"a",h3:"h3"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"입력창에 회원번호,기부번호를 입력한다"),"\n",a.createElement(n.li,null,"직접 키보드로 입력하면서 문자가 포함된다"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},'if (searchText.length > 0) {\n  switch (searchType) {\n    case "memberId":\n      if(isNumeric(searchText) === false){\n        return message.error("회원번호가 올바르지 않습니다.");\n      }\n      break;\n    case "id":\n      if(isNumeric(searchText) === false){\n        return message.error("기부번호가 올바르지 않습니다.");\n      }\n      break;\n  }\n}\n')),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},'const NumberValidator = (str) => {\n    if (typeof str !== "string") return false\n    return !isNaN(str) && !isNaN(parseFloat(str)) //true && true\n  }\n')),"\n",a.createElement(n.p,null,"위 예제처럼 사용하면 str 에 숫자만 있는지 확인이 가능하다"),"\n",a.createElement(n.p,null,"isNaN 함수는 숫자를 넣으면 false 를 반환한다.\nisNaN 함수는 string 과 숫자가 함께있는 문자를 입력하면 true 값을 반환한다"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"isNaN(123)         // false\nisNaN('123')       // false\nisNaN('test')      // true\nisNaN('123test')   // true\n\n")),"\n",a.createElement(n.p,null,"사실 위 예제에서 !isNaN(str) 만 사용해도 확인이 가능하지만\n!isNaN(parseFloat(str))을 쓴 이유는?"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"isNaN('')          // false\nisNaN(' ')         // false\nisNaN(false)       // false\n")),"\n",a.createElement(n.p,null,"이 경우도 false 를 반환하기 때문에 ...\n한번 더 확인이 필요하다\nex) 스페이스를 클릭하고 검색하면 검색이 된다... 공백을 막기 위해"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"console.log(!isNaN(parseFloat(' '))) //false\nconsole.log(!isNaN(' '))             //ture\n")),"\n",a.createElement(n.p,null,"출처\n",a.createElement(n.a,{href:"https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number"},"How can I check if a string is a valid number?")),"\n",a.createElement(n.h3,null,a.createElement(n.code,null,"빈문자,null,undefined,0,false")),"\n",a.createElement(n.p,null,"일때 제대로 어떤값이 알지 못하면 에러를 발생시킬 수 있다.\n자세하게 알아보자"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,'const test = null //빈문자(""),null,undefined,0,false\nif(!test){\n  console.log("출력")//"여기 들어옴\n}\n')))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},c=t(8804);function i(e){return a.createElement(c.Z,e,a.createElement(s,e))}c.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-javascript-2022-04-19-javascript-number-validator-mdx-90292c07f38254b04a68.js.map