const assert = require('./app')

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
catch (err) {
    console.log({
        code: err.code,
        message: err.message
    })
}
