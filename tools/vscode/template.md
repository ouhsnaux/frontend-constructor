# 用户代码片段

## vue less template

``` json
{
 "Print to console":{
   "prefix": "vue template",
   "body": [
     "<template>",
     "  <div class=\"$0\">",
     "",
     "  </div>",
     "</template>",
     "",
     "<script>",
     "export default {",
     "  name: '',",
     "  components: {},",
     "  props: {},",
     "  data() {",
     "    return {",
     "    };",
     "  },",
     "  created() {},",
     "  methods: {},",
     "};",
     "</script>",
     "",
     "<style lang=\"less\" scoped>",
     "@import 'index.less';",
     "</style>",
     "",
   ],
   "description": "vue template."
 }
}
```

markdown 不生效，需要额外配置

```json
{
  "[markdown]": {
    "editor.quickSuggestions": true
  }
}
```
