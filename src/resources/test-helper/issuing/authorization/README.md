
### create <a name="create"></a>
Create a test-mode authorization

<p>Create a test-mode authorization.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/authorizations`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.authorization.create({
  card: "string",
});
```

### capture <a name="capture"></a>
Capture a test-mode authorization

<p>Capture a test-mode authorization.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/authorizations/{authorization}/capture`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.authorization.capture({
  authorization: "string",
});
```

### expire <a name="expire"></a>
Expire a test-mode authorization

<p>Expire a test-mode Authorization.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/authorizations/{authorization}/expire`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.authorization.expire({
  authorization: "string",
});
```

### finalize_amount <a name="finalize_amount"></a>
Finalize a test-mode authorization's amount

<p>Finalize the amount on an Authorization prior to capture, when the initial authorization was for an estimated amount.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.authorization.finalizeAmount({
  finalAmount: 123,
  authorization: "string",
});
```

### increment <a name="increment"></a>
Increment a test-mode authorization

<p>Increment a test-mode Authorization.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/authorizations/{authorization}/increment`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.authorization.increment({
  incrementAmount: 123,
  authorization: "string",
});
```

### reverse <a name="reverse"></a>
Reverse a test-mode authorization

<p>Reverse a test-mode Authorization.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/authorizations/{authorization}/reverse`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.authorization.reverse({
  authorization: "string",
});
```
