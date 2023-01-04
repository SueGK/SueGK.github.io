import{ad as r,G as s,H as o,E as e,S as t,N as i,ae as a,W as l}from"./framework-48bbaeac.js";const c={},d=e("p",null,"LearnData 使用的是 Waline 评论插件，部署简单，有后端管理。评论插件推荐次序为 Waline > Valine > giscus > Gitalk > Gitter。",-1),h=e("h2",{id:"评论插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#评论插件","aria-hidden":"true"},"#"),t(" 评论插件")],-1),u={href:"https://waline.js.org/guide/get-started.html",target:"_blank",rel:"noopener noreferrer"},p={href:"https://github.com/xCss/Valine",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/giscus/giscus",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/duninet/article/details/125280107",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/gitalk/gitalk",target:"_blank",rel:"noopener noreferrer"},b={href:"https://gitter.im/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://boardgame.io/documentation/#/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://itchef.github.io/regauge/#/",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"waline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#waline","aria-hidden":"true"},"#"),t(" Waline")],-1),x=e("p",null,"Waline 支持 Akismet 反垃圾评论和免注册留言，不过匿名留言会带来安全隐患，建议开启评论通知，避免极端情况。Waline 的评论通知支持多种方式，包括 QQ、微信、邮件等，回复评论作者仅支持邮件通知。",-1),G={href:"https://waline.js.org/guide/server/notification.html",target:"_blank",rel:"noopener noreferrer"},y={href:"https://waline.js.org/reference/server.html",target:"_blank",rel:"noopener noreferrer"},q=a(`<p>目前 <code>*.vercel.app</code> 域名已经被 DNS 污染，会出现「无法加载评论」，国内使用建议绑定自定义域名，域名对备案暂无硬性要求。</p><h2 id="gitalk" tabindex="-1"><a class="header-anchor" href="#gitalk" aria-hidden="true">#</a> Gitalk</h2><p>Gitalk 是轻量化的评论组件，用户必须登录 github 才能评论，适合项目类使用。</p><p><code>https://github.com/settings/developers</code> 页面管理已建的应用，获取 Client ID 和 Client secrets，修改应用链接。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>将以下代码放入 docsify 页面中，即可启动 Gitalk：</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.css&quot;&gt;

&lt;script src=&quot;https://lf3-cdn-tos.bytecdntp.com/cdn/expire-1-y/docsify/4.12.2/plugins/gitalk.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-y/gitalk/1.7.2/gitalk.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
    /* 使用下面的 Javascript 代码生成 gitalk 插件 */
    const gitalk = new Gitalk({
        clientID: &#39;2f3da234d27ed9a7c290&#39;,
        clientSecret: &#39;d64c45594858477fff0c234c3ed3947a53b0a9ac&#39;,
        repo: &#39;docsifytalk&#39;,        //仓库名称 (GitHub repo)
        owner: &#39;rockbenben&#39;,        //仓库拥有者 (GitHub repo owner)
        admin: [&#39;rockbenben&#39;],      //仓库所有者和协作者。（对此存储库具有写访问权的用户）
        // id: location.pathname,   // Ensure uniqueness and length less than 50
        distractionFreeMode: false  // Facebook-like distraction free mode
    })
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Gitalk 缺点：</p><ul><li>每次有新页面时，都需要登录 github 初始化评论区。</li><li>域名不能改变，Homepage URL 和 Authorization callback URL 需与你的 Gitalk 页面一致，否则页面会报错，提示初始化，无法登录 github。</li></ul><hr class="footnotes-sep">`,9),V={class:"footnotes"},w={class:"footnotes-list"},W={id:"footnote1",class:"footnote-item"},L={href:"https://blog.csdn.net/qq_39052513/article/details/108291272",target:"_blank",rel:"noopener noreferrer"},H=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function N(C,E){const n=l("ExternalLinkIcon");return s(),o("div",null,[d,h,e("ul",null,[e("li",null,[e("a",u,[t("Waline"),i(n)]),t("：基于 Valine 衍生的简洁、安全的评论系统，部署到 Vercel，可匿名互动，导出评论内容，支持文章表情互动。")]),e("li",null,[e("a",p,[t("Valine"),i(n)]),t("：快速、简洁且高效的无后端评论系统，可匿名互动。")]),e("li",null,[e("a",g,[t("giscus"),i(n)]),t("：基于 github discussion，近似于论坛。查看 "),e("a",f,[t("配置方法"),i(n)]),t("。")]),e("li",null,[e("a",_,[t("Gitalk"),i(n)]),t("：基于 github commit，需配置独立库用于存储评论。")]),e("li",null,[e("a",b,[t("Gitter"),i(n)]),t("：要登录的公共聊天室。样例如："),e("a",m,[t("boardgame"),i(n)]),t("，"),e("a",v,[t("regauge"),i(n)]),t("。")])]),k,x,e("p",null,[t("Vercel 项目中选择「Overview」>「Settings」>「Environment Variables」，然后按照 "),e("a",G,[t("Waline 评论通知"),i(n)]),t(" 配置所需环境变量。如果需要 Webhook 等更多通知方式，则查看 "),e("a",y,[t("Waline 服务端配置"),i(n)]),t("。配置成功后，选择「Overview」>「Deployments」，进行 Redeploy，重新部署后环境变量和评论通知方会生效。")]),q,e("section",V,[e("ol",w,[e("li",W,[e("p",null,[e("a",L,[t("超 Nice 的评论组件 —— Gitalk"),i(n)]),t(),H])])])])])}const D=r(c,[["render",N],["__file","Comments.html.vue"]]);export{D as default};
