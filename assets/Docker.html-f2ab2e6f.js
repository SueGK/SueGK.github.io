import{ad as c,G as d,H as i,E as n,S as e,N as o,af as l,ae as a,W as s}from"./framework-48bbaeac.js";const u={},h=n("p",null,"Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。",-1),p=n("h2",{id:"docker-命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#docker-命令","aria-hidden":"true"},"#"),e(" Docker 命令")],-1),k={href:"https://yeasy.gitbook.io/docker_practice/introduction/what",target:"_blank",rel:"noopener noreferrer"},_=a('<ul><li>列出所有容器：<code>sudo docker ps -a</code>。</li><li>停止容器运行：<code>sudo docker stop &lt;CONTAINER ID/NAME&gt;</code>。部分容器名有可能无法识别，最好在容器名称中添加数字。</li><li>删除指定容器：<code>sudo docker rm &lt;CONTAINER ID/NAME&gt;</code>，删除前需先停止容器。</li><li>清理容器（慎重）：<code>sudo docker system prune -a</code>，用于清理磁盘，删除关闭的容器、无用的数据卷和网络，以及无 tag 和没使用的镜像。</li><li>清理数据卷（慎重）：<code>sudo docker volume prune</code>，关闭的容器数据卷会被删除，有可能破坏有用数据，需极度谨慎。</li></ul><h2 id="定制-docker-镜像" tabindex="-1"><a class="header-anchor" href="#定制-docker-镜像" aria-hidden="true">#</a> 定制 Docker 镜像</h2>',2),m={href:"https://blog.csdn.net/a772304419/article/details/123199579",target:"_blank",rel:"noopener noreferrer"},b=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> commit <span class="token punctuation">\\</span>
    <span class="token parameter variable">--message</span> <span class="token string">&quot;基于 Ubuntu 18.04 构建的 Huginn&quot;</span> <span class="token punctuation">\\</span>
    ubuntu <span class="token punctuation">\\</span>
    huginnxubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dockerfile-构建镜像" tabindex="-1"><a class="header-anchor" href="#dockerfile-构建镜像" aria-hidden="true">#</a> Dockerfile 构建镜像</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    build:
      context: /volume1/docker/danmuji
      dockerfile: Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他使用" tabindex="-1"><a class="header-anchor" href="#其他使用" aria-hidden="true">#</a> 其他使用</h2><h3 id="windows-docker" tabindex="-1"><a class="header-anchor" href="#windows-docker" aria-hidden="true">#</a> Windows Docker</h3>`,5),f={href:"https://www.runoob.com/docker/windows-docker-install.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://newzone.top/posts/2022-09-05-stable_diffusion_ai_painting.html#docker-%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,[e("WSL 本地路径为 "),n("code",null,"\\\\wsl.localhost\\"),e("。Windows 本地磁盘挂载在 Linux 的 mnt 目录下，因此 WSL 调用 Windows 文件需先添加 "),n("code",null,"/mnt/"),e(" 前缀，然后把磁盘符号改为小写，并将反斜扛 "),n("code",null,"\\"),e(" 替换为 "),n("code",null,"/"),e("。假设 Windows 文件位于「D:\\Backup\\Libraries\\Desktop\\stable-diffusion-webui-docker」，转换为 Linux 路径则是「/mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker」。")],-1),w={href:"https://learn.microsoft.com/zh-cn/windows/dev-environment/javascript/nodejs-on-wsl",target:"_blank",rel:"noopener noreferrer"},D=n("h3",{id:"宝塔镜像",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#宝塔镜像","aria-hidden":"true"},"#"),e(" 宝塔镜像")],-1),x={href:"https://www.bt.cn/bbs/thread-79499-1-1.html",target:"_blank",rel:"noopener noreferrer"},E={href:"http://blog.huangyuqiang.cn/index.php/2022/11/02/docker%E5%AE%89%E8%A3%85%E5%AE%9D%E5%A1%94%E7%8E%AF%E5%A2%83/",target:"_blank",rel:"noopener noreferrer"},L=n("p",null,"测试过不用官方镜像，直接在 Docker 中安装宝塔，出现数据库不启动的问题。",-1),A=n("p",null,[e("如果宝塔镜像只是测试环境，可以用 "),n("code",null,"rm -f /www/server/panel/data/admin_path.pl"),e(" 关闭面板入口。")],-1);function N(W,S){const t=s("RouterLink"),r=s("ExternalLinkIcon");return d(),i("div",null,[h,n("p",null,[e("Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来管理多个 Docker 容器，并配置应用程序需要的所有服务。在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。强烈推荐使用 Compose 搭建所有 Docker，流程参考 "),o(t,{to:"/services/NAS.html#nas-docker"},{default:l(()=>[e("NAS 上搭建 Docker")]),_:1}),e("。")]),p,n("p",null,[e("Docker 使用查看 "),n("a",k,[e("Docker — 从入门到实践"),o(r)]),e("。")]),_,n("p",null,[e("官方镜像很多时候不符合我们的要求，可以按 "),n("a",m,[e("使用 docker commit 将修改后的容器保存为镜像及其使用注意事项"),o(r)]),e(" 定制属于你自己镜像。")]),b,n("p",null,[e("Windows 使用 "),n("a",f,[e("Docker Desktop"),o(r)]),e(" 来管理容器，方式参考 "),n("a",v,[e("Windows Docker 环境配置"),o(r)]),e("。")]),g,n("p",null,[e("注意：WSL 上的 Linux 环境与其他不同，须查看 "),n("a",w,[e("在适用于 Linux 的 Windows 子系统 (WSL2) 上安装 Node.js"),o(r)]),e("。")]),D,n("p",null,[e("如果要在 Docker 上部署网站，推荐宝塔官方的集成镜像，其基于 CentOS 7.9，解决了 Docker 内部链接问题，还可以用计划任务将数据库定时备份到本地，配置参考 "),n("a",x,[e("宝塔面板定制 docker 镜像发布 - 集成 LN/AMP 支持"),o(r)]),e(" 和 "),n("a",E,[e("Docker 安装宝塔环境"),o(r)]),e("。不过该镜像不适合 Huginn 部署，Huginn 不支持 CentOS，将安装命令从 apt-get 替换为 yum，依然无法部署。")]),L,A])}const B=c(u,[["render",N],["__file","Docker.html.vue"]]);export{B as default};
