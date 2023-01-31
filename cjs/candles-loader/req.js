"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandlesReq = void 0;
/**
 * Класс запроса свечей с учетом кеша.
 * - за текущий день данные берутся всегда из апи (чтобы была свежая последняя цена)
 * - за прошлые дни данные берутся из кеша или из апи (и сохраняются в кеш)
 */
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const marketdata_js_1 = require("../generated/marketdata.js");
const json_js_1 = require("../utils/json.js");
const date_js_1 = require("../utils/date.js");
const date_iterator_js_1 = require("./date-iterator.js");
class CandlesReq {
    constructor(api, options, params, debug) {
        this.api = api;
        this.options = options;
        this.params = params;
        this.debug = debug;
        this.candles = [];
        this.dateIterator = new date_iterator_js_1.DateIterator(params, debug);
    }
    // eslint-disable-next-line max-statements
    async getCandles() {
        this.debug(`Запрос на загрузку свечей: ${JSON.stringify(this.params)}`);
        this.candles = await this.loadChunk({ useCache: !this.dateIterator.needTodayCandles() });
        this.filterCandlesBy('to');
        while (this.shouldLoadMore()) {
            this.dateIterator.nextChunk();
            const candles = await this.loadChunk({ useCache: true });
            this.candles.unshift(...candles);
        }
        this.filterCandlesBy('from');
        this.debug(`Загрузка свечей завершена: ${this.candles.length}`);
        return this.candles;
    }
    async loadChunk({ useCache = true }) {
        // в режиме бэктеста не кешируем в файлы, т.к. данные из апи и так приходят из кеша
        if (this.api.isBacktest)
            useCache = false;
        if (useCache) {
            const candles = await this.loadChunkFromFile();
            if (candles)
                return candles;
        }
        const candles = await this.loadChunkFromApi();
        if (useCache) {
            await this.saveChunkToCache(candles);
        }
        return candles;
    }
    async loadChunkFromFile() {
        const cacheFile = this.getCacheFileName();
        if (fs_1.default.existsSync(cacheFile)) {
            this.debug(`Загружаю свечи из файла: ${cacheFile}`);
            const candles = await (0, json_js_1.loadJson)(cacheFile);
            this.debug(`Загружено свечей: ${candles.length}`);
            // Из файла даты приходят строками: '2022-05-06T07:00:00.000Z', переводим в Date
            candles.forEach(candle => candle.time = new Date(candle.time));
            return candles;
        }
    }
    async loadChunkFromApi() {
        const { figi, interval, instrumentId } = this.params;
        const { from, to } = this.dateIterator.getCurrentChunkRange();
        const apiStr = this.api.isBacktest ? 'API (backtest)' : 'API';
        this.debug(`Загружаю свечи из ${apiStr}: ${from.toISOString()} - ${to.toISOString()}`);
        const { candles } = await this.api.marketdata.getCandles({
            figi, interval, from, to, instrumentId,
        });
        this.debug(`Загружено свечей: ${candles.length}`);
        return candles;
    }
    async saveChunkToCache(candles) {
        const cacheFile = this.getCacheFileName();
        this.debug(`Сохраняю свечи (${candles.length}) в файл: ${cacheFile}`);
        await (0, json_js_1.saveJson)(cacheFile, candles);
    }
    // eslint-disable-next-line max-statements
    shouldLoadMore() {
        // todo: check max iterations
        const { minCount, from } = this.params;
        if (minCount) {
            const res = this.candles.length < minCount;
            res && this.debug(`Сейчас свечей: ${this.candles.length}, а нужно: ${minCount}`);
            return res;
        }
        if (from) {
            const { currentChunkDate } = this.dateIterator;
            const res = currentChunkDate > from;
            res && this.debug([
                `Сейчас свечей: ${this.candles.length}, начиная с ${currentChunkDate.toISOString()},`,
                `а нужно с ${from.toISOString()}`,
            ].join(' '));
            return res;
        }
        throw new Error(`Нужно указать "from" или "minCount"`);
    }
    filterCandlesBy(date) {
        const oldLength = this.candles.length;
        const { from } = this.params;
        if (date === 'to') {
            this.candles = this.candles.filter(candle => candle.time < this.dateIterator.to);
        }
        else if (from) {
            this.candles = this.candles.filter(candle => candle.time >= from);
        }
        const newLength = this.candles.length;
        if (newLength !== oldLength) {
            const dateStr = date === 'from' ? from.toISOString() : this.dateIterator.to.toISOString();
            this.debug(`Фильтрация свечей по ${date} (${dateStr}): ${oldLength} -> ${newLength}`);
        }
    }
    getCacheFileName() {
        const { isYearChunk, currentChunkDate } = this.dateIterator;
        const dateStr = (0, date_js_1.formatDateUTC)(currentChunkDate, isYearChunk ? 'YYYY' : 'YYYY-MM-DD');
        return path_1.default.join(this.options.cacheDir, 'candles', this.params.figi, isYearChunk ? 'day' : candleIntervalToString(this.params.interval), `${dateStr}.json`);
    }
}
exports.CandlesReq = CandlesReq;
function candleIntervalToString(interval) {
    return marketdata_js_1.CandleInterval[interval].replace('CANDLE_INTERVAL_', '').toLowerCase();
}
//# sourceMappingURL=req.js.map