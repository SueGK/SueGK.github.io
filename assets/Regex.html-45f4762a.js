import{ad as e,G as o,H as p,E as n,S as a,N as t,ae as c,W as r}from"./framework-48bbaeac.js";const d={},l=n("p",null,"正则表达式，又称规则表达式，是使用单个字符串来描述、匹配一系列匹配某个句法规则的字符串，通常被用来检索、替换那些符合某个模式（规则）的文本。",-1),i={href:"https://deerchao.cn/tutorials/regex/regex.htm",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md",target:"_blank",rel:"noopener noreferrer"},k=c(`<h2 id="实用表达式" tabindex="-1"><a class="header-anchor" href="#实用表达式" aria-hidden="true">#</a> 实用表达式</h2><p><code>{}</code> 限定符 (表示固定位数)。比如：<code>\\\\d{5}</code> 匹配长度有 5 个的数字，<code>\\\\d{1,5}</code> 最少匹配 1 个，最长匹配 5 个数字。</p><p><code>.{30,}</code> 指匹配长度 30 以上的任意字符串。</p><p><code>[aeiou]</code> 匹配中括号中任意字符。 <code>[^aeiou]</code> 匹配除了 aeiou 这几个字母以外的任意字符。</p><p>HTTP 链接匹配：<code>https?://[^\\s&quot;。？,，?)#]+</code>，句尾不含空格、中英文逗号、中文句号、问号，仅包含 http 和 https 链接</p><p>万能链接匹配：<code>[a-zA-Z]+://[^\\s&quot;。？,，?)#]+</code> 匹配万能前缀，如 ftp、tencent、lark。</p><p>匹配行：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//匹配含某个字符的行</span>
<span class="token keyword">var</span> ZZMactch <span class="token operator">=</span> <span class="token string">&quot;.*&quot;</span> <span class="token operator">+</span> inputMatch<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&quot;.*&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//匹配不含指定字符的行</span>
<span class="token keyword">var</span> ZZMactch <span class="token operator">=</span> <span class="token string">&quot;^((?!&quot;</span><span class="token operator">+</span>inputMatch<span class="token punctuation">.</span>value<span class="token operator">+</span><span class="token string">&quot;).)*$&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//匹配所有不包括 CSDN 的行</span>
<span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">!</span><span class="token constant">CSDN</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token operator">*</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配不同文本组，<code>id=</code> 或 <code>contentId=</code> 后的多个数字符号</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span>id<span class="token operator">=</span><span class="token punctuation">)</span>\\d<span class="token operator">*</span>
<span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span><span class="token punctuation">[</span><span class="token operator">?</span><span class="token operator">&amp;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>id<span class="token operator">|</span>contentId<span class="token punctuation">)</span><span class="token operator">=</span><span class="token punctuation">)</span>\\d<span class="token operator">+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>^((?!abc).)*admin((?!abc).)*$</code> 匹配 不包含 abc 但包含 admin 的字符串，匹配整行。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p><code>((?!social.tmall.com)(?!ugc/detail.html).)*$</code> 匹配不包含 <code>social.tmall.com</code> 和 <code>ugc/detail.html</code> 的字符串，匹配整行。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p><code>[₳$¢₴€₤￥＄《]([a-zA-Z0-9]{11})[₳$¢₴€₤￥＄《]</code> 匹配淘口令，<code>[]</code> 指中内容任意匹配一项皆可。</p><h3 id="前后匹配" tabindex="-1"><a class="header-anchor" href="#前后匹配" aria-hidden="true">#</a> 前后匹配</h3><p>前后匹配，前后元素只能出现一次，否则容易覆盖过多。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//匹配任意以 a 开头并以 b 结尾的字符，匹配内容不含 a、b</span>
<span class="token comment">//如果 a 有 n 个，则同一行也会匹配 n 次</span>
<span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">=</span>b<span class="token punctuation">)</span>

<span class="token comment">//如果 b 有 n 个，则匹配最后一个 b；</span>
<span class="token comment">//如果需要匹配第一个 b，则匹配区加懒惰限定符？，代表重复 1 次或更多次，但尽可能少重复</span>
<span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span><span class="token punctuation">.</span><span class="token operator">*</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token operator">+</span><span class="token operator">?</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">=</span>b<span class="token punctuation">)</span>

<span class="token comment">//匹配任意以 a 开头并以 b 结尾的字符，匹配内容包含 a、b</span>
<span class="token function">a</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">=</span>b<span class="token punctuation">)</span>b

