# ES6

## let & const

* 具有块级作用域，可以减少许多IIFE
* 不存在变量提升
* 暂时性死区，声明前使用会报错
* 不允许重复声明

`globalThis` 获取全局 `this`

问题：

在for循环中声明函数或调用异步函数，取使用var声明的步进变量会获取不到当时的值。解决方式使用 `let` 创建块级作用域或使用IIFE创建闭包。

## 解构赋值

## 字符串

* Unicode 表示法，只能表示 `\u0000 ~ \uFFFF` 中的字符。双字节 `"\uD842\uDFB7"` 或 `"\u{20BB7}"`
* for of 和 `...` 可以正确遍历4字节字符
* 模板字符串
* `includes, startsWith, endsWith` 支持第二个参数表示开始位置

## 正则

* `u` 修饰符，unicode 属性
* `y` 修饰符 `sticky` 属性
* `s` 修饰符，`.` 可以匹配行终止符
* `source, flags`
* 先行断言 `?=, ?!`
* 后行断言 `?<=, ?<!` <!-- TODO --> [后行断言例子](https://es6.ruanyifeng.com/#docs/regex#%E5%90%8E%E8%A1%8C%E6%96%AD%E8%A8%80)
* Unicode 属性类，允许使用\p{...}和\P{...}（\P是\p的否定形式）代表一类 Unicode 字符，匹配满足条件的所有字符。`/\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu` 匹配所有EMOJI表情
* 具名组匹配

    ```javascript
    // 匹配
    const RE_DATE = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

    const matchObj = RE_DATE.exec('1999-12-31');
    const year = matchObj.groups.year; // "1999"
    const month = matchObj.groups.month; // "12"
    const day = matchObj.groups.day; // "31"

    // 替换
    let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
    '2015-01-02'.replace(re, '$<day>/$<month>/$<year>')
    ```

## 进展

第6章

<https://es6.ruanyifeng.com/#docs/regex#%E5%BC%95%E7%94%A8>
