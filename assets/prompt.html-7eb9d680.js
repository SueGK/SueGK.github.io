import{_ as s,Y as i,Z as o,$ as e,a0 as t,a1 as n,a2 as r,F as l}from"./framework-cef54de9.js";const c={},p=r(`<h1 id="follow-up-questions" tabindex="-1"><a class="header-anchor" href="#follow-up-questions" aria-hidden="true">#</a> Follow-up Questions</h1><p>Most of time ChatGPT may not provide a perfect answer on the first try, it has a self-correction ability that allows it to improve its answers. Just ask it to reflect the response or you can give it a little hint/idea you have, ChatGPT usually apologizes and provides a better answer.</p><h2 id="ask-llms-to-critique-their-outputs-and-immediately-fix-their-own-mistakes" tabindex="-1"><a class="header-anchor" href="#ask-llms-to-critique-their-outputs-and-immediately-fix-their-own-mistakes" aria-hidden="true">#</a> Ask LLMs to critique their outputs and immediately fix their own mistakes</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Prompt<span class="token punctuation">:</span> 
	<span class="token operator">-</span> Did xxx meet the assignment?
	<span class="token operator">-</span> Can you analyze <span class="token keyword">if</span> the response <span class="token keyword">is</span> correct?
	<span class="token operator">-</span> Are you sure about that?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FFemFarm%2FDGyOvm4Bo3.png?alt=media&amp;token=a48c517b-d8a1-40e8-8408-6965a2c3eac6" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,5),d={href:"https://arxiv.org/pdf/2303.11366.pdf",target:"_blank",rel:"noopener noreferrer"},u=e("ul",null,[e("li",null,"The document proposes Reﬂexion, an approach that endows an agent with dynamic memory and self-reﬂection capabilities to enhance its existing reasoning trace and task-speciﬁc action choice abilities."),e("li",null,"The approach uses a simple heuristic to detect hallucination and inefﬁcient action execution and queries an LLM to reﬂect on its current task, trajectory history, and last reward."),e("li",null,"The approach achieves improved performance on decision-making tasks in AlfWorld environments and knowledge-intensive, search-based question-and-answer tasks in HotPotQA environments.")],-1),h={href:"https://twitter.com/ericjang11/status/1639882111338573824",target:"_blank",rel:"noopener noreferrer"};function m(f,k){const a=l("ExternalLinkIcon");return i(),o("div",null,[p,e("p",null,[t("Related paper: "),e("a",d,[t("Reflexion: an autonomous agent with dynamic memory and self-reflection"),n(a)]),t(" Here are some takeaways from this page.")]),u,e("p",null,[t("Reference: - "),e("a",h,[t(`(1) Eric Jang on Twitter: "Instead of finding the perfect prompt for an LLM (let's think step by step), you can ask LLMs to critique their outputs and immediately fix their own mistakes. Here's a fun example:" / Twitter`),n(a)])])])}const y=s(c,[["render",m],["__file","prompt.html.vue"]]);export{y as default};