<span class="token comment">//匹配字符串中 a 和词组 abc 间的字符，如果 abc 不存在则去尾部</span>
<span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span><span class="token punctuation">.</span><span class="token operator">*</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">=</span>abc<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="正则替换" tabindex="-1"><a class="header-anchor" href="#正则替换" aria-hidden="true">#</a> 正则替换</h3><p>正则全局替换不能带 <code>\\\\</code>，此时用分割替换更方便。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;dogdogdog&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str2 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">dog</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&quot;cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   #全局替换
<span class="token keyword">var</span> str2 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;dog&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> #分割替换
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="表达式修饰符" tabindex="-1"><a class="header-anchor" href="#表达式修饰符" aria-hidden="true">#</a> 表达式修饰符</h2><p>元字符：区分大小写</p><table><thead><tr><th>常用正则代码</th><th>说明</th></tr></thead><tbody><tr><td>.</td><td>匹配除换行符以外的任意字符</td></tr><tr><td>*</td><td>匹配 0 个或多个.(有多少匹配多少，贪婪模式)</td></tr><tr><td>?</td><td>匹配 0 个或 1 个 (至少匹配一个)</td></tr><tr><td>$</td><td>以什么结尾的，如<code>\\\\d+0$</code> (以 0 结尾)</td></tr><tr><td>^</td><td>以什么开头的，如<code>^http</code>匹配以 http 开头的字符串</td></tr><tr><td>\\w</td><td>匹配字母或数字或下划线或汉字</td></tr><tr><td>\\W</td><td>匹配任意不是字母，数字，下划线，汉字的字符</td></tr><tr><td>\\d</td><td>匹配数字</td></tr><tr><td>\\D</td><td>匹配任意非数字的字符</td></tr><tr><td>\\s</td><td>匹配任意的空白符（空格 ,制表符 )</td></tr><tr><td>\\S</td><td>匹配任意不是空白符的字符</td></tr><tr><td>\\r</td><td>回车符</td></tr><tr><td>\\n</td><td>换行符 (一般情况下使用\\r\\n 匹配回车换行)</td></tr><tr><td>\\t</td><td>制表符，Tab</td></tr><tr><td>\\u4e00-\\u9fa5</td><td>非中文</td></tr></tbody></table><p>常用分组语法</p><table><thead><tr><th>分类</th><th>代码/语法</th><th>说明</th></tr></thead><tbody><tr><td>捕获</td><td>(exp)</td><td>匹配 exp，并捕获文本到自动命名的组里</td></tr><tr><td></td><td><code>(?&lt;name&gt;exp)</code></td><td>匹配 exp，并捕获文本到名称为 name 的组里，也可以写成 (?&#39;name&#39;exp)</td></tr><tr><td></td><td>(?:exp)</td><td>匹配 exp，不捕获匹配的文本，也不给此分组分配组号</td></tr><tr><td>零宽断言</td><td>(?=exp)</td><td>匹配 exp 前面的位置</td></tr><tr><td></td><td>(?&lt;=exp)</td><td>匹配 exp 后面的位置</td></tr><tr><td></td><td>(?!exp)</td><td>匹配后面跟的不是 exp 的位置</td></tr><tr><td></td><td>(?&lt;!exp)</td><td>匹配前面不是 exp 的位置</td></tr><tr><td>注释</td><td>(?#comment)</td><td>这种类型的分组不对正则表达式的处理产生任何影响，用于提供注释让人阅读</td></tr></tbody></table><hr class="footnotes-sep">`,25),h={class:"footnotes"},m={class:"footnotes-list"},v={id:"footnote1",class:"footnote-item"},b={href:"https://blog.csdn.net/thewindkee/article/details/52785763",target:"_blank",rel:"noopener noreferrer"},f=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),g={id:"footnote2",class:"footnote-item"},x={href:"https://blog.csdn.net/xiiii/article/details/89450341",target:"_blank",rel:"noopener noreferrer"},_=n("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function q(j,y){const s=r("ExternalLinkIcon");return o(),p("div",null,[l,n("p",null,[a("正则入门："),n("a",i,[a("正则 30 分钟入门"),t(s)]),a("，"),n("a",u,[a("LEARN REGEX 中文版"),t(s)])]),k,n("section",h,[n("ol",m,[n("li",v,[n("p",null,[n("a",b,[a("正则表达式匹配：包含且不包含"),t(s)]),a(),f])]),n("li",g,[n("p",null,[n("a",x,[a("正则表达式匹配不包含某些字符串的技巧"),t(s)]),a(),_])])])])])}const N=e(d,[["render",q],["__file","Regex.html.vue"]]);export{N as default};
