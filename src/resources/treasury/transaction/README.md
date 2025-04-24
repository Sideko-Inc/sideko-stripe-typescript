
### list <a name="list"></a>
List all Transactions

<p>Retrieves a list of Transaction objects.</p>

**API Endpoint**: `GET /v1/treasury/transactions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.transaction.list({
  financialAccount: "string",
});
```

### get <a name="get"></a>
Retrieve a Transaction

<p>Retrieves the details of an existing Transaction.</p>

**API Endpoint**: `GET /v1/treasury/transactions/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.transaction.get({ id: "string" });
```
