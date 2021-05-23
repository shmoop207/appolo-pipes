"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const engine_1 = require("@appolo/engine");
const someManager_1 = require("./mock/someManager");
const pipesModule_1 = require("../lib/module/pipesModule");
const logger_1 = require("@appolo/logger");
let should = chai.should();
describe("Test Pipelines", function () {
    let app;
    beforeEach(async () => {
        app = engine_1.createApp({ paths: ["test"] });
        app.module.use(logger_1.LoggerModule, pipesModule_1.PipesModule);
        await app.launch();
    });
    afterEach(async () => {
        await app.reset();
    });
    describe("logError pipeline  ", function () {
        it("should log error", async () => {
            try {
                await app.injector.get(someManager_1.SomeManager).someMethod({ test: 1 });
            }
            catch (e) {
                e.message.should.be.eq("some error");
            }
        });
    });
});
//# sourceMappingURL=unit.js.map