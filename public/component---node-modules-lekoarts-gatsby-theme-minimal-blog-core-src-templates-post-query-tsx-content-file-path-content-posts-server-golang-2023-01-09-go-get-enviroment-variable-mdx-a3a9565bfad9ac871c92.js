"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[40],{7258:function(e,n,t){t.r(n),t.d(n,{Head:function(){return a.F},default:function(){return u}});var r=t(7294),l=t(1151);function c(e){const n=Object.assign({h3:"h3",p:"p",blockquote:"blockquote",code:"code",pre:"pre"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(n.h3,null,"배경"),"\n",r.createElement(n.p,null,"어드민 회원 서비스의 경우 어드민 회원의 휴대번호를 보관하지 않았다\r\n역할 매칭 요청 기능이 추가되면서 회원에게 알림이 가거나 운영자가 직접 전화를 해야하는 상황이 예상되었다.\r\n그래서 어드민 회원도 휴대번호를 추가하기로 했다.\r\n그 과정에서 encrypt decrypt 를 해야했는데\r\nconfig.json 에 encrypt key 값 넣는 것이 아닌 환경변수의 key 값으로 넣는다.\r\n그래서 프로그램 실행시 환경변수 중 특정 key 값을 불러오고 싶었다."),"\n",r.createElement(n.h3,null,"environment variable(환경변수) ?"),"\n",r.createElement(n.blockquote,null,"\n",r.createElement(n.p,null,"An environment variable is a dynamic-named value (동적인 값들의 모임)\r\nthat can affect the way running processes will behave on a computer. ( 프로세스가 컴퓨터에서 동작하는 방식에 영향을 미치는)"),"\n"),"\n",r.createElement(n.h3,null,"Getenv 로 환경변수 값을 가져오자"),"\n",r.createElement(n.p,null,'"os" 패키지의 ',r.createElement(n.code,null,"Getenv")," 를 통해서 환경변수의 특정 key 값을 가져와 config 에 저장할 수 있다."),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,'var (EncryptKey = "TEST_ENCRYPT_KEY")\r\nif len(os.Getenv(EncryptKey)) > 0 {\r\n\tconfig.Config.Encrypt.EncryptKey = os.Getenv(EncryptKey)\r\n}\r\n\n')),"\n",r.createElement(n.h3,null,"Setenv 로  코드상에 환경변수 값을 지정한다"),"\n",r.createElement(n.p,null,"실제로 테스트 케이스를 작성중 crypto test 를 하면서\r\nstring 으로 값을 직접 쓰는 것 보다 config 에 값을 넣고 불러오고 싶었다."),"\n",r.createElement(n.p,null,r.createElement(n.code,null,'os.Setenv("TEST_ENCRYPT_KEY", "z/qmCedgx5dojwg==")'),"\r\ncontroller 패키지에 init 함수에 추가해서 최초 1번 초기화 되게 한다면\r\ntestcase 를 동작할 때 config 값을 설정할 수 있었다."),"\n",r.createElement(n.pre,null,r.createElement(n.code,null,'func Test_Encrypt(t *testing.T) {\r\n\tvar key string\r\n\tif len(os.Getenv(EncryptKey)) > 0 {\r\n\t\tkey = os.Getenv(EncryptKey)\r\n\t}\r\n\tplaintext1 := "01000000000"\r\n\tfoo := Encrypt(key, plaintext1)\r\n\tfmt.Println(foo)\r\n\tfmt.Println(Decrypt(key, "Wcsw/SIL/M="))\r\n}\r\n\n')))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?r.createElement(n,e,r.createElement(c,e)):c(e)},a=t(8804);function u(e){return r.createElement(a.Z,e,r.createElement(o,e))}a.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-golang-2023-01-09-go-get-enviroment-variable-mdx-a3a9565bfad9ac871c92.js.map