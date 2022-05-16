# Web Worker

前端并发机制，内部不能修改DOM。

## 语法

1. 需要额外创建一个js文件
2. 创建worker对象，`new Worker('./worker.js')`
3. 通过postMessage方法和onmessage回调通信
