/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Quotation, MoneyValue } from "./common.js";
import { Timestamp } from "./google/protobuf/timestamp.js";
export const protobufPackage = "tinkoff.public.invest.api.contract.v1";
/** Направление сделки стоп-заявки. */
export var StopOrderDirection;
(function (StopOrderDirection) {
    /** STOP_ORDER_DIRECTION_UNSPECIFIED - Значение не указано. */
    StopOrderDirection[StopOrderDirection["STOP_ORDER_DIRECTION_UNSPECIFIED"] = 0] = "STOP_ORDER_DIRECTION_UNSPECIFIED";
    /** STOP_ORDER_DIRECTION_BUY - Покупка. */
    StopOrderDirection[StopOrderDirection["STOP_ORDER_DIRECTION_BUY"] = 1] = "STOP_ORDER_DIRECTION_BUY";
    /** STOP_ORDER_DIRECTION_SELL - Продажа. */
    StopOrderDirection[StopOrderDirection["STOP_ORDER_DIRECTION_SELL"] = 2] = "STOP_ORDER_DIRECTION_SELL";
    StopOrderDirection[StopOrderDirection["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StopOrderDirection || (StopOrderDirection = {}));
export function stopOrderDirectionFromJSON(object) {
    switch (object) {
        case 0:
        case "STOP_ORDER_DIRECTION_UNSPECIFIED":
            return StopOrderDirection.STOP_ORDER_DIRECTION_UNSPECIFIED;
        case 1:
        case "STOP_ORDER_DIRECTION_BUY":
            return StopOrderDirection.STOP_ORDER_DIRECTION_BUY;
        case 2:
        case "STOP_ORDER_DIRECTION_SELL":
            return StopOrderDirection.STOP_ORDER_DIRECTION_SELL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StopOrderDirection.UNRECOGNIZED;
    }
}
export function stopOrderDirectionToJSON(object) {
    switch (object) {
        case StopOrderDirection.STOP_ORDER_DIRECTION_UNSPECIFIED:
            return "STOP_ORDER_DIRECTION_UNSPECIFIED";
        case StopOrderDirection.STOP_ORDER_DIRECTION_BUY:
            return "STOP_ORDER_DIRECTION_BUY";
        case StopOrderDirection.STOP_ORDER_DIRECTION_SELL:
            return "STOP_ORDER_DIRECTION_SELL";
        case StopOrderDirection.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** Тип экспирации стоп-заявке. */
export var StopOrderExpirationType;
(function (StopOrderExpirationType) {
    /** STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED - Значение не указано. */
    StopOrderExpirationType[StopOrderExpirationType["STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED"] = 0] = "STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED";
    /** STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL - Действительно до отмены. */
    StopOrderExpirationType[StopOrderExpirationType["STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL"] = 1] = "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL";
    /** STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE - Действительно до даты снятия. */
    StopOrderExpirationType[StopOrderExpirationType["STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE"] = 2] = "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE";
    StopOrderExpirationType[StopOrderExpirationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StopOrderExpirationType || (StopOrderExpirationType = {}));
export function stopOrderExpirationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED":
            return StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED;
        case 1:
        case "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL":
            return StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL;
        case 2:
        case "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE":
            return StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StopOrderExpirationType.UNRECOGNIZED;
    }
}
export function stopOrderExpirationTypeToJSON(object) {
    switch (object) {
        case StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED:
            return "STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED";
        case StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL:
            return "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL";
        case StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE:
            return "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE";
        case StopOrderExpirationType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** Тип стоп-заявки. */
export var StopOrderType;
(function (StopOrderType) {
    /** STOP_ORDER_TYPE_UNSPECIFIED - Значение не указано. */
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_UNSPECIFIED"] = 0] = "STOP_ORDER_TYPE_UNSPECIFIED";
    /** STOP_ORDER_TYPE_TAKE_PROFIT - Take-profit заявка. */
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_TAKE_PROFIT"] = 1] = "STOP_ORDER_TYPE_TAKE_PROFIT";
    /** STOP_ORDER_TYPE_STOP_LOSS - Stop-loss заявка. */
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_STOP_LOSS"] = 2] = "STOP_ORDER_TYPE_STOP_LOSS";
    /** STOP_ORDER_TYPE_STOP_LIMIT - Stop-limit заявка. */
    StopOrderType[StopOrderType["STOP_ORDER_TYPE_STOP_LIMIT"] = 3] = "STOP_ORDER_TYPE_STOP_LIMIT";
    StopOrderType[StopOrderType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StopOrderType || (StopOrderType = {}));
export function stopOrderTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STOP_ORDER_TYPE_UNSPECIFIED":
            return StopOrderType.STOP_ORDER_TYPE_UNSPECIFIED;
        case 1:
        case "STOP_ORDER_TYPE_TAKE_PROFIT":
            return StopOrderType.STOP_ORDER_TYPE_TAKE_PROFIT;
        case 2:
        case "STOP_ORDER_TYPE_STOP_LOSS":
            return StopOrderType.STOP_ORDER_TYPE_STOP_LOSS;
        case 3:
        case "STOP_ORDER_TYPE_STOP_LIMIT":
            return StopOrderType.STOP_ORDER_TYPE_STOP_LIMIT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StopOrderType.UNRECOGNIZED;
    }
}
export function stopOrderTypeToJSON(object) {
    switch (object) {
        case StopOrderType.STOP_ORDER_TYPE_UNSPECIFIED:
            return "STOP_ORDER_TYPE_UNSPECIFIED";
        case StopOrderType.STOP_ORDER_TYPE_TAKE_PROFIT:
            return "STOP_ORDER_TYPE_TAKE_PROFIT";
        case StopOrderType.STOP_ORDER_TYPE_STOP_LOSS:
            return "STOP_ORDER_TYPE_STOP_LOSS";
        case StopOrderType.STOP_ORDER_TYPE_STOP_LIMIT:
            return "STOP_ORDER_TYPE_STOP_LIMIT";
        case StopOrderType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBasePostStopOrderRequest() {
    return {
        figi: "",
        quantity: 0,
        price: undefined,
        stopPrice: undefined,
        direction: 0,
        accountId: "",
        expirationType: 0,
        stopOrderType: 0,
        expireDate: undefined,
        instrumentId: "",
    };
}
export const PostStopOrderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.figi !== "") {
            writer.uint32(10).string(message.figi);
        }
        if (message.quantity !== 0) {
            writer.uint32(16).int64(message.quantity);
        }
        if (message.price !== undefined) {
            Quotation.encode(message.price, writer.uint32(26).fork()).ldelim();
        }
        if (message.stopPrice !== undefined) {
            Quotation.encode(message.stopPrice, writer.uint32(34).fork()).ldelim();
        }
        if (message.direction !== 0) {
            writer.uint32(40).int32(message.direction);
        }
        if (message.accountId !== "") {
            writer.uint32(50).string(message.accountId);
        }
        if (message.expirationType !== 0) {
            writer.uint32(56).int32(message.expirationType);
        }
        if (message.stopOrderType !== 0) {
            writer.uint32(64).int32(message.stopOrderType);
        }
        if (message.expireDate !== undefined) {
            Timestamp.encode(toTimestamp(message.expireDate), writer.uint32(74).fork()).ldelim();
        }
        if (message.instrumentId !== "") {
            writer.uint32(82).string(message.instrumentId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePostStopOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.figi = reader.string();
                    break;
                case 2:
                    message.quantity = longToNumber(reader.int64());
                    break;
                case 3:
                    message.price = Quotation.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.stopPrice = Quotation.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.direction = reader.int32();
                    break;
                case 6:
                    message.accountId = reader.string();
                    break;
                case 7:
                    message.expirationType = reader.int32();
                    break;
                case 8:
                    message.stopOrderType = reader.int32();
                    break;
                case 9:
                    message.expireDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.instrumentId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            figi: isSet(object.figi) ? String(object.figi) : "",
            quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
            price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
            stopPrice: isSet(object.stopPrice)
                ? Quotation.fromJSON(object.stopPrice)
                : undefined,
            direction: isSet(object.direction)
                ? stopOrderDirectionFromJSON(object.direction)
                : 0,
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
            expirationType: isSet(object.expirationType)
                ? stopOrderExpirationTypeFromJSON(object.expirationType)
                : 0,
            stopOrderType: isSet(object.stopOrderType)
                ? stopOrderTypeFromJSON(object.stopOrderType)
                : 0,
            expireDate: isSet(object.expireDate)
                ? fromJsonTimestamp(object.expireDate)
                : undefined,
            instrumentId: isSet(object.instrumentId)
                ? String(object.instrumentId)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.figi !== undefined && (obj.figi = message.figi);
        message.quantity !== undefined &&
            (obj.quantity = Math.round(message.quantity));
        message.price !== undefined &&
            (obj.price = message.price ? Quotation.toJSON(message.price) : undefined);
        message.stopPrice !== undefined &&
            (obj.stopPrice = message.stopPrice
                ? Quotation.toJSON(message.stopPrice)
                : undefined);
        message.direction !== undefined &&
            (obj.direction = stopOrderDirectionToJSON(message.direction));
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.expirationType !== undefined &&
            (obj.expirationType = stopOrderExpirationTypeToJSON(message.expirationType));
        message.stopOrderType !== undefined &&
            (obj.stopOrderType = stopOrderTypeToJSON(message.stopOrderType));
        message.expireDate !== undefined &&
            (obj.expireDate = message.expireDate.toISOString());
        message.instrumentId !== undefined &&
            (obj.instrumentId = message.instrumentId);
        return obj;
    },
};
function createBasePostStopOrderResponse() {
    return { stopOrderId: "" };
}
export const PostStopOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stopOrderId !== "") {
            writer.uint32(10).string(message.stopOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePostStopOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stopOrderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            stopOrderId: isSet(object.stopOrderId) ? String(object.stopOrderId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.stopOrderId !== undefined &&
            (obj.stopOrderId = message.stopOrderId);
        return obj;
    },
};
function createBaseGetStopOrdersRequest() {
    return { accountId: "" };
}
export const GetStopOrdersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetStopOrdersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        return obj;
    },
};
function createBaseGetStopOrdersResponse() {
    return { stopOrders: [] };
}
export const GetStopOrdersResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.stopOrders) {
            StopOrder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetStopOrdersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stopOrders.push(StopOrder.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            stopOrders: Array.isArray(object?.stopOrders)
                ? object.stopOrders.map((e) => StopOrder.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.stopOrders) {
            obj.stopOrders = message.stopOrders.map((e) => e ? StopOrder.toJSON(e) : undefined);
        }
        else {
            obj.stopOrders = [];
        }
        return obj;
    },
};
function createBaseCancelStopOrderRequest() {
    return { accountId: "", stopOrderId: "" };
}
export const CancelStopOrderRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.accountId !== "") {
            writer.uint32(10).string(message.accountId);
        }
        if (message.stopOrderId !== "") {
            writer.uint32(18).string(message.stopOrderId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelStopOrderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.accountId = reader.string();
                    break;
                case 2:
                    message.stopOrderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            accountId: isSet(object.accountId) ? String(object.accountId) : "",
            stopOrderId: isSet(object.stopOrderId) ? String(object.stopOrderId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.accountId !== undefined && (obj.accountId = message.accountId);
        message.stopOrderId !== undefined &&
            (obj.stopOrderId = message.stopOrderId);
        return obj;
    },
};
function createBaseCancelStopOrderResponse() {
    return { time: undefined };
}
export const CancelStopOrderResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCancelStopOrderResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined && (obj.time = message.time.toISOString());
        return obj;
    },
};
function createBaseStopOrder() {
    return {
        stopOrderId: "",
        lotsRequested: 0,
        figi: "",
        direction: 0,
        currency: "",
        orderType: 0,
        createDate: undefined,
        activationDateTime: undefined,
        expirationTime: undefined,
        price: undefined,
        stopPrice: undefined,
        instrumentUid: "",
    };
}
export const StopOrder = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.stopOrderId !== "") {
            writer.uint32(10).string(message.stopOrderId);
        }
        if (message.lotsRequested !== 0) {
            writer.uint32(16).int64(message.lotsRequested);
        }
        if (message.figi !== "") {
            writer.uint32(26).string(message.figi);
        }
        if (message.direction !== 0) {
            writer.uint32(32).int32(message.direction);
        }
        if (message.currency !== "") {
            writer.uint32(42).string(message.currency);
        }
        if (message.orderType !== 0) {
            writer.uint32(48).int32(message.orderType);
        }
        if (message.createDate !== undefined) {
            Timestamp.encode(toTimestamp(message.createDate), writer.uint32(58).fork()).ldelim();
        }
        if (message.activationDateTime !== undefined) {
            Timestamp.encode(toTimestamp(message.activationDateTime), writer.uint32(66).fork()).ldelim();
        }
        if (message.expirationTime !== undefined) {
            Timestamp.encode(toTimestamp(message.expirationTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.price !== undefined) {
            MoneyValue.encode(message.price, writer.uint32(82).fork()).ldelim();
        }
        if (message.stopPrice !== undefined) {
            MoneyValue.encode(message.stopPrice, writer.uint32(90).fork()).ldelim();
        }
        if (message.instrumentUid !== "") {
            writer.uint32(98).string(message.instrumentUid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStopOrder();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stopOrderId = reader.string();
                    break;
                case 2:
                    message.lotsRequested = longToNumber(reader.int64());
                    break;
                case 3:
                    message.figi = reader.string();
                    break;
                case 4:
                    message.direction = reader.int32();
                    break;
                case 5:
                    message.currency = reader.string();
                    break;
                case 6:
                    message.orderType = reader.int32();
                    break;
                case 7:
                    message.createDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.activationDateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.expirationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.price = MoneyValue.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.stopPrice = MoneyValue.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.instrumentUid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            stopOrderId: isSet(object.stopOrderId) ? String(object.stopOrderId) : "",
            lotsRequested: isSet(object.lotsRequested)
                ? Number(object.lotsRequested)
                : 0,
            figi: isSet(object.figi) ? String(object.figi) : "",
            direction: isSet(object.direction)
                ? stopOrderDirectionFromJSON(object.direction)
                : 0,
            currency: isSet(object.currency) ? String(object.currency) : "",
            orderType: isSet(object.orderType)
                ? stopOrderTypeFromJSON(object.orderType)
                : 0,
            createDate: isSet(object.createDate)
                ? fromJsonTimestamp(object.createDate)
                : undefined,
            activationDateTime: isSet(object.activationDateTime)
                ? fromJsonTimestamp(object.activationDateTime)
                : undefined,
            expirationTime: isSet(object.expirationTime)
                ? fromJsonTimestamp(object.expirationTime)
                : undefined,
            price: isSet(object.price)
                ? MoneyValue.fromJSON(object.price)
                : undefined,
            stopPrice: isSet(object.stopPrice)
                ? MoneyValue.fromJSON(object.stopPrice)
                : undefined,
            instrumentUid: isSet(object.instrumentUid)
                ? String(object.instrumentUid)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.stopOrderId !== undefined &&
            (obj.stopOrderId = message.stopOrderId);
        message.lotsRequested !== undefined &&
            (obj.lotsRequested = Math.round(message.lotsRequested));
        message.figi !== undefined && (obj.figi = message.figi);
        message.direction !== undefined &&
            (obj.direction = stopOrderDirectionToJSON(message.direction));
        message.currency !== undefined && (obj.currency = message.currency);
        message.orderType !== undefined &&
            (obj.orderType = stopOrderTypeToJSON(message.orderType));
        message.createDate !== undefined &&
            (obj.createDate = message.createDate.toISOString());
        message.activationDateTime !== undefined &&
            (obj.activationDateTime = message.activationDateTime.toISOString());
        message.expirationTime !== undefined &&
            (obj.expirationTime = message.expirationTime.toISOString());
        message.price !== undefined &&
            (obj.price = message.price
                ? MoneyValue.toJSON(message.price)
                : undefined);
        message.stopPrice !== undefined &&
            (obj.stopPrice = message.stopPrice
                ? MoneyValue.toJSON(message.stopPrice)
                : undefined);
        message.instrumentUid !== undefined &&
            (obj.instrumentUid = message.instrumentUid);
        return obj;
    },
};
export const StopOrdersServiceDefinition = {
    name: "StopOrdersService",
    fullName: "tinkoff.public.invest.api.contract.v1.StopOrdersService",
    methods: {
        /** Метод выставления стоп-заявки. */
        postStopOrder: {
            name: "PostStopOrder",
            requestType: PostStopOrderRequest,
            requestStream: false,
            responseType: PostStopOrderResponse,
            responseStream: false,
            options: {},
        },
        /** Метод получения списка активных стоп заявок по счёту. */
        getStopOrders: {
            name: "GetStopOrders",
            requestType: GetStopOrdersRequest,
            requestStream: false,
            responseType: GetStopOrdersResponse,
            responseStream: false,
            options: {},
        },
        /** Метод отмены стоп-заявки. */
        cancelStopOrder: {
            name: "CancelStopOrder",
            requestType: CancelStopOrderRequest,
            requestStream: false,
            responseType: CancelStopOrderResponse,
            responseStream: false,
            options: {},
        },
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=stoporders.js.map