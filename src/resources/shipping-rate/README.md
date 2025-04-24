
### list <a name="list"></a>
List all shipping rates

<p>Returns a list of your shipping rates.</p>

**API Endpoint**: `GET /v1/shipping_rates`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.shippingRate.list();
```

### get <a name="get"></a>
Retrieve a shipping rate

<p>Returns the shipping rate object with the given ID.</p>

**API Endpoint**: `GET /v1/shipping_rates/{shipping_rate_token}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.shippingRate.get({ shippingRateToken: "string" });
```

### create <a name="create"></a>
Create a shipping rate

<p>Creates a new shipping rate object.</p>

**API Endpoint**: `POST /v1/shipping_rates`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.shippingRate.create({ displayName: "string" });
```

### update <a name="update"></a>
Update a shipping rate

<p>Updates an existing shipping rate object.</p>

**API Endpoint**: `POST /v1/shipping_rates/{shipping_rate_token}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.shippingRate.update({ shippingRateToken: "string" });
```
