
### delete <a name="delete"></a>
Delete a test clock

<p>Deletes a test clock.</p>

**API Endpoint**: `DELETE /v1/test_helpers/test_clocks/{test_clock}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.testClock.delete({ testClock: "string" });
```

### list <a name="list"></a>
List all test clocks

<p>Returns a list of your test clocks.</p>

**API Endpoint**: `GET /v1/test_helpers/test_clocks`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.testClock.list();
```

### get <a name="get"></a>
Retrieve a test clock

<p>Retrieves a test clock.</p>

**API Endpoint**: `GET /v1/test_helpers/test_clocks/{test_clock}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.testClock.get({ testClock: "string" });
```

### create <a name="create"></a>
Create a test clock

<p>Creates a new test clock that can be attached to new customers and quotes.</p>

**API Endpoint**: `POST /v1/test_helpers/test_clocks`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.testClock.create({ frozenTime: 123 });
```

### advance <a name="advance"></a>
Advance a test clock

<p>Starts advancing a test clock to a specified time in the future. Advancement is done when status changes to <code>Ready</code>.</p>

**API Endpoint**: `POST /v1/test_helpers/test_clocks/{test_clock}/advance`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.testClock.advance({
  frozenTime: 123,
  testClock: "string",
});
```
