
### get <a name="get"></a>
Retrieve a cash balance

<p>Retrieves a customer’s cash balance.</p>

**API Endpoint**: `GET /v1/customers/{customer}/cash_balance`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.cashBalance.get({ customer: "string" });
```

### modify <a name="modify"></a>
Update a cash balance's settings

<p>Changes the settings on a customer’s cash balance.</p>

**API Endpoint**: `POST /v1/customers/{customer}/cash_balance`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.cashBalance.modify({ customer: "string" });
```
