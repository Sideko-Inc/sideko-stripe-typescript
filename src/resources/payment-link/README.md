
### list <a name="list"></a>
List all payment links

<p>Returns a list of your payment links.</p>

**API Endpoint**: `GET /v1/payment_links`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.paymentLink.list();
```

### get <a name="get"></a>
Retrieve payment link

<p>Retrieve a payment link.</p>

**API Endpoint**: `GET /v1/payment_links/{payment_link}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.paymentLink.get({ paymentLink: "string" });
```

### create <a name="create"></a>
Create a payment link

<p>Creates a payment link.</p>

**API Endpoint**: `POST /v1/payment_links`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.paymentLink.create({
  lineItems: [{ price: "string", quantity: 123 }],
});
```

### update <a name="update"></a>
Update a payment link

<p>Updates a payment link.</p>

**API Endpoint**: `POST /v1/payment_links/{payment_link}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.paymentLink.update({ paymentLink: "string" });
```
