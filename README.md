# autorouter

### install

```shell
npm i autorouter
```

### Usage

```js
const asyncCacheFn = require("autorouter");
let app = express();
let dir = path.join(__dirname, "/routes");
asyncCacheFn(app, dir);
```
