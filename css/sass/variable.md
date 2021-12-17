# 变量

* 以 `$` 开头。
* 支持配置。
* 作用域
* 内置变量

## 支持配置

变量定义时，通过在结尾添加 `!default` 表示该变量可以配置。

引用含有可配置变量的文件时，添加 `with` 动态配置变量的值。

```scss
// _library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius;
  box-shadow: $box-shadow;
}

// style.scss
@use 'library' with (
  $black: #222,
  $border-radius: 0.1rem,
)
```

```css
code {
  border-radius: 0.1rem;
  box-shadow: 0 0.5rem 1rem rgba(34, 34, 34, 0.15);
}
```

## 作用域

在 `{}` 内部的同名变量，优先级更高。

内部声明与修改变量不会影响外部变量。

如果需要在内部修改外部的同名变量，在末尾添加 `!global`。

控制流（`if` 等）的 `{}` 不会创建作用域，
会直接修改外部变量，
内部无法声明新变量。

## 其它

* 变量不允许使用插值进行创建。
