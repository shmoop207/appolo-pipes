import {define, singleton, inject} from '@appolo/inject';
import {logError} from "../../index";

@define()
@singleton()

export class SomeManager {
    @logError()
    async someMethod(param: any) {
        throw  new Error("some error")
    }
}
