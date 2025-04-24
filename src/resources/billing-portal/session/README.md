
### create <a name="create"></a>
Create a portal session

<p>Creates a session of the customer portal.</p>

**API Endpoint**: `POST /v1/billing_portal/sessions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billingPortal.session.create({ customer: "string" });
```
