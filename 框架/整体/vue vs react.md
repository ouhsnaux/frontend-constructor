# Vue vs React

## 相同点

* 数据驱动
* 组件化
* 虚拟 `DOM`
* SSR

## 不同点

1. 数据变化驱动页面刷新的实现原理
2. 父子组件间通信

### 数据变化

`Vue2.0` 使用 `Object.defineProperty` 重写 `get,set`,监听数据变化，
`Vue3.0` 使用 `Proxy`。

`React` 通过不可变数据，只有重新赋值才会驱动页面更新。
