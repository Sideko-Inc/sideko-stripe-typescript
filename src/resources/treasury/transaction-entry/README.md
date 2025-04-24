
### list <a name="list"></a>
List all TransactionEntries

<p>Retrieves a list of TransactionEntry objects.</p>

**API Endpoint**: `GET /v1/treasury/transaction_entries`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.transactionEntry.list({
  financialAccount: "string",
});
```

### get <a name="get"></a>
Retrieve a TransactionEntry

<p>Retrieves a TransactionEntry object.</p>

**API Endpoint**: `GET /v1/treasury/transaction_entries/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.transactionEntry.get({ id: "string" });
```
