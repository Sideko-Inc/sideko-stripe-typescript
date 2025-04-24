
### fund_cash_balance <a name="fund_cash_balance"></a>
Fund a test mode cash balance

<p>Create an incoming testmode bank transfer</p>

**API Endpoint**: `POST /v1/test_helpers/customers/{customer}/fund_cash_balance`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.customer.fundCashBalance({
  amount: 123,
  currency: "string",
  customer: "string",
});
```
