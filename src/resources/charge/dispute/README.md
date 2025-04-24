
### get <a name="get"></a>
GET /v1/charges/{charge}/dispute

<p>Retrieve a dispute for a specified charge.</p>

**API Endpoint**: `GET /v1/charges/{charge}/dispute`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.charge.dispute.get({ charge: "string" });
```

### create <a name="create"></a>
POST /v1/charges/{charge}/dispute



**API Endpoint**: `POST /v1/charges/{charge}/dispute`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.charge.dispute.create({ charge: "string" });
```

### close <a name="close"></a>
POST /v1/charges/{charge}/dispute/close



**API Endpoint**: `POST /v1/charges/{charge}/dispute/close`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.charge.dispute.close({ charge: "string" });
```
