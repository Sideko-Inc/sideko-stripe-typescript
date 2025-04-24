
### list <a name="list"></a>
List Accounts

<p>Returns a list of Financial Connections <code>Account</code> objects.</p>

**API Endpoint**: `GET /v1/linked_accounts`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.linkedAccount.list();
```

### get <a name="get"></a>
Retrieve an Account

<p>Retrieves the details of an Financial Connections <code>Account</code>.</p>

**API Endpoint**: `GET /v1/linked_accounts/{account}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.linkedAccount.get({ account: "string" });
```

### disconnect <a name="disconnect"></a>
Disconnect an Account

<p>Disables your access to a Financial Connections <code>Account</code>. You will no longer be able to access data associated with the account (e.g. balances, transactions).</p>

**API Endpoint**: `POST /v1/linked_accounts/{account}/disconnect`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.linkedAccount.disconnect({ account: "string" });
```

### refresh <a name="refresh"></a>
Refresh Account data

<p>Refreshes the data associated with a Financial Connections <code>Account</code>.</p>

**API Endpoint**: `POST /v1/linked_accounts/{account}/refresh`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.linkedAccount.refresh({
  features: ["balance"],
  account: "string",
});
```
