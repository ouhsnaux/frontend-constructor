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