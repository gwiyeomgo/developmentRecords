"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[1627],{5519:function(e,n,t){t.r(n),t.d(n,{Head:function(){return o.F},default:function(){return E}});var l=t(7294),r=t(1151);function a(e){const n=Object.assign({h1:"h1",p:"p",h3:"h3",a:"a",code:"code",pre:"pre"},(0,r.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.h1,null,"캐싱이 뭐줘?"),"\n",l.createElement(n.p,null,"데이터를 빠르게 일고 처리하기 위해\r\n속도가 빠른 메모리를 활용하여 임시로 데이터를\r\n저장하는 기술"),"\n",l.createElement(n.p,null,"계산된 값을 임시로 저장해\r\n동일한 계산이나 요청이 필요할 때\r\n다시 계사하지 않고 빠르게\r\n결과값만을 이용하기 위해 사용"),"\n",l.createElement(n.p,null,"캐싱은 이런 기술\r\n캐시는 임시 저장소"),"\n",l.createElement(n.p,null,"캐시는 언제 쓰지?\r\n캐시는 컴퓨터에서 많이 사용되며\r\ncpu 캐시:\r\n컴퓨터 동작 할 때 cpu 와 램에 엄청난 속도 차이가 있습니다.\r\ncpu 빠름 램 느려서 기다리는 상황 발생\r\n둘의 속도 차이로 발생하는 지연을 보완"),"\n",l.createElement(n.p,null,"웹 브라우저 캐싱\r\n웹 브라우저에 로딩된 페이지안에 이미지 등\r\n자주 바뀌지 않을 때 이미지를 매번 새로 읽지 않고\r\n캐싱하였다가 재사용"),"\n",l.createElement(n.p,null,"로컬 저장소에 저장하여 해당 페이지 재방문시 다시 사용"),"\n",l.createElement(n.p,null,"DNS 캐싱\r\nDNS 는 naver.com 과 같은 도메인 이름을\r\n실제 서비 ip와 연동해주는 서비스"),"\n",l.createElement(n.p,null,"도메인과 ip 는 자주 바뀌지 않기 때문에\r\n캐싱해두고 요청시 빠르게 응답"),"\n",l.createElement(n.p,null,"데이터베이스 캐싱\r\n버퍼풀 (자주 사용되는 데이터)"),"\n",l.createElement(n.p,null,"CDN\r\n이미지나 동영상 같은 큰 파일들은 cdn 에 캐싱"),"\n",l.createElement(n.p,null,"파일이 크다면 네트워크를 따라 이동하게 되면서\r\n전송에 많은 시간이 소요되기 때문에\r\ncdn 으로 pop 서버에 파일을 옮겨 놓고 사용\r\n네트워크 지한 시간을 줄일 수 잇다"),"\n",l.createElement(n.p,null,"어플리케이션 캐싱\r\n어플리케이션에서 데이터나 계산 결과를 캐싱하여 반복적 작업 최적화"),"\n",l.createElement(n.h1,null,"2022"),"\n",l.createElement(n.h3,null,"배포를 해도 발생하는 버그는 어떻게 해야 할까?"),"\n",l.createElement(n.h3,null,"배경"),"\n",l.createElement(n.p,null,"최근에 사용자가 발생시키는 오류에 대해\r\n전화가 오기전에 미리 대비할 수 있도록\r\n장애 대응을 모니터링 할 수 있는 프로젝트를 진행했다."),"\n",l.createElement(n.p,null,"방법은 에러가 발생했을때\r\n요청,응답,에러스택 정보를\r\ndooray 이슈 등록로 등록되는 시스템이다."),"\n",l.createElement(n.p,null,"처음 적용하고 나서 메일 폭탄을 받았었다\r\n나뿐만 아니라 개발자 모두다 스팸메일을 잔득 받은 것이다."),"\n",l.createElement(n.p,null,"이 상황에 시니어 개발자님은 쓴소리로 스팸이 도는 시스템은 아무도 보지 않는다고\r\n명심하라고 말씀해 주셨다."),"\n",l.createElement(n.p,null,"핫픽스로 에러를 처리해 올리고 싶었지만\r\n이번주에 배포되면 안되는 이슈가 있어서 개발자분들께 양해를 구하고 한주간 다들 같은 메일을 받았다"),"\n",l.createElement(n.p,null,"상당히 속상하고 빨리 처리하고 해결해야 겠다고 느꼈다."),"\n",l.createElement(n.p,null,"배포 당일이 되었고\r\n개발계에서 테스트를 마친 수정된 코드가 배포가 되었다."),"\n",l.createElement(n.p,null,"그런데 같은 에러가 발생했다.\r\n다행이 메일의 숫자는 확 줄었다\r\n(숫자 세어보기)"),"\n",l.createElement(n.p,null,"그리고 100개의 매장중에 10개 미만의 매장에서만 발생했다."),"\n",l.createElement(n.p,null,"에러를 제현하기 위해서\r\n운영계 테스트 계정을 통해 기능을 동작시켰지만 발생하지 않았습니다."),"\n",l.createElement(n.p,null,"클라이언트(전국 매장 pc)의 브라우저 캐시 때문에 사용자들이 버그가 여전히  발생 하는 경우 같다는 생각이 들었다."),"\n",l.createElement(n.p,null,"사용자의 브라우저 캐시를 코드에서 관리할 수 있을까요?"),"\n",l.createElement(n.p,null,"인터넷에서 검색 했을 때 html meta tag 를 추가해 캐시 사용전에  재검증을 하는 방법을 찾았고\r\n적용해 보려고 한다."),"\n",l.createElement(n.h3,null,"참고"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://toss.tech/article/smart-web-service-cache"},"https://toss.tech/article/smart-web-service-cache"),"\r\n",l.createElement(n.a,{href:"https://velog.io/@mgm-dev/%EA%B0%84%EB%9E%B5-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%BA%90%EC%8B%9C%EC%97%90-%EB%8C%80%ED%95%B4"},"https://velog.io/@mgm-dev/%EA%B0%84%EB%9E%B5-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%BA%90%EC%8B%9C%EC%97%90-%EB%8C%80%ED%95%B4")),"\n",l.createElement(n.p,null,"해당 글을 읽고 공부해 봤다."),"\n",l.createElement(n.p,null,"우리의 캐시 유효 기간이 있나?"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"Cache-Control 헤더값")," 응답헤더에 없다.."),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,"(max-age=31536000 이기 때문에, 이 리소스는 1년(31,536,000초)동안 캐시할 수 있다)\r\n\n")),"\n",l.createElement(n.p,null,"재검증?"),"\n",l.createElement(n.p,null,"no-cache?\r\n캐시는 저장하지만 사용하려고 할 때마다 서버에 재검증 요청을 보낸다"),"\n",l.createElement(n.p,null,"토스 기술 블로그를 보니\r\n새로 배포가 이루어 지만 HTML 리소는 바뀔 수 있기 때문에\r\n브라우저는 항상 HTML 파일을 불러올 때 새로운 배포가 있는지 확인하도록\r\n",l.createElement(n.code,null,"Cache-Control"),"값을 ",l.createElement(n.code,null,"max-age=0,s-maxage=31536000")," 을 설정한다고 한다.\r\n(이로써 브라우저는 HTML 파일을 가져올 때마다 서버에 재검증 요청을 보내고, 그 사이에 배포가 있었다면 새로운 HTML 파일을 내려받습니다.)\r\n*변경내용\r\n",l.createElement(n.code,null,"max-age의 최대치인 max-age=31536000"),"\r\n새로 배포가 일어나지 않는 한, 브라우저는 캐시에 저장된 JavaScript 파일을 계속 사용"),"\n",l.createElement(n.h3,null,"어떻게?"),"\n",l.createElement(n.pre,null,l.createElement(n.code,null,' <meta http-equiv="Cache-Control" content="max-age=0,s-maxage=31536000">\n')),"\n",l.createElement(n.p,null,"1년동안 캐시를 유지하지만 배포일어나면 재검증"),"\n",l.createElement(n.h1,null,"참고"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://thewebdev.info/2021/10/03/how-to-clear-browser-cache-in-react/"},"https://thewebdev.info/2021/10/03/how-to-clear-browser-cache-in-react/"),"\r\n",l.createElement(n.a,{href:"https://gahyun-web-diary.tistory.com/16"},"https://gahyun-web-diary.tistory.com/16")),"\n",l.createElement(n.p,null,"캐시를 사용하지 않는 방법도 있긴하다"),"\n",l.createElement(n.p,null,l.createElement(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Cache-Control"},"https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Cache-Control")),"\n",l.createElement(n.p,null,"캐시사용 x\r\n캐쉬가 되지 않게 하는 속성으로 매번 새로운 페이지를 서버에 접속해서 가져옴"),"\n",l.createElement(n.p,null,l.createElement(n.code,null,"<meta http-equiv='cache-control' content='no-cache'>"),"\r\n// not always leads to immediate resource expiration\r\n//캐쉬 완료(파기)시간 정의.\r\n단위는 분단위\r\n즉, 0분이 지나면 캐쉬를 지우고 새롭게 다시 읽어온다.\r\n",l.createElement(n.code,null,"<meta http-equiv='expires' content='0'>"),"\r\n//캐쉬가 되지 않게 하는 태그 즉, 매번 새로운 페이지를 열게된다.\r\n",l.createElement(n.code,null,"<meta http-equiv='pragma' content='no-cache'>")),"\n",l.createElement(n.p,null,"하지만\r\nFor this specific case what you can do is to tell the browser not to cache your page, by using below meta tag inside  tag: This is temporary solution and for permanent solution, you should handle this using appropriate headers sent by your API/backend."),"\n",l.createElement(n.p,null,"(",l.createElement(n.a,{href:"https://stackoverflow.com/questions/51207570/how-to-clear-browser-cache-in-reactjs"},"https://stackoverflow.com/questions/51207570/how-to-clear-browser-cache-in-reactjs"),")\r\napi 에서 설정하는 거는 이후에..\r\n",l.createElement(n.code,null,".setHeader('Cache-Control', 'no-cache')")),"\n",l.createElement(n.h1),"\n",l.createElement(n.p,null,"캐쉬의 파기를 위한 속성으로는 Expires 외에 아래와 같은 다양한 방법이 있습니다. 보통 개발 시에는 캐쉬가 있으면 수정사항이 반영이 안되기 때문에 캐쉬를 없애는 것을 중요하게 생각을 하는데 서비스가 안정화 된 운영 시에는 캐쉬를 지정하여 페이지 속도를 최적화 하는 것이 좋습니다.\r\n그렇기 때문에 SEO Friend에서는 캐쉬를 설정하는 것을 권장합니다\r\n",l.createElement(n.a,{href:"https://www.next-t.co.kr/%EA%B2%80%EC%83%89%EC%97%94%EC%A7%84%EC%B5%9C%EC%A0%81%ED%99%94-SEO-%ED%85%8C%ED%81%AC%EB%8B%88%EC%BB%ACSEO-%EB%A9%94%ED%83%80%ED%83%9C%EA%B7%B8-metatags-expires-%EC%86%8D%EC%84%B1"},"https://www.next-t.co.kr/%EA%B2%80%EC%83%89%EC%97%94%EC%A7%84%EC%B5%9C%EC%A0%81%ED%99%94-SEO-%ED%85%8C%ED%81%AC%EB%8B%88%EC%BB%ACSEO-%EB%A9%94%ED%83%80%ED%83%9C%EA%B7%B8-metatags-expires-%EC%86%8D%EC%84%B1")),"\n",l.createElement(n.p,null,"expire 0 ? -1?\r\n",l.createElement(n.a,{href:"https://stackoverflow.com/questions/11357430/http-expires-header-values-0-and-1"},"https://stackoverflow.com/questions/11357430/http-expires-header-values-0-and-1")),"\n",l.createElement(n.p,null,"잘정리됨\r\n",l.createElement(n.a,{href:"https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=kkadda&logNo=110123278506"},"https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=kkadda&logNo=110123278506")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},o=t(8804);function E(e){return l.createElement(o.Z,e,l.createElement(c,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-etc-2022-03-04-etc-cache-mdx-20af34914dd1077e33a6.js.map