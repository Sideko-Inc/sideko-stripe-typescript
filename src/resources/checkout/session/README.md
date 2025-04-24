
### list <a name="list"></a>
List all Checkout Sessions

<p>Returns a list of Checkout Sessions.</p>

**API Endpoint**: `GET /v1/checkout/sessions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.checkout.session.list();
```

### get <a name="get"></a>
Retrieve a Checkout Session

<p>Retrieves a Checkout Session object.</p>

**API Endpoint**: `GET /v1/checkout/sessions/{session}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.checkout.session.get({ session: "string" });
```

### create <a name="create"></a>
Create a Checkout Session

<p>Creates a Checkout Session object.</p>

**API Endpoint**: `POST /v1/checkout/sessions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.checkout.session.create();
```

### update <a name="update"></a>
Update a Checkout Session

<p>Updates a Checkout Session object.</p>

**API Endpoint**: `POST /v1/checkout/sessions/{session}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.checkout.session.update({ session: "string" });
```

### expire <a name="expire"></a>
Expire a Checkout Session

<p>A Checkout Session can be expired when it is in one of these statuses: <code>open</code> </p>

<p>After it expires, a customer can’t complete a Checkout Session and customers loading the Checkout Session see a message saying the Checkout Session is expired.</p>

**API Endpoint**: `POST /v1/checkout/sessions/{session}/expire`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.checkout.session.expire({ session: "string" });
```
