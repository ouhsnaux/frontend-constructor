# script

## 位置

`<script>` 一般放到 `body` 的底部。

当遇到 `<script>` 时，浏览器会下载并解析执行，并停止对 `HTML` 文档的解析和渲染。
此时我们的页面上呈现的就是 `script` 标签之前的内容。
如果我们在 `head` 中引入 `script`，那么在 `script` 执行完成前，我们的整个页面都是空白的。
如果我们把 `script` 放到 `body` 底部，在执行 `script` 之前，我们的 `HTML` 已经呈现到用户面前。

## 异步

通过 `async` 或 `defer` 属性，可以异步加载外链 `script` 文件。
浏览器会新开线程下载文件。不会阻塞 `HTML` 的解析和渲染。
`defer` 是等到 `HTML` 解析完成后，`DOMContentLoaded` 事件前执行。
`async` 是下载完成后立即执行。
`async` 比 `defer` 优先级更高。
