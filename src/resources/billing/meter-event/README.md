
### create <a name="create"></a>
Create a billing meter event

<p>Creates a billing meter event.</p>

**API Endpoint**: `POST /v1/billing/meter_events`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.meterEvent.create({
  eventName: "string",
  payload: {},
});
```
