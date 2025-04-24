
### delete <a name="delete"></a>
Delete a customer discount

<p>Removes the currently applied discount on a customer.</p>

**API Endpoint**: `DELETE /v1/customers/{customer}/discount`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.discount.delete({ customer: "string" });
```

### list <a name="list"></a>
GET /v1/customers/{customer}/discount



**API Endpoint**: `GET /v1/customers/{customer}/discount`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.discount.list({ customer: "string" });
```
