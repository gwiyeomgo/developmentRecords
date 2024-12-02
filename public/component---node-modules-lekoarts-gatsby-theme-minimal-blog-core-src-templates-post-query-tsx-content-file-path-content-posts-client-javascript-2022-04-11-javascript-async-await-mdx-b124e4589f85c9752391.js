"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[5636],{1475:function(e,n,t){t.r(n),t.d(n,{Head:function(){return i.F},default:function(){return c}});var a=t(7294),l=t(1151);function r(e){const n=Object.assign({h3:"h3",ul:"ul",li:"li",p:"p",h1:"h1",ol:"ol",pre:"pre",code:"code"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h3,null,"async  await"),"\n",a.createElement(n.ul,null,"\n",a.createElement(n.li,null,"es2017 도입"),"\n",a.createElement(n.li,null,"프라미스 기반의 비동기 코드를 동기적 코드처럼 작성 할 수 있게 합니다."),"\n",a.createElement(n.li,null,"await 키워드는 async 키워드로 선언된 함수 안에서만 사용"),"\n"),"\n",a.createElement(n.h3,null,"에러"),"\n",a.createElement(n.p,null,"UnhandledPromiseRejection\r\n에러 메세지 확인"),"\n",a.createElement(n.h1,null,"찾아보니"),"\n",a.createElement(n.ol,null,"\n",a.createElement(n.li,null,"asnyc/await을 사용한 함수는 promise를 반환한다는 것을 알게되었다."),"\n",a.createElement(n.li,null,"async 키워드를 사용한 함수의 경우\r\ntry "," catch"," 로 애러 핸들안해줘서 발생"),"\n"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"DonationService.getDonation(id).then((response) => {\r\n  if (response.data && response.data.evalType !== ONLY_ACCEPT_DONATION){\r\n    DonationService.getDonationClassification(id).then((classification) => {\r\n       setData({\r\n                classification:classification.data,\r\n                donation:response.data\r\n                });\r\n    });\r\n  }\r\n})\n")),"\n",a.createElement(n.p,null,"이 코드는 기부 상세 화면에서 처음에 기부 데이텉를 가져오는 코드입니다.\r\n기부 데이터의 타입이 접수일경우 setData 를 해주지 않기 때문에 흰 화면이 나오는 문제가 발생했습니다."),"\n",a.createElement(n.p,null,"어떻게 개선할 수 있을 까요?"),"\n",a.createElement(n.p,null,"3개의 API 를 Call 하는 경우\r\n우선 기부 데이터가 있다면 setData 를 써서 data 에 값을 저장해야 합니다. 따라서\r\n처음 호출하는 부분만 써보면"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"const load =  async () => {\r\n  setRoles(MemberContext.memberInformation.roles);\r\n  let result = {}\r\n  let donation = await DonationService.getDonation(id).then((response) => response.data );\r\n  if(donation) result.donation = donation\r\n  if (donation && donation.evalType !== ONLY_ACCEPT_DONATION){\r\n   let classification = await DonationService.getDonationClassification(id).then((response) => response.data);\r\n   result.classification = classification\r\n  }\r\n  setData(result);\r\n};\n")),"\n",a.createElement(n.p,null,"3개 API 중 1개는 잘못된 키값으로 값을 불러 응답이 null 이었는데\r\n웃긴거는 ㅎㅎ 받아온 응답값을 쓰는 곳이 없었따.. ㅎㅎㅎ"))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},i=t(8804);function c(e){return a.createElement(i.Z,e,a.createElement(o,e))}i.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-client-javascript-2022-04-11-javascript-async-await-mdx-b124e4589f85c9752391.js.map