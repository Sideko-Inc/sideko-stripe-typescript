
### create <a name="create"></a>
Create an Account Session

<p>Creates a AccountSession object that includes a single-use token that the platform can use on their front-end to grant client-side API access.</p>

**API Endpoint**: `POST /v1/account_sessions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.accountSessions.create({
  account: "string",
  components: {},
});
```
