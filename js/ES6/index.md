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

* 代理对对象的访问，可以改变常规代码写法，也可以作为工具写第三方代码
* 语法：`new Proxy(target, handler)`，参数为目标对象和拦截行为
  * 未定义的拦截行为，操作与访问对象相同
  * 可以将代理设置为对象的proxy属性，方便调用
* 13种拦截操作
  * 对象常用操作4个
    * get(target, propKey, receiver): 拦截读取属性
      * receiver总是指向原始的读操作所在的那个对象，一般情况下就是 Proxy 实例。当proxy作为原型对象时，指向对象
      * 如果一个属性不可配置（configurable）且不可写（writable），返回值必须与其值相同
    * set(target, propKey, value, receiver): 拦截设置属性
      * 不可写时，无法设置
      * receiver总是指向原始的读操作所在的那个对象，一般情况下就是 Proxy 实例。
      * 返回true
    * has(target, propKey) 拦截in操作 返回boolean，不可拦截不可配置的属性和不可扩展的对象中已存在的属性
    * deleteProperty(target, propKey) 拦截delete操作，
      * 返回boolean，返回true表示删除成功
      * 不可配置的属性不可删除
  * 属性描述符相关5个
    * ownKeys(target) 拦截获取key相关操作，包括以下几种
      * Object.keys
      * Object.getOwnPropertyNames
      * Object.getOwnPropertySymbols
      * for in
      * 返回结果依然会根据情况过滤，不存在的属性直接过滤
      * 返回的数组成员只能是字符串或 symbol，不可配置的属性必须返回
      * 如果目标对象不可扩展，返回结果需与其中的属性方法保持完全一致
      * 可以改变遍历顺序
    * getOwnPropertyDescriptor(target, propKey) 拦截获取属性描述符详情
    * defineProperty(target, propKey, propDesc) 拦截定义属性描述符，返回布尔值
      * Object.defineProperty(target, propKey, propDesc)
      * Object.defineProperties(target, propDescs);
    * preventExtensions(target) 拦截禁止扩展，返回boolean
      * 只有不可扩展时才能返回true，通常需要在内部调用一次Object.preventExtensions(target);
    * isExtensible(target) 拦截查询是否可扩展，返回boolean，必须与能否扩展保持一致
  * 原型相关2个
    * getPrototypeOf(target) 拦截获取原型对象
      * 拦截方法
        * Object.prototype.__proto__
        * Object.prototype.isPrototypeOf()
        * Object.getPrototype
        * Reflect.getPrototypeOf
        * instance of
    * setPrototypeOf(target, proto) 拦截设置原型对象，不可扩展的对象不得改变目标对象的原型
  * 函数对象相关2个
    * apply(target, thisBinding, args) 拦截函数调用，thisBinding指this
      * 直接调用
      * call,apply
      * bind
    * constructor(target, args, newTarget) 拦截作为构造函数调用，
      * target必须是函数
      * newTarget是创造实例对象时，new命令作用的构造函数
      * 返回结果必须是对象
      * this指向handler

### Proxy.revocable

返回一个代理实例和一个回收实例的方法，回收后无法访问代理。

### this执行

访问目标对象的方法时：

* proxy调用时，一般指向proxy
* 目标对象调用时，一般指向目标对象

拦截器中this指向handler

## Reflect

1. 将对象操作从Object上转移到 `Reflect`
2. 修改返回结果，使其更合理
3. 命令式改为函数式
4. 总共有13个方法与Proxy一一对应。

receiver为存取器中的this指向的对象。
在proxy的set中如果调用了Reflect.set，并且传入了receiver，还会调用proxy的defineProperty

## Promise

异步编程的一种解决方案，finally总是返回传入的值和抛出原始错误
Promise.any 抛出的错误类型是AggregateError

## Iterator

遍历器，提供了一种遍历所有数据类型的方法。主要与 for of 配合。
包含一个next函数，每次调用返回一个包含value和done的对象。done: false和value: undefined属性都是可以省略的，
return 函数，可选，遇到break或出错时调用
<!-- TODO throw 函数，一般配合generator函数 -->

