
### delete <a name="delete"></a>
Delete a Customer tax ID

<p>Deletes an existing <code>tax_id</code> object.</p>

**API Endpoint**: `DELETE /v1/customers/{customer}/tax_ids/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.taxId.delete({
  customer: "string",
  id: "string",
});
```

### list <a name="list"></a>
List all Customer tax IDs

<p>Returns a list of tax IDs for a customer.</p>

**API Endpoint**: `GET /v1/customers/{customer}/tax_ids`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.taxId.list({ customer: "string" });
```

### get <a name="get"></a>
Retrieve a Customer tax ID

<p>Retrieves the <code>tax_id</code> object with the given identifier.</p>

**API Endpoint**: `GET /v1/customers/{customer}/tax_ids/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.taxId.get({
  customer: "string",
  id: "string",
});
```

### create <a name="create"></a>
Create a Customer tax ID

<p>Creates a new <code>tax_id</code> object for a customer.</p>

**API Endpoint**: `POST /v1/customers/{customer}/tax_ids`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.taxId.create({
  type: "ad_nrt",
  value: "string",
  customer: "string",
});
```
