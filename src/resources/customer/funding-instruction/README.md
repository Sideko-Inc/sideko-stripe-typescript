
### create <a name="create"></a>
Create or retrieve funding instructions for a customer cash balance

<p>Retrieve funding instructions for a customer cash balance. If funding instructions do not yet exist for the customer, new
funding instructions will be created. If funding instructions have already been created for a given customer, the same
funding instructions will be retrieved. In other words, we will return the same funding instructions each time.</p>

**API Endpoint**: `POST /v1/customers/{customer}/funding_instructions`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.customer.fundingInstruction.create({
  bankTransfer: { type: "eu_bank_transfer" },
  currency: "string",
  fundingType: "bank_transfer",
  customer: "string",
});
```
