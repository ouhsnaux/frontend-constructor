## 有引号

`'` 和 `"` 都可以用。支持转义，单引号，双引号，换行（`\a`）及 `Unicode` 编码需要被转义。

插值使用方式：

```scss
$roboto-variant: "Mono";
@debug "Roboto #{$roboto-variant}"; // "Roboto Mono"
```

## 无引号

插值使用方式：

```scss
$prefix: ms;
@debug -#{$prefix}-flex; // -ms-flex
```

使用无引号 `String` 需要注意与其它数据类型的区分。
尽量使用有引号 `String`。

转义非常奇怪，最好不要使用
