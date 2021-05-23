import {module, Module, IModuleParams} from "@appolo/engine"
import {IOptions} from "./src/interfaces/IOptions";
import {LogErrorPipe} from "./src/pipes/logError";

@module()
export class PipesModule extends Module {

    public get defaults(): Partial<IOptions> {
        return {}
    }

    public static for(options: IOptions): IModuleParams {
        return {type: this, options}
    }

    public get exports() {
        return [LogErrorPipe]
    }
}
