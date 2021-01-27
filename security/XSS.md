# XSS

## 介绍

跨站脚本攻击，`Cross Site Scripting`，为与 `CSS` 区分，简称 `XSS`。
可以获取用户的身份信息，以用户的身份访问网站。

`XSS` 分为 3 种类型：

* `DOM` 型 `XSS`
* 反射型 `XSS`
* 存储型 `XSS`

### DOM型XSS

将恶意代码插入到 `DOM` 中。

case1：前端直接将不受信任的内容插入到 `DOM`，比如使用 `innerHtml`，`document.write`等，
如果内容中包括`<script>` 标签，就可以执行js。

case2: 在 `href src` 属性中含有 `javascript:`

case3：内联 `script` 中，如果含有通过 `+` 号拼接的数据，可能突破拼接的限制，执行恶意代码

case4：在标签属性中，可以通过加入引号突破限制，插入属性或其它标签，
比如img的src，可以写onload,onerror事件，执行恶意代码

case5: 在 onload、onerror、onclick 等事件中，注入不受控制代码。

### 反射型XSS

将恶意代码插入到 `url` ，当url被解析执行时执行恶意代码。

case6: `url` 中某个参数从输入框中获取，用户输入`><script>alert('XSS');</script>`, 那么url变成`http://xx.com/search?keyword="><script>alert('XSS');</script>"`

### 存储型XSS

将恶意代码存储到服务器，前端获取并解析的时候执行。

## 防御

1. 将 `& < >` 等字符进行转化，`& => &amp; < => &lt; > => &gt;`
2. 拼接属性使用模板字符串
3. 对属性值中的引号和转义符号进行转义，`' => \'; " => \"; \ => \\`
4. `cookie` 设置 `httpOnly` 即使受到攻击，也无法获取 `cookie`
5. [CSP](./CSP.md)

## 小游戏

[xss攻击小游戏](https://xss-game.appspot.com/)

## 参考

[美团技术团队 前端安全系列（一）：如何防止XSS攻击？](https://juejin.cn/post/6844903685122703367)

[三毛 前端安全知识](https://juejin.cn/post/6844903502968258574)
