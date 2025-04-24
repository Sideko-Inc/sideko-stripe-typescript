
### get <a name="get"></a>
Retrieve a source

<p>Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.</p>

**API Endpoint**: `GET /v1/sources/{source}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.source.get({ source: "string" });
```

### create <a name="create"></a>
Shares a source

<p>Creates a new source object.</p>

**API Endpoint**: `POST /v1/sources`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.source.create();
```

### update <a name="update"></a>
Update a source

<p>Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request accepts the <code>metadata</code> and <code>owner</code> as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our <a href="/docs/sources">payment method guides</a> for more detail.</p>

**API Endpoint**: `POST /v1/sources/{source}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.source.update({ source: "string" });
```

### verify <a name="verify"></a>
POST /v1/sources/{source}/verify

<p>Verify a given source.</p>

**API Endpoint**: `POST /v1/sources/{source}/verify`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.source.verify({
  values: ["string"],
  source: "string",
});
```
