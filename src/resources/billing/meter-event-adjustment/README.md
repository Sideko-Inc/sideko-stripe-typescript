
### create <a name="create"></a>
Create a billing meter event adjustment

<p>Creates a billing meter event adjustment.</p>

**API Endpoint**: `POST /v1/billing/meter_event_adjustments`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.meterEventAdjustment.create({
  eventName: "string",
  type: "cancel",
});
```
