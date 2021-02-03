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
可以通过字符引用解决，也可以将特殊字符包含在 `<code></code>` 中。

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

`<!-- comment -->`

## head

对页面的描述，不展示在页面上。

包括标签页自定义图标、标签页标题、`base`、`metadata`、`css` 和 `js`。

## text fundamentals

## hyperlinks

## advanced text formatting

## document & website constructor

## Debugging HTML
