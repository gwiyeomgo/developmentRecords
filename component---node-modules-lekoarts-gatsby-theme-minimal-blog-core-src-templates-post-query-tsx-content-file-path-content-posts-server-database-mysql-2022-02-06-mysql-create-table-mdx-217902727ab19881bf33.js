"use strict";(self.webpackChunkgwiyeom_blog=self.webpackChunkgwiyeom_blog||[]).push([[9030],{2891:function(e,n,t){t.r(n),t.d(n,{Head:function(){return u.p},default:function(){return o}});var a=t(6540),l=t(8453);function r(e){const n=Object.assign({h3:"h3",p:"p",pre:"pre",code:"code"},(0,l.RP)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h3,null,"배경"),"\n",a.createElement(n.p,null,"1년동안 플랫폼이 많이 커졌다\ndb테이블도 많아지고 erd로 관리되고 있다"),"\n",a.createElement(n.p,null,"해당 플랫폼의 기능들또한 다른 용도로 개선하거나 신규 기능이 추가되면서\n새로운 table이 필요하다\nex)\n현재 상세페이지에서\n취소버튼,전환버튼을 클릭해서 사용자가 상태를 바꾼다\n누가 상태를 변경했는지는 table의 updated_by 로 알 수 있지만\n정확인 이유는 알 수 없다"),"\n",a.createElement(n.p,null,"그래서 상태 이력에 따라 메모를 남기는 table을 추가하기로 했다\n이 작업으로 기존 api들도 수정했다."),"\n",a.createElement(n.h3,null,"추가된 table"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-sql"},"CREATE TABLE IF NOT EXISTS `status_revisions_memo`\n(\n    `id`               INT          NOT NULL COMMENT 'donation_status_revisions_id' ,\n    `note`             VARCHAR(50)  NOT NULL COMMENT 'note',\n    `created`          JSON         NOT NULL,\n    `updated`          JSON         NOT NULL,\n    `deleted_at`       DATETIME     NULL,\n    PRIMARY KEY (`id`),\n    FOREIGN KEY (`id`)\n    REFERENCES `status_revisions` (`id`)\n);\n")))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,l.RP)(),e.components);return n?a.createElement(n,e,a.createElement(r,e)):r(e)},u=t(7292);function o(e){return a.createElement(u.A,e,a.createElement(c,e))}u.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-server-database-mysql-2022-02-06-mysql-create-table-mdx-217902727ab19881bf33.js.map