"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1404],{4989:function(n,e,t){t.r(e),t.d(e,{Head:function(){return o.F},default:function(){return i}});var r=t(7294),l=t(1151);function a(n){const e=Object.assign({p:"p",a:"a",h3:"h3",pre:"pre",code:"code",strong:"strong"},(0,l.ah)(),n.components);return r.createElement(r.Fragment,null,r.createElement(e.p,null,r.createElement(e.a,{href:"https://codesandbox.io/s/dynamically-add-and-delete-input-fields-in-form-using-react-js-forked-bo6d4?file=/src/components/bookView.js:0-1888"},"React 로 만들어진 코드 예시")," 를 찾다 보면 JavaScript bind 함수를 사용하는 코드를 심심치 않게 볼 수 있습니다.\r\n그런데 최근의 React 코드에서는 좀 처럼 찾아 볼 수 없는데,\r\n왜 과거에는 사용하였지만 최근에서는 잘 사용하지 않는 걸까요?"),"\n",r.createElement(e.h3,null,"JavaScript bind 함수"),"\n",r.createElement(e.p,null,"먼저 bind 의 정의를 찾아보겠습니다.\r\n",r.createElement(e.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"},"MDN bind")," 를 아래와 같이 정의하고 있습니다."),"\n",r.createElement(e.pre,null,r.createElement(e.code,null,"> bind()함수는 새로운 바인딩한 함수를 만듭니다.\r\n> 바인딩한 함수는 원본 함수 객체를 감싸는 함수로, ECMAScript 2015에서 말하는 특이 함수 객체exotic function object입니다. 바인딩한 함수를 호출하면 일반적으로 래핑된 함수가 호출 됩니다.\n")),"\n",r.createElement(e.p,null,"사실 정의만으로는 bind를 이해하기 어려운데요. 쓰임새 관점에서 살펴보면 주로 ",r.createElement(e.strong,null,"this"),"와 연관성이 많습니다.\r\nReact 코드로 예를 들어 보겠습니다."),"\n",r.createElement(e.p,null,"아래 코드는 버튼을 클릭하면 값이 증가되어 보여지는 단순한 코드 입니다."),"\n",r.createElement("script",{src:"https://gist.github.com/brookslyrette/bf3df2ad046a3fa0f464203a6c0b7e2d.js"}),"\n",r.createElement(e.p,null,"Page 컴포넌트의 add 함수를 자식 컴포넌트 즉, Button 컴포넌트에 props 전달하고 있습니다.\r\n하지만 이 코드는 동작하지 않고 ",r.createElement(e.code,null,"undefined")," 오류가 발생합니다. 그 이유는 Button 컴포넌트에서 전달받은 add 함수를 호출할 때 this가 Page 컴포넌트를 가르키지 않기 때문입니다. 이런 문제를 '바인딩되지 않는 this 문제'라고 합니다.\r\nbind를 사용하면'바인딩되지 않는 this 문제'를 해결할 수 있습니다.\r\nPage 컴포넌트에서 Buttorn 컴포넌트로 add 함수를 넘길 때 bind 함수를 함께 사용합니다."),"\n",r.createElement(e.pre,null,r.createElement(e.code,null,"class Page extends React.Component {\r\n    state = {\r\n        num: 0,\r\n    };\r\n    add() {\r\n        this.setState({ num: this.state.num + 1 });\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Button onClick={this.add.bind(this)} /> // bind 추가\r\n                <h1>{this.state.num}</h1>\r\n            </div>\r\n        );\r\n    }\r\n}\n")),"\n",r.createElement(e.h3,null,"화살표 함수와 React 함수형 컴포넌트"),"\n",r.createElement(e.p,null,"위의 언급한 '바인딩되지 않는 this 문제' 를 bind 함수 이외에 다른 방법으로 해결할 수 있습니다. 바로 화살표 함수Arrow function expression와 React 함수형 컴포넌트를 사용하는 것입니다."),"\n",r.createElement(e.p,null,"먼저 화살표 함수를 사용하면 bind 함수 대신 아래와 같이 변경할 수 있습니다."),"\n",r.createElement(e.pre,null,r.createElement(e.code,null,"class Page extends React.Component {\r\n    // 화살표 함수로 변경\r\n    add = () => {\r\n        this.setState({ num: this.state.num + 1 });\r\n    };\r\n    render() {\r\n        return (\r\n            <div>\r\n                <Button onClick={this.add} />\r\n                <h1>{this.state.num}</h1>\r\n            </div>\r\n        );\r\n    }\r\n}\n")),"\n",r.createElement(e.p,null,"위의 코드에서는 bind 대신 add 함수를 화살표 함수로 변경 하였습니다.\r\n실행해 보면 오류 없이 동작하는 것을 확인할 수 있습니다."),"\n",r.createElement(e.p,null,"두 번째로는 최근 React 에서 도입된 함수형 컴포넌트를 사용하는 것입니다."),"\n",r.createElement(e.pre,null,r.createElement(e.code,null,'function Button({ onClick }) {\r\n    return <button onClick={onClick}>+</button>;\r\n}\r\n\r\nfunction Page() {\r\n    const [num, setNum] = useState(0);\r\n\r\n    const add = () => {\r\n        setNum(num + 1);\r\n    };\r\n\r\n    console.log(this); //Window\r\n    return (\r\n        <div>\r\n            <Button onClick={add} />\r\n            <h1>{num}</h1>\r\n        </div>\r\n    );\r\n}\r\n\r\nconst rootElement = document.getElementById("root");\r\nReactDOM.render(<Page></Page>, rootElement);\n')),"\n",r.createElement(e.p,null,"함수형 컴포넌트에서는 this 의 사용이 불필요하기 때문에 자연스럽게 '바인딩 되지 않는 this 문제'가 해결됩니다."),"\n",r.createElement(e.h3,null,"결론"),"\n",r.createElement(e.p,null,"'바인딩 되지 않는 this 문제' 를 해결하기 위해 과거에는 bind 함수를 사용했으나\r\n최근 화살표 함수와 함수형 컴포넌트의 일반화(혹은 대중화)로 앞서 언급했던 '바인딩되지 않는 this문제'가 자연스럽게 해결되면서 더 이상 쓸 필요가 없어진 것으로 보여집니다."))}var c=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,l.ah)(),n.components);return e?r.createElement(e,n,r.createElement(a,n)):a(n)},o=t(4502);function i(n){return r.createElement(o.Z,n,r.createElement(c,n))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-client-javascript-2021-06-06-javascript-bind-mdx-51eea3231a0acaf118aa.js.map