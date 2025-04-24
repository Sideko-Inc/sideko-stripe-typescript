
### list <a name="list"></a>
GET /v1/sources/{source}/source_transactions

<p>List source transactions for a given source.</p>

**API Endpoint**: `GET /v1/sources/{source}/source_transactions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.source.sourceTransactions.list({ source: "string" });
```

### get <a name="get"></a>
Retrieve a source transaction

<p>Retrieve an existing source transaction object. Supply the unique source ID from a source creation request and the source transaction ID and Stripe will return the corresponding up-to-date source object information.</p>

**API Endpoint**: `GET /v1/sources/{source}/source_transactions/{source_transaction}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.source.sourceTransactions.get({
  source: "string",
  sourceTransaction: "string",
});
```