Iterator接口部署在数据的Symbol.iterator属性，值是一个返回Iterator的函数。数组等可遍历的数据类型内置了Symbol.iterator属性，给其他数据类型添加时，可以借用。

内置遍历器的数据类型：

* Array
* Map
* Set
* arguments
* TypedArray
* String
* NodeList

调用 Iterator 接口的场合：

* 解构赋值
* 扩展运算符
* yield*
* 其它接受数组作为参数的场合
  * for of
  * Array.from
  * Map, Set, WeakMap, WeakSet
  * Promise.all, Promise.race

## Generator

也是一种异步解决方案。可以理解为一个状态机。

### 语法

* function与函数名之间有一个星号，内部使用yield表示一个状态，后面跟返回的结果。
* 作为方法的简写是 `* func() {}`
* generator函数返回一个遍历器，调用next方法，执行到yield或return，
* 该遍历器正好可以被 `for of` 等使用，注意最后的 `return` 表达式不会被遍历。
* next可以传值，替换上一个yield表达式

### 错误处理

* generator.throw() 抛出错误，可多次调用，先内部捕获再外部捕获。
* 内部捕获后会继续执行到yield。
* 如果内部没有捕获错误，出错会结束generator，下次调用返回 { done: true, value: undefined }

### 终结

* generator.return 返回给定的值，并终结遍历Generator函数
* 如果内部有 `try finally` 先执行 `finally` ，不得不说 `finally` 优先级太高了

```js
function* numbers () {
  yield 1;
  try {
    yield 2;
    yield 3;
  } finally {
    yield 4;
    yield 5;
  }
  yield 6;
}
var g = numbers();
g.next() // { value: 1, done: false }
g.next() // { value: 2, done: false }
g.return(7) // { value: 4, done: false }
g.next() // { value: 5, done: false }
g.next() // { value: 7, done: true }
```

### 嵌套

 `yield *` 在generator函数中自动执行遍历器或遍历带有遍历器的对象，

```js
function* concat(iter1, iter2) {
  yield* iter1;
  yield* iter2;
}

// 等同于

function* concat(iter1, iter2) {
  for (var value of iter1) {
    yield value;
  }
  for (var value of iter2) {
    yield value;
  }
}
```

yield* 的返回值是内部被代理的generator函数return语句的返回值，注意 `return` 不会被遍历。

通过遍历，可以用于扁平化数组，遍历二叉树

### this

* generator函数必须具有prototype，可以通过给其添加属性来复用。
* generator内部最终返回的遍历器对象，而不是this，因此操作this可能不符合预期，可以通过 `gen.call(gen.prototype) 将属性添加到原型对象。
* 不能作为构造函数与new一起使用

### 含义

* 用于实现状态机的最佳结构
* Generator 函数被称为“半协程”（semi-coroutine），意思是只有 Generator 函数的调用者，才能将程序的执行权还给 Generator 函数。如果是完全执行的协程，任何函数都可以让暂停的协程继续执行。

### 应用

* 异步操作的同步表达，在异步函数内部的回调中调用遍历器的next
* 控制流管理
* 部署Iterator接口
* 作为一种数据结构

### 异步应用

异步应用方案：

* 回调，ES6自带方案，会引起回调函数地狱，语义化不够清晰
* Promise，可以解决回调地狱，变函数嵌套为链式调用，语义化有所好转，但仍不够清晰
* Generator，代码非常像同步，语义化清晰
* 事件监听
* 发布/订阅

Generator运行流程如下：

1. 协程A开始执行
2. 协程A执行到一半，暂停，执行权转移到协程B
3. 协程B交还执行权
4. 协程A恢复执行

#### Thunk

JavaScript 语言是传值调用，还有一种传名调用，将表达式转化为直接返回的函数，这个临时函数就叫做Thunk。

JavaScript的Thunk函数含义有所不同，Thunk函数替换的不是表达式，而是多参数函数，将其替换为只接受回调函数作为参数的单参数函数

```js
// 自动执行Generator，每个yield表达式必须是Thunk
function run(fn) {
  var gen = fn();

  function next(err, data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }

  next();
}

function* g() {
  // ...
}

