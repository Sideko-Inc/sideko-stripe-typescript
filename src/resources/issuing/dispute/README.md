
### list <a name="list"></a>
List all disputes

<p>Returns a list of Issuing <code>Dispute</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

**API Endpoint**: `GET /v1/issuing/disputes`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.dispute.list();
```

### get <a name="get"></a>
Retrieve a dispute

<p>Retrieves an Issuing <code>Dispute</code> object.</p>

**API Endpoint**: `GET /v1/issuing/disputes/{dispute}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.dispute.get({ dispute: "string" });
```

### create <a name="create"></a>
Create a dispute

<p>Creates an Issuing <code>Dispute</code> object. Individual pieces of evidence within the <code>evidence</code> object are optional at this point. Stripe only validates that required evidence is present during submission. Refer to <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a> for more details about evidence requirements.</p>

**API Endpoint**: `POST /v1/issuing/disputes`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.dispute.create();
```

### update <a name="update"></a>
Update a dispute

<p>Updates the specified Issuing <code>Dispute</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the <code>evidence</code> object can be unset by passing in an empty string.</p>

**API Endpoint**: `POST /v1/issuing/disputes/{dispute}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.dispute.update({ dispute: "string" });
```

### submit <a name="submit"></a>
Submit a dispute

<p>Submits an Issuing <code>Dispute</code> to the card network. Stripe validates that all evidence fields required for the dispute’s reason are present. For more details, see <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a>.</p>

**API Endpoint**: `POST /v1/issuing/disputes/{dispute}/submit`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.dispute.submit({ dispute: "string" });
```
