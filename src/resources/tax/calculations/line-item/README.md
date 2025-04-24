
### list <a name="list"></a>
Retrieve a calculation's line items

<p>Retrieves the line items of a tax calculation as a collection, if the calculation hasn’t expired.</p>

**API Endpoint**: `GET /v1/tax/calculations/{calculation}/line_items`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.tax.calculations.lineItem.list({
  calculation: "string",
});
```
