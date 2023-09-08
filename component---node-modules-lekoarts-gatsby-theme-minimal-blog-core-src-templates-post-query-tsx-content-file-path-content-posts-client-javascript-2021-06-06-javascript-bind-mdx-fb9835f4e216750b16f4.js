"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[8892],{587:function(n,e,t){t.r(e),t.d(e,{Head:function(){return o.F},default:function(){return s}});var l=t(7294),a=t(1151);function c(n){const e=Object.assign({p:"p",a:"a",strong:"strong",h3:"h3",pre:"pre",code:"code"},(0,a.ah)(),n.components);return l.createElement(l.Fragment,null,l.createElement(e.p,null,l.createElement(e.a,{href:"https://codesandbox.io/s/dynamically-add-and-delete-input-fields-in-form-using-react-js-forked-bo6d4?file=/src/components/bookView.js:0-1888"},"React 로 만들어진 코드 예시")," 를 찾다 보면 JavaScript bind 함수를 사용하는 코드를 심심치 않게 볼 수 있습니다.\n그런데 최근의 React 코드에서는 좀 처럼 찾아 볼 수 없는데,\n",l.createElement(e.strong,null,"왜 과거에는 사용하였지만 최근에서는 잘 사용하지 않는 걸까요?")),"\n",l.createElement(e.h3,null,"JavaScript bind 함수"),"\n",l.createElement(e.p,null,"먼저 bind 의 정의를 찾아보겠습니다.\n",l.createElement(e.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"},"MDN bind")," 를 아래와 같이 정의하고 있습니다."),"\n",l.createElement(e.pre,null,l.createElement(e.code,null,"> bind()함수는 새로운 바인딩한 함수를 만듭니다.\n> 바인딩한 함수는 원본 함수 객체를 감싸는 함수로, ECMAScript 2015에서 말하는 특이 함수 객체exotic function object입니다. 바인딩한 함수를 호출하면 일반적으로 래핑된 함수가 호출 됩니다.\n")),"\n",l.createElement(e.p,null,"사실 정의만으로는 bind를 이해하기 어려운데요. 쓰임새 관점에서 살펴보면 주로 ",l.createElement(e.strong,null,"this"),"와 연관성이 많습니다.\nReact 코드로 예를 들어 보겠습니다."),"\n",l.createElement(e.p,null,"아래 코드는 버튼을 클릭하면 값이 증가되어 보여지는 단순한 코드 입니다."),"\n",l.createElement(e.pre,null,l.createElement(e.code,{className:"language-jsx"},'class Button extends React.Component {\n    render() {\n        return <button onClick={this.props.onClick}>+</button>;\n    }\n}\n\nclass Page extends React.Component {\n    state = {\n        num: 0,\n    };\n\n    add() {\n        this.setState({ num: this.state.num + 1 });\n    }\n\n    render() {\n        // console.log(this); //Page\n        return (\n            <div>\n                <Button onClick={this.add} />\n                <h1>{this.state.num}</h1>\n            </div>\n        );\n    }\n}\n\nconst rootElement = document.getElementById("root");\nReactDOM.render(<Page></Page>, rootElement);\n')),"\n",l.createElement(e.p,null,"Page 컴포넌트의 add 함수를 자식 컴포넌트 즉, Button 컴포넌트에 props 전달하고 있습니다."),"\n",l.createElement(e.p,null,"하지만 이 코드는 동작하지 않고 undefined 오류가 발생합니다. 그 이유는 Button 컴포넌트에서 전달받은 add 함수를 호출할 때 this가 Page 컴포넌트를 가르키지 않기 때문입니다. 이런 문제를 '바인딩되지 않는 this 문제'라고 합니다."),"\n",l.createElement(e.p,null,"bind를 사용하면'바인딩되지 않는 this 문제'를 해결할 수 있습니다."),"\n",l.createElement(e.p,null,"Page 컴포넌트에서 Buttorn 컴포넌트로 add 함수를 넘길 때 bind 함수를 함께 사용합니다."),"\n",l.createElement(e.pre,null,l.createElement(e.code,{className:"language-jsx"},"class Page extends React.Component {\n    // 화살표 함수로 변경\n    add = () => {\n        this.setState({ num: this.state.num + 1 });\n    };\n    render() {\n        return (\n            <div>\n                <Button onClick={this.add} />\n                <h1>{this.state.num}</h1>\n            </div>\n        );\n    }\n}\n")),"\n",l.createElement(e.h3,null,"화살표 함수와 React 함수형 컴포넌트"),"\n",l.createElement(e.p,null,"위의 언급한 '바인딩되지 않는 this 문제' 를 bind 함수 이외에 다른 방법으로 해결할 수 있습니다. 바로 화살표 함수Arrow function expression와 React 함수형 컴포넌트를 사용하는 것입니다."),"\n",l.createElement(e.p,null,"먼저 화살표 함수를 사용하면 bind 함수 대신 아래와 같이 변경할 수 있습니다."),"\n",l.createElement(e.p,null,"위의 코드에서는 bind 대신 add 함수를 화살표 함수로 변경 하였습니다.\n실행해 보면 오류 없이 동작하는 것을 확인할 수 있습니다."),"\n",l.createElement(e.p,null,"두 번째로는 최근 React 에서 도입된 함수형 컴포넌트를 사용하는 것입니다."),"\n",l.createElement(e.pre,null,l.createElement(e.code,{className:"language-jsx"},'function Button({ onClick }) {\n    return <button onClick={onClick}>+</button>;\n}\n\nfunction Page() {\n    const [num, setNum] = useState(0);\n\n    const add = () => {\n        setNum(num + 1);\n    };\n\n    console.log(this); //Window\n    return (\n        <div>\n            <Button onClick={add} />\n            <h1>{num}</h1>\n        </div>\n    );\n}\n\nconst rootElement = document.getElementById("root");\nReactDOM.render(<Page></Page>, rootElement);\n')),"\n",l.createElement(e.p,null,"함수형 컴포넌트에서는 this 의 사용이 불필요하기 때문에 자연스럽게 '바인딩 되지 않는 this 문제'가 해결됩니다."),"\n",l.createElement(e.h3,null,"결론"),"\n",l.createElement(e.p,null,"'바인딩 되지 않는 this 문제' 를 해결하기 위해 과거에는 bind 함수를 사용했으나\n최근 화살표 함수와 함수형 컴포넌트의 일반화(혹은 대중화)로 앞서 언급했던 '바인딩되지 않는 this문제'가 자연스럽게 해결되면서 더 이상 쓸 필요가 없어진 것으로 보여집니다."))}var r=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.ah)(),n.components);return e?l.createElement(e,n,l.createElement(c,n)):c(n)},o=t(8804);function s(n){return l.createElement(o.Z,n,l.createElement(r,n))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-javascript-2021-06-06-javascript-bind-mdx-fb9835f4e216750b16f4.js.map