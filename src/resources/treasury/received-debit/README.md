
### list <a name="list"></a>
List all ReceivedDebits

<p>Returns a list of ReceivedDebits.</p>

**API Endpoint**: `GET /v1/treasury/received_debits`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.receivedDebit.list({
  financialAccount: "string",
});
```

### get <a name="get"></a>
Retrieve a ReceivedDebit

<p>Retrieves the details of an existing ReceivedDebit by passing the unique ReceivedDebit ID from the ReceivedDebit list</p>

**API Endpoint**: `GET /v1/treasury/received_debits/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.receivedDebit.get({ id: "string" });
```
