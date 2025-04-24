
### list <a name="list"></a>
List all transactions

<p>Returns a list of Issuing <code>Transaction</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

**API Endpoint**: `GET /v1/issuing/transactions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.transaction.list();
```

### get <a name="get"></a>
Retrieve a transaction

<p>Retrieves an Issuing <code>Transaction</code> object.</p>

**API Endpoint**: `GET /v1/issuing/transactions/{transaction}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.transaction.get({ transaction: "string" });
```

### update <a name="update"></a>
Update a transaction

<p>Updates the specified Issuing <code>Transaction</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

**API Endpoint**: `POST /v1/issuing/transactions/{transaction}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.transaction.update({ transaction: "string" });
```
