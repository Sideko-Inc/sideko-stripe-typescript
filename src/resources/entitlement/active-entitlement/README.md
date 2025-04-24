
### list <a name="list"></a>
List all active entitlements

<p>Retrieve a list of active entitlements for a customer</p>

**API Endpoint**: `GET /v1/entitlements/active_entitlements`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.entitlement.activeEntitlement.list({
  customer: "string",
});
```

### get <a name="get"></a>
Retrieve an active entitlement

<p>Retrieve an active entitlement</p>

**API Endpoint**: `GET /v1/entitlements/active_entitlements/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.entitlement.activeEntitlement.get({ id: "string" });
```
