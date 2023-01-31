import TypedEmitter from 'typed-emitter';
import { TinkoffInvestApi } from '../api.js';
declare type EventMap<Res> = {
    open: () => unknown;
    data: (data: Res) => unknown;
    close: (error?: Error) => unknown;
    error: (error: Error) => unknown;
};
declare type InternalEventMap<Req, Res> = EventMap<Res> & {
    request: (req: Req | CloseReq) => unknown;
};
declare const CLOSE_STREAM_VALUE: null;
declare type CloseReq = typeof CLOSE_STREAM_VALUE;
export declare abstract class BaseStream<Req, Res> {
    api: TinkoffInvestApi;
    connected: boolean;
    protected emitter: TypedEmitter<InternalEventMap<Req, Res>>;
    constructor(api: TinkoffInvestApi);
    /**
     * Установить обработчик.
     */
    on<T extends keyof EventMap<Res>>(event: T, handler: InternalEventMap<Req, Res>[T]): () => TypedEmitter<InternalEventMap<Req, Res>>;
    /**
     * Удалить обработчик.
     */
    off<T extends keyof EventMap<Res>>(event: T, handler: InternalEventMap<Req, Res>[T]): void;
    /**
     * Установлен ли обработчик.
     */
    hasListener<T extends keyof EventMap<Res>>(event: T, handler: InternalEventMap<Req, Res>[T]): boolean;
    /**
     * Отмена запроса.
     */
    cancel(): Promise<any>;
    protected createRequestIterable(): AsyncGenerator<Awaited<Req>, void, unknown>;
    protected sendRequest(req: Req | CloseReq): void;
    protected waitEvents(call: AsyncIterable<Res>): Promise<void>;
}
export {};
//# sourceMappingURL=base.d.ts.map