
### list <a name="list"></a>
Retrieve a payment link's line items

<p>When retrieving a payment link, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>

**API Endpoint**: `GET /v1/payment_links/{payment_link}/line_items`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.paymentLinks.lineItem.list({ paymentLink: "string" });
```
