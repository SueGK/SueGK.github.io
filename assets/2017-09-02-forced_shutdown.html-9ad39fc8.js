const t=JSON.parse('{"key":"v-c914fd10","path":"/posts/2017-09-02-forced_shutdown.html","title":"电脑关机了，第二天一看确又开着的？让系统正常关机！","lang":"zh-CN","frontmatter":{"title":"电脑关机了，第二天一看确又开着的？让系统正常关机！","date":"2017-09-02T00:38:00.000Z","category":["系统"],"tag":["关机"],"order":-5,"description":"电脑晚上明明按下关机键，第二天早上却发现电脑开了一晚上？ 这是因为后台应用程序和 GUI 应用程序在阻止或取消关机，系统未能按正常关机。按下列方法授予系统自动关机权限，就能让系统正常关机。 方法如下： 点击「开始菜单」，搜索「Regedit」，进入注册表编辑器。 打开窗口后，在注册表上方菜单中输入 计算机\\\\HKEY_CURRENT_USER\\\\Control Panel\\\\Desktop。 在右侧窗格中找到 AutoEndTasks 键值，如果没有，则新建一个名为 AutoEndTasks 的「字符串值」，并将键值的数值设为 1。AutoEndTasks 表示自动结束失去响应的程序任务，0 为 false，是默认值，表示不自动结束失去响应的程序；1 为 true，则表示电脑会自动结束失去响应的程序。 查找或创建字符串值 WaitToKillAppTimeout，将数值设为 2000。2000 是毫秒，就是当有没有响应的程序时，等待 2 秒后会自动结束相应程序。","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2017-09-02-forced_shutdown.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"电脑关机了，第二天一看确又开着的？让系统正常关机！"}],["meta",{"property":"og:description","content":"电脑晚上明明按下关机键，第二天早上却发现电脑开了一晚上？ 这是因为后台应用程序和 GUI 应用程序在阻止或取消关机，系统未能按正常关机。按下列方法授予系统自动关机权限，就能让系统正常关机。 方法如下： 点击「开始菜单」，搜索「Regedit」，进入注册表编辑器。 打开窗口后，在注册表上方菜单中输入 计算机\\\\HKEY_CURRENT_USER\\\\Control Panel\\\\Desktop。 在右侧窗格中找到 AutoEndTasks 键值，如果没有，则新建一个名为 AutoEndTasks 的「字符串值」，并将键值的数值设为 1。AutoEndTasks 表示自动结束失去响应的程序任务，0 为 false，是默认值，表示不自动结束失去响应的程序；1 为 true，则表示电脑会自动结束失去响应的程序。 查找或创建字符串值 WaitToKillAppTimeout，将数值设为 2000。2000 是毫秒，就是当有没有响应的程序时，等待 2 秒后会自动结束相应程序。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-04T04:48:42.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"关机"}],["meta",{"property":"article:published_time","content":"2017-09-02T00:38:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-04T04:48:42.000Z"}]]},"headers":[],"git":{"createdTime":1672807722000,"updatedTime":1672807722000,"contributors":[{"name":"SueGK","email":"71711489+SueGK@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.82,"words":545},"filePathRelative":"_posts/2017-09-02-forced_shutdown.md","localizedDate":"2017年9月2日","excerpt":"<p>电脑晚上明明按下关机键，第二天早上却发现电脑开了一晚上？</p>\\n<p>这是因为后台应用程序和 GUI 应用程序在阻止或取消关机，系统未能按正常关机。按下列方法授予系统自动关机权限，就能让系统正常关机。</p>\\n<p><strong>方法如下：</strong></p>\\n<ol>\\n<li>\\n<p>点击「开始菜单」，搜索「Regedit」，进入注册表编辑器。</p>\\n</li>\\n<li>\\n<p>打开窗口后，在注册表上方菜单中输入 <code>计算机\\\\HKEY_CURRENT_USER\\\\Control Panel\\\\Desktop</code>。</p>\\n</li>\\n<li>\\n<p>在右侧窗格中找到 <code>AutoEndTasks</code> 键值，如果没有，则新建一个名为 <code>AutoEndTasks</code> 的「字符串值」，并将键值的数值设为 <code>1</code>。AutoEndTasks 表示自动结束失去响应的程序任务，0 为 false，是默认值，表示不自动结束失去响应的程序；1 为 true，则表示电脑会自动结束失去响应的程序。</p>\\n<figure><img src=\\"https://pic3.zhimg.com/v2-c643b9737b35f9dd9a8382c5653e3d3e_r.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n<li>\\n<p>查找或创建字符串值 <code>WaitToKillAppTimeout</code>，将数值设为 <code>2000</code>。2000 是毫秒，就是当有没有响应的程序时，等待 2 秒后会自动结束相应程序。</p>\\n</li>\\n</ol>","autoDesc":true}');export{t as data};
