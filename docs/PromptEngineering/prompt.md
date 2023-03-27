```
---
title: test
subtitle: random
date: 2023-03-27
category:
  - code
tag:
  - promt
order: 
---
```

# Follow-up Questions

Most of time ChatGPT may not provide a perfect answer on the first try, it has a self-correction ability that allows it to improve its answers. Just ask it to reflect the response or you can give it a little hint/idea you have, ChatGPT usually apologizes and provides a better answer.

## Ask LLMs to critique their outputs and immediately fix their own mistakes

```python
Prompt: 
	- Did xxx meet the assignment?
	- Can you analyze if the response is correct?
	- Are you sure about that?
```

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FFemFarm%2FDGyOvm4Bo3.png?alt=media&token=a48c517b-d8a1-40e8-8408-6965a2c3eac6)

Related paper:
[Reflexion: an autonomous agent with dynamic memory and self-reflection](https://arxiv.org/pdf/2303.11366.pdf)
Here are some takeaways from this page.

- The document proposes Reﬂexion, an approach that endows an agent with dynamic memory and self-reﬂection capabilities to enhance its existing reasoning trace and task-speciﬁc action choice abilities.
- The approach uses a simple heuristic to detect hallucination and inefﬁcient action execution and queries an LLM to reﬂect on its current task, trajectory history, and last reward.
- The approach achieves improved performance on decision-making tasks in AlfWorld environments and knowledge-intensive, search-based question-and-answer tasks in HotPotQA environments.

Reference:
	- [(1) Eric Jang on Twitter: &#34;Instead of finding the perfect prompt for an LLM (let&#39;s think step by step), you can ask LLMs to critique their outputs and immediately fix their own mistakes. Here&#39;s a fun example:&#34; / Twitter](https://twitter.com/ericjang11/status/1639882111338573824)
