
### list <a name="list"></a>
List payment method configurations

<p>List payment method configurations</p>

**API Endpoint**: `GET /v1/payment_method_configurations`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.paymentMethodConfiguration.list();
```

### get <a name="get"></a>
Retrieve payment method configuration

<p>Retrieve payment method configuration</p>

**API Endpoint**: `GET /v1/payment_method_configurations/{configuration}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.paymentMethodConfiguration.get({
  configuration: "string",
});
```

### create <a name="create"></a>
Create a payment method configuration

<p>Creates a payment method configuration</p>

**API Endpoint**: `POST /v1/payment_method_configurations`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.paymentMethodConfiguration.create();
```

### update <a name="update"></a>
Update payment method configuration

<p>Update payment method configuration</p>

**API Endpoint**: `POST /v1/payment_method_configurations/{configuration}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.paymentMethodConfiguration.update({
  configuration: "string",
});
```
