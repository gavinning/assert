class Assert {

    ok(value, message) {
        if (value) {
            return true
        }
        throw new Error(message)
    }

    not(value, message) {
        this.ok(!value, message)
    }

    // 支持function类型，检查function执行结果
    // 支持array类型，检查第一个元素，第二个元素视为错误信息
    // 支持其他类型，检查其本身
    each() {
        return new Promise((res, rej) => {
            Array.from(arguments).forEach(item => {
                if (typeof item === 'function') {
                    return item() || rej(new Error(`${item} not pass`))
                }
                if (Array.isArray(item)) {
                    return item[0] || rej(new Error(item[1]))
                }
                item || rej(new Error(`${item} not pass`))
            })
            res()
        })
    }

    // 支持function类型，检查function执行结果
    // 支持其他类型，检查其本身
    // ！不支持array类型
    some() {
        return new Promise((res, rej) => {
            Array.from(arguments).forEach(item => {
                typeof item === 'function' ? item() && res() : item && res()
            })
            rej(new Error(`all not pass`))
        })
    }
}

module.exports = new Assert
