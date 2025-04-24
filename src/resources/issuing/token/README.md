
### list <a name="list"></a>
List all issuing tokens for card

<p>Lists all Issuing <code>Token</code> objects for a given card.</p>

**API Endpoint**: `GET /v1/issuing/tokens`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.token.list({ card: "string" });
```

### get <a name="get"></a>
Retrieve an issuing token

<p>Retrieves an Issuing <code>Token</code> object.</p>

**API Endpoint**: `GET /v1/issuing/tokens/{token}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.token.get({ token: "string" });
```

### update <a name="update"></a>
Update a token status

<p>Attempts to update the specified Issuing <code>Token</code> object to the status specified.</p>

**API Endpoint**: `POST /v1/issuing/tokens/{token}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.token.update({
  status: "active",
  token: "string",
});
```
