
### list <a name="list"></a>
List Country Specs

<p>Lists all Country Spec objects available in the API.</p>

**API Endpoint**: `GET /v1/country_specs`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.countrySpec.list();
```

### get <a name="get"></a>
Retrieve a Country Spec

<p>Returns a Country Spec for a given Country code.</p>

**API Endpoint**: `GET /v1/country_specs/{country}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.countrySpec.get({ country: "string" });
```
