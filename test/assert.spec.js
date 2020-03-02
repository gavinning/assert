const assert = require('../app')

describe('assert test', () => {

    it('ok test', () => {
        assert.ok(1, 100, 'error message')
        assert.ok(true, 200, 'error message')
    })

    it('fail test', () => {
        assert.not(0, 300, 'error message')
        assert.not(false, 400, 'error message')
    })

    it('fail test', () => {
        assert.fail(0, 500, 'error message')
        assert.fail(false, 600, 'error message')
    })
})
