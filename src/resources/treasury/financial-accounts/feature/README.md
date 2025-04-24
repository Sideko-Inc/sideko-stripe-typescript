
### list <a name="list"></a>
Retrieve FinancialAccount Features

<p>Retrieves Features information associated with the FinancialAccount.</p>

**API Endpoint**: `GET /v1/treasury/financial_accounts/{financial_account}/features`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.financialAccounts.feature.list({
  financialAccount: "string",
});
```

### create <a name="create"></a>
Update FinancialAccount Features

<p>Updates the Features associated with a FinancialAccount.</p>

**API Endpoint**: `POST /v1/treasury/financial_accounts/{financial_account}/features`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.treasury.financialAccounts.feature.create({
  financialAccount: "string",
});
```
