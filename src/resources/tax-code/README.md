
### list <a name="list"></a>
List all tax codes

<p>A list of <a href="https://stripe.com/docs/tax/tax-categories">all tax codes available</a> to add to Products in order to allow specific tax calculations.</p>

**API Endpoint**: `GET /v1/tax_codes`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.taxCode.list();
```

### get <a name="get"></a>
Retrieve a tax code

<p>Retrieves the details of an existing tax code. Supply the unique tax code ID and Stripe will return the corresponding tax code information.</p>

**API Endpoint**: `GET /v1/tax_codes/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.taxCode.get({ id: "string" });
```
