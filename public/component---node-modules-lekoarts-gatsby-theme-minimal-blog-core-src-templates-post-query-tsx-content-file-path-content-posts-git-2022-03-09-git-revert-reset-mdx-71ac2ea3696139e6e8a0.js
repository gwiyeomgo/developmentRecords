"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[3693],{1635:function(e,n,t){t.r(n),t.d(n,{Head:function(){return m.F},default:function(){return i}});var l=t(7294),r=t(1151);function c(e){const n=Object.assign({h1:"h1",h4:"h4",p:"p",ul:"ul",li:"li",code:"code",pre:"pre",h3:"h3",a:"a"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,"배경"),"\n",l.createElement(n.h4,null,"상황1"),"\n",l.createElement(n.p,null,"가끔 command 명령어로 commit 을 할때 취소해야 하는 경우가 있다."),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"우리는 main branch 에서 새로 branch 를 생성한다"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"checkout 해서 새 브랜치로 이동해서 보통은 작업하지만"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"갑작스런 이슈로 main에서 코드고치고\r\ngit stash 명령어 쓰려다가...\r\n그냥 main에서 commit 한 적이 있었다"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"우선 commit 한 상태에서 새 branch로 이동해서 push 했고"),"\n"),"\n",l.createElement(n.li,null,"\n",l.createElement(n.p,null,"원래 main을 되돌려야 하는 상황"),"\n"),"\n"),"\n",l.createElement(n.h4,null,"상황2"),"\n",l.createElement(n.ul,null,"\n",l.createElement(n.li,null,"여러명이 dev(default branch 개발계) Branch 를 clone 하고 협업중"),"\n",l.createElement(n.li,null,"A라는 사람은 이번주에 배포하면 안돼는 코드를 작업 후\r\ndev 로 머지했다"),"\n",l.createElement(n.li,null,"dev 에 머지된 가장 최근의 commit 을 되돌려야 하는 상황"),"\n"),"\n",l.createElement(n.h1,null,"해결 방법"),"\n",l.createElement(n.p,null,"우선 나는 ",l.createElement(n.code,null,"상황1")," 에서는\r\n그냥 프로젝트를 다시 clone 했다."),"\n",l.createElement(n.p,null,"프로젝트를 그냥 써야하는 상황이라면\r\n",l.createElement(n.code,null,"git reset")," 명령을 썼을 거 같다\r\n(",l.createElement(n.code,null,"git reset HEAD~1"),"=> 가장 최근 1개 커밋 reset => modify 상태로 변경)\r\n예전에 시니어 개발자에게 해당 명령을 함부로 썼다고\r\n혼난 이후 잘 사용은 안하지만\r\n커밋을 아예 취소하는 상황이기 때문에\r\n써야하는 상황인거 같다"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"상황2"),"에서는 ",l.createElement(n.code,null,"git revert")," 를 사용했다\r\ngitLab을 주로 사용하는데\r\ngitLab 에서 merge 이후\r\n화면에 ",l.createElement(n.code,null,"[revert]")," 버튼이 있다\r\n이 버튼사용하면\r\n새로운 머지 request 를 생성 => 머지하면\r\n새로운 revert commit 이 자동 추가되며\r\n이전 코드로 돌아온다\r\n(자세한 내용은 참고3 클릭)"),"\n",l.createElement(n.h1,null,"첫번째 커밋 취소는 어떻게 하지?"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"git update-ref -d HEAD\r\ngit rm --cached -r .\n")),"\n",l.createElement(n.h1,null,"revert 한 커밋을 다시 머지하려면? - 체리픽은 특정 커밋을 현재 작업 중인 브랜치로 가져오는 작업"),"\n",l.createElement(n.p,null,"gitLab 에서 머지한 커밋을 ui 에서 revert 했다\r\n이후에 ui 에 Cherry Picks 버튼이 보였다"),"\n",l.createElement(n.p,null,"revert 한 커밋을 dev에 다시 머지해야 햇는데 Cherry Picks으로 dev 에 머지할 수 있었다\r\n내코드 살렸음 ㅠㅜ"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"\r\ngit checkout dev\r\n\r\n# 스킵된 체리픽에 대한 메시지 비활성화\r\ngit config advice.skippedCherryPicks false\r\n\r\n# 체리픽 수행 및 스킵된 커밋을 다시 포함하여 다시 적용\r\ngit cherry-pick --reapply-cherry-picks <reverted_commit_hash>\r\n\r\n\n")),"\n",l.createElement(n.h3,null,"참고 글"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://gmlwjd9405.github.io/2018/05/25/git-add-cancle.html"},"참고1"),"\r\n",l.createElement(n.a,{href:"https://www.lainyzine.com/ko/article/git-reset-and-git-revert-and-git-commit-amend/"},"참고2"),"\r\n",l.createElement(n.a,{href:"https://docs.gitlab.com/ee/user/project/merge_requests/revert_changes.html"},"참고3-gitLab"),"\r\n",l.createElement(n.a,{href:"https://velog.io/@jakeseo_me/git-%EC%B2%AB%EB%B2%88%EC%A7%B8-%EC%BB%A4%EB%B0%8B-%EC%B7%A8%EC%86%8C%ED%95%98%EA%B8%B0https://velog.io/@jakeseo_me/git-%EC%B2%AB%EB%B2%88%EC%A7%B8-%EC%BB%A4%EB%B0%8B-%EC%B7%A8%EC%86%8C%ED%95%98%EA%B8%B0"},"https://velog.io/@jakeseo_me/git-첫번째-커밋-취소하기https://velog.io/@jakeseo_me/git-첫번째-커밋-취소하기")))}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(c,e)):c(e)},m=t(8804);function i(e){return l.createElement(m.Z,e,l.createElement(a,e))}m.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-git-2022-03-09-git-revert-reset-mdx-71ac2ea3696139e6e8a0.js.map