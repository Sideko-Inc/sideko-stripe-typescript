
### delete <a name="delete"></a>
Delete a subscription item

<p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p>

**API Endpoint**: `DELETE /v1/subscription_items/{item}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.subscriptionItem.delete({ item: "string" });
```

### list <a name="list"></a>
List all subscription items

<p>Returns a list of your subscription items for a given subscription.</p>

**API Endpoint**: `GET /v1/subscription_items`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.subscriptionItem.list({ subscription: "string" });
```

### get <a name="get"></a>
Retrieve a subscription item

<p>Retrieves the subscription item with the given ID.</p>

**API Endpoint**: `GET /v1/subscription_items/{item}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.subscriptionItem.get({ item: "string" });
```

### create <a name="create"></a>
Create a subscription item

<p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p>

**API Endpoint**: `POST /v1/subscription_items`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.subscriptionItem.create({ subscription: "string" });
```

### update <a name="update"></a>
Update a subscription item

<p>Updates the plan or quantity of an item on a current subscription.</p>

**API Endpoint**: `POST /v1/subscription_items/{item}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.subscriptionItem.update({ item: "string" });
```
