
### present_payment_method <a name="present_payment_method"></a>
Simulate presenting a payment method

<p>Presents a payment method on a simulated reader. Can be used to simulate accepting a payment, saving a card or refunding a transaction.</p>

**API Endpoint**: `POST /v1/test_helpers/terminal/readers/{reader}/present_payment_method`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.terminal.reader.presentPaymentMethod({
  reader: "string",
});
```
