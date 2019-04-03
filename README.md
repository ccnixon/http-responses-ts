## Overview
Http-responses is designed to be a simple way to construct http errors/responses throughout your node applications. The module consists of two parent classes from which a number of sub-classes extend:

### HttpError
The `HttpError` class extends the native `Error` object which makes it safe to `throw` instances of the class anywhere in your code.

### HttpResponse
The `HttpResponse` class should be used to return successful responses to your callers.

## Pre-Built Errors/Response
Http-responses comes with a number of pre-built response/error classes that should be used wherever possible. They all implement the standard HTTP response types.

```typescript
import { BadRequest } from 'http-responses/errors'
import { Created } from 'http-responses/created'
const error = new BadRequest()
const response = new Created()
```

## Messages
You can optionally define a message with any error/response.

```typescript
import { BadRequest } from 'http-responses/errors'
import { Created } from 'http-responses/created'
const error = new BadRequest('You did something wrong!')
const response = new Created('User Created!')
```

## Custom Errors/Responses
It's easy to create your own error/response instances to suit your individual needs. It's always best to extend a subclass of the `HttpError` or `HttpResponse` classes. This will ensure your API is following standard HTTP best practices.

```typescript
import { PaymentRequired } from 'http-responses/errors'
// Status Code for this class will be 402...
class CreditCardExpired extends PaymentRequired {
  constructor() {
    super('Your credit card has expired')
  }
}
```

## Using with an http client
There will be times where your service might make requests to external API's. It's easy to use the parent `HttpError` and `HttpResponse` classes to standardize the errors/responses your http client might return.
