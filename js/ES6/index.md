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

    // 正则内部使用具名组匹配 \k<组名>
    const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
    RE_TWICE.test('abc!abc') // true
    RE_TWICE.test('abc!ab') // false
    ```

* indices 执行exec返回结果的开始和结束索引
* matchAll，相当于循环调用match

## 函数

* rest
* 箭头函数，简洁，没有 `prototype, arguments, caller`
  * 没有自己的this，取定义时所在作用域的this
  * 不可以当作构造函数，没有prototype
  * 不可以使用arguments对象
  * <!-- TODO --> 不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
* 尾调用：函数的最后一步是调用另一个函数。
  * 不能有其它操作，不能不返回值。
  * 内层函数不能使用外层函数的变量。
  * 可以减少函数调用栈，释放内层变量等空间。
  * 应用：递归函数，尾递归，调用栈空间减少到1。
  * 改写套路：把所有用到的内部变量改写成函数的参数。
  * 只有严格模式可用
  * 手段是较少调用栈，避免溢出，可以改造成循环

      ```js
      function tco(f) {
        var value;
        var active = false;
        var accumulated = [];

        return function accumulator() {
          accumulated.push(arguments);
          if (!active) {
            active = true;
            while (accumulated.length) {
              value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;
          }
        };
      }

      var sum = tco(function(x, y) {
        if (y > 0) {
          return sum(x + 1, y - 1)
        }
        else {
          return x
        }
      });

      sum(1, 100000)
      // 100001
      ```

* 柯里化，将多参数的函数转换成单参数的形式 <!-- TODO 深入 -->

## 数组

* ... 扩展运算符，empty => undefined，解构数组只能在函数传参中使用，复制没有此限制
* Array.from，将类数组和包含遍历器的对象转化为数组，第二个参数接收map函数，empty => undefined
* Array.of
* copyWithin
* find, findIndex
* fill，第二第三个参数可以指定起始位置，填充结果都是浅拷贝
* entries, keys, values,返回遍历器对象
* includes 第二个参数表示开始位置，大于数组长度则从0开始
* indexOf的问题
  * 不够语义化，需要对结果与-1比较
  * 比较使用严格相等，对NaN判断出错
* flat,第一个参数表示拉平的层数，默认是1。
* flatMap先执行map函数，再拉平一层
* at，取值，支持负数
* sort方法是稳定的

## 对象

* 属性遍历方法
  * for in，会遍历原型链，需配合 Object.hasOwnProperty
  * Object.keys 自身可枚举属性
  * Object.getOwnPropertyNames，自身属性，包括不可枚举
  * Object.getOwnPropertySymbols，自身 `Symbol` 类型的属性，前面的方法都不包括
  * Reflect.ownKeys(obj)，自身所有属性，相当于上两个方法的和
* 属性遍历顺序
  * 首先遍历所有数值（自然数）键，按照数值升序排列。
  * 其次遍历所有字符串键，按照加入时间升序排列。
  * 最后遍历所有 Symbol 键，按照加入时间升序排列。
* super，this执行调用函数的对象，super指向该对象的原型对象，只能用在方法中 <!-- TODO [super](https://es6.ruanyifeng.com/#docs/object#super-%E5%85%B3%E9%94%AE%E5%AD%97) -->
* 解构赋值
* 扩展运算符，等同于`Object.assign`，无法复制存取器，得到的是计算后的值。
* AggregateError，同时触发多个错误时使用
* Object.is，NaN相同，-0不等于+0，其它与强相等相同
* `__proto__, Object.getPrototypeOf, Object.setPrototypeOf` <!-- TODO [__proto__实现](https://es6.ruanyifeng.com/#docs/object-methods#__proto__%E5%B1%9E%E6%80%A7) -->
* Object.create，第二个参数会被执行 `Object.defineProperties`，并且默认不可遍历
* `Object.keys, Object.values, Object.entries` 遍历器
  * 对象转Map `new Map(Object.entries(obj))`
* `Object.fromEntires`, Object.entries的逆操作
  * Map转对象 `Object.fromEntries(map)`
  * url参数转对象 `Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))`

## 运算符

* `**` 指数运算符，右结合
* `?.` 键判断运算符，有短路机制 `s?.a` 相当于 `s == null ? undefined : s.a`
  * `obj?.prop` // 对象属性是否存在
  * `obj?.[expr]` // 同上
  * `func?.(...args)` // 函数或对象方法是否存在
  * 右侧不能直接跟数字，语法与三元运算符重合
* `??` null判断运算符，只有 `null, undefined` 时才使用默认值
* `&&=, ||=, ??=` 逻辑赋值运算符

## Symbol

* 引入原因：保证每个属性的名字都是独一无二，从根本上防止属性名的冲突。
* description
* 消除魔术字符串
* Symbol.for, Symbol.keyFor, 在 `iframe, service worker` 中都能共享同一个值。
* 内置值
  * hasInstance
  * isConcatSpreadable
  * species
  * match, replace, search, split
  * iterator
  * toPrimitive，3种模式
    * Number：该场合需要转成数值
    * String：该场合需要转成字符串
    * Default：该场合可以转成数值，也可以转成字符串
  * toStringTag `[Object xxx]`
  * unscopables

## Set

* Set 成员都唯一（NaN=NaN，-0=+0）
* set 可以接受一个数组（或具有iterable）作为参数
* set属性和方法，size, add, delete, has, clear
* 使用set去重，使用扩展运算符和Array.from转化为数组
* 遍历器keys, values, entries 遍历方法forEach，key与value相同，都是其中的值
* WeakSet 成员只能是弱引用类型，不会被计入内存回收机制
  * 不能遍历
  * 引用类型，所以只能是对象

## Map

* 键名可以是任意数据类型
* map不仅仅接受二维数组，任何具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以使用
* 属性和方法，size, set,get,has,delete,clear
* 遍历
  * 遍历器keys, values, entries，内部Iterator就是entries
  * 遍历方法forEach，第一个参数为函数，其参数顺序为value, key, map
  * 遍历顺序为插入顺序
* WeakMap键名与WeakSet成员类似

## WeakRef

* 用于创建弱引用的数据结构
* deref方法，如果还存在返回该对象

## FinalizationRegistry

* 通过给构造函数传递回调，生成清理器
* 清理器register监听数据，被回收时调用上一步的回调函数，unregister取消监听

## Proxy

## 进展

第15章

<https://es6.ruanyifeng.com/#docs/proxy>

## TODO

* [[PrimitiveValue]]，双括号是什么东西，能否访问，怎么用
* 正则的source是从原型对象上获取的存取器计算得到的，是怎么计算的
* 单例模式，不使用全局变量存储的原因是，可被修改。
* Symbol.toPrimitive
* [Symbol 单例模式最后一段](https://es6.ruanyifeng.com/#docs/symbol#%E5%AE%9E%E4%BE%8B%EF%BC%9A%E6%A8%A1%E5%9D%97%E7%9A%84-Singleton-%E6%A8%A1%E5%BC%8F)
* with, Symbol.unscopables
