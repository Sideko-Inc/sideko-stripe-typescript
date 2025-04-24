
### create_force_capture <a name="create_force_capture"></a>
Create a test-mode force capture

<p>Allows the user to capture an arbitrary amount, also known as a forced capture.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/transactions/create_force_capture`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.transaction.createForceCapture({
  amount: 123,
  card: "string",
});
```

### create_unlinked_refund <a name="create_unlinked_refund"></a>
Create a test-mode unlinked refund

<p>Allows the user to refund an arbitrary amount, also known as a unlinked refund.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/transactions/create_unlinked_refund`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.transaction.createUnlinkedRefund({
  amount: 123,
  card: "string",
});
```

### refund <a name="refund"></a>
Refund a test-mode transaction

<p>Refund a test-mode Transaction.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/transactions/{transaction}/refund`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.transaction.refund({
  transaction: "string",
});
```
