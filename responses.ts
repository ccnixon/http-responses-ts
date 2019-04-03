import * as HttpStatus from 'http-status-codes'

interface Options {
	statusCode: number
	message?: string
	status?: string
}

export class HttpResponse {
	public readonly statusCode: number
	public readonly message: string
	public readonly status: string
	constructor(options: Options) {
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
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.1
 *
 * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
 */
export class Continue extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 100, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.14
 *
 * This response code means the expectation indicated by the Expect request header field can't be met by the server.
 */

export class Created extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 201, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.2
 *
 * This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.
 */
export class MovedPermanently extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 301, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.3
 *
 * This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
 */
export class MovedTemporarily extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 302, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.2
 *
 * A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
 */
export class MultiStatus extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 207, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.1
 *
 * The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.
 */
export class MultipleChoices extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 300, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.5
 *
 * There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
 */
export class NoContent extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 204, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.4
 * This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
 */
export class NonAuthoritativeInformation extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 203, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.1
 *
 * This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.
 */
export class NotModified extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 304, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.1
 *
 * The request has succeeded. The meaning of a success varies depending on the HTTP method:
 * GET: The resource has been fetched and is transmitted in the message body.
 * HEAD: The entity headers are in the message body.
 * POST: The resource describing the result of the action is transmitted in the message body.
 * TRACE: The message body contains the request message as received by the server
 */
export class Success extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 200, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.1
 *
 * This response code is used because of range header sent by the client to separate download into multiple streams.
 */
export class PartialContent extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 206, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7538#section-3
 *
 * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 */
export class PermanentRedirect extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 308, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.1
 *
 * This code indicates that the server has received and is processing the request, but no response is available yet.
 */
export class Processing extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 102, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.6
 *
 * This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
 */
export class ResetContent extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 205, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.4
 *
 * Server sent this response to directing client to get requested resource to another URI with an GET request.
 */
export class SeeOther extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 303, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.2
 *
 * This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
 */
export class SwitchingProtocols extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 101, message })
	}
}

/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.7
 *
 * Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 */
export class TemporaryRedirect extends HttpResponse {
	constructor(message?: string) {
		super({ statusCode: 307, message })
	}
}
