"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[5770],{4836:function(e,n,t){t.r(n),t.d(n,{Head:function(){return m.p},default:function(){return u}});var l=t(6540),a=t(8453);function r(e){const n=Object.assign({h3:"h3",p:"p",a:"a"},(0,a.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h3,null,"카카오 알림톡"),"\n",l.createElement(n.p,null,"카카오톡  비즈메시지 API를 이용하여 발송 가능한 상품\n",l.createElement(n.a,{href:"https://kakaobusiness.gitbook.io/main/ad/bizmessage?x-content-disposition=inline"},"https://kakaobusiness.gitbook.io/main/ad/bizmessage?x-content-disposition=inline")),"\n",l.createElement(n.h3,null,"배경"),"\n",l.createElement(n.p,null,"api 에서  카카오톡  비즈메시지 AP를 호출해서 기부자들에게 알림톡을 보내고 있다.\n버튼을 추가해 링크를 전달하거나\n안내 문구를 보여주고 있다"),"\n",l.createElement(n.p,null,"알림톡을 보내기 위해서는 템플릿을 등록해야 한다.\n템플릿 등록한다."),"\n",l.createElement(n.p,null,"카카오톡 알림톡 템플릿 등록\n=> 템플릿 관리에서 확인"),"\n",l.createElement(n.p,null,"템플릿 코드와 템플릿 내용을 확인한다."),"\n",l.createElement(n.p,null,"해당 링크에서 템플릿 문서들 다운 받을 수 있다."),"\n",l.createElement(n.h3,null,"알림톡을 사용하면서 격은 문제"),"\n",l.createElement(n.p,null,"회원 기부자는 예전에도 기부를 했고 알림톡을 받았습니다.\n그런데\n최근 기부를 하셨을 때 알림톡을 받지 못했습니다.\n재발송 기능으로 다시 보냈지만 알림톡을 받지 못했습니다."),"\n",l.createElement(n.p,null,"이런 문제가 발생해서 인포뱅크에 문의를 했는데요.\n특정 기부건에 관련된 내용을 확인하려면\nmessageId가 필요하다고 합니다."),"\n",l.createElement(n.p,null,"알림톡 성공건수와 전체건수가 다른데요. 실패한 건은 어디서 확인 가능한가요?"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://www.ibizplus.co.kr/dashboard/dashboard/bizday"},"https://www.ibizplus.co.kr/dashboard/dashboard/bizday")),"\n",l.createElement(n.p,null,"경로에서 카카오톡 메시지 사용현황 =>일별통계를 보니\n알림톡에 전체건수와 성공건수가 다르네요."),"\n",l.createElement(n.p,null,"그럼 실패한 건들이 있다는 건가요?\n실패한 건들은 어떤 이유에서 실패된건지 궁금합니다.\n또는 실패한 건들은 어디서 확인 가능할까요?"),"\n",l.createElement(n.p,null,"알림톡 발송 실패시 문자로 받을 수 있도록 mt_failover 를 'Y' 로 추가 설정한다.\n알람톡 발송 후 받은 응답 중 messageId를 데이터베이스에 저장한다."),"\n",l.createElement(n.p,null,"AL : 알림톡, AI : 이미지 알림톡\nFT : 친구톡, FI : 친구톡이미지, FW : 친구톡와이드\n이미지\nBI: 브랜드 톡 이미지, BW: 브랜드 톡 와이드이미\n지\nmsg_type Varchar(32) Y 메시지 타입\nAL : 알림톡, AI : 이미지 알림톡"),"\n",l.createElement(n.p,null,"msg_data Json Y 메시지 발송 필수 데이터\nmsg_attr Json Y 메시지 타입 별 속성 데이터\n알림 톡/친구 톡 메시지 타입 별 따라,\n메시지 발송 시 필요한 데이터가 상이"),"\n",l.createElement(n.h3,null,"20220718"),"\n",l.createElement(n.h3,null,"배경"),"\n",l.createElement(n.p,null,"카카오 알림톡을 기부자에가 보내고 있다.\n카카오 알림톡을 보내기위해 협력업체를 거쳐서 알림톡을 보낸다\n우리 서버에서 메세지 접수 API 요청해 메시지 발송 접수를 한다"),"\n",l.createElement(n.h3,null,"문제"),"\n",l.createElement(n.p,null,"알림톡 발송이 안되는 이유를 알 수 없다"),"\n",l.createElement(n.h3,null,"문서를 찾아보니.."),"\n",l.createElement(n.p,null,"리포트 API(PUSH) 가 존재하면\nmessageId 로 전송을 했을 때 응답 결과를 비동기로 받는다."),"\n",l.createElement(n.h3,null,"20221120"),"\n",l.createElement(n.p,null,"매장소식을 매장 구독자에게 전송하는 기능을 개발시\n알림톡의 친구톡을 사용했다."),"\n",l.createElement(n.p,null,"친구톡의 장점은 템플릿을 등록하지 않고\n코드에서 자유롭게 설정해서 테스트 시간을 줄여준다\n단점은 기본 알림톡보다 조금 더 비싸다"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?l.createElement(n,e,l.createElement(r,e)):r(e)},m=t(7292);function u(e){return l.createElement(m.A,e,l.createElement(c,e))}m.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-network-rest-2021-08-12-rest-kakao-notification-talk-mdx-984062d604fb7439b75d.js.map