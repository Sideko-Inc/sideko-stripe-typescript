
### list <a name="list"></a>
List all InboundTransfers

<p>Returns a list of InboundTransfers sent from the specified FinancialAccount.</p>

**API Endpoint**: `GET /v1/treasury/inbound_transfers`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.inboundTransfer.list({
  financialAccount: "string",
});
```

### get <a name="get"></a>
Retrieve an InboundTransfer

<p>Retrieves the details of an existing InboundTransfer.</p>

**API Endpoint**: `GET /v1/treasury/inbound_transfers/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.inboundTransfer.get({ id: "string" });
```

### create <a name="create"></a>
Create an InboundTransfer

<p>Creates an InboundTransfer.</p>

**API Endpoint**: `POST /v1/treasury/inbound_transfers`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.inboundTransfer.create({
  amount: 123,
  currency: "string",
  financialAccount: "string",
  originPaymentMethod: "string",
});
```

### cance <a name="cance"></a>
Cancel an InboundTransfer

<p>Cancels an InboundTransfer.</p>

**API Endpoint**: `POST /v1/treasury/inbound_transfers/{inbound_transfer}/cancel`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.inboundTransfer.cance({
  inboundTransfer: "string",
});
```
