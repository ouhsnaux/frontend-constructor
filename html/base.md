# base

HTML (HyperText Markup Language) 不是编程语言，只是页面的结构。

一个完整的 `HTML` 例子：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

* `<!DOCTYPE html>` 表明 `html` 版本是 `5`， 写死就好。
* `<html></html>` 根元素
* `head` 网站的介绍，不会显示在页面上
  * `<meta charset="utf-8">` 表明文件编码
  * `title` 标签页内容
* `body` 页面展示内容

## element

结构： `<tag>content</tag>`。

另外还有一些自闭合元素 `<img src="https://xxx.com/demo.png">`

可嵌套。

```html
<div>
  <span>1</span>
  <span>2</span>
  <span>3</span>
</div>
```

分类：块级元素和内联元素。

* 块级元素总是另起一行，并占满整个宽度，其后的内容从下一行开始。
  块级元素不应该放在内联元素内部。比如 `div`、`p`……
* 内联元素放在块级元素内部，多个内联元素不会导致换行显示。
  通常只包括文档的一小部分，比如 `span`、`a`……

属性：每个元素可以拥有属性
`<p class="editor-note">My Cat is very grumpy</p>`
其中 `class` 就是该元素的属性。
属性是不显示在页面上的额外信息。
一般属性都是需要值的，不过有些属性名与值相同时可以省略，比如 `disabled`

特殊字符
在 `HTML` 中，`<`、`>`、`"`、`'`、`&` 属于 `HTML` 语法的一部分，无法在元素的内容中显示。
可以通过字符引用解决。

| 特殊字符 | 字符引用 |
| :-- | :-- |
| < | `&lt;` |
| > | `&gt;` |
| " | `&quot;` |
| ' | `&apos;` |
| & | `&amp;` |

空白符合并，不管你写多少空白符，浏览器只显示一个，这允许你按喜欢的方式组织代码结构。
空白符也有字符引用（`&nbsp;`），不会合并。

注释

`<!-- 注释内容，不会显示在页面上 -->`

## head

对页面的描述，不展示在页面上。

### `title`

  浏览器标签页标题

### `meta` 页面描述

#### `charset`

字符编码，一般指定 `utf-8`

#### `name` + `content`

定义属性，比如添加作者和页面描述
  
```html
<meta name="author" content="Chris Mills">
<meta name="description" content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications.">
```

`description` 会显示在搜索引擎结果的描述中。

### icon

标签页图标 `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`

也可以根据设备展示不同的图标：

```html
  <!-- third-generation iPad with high-resolution Retina display: -->
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://developer.cdn.mozilla.net/static/img/favicon144.a6e4162070f4.png">
  <!-- iPhone with high-resolution Retina display: -->
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://developer.cdn.mozilla.net/static/img/favicon114.0e9fabd44f85.png">
  <!-- first- and second-generation iPad: -->
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://developer.cdn.mozilla.net/static/img/favicon72.8ff9d87c82a0.png">
  <!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
  <link rel="apple-touch-icon-precomposed" href="https://developer.cdn.mozilla.net/static/img/favicon57.a2490b9a2d76.png">
  <!-- basic favicon -->
  <link rel="shortcut icon" href="https://developer.cdn.mozilla.net/static/img/favicon32.e02854fdcf73.png">
```

### css
  
```html
<style>
  p { color: red }
</style>
```

外链文件：`<link rel="stylesheet" src="my-css-file.js">`

### javascript
  
```html
<script>
  console.log('hello world');
</script>
```

外链文件：`<script src="my-js-file.js"></script>`

`script` 可以出现在任何位置，不局限在 `head` 中，一般放在 `body` 底部。

### lang

`html` 标签可以加 `lang` 属性，表明页面的语言类型。

## text fundamentals

`HTML` 的一个重大功能就是表明页面的结构和语义。

语义化的作用

* 结构清晰，易维护
* 便于 `SEO`
* 便于屏幕阅读器解析

结构：

* 标题，标题标签有 `6` 个，从 `<h1>` 到 `<h6>`，`<h1>` 是最大的标题。
* 段落，`<p>`
* 列表
  * 有序列表 `<ol>`，单项使用 `<li>` 包裹
  * 无序列表 `<ul>`，单项使用 `<li>` 包裹
  * 描述性列表 `<dl>` `<dt>` `<dd>`
* 强调，
  * `<em>` 一句话的重音，位置不同会改变一句话的意思。
  * `<strong>` 强烈的强调，表明重要性，严重和急迫，不改变语义。
* 引用
  * 成段引用 `blockquote`，并添加属性 `cite` 标明出处。
  * 内联引用 `q`，添加属性 `cite` 标明出处。
  * `cite` 当我们需要跳转到出处时，`a` 标签内部使用此标签。
* 缩写 `<abbr>`
* 联系方式 `<address>`
* 上标 `sup`，下标 `sub`
* 计算机代码
  * 代码片段 `<code>`
  * 格式保留 `<pre>`，空格不会合并
  * 变量 `<var>`
  * 键盘输入 `<kbd>`
  * 输出 `<output>`
