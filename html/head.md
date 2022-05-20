# html head

对页面的描述，不展示在页面上。

## 标签页

`title` 浏览器标签页标题

`icon` 标签页图标。
`<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`

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

## meta

### 文件字符编码

`<meta charset="UTF-8">`

### `name` + `content`

定义属性，比如添加作者，关键字，页面描述.

```html
<meta name="author" content="Chris Mills">
<meta name="description" content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications.">
```

`description` 会显示在搜索引擎结果的描述中。

## css

页面样式

* 内联文件

```html
<style>
  p { color: red }
</style>
```

* 外链文件：`<link rel="stylesheet" src="my-css-file.js">`，可以添加 `media` 属性，语法同媒体查询，只在符合媒体查询的设备上生效。

## javascript

脚本

* 内联文件

```html
<script>
  console.log('hello world');
</script>
```

外链文件：`<script src="my-js-file.js"></script>`

`script` 可以出现在任何位置，不局限在 `head` 中，一般放在 `body` 底部。
