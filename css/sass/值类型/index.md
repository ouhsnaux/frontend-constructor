# 值类型

1. Number
2. String
3. Color
4. Boolean
5. null
6. Function
7. List
8. Map

## Number

- 有无单位都属于 `Number` 类型。
- 支持科学计数法。`5e3 = 5000`。
- 除法不会自动取整 `math.div(5,2) = 2.5`。

### 单位

运算时，单位也参与运算，并且与现实生活相同。
使用者需保证最终的单位可用。

#### 乘除

```scss
@debug 5px * 1px; // 5px*px
@debug math.div(30deg / 2s); // 15deg/s
// 
```

#### 加减合并

可换算的单位可加减，否则会报错

```scss
// CSS defines one inch as 96 pixels.
@debug 1in + 6px; // 102px or 1.0625in

@debug 1in + 1s;
//     ^^^^^^^^
// Error: Incompatible units s and in.
```

### 其他

#### 添加单位

使用插值创建出的是 `String`类型，
使用 `* 1px` 得到的是 `Number`类型。
不过最好创建变量的时候就带上单位。

```scss
$number: 16;

#{$number}px; // String 16px
$number * 1px; // Number 16px 
```

#### 百分比

`%` 也是单位，`50%` 与 `0.5` 不相等。

```scss
@use "sass:math";

@debug 100% == 1; // false
@debug 10% * 10%; // 100%*%

// 百分比与数字转化
@debug math.div(50%, 100%); // 0.5 百分比转化为小数
@debug 0.5 * 100%; // 50% 小数转化为百分比
@debug math.percentage(0.5); // 50% 小数转化为百分比
```

### 精度

精确到小数点后 `10` 位。
后边的数字进行4舍5入。
可以对小数进行相等比较，比如经典的 `0.1 + 0.2 = 0.3`，是成立的。
数字计算过程中是不丢失精度的，只对最后的结果做处理。

```scss
@use "sass:math";

@debug 0.01234567891; // 0.0123456789
@debug 0.01234567895; // 0.012345679

@debug 0.1 + 0.2 == 0.3; // true

@debug math.div(1, 1e12) * 1e11; // 0.1
```

## String

包括**有引号**字符串和**无引号**字符串。

### 有引号

`'` 和 `"` 都可以用。
单引号，双引号，换行（`\a`）及 `Unicode` 编码需要被转义。

插值使用方式：

```scss
$roboto-variant: "Mono";
@debug "Roboto #{$roboto-variant}"; // "Roboto Mono"
```

### 无引号

插值使用方式：

```scss
$prefix: ms;
@debug -#{$prefix}-flex; // -ms-flex
```

使用无引号 `String` 需要注意与其它数据类型的区分。
尽量使用有引号 `String`。

转义非常奇怪，最好不要使用

## Color

- 6位和8位 16进制
- 颜色保留字
- `rgb,rgba,hsl,hsla`

## Boolean

`true, false`

`if` 函数三元运算

## null

一般由函数运算得出。
最终输出到 `css` 的 `null` 会被忽略。

```scss
// index.scsss
$fonts: ("serif": "Helvetica Neue", "monospace": "Consolas");

h3 {
  font: 18px bold map-get($fonts, "sans");
}
```

```css
/* index.css */
h3 {
  font: 18px bold;
}
```

## Function

`meta.get-function` 将函数作为值传递
`meta.call` 调用作为值的函数

## list

不可更改类型，每次运算都生成一个新的。

- 分隔符可以是 `,`，空格和斜杠。
- 可以被小括号或中括号包裹，也可以没有，因此单个元素可以作为只有一个元素的 `list`。
- 下标从1开始。最后一个是 -1

常见操作：

- 查询第 `n` 个元素，`list.nth($list, $n)`
- 遍历，使用 `@each` 遍历
- 新增元素，`append($list, $item)`，返回一个新的 `list`
- 查询下标，`list.index($list, $value)`，查不到返回 `null`
- 由于是不可更改类型，修改和删除其中的元素应通过遍历重新生成。

## map

- 分隔符，各项 `,` 分隔，值与属性 `:` 分隔
- 小括号包裹，空`map` 与空 `list` 相同，`map` 内部就是 `list` 实现的，每个键值对，都是两个值的`list`。
- `key`，任何合法值都可以作为`key`，字符串最好选用有引号，避免疑惑。

常见操作：

- 增，`map.set($map, $key, $value)`，返回一个新map
- 合并，`map.merge($map1, $map2)`，有同名 `key` 时，`map2` 的值会覆盖 `map1` 的值
- 查，`map.get($map, $key)`，找不到返回 `null`
- 使用 `@each` 遍历
- 修改和删除应该遍历生成一个新的 `map`
