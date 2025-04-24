
### create <a name="create"></a>
Test mode: Create a ReceivedDebit

<p>Use this endpoint to simulate a test mode ReceivedDebit initiated by a third party. In live mode, you can’t directly create ReceivedDebits initiated by third parties.</p>

**API Endpoint**: `POST /v1/test_helpers/treasury/received_debits`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.treasury.receivedDebit.create({
  amount: 123,
  currency: "string",
  financialAccount: "string",
  network: "ach",
});
```
