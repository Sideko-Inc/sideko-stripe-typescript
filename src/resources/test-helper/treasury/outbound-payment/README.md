
### update <a name="update"></a>
Test mode: Update an OutboundPayment

<p>Updates a test mode created OutboundPayment with tracking details. The OutboundPayment must not be cancelable, and cannot be in the <code>canceled</code> or <code>failed</code> states.</p>

**API Endpoint**: `POST /v1/test_helpers/treasury/outbound_payments/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.treasury.outboundPayment.update({
  trackingDetails: { type: "ach" },
  id: "string",
});
```

### fail <a name="fail"></a>
Test mode: Fail an OutboundPayment

<p>Transitions a test mode created OutboundPayment to the <code>failed</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>

**API Endpoint**: `POST /v1/test_helpers/treasury/outbound_payments/{id}/fail`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.treasury.outboundPayment.fail({
  id: "string",
});
```

### post <a name="post"></a>
Test mode: Post an OutboundPayment

<p>Transitions a test mode created OutboundPayment to the <code>posted</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>

**API Endpoint**: `POST /v1/test_helpers/treasury/outbound_payments/{id}/post`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.treasury.outboundPayment.post({
  id: "string",
});
```

### returned <a name="returned"></a>
Test mode: Return an OutboundPayment

<p>Transitions a test mode created OutboundPayment to the <code>returned</code> status. The OutboundPayment must already be in the <code>processing</code> state.</p>

**API Endpoint**: `POST /v1/test_helpers/treasury/outbound_payments/{id}/return`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.treasury.outboundPayment.returned({
  id: "string",
});
```
