"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[5417],{1679:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return s}});var a=t(7294),r=t(1151);function l(e){const n=Object.assign({h3:"h3",p:"p",a:"a",pre:"pre",code:"code",h2:"h2",h1:"h1",ul:"ul",li:"li",blockquote:"blockquote"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h3,null,"배경"),"\n",a.createElement(n.p,null,"react로 코드를 쓸 때\napi에서 호출받은 결과를 가공하는 일이 많다고 느꼈다\n간단한 예시와 MDN에서 찾은 내용을 정리하려고 한다."),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://www.delftstack.com/ko/howto/javascript/array-to-objects-javascript/"},"Convert Array to Object")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const array = [ '1','2']\narray.reduce(function(target, key, index) {\n  target[index] = key;\n  return target;\n}, {}) // { 0: \"1\", 1 : \"2\" }\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},'const arr = ["q"];\nconst obj = {...arr};\nconsole.log(obj); //{0:"q"}\n')),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://developer-doreen.tistory.com/74"},"Convert Object to Array")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const obj = {\"a\" : 1, \"b\" : 2};\nconst arr = Object.keys(obj).map(function (key) {\n\treturn [String(key), obj[key]];\n});\nconsole.log(arr); // [ [ 'a', 1 ], [ 'b', 2 ] ]\n")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const obj = {\"a\" : 1, \"b\" : 2};\nconst arr = Object.entries(obj);\nconsole.log(arr); // [ [ 'a', 1 ], [ 'b', 2 ] ]\n")),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object"},"How can I add a key/value pair to a JavaScript object")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},'var obj = {\n    key1: value1,\n    key2: value2\n};\nobj.key3 = "value3";\nobj["key4"] = "value4";\n\nvar getProperty = function (propertyName) {\n    return obj[propertyName];\n};\ngetProperty("key5");\n')),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"},"how to know value in array")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const array1 = [1, 2, 3];\n\nconsole.log(array1.includes(2));\n// expected output: true\n\n")),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://appdividend.com/2022/06/04/how-to-get-distinct-values-from-array-in-javascript"},"how to make array unique")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const unique = (value, index, self) => {\n  return self.indexOf(value) === index\n}\n\nconst ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]\nconst uniqueAges = ages.filter(unique)\n\nconsole.log(uniqueAges)\n")),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://www.samanthaming.com/tidbits/87-5-ways-to-append-item-to-array/"},"how to push item to Array in javascript")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const array = [1];\narray.push(2);\n\n")),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/values"},"how to get value in Array")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const array1 = ['a', 'b', 'c'];\nconst iterator = array1.values();\n\nfor (const value of iterator) {\n  console.log(value);\n}\n\n// expected output: \"a\"\n// expected output: \"b\"\n// expected output: \"c\"\n\n")),"\n",a.createElement(n.h2,null,a.createElement(n.a,{href:"https://www.codegrepper.com/tpc/find+an+item+in+an+object+javascript"},"find an item in an object javascript")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},'const object1 = {\n  a: {val: "aa"},\n  b: {val: "bb"},\n  c: {val: "cc"}\n};\n\nlet a = Object.values(object1).find((obj) => {\n\treturn obj.val == "bb"\n});\nconsole.log(a)//Object { val: "bb" }\n')),"\n",a.createElement(n.h2,null,a.createElement(n.a,{href:"https://stackoverflow.com/questions/9907419/how-to-get-a-key-in-a-javascript-object-by-its-value"},"How to get a key in a JavaScript object by its value")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},'function getKeyByValue(object, value) {\n  return Object.keys(object).find(key => object[key] === value);\n}\nconst map = {"first" : "1", "second" : "2"};\nconsole.log(getKeyByValue(map,"2"));\n\n')),"\n",a.createElement(n.h3,null,"map filter"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const unique = (value, index, self) => {\n  return self.indexOf(value) === index\n}\n\nconst ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]\nconst uniqueAges = ages.filter(unique)\n\nconsole.log(uniqueAges)\n")),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://stackoverflow.com/questions/47841899/js-map-return-object"},"Use .map without return in simple way")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const members = [\n    { num: 1, name:'te' },\n    { num: 2, name:'te2' }\n];\n\nconst list = members.map(elem => (\n  {\n    num: elem.num + 1 ,\n    name: elem.name\n  }\n));\n\nconsole.log(list);\n/*[\n    { num: 2, name:'te' },\n    { num: 3, name:'te2' }\n]*/\n\n")),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://www.codegrepper.com/tpc/javascript+sort+array+of+objects+by+property"},"javascript sort array of objects by property")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const list = [\n  { color: 'white', size: 'XXL' },\n  { color: 'red', size: 'XL' },\n  { color: 'black', size: 'M' }\n]\n\nvar sortedArray = list.sort((a, b) => (a.color > b.color) ? 1 : -1)\n\n// Result:\n//sortedArray:\n//{ color: 'black', size: 'M' }\n//{ color: 'red', size: 'XL' }\n//{ color: 'white', size: 'XXL' }\n\nvar array = [\n  {name: \"John\", age: 34},\n  {name: \"Peter\", age: 54},\n  {name: \"Jake\", age: 25}\n];\n\narray.sort(function(a, b) {\n  return a.age - b.age;\n}); // Sort youngest first\n\n")),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},"sort")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const array1 = [1, 30, 4, 21, 100000];\narray1.sort();\n")),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://stackoverflow.com/questions/58087858/sort-an-array-with-react-hooks"},"sort-1")),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"const sorted = [...dogList].sort((a, b) => {\n  return b.age - a.age;\n});\n")),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://stackoverflow.com/questions/23247859/better-way-to-sum-a-property-value-in-an-array"},"Better way to sum a property value in an array")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"var traveler = [{description: 'Senior', Amount: 50},\n                {description: 'Senior', Amount: 50},\n                {description: 'Adult', Amount: 75},\n                {description: 'Child', Amount: 35},\n                {description: 'Infant', Amount: 25}];\n\nfunction amount(item){\n  return item.Amount;\n}\n\nfunction sum(prev, next){\n  return prev + next;\n}\n\ntraveler.map(amount).reduce(sum);\n// => 235;\n\n// or use arrow functions\ntraveler.map(item => item.Amount).reduce((prev, next) => prev + next);\n")),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce"},"reduce")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const array1 = [1, 2, 3, 4];\n\n// 0 + 1 + 2 + 3 + 4\nconst initialValue = 0;\nconst sumWithInitial = array1.reduce(\n  (accumulator, currentValue) => accumulator + currentValue,\n  initialValue\n);\n\nconsole.log(sumWithInitial);\n// expected output: 10\n")),"\n",a.createElement(n.h1,null,"JSON 형태"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"JSON은 JavaScript Object Notation의 약자로, 브라우저와 서버사이에서 오고가는 데이터의 형식"),"\n",a.createElement(n.li,null,"JavaScript 값이나 객체를 JSON 문자열로 변환"),"\n",a.createElement(n.li,null,'문자열을 감쌀 때 쌍따옴표("")를 사용'),"\n"),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"},"JSON.parse")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},'const json = `{"result":true, "count":42 , "text":"문자입력"}`;\nconst obj = JSON.parse(json);\nconsole.log(obj.text);\n')),"\n",a.createElement(n.p,null,'JSON 문자열의 구문을 분석하고 Json 객체 생성\n주의 key 값은 "" 추가, value 가 string 이라면 "" 추가\n변환하려는 string 의 형태가 틀리면  ',a.createElement(n.code,null,"is not valid JSON")," 이라는 에러 발생"),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"},"JSON.stringify")),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},'console.log(JSON.stringify({ num: 5,text : "s",\n                            bool:new Boolean(\'false\') ,\n                            boolStr :new String(\'false\') ,\n                           \tdate : new Date(2006, 0, 2, 15, 4, 5)\n                           }));\n\n//\'{"num":5,"text":"s","bool":true,"boolStr":"false","date":"2006-01-02T06:04:05.000Z"}\'\n')),"\n",a.createElement(n.h3,null,a.createElement(n.a,{href:"https://bobbyhadz.com/blog/javascript-check-if-multiple-values-exist-in-array"},"Check if Multiple Values exist in an Array in JavaScript")),"\n",a.createElement(n.p,null,"배경\n역할에 code 값을 추가하고\na,b 2개의 code 값이 모두 존재하는 경우 true 를 반환하는 코드가 필요했다."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const multipleInArray = (arr, values) => {\n  return values.every(value => {\n    return arr.includes(value);\n  })\n}\n//[1, 2, 3] 에 [1,3] 의 값이 모두 있니?\n// console.log(multipleInArray([1, 2, 3], [1, 3])); true\n")),"\n",a.createElement(n.h1,null,"serialize"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"객체 직혈화는 객체를 문자열로 변화하는 작업"),"\n"),"\n",a.createElement(n.h1,null,"JSON"),"\n",a.createElement(n.blockquote,null,"\n",a.createElement(n.p,null,"데이터 교환 형식인 자바스크립트 객체 표기법"),"\n"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"JSON.stringify()"),"\n"),"\n",a.createElement(n.li,null,"\n",a.createElement(n.p,null,"JSON.parse()"),"\n"),"\n"),"\n",a.createElement(n.h1,null,"참고"),"\n",a.createElement(n.p,null,a.createElement(n.a,{href:"https://steemit.com/kr-dev/@cheonmr/json-stringify"},"https://steemit.com/kr-dev/@cheonmr/json-stringify")),"\n",a.createElement(n.h3,null,"compare two array (JSON.stringify)"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-javascript"},"const a = [a, b, c];\nconst b = [a, b, d];\nconst equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);\nequals(a, b); // false\n")),"\n",a.createElement(n.p,null,a.createElement(n.a,{href:"https://sisiblog.tistory.com/258"},"https://sisiblog.tistory.com/258")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?a.createElement(n,e,a.createElement(l,e)):l(e)},o=t(8804);function s(e){return a.createElement(o.Z,e,a.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-javascript-2021-08-05-javascript-data-processing-mdx-d780808e508bb2222241.js.map