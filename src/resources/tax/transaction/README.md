
### get <a name="get"></a>
Retrieve a transaction

<p>Retrieves a Tax <code>Transaction</code> object.</p>

**API Endpoint**: `GET /v1/tax/transactions/{transaction}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.tax.transaction.get({ transaction: "string" });
```

### create_from_calculation <a name="create_from_calculation"></a>
Create a transaction from a calculation

<p>Creates a Tax Transaction from a calculation, if that calculation hasn’t expired. Calculations expire after 90 days.</p>

**API Endpoint**: `POST /v1/tax/transactions/create_from_calculation`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.tax.transaction.createFromCalculation({
  calculation: "string",
  reference: "string",
});
```

### create_reversal <a name="create_reversal"></a>
Create a reversal transaction

<p>Partially or fully reverses a previously created <code>Transaction</code>.</p>

**API Endpoint**: `POST /v1/tax/transactions/create_reversal`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.tax.transaction.createReversal({
  mode: "full",
  originalTransaction: "string",
  reference: "string",
});
```
