## Overview
http-responses is designed to be a simple way to construct http errors/responses throughout your node applications. The module consists of two parent classes from which a number of sub-classes extend:

### `HttpError`
The `HttpError` class extends the native `Error` object which makes it safe to `throw` instances of the class anywhere in your code.

### `HttpResponse`
The `HttpResponse` class should be used to return successful responses to your callers.

All the resulting objects share the same structure:

```typescript
interface HttpError {
  statusCode: number
  message: string
  status: string
}

interface HttpResponse {
  statusCode: number
  message: string
  status: string
}
```

## Pre-Defined Errors/Response
http-responses comes with a number of pre-built response/error classes that should be used wherever possible. They all implement the standard HTTP response types.

```typescript
import { BadRequest } from 'http-responses/errors'
import { Created } from 'http-responses/responses'
const error = new BadRequest()
const response = new Created()
```

## Messages
You can optionally specify a message with any error/response. If you don't define one manually, the message will default to the status.

```typescript
import { BadRequest } from 'http-responses/errors'
import { Created } from 'http-responses/created'

const error = new BadRequest('You did something wrong!')
const response = new Created('User Created!')
```

## Custom Errors/Responses
It's easy to create your own error/response types to suit your individual needs. It's always best to extend a subclass of the `HttpError` or `HttpResponse` classes. This will ensure your API is following standard HTTP conventions.

```typescript
import { PaymentRequired } from 'http-responses/errors'
// Status Code for this class will be 402...
class CreditCardExpired extends PaymentRequired {
  constructor() {
    super('Your credit card has expired')
  }
}
```

You can also define your own custom error statuses. This can be helpful if your upstream clients need to take action based on some custom error types that your API returns:

```typescript
import { BadRequest } from 'http-responses/errors'

class ValidationError extends BadRequest {
  constuctor(message: string) {
    super(message, 'Validation Error')
  }
}
```

Your client applications can now distinguish between different types of 400's and check specifically `Validation Error` response types.

## Using with an http client
There will be times where your service might make requests to external API's. It's easy to use the parent `HttpError` and `HttpResponse` classes to standardize the errors/responses your client might return. Here's an example using axios:

```typescript
import axios from 'axios'
import { HttpResponse } from 'http-responses/responses'
import { HttpError } from 'http-responses/errors'
async function requester(): HttpResponse {
  try {
    const res = await axios.get('https://api.foo.com/resource')
    return new HttpResonse({ statusCode: res.status, status: res.statusText })
  } catch (e) {
    throw new HttpError({ statusCode: e.code })
  }
}

requester().catch(e => {
  if (e instanceof HttpError) {
    // safely resume running
  } else {
    // confidently kill the process as this is an uncaught exception...
  }
})
```
