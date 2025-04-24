
### list <a name="list"></a>
List Account Owners

<p>Lists all owners for a given <code>Account</code></p>

**API Endpoint**: `GET /v1/linked_accounts/{account}/owners`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.linkedAccount.owners.list({
  account: "string",
  ownership: "string",
});
```
