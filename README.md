# fautorouter

### install

```shell
npm i fautorouter
```

### Usage

```js
const asyncCacheFn = require("fautorouter");
let app = express();
let dir = path.join(__dirname, "/routes");
asyncCacheFn(app, dir);
```
