
### delete <a name="delete"></a>
Delete a tax ID

<p>Deletes an existing account or customer <code>tax_id</code> object.</p>

**API Endpoint**: `DELETE /v1/tax_ids/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.taxId.delete({ id: "string" });
```

### list <a name="list"></a>
List all tax IDs

<p>Returns a list of tax IDs.</p>

**API Endpoint**: `GET /v1/tax_ids`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.taxId.list();
```

### get <a name="get"></a>
Retrieve a tax ID

<p>Retrieves an account or customer <code>tax_id</code> object.</p>

**API Endpoint**: `GET /v1/tax_ids/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.taxId.get({ id: "string" });
```

### create <a name="create"></a>
Create a tax ID

<p>Creates a new account or customer <code>tax_id</code> object.</p>

**API Endpoint**: `POST /v1/tax_ids`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.taxId.create({ type: "ad_nrt", value: "string" });
```
