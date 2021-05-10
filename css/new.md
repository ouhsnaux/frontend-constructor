# new

添加 `class` 属性，来给元素添加样式
元素标签加 `class` 选中带有 `class` 属性的特定类型的元素。

## 语法：

1. 结构
  选择器 { 属性: 值; 属性: 值; …… }
  大部分值是枚举值，还可以是函数。
1. 应用
    1. 外链样式表 在 `HTML` `<head>` 中添加 `<link rel="stylesheet" href="styles.css">`,最常用和有效
    2. 内部样式表 在 `HTML` `<head>` 中添加

      ```html
      <style>
        h1 {
          color: blue
        }
      </style>
      ```

      当你无法修改外链文件时，可以使用此文件覆盖，不过如果多个网站使用相同的样式，需要写多份，不方便开发和维护。
    3. 内联样式，直接写在 `HTML` 的 `style` 属性中。只能改动当前元素。尽量避免使用此方式。

    ```html
    <h1 style="color: blue;background-color: yellow">Hello World!</h1>
    ```

1. 优先级，覆盖。
1. @rules
    1. `@import` 引入别的样式表 `@import 'style2.css'`
    2. `@media` 媒体查询，对符合条件的媒体应用 `css` 规则。
1. 缩写，多个属性合并到一行，比如 `font`，`background` ……
1. 注释，

```css
/* 这是注释 */
```

1. 空格，键值对外的空格忽略，按照你喜欢的方式排版
1. 应用，解析 `HTML`，生成 `DOM` 的同时，
  下载 `CSS` 并解析，将生成的 `CSSOM` 应用到 `DOM` 上，
  然后布局和绘制。

## 优先级

### 层叠

特异性相同的规则，后出现的会被使用,内部文件 > 外链文件

### 特异性

1000，内联样式
100，ID选择器
10，class选择器，属性选择器，伪类选择器
1 元素选择器，伪元素选择器

全部选择器 `*` ，组合选择器，`+`, `>`, `~`空格，以及伪元素 `:not` 对特异性没有影响。

可以写两次选择器来增加特异性，比如写两次ID `#id#id`

### 继承

部分属性会自动继承，比如字体，颜色。
也可以给属性赋值 `inherit` 继承父元素。
赋值 `initial` 使用**属性**的默认值。
赋值 `unset` 取决于属性是否自动继承，如果不是就使用默认值。
赋值 `revert` 使用**元素**的默认值。
可以使用 `all` 属性给所有属性赋值。

### !important

这是一个例外，超越特异性，只有在覆盖你无法修改的 `css` 文件，才考虑使用。

## 选择器

### 基础选择器

* 全局选择器 `*`
* 元素选择器 `p`
* 类选择器 `.classname`
* ID选择器 `#id`
* 属性选择器 `[attr]`
  * `=` 完全匹配
  * `~=` 完全匹配或属性值列表中包含
  * `|=` 完全匹配或以该值开头并紧跟连字符 `-`
  * `^=` 以该值开头
  * `$=` 以该值结尾
  * `*=` 包含该值
  * 中括号内加 `i` 大小写不敏感

### 分组选择器

使用逗号分隔，多个选择项应用统一规则

### 组合选择器

* 后代选择器 空格
* 子选择器 `>`
* 弟弟选择器 `~`
* 相邻第弟选择器 `+`
* 合并选择器，多个选择器紧邻

### 伪选择器

* 伪类 `:` 根据状态信息。链接的几种状态，表单的状态，位置信息（第多少个）
* 伪元素 `::` 不在 `HTML` 中的实体。before,after,first-line,first-letter

### 例子

选中 `<article>` 标签的第一个子元素

```css
article *:first-child {}
```

## 盒模型

Everything in CSS is a box.

### 块级盒子和行内盒子

块级盒子：

1. 另起一行
2. 占满父级元素的宽度
3. 可以设置宽高
4. 内外边距和边框会将其他元素推开

行内盒子

1. 不另起一行
2. 宽高设置无效
3. 垂直方向内外边距和边框有效，不会把其他元素推开
4. 水平方向内外边距和边框有效，会把其他元素推开。

### 盒模型包括4部分

* `content` 展示的内容，可以使用 `width` 和 `height` 设置
* `padding` 内边距
* `border` 边框
* `margin` 外边距

标准盒模型 `width` 和 `height` 属性只包括 `content`。
替补盒模型 `width` 和 `height` 属性包括 `content` +  `padding` +  `border`。
默认情况下浏览器会使用标准盒模型，我们可以通过设置 `box-sizing` 属性更改。
`box-sizing: border-box`。

如果我们想让所有元素使用替补盒模型，可以这样设置

```css
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}
```

### margin

可以是正值，也可以是负值，
如果是负值，可能会遮蔽其它元素。

