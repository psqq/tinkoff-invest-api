import Debug from 'debug';
import { TinkoffInvestApi } from '../api.js';
import { GetCandlesRequest, HistoricCandle } from '../generated/marketdata.js';
import { CandlesLoaderOptions } from './index.js';
import { DateIterator } from './date-iterator.js';
export declare type CandlesReqParams = GetCandlesRequest & {
    /** Минимальное кол-во свечей в ответе */
    minCount?: number;
};
export declare class CandlesReq {
    protected api: TinkoffInvestApi;
    protected options: Required<CandlesLoaderOptions>;
    protected params: CandlesReqParams;
    protected debug: Debug.Debugger;
    protected candles: HistoricCandle[];
    protected dateIterator: DateIterator;
    constructor(api: TinkoffInvestApi, options: Required<CandlesLoaderOptions>, params: CandlesReqParams, debug: Debug.Debugger);
    getCandles(): Promise<HistoricCandle[]>;
    protected loadChunk({ useCache }: {
        useCache?: boolean | undefined;
    }): Promise<HistoricCandle[]>;
    protected loadChunkFromFile(): Promise<HistoricCandle[] | void>;
    protected loadChunkFromApi(): Promise<HistoricCandle[]>;
    protected saveChunkToCache(candles: HistoricCandle[]): Promise<void>;
    protected shouldLoadMore(): boolean;
    protected filterCandlesBy(date: 'from' | 'to'): void;
    protected getCacheFileName(): string;
}
//# sourceMappingURL=req.d.ts.map