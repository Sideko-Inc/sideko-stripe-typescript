
### list <a name="list"></a>
List all DebitReversals

<p>Returns a list of DebitReversals.</p>

**API Endpoint**: `GET /v1/treasury/debit_reversals`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.debitReversal.list({
  financialAccount: "string",
});
```

### get <a name="get"></a>
Retrieve a DebitReversal

<p>Retrieves a DebitReversal object.</p>

**API Endpoint**: `GET /v1/treasury/debit_reversals/{debit_reversal}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.debitReversal.get({
  debitReversal: "string",
});
```

### create <a name="create"></a>
Create a DebitReversal

<p>Reverses a ReceivedDebit and creates a DebitReversal object.</p>

**API Endpoint**: `POST /v1/treasury/debit_reversals`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.debitReversal.create({
  receivedDebit: "string",
});
```
