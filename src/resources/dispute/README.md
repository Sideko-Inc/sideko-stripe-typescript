
### list <a name="list"></a>
List all disputes

<p>Returns a list of your disputes.</p>

**API Endpoint**: `GET /v1/disputes`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.dispute.list();
```

### get <a name="get"></a>
Retrieve a dispute

<p>Retrieves the dispute with the given ID.</p>

**API Endpoint**: `GET /v1/disputes/{dispute}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.dispute.get({ dispute: "string" });
```

### update <a name="update"></a>
Update a dispute

<p>When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your <a href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer, you can use the API to submit evidence programmatically.</p>

<p>Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our <a href="/docs/disputes/categories">guide to dispute types</a>.</p>

**API Endpoint**: `POST /v1/disputes/{dispute}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.dispute.update({ dispute: "string" });
```

### close <a name="close"></a>
Close a dispute

<p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p>

<p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p>

**API Endpoint**: `POST /v1/disputes/{dispute}/close`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.dispute.close({ dispute: "string" });
```
