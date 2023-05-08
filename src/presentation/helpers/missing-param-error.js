const MissingParamError = require('./missing-param-error')
module.exports = class MissingParamError extends Error {
    constructor(paramName) {
        super(`Missing param ${paramName}`)
        this.name = 'MissingParamError'
    }
}
