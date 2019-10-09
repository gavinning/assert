assert
---
断言，参数检查，数据检查，不通过则抛出错误消息，支持批量检查

### Install
```sh
npm i @gavinning/assert
```

### Usage
```js
import assert from '@gavinning/assert'

// 同步代码
assert.ok(true, 'error message')
assert.not(false, 'error message')

// 异步代码 返回Promise
// 这里返回Promise是从代码可读性方向考虑的
// 数据检查相关逻辑通常会封装在一个函数内，同步代码对抛错的处理需要try catch，可读性比Promise稍差
assert.each(
    [num > 0, 'num must be > 0'],
    [num < 100, 'num must be < 100'],
    [num === Number(num), 'num must be a number']
)
    .then(() => {
        // do sth when all pass
        // http.request()
    })
    .catch(err => {
        // show err message
        // alert(err.message)
    })
```
<br />

> npm test
