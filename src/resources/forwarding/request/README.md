
### list <a name="list"></a>
List all ForwardingRequests

<p>Lists all ForwardingRequest objects.</p>

**API Endpoint**: `GET /v1/forwarding/requests`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.forwarding.request.list();
```

### get <a name="get"></a>
Retrieve a ForwardingRequest

<p>Retrieves a ForwardingRequest object.</p>

**API Endpoint**: `GET /v1/forwarding/requests/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.forwarding.request.get({ id: "string" });
```

### create <a name="create"></a>
Create a ForwardingRequest

<p>Creates a ForwardingRequest object.</p>

**API Endpoint**: `POST /v1/forwarding/requests`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.forwarding.request.create({
  paymentMethod: "string",
  replacements: ["card_cvc"],
  url: "string",
});
```
