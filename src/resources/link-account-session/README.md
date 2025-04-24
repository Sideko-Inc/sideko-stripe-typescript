
### get <a name="get"></a>
Retrieve a Session

<p>Retrieves the details of a Financial Connections <code>Session</code></p>

**API Endpoint**: `GET /v1/link_account_sessions/{session}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.linkAccountSession.get({ session: "string" });
```

### create <a name="create"></a>
Create a Session

<p>To launch the Financial Connections authorization flow, create a <code>Session</code>. The session’s <code>client_secret</code> can be used to launch the flow using Stripe.js.</p>

**API Endpoint**: `POST /v1/link_account_sessions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.linkAccountSession.create({
  accountHolder: { type: "account" },
  permissions: ["balances"],
});
```
