
### create <a name="create"></a>
Create a Customer Session

<p>Creates a Customer Session object that includes a single-use client secret that you can use on your front-end to grant client-side API access for certain customer resources.</p>

**API Endpoint**: `POST /v1/customer_sessions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customerSession.create({
  components: {},
  customer: "string",
});
```
