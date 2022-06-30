# fautorouter

- Use FS module to recursively find files and register JS files as routing components
- Create existing use

### Install

```shell
npm i fautorouter
```

### Usage

```js
const fautorouter = require("fautorouter");
let app = express();
let dir = path.join(__dirname, "/routes");
fautorouter(app, dir);
```

### Scene

before

```js
// app.js
const app = require("express")();
app.use('/login', login)
app.use('/user', user)
app.use('/role', role)
app.use('/data', data)
....
....
```

before

```js
// app.js
const app = require("express")();
const asyncCacheFn = require("fautorouter");
asyncCacheFn(app, dir);
....
```
