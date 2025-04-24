
### delete <a name="delete"></a>
DELETE /v1/apple_pay/domains/{domain}

<p>Delete an apple pay domain.</p>

**API Endpoint**: `DELETE /v1/apple_pay/domains/{domain}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.applePay.domain.delete({ domain: "string" });
```

### list <a name="list"></a>
GET /v1/apple_pay/domains

<p>List apple pay domains.</p>

**API Endpoint**: `GET /v1/apple_pay/domains`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.applePay.domain.list();
```

### get <a name="get"></a>
GET /v1/apple_pay/domains/{domain}

<p>Retrieve an apple pay domain.</p>

**API Endpoint**: `GET /v1/apple_pay/domains/{domain}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.applePay.domain.get({ domain: "string" });
```

### create <a name="create"></a>
POST /v1/apple_pay/domains

<p>Create an apple pay domain.</p>

**API Endpoint**: `POST /v1/apple_pay/domains`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.applePay.domain.create({ domainName: "string" });
```
