"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[7211],{9649:function(e,n,t){t.r(n),t.d(n,{Head:function(){return i.F},default:function(){return c}});var a=t(7294),r=t(1151);function l(e){const n=Object.assign({h3:"h3",p:"p",a:"a",h1:"h1",pre:"pre",code:"code"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h3,null,"async  await"),"\n",a.createElement(n.h3,null,"비동기란?"),"\n",a.createElement(n.p,null,"특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하하는 자바스크립트의 특성\r\n",a.createElement(n.a,{href:"https://it-eldorado.tistory.com/86"},"비동기 작업의 원리")),"\n",a.createElement(n.h3,null,"에러"),"\n",a.createElement(n.p,null,"UnhandledPromiseRejection\r\n에러 메세지 확인"),"\n",a.createElement(n.h1,null,"찾아보니"),"\n",a.createElement(n.p,null,"1.asnyc/await을 사용한 함수는 promise를 반환한다는 것을 알게되었다.\r\n2.  async 키워드를 사용한 함수의 경우\r\ntry "," catch"," 로 애러 핸들안해줘서 발생"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"DonationService.getDonation(id).then((response) => {\r\n  if (response.data && response.data.evalType !== ONLY_ACCEPT_DONATION){\r\n    DonationService.getDonationClassification(id).then((classification) => {\r\n       setData({\r\n                classification:classification.data,\r\n                donation:response.data\r\n                });\r\n    });\r\n  }\r\n})\n")),"\n",a.createElement(n.p,null,"이 코드는 기부 상세 화면에서 처음에 기부 데이텉를 가져오는 코드입니다.\r\n기부 데이터의 타입이 접수일경우 setData 를 해주지 않기 때문에 흰 화면이 나오는 문제가 발생했습니다."),"\n",a.createElement(n.p,null,"어떻게 개선할 수 있을 까요?"),"\n",a.createElement(n.p,null,"3개의 API 를 Call 하는 경우\r\n우선 기부 데이터가 있다면 setData 를 써서 data 에 값을 저장해야 합니다. 따라서\r\n처음 호출하는 부분만 써보면"),"\n",a.createElement(n.pre,null,a.createElement(n.code,null,"const load =  async () => {\r\n  setRoles(MemberContext.memberInformation.roles);\r\n  let result = {}\r\n  let donation = await DonationService.getDonation(id).then((response) => response.data );\r\n  if(donation) result.donation = donation\r\n  if (donation && donation.evalType !== ONLY_ACCEPT_DONATION){\r\n   let classification = await DonationService.getDonationClassification(id).then((response) => response.data);\r\n   result.classification = classification\r\n  }\r\n  setData(result);\r\n};\n")),"\n",a.createElement(n.p,null,"3개 API 중 1개는 잘못된 키값으로 값을 불러 응답이 null 이었는데\r\n웃긴거는 ㅎㅎ 받아온 응답값을 쓰는 곳이 없었따.. ㅎㅎㅎ"))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?a.createElement(n,e,a.createElement(l,e)):l(e)},i=t(8804);function c(e){return a.createElement(i.Z,e,a.createElement(o,e))}i.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-client-javascript-2022-04-11-javascript-asnyc-await-mdx-bb8656d9f129e2a24fc7.js.map