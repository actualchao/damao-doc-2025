import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
const yearNum = new Date().getFullYear() - 1995
export const DATA = {
  name: "吴吉超",
  nickName: "大猫(Damao)",
  initials: "Damao",
  url: "https://www.baidu.com",
  location: "中国/浙江/杭州",
  description:
    `花名: 大猫/Damao，95年生人（${yearNum}👴）/ 6年前端老兵👨‍🚀‍ `,
  summary:
    "2019年工业设计专业毕业,`6年前端工作经验, 1年电商视觉设计经验`, B/C端业务涉猎广泛, `逻辑、自驱是底色`，热爱 `健身💪🏻、跑步🏃🏻‍♀️、户外🚄`，目前Base杭州",
  avatarUrl: "/me.jpg",
  skills: ["React", "Three", "Pixi", "D3", "Rxjs", "Typescript", "架构设计"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" }
  ],
  contact: {
    email: "actualchao@163.com",
    tel: "+86 15755081023",
    social: {
      GitHub: {
        name: "GitHub",
        qrcode: "",
        url: "https://github.com/actualchao",
        icon: Icons.github,
        navbar: true,
      },
      juejin: {
        name: "掘金",
        qrcode: "",
        url: "https://juejin.cn/user/1451011080997800",
        icon: Icons.juejin,
        navbar: true,
      },
      wx: {
        name: "微信",
        qrcode: "/wx_qrcode.jpg",
        url: "",
        icon: Icons.wx,
        navbar: true,
      },
      email: {
        name: "email",
        qrcode: "",
        url: "mailto:actualchao@163.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  contactContent: `
  - 电话：+86 15755081023
  - wx: Actual_chao
  - 
  `,
  work: [
    // {
    //   company: "群核科技(酷家乐)",
    //   href: "https://www.kukongjian.com/",
    //   badges: ["商业工具前端部", "酷空间前端负责人"],
    //   location: "杭州",
    //   title: "资深前端开发工程师",
    //   logoUrl: "/kujiale.webp",
    //   start: "2023/08",
    //   end: "至今",
    //   description:
    //     "子品牌酷空间前端负责人，负责商业空间整体公装前端解决方案支持，商空前端部门前端标准化体系建设及人员梯度管理",
    // },
    // {
    //   company: "群核科技(酷家乐)",
    //   href: "https://www.kujiale.com/",
    //   badges: ["公装商业空间拓展业务线", "技术负责人"],
    //   location: "杭州",
    //   title: "资深前端开发工程师",
    //   logoUrl: "/kujiale.webp",
    //   start: "2022/05",
    //   end: "2023/08",
    //   description:
    //     "办公空间公装场景业务解决方案技术负责人，负责解决头部KA客户大型办公空间方案搭建还原的效率痛点，以办公家具场景为切面提供从场景搭建到渲染、报价等一体化的解决方案支持",
    // },
    // {
    //   company: "群核科技(酷家乐)",
    //   href: "https://www.kujiale.com/",
    //   badges: ["定制工具前端部"],
    //   location: "杭州",
    //   title: "资深前端开发工程师",
    //   logoUrl: "/kujiale.webp",
    //   start: "2020/08",
    //   end: "2022/05",
    //   description:
    //     "负责酷家乐核心营收模块“定制工具”的日常开发与迭代支持，进行业务模块迭代、工程优化、性能优化等工作支持",
    // },
    // {
    //   company: "菜鸟网络",
    //   href: "https://www.cainiao.com/",
    //   badges: ["履行事业部"],
    //   location: "杭州",
    //   title: "前端开发工程师",
    //   logoUrl: "/cainiao.png",
    //   start: "2019/02",
    //   end: "2020/08",
    //   description:
    //     "负责履行运力及仓配整体链路业务支持，为仓配线路优化、仓储调度提供可视化解决方案支持",
    // },
    // {
    //   company: "兔狗科技",
    //   href: "https://www.citytogo.com",
    //   badges: [],
    //   location: "杭州",
    //   title: "前端开发工程师",
    //   logoUrl: "/tugou.jpg",
    //   start: "2017/07",
    //   end: "2019/02",
    //   description:
    //     "负责内容增长平台建设、C端日常活动支持、电商平台业务迭代支持",
    // },
  ],
  education: [
    {
      school: "滁州学院",
      href: "https://www.lsu.edu.cn/main.htm",
      degree: "本科、工业设计",
      logoUrl: "/school.jpg",
      start: "2015",
      end: "2019",
    },
  ],
  projects: [
    // {
    //   title: "广告3D编辑工具",
    //   href: "https://www.kukongjian.com/koolsign",
    //   dates: "2024/02 - 2024/10",
    //   active: true,
    //   description:
    //     "服务广告客户进行快速的2D转3D场景还原（类figma的vector-to-3d插件形态）、提供一体化的场景渲染、场景对象编辑、渲染效果图生成等解决方案支持",
    //   technologies: [
    //     "React",
    //     "Math.js（内部几何库）",
    //     "EGS（内部渲染引擎，类Three）",
    //     "gemo-kernal(内部造型引擎)",
    //   ],
    //   links: [
    //     {
    //       type: "🧐开放使用",
    //       href: "https://www.kukongjian.com/koolsign",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://qhstaticva-cos.kujiale.com/media/yun/help/video/UID_4f71332a_c4eb_4219_1712565523673.mp4",
    // },
    // {
    //   title: "CAD智能识别",
    //   href: "https://www.kujiale.com/pub/cspace/tool/cad",
    //   dates: "2023/08 - 2024/02",
    //   active: true,
    //   description:
    //     "服务CAD文件快速转换酷家乐户型方案，桥接快速智能放置的自动工具",
    //   technologies: [
    //     "React",
    //     "Math.js（内部几何库）",
    //     "EGS（内部渲染引擎，类Three）",
    //   ],
    //   links: [
    //     {
    //       type: "🧐开放使用",
    //       href: "https://www.kujiale.com/pub/cspace/tool/cad",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "/cad.mp4",
    // },
    // {
    //   title: "办公家具一体化支持",
    //   href: "",
    //   dates: "2022/05 - 2023/08",
    //   active: true,
    //   description:
    //     "公装装修场景，头部KA存在很多大型办公空间方案搭建还原的效率痛点，以此为背景公司尝试涉足公装领域，以办公家具场景为切面提供从场景搭建到渲染、报价等一体化的解决方案支持，个人作为技术TO参与项目落地",
    //   technologies: [
    //     "React",
    //     "Math.js（内部几何库）",
    //     "EGS（内部渲染引擎，类Three）",
    //   ],
    //   links: [
    //     {
    //       type: "😌内部项目",
    //       href: "",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "/bangong.mp4",
    // },
    // {
    //   title: "北斗网络仿真",
    //   href: "",
    //   dates: "2019/03 - 2020/08",
    //   active: true,
    //   description:
    //     "基于整体物流节点数据结构进行合理分层，类ECS设计模式抽象线路对象、节点对象的视图展示模块及交互功能模块，实现灵活组装的能力，（省/市/区/县）基于扁平索引结构达成快速的线路聚合及炸开设计，使用rxjs进行了实时推流状态process的封装保证了多路由执行场景的数据稳定，使用类静态图模式的思路进行画布性能优化（减少不必要的Componet update,进行纯视图层更新），最大渲染线路数量可达10W条，帧率稳定在30帧",
    //   technologies: ["React", "Umi", "rxjs", "Amap"],
    //   links: [
    //     {
    //       type: "😌内部项目",
    //       href: "",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "/beidou.mp4",
    // },
  ],
  hackathons: [
    // {
    //   title: "场景信息记录及控制台模块",
    //   dates: "2020.8~2022.5",
    //   location: "定制工具前端部",
    //   description: `简介：类传统工业工具，场景交互操作需要有明确的行为记录，用以辅助用户判断，在异常事故现场也可以辅助技术支持进行问题判断，该工具一共有以下几个关键实现：
    //   - 1. 基于AOP切面设计无侵入的对模型编辑流程进行了有效的监控。
    //   - 2.基于localforage库对用户日志文件进行了妥善的持久化存储并衔接了定时持久化至服务端的流程，降低异常场景的问题定位成本。
    //   - 3.提供了flex的scheme允许接入模块进行自定义的用户提示文案自定义
    //   成果：完成定制工具线全场景模型变更流程接入，单日记录条目次数达90W次，为用户日常操作及记录回溯提供有效帮助`,
    //   image: "/kujiale.webp",
    //   win: "",
    //   mlh: "",
    //   links: [
    //     {
    //       title: "React",
    //       icon: <Icons.react className="h-4 w-4" />,
    //       href: "https://github.com/facebook/react",
    //     },
    //     {
    //       title: "localforage",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/localForage/localForage",
    //     },
    //     {
    //       title: "Json-mapper",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/JsonMapper/JsonMapper",
    //     },
    //   ],
    // },
    // {
    //   title:
    //     "履行——预分拣片区划分：提升末端站点片区划分精度，提升预派收件响应速度",
    //   dates: "2019.3~2020.8",
    //   location: "履行事业部",
    //   description: `简介：使用JSTS类库对GIS部门的边界数据进行优化，使用高德Amap进行区域展示，配合高德内部同学进行画布精度调优等 成果：覆盖整体C类、B类物流路由网络，整体合作生态公司派送精度提升20%`,
    //   image: "/cainiao.png",
    //   win: "",
    //   mlh: "",
    //   links: [
    //     {
    //       title: "Walle（内部框架)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "",
    //     },
    //     {
    //       title: "Amap",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://lbs.amap.com/api/javascript-api-v2/summary",
    //     },
    //     {
    //       title: "JSTS",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/bjornharrtell/jsts",
    //     },
    //   ],
    // },
    // {
    //   title: "内容增长平台",
    //   dates: "2017.7~2019.2",
    //   location: "负责内容增长平台建设、C端日常活动支持、平台业务迭代支持",
    //   description: `简介：基于Vue.2x搭建的一整个内容平台， 用以辅助营销团队进行促单引流文章产出，提供内容编辑、文章展示及评论社群能力，核心编辑器基于Vue进行视图层搭建，indexDb进行temp编辑状态保持，基于postmessage封装RPC接口进行多iframe间的安全通信​成果：完成内容编辑器及内容平台建设，相关KOL产出内容3000+篇，相关商品的当年pv/uv提升80%，促单率达60%`,
    //   image: "/tugou.jpg",
    //   win: "",
    //   mlh: "",
    //   links: [
    //     {
    //       title: "WangEditor",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/wangeditor-team/wangEditor",
    //     },
    //     {
    //       title: "Vue",
    //       icon: <Icons.vue className="h-4 w-4" />,
    //       href: "https://github.com/vuejs/vue",
    //     },
    //   ],
    // },
  ],
} as const;
