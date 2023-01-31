/**
 * Хелперы.
 * See: https://tinkoff.github.io/investAPI/faq_custom_types/
 */
import { MoneyValue, Quotation, SecurityTradingStatus } from './generated/common.js';
import { CandleInterval } from './generated/marketdata.js';
import { OrderDirection } from './generated/orders.js';
export declare class Helpers {
    /**
     * Переводит число в Quotation.
     * Пример: 123.4 -> { units: 123, nano: 400000000 }
     */
    static toQuotation(value: number): Quotation;
    /**
     * Переводит число в MoneyValue { units, nano, currency }
     * Пример: (123.4, 'rub') -> { units: 123, nano: 400000000, currency: 'rub' }
     */
    static toMoneyValue(value: number, currency: string): MoneyValue;
    /**
     * Переводит MoneyValue в строку.
     * Пример: { units: 123, nano: 400000000, currency: 'rub' } -> '123.4 rub'
     */
    static toMoneyString(value: MoneyValue | undefined): string;
    /**
     * Переводит Quotation или MoneyValue в число.
     * Пример: { units: 123, nano: 400000000 } -> 123.4
     */
    static toNumber<T extends Quotation | MoneyValue | undefined>(value: T): T extends undefined ? undefined : number;
    /**
     * Возвращает интервал времени в формате { from, to } по заданному смещению и базовой дате.
     * Для смещения можно использовать кол-во миллисекунд или строку в формате из https://github.com/vercel/ms
     */
    static fromTo(offset: string | number, base?: Date): {
        from: Date;
        to: Date;
    };
    /**
     * Переводит значения констант в человеко-читаемые строки.
     * Пример: CandleInterval.CANDLE_INTERVAL_1_MIN -> '1_MIN'
     */
    static toHuman<T extends Enums>(value: T, values: getEnumType<T>): string;
}
declare type Enums = CandleInterval | OrderDirection | SecurityTradingStatus;
declare type getEnumType<T extends Enums> = T extends CandleInterval ? typeof CandleInterval : T extends OrderDirection ? typeof OrderDirection : never;
export {};
//# sourceMappingURL=helpers.d.ts.map