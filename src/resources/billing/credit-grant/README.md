
### list <a name="list"></a>
List credit grants

<p>Retrieve a list of credit grants.</p>

**API Endpoint**: `GET /v1/billing/credit_grants`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.creditGrant.list();
```

### get <a name="get"></a>
Retrieve a credit grant

<p>Retrieves a credit grant.</p>

**API Endpoint**: `GET /v1/billing/credit_grants/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.creditGrant.get({ id: "string" });
```

### create <a name="create"></a>
Create a credit grant

<p>Creates a credit grant.</p>

**API Endpoint**: `POST /v1/billing/credit_grants`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.creditGrant.create({
  amount: { type: "monetary" },
  applicabilityConfig: { scope: {} },
  category: "paid",
  customer: "string",
});
```

### update <a name="update"></a>
Update a credit grant

<p>Updates a credit grant.</p>

**API Endpoint**: `POST /v1/billing/credit_grants/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.creditGrant.update({ id: "string" });
```

### expire <a name="expire"></a>
Expire a credit grant

<p>Expires a credit grant.</p>

**API Endpoint**: `POST /v1/billing/credit_grants/{id}/expire`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.creditGrant.expire({ id: "string" });
```

### void <a name="void"></a>
Void a credit grant

<p>Voids a credit grant.</p>

**API Endpoint**: `POST /v1/billing/credit_grants/{id}/void`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.creditGrant.void_({ id: "string" });
```
