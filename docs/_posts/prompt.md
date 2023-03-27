---
title: test
subtitle: random
date: 2023-03-27
category:
  - code
tag:
  - promt
order: 1
---

# Follow-up Questions

Most of time ChatGPT may not provide a perfect answer on the first try, it has a self-correction ability that allows it to improve its answers. Just ask it to reflect the response or you can give it a little hint/idea you have, ChatGPT usually apologizes and provides a better answer.

## Ask LLMs to critique their outputs and immediately fix their own mistakes

```python
Prompt: 
	- Did xxx meet the assignment?
	- Can you analyze if the response is correct?
	- Are you sure about that?
```

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I saw <a href="https://twitter.com/awjuliani?ref_src=twsrc%5Etfw">@awjuliani</a>'s tweet that LLMs cannot generate a non-rhyming poem. Indeed, GPT-4 does not do it even if I ask it to think carefully <a href="https://t.co/O61PkLMmBV">https://t.co/O61PkLMmBV</a> <a href="https://t.co/faHRfpHB0l">pic.twitter.com/faHRfpHB0l</a></p>— Eric Jang (@ericjang11) <a href="https://twitter.com/ericjang11/status/1639882382437384192?ref_src=twsrc%5Etfw">March 26, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Related paper:
[Reflexion: an autonomous agent with dynamic memory and self-reflection](https://arxiv.org/pdf/2303.11366.pdf)
Here are some takeaways from this page.

- The document proposes Reﬂexion, an approach that endows an agent with dynamic memory and self-reﬂection capabilities to enhance its existing reasoning trace and task-speciﬁc action choice abilities.
- The approach uses a simple heuristic to detect hallucination and inefﬁcient action execution and queries an LLM to reﬂect on its current task, trajectory history, and last reward.
- The approach achieves improved performance on decision-making tasks in AlfWorld environments and knowledge-intensive, search-based question-and-answer tasks in HotPotQA environments.

Reference:
	- [(1) Eric Jang on Twitter: &#34;Instead of finding the perfect prompt for an LLM (let&#39;s think step by step), you can ask LLMs to critique their outputs and immediately fix their own mistakes. Here&#39;s a fun example:&#34; / Twitter](https://twitter.com/ericjang11/status/1639882111338573824)