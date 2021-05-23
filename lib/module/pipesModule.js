"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PipesModule = void 0;
const tslib_1 = require("tslib");
const engine_1 = require("@appolo/engine");
const logError_1 = require("./src/pipes/logError");
let PipesModule = class PipesModule extends engine_1.Module {
    get defaults() {
        return {};
    }
    static for(options) {
        return { type: this, options };
    }
    get exports() {
        return [logError_1.LogErrorPipe];
    }
};
PipesModule = tslib_1.__decorate([
    engine_1.module()
], PipesModule);
exports.PipesModule = PipesModule;
//# sourceMappingURL=pipesModule.js.map