垂直外边距合并。

3种合并情况：

1. 相邻兄弟节点
2. 父元素与子元素，没有内边距和边框间隔，就会发生合并
3. 空元素，没有高度，没有内边距。

float元素和绝对定位元素不会合并。

3种合并方式。

* 全是正值，取最大值
* 有负值，取最大正值与最小负值的和
* 全是负值，取最小负值。

### padding

只能是0或正数。背景总是放在 `padding` 后。

### inline-block

1. 不另起一行
2. 不占满父元素的宽度，宽高有作用
3. 内外边距和边框有作用，可以把其他元素推开。

TODO display属性 inline-flex

## 背景和边框

* background-color: 颜色和透明度
* background-images：背景图，
  太大只会显示左上角，太小会重复填充。
  也可以是渐变函数生成的值。
  可以同时存在多张图。
  存在多张图时，重复，尺寸和位置会按对应顺序应用到图片上，
  如果属性不够就会从开始循环使用。
* background-repeat，控制背景图重复
* background-size，图片尺寸，可以是绝对值，也可以是百分比，还有两个枚举值，不会改变宽高比。
  * cover，覆盖整个元素，图片的一部分会超出元素而无法显示
  * contain，元素背景包含整个图片，顶边，可能会有留白。
* background-position，图片左上角相对元素左上角的位置。
  可以是绝对值，百分比，也可以是方位枚举值。可以几种属性混用。
  也可以是方位与数字的4值组合，
  比如 `top 20px right 10px` 表示距上 `20px`，距右 `10px`
* background-attachment
  * scroll 元素滚动时背景不变，页面滚动时变化
  * fixed 背景不变
  * local 背景变化

### 渐变函数

线性渐变，重复线性渐变，linear-gradient
径向渐变，重复径向渐变。radial-gradient

### 简写

* `size` 放到 `position` 后并以 `/` 分隔，如果只有一组数字，那就是位置。
* 多个背景以逗号分隔
* 颜色放最后

### 边框

* 尺寸
* 颜色
* 样式
* 圆角

一个值指定四个角，
两个值时，第一个指定左上和右下，第二个指定右上和左下。
三个值时，第一个指定左上，第二个指定右上和左下，第三个指定右下
四个值时，第一个指定左上，顺时针，

可以通过 `border-top-right-radius` 指定右上角，
如果是两个值，第一个是水平，第二个是垂直。

## 文字方向

`writing-mode`，有三个值

* `horizontal-tb`
* `vertical-rl`
* `vertical-lr`

不同文字方向下，盒模型各属性表现相同，
为了解决这一问题，新增逻辑属性

| 物理属性 | 逻辑属性 |
|:-- | :-- |
| `width` |  `inline-size` |
| `height` | `block-size` |

新增逻辑值

| 物理属性 | 逻辑属性 |
|:-- | :-- |
| `margin-top` | `margin-block-start` |
| `padding-left` | `padding-inline-start` |
| `border-bottom` | `border-block-end` |

## 溢出

盒子中内容过多就会发生溢出。

一般情况下，为了避免内容丢失，溢出时会覆盖其他内容。
可以通过设置 `overflow` 修改，另外还有 `overflow-x` 和 `overflow-y` 两个属性。

* `visible` 可见，默认值
* `hidden` 隐藏溢出内容
* `scroll` 带滚动条（不会消失），可滚动查看溢出内容
  只需一个方向的滚动条时`scroll-x`, `scroll-y`
* `auto` 只在需要时添加滚动条

当设置为 `scroll` 或者 `auto` 时会建立 `BFC`，盒子内外的布局互不影响。

## CSS 值与单位

值包括文本类型和数字类型。
文本类型包括自定义值，预定义值（标识符）

### 数值

绝对单位 `px` `in` `pc` `pt`

```css
1in = 96px;
1pc = 16px;
1pt = 4/3px;
```

相对单位

* `em`, 排版特性属性（比如字体大小）相对于父元素的字体大小，其他属性相对于自己的字体大小（比如宽度）
* `rem`, 相对于根元素的字体大小
* `vw` 视口宽度的1%
* `vh` 视口高度的1%

### 百分比

宽度，字体大小，是按照父元素的属性乘百分比。

### 数字

包括整数和小数，比如透明度，

### 字符串与标识符

字符串需要使用引号，标识符不需要。

### 函数

比如 `rgb()`, `url()`,再比如 `calc()` 在布局时动态计算。

## 尺寸

图片如果不设置宽高，会使用图片的固有尺寸。
`<div>` 元素如果不设置宽高，会根据内容设置尺寸。

`margin` 和 `padding` 如果使用百分比都是相对于容器的宽度计算的。

弹性尺寸，`max-width` 最大宽度， `min-width` 最小宽度，

## 替换元素

