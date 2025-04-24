
### get <a name="get"></a>
Retrieve a supplier

<p>Retrieves a Climate supplier object.</p>

**API Endpoint**: `GET /v1/climate/suppliers/{supplier}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.climate.suppliers.get({ supplier: "string" });
```
