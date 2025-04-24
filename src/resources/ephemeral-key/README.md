
### delete <a name="delete"></a>
Immediately invalidate an ephemeral key

<p>Invalidates a short-lived API key for a given resource.</p>

**API Endpoint**: `DELETE /v1/ephemeral_keys/{key}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.ephemeralKey.delete({ key: "string" });
```

### create <a name="create"></a>
Create an ephemeral key

<p>Creates a short-lived API key for a given resource.</p>

**API Endpoint**: `POST /v1/ephemeral_keys`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.ephemeralKey.create();
```
