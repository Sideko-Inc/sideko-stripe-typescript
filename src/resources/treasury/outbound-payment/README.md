
### list <a name="list"></a>
List all OutboundPayments

<p>Returns a list of OutboundPayments sent from the specified FinancialAccount.</p>

**API Endpoint**: `GET /v1/treasury/outbound_payments`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.outboundPayment.list({
  financialAccount: "string",
});
```

### get <a name="get"></a>
Retrieve an OutboundPayment

<p>Retrieves the details of an existing OutboundPayment by passing the unique OutboundPayment ID from either the OutboundPayment creation request or OutboundPayment list.</p>

**API Endpoint**: `GET /v1/treasury/outbound_payments/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.outboundPayment.get({ id: "string" });
```

### create <a name="create"></a>
Create an OutboundPayment

<p>Creates an OutboundPayment.</p>

**API Endpoint**: `POST /v1/treasury/outbound_payments`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.outboundPayment.create({
  amount: 123,
  currency: "string",
  financialAccount: "string",
});
```

### cancel <a name="cancel"></a>
Cancel an OutboundPayment

<p>Cancel an OutboundPayment.</p>

**API Endpoint**: `POST /v1/treasury/outbound_payments/{id}/cancel`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.outboundPayment.cancel({ id: "string" });
```
