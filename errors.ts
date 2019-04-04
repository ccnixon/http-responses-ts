import * as HttpStatus from 'http-status-codes'

interface Options {
	statusCode: number
	message?: string
	status?: string
}

export class HttpError extends Error {
	public readonly statusCode: number
	public readonly message: string
	public readonly status: string
	constructor(options: Options) {
		super()
		const { status, message, statusCode } = options
		try {
			this.status = status || HttpStatus.getStatusText(options.statusCode)
		} catch (e) {
			this.status = 'Unknown'
		}
		this.message = message || this.status
		this.statusCode = statusCode
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.3
 *
 * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
 */
export class BadGateway extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 502, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.1
 *
 * This response means that server could not understand the request due to invalid syntax.
 */
export class BadRequest extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 400, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.8
 *
 * This response is sent when a request conflicts with the current state of the server.
 */
export class Conflict extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 409, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.14
 *
 * This response code means the expectation indicated by the Expect request header field can't be met by the server.
 */
export class ExpectationFailed extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 417, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.5
 *
 * The request failed due to failure of a previous request.
 */
export class FailedDependency extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 424, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.3
 *
 * The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.
 */
export class Forbidden extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 403, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.5
 *
 * This error response is given when the server is acting as a gateway and cannot get a response in time.
 */
export class GatewayTimeout extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 504, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.9
 *
 * This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
 */
export class Gone extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 410, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.6
 *
 * The HTTP version used in the request is not supported by the server.
 */
export class HttpVersionNotSupported extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 410, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2324#section-2.3.2
 *
 * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
 */
export class ImATeapot extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 418, message, status })
	}
}

/**
 * UNOFFICIAL w/ NO DOCS
 */
export class InsufficientSpaceOnResource extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 419, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6
 *
 * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
 */
export class InsufficientStorage extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 419, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.1
 *
 * The server has encountered a situation it doesn't know how to handle.
 */
export class InternalServerError extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 500, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.10
 *
 * Server rejected the request because the Content-Length header field is not defined and the server requires it.
 */
export class LengthRequired extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 411, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.4
 *
 * The resource that is being accessed is locked.
 */
export class Locked extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 423, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.2
 *
 * This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.
 */
export class MethodNotAllowed extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 405, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-6
 *
 * The 511 status code indicates that the client needs to authenticate to gain network access.
 */
export class NetworkAuthenticationRequired extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 511, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.6
 *
 * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
 */
export class NotAcceptable extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 406, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.4
 *
 * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
 */
export class NotFound extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 404, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.2
 *
 * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
 */
export class NotImplemented extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 501, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.2
 *
 * This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.
 */
export class PaymentRequired extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 402, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.2
 *
 * The client has indicated preconditions in its headers which the server does not meet.
 */
export class PreconditionFailed extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 412, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-3
 *
 * The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
 */
export class PreconditionRequired extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 428, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.2
 *
 * This is similar to 401 but authentication is needed to be done by a proxy.
 */
export class ProxyAuthenticationRequired extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 407, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-5
 *
 * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
 */
export class RequestHeaderFieldsTooLarge extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 431, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.7
 *
 * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
 */
export class RequestTimeout extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 408, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.11
 *
 * Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
 */
export class RequestTooLong extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 413, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.12
 *
 * The URI requested by the client is longer than the server is willing to interpret.
 */
export class RequestURITooLong extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 414, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.4
 *
 * The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
 */
export class RequestedRangeNotSatisfiable extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 416, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.4
 *
 * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
 */
export class ServiceUnavailable extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 503, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-4
 *
 * The user has sent too many requests in a given amount of time ("rate limiting").
 */
export class TooManyRequests extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 429, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.1
 *
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
export class Unauthorized extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 401, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.3
 *
 * The request was well-formed but was unable to be followed due to semantic errors.
 */
export class UnprocessableEntity extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 422, message, status })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.13
 *
 * The media format of the requested data is not supported by the server, so the server is rejecting the request.
 */
export class UnsupportedMediaType extends HttpError {
	constructor(message?: string, status?: string) {
		super({ statusCode: 415, message, status })
	}
}
