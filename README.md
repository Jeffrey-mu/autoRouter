# jfautorouter

### install

```shell
npm i jfautorouter
```

### Usage

```js
const asyncCacheFn = require("jfautorouter");
let app = express();
let dir = path.join(__dirname, "/routes");
asyncCacheFn(app, dir);
```
