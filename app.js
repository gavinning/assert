const ShareError = require('@4a/share-error')

class Assert {

    ok(value, code, message) {
        if (value) {
            return true
        }
        throw new ShareError(code, message)
    }

    not(value, code, message) {
        this.ok(!value, code, message)
    }

    fail(value, code, message) {
        this.not(...arguments)
    }
}

module.exports = new Assert