* 时间 `<time>` `datetime` 中按照固定的格式填写真正的时间，以便计算机识别
* 换行 `<br>`，水平线 `<hr>` 意味着主题的转变。
  
## hyperlinks

基本的链接：`<a>` 标签加上 `href` 属性。

```html
<p>I'm creating a link to
<a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

`href` 属性是目标网址的 `URL`，`<a>` 标签的内容则会展示在页面上。
也可以添加 `title` 属性，当鼠标悬浮在链接上时会显示来提示用户。

`URL` 表示资源的路径，可以是绝对路径，也可以是根据当前网站决定的相对路径。
可以包括锚点，打开目标网站会滚动到某一个具体位置。
尽可能使用相对路径，效率高，如果是绝对路径，需要查询 `ip` 地址等。

`<a>` 标签的内容同样十分重要，应该简短地描述一下目标网站。
如果需要下载文件，可以添加 `download` 属性，为文件添加默认名。

`<a>` 也可以是邮件，点击可打开邮箱程序：
`<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>`
也可以给 `url` 添加参数，打开邮箱时会出现在头部。比如 `subject`, `cc`, `body`。

## document & website constructor

文档一般结构

* 头部 `<header>`，属于整个页面或 一个 `<article>` 或 `<section>`
* 导航 `<nav>`
* 主要内容 `<main>`，内部主要包括 `<article>` `<section>` 和 `<div>`，确保只出现一次。
  * `<article>` 脱离整个页面的其他内容仍有意义。比如一整篇文章。
  * `<section>` 经常是将页面多个部分组合起来构成一个单一的功能，
    大多含有一个标题。比如文章的一个章节。
* 侧边栏 `<aside>`
* 底部 `<footer>`

无语义使用 `<div>` 和 `<span>`，切记不要滥用。

## 替换元素和嵌套元素

通过这些非文字内容，让你的页面更加灵活生动，更加炫酷。

## 图片 `<img>`

`<img src="dinosaur.png" alt="dinosaur">`

`src` 属性就是图片的 `url`，当图片加载失败时，`alt` 中的内容会出现。

如果图片中的内容很重要，则使用 `<img>` 标签。
如果只是起装饰作用，则使用 `css background` 属性。

还可以添加 `width` 和 `height` 属性，预留宽高。

为了将图片与其说明文字联系在一起，需要使用 `<figure>` 和 `<figcaption>`

```html
<figure>
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
        it has a large head with long sharp teeth"
    width="400"
    height="341"
  >
  <figcaption>A T-Rex on display in the Manchester University Museum.</figcaption>
</figure>
```

`<figure>` 标签内部可以是多个图片，代码片段，`audio`，`video`，`table` 等等。

## Video & Audio

例子

```html
<video src="rabbit320.webm" controls>
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.webm">link to the video</a> instead.</p>
</video>
```

`src` 属性指向资源文件地址。
`controls` 表明用户是否可以控制文件，比如播放，暂停，调节音量等。
标签内容会在浏览器不支持 `video` 标签时显示。

为解决兼容性问题，我们可以这样写：

```html
<video controls>
  <source src="rabbit320.mp4" type="video/mp4">
  <source src="rabbit320.webm" type="video/webm">
  <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
</video>
```

TODO 看看视频网站是怎么做的。

`video` 与 `audio` 的其它属性

* `width` & `height` 宽高，宽高比不会变，根据情况留白。
* `autoplay` 自动播放。
* `loop` 循环播放
* `muted` 静音
* `poster` 在视频播放前显示
* `preload`
  * `none` 不缓冲
  * `auto` 自动缓冲
  * `metadata` 只缓冲元数据

字幕 `<track>`

字幕文件保存为 `.vtt` 文件，包括时间和文字，格式如下：

```vtt
WEBVTT

1
00:00:22.230 --> 00:00:24.606
This is the first subtitle.

2
00:00:30.739 --> 00:00:34.074
This is the second.

  ...
```

字幕属性：

* `src` 指定资源文件
* `kind`
  * `subtitles` 翻译
  * `captions` 对话转录或重要声音的描述
  * `timed descriptions` 媒体播放器使用的文件，为盲人描述视觉效果
* `srclang` 字母语言类型，缩写
* `label` 字幕语言类型，会出现在页面上，用于用户切换
* `default` 默认使用文件

## Embedding

`<iframe>` 可以展示别人的网站，例子：

```html
<iframe
  src="https://developer.mozilla.org/en-US/docs/Glossary"
  width="100%"
  height="500"
  sandbox
>
  <p>
    <a href="/en-US/docs/Glossary">
       Fallback link for browsers that don't support iframes
    </a>
  </p>
</iframe>
```

属性：

* `src` 目标网址
* `width` & `height` 宽高
* `sandbox`
* 如果浏览器不支持 `<iframe>` 会展示标签里的内容

为了提高速度，可以在页面渲染完成后，通过 `js` 设置 `iframe` 的 `src`。

## Vector graphics

## Responsive images

## 位置

[上次阅读到](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies#security_concerns)
