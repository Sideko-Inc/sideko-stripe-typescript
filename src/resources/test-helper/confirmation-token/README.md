
### create <a name="create"></a>
Create a test Confirmation Token

<p>Creates a test mode Confirmation Token server side for your integration tests.</p>

**API Endpoint**: `POST /v1/test_helpers/confirmation_tokens`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.confirmationToken.create();
```
