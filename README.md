# fautorouter

### install

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
