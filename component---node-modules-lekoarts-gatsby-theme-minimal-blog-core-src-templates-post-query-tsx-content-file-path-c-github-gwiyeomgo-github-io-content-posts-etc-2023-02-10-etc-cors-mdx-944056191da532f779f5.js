"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[2124],{4698:function(e,t,n){n.r(t),n.d(t,{Head:function(){return s.F},default:function(){return i}});var r=n(7294),l=n(1151);function o(e){const t=Object.assign({h1:"h1",p:"p",h3:"h3",blockquote:"blockquote",code:"code",a:"a",hr:"hr",ol:"ol",li:"li",pre:"pre",div:"div",h2:"h2"},(0,l.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.h1,null,"배경"),"\n",r.createElement(t.p,null,"오픈소스 프로젝트에 참가하게 되었고\r\n그 프로젝트 이슈 중 한가지를 진행하기로 했다\r\n담당한 이슈는 cors 정책을 지키지 못해서 발생한 문제로\r\ncors 개념을 공부하고 기록하려고 한다.\r\n최종적으로 cors 를 발생시키는 상황을 이해하고 테스트 코드를 작성하는 것이다."),"\n",r.createElement(t.h3,null,"CORS 는 뭐고 탄생한 이유?"),"\n",r.createElement(t.p,null,"과거 모놀리식 아키텍쳐(Monolithic architecture) 에서는\r\n클라이언트와 서버가 합쳐진 일체형 구조였다.\r\n코드량이 늘어나고 규모가 커져서 관리하기 어려워 졌고 서바랑 클라이언트랑 분리하게 되었다\r\n이때 웹 출처와 웹 서버의 출처가 달라지게 되는 경우도 많아졌다."),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"여기서 출처(Origin)가 뭐지?\r\nURL 구조의 protocol ,hostname, port 를 합친 것을 말하며\r\n보통 port 는 생략되어 보여도 값이 항상 존재한다\r\n(URL 의 구조)\r\n",r.createElement(t.code,null,"[      http      ]://[www.test.org ]:[3000]/[main]? [ page=1]"),"\r\n",r.createElement(t.code,null,"[protocol(Scheme)]   [ host(domain)] [port] [path]  [query string]")),"\n"),"\n",r.createElement(t.p,null,"웹상에 리소스를 서로 주고 받으면서\r\n요청을 제한하는 두가지 정책을 만들게 되었다."),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"1.SOP(Same-Origin Policy) 동일 출처 정책 : 같은 출처에서만 리소스를 공유할 수 있다\r\n2.",r.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"Cross-Origin Resource Sharing (CORS)"),"\r\n다른 출처에 있는 리소스를 가져오는 것은 굉장히 흔한일로\r\n몇 가지 예외 조항에 해당하는 리소스 요청은 출처가 다르더라도 허용하도록 했는데,\r\n그 중 하나가 cors 정책을 지킨 리소스 요청이다."),"\n"),"\n",r.createElement(t.p,null,"정리하면\r\n다른 출처로 리소스를 사용하는것은 SOP 위반\r\n하지만 예외 조항에 해당하는 CORS 로 리소스 요청이 가능하게 되었는데\r\nCORS 정책을 위반하게 되었을 때 에러가 발생한다.\r\n(출처가 일치하지 않으 발생 URL 구조의 protocol ,hostname, port 중 하나라도 일치하지 않으면 발생)"),"\n",r.createElement(t.h3,null,"CORS 와 서버간의 관계는 뭐지?"),"\n",r.createElement(t.p,null,"서버 간 통신을 할 때는 이 정책이 적용되지 않는다\r\n하지만\r\nCORS에 정책은 서버에 저장되며\r\n저장된 CORS 정책을 브라우저에 보내주는 일을 서버가 담당한다"),"\n",r.createElement(t.p,null,"서버에 입력된 출처와 다르면 리소스를 사용할 수 없도록 에러를 반환하고\r\n검증된다면 허용해주는 응답 헤더를 보낸다."),"\n",r.createElement(t.p,null,"즉 브라우저에게 http 요청이 발생하고 CORS 검증이 필요시\r\n서버에게 Preflight Request(사전요청)을 한다\r\n서버는 검증을 하고 문제가 있다면 http 요청을 취소시키고 에러를 발생시킨다"),"\n",r.createElement(t.hr),"\n",r.createElement(t.h3,null,r.createElement(t.a,{href:"https://chuckchoiboi.github.io/cors-tutorial/"},"CORS 3가지 시나리오 체험 사이트")),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"simple Request"),"\n"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"서버가 응답 헤더 'Access-Control-Allow-Origin' 를 추가 안"),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"\tAccess to fetch at 'https://cors-tutorial-server.herokuapp.com/api/simple/no-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request mode to 'no-cors' to fetch the resource with CORS disabled.\n")),"\n",r.createElement(t.ol,{start:"2"},"\n",r.createElement(t.li,null,"잘못된 출처로 요청을 보냈을 때(출처가 서버에 기록된 값과 다름)"),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"\tAccess to fetch at 'https://cors-tutorial-server.herokuapp.com/api/simple/bad-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.website.notcool' that is not equal to the supplied origin. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request mode to 'no-cors' to fetch the resource with CORS disabled.\n")),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"preflight request"),"\n"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"잘못된 출처로 요청을 보냈을 때(출처가 서버에 기록된 값과 다름)"),"\n",r.createElement(t.li,null,'"Access-Control-Allow-Methods" 을 지정하지 않았을'),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"Access to fetch at 'https://cors-tutorial-server.herokuapp.com/api/preflight/bad-method' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: Method DELETE is not allowed by Access-Control-Allow-Methods in preflight response.\n")),"\n",r.createElement(t.ol,{start:"3"},"\n",r.createElement(t.li,null,"preflight request 응답 헤더에는 제대로 작성했는데\r\n실제 simple rqeust 응답 헤더에 다른 출처를 작성\r\n둘이 일치하지 않을떄? 제공된 오리진과 다른 경"),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"Access to fetch at 'https://cors-tutorial-server.herokuapp.com/api/preflight/req-bad-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.website.notcool' that is not equal to the supplied origin. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request mode to 'no-cors' to fetch the resource with CORS disabled.\n")),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"credentialed request 인증과 관현된 정보를 담을 수 있게 해주는 옵션 :credentials 옵션"),"\n"),"\n",r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"credentials 가 include 이어서 서버에서 \"Access-Control-Allow-Origin\" 값을  '*' 로 끌 수 없다"),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"Access to fetch at 'https://cors-tutorial-server.herokuapp.com/api/credentialed/wildcard-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request credentials mode is 'include'.\n")),"\n",r.createElement(t.ol,{start:"2"},"\n",r.createElement(t.li,null,'서버의 응답헤더에 "Access-Control-Allow-Credentials" 값이 true 로 보내지 않았을'),"\n"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"Access to fetch at 'https://cors-tutorial-server.herokuapp.com/api/credentialed/good-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Credentials' header in the response is '' which must be 'true' when the request credentials mode is 'include'.\n")),"\n",r.createElement(t.hr),"\n",r.createElement(t.h1,null,r.createElement(t.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request"},"CORS preflight request Caching")),"\n",r.createElement(t.p,null,r.createElement(t.code,null,"CORS Options Request 를 캐싱하여 HTTP Request 를 줄인다."),"\r\n실제로 오픈소스에 작업해보자"),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://news.hada.io/topic?id=7453"},"preflight 응답을 캐쉬하는 방법")),"\n"),"\n",r.createElement(t.h1,null,"CORS preflight가 발생시키는 문제는 뭔가?"),"\n",r.createElement(t.h1,null,"작업순서"),"\n",r.createElement(t.p,null,"현제 상태를 보니\r\n기본 cors 설정을 하고 있지만\r\n응답이 발생할 때 header 에 추가하는 코드가 없었다"),"\n",r.createElement(t.p,null,"브라우저 제한: Firefox는 값을 86400(24시간)으로 제한하는 반면\r\n모든 Chromium 기반 브라우저는 값을 7200(2시간)으로 제한합니다.\r\n모든 API 요청 전이 아니라 2시간마다 한 번씩 이 요청을 하면\r\n사용자 경험이 크게 향상될 수 있으며\r\n가능한 경우 더 긴 수명이 적용되도록 더 높은 값을 설정하는 것이 쉽게 승리할 수 있습니다.\r\n",r.createElement(t.a,{href:"https://httptoolkit.com/blog/cache-your-cors/"},"https://httptoolkit.com/blog/cache-your-cors/")),"\n",r.createElement(t.h1,null,"작업내용"),"\n",r.createElement(t.p,null,"처음에는 e.Use 에 미들웨어를 추가하고 테스트 케이스를 작성했다"),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,"\ta.gin.Use(cors.New(a.newCorsConfig()))\r\n\ta.gin.Use(middlewares.CORSOptionsRequestCaching(a.newCorsConfig()))\n")),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,'func CORSOptionsRequestCaching(corsConfig cors.Config) gin.HandlerFunc {\r\n\treturn func(c *gin.Context) {\r\n\t\tif c.Request.Method == "OPTIONS" {\r\n\t\t\tc.Writer.Header().Set("Access-Control-Max-Age", fmt.Sprintf("%v", corsConfig.MaxAge))\r\n\t\t\tc.JSON(http.StatusNoContent, "")\r\n\t\t\treturn\r\n\t\t}\r\n\t\tc.Next()\r\n\t}\r\n}\n')),"\n",r.createElement(t.pre,null,r.createElement(t.code,null,'func TestCORSOptionsRequestCaching(t *testing.T) {\r\n\t// given\r\n\trouter := gin.Default()\r\n\tcorsConfig := cors.DefaultConfig()\r\n\tcorsConfig.AllowCredentials = true\r\n\tcorsConfig.AllowOriginFunc = func(origin string) bool {\r\n\t\treturn true\r\n\t}\r\n\tcorsConfig.AllowHeaders = []string{"Origin", "Content-Length", "Content-Type", "Authorization"}\r\n\tcorsConfig.MaxAge = 24 * time.Hour\r\n\r\n\trouter.Use(cors.New(corsConfig))\r\n\trouter.Use(CORSOptionsRequestCaching(corsConfig))\r\n\r\n\t// when\r\n\treq := httptest.NewRequest(http.MethodOptions, "/", nil)\r\n\treq.Header.Add("Origin", "http://testSite.com")\r\n\r\n\tw := httptest.NewRecorder()\r\n\trouter.ServeHTTP(w, req)\r\n\r\n\t// then\r\n\tassert.Equal(t, "86400", w.Header().Get("Access-Control-Max-Age"))\r\n}\n')),"\n",r.createElement(t.p,null,"그런데 테스트 케이스를 작성하고 테스트 하면서기존 cors 라이브러리에\r\nMaxAge 를 설정하면 자동으로 사전요청 캐싱을 해준다는 것을 코드를 보고 알았고\r\n테스트 케이스로 Options 메서드로 요청을 보내니\r\n응답 헤더에 Access-Control-Max-Age 값이 존재했다.\r\n그래서 기존 코드로 돌리고\r\ncorsConfig 값에 MaxAge 값만 ",r.createElement(t.code,null,"24*time.Hours")," 를 설정하는 코드를 작성하고 pull request 를 보냇다."),"\n",r.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 476px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 52.916666666666664%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABi0lEQVQoz5VS2W7cMAz0/78VKJAi2+NzGqTZpF+QoPZasiTqjAt7fU1BbpIe2BQtgYFkyhoOR6ysMTg0LbTVUE6haQ7o+x7zPGOeF3Bs2/YbnnPnomJCZwmud6hjjUQJIQaEEDAM49lLfxb4FVXXddBKw1vCY+7hrINzJAqPx6NgmiYB79d1xd+iKqUghggiQsoZuRSUXOCcQ4wJORfknMH/WWsxjqMoYeJzqL7VNe7vH7Bt61M7P/3hy44IIcSXVtf1dTIh9N6LOlZkjT21TwRrHVSrxEtWuCwL/iUqJjLGClnXGSHhvVJK/PTkpRgTE3kh52IpJfG65AwfIiKfO4/KWwfdKhyHEes8Y5kmLDwyvE6nlR+EFTJ4lJ4f6TRa88s3n1c+Z1BKsCGgc4TWGFlrpSVHosjCGAN66ob3rJIVc1dsW6s0hmFAZfa30IybPdrrL6g/X6Hb36K5ukZ3cwe6+4rH7z3Ik3jNl5nsVQ+7yw/Q7z9BX37E4d1O0FzsJPfw5i3yxe6/hvsHiylJLZtdu2EAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="img"\n        title="img"\n        src="/static/69e1321f9221423cbbc30b3e95c00c92/d9059/preflight_caching_result.png"\n        srcset="/static/69e1321f9221423cbbc30b3e95c00c92/5243c/preflight_caching_result.png 240w,\n/static/69e1321f9221423cbbc30b3e95c00c92/d9059/preflight_caching_result.png 476w"\n        sizes="(max-width: 476px) 100vw, 476px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",r.createElement(t.h2,null,"참고"),"\n",r.createElement(t.p,null,r.createElement(t.a,{href:"https://velog.io/@wiostz98kr/CORS%EC%9D%98-%EB%AA%A8%EB%93%A0-%EA%B2%83"},"https://velog.io/@wiostz98kr/CORS%EC%9D%98-%EB%AA%A8%EB%93%A0-%EA%B2%83"),"\r\n",r.createElement(t.a,{href:"https://velog.io/@guswlsapdlf/CORSCross-Origin-Resource-Sharing"},"https://velog.io/@guswlsapdlf/CORSCross-Origin-Resource-Sharing"),"\r\n",r.createElement(t.a,{href:"https://bourbonkk.tistory.com/63"},"https://bourbonkk.tistory.com/63"),"\r\n",r.createElement(t.a,{href:"https://brownbears.tistory.com/337"},"https://brownbears.tistory.com/337"),"\r\n",r.createElement(t.a,{href:"https://www.webperf.tips/tip/optimizing-cors/"},"https://www.webperf.tips/tip/optimizing-cors/"),"\r\n",r.createElement(t.a,{href:"https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/"},"https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/")))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)},s=n(8804);function i(e){return r.createElement(s.Z,e,r.createElement(c,e))}s.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-c-github-gwiyeomgo-github-io-content-posts-etc-2023-02-10-etc-cors-mdx-944056191da532f779f5.js.map