可以使用 `max-width: 100%;` 让替换元素动态调整自己的尺寸。
也可使用 `object-fit` 固定尺寸缩放图片，不会修改盒模型的尺寸。

* `cover` 保持宽高比，某一条边顶边后裁剪。
* `contain` 保持宽高比，某一条边顶边后，另一边留白。
* `fill` 不保持宽高比，占满空间
* `none` 图片尺寸不变，只展示图片的一部分或留白并居中。
* `scale-down`: `contain` 或 `none`

## 表单

表单元素默认不继承字体样式，可以手动添加。
全部设置盒模型为替补盒模型。
`textarea` 手动设置 `overflow: auto`

```css
button, input, select, textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

textarea {
  overflow: auto;
}
```

## 表格

1. `HTML` 结构完整清晰。
1. 宽度使用百分比，布局更具有响应式
1. `table-layout`
    * `auto`，自动调整每列宽度。
    * `fixed`，固定每列宽度。
1. `border-collapse`
    * `collapse` 合并，样式使用左侧或上侧单元格的边框。
    * `separate` 分离，单元格之间空隙由 `border-spacing` 控制。
1. 使用 `nth-child` 等伪元素区分不同行。
1. `caption-side` 标题位置 `top` 或 `bottom`
1. 边框只能应用到单元格上。

## 问题排查

1. 暂停一会，重新检查
2. 是否有书写错误
3. 兼容性
4. 优先级
5. 使用排除法，排除无关环境，排除无关js，无关HTML，无关CSS

## 自定义变量

语法：使用双连字符定义，`var()` 函数使用，大小写敏感，例子：

```css
p {
  --main-bg-color: brown;
  background-color: var(--main-bg-color);
}
```

变量定义需在规则块中，外部无法使用，变量会被子元素继承。
如果想要全局使用变量，可以在伪类 `:root` 中定义。
`var` 函数接受剩余参数作为备选项，如果备选项包括变量，需要使用 `var`。
如果计算出的值无法使用，不会被忽略，而是使用 `inherit` 或 `initial`

`js` 中使用

```js
// 设置
element.style.setProperty("--my-var", jsVar + 4);

// 查询
element.style.getProperty("--my-var");
```

## 高级概念

### box-shadow

前两个是偏移量，第三个是模糊度，第四个值是扩散半径，最后一个是颜色。
还有 `inset` 表示内部阴影。
可以有多个，以逗号分隔。
一般阴影大小与元素相同，可使用扩散半径改变阴影大小。

### filter

取值：

`url()` 使用svg
`blur` 虚化，使用距离，单位为 `px`
`grayscale` 颜色消除器，使用百分比
`brightness` 调整亮度，百分比
`contrast` 对比度，百分比
`invert` 反转 百分比
`hue-rotate` 色调旋转，单位deg
`drop-shadow` 阴影，包括盒子里的内容

可以同时使用多个值。

### 混合模式

### background-clip

* `border-box` 边框及内部都能看到背景
* `padding-box` 内边距及内部都能看到背景
* `content-box` 只有内容可以看到背景
* `text` 只有文字可以看到背景，文字颜色需要设为透明。

### 形状

* shape-outside 函数参数为百分比，根据宽度计算，宽度可以取4种尺寸
  * inset
  * ellipse
  * polygon
  * circle(50%)
shape-image-threshold
shape-margin

阅读到[这里](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text)

## 文字布局

### 文字

* color 颜色
* font-family 字体
* font-size 大小
* font-style 字体样式，正常，斜体
* font-weight 字重
* text-transform 字体转化 大小写相关
* text-decoration 修饰线
* text-shadow 文字阴影，多阴影使用逗号隔开

缩写

style,weight,size/line-height,font-family

### 自定义字体

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

### 文本布局

* text-align 文本对齐
* line-height 行高
* letter-spacing 字母间隙
* word-spacing 单词间隙
* text-indent 文本缩进
* text-overflow 文本溢出展示
* white-space 空白符如何处理
  * nowrap 空白符与换行符合并
  * pre 格式保留
  * pre-wrap 格式保留，自动换行
  * pre-line 空白符合并，换行符保留，自动换行
  * break-spaces 与 pre-wrap类似，不过行尾空白符过多会触发自动换行
* word-break 单词中断
  * normal 正常
  * break-all 单词截断换行显示，遇到下一个长单词不换行
  * keep-all 不换行
  * break-word 单词截断，遇到下一个长单词换行，不推荐

### 列表

* list-style-type 修饰类型
* list-style-position 
* list-style-image

<!-- TODO 检查是否已有更改 -->

### 链接

伪类区分状态

* link 拥有目的地址的链接
* visited
* hover
* focus
* active

相关样式

* cursor 悬浮时鼠标类型
* outline 聚焦时外部轮廓
