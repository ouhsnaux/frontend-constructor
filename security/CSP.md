# CSP

内容安全策略（`Content Security Policy`）。基于同源策略。
使用白名单，告诉客户端允许加载和不允许加载的内容。
这样，即使存在 `XSS` 攻击漏洞，也不会执行不被信任的恶意脚本。

## 使用

### 指令

`CSP` 针对各种各样的资源都有设定

* `script-src` 脚本来源
* `base-uri` 用于限制 `<base>` 元素中显示的网址。
* `child-src` for workers & embedded frame contents
* `connect-src` for `XHR` `WebSockets` & `EventSource`
* `font-src` for `web fonts`
* `form-action` for `form actions`
* `img-src`
* `media-src`
* `object-src` for Flash & other plugin
* `plugin-types` 插件种类
* `style-src`

`default-src` 可以批量设置 `-src` 结尾的指令。
`report-uri` 发送拦截报告
`upgrade-insecure-requests` 将 `HTTP` 换为 `HTTPS`

### 指令值

* `none` 不允许加载资源
* `self` 只允许当前域
* `'unsafe-inline'` 允许内联 `JS` & `CSS`
* `'unsafe-eval'` 允许使用 `eval`

### 项目中使用

1. 在 `HTML` 文件 `head` 中添加元信息
  
  ```html
  <meta http-equiv="Content-Security-Policy" content="default-src https://cdn.example.net; child-src 'none'; object-src 'none'">
  ```

1. 在 `HTTP` `header` 头部添加 `CSP` 属性
