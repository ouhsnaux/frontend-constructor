# axios

## 创建

调用 `api` 创建，首次可传入配置。

```js
const defaultConfig = {
  baseURL: '/api',
  timeout: 30 * 1000, // 超时时间
  withCredentials: true, // 跨域请求是否使用凭证
  // headers，对象，修改头部
};

const http = axios.create(defaultConfig);
```

后续可以更改 `http.defaults` 修改属性

```js
http.default.headers.common = {
  ...http.default.headers.common,
  'Content-Type': 'application/json; charset=UTF-8',
  'Accept': 'application/json, text/json, */*',
}
```

## 请求拦截

`axios` 可以拦截请求，做一些处理。
比如：本地调试使用 `mock`，修改请求 `url`；
也可以动态获取某些属性，加入请求 `headers` 中。

```js
// 处理请求参数
const handleHttpReq = (config) => {
  // do something...
  return config;
}

http.interceptors.request.use(handleHttpReq, Promise.reject);
```

## 结果拦截

`axios` 也可以对请求结果进行拦截。
对状态码封装处理；
对错误处理。

```js
// 提示用户
const alertError = (message) => {
  alert(message);
};

// 跳转到登录页
const toLogin = () => {
  location.href = 'xxx/login.html';
};

// 处理返回结果
const handleHttpRes = (res) => {
  try {
    const { status, data, message } = res;
    switch (status) {
      case 200:
        return data;
      case 401:
        toLogin();
        break;
      case 403:
        handleHttpErr('无权限');
      case 404:
        handleHttpErr('接口为空');
      case 500:
        handleHttpErr('服务端出错');
      default:
        throw new Error(message);
    }
  } catch (e) {
    return handleHttpErr(e.message || '接口异常');
  }
};

// 错误处理
const handleHttpErr = (err) => {
  let error;
  if (!(err instanceof Error)) {
    error = err;
  } else if (err.message.includes('timeout')) {
    error = '请求超时！';
  } else {
    error = err.message;
  }

  alertError(error);
  return Promise.reject(error);
};

http.interceptors.response.use(handleHttpRes, handleHttpErr);
```

## 多个实例

如果项目中需要多个各不相同的 `axios` 实例，还需要提供一个创建实例的函数。

**注意：后续修改某一个实例的`headers`可能会同时修改其它实例的**

```js
import _ from 'lodash';

const create = (option = {}) => {
  const http = axios.create(defaultConfig);
  _.merge(http.defaults, option);

  http.interceptors.request.use(handleHttpReq, Promise.reject);
  http.interceptors.response.use(handleHttpRes, handleHttpErr);

  return http;
};
```

## 封装

```js
import axios from 'axios';
import _ from 'lodash';

// 处理请求
const handleHttpReq = (config) => {
  return config;
};
// 提示用户
const alertError = (message) => {
  alert(message);
};

// 跳转到登录页
const toLogin = () => {
  location.href = 'xxx/login.html';
};

// 处理返回结果
const handleHttpRes = (res) => {
  try {
    const { status, data, message } = res;
    switch (status) {
      case 200:
        return data;
      case 401:
        toLogin();
        break;
      case 403:
        handleHttpErr('无权限');
      case 404:
        handleHttpErr('接口为空');
      case 500:
        handleHttpErr('服务端出错');
      default:
        throw new Error(message);
    }
  } catch (e) {
    return handleHttpErr(e.message || '接口异常');
  }
};

// 错误处理
const handleHttpErr = (err) => {
  let error;
  if (!(err instanceof Error)) {
    error = err;
  } else if (err.message.includes('timeout')) {
    error = '请求超时！';
  } else {
    error = err.message;
  }

  alertError(error);
  return Promise.reject(error);
};

const create = (option = {}) => {
  const http = axios.create(defaultConfig);
  _.merge(http.defaults, option);

  http.interceptors.request.use(handleHttpReq, Promise.reject);
  http.interceptors.response.use(handleHttpRes, handleHttpErr);

  return http;
};

const instance = create();

export { create };
export default instance;
```