run(g);
```

Thunk 函数并不是 Generator 函数自动执行的唯一方案。因为自动执行的关键是，必须有一种机制，自动控制 Generator 函数的流程，接收和交还程序的执行权。回调函数可以做到这一点，Promise 对象也可以做到这一点。

## async

generator的语法糖

错误处理

* try catch
* await 后的异步函数后添加catch处理

多个异步不互相依赖

* 使用Promise.all
* 使用变量暂存执行后的promise，后续await这个promise
* forEach使用async不会阻塞，使用for或reduce

顶层的await命令有点像，交出代码的执行权给其他的模块加载，等异步操作完成后，再拿回执行权，继续向下执行。

## Class

* 一种语法糖，本质还是通过函数生产对象，并挂载原型对象。
* 其中定义的方法和存取器挂载到原型对象，且不可枚举。定义的普通属性挂载到实例
* 类不会提升
* 使用static声明静态方法和属性，会直接挂载到类本身
* 私有方法和属性
  * 使用 `#` 开头
  * Class 声明内部访问私有属性必须存在，否则会报错，可以使用 `in` 判断是否存在。
  * 注意，判断私有属性时，in只能用在定义该私有属性的类或继承此类的内部。
  * Object.create()、Object.setPrototypeOf形成的继承不会传递私有属性
* 静态块
  * 关于静态属性的运算
    * 写到类外部是将类的内部逻辑写到了外部，
    * 在构造函数中声明静态属性则每次新建实例都会运行一次
  * 静态块内部可以使用类名或this，指代当前类。
  * 每个类只能有一个静态块，在静态属性声明后运行。静态块的内部不能有return语句。
* new.target new作用的那个构造函数，
  * 判断函数是否通过new调用
  * 实现接口，只能继承，不能实例化

### 继承

* extends
* super指向
  * 在构造函数中指代父级构造函数，
  * 在方法中指代父级的原型对象，不过this指向子类的实例
  * 在静态方法中指向父类
* 子类的构造函数必须调用super，调用super之后才能使用this
* 用super的时候，必须显式指定是作为函数、还是作为对象使用，
* 除了私有属性，父类的所有属性和方法，都会被子类继承，其中包括静态方法。
* 继承包含两条原型链
  * 属性和方法继承，子类的 `prototype` 的`__proto__`指向父类的prototype
  * 静态属性和方法继承，子类的 `__proto__` 指向父类
* ES6的继承是可以继承内置构造函数的，ES5无法做到<!-- TODO 试试TS编译或babel编译 -->
* 继承Object，不能使用super，只能使用new Object

## 模块化

ES6之前的模块加载方案，只能在__运行时__确定依赖关系，以及输入和输出的变量。没办法做静态优化。__不存在动态更新__。__同步加载__

* CommonJs 主要用于浏览器
* AMD 主要用于服务器

ES6的模块加载方案，尽量的__静态化__，使得编译时就能确定模块间的依赖关系，以及输入和输出的变量。__值会动态更新__。import命令具有提升效果，会提升到整个模块的头部，首先执行。这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。通过函数调用的方式也可以__动态加载__

* 单个
* 多个
* 默认
* `*`
* 别名

export

```js
// 单个输出
export var firstName = 'Michael';

// 多个同时导出，导出已声明变量需要使用此方式
export { firstName, lastName, year };

// 别名
export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};

// 默认导出
// export default命令的本质是将后面的值，赋给default变量，
export default function () {
  console.log('foo');
}
// 也可以写作
export {add as default};

// 混合使用
export default function (obj) {
  // ···
}
export function each(obj, iterator, context) {
  // ···
}
export { each as forEach };
```

import

```js
// 只执行，不导入，重复import只会执行一次
import 'lodash';

// 导入
import { firstName, lastName, year } from './profile.js';

// 别名
import { lastName as surname } from './profile.js';

// 整体加载并改名
import * as circle from './circle';

// 导入默认导出内容
import customName from './export-default';
// 也可以写作
import { default as foo } from 'modules';

// 混合使用
import _, { each, forEach } from 'lodash';
```

export与import结合，导出其它模块的内容，本模块不能使用

