
### get <a name="get"></a>
Retrieve the credit balance summary for a customer

<p>Retrieves the credit balance summary for a customer.</p>

**API Endpoint**: `GET /v1/billing/credit_balance_summary`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.creditBalanceSummary.get({
  customer: "string",
  filter: { type: "applicability_scope" },
});
```
