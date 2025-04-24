
### create <a name="create"></a>
Create a test-mode settlement

<p>Allows the user to create an Issuing settlement.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/settlements`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.settlement.create({
  bin: "string",
  clearingDate: 123,
  currency: "string",
  netTotalAmount: 123,
});
```

### complete <a name="complete"></a>
Complete a test-mode settlement

<p>Allows the user to mark an Issuing settlement as complete.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/settlements/{settlement}/complete`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.settlement.complete({
  settlement: "string",
});
```
