
### list <a name="list"></a>
List all top-ups

<p>Returns a list of top-ups.</p>

**API Endpoint**: `GET /v1/topups`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.topups.list();
```

### get <a name="get"></a>
Retrieve a top-up

<p>Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.</p>

**API Endpoint**: `GET /v1/topups/{topup}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.topups.get({ topup: "string" });
```

### create <a name="create"></a>
Create a top-up

<p>Top up the balance of an account</p>

**API Endpoint**: `POST /v1/topups`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.topups.create({ amount: 123, currency: "string" });
```

### update <a name="update"></a>
Update a top-up

<p>Updates the metadata of a top-up. Other top-up details are not editable by design.</p>

**API Endpoint**: `POST /v1/topups/{topup}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.topups.update({ topup: "string" });
```

### cancel <a name="cancel"></a>
Cancel a top-up

<p>Cancels a top-up. Only pending top-ups can be canceled.</p>

**API Endpoint**: `POST /v1/topups/{topup}/cancel`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.topups.cancel({ topup: "string" });
```
