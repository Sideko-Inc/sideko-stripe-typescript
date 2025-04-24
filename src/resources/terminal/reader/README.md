
### delete <a name="delete"></a>
Delete a Reader

<p>Deletes a <code>Reader</code> object.</p>

**API Endpoint**: `DELETE /v1/terminal/readers/{reader}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.terminal.reader.delete({ reader: "string" });
```

### list <a name="list"></a>
List all Readers

<p>Returns a list of <code>Reader</code> objects.</p>

**API Endpoint**: `GET /v1/terminal/readers`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.terminal.reader.list();
```

### get <a name="get"></a>
Retrieve a Reader

<p>Retrieves a <code>Reader</code> object.</p>

**API Endpoint**: `GET /v1/terminal/readers/{reader}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.terminal.reader.get({ reader: "string" });
```

### create <a name="create"></a>
Create a Reader

<p>Creates a new <code>Reader</code> object.</p>

**API Endpoint**: `POST /v1/terminal/readers`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.terminal.reader.create({ registrationCode: "string" });
```

### update <a name="update"></a>
Update a Reader

<p>Updates a <code>Reader</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

**API Endpoint**: `POST /v1/terminal/readers/{reader}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.terminal.reader.update({ reader: "string" });
```

### cancel_action <a name="cancel_action"></a>
Cancel the current reader action

<p>Cancels the current reader action.</p>

**API Endpoint**: `POST /v1/terminal/readers/{reader}/cancel_action`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.terminal.reader.cancelAction({ reader: "string" });
```

### process_payment_intent <a name="process_payment_intent"></a>
Hand-off a PaymentIntent to a Reader

<p>Initiates a payment flow on a Reader.</p>

**API Endpoint**: `POST /v1/terminal/readers/{reader}/process_payment_intent`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.terminal.reader.processPaymentIntent({
  paymentIntent: "string",
  reader: "string",
});
```

### process_setup_intent <a name="process_setup_intent"></a>
Hand-off a SetupIntent to a Reader

<p>Initiates a setup intent flow on a Reader.</p>

**API Endpoint**: `POST /v1/terminal/readers/{reader}/process_setup_intent`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.terminal.reader.processSetupIntent({
  allowRedisplay: "always",
  setupIntent: "string",
  reader: "string",
});
```

### refund_payment <a name="refund_payment"></a>
Refund a Charge or a PaymentIntent in-person

<p>Initiates a refund on a Reader</p>

**API Endpoint**: `POST /v1/terminal/readers/{reader}/refund_payment`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.terminal.reader.refundPayment({ reader: "string" });
```

### set_reader_display <a name="set_reader_display"></a>
Set reader display

<p>Sets reader display to show cart details.</p>

**API Endpoint**: `POST /v1/terminal/readers/{reader}/set_reader_display`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.terminal.reader.setReaderDisplay({
  type: "cart",
  reader: "string",
});
```
