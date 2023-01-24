const e=JSON.parse(`{"key":"v-167c6626","path":"/code/git/git.html","title":"Undo changes","lang":"en-US","frontmatter":{"description":"$ git add -h usage: git add [&lt;options&gt;] [--] &lt;pathspec&gt;... -n, --dry-run dry run -v, --verbose be verbose -i, --interactive interactive picking -p, --patch select hunks interactively -e, --edit edit current diff and apply -f, --force allow adding otherwise ignored files -u, --update update tracked files --renormalize renormalize EOL of tracked files (implies -u) -N, --intent-to-add record only the fact that the path will be added later -A, --all add changes from all tracked and untracked files --ignore-removal ignore paths removed in the working tree (same as --no-all) --refresh don't add, only refresh the index --ignore-errors just skip files which cannot be added because of errors --ignore-missing check if - even missing - files are ignored in dry run --chmod (+|-)x override the executable bit of the listed files","head":[["meta",{"property":"og:url","content":"https://suegk.github.io/code/git/git.html"}],["meta",{"property":"og:site_name","content":"Digest Today"}],["meta",{"property":"og:title","content":"Undo changes"}],["meta",{"property":"og:description","content":"$ git add -h usage: git add [&lt;options&gt;] [--] &lt;pathspec&gt;... -n, --dry-run dry run -v, --verbose be verbose -i, --interactive interactive picking -p, --patch select hunks interactively -e, --edit edit current diff and apply -f, --force allow adding otherwise ignored files -u, --update update tracked files --renormalize renormalize EOL of tracked files (implies -u) -N, --intent-to-add record only the fact that the path will be added later -A, --all add changes from all tracked and untracked files --ignore-removal ignore paths removed in the working tree (same as --no-all) --refresh don't add, only refresh the index --ignore-errors just skip files which cannot be added because of errors --ignore-missing check if - even missing - files are ignored in dry run --chmod (+|-)x override the executable bit of the listed files"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-04T05:09:10.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:modified_time","content":"2023-01-04T05:09:10.000Z"}]]},"headers":[{"level":2,"title":"git init","slug":"git-init","link":"#git-init","children":[{"level":3,"title":".Git Directory Contents","slug":"git-directory-contents","link":"#git-directory-contents","children":[]},{"level":3,"title":"Further Research","slug":"further-research","link":"#further-research","children":[]}]},{"level":2,"title":"git clone","slug":"git-clone","link":"#git-clone","children":[{"level":3,"title":"Git Clone Recap","slug":"git-clone-recap","link":"#git-clone-recap","children":[]},{"level":3,"title":"Helpful Links","slug":"helpful-links","link":"#helpful-links","children":[]}]},{"level":2,"title":"git status","slug":"git-status","link":"#git-status","children":[{"level":3,"title":"Explanation","slug":"explanation","link":"#explanation","children":[]},{"level":3,"title":"Helpful Links","slug":"helpful-links-1","link":"#helpful-links-1","children":[]}]},{"level":2,"title":"git log","slug":"git-log","link":"#git-log","children":[{"level":3,"title":"Navigating The Log","slug":"navigating-the-log","link":"#navigating-the-log","children":[]}]},{"level":2,"title":"git log --oneline","slug":"git-log-oneline","link":"#git-log-oneline","children":[]},{"level":2,"title":"git log --stat","slug":"git-log-stat","link":"#git-log-stat","children":[]},{"level":2,"title":"git log -p","slug":"git-log-p","link":"#git-log-p","children":[{"level":3,"title":"Annotated git log -p Output","slug":"annotated-git-log-p-output","link":"#annotated-git-log-p-output","children":[]},{"level":3,"title":"Further Research","slug":"further-research-1","link":"#further-research-1","children":[]}]},{"level":2,"title":"git log -p --stat","slug":"git-log-p-stat","link":"#git-log-p-stat","children":[]},{"level":2,"title":"git log -p -w","slug":"git-log-p-w","link":"#git-log-p-w","children":[]},{"level":2,"title":"git log -p SHA / git show SHA","slug":"git-log-p-sha-git-show-sha","link":"#git-log-p-sha-git-show-sha","children":[]},{"level":2,"title":"git log --oneline --graph --all","slug":"git-log-oneline-graph-all","link":"#git-log-oneline-graph-all","children":[]},{"level":2,"title":"git add","slug":"git-add","link":"#git-add","children":[{"level":3,"title":"Stage Remaining Files","slug":"stage-remaining-files","link":"#stage-remaining-files","children":[]},{"level":3,"title":"The Period .","slug":"the-period","link":"#the-period","children":[]}]},{"level":2,"title":"git commit","slug":"git-commit","link":"#git-commit","children":[{"level":3,"title":"Further Research","slug":"further-research-2","link":"#further-research-2","children":[]},{"level":3,"title":"Bypass The Editor With The -m Flag","slug":"bypass-the-editor-with-the-m-flag","link":"#bypass-the-editor-with-the-m-flag","children":[]},{"level":3,"title":"Good commit message","slug":"good-commit-message","link":"#good-commit-message","children":[]},{"level":3,"title":"Explain the Why","slug":"explain-the-why","link":"#explain-the-why","children":[]}]},{"level":2,"title":"git diff","slug":"git-diff","link":"#git-diff","children":[{"level":3,"title":"Further Research","slug":"further-research-3","link":"#further-research-3","children":[]}]},{"level":2,"title":"git ignore","slug":"git-ignore","link":"#git-ignore","children":[{"level":3,"title":"Further Research","slug":"further-research-4","link":"#further-research-4","children":[]}]},{"level":2,"title":"Globbing Crash Course","slug":"globbing-crash-course","link":"#globbing-crash-course","children":[]},{"level":2,"title":"git tag","slug":"git-tag","link":"#git-tag","children":[{"level":3,"title":"tag the most recent commit","slug":"tag-the-most-recent-commit","link":"#tag-the-most-recent-commit","children":[]},{"level":3,"title":"Adding A Tag To A Past Commit","slug":"adding-a-tag-to-a-past-commit","link":"#adding-a-tag-to-a-past-commit","children":[]},{"level":3,"title":"Further Research","slug":"further-research-5","link":"#further-research-5","children":[]}]},{"level":2,"title":"git tag -d","slug":"git-tag-d","link":"#git-tag-d","children":[]},{"level":2,"title":"git branch","slug":"git-branch","link":"#git-branch","children":[{"level":3,"title":"change branch name","slug":"change-branch-name","link":"#change-branch-name","children":[]}]},{"level":2,"title":"Git Branch Recap","slug":"git-branch-recap","link":"#git-branch-recap","children":[{"level":3,"title":"Further Research","slug":"further-research-6","link":"#further-research-6","children":[]}]},{"level":2,"title":"git checkout","slug":"git-checkout","link":"#git-checkout","children":[{"level":3,"title":"git checkout -b","slug":"git-checkout-b","link":"#git-checkout-b","children":[]}]},{"level":2,"title":"merging","slug":"merging","link":"#merging","children":[]},{"level":2,"title":"git merge","slug":"git-merge","link":"#git-merge","children":[{"level":3,"title":"Fast-forward Merge","slug":"fast-forward-merge","link":"#fast-forward-merge","children":[]},{"level":3,"title":"Regular merge","slug":"regular-merge","link":"#regular-merge","children":[]},{"level":3,"title":"Merge Recap","slug":"merge-recap","link":"#merge-recap","children":[]},{"level":3,"title":"Further Research","slug":"further-research-7","link":"#further-research-7","children":[]}]},{"level":2,"title":"merge conflicts","slug":"merge-conflicts","link":"#merge-conflicts","children":[{"level":3,"title":"Merge Conflict Output Explained","slug":"merge-conflict-output-explained","link":"#merge-conflict-output-explained","children":[]},{"level":3,"title":"Merge Conflict Indicators Explanation","slug":"merge-conflict-indicators-explanation","link":"#merge-conflict-indicators-explanation","children":[]},{"level":3,"title":"Resolving A Merge Conflict","slug":"resolving-a-merge-conflict","link":"#resolving-a-merge-conflict","children":[]},{"level":3,"title":"Merge Conflict Recap","slug":"merge-conflict-recap","link":"#merge-conflict-recap","children":[]},{"level":3,"title":"Further Research","slug":"further-research-8","link":"#further-research-8","children":[]}]},{"level":2,"title":"Changing The Last Commit  git commit --amend","slug":"changing-the-last-commit-git-commit-amend","link":"#changing-the-last-commit-git-commit-amend","children":[{"level":3,"title":"Add Forgotten Files To Commit","slug":"add-forgotten-files-to-commit","link":"#add-forgotten-files-to-commit","children":[]}]},{"level":2,"title":"Reverse previous commit git revert  SHA","slug":"reverse-previous-commit-git-revert-sha","link":"#reverse-previous-commit-git-revert-sha","children":[{"level":3,"title":"Further Research","slug":"further-research-9","link":"#further-research-9","children":[]}]},{"level":2,"title":"Reset(erase) commit","slug":"reset-erase-commit","link":"#reset-erase-commit","children":[{"level":3,"title":"Relative Commit References","slug":"relative-commit-references","link":"#relative-commit-references","children":[]}]},{"level":2,"title":"git reset","slug":"git-reset","link":"#git-reset","children":[{"level":3,"title":"Git Reset's Flags","slug":"git-reset-s-flags","link":"#git-reset-s-flags","children":[]},{"level":3,"title":"Reset's --mixed Flag","slug":"reset-s-mixed-flag","link":"#reset-s-mixed-flag","children":[]},{"level":3,"title":"Reset's --soft Flag","slug":"reset-s-soft-flag","link":"#reset-s-soft-flag","children":[]},{"level":3,"title":"Reset's --hard Flag","slug":"reset-s-hard-flag","link":"#reset-s-hard-flag","children":[]},{"level":3,"title":"Further Research","slug":"further-research-10","link":"#further-research-10","children":[]}]},{"level":2,"title":"Expand On Your Git Skills","slug":"expand-on-your-git-skills","link":"#expand-on-your-git-skills","children":[]},{"level":2,"title":"Add remote connections","slug":"add-remote-connections","link":"#add-remote-connections","children":[]},{"level":2,"title":"Set a URL to a remote","slug":"set-a-url-to-a-remote","link":"#set-a-url-to-a-remote","children":[]},{"level":2,"title":"Pull in changes","slug":"pull-in-changes","link":"#pull-in-changes","children":[]},{"level":2,"title":"View remote addresses","slug":"view-remote-addresses","link":"#view-remote-addresses","children":[]},{"level":2,"title":"Push changes","slug":"push-changes","link":"#push-changes","children":[]},{"level":2,"title":"Delete a remote branch","slug":"delete-a-remote-branch","link":"#delete-a-remote-branch","children":[]},{"level":2,"title":"fork and clone","slug":"fork-and-clone","link":"#fork-and-clone","children":[]}],"git":{"createdTime":1672808950000,"updatedTime":1672808950000,"contributors":[{"name":"SueGK","email":"71711489+SueGK@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":19.43,"words":5828},"filePathRelative":"code/git/git.md","localizedDate":"January 4, 2023","excerpt":"<div class=\\"language-console line-numbers-mode\\" data-ext=\\"console\\"><pre class=\\"language-console\\"><code>$ git add -h\\nusage: git add [&lt;options&gt;] [--] &lt;pathspec&gt;...\\n\\n    -n, --dry-run         dry run\\n    -v, --verbose         be verbose\\n\\n    -i, --interactive     interactive picking\\n    -p, --patch           select hunks interactively\\n    -e, --edit            edit current diff and apply\\n    -f, --force           allow adding otherwise ignored files\\n    -u, --update          update tracked files\\n    --renormalize         renormalize EOL of tracked files (implies -u)\\n    -N, --intent-to-add   record only the fact that the path will be added later\\n    -A, --all             add changes from all tracked and untracked files\\n    --ignore-removal      ignore paths removed in the working tree (same as --no-all)\\n    --refresh             don't add, only refresh the index\\n    --ignore-errors       just skip files which cannot be added because of errors\\n    --ignore-missing      check if - even missing - files are ignored in dry run\\n    --chmod (+|-)x        override the executable bit of the listed files\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
