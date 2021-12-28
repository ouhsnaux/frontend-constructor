## colors

6位 和 8位 16进制
颜色英文
rgb,rgba,hsl,hsla



## Boolean

true, false

if 三元运算

## null

一般由函数运算得出。
最终的 `null` 输出到 `css` 会被忽略。

```scss
// index.scsss
$fonts: ("serif": "Helvetica Neue", "monospace": "Consolas");

h3 {
  font: 18px bold map-get($fonts, "sans");
}
```

```css
/* index.css */
h3 {
  font: 18px bold;
}
```

## function

`meta.get-function` 将函数作为值传递
`meta.call` 调用作为值的函数

## lists

不可更改类型，每次运算都生成一个新的。

可以根据 `,`,空格，斜杠分割。
不需要用括号包裹，可以用小括号和中括号。
下标从1开始。最后一个是 -1
单个元素可以直接作为 `list` 使用。
list.nth(list, index) 访问元素.
使用 `@each` 遍历
增 append(list, item);
查位置 list.index(list, value)，查不到返回null
修改和删除应该重新生成。

## map

小括号包裹，各项逗号分割，值与属性冒号分割。
空`map` 与空 `list` 相同，`map` 内部就是 `list` 实现的，每个键值对，都是两个值的`list`。
任何合法值都可以作为`key`,字符串最好选用有引号，避免疑惑。
增,map.set($map, $key, $value)，返回一个新map
合并，map.merge($map1, $map2),map2覆盖map1
查，map.get($map, $key)，找不到返回 `null`
使用 `@each` 遍历,修改和删除应该重新生成一个map
