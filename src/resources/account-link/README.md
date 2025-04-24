
### create <a name="create"></a>
Create an account link

<p>Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.</p>

**API Endpoint**: `POST /v1/account_links`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.accountLink.create({
  account: "string",
  type: "account_onboarding",
});
```
