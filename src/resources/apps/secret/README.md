
### list <a name="list"></a>
List secrets

<p>List all secrets stored on the given scope.</p>

**API Endpoint**: `GET /v1/apps/secrets`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.apps.secret.list({ scope: { type: "account" } });
```

### find <a name="find"></a>
Find a Secret

<p>Finds a secret in the secret store by name and scope.</p>

**API Endpoint**: `GET /v1/apps/secrets/find`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.apps.secret.find({
  name: "string",
  scope: { type: "account" },
});
```

### create <a name="create"></a>
Set a Secret

<p>Create or replace a secret in the secret store.</p>

**API Endpoint**: `POST /v1/apps/secrets`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.apps.secret.create({
  name: "string",
  payload: "string",
  scope: { type: "account" },
});
```

### delete <a name="delete"></a>
Delete a Secret

<p>Deletes a secret from the secret store by name and scope.</p>

**API Endpoint**: `POST /v1/apps/secrets/delete`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.apps.secret.delete({
  name: "string",
  scope: { type: "account" },
});
```
