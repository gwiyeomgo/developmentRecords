"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1404],{3809:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294);function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}var i=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,a(t,n);var c=i.prototype;return c.componentDidMount=function(){this._updateIframeContent()},c.componentDidUpdate=function(e,t){this._updateIframeContent()},c._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},c._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,r=this.iframeNode,a=r.document;r.contentDocument?a=r.contentDocument:r.contentWindow&&(a=r.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";a.open(),a.writeln(i),a.close()},c.render=function(){var e=this,t=this.props,n=t.id,a=t.file;return r.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:a?"gist-"+n+"-"+a:"gist-"+n})},i}(r.PureComponent),c=i;var l=function(e){let{id:t,file:n}=e;return r.createElement(c,{id:t,file:n})}},4989:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return d}});var r=n(7294),a=n(1151),i=n(3809);function c(e){const t=Object.assign({p:"p",a:"a",strong:"strong",h3:"h3",pre:"pre",code:"code"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,r.createElement(t.a,{href:"https://codesandbox.io/s/dynamically-add-and-delete-input-fields-in-form-using-react-js-forked-bo6d4?file=/src/components/bookView.js:0-1888"},"React 로 만들어진 코드 예시")," 를 찾다 보면 JavaScript bind 함수를 사용하는 코드를 심심치 않게 볼 수 있습니다.\r\n그런데 최근의 React 코드에서는 좀 처럼 찾아 볼 수 없는데,\r\n",r.createElement(t.strong,null,"왜 과거에는 사용하였지만 최근에서는 잘 사용하지 않는 걸까요?")),"\n",r.createElement(t.h3,null,"JavaScript bind 함수"),"\n",r.createElement(t.p,null,"먼저 bind 의 정의를 찾아보겠습니다.\r\n",r.createElement(t.a,{href:"https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind"},"MDN bind")," 를 아래와 같이 정의하고 있습니다."),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"> bind()함수는 새로운 바인딩한 함수를 만듭니다.\r\n> 바인딩한 함수는 원본 함수 객체를 감싸는 함수로, ECMAScript 2015에서 말하는 특이 함수 객체exotic function object입니다. 바인딩한 함수를 호출하면 일반적으로 래핑된 함수가 호출 됩니다.\n")),"\n",r.createElement(t.p,null,"사실 정의만으로는 bind를 이해하기 어려운데요. 쓰임새 관점에서 살펴보면 주로 ",r.createElement(t.strong,null,"this"),"와 연관성이 많습니다.\r\nReact 코드로 예를 들어 보겠습니다."),"\n",r.createElement(t.p,null,"아래 코드는 버튼을 클릭하면 값이 증가되어 보여지는 단순한 코드 입니다."),"\n",r.createElement(i.Z,{id:"77e2c895153dfc2aa25aa79dfb3979b0",file:"2021-06-06-javascript-bind_0.js"}),"\n",r.createElement(t.p,null,"Page 컴포넌트의 add 함수를 자식 컴포넌트 즉, Button 컴포넌트에 props 전달하고 있습니다."),"\n",r.createElement(t.p,null,"하지만 이 코드는 동작하지 않고 undefined 오류가 발생합니다. 그 이유는 Button 컴포넌트에서 전달받은 add 함수를 호출할 때 this가 Page 컴포넌트를 가르키지 않기 때문입니다. 이런 문제를 '바인딩되지 않는 this 문제'라고 합니다."),"\n",r.createElement(t.p,null,"bind를 사용하면'바인딩되지 않는 this 문제'를 해결할 수 있습니다."),"\n",r.createElement(t.p,null,"Page 컴포넌트에서 Buttorn 컴포넌트로 add 함수를 넘길 때 bind 함수를 함께 사용합니다."),"\n",r.createElement(i.Z,{id:"77e2c895153dfc2aa25aa79dfb3979b0",file:"2021-06-06-javascript-bind_1.js"}),"\n",r.createElement(t.h3,null,"화살표 함수와 React 함수형 컴포넌트"),"\n",r.createElement(t.p,null,"위의 언급한 '바인딩되지 않는 this 문제' 를 bind 함수 이외에 다른 방법으로 해결할 수 있습니다. 바로 화살표 함수Arrow function expression와 React 함수형 컴포넌트를 사용하는 것입니다."),"\n",r.createElement(t.p,null,"먼저 화살표 함수를 사용하면 bind 함수 대신 아래와 같이 변경할 수 있습니다."),"\n",r.createElement(i.Z,{id:"77e2c895153dfc2aa25aa79dfb3979b0",file:"2021-06-06-javascript-bind_3.js"}),"\n",r.createElement(t.p,null,"위의 코드에서는 bind 대신 add 함수를 화살표 함수로 변경 하였습니다.\r\n실행해 보면 오류 없이 동작하는 것을 확인할 수 있습니다."),"\n",r.createElement(t.p,null,"두 번째로는 최근 React 에서 도입된 함수형 컴포넌트를 사용하는 것입니다."),"\n",r.createElement(i.Z,{id:"77e2c895153dfc2aa25aa79dfb3979b0",file:"2021-06-06-javascript-bind_4.js"}),"\n",r.createElement(t.p,null,"함수형 컴포넌트에서는 this 의 사용이 불필요하기 때문에 자연스럽게 '바인딩 되지 않는 this 문제'가 해결됩니다."),"\n",r.createElement(t.h3,null,"결론"),"\n",r.createElement(t.p,null,"'바인딩 되지 않는 this 문제' 를 해결하기 위해 과거에는 bind 함수를 사용했으나\r\n최근 화살표 함수와 함수형 컴포넌트의 일반화(혹은 대중화)로 앞서 언급했던 '바인딩되지 않는 this문제'가 자연스럽게 해결되면서 더 이상 쓸 필요가 없어진 것으로 보여집니다."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(c,e)):c(e)},o=n(8804);function d(e){return r.createElement(o.Z,e,r.createElement(l,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-client-javascript-2021-06-06-javascript-bind-mdx-da47ba63172fc3a42e44.js.map