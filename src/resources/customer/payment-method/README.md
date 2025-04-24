
### list <a name="list"></a>
List a Customer's PaymentMethods

<p>Returns a list of PaymentMethods for a given Customer</p>

**API Endpoint**: `GET /v1/customers/{customer}/payment_methods`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.paymentMethod.list({ customer: "string" });
```

### get <a name="get"></a>
Retrieve a Customer's PaymentMethod

<p>Retrieves a PaymentMethod object for a given Customer.</p>

**API Endpoint**: `GET /v1/customers/{customer}/payment_methods/{payment_method}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.paymentMethod.get({
  customer: "string",
  paymentMethod: "string",
});
```
