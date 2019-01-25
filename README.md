# Simple react application

## App creation steps
This document contains steps of creation simple React application.

### Init project
Create initial with React App initializer. Later we will delete redundant files.
```
create-react-app .
```

### Start project
Check that project have been initialized properly.
```
npm start
```

### Delete redundant starter files
Delete starter source files except `index.js`, because we will create own scripts.
```
rm src/*
touch src/index.js
chmod +x src/index.js
```
Re-create `index.html` file.
```
rm public/*
touch public/index.html
chmod +x public/index.html
```
Delete `yarn.lock` because we use NPM.
```
rm yarn.lock
```

### Add content to `public/index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <title>Simple App</title>
  </head>
  <body>
    <div id="root">Hello</div>
  </body>
</html>
```

### Change README.md
```bash
echo '# simple-react-app' > README.md
```

### Append `.gitignore`
Add items to `.gitignore`, because we use Intellij Idea.
```
/.idea
*.iml
```