
### list <a name="list"></a>
List all tax rates

<p>Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.</p>

**API Endpoint**: `GET /v1/tax_rates`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.taxRate.list();
```

### get <a name="get"></a>
Retrieve a tax rate

<p>Retrieves a tax rate with the given ID</p>

**API Endpoint**: `GET /v1/tax_rates/{tax_rate}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.taxRate.get({ taxRate: "string" });
```

### create <a name="create"></a>
Create a tax rate

<p>Creates a new tax rate.</p>

**API Endpoint**: `POST /v1/tax_rates`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.taxRate.create({
  displayName: "string",
  inclusive: true,
  percentage: 123.45,
});
```

### update <a name="update"></a>
Update a tax rate

<p>Updates an existing tax rate.</p>

**API Endpoint**: `POST /v1/tax_rates/{tax_rate}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.taxRate.update({ taxRate: "string" });
```
