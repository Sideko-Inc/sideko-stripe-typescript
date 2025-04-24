
### update <a name="update"></a>
Test mode: Update an OutboundTransfer

<p>Updates a test mode created OutboundTransfer with tracking details. The OutboundTransfer must not be cancelable, and cannot be in the <code>canceled</code> or <code>failed</code> states.</p>

**API Endpoint**: `POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.treasury.outboundTransfer.update({
  trackingDetails: { type: "ach" },
  outboundTransfer: "string",
});
```

### fail <a name="fail"></a>
Test mode: Fail an OutboundTransfer

<p>Transitions a test mode created OutboundTransfer to the <code>failed</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>

**API Endpoint**: `POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.treasury.outboundTransfer.fail({
  outboundTransfer: "string",
});
```

### post <a name="post"></a>
Test mode: Post an OutboundTransfer

<p>Transitions a test mode created OutboundTransfer to the <code>posted</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>

**API Endpoint**: `POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.treasury.outboundTransfer.post({
  outboundTransfer: "string",
});
```

### returned <a name="returned"></a>
Test mode: Return an OutboundTransfer

<p>Transitions a test mode created OutboundTransfer to the <code>returned</code> status. The OutboundTransfer must already be in the <code>processing</code> state.</p>

**API Endpoint**: `POST /v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.treasury.outboundTransfer.returned({
  outboundTransfer: "string",
});
```
