# dataset

`data-*` 属性，使得 `HTML` 元素具有绑定数据的能力。

## html 中使用

```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars"
>
  ...
</article>
```

## css 中使用

```css
article::before {
  content: attr(data-parent);
}

article[data-columns='3'] {
  width: 400px;
}
```

## js 中使用

```js
const article = document.querySelector('#electric-cars');

article.dataset.columns // 3
article.dataset.indexNumber // 12314
article.dataset.parent // cars
```
