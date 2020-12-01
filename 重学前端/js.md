# JavaScript

## 类型

### 种类

* undefined
* null
* string
* number
* boolean
* object
* symbol

### 转换

* 转基础类型
* StringToNumber
* NumberToString
* 装箱
* 拆箱

## 对象

具有高度动态性的属性集合。

### 数据属性

特征值：

* value 值
* writable 是否可写
* enumerable 是否可枚举，也就是 for in 可遍历
* configurable 是否可配置，也就是能否被删除和改变特征值

### getter/setter 访问器属性

特征值：

* get 取值函数
* set 写值函数
* enumerable 是否可枚举，也就是 for in 可遍历
* configurable 是否可配置，也就是能否被删除和改变特征值

## 原型

Object.create
Object.getPrototypeOf
Object.setPrototypeOf

## 执行

### 任务，事件循环

当拿到一段代码时，宿主环境会发起任务，传递给 `JavaScript` 引擎，并要求它执行。
当宿主遇到一些事件时，会继续发起任务，把一部分代码交给 `JavaScript` 引擎来执行，比如 `setTimeout`，浏览器事件……

但是在 `ES5` 之后，借助 `Promise`，`JavaScript` 引擎自己也能发起任务了。

我们把宿主发起的任务叫宏任务，把 `JavaScript` 引擎发起的任务叫微任务。
宏任务每次执行到底部，都会检查微任务队列，如果存在微任务就执行，为空才去执行下一个宏任务。

微任务优先于宏任务执行，这也同样表明，`setTimeout` 不一定能按时完成。

