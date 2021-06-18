# JavaScript简介

## 介绍

`JavaScript` 是一种轻量解释性语言，
用来更新 `HTML` 和 `CSS`，使页面变为动态页面。
一般作为客户端语言，也可以借助 `node` 编写服务端语言。

## 使用

通过 `<script></script>` 标签引入 `JavaScript` 。

```html
<!-- 内联 -->
<script>
  document.addEventListener('DOMContentLoaded', function() {
    console.log('内联JS内容');
  })
</script>

<!-- 外链文件 -->
<script src="script.js" defer></script>

<!-- 行内，不推荐 -->
<button onclick="createParagraph()">Click me!</button>
```

## 加载策略

如果在 `HTML` 未解析完成前执行 `JS` 很可能会无效。
对于内联内容，可以监听 `DOMContentLoaded` 事件，触发后执行 `JS`。
对于外链文件，可以添加 `defer/async` 属性，等 `HTML` 解析完毕后再解析和执行 `JS` 文件。

历史解决方案是将 `<script>` 标签放到 `<body>` 底部。这样会等到 `HTML` 解析完毕后才开始下载和解析，对性能有一定影响。

`async` 与 `defer` 的区别：

* 都是立即异步下载。
* `async` 是下载完成后立即执行，阻塞`HTML` 解析。适合需要立即执行的文件。
* `async` 无法保证多个文件的执行顺序。适合多个独立 `JS` 文件
* `defer` 是等 `HTML` 解析完成后再执行。适合多文件相互依赖或者需要使用 `DOM`。
