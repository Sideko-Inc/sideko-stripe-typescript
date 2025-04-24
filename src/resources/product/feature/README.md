
### delete <a name="delete"></a>
Remove a feature from a product

<p>Deletes the feature attachment to a product</p>

**API Endpoint**: `DELETE /v1/products/{product}/features/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.product.feature.delete({
  id: "string",
  product: "string",
});
```

### list <a name="list"></a>
List all features attached to a product

<p>Retrieve a list of features for a product</p>

**API Endpoint**: `GET /v1/products/{product}/features`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.product.feature.list({ product: "string" });
```

### get <a name="get"></a>
Retrieve a product_feature

<p>Retrieves a product_feature, which represents a feature attachment to a product</p>

**API Endpoint**: `GET /v1/products/{product}/features/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.product.feature.get({
  id: "string",
  product: "string",
});
```

### create <a name="create"></a>
Attach a feature to a product

<p>Creates a product_feature, which represents a feature attachment to a product</p>

**API Endpoint**: `POST /v1/products/{product}/features`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.product.feature.create({
  entitlementFeature: "string",
  product: "string",
});
```
