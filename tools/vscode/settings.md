# settings.json

{
    "editor.tabSize": 2,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll.markdownlint": true,
    },
    "javascript.updateImportsOnFileMove.enabled": "always",
    "explorer.confirmDelete": false,
    "explorer.confirmDragAndDrop": false,
    "editor.scrollBeyondLastLine": false,
    "editor.acceptSuggestionOnCommitCharacter": false,
    "editor.acceptSuggestionOnEnter": "off",

    "workbench.iconTheme": "vscode-icons",
    "window.zoomLevel": 2,
    "eslint.alwaysShowStatus": true,

    "todo-tree.general.tags": [
        "BUG",
        "HACK",
        "FIXME",
        "TODO",
        "XXX",
        "[ ]",
        "[x]"
    ],
    "todo-tree.tree.showScanModeButton": false,
    "todo-tree.regex.regex": "(//|#|<!--|;|/\\*|^|^\\s*(-|\\d+.))\\s*($TAGS)",
    "cSpell.userWords": [
        "vuex"
    ],
    
    "security.workspace.trust.untrustedFiles": "open",
    "bracketPairColorizer.depreciation-notice": false,
    "git.confirmSync": false,

    "markdown.extension.toc.levels": "2..6",
    "markdownlint.config": {
        "MD024": false,
    },
    "[markdown]": {
        "editor.quickSuggestions": true
    },

    "[scss]": {
        "editor.defaultFormatter": "HookyQR.beautify"
    },
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.unicodeHighlight.nonBasicASCII": false,
    "vite.autoStart": false,
}
