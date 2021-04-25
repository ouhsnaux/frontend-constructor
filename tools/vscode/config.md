# 编辑器设置 settings.json

## 编辑器本身

```json with comment
{
    "window.zoomLevel": 2, // 编辑器放大2呗
    "editor.tabSize": 2, // tab键缩进2个空格
    "javascript.updateImportsOnFileMove.enabled": "always", // 文件移动自动更新import
    "explorer.confirmDelete": false, // 删除文件不弹出确认框
    "explorer.confirmDragAndDrop": false, // 拖动文件移动位置不弹出确认框
    "editor.scrollBeyondLastLine": false, // 文件滚动到最后一行后不能继续滚动
    // 只有tab键接受代码建议
    "editor.acceptSuggestionOnCommitCharacter": false, // 不随便接受代码建议
    "editor.acceptSuggestionOnEnter": "off", // 回车键不接受代码建议
}
```

## 插件

```json with comment
{
    "workbench.iconTheme": "vscode-icons", // 文件图标主题
    "eslint.alwaysShowStatus": true, // 显示代码状态
    "editor.codeActionsOnSave": { // 编辑器保存时做的操作
        "source.fixAll.eslint": true, // 根据eslint规则格式化代码
    },
}
```
