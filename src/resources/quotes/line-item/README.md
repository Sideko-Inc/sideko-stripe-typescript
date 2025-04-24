
### list <a name="list"></a>
Retrieve a quote's line items

<p>When retrieving a quote, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>

**API Endpoint**: `GET /v1/quotes/{quote}/line_items`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.quotes.lineItem.list({ quote: "string" });
```
