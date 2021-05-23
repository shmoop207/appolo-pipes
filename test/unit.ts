"use strict";
import chai = require('chai');
import {App, createApp} from "@appolo/engine";
import {SomeManager} from "./mock/someManager";
import {PipesModule} from "../lib/module/pipesModule";
import {LoggerModule} from "@appolo/logger";


let should = chai.should();

describe("Test Pipelines", function () {

    let app: App

    beforeEach(async () => {
        app = createApp({paths: ["test"]});
        app.module.use(LoggerModule, PipesModule);
        await app.launch()
    });

    afterEach(async () => {
        await app.reset();
    })

    describe("logError pipeline  ", function () {


        it("should log error", async () => {

            try {
                await app.injector.get<SomeManager>(SomeManager).someMethod({test: 1})

            } catch (e) {
                e.message.should.be.eq("some error")
            }

        });
    })
});
