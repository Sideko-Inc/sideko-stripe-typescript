
### expire <a name="expire"></a>
Expire a pending refund.

<p>Expire a refund with a status of <code>requires_action</code>.</p>

**API Endpoint**: `POST /v1/test_helpers/refunds/{refund}/expire`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.refund.expire({ refund: "string" });
```
