
### list <a name="list"></a>
List all refunds

<p>You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on the charge object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>

**API Endpoint**: `GET /v1/charges/{charge}/refunds`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.charge.refund.list({ charge: "string" });
```

### get <a name="get"></a>
GET /v1/charges/{charge}/refunds/{refund}

<p>Retrieves the details of an existing refund.</p>

**API Endpoint**: `GET /v1/charges/{charge}/refunds/{refund}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.charge.refund.get({
  charge: "string",
  refund: "string",
});
```

### create <a name="create"></a>
Create a refund

<p>When you create a new refund, you must specify either a Charge or a PaymentIntent object.</p>

<p>This action refunds a previously created charge that’s not refunded yet.
Funds are refunded to the credit or debit card that’s originally charged.</p>

<p>You can optionally refund only part of a charge.
You can repeat this until the entire charge is refunded.</p>

<p>After you entirely refund a charge, you can’t refund it again.
This method raises an error when it’s called on an already-refunded charge,
or when you attempt to refund more money than is left on a charge.</p>

**API Endpoint**: `POST /v1/charges/{charge}/refund`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.charge.refund.create({ charge: "string" });
```

### create_1 <a name="create_1"></a>
Create customer balance refund

<p>When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.</p>

<p>Creating a new refund will refund a charge that has previously been created but not yet refunded.
Funds will be refunded to the credit or debit card that was originally charged.</p>

<p>You can optionally refund only part of a charge.
You can do so multiple times, until the entire charge has been refunded.</p>

<p>Once entirely refunded, a charge can’t be refunded again.
This method will raise an error when called on an already-refunded charge,
or when trying to refund more money than is left on a charge.</p>

**API Endpoint**: `POST /v1/charges/{charge}/refunds`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.charge.refund.create1({ charge: "string" });
```

### update <a name="update"></a>
POST /v1/charges/{charge}/refunds/{refund}

<p>Update a specified refund.</p>

**API Endpoint**: `POST /v1/charges/{charge}/refunds/{refund}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.charge.refund.update({
  charge: "string",
  refund: "string",
});
```
