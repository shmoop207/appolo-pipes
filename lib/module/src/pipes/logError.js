"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.LogErrorPipe = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const inject_1 = require("@appolo/inject");
let LogErrorPipe = class LogErrorPipe {
    async catch(err, context) {
        let metaData = context.metaData || {};
        let msg = metaData.msgFn
            ? metaData.msgFn(err, ...context.arguments)
            : `failed to run method ${context.action} in class ${context.type.name}`;
        let params = {};
        if (metaData.paramsFn) {
            params = metaData.paramsFn(err, ...context.arguments);
        }
        else {
            params = { err, args: context.arguments };
        }
        this.logger.error(msg, params);
        throw err;
    }
};
tslib_1.__decorate([
    inject_1.inject()
], LogErrorPipe.prototype, "logger", void 0);
LogErrorPipe = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], LogErrorPipe);
exports.LogErrorPipe = LogErrorPipe;
const logError = (params) => engine_1.exception(LogErrorPipe, params);
exports.logError = logError;
//# sourceMappingURL=logError.js.map