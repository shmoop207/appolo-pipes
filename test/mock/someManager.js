"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeManager = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const index_1 = require("../../index");
let SomeManager = class SomeManager {
    async someMethod(param) {
        throw new Error("some error");
    }
};
tslib_1.__decorate([
    index_1.logError()
], SomeManager.prototype, "someMethod", null);
SomeManager = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], SomeManager);
exports.SomeManager = SomeManager;
//# sourceMappingURL=someManager.js.map