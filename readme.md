assert
---
断言，失败信息支持携带err-code

### Install
```sh
npm i @4a/assert
```

### Usage
```js
const assert = require('@4a/assert')

try {
    assert.ok(0, 100, 'error code 100')
}
catch(err) {
    console.log({
        code: err.code,
        message: err.message
    })
}

try {
    assert.fail(1, 200, 'error code 200')
}
catch(err) {
    console.log({
        code: err.code,
        message: err.message
    })
}
```
