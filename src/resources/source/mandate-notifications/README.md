
### get <a name="get"></a>
Retrieve a Source MandateNotification

<p>Retrieves a new Source MandateNotification.</p>

**API Endpoint**: `GET /v1/sources/{source}/mandate_notifications/{mandate_notification}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.source.mandateNotifications.get({
  mandateNotification: "string",
  source: "string",
});
```
