// .vitepress/teek-config.mts
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置，所有 Teek 配置都放到 ... 中
export const teekConfig = defineTeekConfig({

    teekTheme: true,
    teekHome: true,
    vpHome: false,
    loading: true,
    windowTransition: true,

    banner: {
    enabled: true, // 是否启用 Banner
    name: "绵绵发力，久久为功", // Banner 标题，默认读取 vitepress 的 title 属性
    bgStyle: "partImg", // Banner 背景风格：pure 为纯色背景，partImg 为局部图片背景，fullImg 为全屏图片背景
    pureBgColor: "#000000", // Banner 背景色，bgStyle 为 pure 时生效
    imgSrc: ["/img/tbg1.png","/img/mbg3.png","/img/mbg4.png","/img/tbg6.png","/img/tbg7.png"], // Banner 图片链接。bgStyle 为 partImg 或 fullImg 时生效
    imgInterval: 15000, // 当多张图片时（imgSrc 为数组），设置切换时间，单位：毫秒
    imgShuffle: false, // 图片是否随机切换，为 false 时按顺序切换，bgStyle 为 partImg 或 fullImg 时生效
    imgWaves: true, // 是否开启 Banner 图片波浪纹，bgStyle 为 fullImg 时生效
    mask: true, // Banner 图片遮罩，bgStyle 为 partImg 或 fullImg 时生效
    maskBg: "rgba(24, 24, 24, 0.4)", // Banner 遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。bgStyle 为 partImg 或 fullImg 且 mask 为 true 时生效
    textColor: "#ffffff", // Banner 字体颜色，bgStyle 为 pure 时为 '#000000'，其他为 '#ffffff'
    titleFontSize: "4.2rem", // 标题字体大小
    descFontSize: "1.4rem", // 描述字体大小
    descStyle: "types", // 描述信息风格：default 为纯文字渲染风格（如果 description 为数组，则取第一个），types 为文字打印风格，switch 为文字切换风格
    description: [ "把事情做成良性发展的模样，剩下的交给时间。","速胜派是最大的投降派 ——《论持久战》","天下英雄如云，我周公瑾能胜者十之八九 ——周瑜"], // 描述信息
    switchTime: 4000, // 描述信息切换间隔时间，单位：毫秒。descStyle 为 switch 时生效
    switchShuffle: false, // 描述信息是否随机切换，为 false 时按顺序切换。descStyle 为 switch 时生效
    typesInTime: 200, // 输出一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesOutTime: 100, // 删除一个文字的时间，单位：毫秒。descStyle 为 types 时生效
    typesNextTime: 800, // 打字与删字的间隔时间，单位：毫秒。descStyle 为 types 时生效
    typesShuffle: false, // 描述信息是否随机打字，为 false 时按顺序打字，descStyle 为 types 时生效
  }
 
});