
### list <a name="list"></a>
List Accounts

<p>Returns a list of Financial Connections <code>Account</code> objects.</p>

**API Endpoint**: `GET /v1/financial_connections/accounts`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.financialConnections.account.list();
```

### get <a name="get"></a>
Retrieve an Account

<p>Retrieves the details of an Financial Connections <code>Account</code>.</p>

**API Endpoint**: `GET /v1/financial_connections/accounts/{account}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.financialConnections.account.get({
  account: "string",
});
```

### disconnect <a name="disconnect"></a>
Disconnect an Account

<p>Disables your access to a Financial Connections <code>Account</code>. You will no longer be able to access data associated with the account (e.g. balances, transactions).</p>

**API Endpoint**: `POST /v1/financial_connections/accounts/{account}/disconnect`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.financialConnections.account.disconnect({
  account: "string",
});
```

### refresh <a name="refresh"></a>
Refresh Account data

<p>Refreshes the data associated with a Financial Connections <code>Account</code>.</p>

**API Endpoint**: `POST /v1/financial_connections/accounts/{account}/refresh`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.financialConnections.account.refresh({
  features: ["balance"],
  account: "string",
});
```

### subscribe <a name="subscribe"></a>
Subscribe to data refreshes for an Account

<p>Subscribes to periodic refreshes of data associated with a Financial Connections <code>Account</code>.</p>

**API Endpoint**: `POST /v1/financial_connections/accounts/{account}/subscribe`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.financialConnections.account.subscribe({
  features: ["transactions"],
  account: "string",
});
```

### unsubscribe <a name="unsubscribe"></a>
Unsubscribe from data refreshes for an Account

<p>Unsubscribes from periodic refreshes of data associated with a Financial Connections <code>Account</code>.</p>

**API Endpoint**: `POST /v1/financial_connections/accounts/{account}/unsubscribe`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.financialConnections.account.unsubscribe({
  features: ["transactions"],
  account: "string",
});
```
