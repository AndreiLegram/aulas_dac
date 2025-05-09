### comandos

- npm init @eslint/config@latest @eslint/js globals
- npx eslint server.js
- npx eslint . --fix
- npx prettier --write .
- npx prettier --write server.js

### .vscode/settings.json

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "eslint.validate": ["javascript"],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.formatOnSave": false
  }
}
```
