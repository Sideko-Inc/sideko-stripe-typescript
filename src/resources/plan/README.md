
### delete <a name="delete"></a>
Delete a plan

<p>Deleting plans means new subscribers can’t be added. Existing subscribers aren’t affected.</p>

**API Endpoint**: `DELETE /v1/plans/{plan}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.plan.delete({ plan: "string" });
```

### list <a name="list"></a>
List all plans

<p>Returns a list of your plans.</p>

**API Endpoint**: `GET /v1/plans`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.plan.list();
```

### get <a name="get"></a>
Retrieve a plan

<p>Retrieves the plan with the given ID.</p>

**API Endpoint**: `GET /v1/plans/{plan}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.plan.get({ plan: "string" });
```

### create <a name="create"></a>
Create a plan

<p>You can now model subscriptions more flexibly using the <a href="#prices">Prices API</a>. It replaces the Plans API and is backwards compatible to simplify your migration.</p>

**API Endpoint**: `POST /v1/plans`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.plan.create({ currency: "string", interval: "day" });
```

### update <a name="update"></a>
Update a plan

<p>Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan’s ID, amount, currency, or billing cycle.</p>

**API Endpoint**: `POST /v1/plans/{plan}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.plan.update({ plan: "string" });
```
