# 运算符

1. 相等与不相等 `==, !=`
2. 数学运算符 `+,-,*,%,math.div()`
3. 关系运算符 `<,<=,>,>=`
4. 布尔运算符 `and, or, not`
5. 字符串运算符 `+,-,/`

## 相等

`==` 类型与值完全相同，才相等。

`Number` 单位相同，值也相同，或不同单位，转换后值相同。
`String` 有引号和无引号，内容相同的字符串相等。
`Color` 转换后相同即相等。
`List` 内容完全相同即相等，括号不同，分割符不同都不相等。
`Map` `key`,`value` 都相等即相等
`true, false, null` 只等于自己
`Functions` 属于引用类型，只等于自身，即使内容相同也不相等。

```scss
@debug 1px == 1; // false
@debug 96px == 1in; //true

@debug "abc" == abc; // true

@debug hsl(34, 35%, 92.1%) == #f2ece4; // true

@debug (5px 7px 10px) == (5px 7px 10px); // true
@debug (5px 7px 10px) == (5px,7px,10px); // false
@debug (5px 7px 10px) == [5px 7px 10px]; // false 

$theme: ("venus": #998099, "nebula": #d2e1dd);
@debug $theme == ("nebula": #d2e1dd, "venus": #998099); // true
@debug $theme != ("venus": #998099, "iron": #dadbdf); // true
```

## 数学运算符

### 单位

* 如果至少有一方没有单位时，按相同单位处理。
* 否则先做单位换算
  * 如果无法换算，则报错
  * 换算成功后再比较大小

### 一元运算符

`+,-` 也可以作为一元运算符，不过容易引起歧义，写法需要注意

* 作为二元运算符，总是在符号前后都加空格。
* 作为一元运算符，在符号前加空格。
* 如果作为一元运算符，且作为 `list` 中的一个，应该加括号。
* 如果字符串中包括 `+,-`，最好使用有引号字符串，与带单位数字运算区分。

### 除法

`/` 在 `css` 中通常作为

## 关系运算符

`>, >=, <, <=`

只用于操作数字。

单位处理同数学运算符。




TODO [calculation](https://sass-lang.com/documentation/values/calculations)