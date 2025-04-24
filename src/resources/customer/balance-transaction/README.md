
### list <a name="list"></a>
List customer balance transactions

<p>Returns a list of transactions that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>

**API Endpoint**: `GET /v1/customers/{customer}/balance_transactions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.balanceTransaction.list({
  customer: "string",
});
```

### get <a name="get"></a>
Retrieve a customer balance transaction

<p>Retrieves a specific customer balance transaction that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>

**API Endpoint**: `GET /v1/customers/{customer}/balance_transactions/{transaction}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.balanceTransaction.get({
  customer: "string",
  transaction: "string",
});
```

### create <a name="create"></a>
Create a customer balance transaction

<p>Creates an immutable transaction that updates the customer’s credit <a href="/docs/billing/customer/balance">balance</a>.</p>

**API Endpoint**: `POST /v1/customers/{customer}/balance_transactions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.balanceTransaction.create({
  amount: 123,
  currency: "string",
  customer: "string",
});
```

### update <a name="update"></a>
Update a customer credit balance transaction

<p>Most credit balance transaction fields are immutable, but you may update its <code>description</code> and <code>metadata</code>.</p>

**API Endpoint**: `POST /v1/customers/{customer}/balance_transactions/{transaction}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.balanceTransaction.update({
  customer: "string",
  transaction: "string",
});
```
