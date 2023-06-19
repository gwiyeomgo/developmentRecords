"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9647],{6303:function(e,n,l){l.r(n),l.d(n,{Head:function(){return o.F},default:function(){return m}});var t=l(7294),r=l(1151);function c(e){const n=Object.assign({p:"p",h1:"h1",pre:"pre",code:"code",hr:"hr",ol:"ol",li:"li",a:"a",blockquote:"blockquote",ul:"ul",h2:"h2"},(0,r.ah)(),e.components);return t.createElement(t.Fragment,null,t.createElement(n.p,null,"mac m2 구입후 개발환경을 셋팅했던 기록을 남깁니다."),"\n",t.createElement(n.h1,null,"root 초기 설정"),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,"\t\n\tsudo -s\n\t\t//terminal 에서 현재 접속 계정에 password 입력\n\twhoami \n\t\t//현재 접속한 사람이 누군지 확인 => root\n\tpasswd root \n\t\t//root 비밀번호 초기화\n\texit\n\t\t//접속 끝냄\n\t\n")),"\n",t.createElement(n.hr),"\n",t.createElement(n.h1,null,"Brew 설치"),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"https://brew.sh/index_ko"},"https://brew.sh/index_ko")," 링크에서 설치 명령어를 가져와서 터미널에서 실행"),"\n",t.createElement(n.li,null,"Next steps  이후 실행하라는 명령어를 실행해서 path 지정"),"\n",t.createElement(n.li,null,"brew --version 입력시 버전을 확인"),"\n"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"tip\nzsh: command not found: brew 발생\n터니널에서 ",t.createElement(n.code,null,"vi ~/.zshrc "),"\n",t.createElement(n.code,null,"export PATH=/opt/homebrew/bin:$PATH")," 를 입력하고 수정 후 :wq"),"\n"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"tip\ngrep 리눅스 명령어\nbrew list | grep go\nbrew 로 받은 목록에서 go 찾기\n",t.createElement(n.a,{href:"https://coding-factory.tistory.com/802"},"https://coding-factory.tistory.com/802")),"\n"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"zsh?"),"\n"),"\n",t.createElement(n.hr),"\n",t.createElement(n.h1,null,"iterm 실행"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"iTerm2: ",t.createElement(n.a,{href:"https://iterm2.com/"},"https://iterm2.com/")),"\n",t.createElement(n.li,null,"iTerm 셋팅: ",t.createElement(n.a,{href:"https://gist.github.com/kevin-smets/8568070"},"https://gist.github.com/kevin-smets/8568070")),"\n"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"brew install --cask iterm2")),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"iterm2 터미널 배경색 설정","\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"Preferences > colors > 우측하단 선택박스 => Tango Dark"),"\n",t.createElement(n.li,null,"Preferences > text > 폰트설정"),"\n"),"\n"),"\n"),"\n",t.createElement(n.hr),"\n",t.createElement(n.p,null,"#iterm 꾸미기\n(참고) oh my zsh 삭제하기\n",t.createElement(n.code,null,"source ~/.oh-my-zsh/tools/uninstall.sh")),"\n",t.createElement(n.h2,null,"Oh My Zsh"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.code,null,"git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k")),"\n",t.createElement(n.li,null,t.createElement(n.code,null,"vi ~/.zshrc")," 실행 후 ",t.createElement(n.code,null,'ZSH_THEME="powerlevel10k/powerlevel10k"')),"\n",t.createElement(n.li,null,"zsh-syntax-highlighting 설치\n",t.createElement(n.code,null,"brew install zsh-syntax-highlighting"),"\n다운받고 vi ~/.zshrc 아래처럼 변경"),"\n"),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,"    pligins=( \n    git\n    zsh-syntax-highlighting\n    )\n")),"\n",t.createElement(n.hr),"\n",t.createElement(n.h1,null,"nvm (node 관리 )"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,t.createElement(n.code,null,"brew install nvm")),"\n"),"\n"),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"tip not found\n",t.createElement(n.code,null,"mkdir ~/.nvm"),"\n",t.createElement(n.code,null,"vi ~/.zshrc")," 에 설정"),"\n"),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,'export NVM_DIR="$HOME/.nvm"\n[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \\. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm\n[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \\. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion\n')),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"터미널 새창을 열고 노드 버전을 확인\n",t.createElement(n.code,null,"nvm -v"),"\n",t.createElement(n.code,null,"nvm install 버전 ")," ( 버전을 지정해 설치 가능 (ex)16.10.0 )\n",t.createElement(n.code,null,"nvm list")," 로 설치한 노드의 버전을 확인\n",t.createElement(n.code,null,"nvm use 버전 "),"\n변경 후 node -v 을 통해 현재 버전을 확인\n",t.createElement(n.code,null,"nvm uninstall 버전"),"\n노드 버전 삭제"),"\n"),"\n",t.createElement(n.hr),"\n",t.createElement(n.h1,null,"vs-code"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"brew install --cask visual-studio-code")),"\n",t.createElement(n.h1,null,"goland"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"brew install --cask goland")),"\n",t.createElement(n.h1,null,"go"),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,t.createElement(n.code,null,"brew install go")," 또는 ",t.createElement(n.code,null,"brew install go@1.19")),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,t.createElement(n.code,null,"vi ~/.zshrc")," 실행하고\n",t.createElement(n.code,null,'export PATH="/opt/homebrew/opt/go@1.19/bin:$PATH"')," 추가"),"\n"),"\n",t.createElement(n.li,null,"\n",t.createElement(n.p,null,"go project 를 저장할 위치 설정\n",t.createElement(n.code,null,"mkdir -p $HOME/Documents/go"),"\n",t.createElement(n.code,null,"qvi ~/.zshrc")," 실행하고\n",t.createElement(n.code,null,"export GOPATH=$HOME/Documents/go"),"\n",t.createElement(n.code,null,"export PATH=$PATH:$GOPATH/bin"),"\n셋팅"),"\n"),"\n"),"\n",t.createElement(n.hr),"\n",t.createElement(n.h1,null,"git"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"brew install git"),"\n",t.createElement(n.code,null,"brew info git")),"\n",t.createElement(n.hr),"\n",t.createElement(n.h1,null,"mysql"),"\n",t.createElement(n.p,null,"*",t.createElement(n.code,null,"brew install mysql")," or ",t.createElement(n.code,null,"brew install mysql@8.0")),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.code,null,"mysql -V")),"\n",t.createElement(n.li,null,"서버시작  ",t.createElement(n.code,null,"mysql.server start")),"\n",t.createElement(n.li,null,"초기설정 명령어 실행 -> root 로그인됨 비밀번호 공백상태 -> 비밀번호 설정\n",t.createElement(n.code,null,"mysql_secure_installation"),"\n",t.createElement(n.pre,null,t.createElement(n.code,null,"    Would you like to setup VALIDATE PASSWORD component? no\n    Remove anonymous users? 설치시 익명사용자 제거? yes\n\n    Disallow root login remotely? root 원격 로그인 허용안함 ? yes\n    Remove test database and access to it? 테스트 데이터 삭제 : yes\n    Reload privilege tables now? yes\n")),"\n"),"\n",t.createElement(n.li,null,"접속하기 (root 비밀번호 입력하여 접속)\n",t.createElement(n.code,null,"mysql -u root -p")),"\n"),"\n",t.createElement(n.hr),"\n",t.createElement(n.h1,null,"mysql 워크밴치"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"brew install --cask mysqlworkbench")),"\n",t.createElement(n.blockquote,null,"\n",t.createElement(n.p,null,"tip MySQLWorkbench 응용 프로그램이 예기치 않게 종료되었습니다\nbrew 로 설치했는데 실행 후 종료하면 다음 에러가 발생했다\n찾아보니 8.0.30 받아서 해결\n",t.createElement(n.a,{href:"https://downloads.mysql.com/archives/workbench/"},"https://downloads.mysql.com/archives/workbench/")),"\n"),"\n",t.createElement(n.hr),"\n",t.createElement(n.h1,null,"postman"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"brew install --cask postman")),"\n",t.createElement(n.hr),"\n",t.createElement(n.h1,null,"ssh"),"\n",t.createElement(n.p,null,t.createElement(n.code,null,"ssh-keygen -t -rsa -b 4096"),"\n",t.createElement(n.code,null,"cat ~/.ssh/id_rsa.pub")),"\n",t.createElement(n.p,null,"public key 를 읽어서 gitlab,github 에 추가"),"\n",t.createElement(n.h1,null,"참고"),"\n",t.createElement(n.p,null,t.createElement(n.a,{href:"https://devocean.sk.com/blog/techBoardDetail.do?ID=164027"},"https://devocean.sk.com/blog/techBoardDetail.do?ID=164027")))}var a=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?t.createElement(n,e,t.createElement(c,e)):c(e)},o=l(8804);function m(e){return t.createElement(o.Z,e,t.createElement(a,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-etc-2023-06-19-etc-mac-development-environment-setup-brew-mdx-61b409f3678ed5e427e7.js.map