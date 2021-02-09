
# iframe

使用 `<iframe>` 可以嵌套别人的网站，例子：

```html
<iframe
  src="https://developer.mozilla.org/en-US/docs/Glossary"
  width="100%"
  height="500"
  sandbox
>
  <p>
    <a href="/en-US/docs/Glossary">
       Fallback link for browsers that don't support iframes
    </a>
  </p>
</iframe>
```

## 属性

* `src` 目标网址
* `width` & `height` 宽高
* `sandbox` 建议每次都使用，限制内部页面可执行的操作。

如果浏览器不支持 `<iframe>` 会展示标签里的内容。

为了提高速度，可以在页面渲染完成后，通过 `js` 设置 `iframe` 的 `src`。

## 安全

* 设置 `CSP`，
* `URL` 使用 `HTTPS`，
* 使用 `sandbox` 属性
