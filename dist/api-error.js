/**
 * Nice-grpc middleware to attach headers to thrown error.
 * See: https://github.com/deeplay-io/nice-grpc/issues/125
 */
import { ClientError, } from 'nice-grpc';
export class TinkoffApiError extends ClientError {
    constructor(path, code, details) {
        super(path, code, details);
        this.trackingId = '';
        this.envoyUpstreamServiceTime = '';
        this.ratelimit = '';
        this.ratelimitRemaining = '';
        this.ratelimitReset = '';
        this.name = 'TinkoffApiError';
    }
}
export async function* errorMiddleware(call, options) {
    let trailer;
    options.onTrailer = _trailer => trailer = _trailer;
    try {
        return yield* call.next(call.request, options);
    }
    catch (error) {
        if (error instanceof ClientError && trailer) {
            throw buildTinkoffApiError(error, trailer);
        }
        else {
            throw error;
        }
    }
}
// eslint-disable-next-line complexity
function buildTinkoffApiError({ path, code, details }, metadata) {
    const message = metadata.get('message');
    const error = new TinkoffApiError(path, code, message || details);
    error.trackingId = metadata.get('x-tracking-id') || '';
    error.envoyUpstreamServiceTime = metadata.get('x-envoy-upstream-service-time') || '';
    error.ratelimit = metadata.get('x-ratelimit-limit') || '';
    error.ratelimitRemaining = metadata.get('x-ratelimit-remaining') || '';
    error.ratelimitReset = metadata.get('x-ratelimit-remaining') || '';
    return error;
}
//# sourceMappingURL=api-error.js.map