# Number

- [Number](#number)
  - [语法](#语法)
  - [单位](#单位)
    - [乘除](#乘除)
    - [加减合并](#加减合并)
    - [其他](#其他)
      - [添加单位](#添加单位)
      - [百分比](#百分比)
  - [精度](#精度)

## 语法

- 有无单位都属于 `Number` 类型。
- 支持科学计数法。`5e3 = 5000`。
- 除法不会自动取整 `5 / 2 = 2.5`。

## 单位

运算时，单位也参与运算，并且与现实生活相同。
使用者需保证最终的单位可用。

### 乘除

```scss
@debug 5px * 1px; // 5px*px
@debug math.div(30deg / 2s); // 15deg/s
// 
```

### 加减合并

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

## 精度

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
