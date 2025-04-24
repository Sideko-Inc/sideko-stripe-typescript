
### list <a name="list"></a>
List billing alerts

<p>Lists billing active and inactive alerts</p>

**API Endpoint**: `GET /v1/billing/alerts`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.alert.list();
```

### get <a name="get"></a>
Retrieve a billing alert

<p>Retrieves a billing alert given an ID</p>

**API Endpoint**: `GET /v1/billing/alerts/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.alert.get({ id: "string" });
```

### create <a name="create"></a>
Create a billing alert

<p>Creates a billing alert</p>

**API Endpoint**: `POST /v1/billing/alerts`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.alert.create({
  alertType: "usage_threshold",
  title: "string",
});
```

### activate <a name="activate"></a>
Activate a billing alert

<p>Reactivates this alert, allowing it to trigger again.</p>

**API Endpoint**: `POST /v1/billing/alerts/{id}/activate`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.alert.activate({ id: "string" });
```

### archive <a name="archive"></a>
Archive a billing alert

<p>Archives this alert, removing it from the list view and APIs. This is non-reversible.</p>

**API Endpoint**: `POST /v1/billing/alerts/{id}/archive`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.alert.archive({ id: "string" });
```

### deactivate <a name="deactivate"></a>
Deactivate a billing alert

<p>Deactivates this alert, preventing it from triggering.</p>

**API Endpoint**: `POST /v1/billing/alerts/{id}/deactivate`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.alert.deactivate({ id: "string" });
```
