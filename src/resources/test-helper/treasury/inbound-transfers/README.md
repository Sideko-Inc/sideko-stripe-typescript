
### fail <a name="fail"></a>
Test mode: Fail an InboundTransfer

<p>Transitions a test mode created InboundTransfer to the <code>failed</code> status. The InboundTransfer must already be in the <code>processing</code> state.</p>

**API Endpoint**: `POST /v1/test_helpers/treasury/inbound_transfers/{id}/fail`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.treasury.inboundTransfers.fail({
  id: "string",
});
```

### returned <a name="returned"></a>
Test mode: Return an InboundTransfer

<p>Marks the test mode InboundTransfer object as returned and links the InboundTransfer to a ReceivedDebit. The InboundTransfer must already be in the <code>succeeded</code> state.</p>

**API Endpoint**: `POST /v1/test_helpers/treasury/inbound_transfers/{id}/return`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.treasury.inboundTransfers.returned({
  id: "string",
});
```

### succeed <a name="succeed"></a>
Test mode: Succeed an InboundTransfer

<p>Transitions a test mode created InboundTransfer to the <code>succeeded</code> status. The InboundTransfer must already be in the <code>processing</code> state.</p>

**API Endpoint**: `POST /v1/test_helpers/treasury/inbound_transfers/{id}/succeed`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.treasury.inboundTransfers.succeed({
  id: "string",
});
```
