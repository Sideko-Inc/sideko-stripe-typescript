
### list <a name="list"></a>
List all OutboundTransfers

<p>Returns a list of OutboundTransfers sent from the specified FinancialAccount.</p>

**API Endpoint**: `GET /v1/treasury/outbound_transfers`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.outboundTransfer.list({
  financialAccount: "string",
});
```

### get <a name="get"></a>
Retrieve an OutboundTransfer

<p>Retrieves the details of an existing OutboundTransfer by passing the unique OutboundTransfer ID from either the OutboundTransfer creation request or OutboundTransfer list.</p>

**API Endpoint**: `GET /v1/treasury/outbound_transfers/{outbound_transfer}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.outboundTransfer.get({
  outboundTransfer: "string",
});
```

### create <a name="create"></a>
Create an OutboundTransfer

<p>Creates an OutboundTransfer.</p>

**API Endpoint**: `POST /v1/treasury/outbound_transfers`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.outboundTransfer.create({
  amount: 123,
  currency: "string",
  financialAccount: "string",
});
```

### cancel <a name="cancel"></a>
Cancel an OutboundTransfer

<p>An OutboundTransfer can be canceled if the funds have not yet been paid out.</p>

**API Endpoint**: `POST /v1/treasury/outbound_transfers/{outbound_transfer}/cancel`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.outboundTransfer.cancel({
  outboundTransfer: "string",
});
```
