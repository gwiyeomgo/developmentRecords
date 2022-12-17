"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1708],{7225:function(e,n,t){t.r(n),t.d(n,{Head:function(){return u.F},default:function(){return m}});var l=t(7294),r=t(1151);function a(e){const n=Object.assign({h3:"h3",ol:"ol",li:"li",p:"p",code:"code",ul:"ul",a:"a",pre:"pre",h1:"h1",h2:"h2",h4:"h4"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h3,null,"배경"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"신규 프로젝트를 시작하면서 join을 사용하지 않고 코드에서 join을 하기로 결정했다."),"\n",l.createElement(n.li,null,"A table 에서 정보를 조회하고"),"\n",l.createElement(n.li,null,"B table 에서 정보를 조회했을때"),"\n",l.createElement(n.li,null,"각각의 값을 service 에서 합쳐서 반환한다."),"\n"),"\n",l.createElement(n.p,null,"이때 ",l.createElement(n.code,null,"map[string]interface{}")," ,",l.createElement(n.code,null,"[]interface{}")," 등 사용해서\r\n반환값의 타입을 지정한다."),"\n",l.createElement(n.h3,null,"필요한 코드는?"),"\n",l.createElement(n.p,null,"반환값 (합친 형태가)\r\n",l.createElement(n.code,null,'[{name:"test"},{name:"test2"}]')," 형태  필요할때"),"\n",l.createElement(n.h3,null,"상황 1"),"\n",l.createElement(n.p,null,"[]배열형태를 어떻게 표현하지?"),"\n",l.createElement(n.h3,null,"append로 배열에 객체","를 추가"),"\n",l.createElement(n.p,null,"구글에서 검색 해서 아래방법을 찾았다"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,l.createElement(n.a,{href:"https://stackoverflow.com/questions/34293572/golang-prepend-a-string-to-a-slice-interface"},"참고")),"\n",l.createElement(n.li,null,"append() can only append values of the type matching the element type of the slice:"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'s := "first"\r\nrest := []interface{}{"second", 3}\r\nall := append([]interface{}{s}, rest)\r\nfmt.Println(all)\r\n//Output (try it on the Go Playground):\n')),"\n",l.createElement(n.h1,null,"상황 2"),"\n",l.createElement(n.p,null,"그렇다면 []안에 객체는 어떻게 넣지?"),"\n",l.createElement(n.h3,null,"key value 형태 객체만드는 방법"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'type MyStruct struct {\r\n    Name string\r\n    Age  int64\r\n}\r\nfunc main() {\r\n    myData := make(map[string]interface{})\r\n    myData["Name"] = "Tony"\r\n    myData["Age"] = int64(23)\r\n\r\n    result := &MyStruct{}\r\n}\n')),"\n",l.createElement(n.h2,null,"실행 코드"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"A B 모두 아래 메소드 처럼 값을 조회함"),"\n",l.createElement(n.li,null,"(1) A 의 GetList 는 *[]A를 반환"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"type A struct {\r\n    Id   sring\r\n}\r\nfunc (A) GetList() *[]A {\r\n    var results []A\r\n    //builder.Find(&results) db에서 A조회\r\n\treturn &results\r\n}\n")),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"(2) B 의 GetLst 는 *[]map[string]string 반환"),"\n"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"func (B) GetList() *[]map[string]string {\r\n\tvar results []map[string]string\r\n    //builder.Find(&results) db에서 A조회\r\n\treturn &results\r\n}\n")),"\n",l.createElement(n.h2,null,"코드에서 조인"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,'func Sum() {\r\n\ta := A{}.GetList()\r\n    b := B{}.GetLsit()\r\n    var results []interface{} //배열 []\r\n    for _,aVal := range *a {\r\n        result :=  map[string]interface{}{\r\n            "id":aVal.Id,\r\n        }\r\n        //map[string]interface{}에 값 추가됨\r\n        for _,bVal range b {\r\n            if bVal["id"] == aVal.Id {\r\n                rsult["name"] = bVal["name"]\r\n            }\r\n        }\r\n    }\r\n    \r\n}\n')),"\n",l.createElement(n.h3,null,"map 을 활용해서 두 배열의 같은 값을 찾아보자"),"\n",l.createElement(n.h4,null,"배경"),"\n",l.createElement(n.p,null,"이전 배열에 ",l.createElement(n.code,null,"[1,2,3]")," 의 값을 갖었고\r\n새로 변경된 배열은 ",l.createElement(n.code,null,"[2,4]"),"이다\r\n이 경우\r\n삭제된값,같은 값,새로 추가된 값을 구해야 하는 상황이 있었다"),"\n",l.createElement(n.p,null,"golang 에는 set 이 존재하지 않기 때문에\r\nmap 을 활요해서 두 배열의 공통값,차이값을 구할 수 있다"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"preArr := make(\r\nnewArr :=\r\n map[uint]int64\r\n\n")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},u=t(8804);function m(e){return l.createElement(u.Z,e,l.createElement(c,e))}u.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-server-golang-2022-03-09-go-map-mdx-22a2ff166f3631454e49.js.map