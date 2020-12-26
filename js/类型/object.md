# 对象

## 定义

字面形式

const obj = { a: 1 }

构造形式

let a = new Array(5);

### 内置对象

* String
* Number
* Boolean
* Object
* Array
* Function
* RegExp
* Date
* Error

## 描述符

* 数据属性 `value / writable / enumerable / configurable`
* 存取器属性 `get / set / enumerable / configurable`
* `writable` 为 `false` 不可直接修改，但是可以配置修改值或get/set
* `configurable` 为 `false` 不可改为 `true`，属性不可删除，但可以将 `writable` 变为 `false`
* `Object.preventExtensions()` 禁止对象扩展，可通过调用 `Object.esExtensible()` 来检测
* `Object.seal()` 除不可扩展外，属性不可配置，可通过`Object.isSealed()`来检测
* `Object.freeze()` 更加严格，除不可扩展和不可配置之外，不可修改，存取器属性不受影响，通过 `Object.isFrozen` 检测。

## 存取

### [[get]]

属性名可以是 `Symbol`，如果对象中不存在查找的属性，就会遍历 `prototype`，并依次往上查找，直到找到或查询到顶层 `prototype`。

### [[put]]

* 如果当前对象存在该属性，直接修改
* 判断原型链中是否存在属性，没有的话直接在当前对象添加一个属性
* 该属性可读，直接添加，不可读，则不做操作
* 该属性为存取器属性，调用 `set`

## 复制

### 浅层复制

* Object.assign(newObj, oldObj);
* newObj = { ...oldObj };

这样只会复制值，而不会复制属性描述符(writable...)

### 深层复制

#### JSON.parse + JSON.stringify

对于 `JSON` 安全的对象可以使用 `JSON.parse(JSON.stringify(obj))` 。

异常类型

* 过滤 `undefined`
* 过滤 `Symbol`
* `Object` 遍历，不涉及原型链，不涉及不可枚举属性，循环引用会报错

内置对象

* `String`、`Number` 和 `Boolean` 对象变为基础类型
* `NaN`、`Infinity`和`-Infinity`的序列化结果为`null`
* `Object` 与 `Array` 会进行遍历
* 过滤 `Function`
* `Date` 类型无法还原，得到的是字符串
* `RegExp` 和 `Error` 类型得到的是空对象

## 遍历

| 方法 | 访问原型链 | 访问不可枚举属性 |
| :-- | :-- | :-- |
| in | true | true |
| hasOwnProperty | false | true |
| getOwnPropertyNames | false | true |
| for...in | true | false |
| Object.keys | false | false |
