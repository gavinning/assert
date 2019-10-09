const assert = require('../app')

describe('assert test', () => {

    it('ok test', () => {
        assert.ok(1, 'error message')
        assert.ok(true, 'error message')
    })

    it('fail test', () => {
        assert.not(0, 'error message')
        assert.not(false, 'error message')
    })

    it('each test', async () => {
        let num = 1
        await assert.each(1, true, () => true)
        await assert.each(
            [num > 0, 'num must be > 0'],
            [num < 100, 'num must be < 100'],
            [num === Number(num), 'num must be a number']
        )
    })

    it('some test', async () => {
        await assert.some(0, false, () => true)
    })
})
