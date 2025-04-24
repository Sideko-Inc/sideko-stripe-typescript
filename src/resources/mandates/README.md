
### get <a name="get"></a>
Retrieve a Mandate

<p>Retrieves a Mandate object.</p>

**API Endpoint**: `GET /v1/mandates/{mandate}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.mandates.get({ mandate: "string" });
```
