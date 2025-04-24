
### list <a name="list"></a>
List billing meters

<p>Retrieve a list of billing meters.</p>

**API Endpoint**: `GET /v1/billing/meters`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.meter.list();
```

### get <a name="get"></a>
Retrieve a billing meter

<p>Retrieves a billing meter given an ID.</p>

**API Endpoint**: `GET /v1/billing/meters/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.meter.get({ id: "string" });
```

### create <a name="create"></a>
Create a billing meter

<p>Creates a billing meter.</p>

**API Endpoint**: `POST /v1/billing/meters`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.meter.create({
  defaultAggregation: { formula: "count" },
  displayName: "string",
  eventName: "string",
});
```

### update <a name="update"></a>
Update a billing meter

<p>Updates a billing meter.</p>

**API Endpoint**: `POST /v1/billing/meters/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.meter.update({ id: "string" });
```

### deactivate <a name="deactivate"></a>
Deactivate a billing meter

<p>When a meter is deactivated, no more meter events will be accepted for this meter. You can’t attach a deactivated meter to a price.</p>

**API Endpoint**: `POST /v1/billing/meters/{id}/deactivate`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.meter.deactivate({ id: "string" });
```

### reactivate <a name="reactivate"></a>
Reactivate a billing meter

<p>When a meter is reactivated, events for this meter can be accepted and you can attach the meter to a price.</p>

**API Endpoint**: `POST /v1/billing/meters/{id}/reactivate`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billing.meter.reactivate({ id: "string" });
```
