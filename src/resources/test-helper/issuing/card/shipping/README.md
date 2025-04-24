
### deliver <a name="deliver"></a>
Deliver a testmode card

<p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>delivered</code>.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/cards/{card}/shipping/deliver`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.card.shipping.deliver({
  card: "string",
});
```

### fail <a name="fail"></a>
Fail a testmode card

<p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>failure</code>.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/cards/{card}/shipping/fail`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.card.shipping.fail({
  card: "string",
});
```

### returned <a name="returned"></a>
Return a testmode card

<p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>returned</code>.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/cards/{card}/shipping/return`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.card.shipping.returned({
  card: "string",
});
```

### ship <a name="ship"></a>
Ship a testmode card

<p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>shipped</code>.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/cards/{card}/shipping/ship`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.card.shipping.ship({
  card: "string",
});
```

### submit <a name="submit"></a>
Submit a testmode card

<p>Updates the shipping status of the specified Issuing <code>Card</code> object to <code>submitted</code>. This method requires Stripe Version ‘2024-09-30.acacia’ or later.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/cards/{card}/shipping/submit`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.card.shipping.submit({
  card: "string",
});
```
