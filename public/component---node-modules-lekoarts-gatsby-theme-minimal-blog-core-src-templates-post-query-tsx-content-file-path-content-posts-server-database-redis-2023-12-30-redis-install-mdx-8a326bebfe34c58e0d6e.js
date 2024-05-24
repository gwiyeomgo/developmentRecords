"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[7809],{5781:function(e,n,l){l.r(n),l.d(n,{Head:function(){return o.F},default:function(){return u}});var t=l(7294),r=l(1151);function c(e){const n=Object.assign({p:"p",blockquote:"blockquote",a:"a",ol:"ol",li:"li",ul:"ul",code:"code"},(0,r.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.p,null,"Redis 설치 (MacOS)"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,t.createElement(n.a,{href:"https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/"},"https://redis.io/docs/getting-started/installation/install-redis-on-mac-os/")),"\n"),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"HomeBrew 설치"),"\n"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,'/bin/bash -c "$(curl -fsSL ',t.createElement(n.a,{href:"https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh"},"https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh"),')"'),"\n"),"\n",t.createElement(n.ol,{start:"2"},"\n",t.createElement(n.li,null,"Redis 설치"),"\n"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"brew install redis"),"\n"),"\n",t.createElement(n.ol,{start:"3"},"\n",t.createElement(n.li,null,"Redis 실행"),"\n"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"brew services start redis"),"\n"),"\n",t.createElement(n.p,null,"3-1 실제로 레디스 서버에 어떤 명령어를 전달하기 위해서는 레디스 cli 라는 프로그램을 이용"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"redis-cli"),"\n"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"명령어는 대문자로 key,value 는 소문자\n3-2 ping 명령어 전달시 pong 리턴 => redis 실행중이고 redis-cli 가 정상적으로 Redis 에 명령어 전달"),"\n"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"PING"),"\n"),"\n",t.createElement(n.p,null,"3-3 값 저장 ,조회"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"SET gwiyeom data\nGET gwiyeom"),"\n"),"\n",t.createElement(n.p,null,"3-4 삭제"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"DEL gwiyeom"),"\n"),"\n",t.createElement(n.ol,{start:"4"},"\n",t.createElement(n.li,null,"Redis 종료"),"\n"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"brew services stop redis"),"\n"),"\n",t.createElement(n.ol,{start:"5"},"\n",t.createElement(n.li,null,"조회"),"\n"),"\n",t.createElement(n.p,null,"전체 데이터 수\n",t.createElement(n.code,null,"dbsize")),"\n",t.createElement(n.p,null,"전체 조회\n",t.createElement(n.code,null,"Keys *")),"\n",t.createElement(n.p,null,"sta로 시작하는 key 값 조회\n",t.createElement(n.code,null,"Keys sta*")))}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?t.createElement(n,e,t.createElement(c,e)):c(e)},o=l(8804);function u(e){return t.createElement(o.Z,e,t.createElement(a,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-redis-2023-12-30-redis-install-mdx-8a326bebfe34c58e0d6e.js.map