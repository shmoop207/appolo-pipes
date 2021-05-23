import {exception, IException, IPipe, PipelineContext} from '@appolo/engine';
import {define, singleton, inject} from '@appolo/inject';
import {ILogger} from '@appolo/logger';

interface IParams {
    msgFn?: (...args: any[]) => string,
    paramsFn?: (...args: any[]) => { [index: string]: any }
}

@define()
@singleton()
export class LogErrorPipe implements IException {

    @inject() logger: ILogger

    public async catch(err: Error, context: PipelineContext<IParams>) {

        let metaData = context.metaData || {}

        let msg = metaData.msgFn
            ? metaData.msgFn(err, ...context.arguments)
            : `failed to run method ${context.action} in class ${context.type.name}`

        let params: any = {};

        if (metaData.paramsFn) {
            params = metaData.paramsFn(err, ...context.arguments)
        } else {
            params = {err, args: context.arguments}
        }

        this.logger.error(msg, params)

        throw err;
    }
}

export const logError = (params?: IParams) => exception(LogErrorPipe, params);
