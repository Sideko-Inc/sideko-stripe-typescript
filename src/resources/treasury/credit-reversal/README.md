
### list <a name="list"></a>
List all CreditReversals

<p>Returns a list of CreditReversals.</p>

**API Endpoint**: `GET /v1/treasury/credit_reversals`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.creditReversal.list({
  financialAccount: "string",
});
```

### get <a name="get"></a>
Retrieve a CreditReversal

<p>Retrieves the details of an existing CreditReversal by passing the unique CreditReversal ID from either the CreditReversal creation request or CreditReversal list</p>

**API Endpoint**: `GET /v1/treasury/credit_reversals/{credit_reversal}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.creditReversal.get({
  creditReversal: "string",
});
```

### create <a name="create"></a>
Create a CreditReversal

<p>Reverses a ReceivedCredit and creates a CreditReversal object.</p>

**API Endpoint**: `POST /v1/treasury/credit_reversals`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.creditReversal.create({
  receivedCredit: "string",
});
```
