
### list <a name="list"></a>
List all prices

<p>Returns a list of your active prices, excluding <a href="/docs/products-prices/pricing-models#inline-pricing">inline prices</a>. For the list of inactive prices, set <code>active</code> to false.</p>

**API Endpoint**: `GET /v1/prices`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.price.list();
```

### search <a name="search"></a>
Search prices

<p>Search for prices you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>

**API Endpoint**: `GET /v1/prices/search`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.price.search({ query: "string" });
```

### get <a name="get"></a>
Retrieve a price

<p>Retrieves the price with the given ID.</p>

**API Endpoint**: `GET /v1/prices/{price}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.price.get({ price: "string" });
```

### create <a name="create"></a>
Create a price

<p>Creates a new <a href="https://docs.stripe.com/api/prices">Price</a> for an existing <a href="https://docs.stripe.com/api/products">Product</a>. The Price can be recurring or one-time.</p>

**API Endpoint**: `POST /v1/prices`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.price.create({ currency: "string" });
```

### update <a name="update"></a>
Update a price

<p>Updates the specified price by setting the values of the parameters passed. Any parameters not provided are left unchanged.</p>

**API Endpoint**: `POST /v1/prices/{price}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.price.update({ price: "string" });
```