```js
// 导出常规属性
export { foo, bar } from 'my_module';

// 导出并改名
export { foo as myFoo } from 'my_module';

// 导出所有属性，不包括default
export * from 'my_module';
// 并改名
export * as ns from "mod";

// 导出默认属性
export { default } from 'foo';

// 默认属性改名
export { default as es6 } from './someModule';
```

import() 异步动态加载，返回Promise，应用场景：

* 按需加载
* 条件加载
* 动态路径

默认输出为结果的default属性

### 加载实现

#### 浏览器加载

`<script>`引用使用import的文件或内容需指明type="module"。都会异步加载，不会阻塞，相当于添加了defer，可以明确指定使用async。

#### 与CommonJS对比

ES6 模块是动态引用，原始值变了，import加载的值也会跟着变。由于 ES6 输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错。

ES6 模块化简称ESM，CommonJS简称CJS

Node规定，指定使用ESM需要后缀为.mjs或package.json指定 type="module"，如果还需要使用CJS，该文件后缀需要使用 `.cjs`

#### package.json

* main 指定模块加载的入口文件
* exports 优先级高于 `main`
  * 子目录别名,如果没有指定别名，就不能用“模块+脚本名”这种形式加载脚本。

    ```javascript
    // 指定src/submodule 别名为submodule
    "exports": {
      "./submodule": "./src/submodule.js"
    }
    ```

## TODO

* [[PrimitiveValue]]，双括号是什么东西，能否访问，怎么用
* 正则的source是从原型对象上获取的存取器计算得到的，是怎么计算的
* 单例模式，不使用全局变量存储的原因是，可被修改。
* Symbol.toPrimitive
* [Symbol 单例模式最后一段](https://es6.ruanyifeng.com/#docs/symbol#%E5%AE%9E%E4%BE%8B%EF%BC%9A%E6%A8%A1%E5%9D%97%E7%9A%84-Singleton-%E6%A8%A1%E5%BC%8F)
* with, Symbol.unscopables
* 对proxy使用解构赋值使用响应式的原因
* 事件循环
* 宏任务，微任务，为什么区分
* await怎么同时发多个请求
* promise A+规范及实现
* axios源码
* <https://es6.ruanyifeng.com/#docs/promise#Generator-%E5%87%BD%E6%95%B0%E4%B8%8E-Promise-%E7%9A%84%E7%BB%93%E5%90%88>
* <https://es6.ruanyifeng.com/#docs/iterator#Iterator-%E6%8E%A5%E5%8F%A3%E4%B8%8E-Generator-%E5%87%BD%E6%95%B0>
* 之所以要引入一个新的前缀#表示私有属性，而没有采用private关键字，是因为 JavaScript 是一门动态语言，没有类型声明，使用独立的符号似乎是唯一的比较方便可靠的方法，能够准确地区分一种属性是否为私有属性。另外，Ruby 语言使用@表示私有属性，ES6 没有用这个符号而使用#，是因为@已经被留给了 Decorator。
* 为什么子类的构造函数，一定要调用super()？原因就在于 ES6 的继承机制，与 ES5 完全不同。ES5 的继承机制，是先创造一个独立的子类的实例对象，然后再将父类的方法添加到这个对象上面，即“实例在前，继承在后”。ES6 的继承机制，则是先将父类的属性和方法，加到一个空的对象上面，然后再将该对象作为子类的实例，即“继承在前，实例在后”。这就是为什么 ES6 的继承必须先调用super()方法，因为这一步会生成一个继承父类的this对象，没有这一步就无法继承父类。
* 手写promise，状态使用generator
* ES5 是先新建子类的实例对象this，再将父类的属性添加到子类上，由于父类的内部属性无法获取，导致无法继承原生的构造函数。比如，Array构造函数有一个内部属性[[DefineOwnProperty]]，用来定义新属性时，更新length属性，这个内部属性无法在子类获取，导致子类的length属性行为不正常。
* 6中原型继承，不包括class extends，继承静态方法
* 静态优化
* <https://es6.ruanyifeng.com/#docs/module-loader#package-json-%E7%9A%84-exports-%E5%AD%97%E6%AE%B5>
