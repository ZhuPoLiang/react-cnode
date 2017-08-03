# react仿cnode站点

## 出发点

苦于之前就职的公司技术栈jQ + Underscore + artTemplate，DOM操作频繁得糟心，所以一直对React很感兴趣，好不容易争取到一次向React转型无奈最后不得不下马，看到在稀土掘金上不少Vue/React版的CNode社区例子，于是乎下定决心用React也弄一版出来，从零开始一点点添砖加瓦；

## 技术栈

<b>webpack 3.x</b>：直接上手3.x版本，之前一直用1.x版本，这次试试水尝尝鲜。<br/>
<b>yarn</b>：都说npm下载速度慢？试试yarn呗。<br/>
<b>react 15.x</b>：注定与老旧浏览器是有缘无分了。<br/>
<b>react-router 4.x</b>：专门入坑而选。<br/>
<b>redux</b>：可能有人觉得大炮打蚊子一般，一切只为入坑。<br/>
<b>ES6</b>：现在不用ES6都不好意思拿出手。<br/>

## 运行项目

```
// 单独打包了依赖文件
yarn run dll

// 注：build前必须先dll生成单独依赖库文件否则会报错

yarn run build

yarn run dev
```
