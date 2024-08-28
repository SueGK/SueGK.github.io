import { sidebar } from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
  "/DailyRoutine",
  // 读书笔记架构更换到 docsify，不能使用相对链接
  { text: "Books&Tutorials", icon: "read", link: "https://suegk.github.io/reading/" },
  {
    text: "🗳️ Prompt Engineering",
    icon: "",
    prefix: "/PromptEngineering/",
    link: "",
    collapsible: true,
    children: "structure"
  },
  
  {
    text: "🍏 Productivity Software",
    icon: "",
    prefix: "/apps/",
    link: "",
    collapsible: true,
    children: "structure",
  },

  {
    text: "🧩 Algorithms",
    icon: "",
    prefix: "/Algorithms/",
    link: "",
    collapsible: true,
    children: "structure",
  },

  {
    text: "🔗 MLOps",
    icon: "",
    prefix: "/MLOps/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  
  {
    text: "🔡 Code",
    icon: "",
    prefix: "/Code/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  
  {
    text: "Visualization",
    icon: "",
    prefix: "/Visualization/",
    link: "",
    collapsible: true,
    children: "structure",
  },
  {
    text: "Blog",
    icon: "blog",
    prefix: "/_posts/",
    link: "/blog",
    collapsible: true,
    children: "structure",
  },
]);