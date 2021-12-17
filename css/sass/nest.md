# 嵌套

* 直观
* 兼容 `css` 语法。
* 前缀复用
* 父选择器
* 特殊情况
  * `css` 变量

## 语法

使用 `{}` 包裹子选择器，更直观地表明父子关系。

完全兼容 `css` 选择器。

## 前缀复用

连字符前相同前缀的属性，可以通过嵌套复用。

```scss
// index.scss
transition {
  property: font-size;
  duration: 4s;
  delay: 2s;
}

margin: auto {
  bottom: 10px;
  top: 2px;
}
```

```css
/* index.css */
transition-property: font-size;
transition-duration: 4s;
transition-delay: 2s;

margin: auto;
margin-bottom: 10px;
margin-top: 2px;
```

## 父选择器

在 `{}` 内部，可以使用 `&` 表示父选择器，即所有嵌套层的集合。

例子

```scss
// index.scss
.a {
  .b .c {
    &::before {
      content: '';
    }
  }
}
```

```css
/* index.css */
.a .b .c::before {
  content: '';
}
```

## 特殊情况

1. 带有 `css` 自定义变量的声明，编译后会被原样输出。
可以使用插值表明需要 `Sass` 编译
