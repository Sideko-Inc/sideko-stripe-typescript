
### list <a name="list"></a>
List billing meter event summaries

<p>Retrieve a list of billing meter event summaries.</p>

**API Endpoint**: `GET /v1/billing/meters/{id}/event_summaries`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.meter.eventSummaries.list({
  id: "string",
  customer: "string",
  endTime: 123,
  startTime: 123,
});
```
