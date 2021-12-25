# new

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

TODO 待补充

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


一些替换元素拥有内在尺寸和默认基线，需要修改 `vertical-align` 对齐。

## 文本样式

### fundamental text & font styling

#### 字体属性

* color 颜色
* font-family 字体
* font-size 大小
* font-style 样式，正常，斜体，倾斜，有些字体有专门的斜体，倾斜只是简单的倾斜。
* font-weight 粗体
* text-transform 转换
  * none
  * uppercase
  * lowercase
  * capitalize 首字母大写
* text-decoration 修饰, 可以接受多个值，是位置，样式和颜色的简写。
  * text-decoration-line
    * none
    * underline
    * overline
    * line-through  
  * text-decoration-color
  * text-decoration-style
    * wavy 波浪线
* text-shadow 阴影，可以有多个，值包括左右偏移量，模糊度和颜色。

#### 自定义字体

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```

#### 文本布局

* text-align 对齐方式 左中右两端对齐
* line-height 行高，除常规值，也可以是一个无单位的数字，表示字体大小的倍数。
* letter-spacing 字母距离
* word-spacing 单词距离
* text-indent 首行缩进
* text-overflow
  * ellipse …
  * clip 隐藏
* white-space
  * normal 合并空白符，自动换行
  * nowrap 合并空白符，不换行
  * pre 保留空白符，遇到换行符换行，不自动换行
  * pre-wrap 保留空白符，遇到换行符换行，自动换行
  * pre-line 合并空白符，遇到换行符换行，自动换行
  * break-spaces 类似 `pre-wrap`
* word-break
  * normal
  * break-all 随时切断单词自动换行
  * keep-all 不切断单词，不自动换行
  * break-word `normal + overflow-wrap: anywhere`
* direction ltr, rtl
* hyphens
  * none 无
  * manual 一个
  * auto 自动
* line-break
* text-align-last 最后一行对齐方式
* text-orientation 文字方向，与 `writing-mode` 配合使用
* overflow-wrap 换行文字从下一行开始，`word-break` 从本行开始
  * normal
  * anywhere
  * break-word
* writing-mode

### list

样式，可使用 `list-style` 简写，设置到列表上

* list-style-type 类型
  * upper-roman 罗马数字
  * square 方框
* list-style-position
  * inside
  * outside
* list-style-image

索引，html属性，不是css属性

* start 有序列表的第一个索引
* reserved 倒序
* value 设置当前索引号，设置到单项

图标无法调整位置，需要调整的话使用背景图片方案。

关于图标计数的高阶用法：

* [@counter-style](https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style)
* [counter-increment](https://developer.mozilla.org/en-US/docs/Web/CSS/counter-increment)
* [counter-reset](https://developer.mozilla.org/en-US/docs/Web/CSS/counter-reset)

### links

伪类区分状态

* link 拥有目的地址的链接
* visited
* hover
* focus
* active

相关样式

* cursor 悬浮时鼠标类型
* outline 聚焦时外部轮廓
