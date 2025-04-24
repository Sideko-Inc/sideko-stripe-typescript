
### list <a name="list"></a>
List all FinancialAccounts

<p>Returns a list of FinancialAccounts.</p>

**API Endpoint**: `GET /v1/treasury/financial_accounts`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.financialAccount.list();
```

### get <a name="get"></a>
Retrieve a FinancialAccount

<p>Retrieves the details of a FinancialAccount.</p>

**API Endpoint**: `GET /v1/treasury/financial_accounts/{financial_account}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.financialAccount.get({
  financialAccount: "string",
});
```

### create <a name="create"></a>
Create a FinancialAccount

<p>Creates a new FinancialAccount. Each connected account can have up to three FinancialAccounts by default.</p>

**API Endpoint**: `POST /v1/treasury/financial_accounts`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.financialAccount.create({
  supportedCurrencies: ["string"],
});
```

### update <a name="update"></a>
Update a FinancialAccount

<p>Updates the details of a FinancialAccount.</p>

**API Endpoint**: `POST /v1/treasury/financial_accounts/{financial_account}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.financialAccount.update({
  financialAccount: "string",
});
```

### close <a name="close"></a>
Close a FinancialAccount

<p>Closes a FinancialAccount. A FinancialAccount can only be closed if it has a zero balance, has no pending InboundTransfers, and has canceled all attached Issuing cards.</p>

**API Endpoint**: `POST /v1/treasury/financial_accounts/{financial_account}/close`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.financialAccount.close({
  financialAccount: "string",
});
```
