# layout

每种布局各有优劣，无可替代。

## 普通工作流

盒模型
BFC
margin合并

## Flex box

弹性布局，便于实现垂直居中，子元素宽度自动伸缩，多列布局中所有列高度相同。

### 相关属性

* `display: flex;` 指定 `flex` 布局
* `flex-direction` 指定主轴方向，子元素按该方向排列
  * `row` 默认值，子元素沿行展开，分为多列  
  * `column` 主轴方向为列，子元素分为多行
* `flex-wrap` 当子元素过多时是否换行
  * `wrap` 换行
  * `nowrap` 不换行
* `flex-flow` 是 `flex-direction` 和 `flex-wrap` 的缩写
* `justify-content` 主轴方向对齐方式
  * `flex-start` 左对齐
  * `flex-end` 右对齐
  * `center` 居中对齐
  * `space-between` 空白均分在各元素之间，首元素之前和尾元素之后无空白
  * `space-around` 空白均分，在首元素之前和尾元素之后的空白是内部的一半
  * `space-evenly` 空白均分
* `align-items` 交叉轴对齐方式
  * `flex-start` `flex-end`
  * `center`
  * `stretch` 拉伸，占满父元素高度
* `align-content` 交叉轴空白分配方式
  * `flex-start` `flex-end`
  * `center`
  * `space-between` `space-around` `space-evenly`
  * `stretch`

### 子元素相关属性

* `align-self` 修改本元素在交叉轴的对齐方式
* `order` 元素顺序
* `flex-grow` 取值为数字，大于0时，自动扩张
* `flex-shrink` 取值为数字，大于0时，自动缩小
* `flex-basis` 指定基本宽度，
* `flex` 上面3个的缩写

## Grid

栅格布局，功能强大

### 属性

* `display: grid` 指定栅格布局
* `grid-template-columns` 指定每列宽度，空格分隔。
  * 单位可以是`fr`，表示自适应
  * 如果多列宽度相同，推荐使用 `repeat` 函数，指定数量和宽度 `repeat(3, 1fr)`
  * 指定最小值，使用 `minmix` 函数，`minmax(100px, auto)`，最窄 `100px`
  * 每个元素指定最小宽度，每行尽可能多的放置元素 `repeat(auto-fill, minmax(200px, 1fr))`
* `grid-auto-columns` 给每列指定默认宽度
* `grid-template-rows` 推荐每行高度
* `grid-auto-rows` 给每行指定默认高度
* `row-gap` 每行之间的间距
* `column-gap` 每列之间的间距
* `gap` 同时设置行和列的间距
* `grid-template-areas` 指定子元素位置

### 子元素属性

* `grid-column` 指定列的开始和结束，以 `/` 分割，是 `grid-column-start` 和 `grid-column-end` 的缩写
* `grid-row` 指定行，是 `grid-row-start` 和 `grid-row-end` 的缩写
* `grid-area` 指定位置

### 指定位置

可以使用 `grid-column` 和 `grid-row`,
也可以使用 `grid-template-areas` + `grid-area`

```css
.container {
  display: grid;
  grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer";
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: sidebar;
}

footer {
  grid-area: footer;
}
```

## Float

流式布局，创建浮动元素，通常用于图片被文字环绕。
浮动元素脱离文档流，周围的元素虽然不显示在浮动元素下方，
但是却占据着该空间，给附件的元素添加背景图可看到。

后续元素使用 `clear` 清除浮动

父元素的高度计算不包括浮动元素，导致高度塌陷。
有两种解决方法

1. 创建 `BFC`
1. 添加伪元素清除浮动

    ```css
    .class::after {
      display: block;
      content: '';
      clear: both; 
    }
    ```

## Position

### 取值

* `static` 默认值，正常布局
* `relative` 相对定位，脱离文档流，原来的空间保留，可相对原来的位置调整
* `absolute` 绝对定位，脱离文档流，不占据原来的空间。
* `fixed` 固定定位，脱离文档流，不占据原来的空间，页面滚动时位置不变
* `sticky` 粘性定位，正常情况下类似于相对定位，滚动到某一位置时类似于固定定位

### 定位基准

1. `static` `relative` 和 `sticky` 的定位基准是最近非内联元素的祖先元素的 `content box`
2. `absolute`  最近 `position` 不是 `static` 的祖先元素的 `padding`
3. `fixed` 视口
4. `absolute` 或 `fixed` 的基准也可能是其他最近祖先元素
   1. `transform` 或 `perspective` 值不是 `none`
   2. `will-change` 的值是 `transform` 或 `perspective`
   3. `filter`
   4. `contain` 的值是 `paint`

### 定位属性

* `top`
* `bottom`
* `left`
* `right`
* `z-index` 多层重叠时，值大的覆盖值小的

## 多列布局

报纸的布局。每列宽度一致，不能单独更改某一列宽度。

### 属性

* `column-count` 列数
* `column-width` 列宽
* `column-gap` 列间隙
* `column-rule` 列之间的分割线，类似于 `border`

### 子元素属性

* `column-span: all` 可占据所有列
* `break-inside: avoid` 避免同一元素在多列分割展示

## 响应式

* 响应式布局
  * 宽度使用百分比
  * 多列布局
  * flex
  * grid
* html 使用响应式图片
* 媒体查询
* 响应式单位
  * `vw vh` 视口宽高
  * `rem` 根据 `html` 元素字体大小计算
  * `em` 根据父元素字体大小计算

## 媒体查询

语法：

```css
@media media-type and (media-feature-rule) {
  /* css rules */
}
```

媒体类型

* all
* print
* screen
* speech

媒体规则，常用宽高，`min-`，`max-`，可以使用逻辑运算

`@page`
`page-break-inside: avoid` 该元素不会被分页截断
`page-break-before: always` 该元素另起一页
