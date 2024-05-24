"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[8134],{717:function(e,n,t){t.r(n),t.d(n,{Head:function(){return c.p},default:function(){return i}});var l=t(6540),a=t(8453);function r(e){const n=Object.assign({h3:"h3",ol:"ol",li:"li",h1:"h1",p:"p",a:"a",code:"code"},(0,a.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h3,null,"stash 는 언제 사용했었지?"),"\n",l.createElement(n.ol,null,"\n",l.createElement(n.li,null,"a 브렌치에서 작업하다 커밋 안하고 b 브렌치 작업을 해야 할때"),"\n",l.createElement(n.li,null,"a 에서 작업하는 중,master 에 머지된거 pull 받아야함 => stash 하고 pull 받고 stash pop 함"),"\n"),"\n",l.createElement(n.h1,null,"git stash 로 보관되는 상태는?"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-Stashing%EA%B3%BC-Cleaning"},"Stash는 Modified 이면서 Tracked 상태인 파일과 Staging Area에 있는 파일들을 보관해두는 장소")),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"git add .")," 로 변경된 내용 상태를 변경하고 git stash 사용해야함"),"\n",l.createElement(n.h3,null,"stash 명령어"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"git stash"),"\n",l.createElement(n.code,null,"git stash list"),"\n",l.createElement(n.code,null,"git stash pop")),"\n",l.createElement(n.h3,null,"stash pop ? apply ?...."),"\n",l.createElement(n.h3,null,"stash list 를 어떻게 삭제?"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"git stash drop")),"\n",l.createElement(n.h3,null,"여러개 stash 중 원하는 것 만 적용"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"git stash apply {index}"),"\nor ",l.createElement(n.code,null,"stash@{1}")," 처럼 index 지정해서 적용\n",l.createElement(n.code,null,"git stash apply stash@{index}")),"\n",l.createElement(n.h3,null,"origin branch 에 stash 하고 push 한다면?"),"\n",l.createElement(n.h1,null,"stash 가 남았던 경험 (20220612)"),"\n",l.createElement(n.p,null,"최초 프로젝트의 경우 fork 를 떠서 origin 으로 머지하는 방식으로 했다 (나눔플랫폼)\n기관플랫폼은 리더 시니어가 origin 에서 작업하고 올리는 거로 결정했다\n=> 다른 사람의 branch 에 접근 가능하여 변경할 수 있는 위험이 있는데도 그렇게 결정하셨다.\n=> 정확한 상황은 못봤지만 배포시 fork해서 작업을 따서 머지합칠때 문제가 있었는데... 기억이..."),"\n",l.createElement(n.p,null,"그런데 지난주 기관플랫폼을 하면서 이상한 점을 발견했다"),"\n",l.createElement(n.p,null,"fork 하지 않고 작업하니 origin 에서 바로 브렌치를 만들고\n작업하다 stash 도 한다..\n그런데 stash를 drop 하거나 pop하지 않고 origin/dev 으로 push 하니"),"\n",l.createElement(n.p,null,"나중에 origin/dev 를 pull 받았을때  stash 했던 데이터가 남아있었다 => 이건 실험좀 해봐야겠다."),"\n",l.createElement(n.h1,null,"origin 저장소에서 branch 를 생성해 stash 해보자"),"\n",l.createElement(n.p,null,"origin 저장소에 branch를 생성한다면\n다른 사람의 접근이 가능하다.\nex) git stash 를 했을 때 다른사람의 stash 도 볼 수 있다?"))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},c=t(7292);function i(e){return l.createElement(c.A,e,l.createElement(s,e))}c.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-git-2022-04-13-git-stash-mdx-d71f6f0c84942708dcd4.js.map