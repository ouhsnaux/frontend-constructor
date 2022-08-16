# canvas

## 用途

通过 `<canvas>` 标签和 `JavaScript` 画图。
可以用来制作动画，游戏，数据可视化，操作图片，视频处理等。

主要用于2D领域

## 使用

### HTML

1. 给 `canvas`元素添加id
2. 最好指定宽和高
3. canvas标签内添加候补内容
4. 必须包含关闭标签 `</canvas>`

### JS 端

1. 通过DOM操作获取canvas元素, `document.getElementById('canvas')`
2. 获取上下文，`canvas.getContext('2d');` 通过该上下文画图

## 图形

### 长方形

* `fillRect(x, y, width, height)` 方形盒
* `strokeRect(x, y, width, height)` 方形框
* `clearRect(x, y, width, height)` 清空方形区域

### 线

* beginPath() 开始画线
* closePath() 停止画线
* moveTo(x, y) 移动到某个点
* lineTo(x, y) 画线到某个点
* stroke() 显示已画的线
* fill() 填充已画的线围城的封闭区域
