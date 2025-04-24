
### list <a name="list"></a>
List all features

<p>Retrieve a list of features</p>

**API Endpoint**: `GET /v1/entitlements/features`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.entitlement.feature.list();
```

### get <a name="get"></a>
Retrieve a feature

<p>Retrieves a feature</p>

**API Endpoint**: `GET /v1/entitlements/features/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.entitlement.feature.get({ id: "string" });
```

### create <a name="create"></a>
Create a feature

<p>Creates a feature</p>

**API Endpoint**: `POST /v1/entitlements/features`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.entitlement.feature.create({
  lookupKey: "string",
  name: "string",
});
```

### update <a name="update"></a>
Updates a feature

<p>Update a feature’s metadata or permanently deactivate it.</p>

**API Endpoint**: `POST /v1/entitlements/features/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.entitlement.feature.update({ id: "string" });
```
