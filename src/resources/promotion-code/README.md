
### list <a name="list"></a>
List all promotion codes

<p>Returns a list of your promotion codes.</p>

**API Endpoint**: `GET /v1/promotion_codes`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.promotionCode.list();
```

### get <a name="get"></a>
Retrieve a promotion code

<p>Retrieves the promotion code with the given ID. In order to retrieve a promotion code by the customer-facing <code>code</code> use <a href="/docs/api/promotion_codes/list">list</a> with the desired <code>code</code>.</p>

**API Endpoint**: `GET /v1/promotion_codes/{promotion_code}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.promotionCode.get({ promotionCode: "string" });
```

### create <a name="create"></a>
Create a promotion code

<p>A promotion code points to a coupon. You can optionally restrict the code to a specific customer, redemption limit, and expiration date.</p>

**API Endpoint**: `POST /v1/promotion_codes`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.promotionCode.create({ coupon: "string" });
```

### update <a name="update"></a>
Update a promotion code

<p>Updates the specified promotion code by setting the values of the parameters passed. Most fields are, by design, not editable.</p>

**API Endpoint**: `POST /v1/promotion_codes/{promotion_code}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.promotionCode.update({ promotionCode: "string" });
```
