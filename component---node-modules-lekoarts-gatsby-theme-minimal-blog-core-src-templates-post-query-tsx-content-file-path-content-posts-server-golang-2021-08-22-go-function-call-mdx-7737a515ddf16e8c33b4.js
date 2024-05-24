"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9259],{7876:function(n,e,t){t.r(e),t.d(e,{Head:function(){return i.p},default:function(){return o}});var a=t(6540),r=t(8453);function l(n){const e=Object.assign({h3:"h3",p:"p",code:"code",pre:"pre",h2:"h2",a:"a"},(0,r.RP)(),n.components);return a.createElement(a.Fragment,null,a.createElement(e.h3,null,"Call by value"),"\n",a.createElement(e.p,null,"값 복사되어 값 보존된다\n복사가 되기 때문에 메모리량이 늘어난다"),"\n",a.createElement(e.h3,null,"Call by reference"),"\n",a.createElement(e.p,null,"복사하지 않고 직접 참조\n직접 참조를 해서 원래 값이 영향을 받음\nNo newline at end of file"),"\n",a.createElement(e.p,null,"메모리 주소를 표현하는 포인터\n",a.createElement(e.code,null,"&")," goes in front of a variable when you want to get that variable's memory address."),"\n",a.createElement(e.h3,null,"call by value 값에 의한 호출"),"\n",a.createElement(e.pre,null,a.createElement(e.code,null,'package main\n \nimport "fmt"\n \nfunc inc(i int) {\n    i = i + 1\n}\n \nfunc main() {\n    i := 10\n    inc(i)\n    fmt.Println(i)\n}\n\n')),"\n",a.createElement(e.p,null,"실행하면 10"),"\n",a.createElement(e.h3,null,"call by reference"),"\n",a.createElement(e.pre,null,a.createElement(e.code,null,'package main\n \nimport "fmt"\n \nfunc inc(i *int) {\n    *i = *i + 1\n}\n \nfunc main() {\n    i := 10\n    inc(&i)\n    fmt.Println(i)\n}\n\n')),"\n",a.createElement(e.p,null,"실행하면 11"),"\n",a.createElement(e.h2,null,"포인터"),"\n",a.createElement(e.p,null,"value 를 복사하는게 아니라 변수의 memory address 를 저장하고 싶은거라면\n",a.createElement(e.code,null,"&")," 붙여준다."),"\n",a.createElement(e.pre,null,a.createElement(e.code,null,'import (\n"fmt"\n)\n\nfunc main() {\na:=2\nb:=&a\na=10\nfmt.Println(*b)\n\n}\n')),"\n",a.createElement(e.p,null,"a 의 type 은 int\nb의 type 은 int 에 pointer 다\n(var b *int) = b가 int 를 가지고 있는 memory address"),"\n",a.createElement(e.p,null,a.createElement(e.code,null,"*"),"를 붙이면 memory address 통해 그 안에 있는 value 를 볼 수 있따"),"\n",a.createElement(e.h3,null,"포인터 리시버"),"\n",a.createElement(e.pre,null,a.createElement(e.code,null,"func (w *Wallet) DepositWithValueReceiver(amount int) {\n    w.balance += amount\n}\n\n// Production add: 0xc000016378, value: 0\n// Test add: 0xc000016378, value: 10\nstruct 타입만! 포인터 리시버가 자동 역참조해준다.\n\n")),"\n",a.createElement(e.p,null,a.createElement(e.a,{href:"https://thebook.io/006806/ch02/04/02/"},"https://thebook.io/006806/ch02/04/02/"),"\n",a.createElement(e.a,{href:"https://programmers.co.kr/learn/courses/13"},"https://programmers.co.kr/learn/courses/13")),"\n",a.createElement(e.p,null,a.createElement(e.a,{href:"https://ponyozzang.tistory.com/162"},"https://ponyozzang.tistory.com/162"),"\n",a.createElement(e.a,{href:"https://www.npmjs.com/package/react-router-ga"},"https://www.npmjs.com/package/react-router-ga")),"\n",a.createElement(e.p,null,"예시"),"\n",a.createElement(e.pre,null,a.createElement(e.code,null,'package example\n\ntype Person struct {\n    Age  uint\n    Name string\n    BirthDay string\n}\n\nfunc (p *Person) ChangeAge (newAge uint) {\n    p.Age = newAge\n    /*if p.Age != nil {\n    }*/\n}\n\nfunc (p *Person) SetBirthDay(birthday *BirthDay) {\n    p.BirthDay = birthday.Day\n    birthday.Year = "2002"\n}\n\ntype BirthDay struct {\n    Year string\n    Month string\n    Day string\n}\n\n\n')),"\n",a.createElement(e.pre,null,a.createElement(e.code,null,'package example\n\nimport (\n    "github.com/stretchr/testify/assert"\n    "testing"\n)\n\nfunc TestPerson_ChangeAge(t *testing.T) {\n    //given\n    person := Person{\n        Age:  29,\n        Name: "철수",\n    }\n\n    //when\n    person.ChangeAge(2)\n\n    //then\n    actual := person.Age\n    expected := uint(2)\n\n    assert.Equal(t, expected, actual)\n}\n\nfunc TestPerson_SetBirthDay(t *testing.T) {\n    //given\n    person := Person{\n        Age:  29,\n        Name: "철수",\n    }\n    /*\n    person := Person{\n        Age:  29,\n        Name: "바보",\n    }*/\n    //2개의  인스턴스 생성=> 메모리2개\n    //when\n    birthDay := BirthDay{\n        Year:  "1998",\n        Month: "06",\n        Day:   "04",\n    }\n\n    person.SetBirthDay(&birthDay)\n\n    //then\n    actual := person.BirthDay\n    expected := "04"\n\n    assert.Equal(t, expected, actual)\n    assert.Equal(t, birthDay.Year, "2002")\n}\n\n')))}var c=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,r.RP)(),n.components);return e?a.createElement(e,n,a.createElement(l,n)):l(n)},i=t(7292);function o(n){return a.createElement(i.A,n,a.createElement(c,n))}i.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-golang-2021-08-22-go-function-call-mdx-7737a515ddf16e8c33b4.js.map