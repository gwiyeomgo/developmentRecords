"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9348],{7079:function(e,n,r){r.r(n),r.d(n,{Head:function(){return l.F},default:function(){return o}});var t=r(7294),c=r(1151);function a(e){const n=Object.assign({p:"p",code:"code",pre:"pre",h1:"h1",ul:"ul",li:"li",ol:"ol",h2:"h2"},(0,c.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.p,null,"remote\ntest\norigin"),"\n",t.createElement(n.p,null,"이 있다"),"\n",t.createElement(n.p,null,"origin 는 원본\ntest 는 원본을 fork 한 브랜치"),"\n",t.createElement(n.p,null,"우리는 origin 에 dev barnch 에서 org 라는 branch를 생성했다"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"git remote update")),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,"C:\\new-platform\\admin>git remote update\nFetching origin\nremote: Enumerating objects: 84, done.\nremote: Counting objects: 100% (41/41), done.\nremote: Compressing objects: 100% (16/16), done.\nremote: Total 84 (delta 27), reused 37 (delta 25), pack-reused 43\nUnpacking objects: 100% (84/84), 19.80 KiB | 101.00 KiB/s, done.\nFrom gitlab.com:platform/admin\n * [new branch]      #370                 -> origin/#370\n * [new branch]      #372                 -> origin/#372\n * [new branch]      361                  -> origin/361\n * [new branch]      362                  -> origin/362\n * [new branch]      365                  -> origin/365\n * [new branch]      373                  -> origin/373\n * [new branch]      376-qr-query-param-site-type -> origin/376-qr-query-param-site-type\n * [new branch]      378                  -> origin/378\n * [new branch]      379                  -> origin/379\n * [new branch]      382                  -> origin/382\n * [new branch]      385                  -> origin/385\n * [new branch]      387                  -> origin/387\n * [new branch]      391                  -> origin/391\n * [new branch]      392                  -> origin/392\n * [new branch]      cherry-pick-2c5387aa -> origin/cherry-pick-2c5387aa\n * [new branch]      cherry-pick-2d5348d4 -> origin/cherry-pick-2d5348d4\n * [new branch]      cherry-pick-2e34e538 -> origin/cherry-pick-2e34e538\n * [new branch]      cherry-pick-69daa442 -> origin/cherry-pick-69daa442\n * [new branch]      cherry-pick-6b24c810 -> origin/cherry-pick-6b24c810\n * [new branch]      cherry-pick-96d3a4f5 -> origin/cherry-pick-96d3a4f5\n * [new branch]      cherry-pick-9ac4b1ef -> origin/cherry-pick-9ac4b1ef\n   f969ef2..5da4a0b  master               -> origin/master\n * [new branch]      org                  -> origin/org\n   380d52c..2d5348d  staging              -> origin/staging\n * [new tag]         R-220112.v1          -> R-220112.v1\n * [new tag]         R-220119.v1          -> R-220119.v1\n * [new tag]         R-220120.v1          -> R-220120.v1\n * [new tag]         R-220126.v1          -> R-220126.v1\n * [new tag]         R-220203.v1          -> R-220203.v1\n * [new tag]         R-220217.v2          -> R-220217.v2\n * [new tag]         R-220203.v2          -> R-220203.v2\n * [new tag]         R-220203.v3          -> R-220203.v3\n * [new tag]         R-220210.v1          -> R-220210.v1\n * [new tag]         R-220214.v1          -> R-220214.v1\n * [new tag]         R-220217.v1          -> R-220217.v1\n * [new tag]         R-220224.v1          -> R-220224.v1\n * [new tag]         R-220303.v1          -> R-220303.v1\nFetching my\nremote: Enumerating objects: 52, done.\nremote: Counting objects: 100% (45/45), done.\nremote: Total 52 (delta 45), reused 45 (delta 45), pack-reused 7\nUnpacking objects: 100% (52/52), 20.14 KiB | 164.00 KiB/s, done.\nFrom gitlab.com:gwiyeomGo/admin\n * [new branch]      #140       -> gwiyeom/#140\n * [new branch]      #154       -> gwiyeom/#154\n * [new branch]      #17        -> gwiyeom/#17\n * [new branch]      #232       -> gwiyeom/#232\n * [new branch]      #295       -> gwiyeom/#295\n * [new branch]      #296       -> gwiyeom/#296\n * [new branch]      #80        -> gwiyeom/#80\n * [new branch]      main       -> gwiyeom/main\n\n")),"\n",t.createElement(n.h1,null,"git 명령어!"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"자신의 로컬 branch 목록 보기\n",t.createElement(n.code,null,"git branch -list")),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"remote branch 보기\n",t.createElement(n.code,null,"git branch -r")),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"remote + 로컬 branch\n",t.createElement(n.code,null,"git branch -a")),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"원격 저장소(remote) 의 브랜치 가져오기"),"\n"),"\n"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"git checkout -t"),"를 사용한다"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"ex) origin 에 test branch 를 가져오고 싶다면"),"\n"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"git checkout -t origin/test")),"\n",t.createElement(n.h1,null,"실제 사용 경험 (20220612)"),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,"dev branch 에서 feature 를 gitLab 에서 생성"),"\n",t.createElement(n.li,null,"dev 는 이번주에 배포할 commit 들이 있다."),"\n",t.createElement(n.li,null,"나는 feature 에서 작업하고 싶다"),"\n"),"\n",t.createElement(n.h2,null,"실제 사용 경험 ->"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"git remote update")," 해서 feature 가 있는 현재 상태 origin remote 를 업데이트 하고\n",t.createElement(n.code,null,"git checkout -t origin/feature")," origin 에 있는 feature branch 로 checkout"))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?t.createElement(n,e,t.createElement(a,e)):a(e)},l=r(8804);function o(e){return t.createElement(l.Z,e,t.createElement(i,e))}l.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-git-2022-03-03-git-howtogetremotebranch-mdx-53d270dd4ca7285328a2.js.map