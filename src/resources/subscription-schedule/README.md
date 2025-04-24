
### list <a name="list"></a>
List all schedules

<p>Retrieves the list of your subscription schedules.</p>

**API Endpoint**: `GET /v1/subscription_schedules`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.subscriptionSchedule.list();
```

### get <a name="get"></a>
Retrieve a schedule

<p>Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.</p>

**API Endpoint**: `GET /v1/subscription_schedules/{schedule}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.subscriptionSchedule.get({ schedule: "string" });
```

### create <a name="create"></a>
Create a schedule

<p>Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.</p>

**API Endpoint**: `POST /v1/subscription_schedules`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.subscriptionSchedule.create();
```

### update <a name="update"></a>
Update a schedule

<p>Updates an existing subscription schedule.</p>

**API Endpoint**: `POST /v1/subscription_schedules/{schedule}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.subscriptionSchedule.update({ schedule: "string" });
```

### cancel <a name="cancel"></a>
Cancel a schedule

<p>Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is <code>not_started</code> or <code>active</code>.</p>

**API Endpoint**: `POST /v1/subscription_schedules/{schedule}/cancel`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.subscriptionSchedule.cancel({ schedule: "string" });
```

### release <a name="release"></a>
Release a schedule

<p>Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is <code>not_started</code> or <code>active</code>. If the subscription schedule is currently associated with a subscription, releasing it will remove its <code>subscription</code> property and set the subscription’s ID to the <code>released_subscription</code> property.</p>

**API Endpoint**: `POST /v1/subscription_schedules/{schedule}/release`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.subscriptionSchedule.release({ schedule: "string" });
```
