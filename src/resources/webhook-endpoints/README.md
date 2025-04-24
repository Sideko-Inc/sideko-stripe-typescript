
### delete <a name="delete"></a>
Delete a webhook endpoint

<p>You can also delete webhook endpoints via the <a href="https://dashboard.stripe.com/account/webhooks">webhook endpoint management</a> page of the Stripe dashboard.</p>

**API Endpoint**: `DELETE /v1/webhook_endpoints/{webhook_endpoint}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.webhookEndpoints.delete({ webhookEndpoint: "string" });
```

### list <a name="list"></a>
List all webhook endpoints

<p>Returns a list of your webhook endpoints.</p>

**API Endpoint**: `GET /v1/webhook_endpoints`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.webhookEndpoints.list();
```

### get <a name="get"></a>
Retrieve a webhook endpoint

<p>Retrieves the webhook endpoint with the given ID.</p>

**API Endpoint**: `GET /v1/webhook_endpoints/{webhook_endpoint}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.webhookEndpoints.get({ webhookEndpoint: "string" });
```

### create <a name="create"></a>
Create a webhook endpoint

<p>A webhook endpoint must have a <code>url</code> and a list of <code>enabled_events</code>. You may optionally specify the Boolean <code>connect</code> parameter. If set to true, then a Connect webhook endpoint that notifies the specified <code>url</code> about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified <code>url</code> only about events from your account is created. You can also create webhook endpoints in the <a href="https://dashboard.stripe.com/account/webhooks">webhooks settings</a> section of the Dashboard.</p>

**API Endpoint**: `POST /v1/webhook_endpoints`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.webhookEndpoints.create({
  enabledEvents: ["*"],
  url: "string",
});
```

### update <a name="update"></a>
Update a webhook endpoint

<p>Updates the webhook endpoint. You may edit the <code>url</code>, the list of <code>enabled_events</code>, and the status of your endpoint.</p>

**API Endpoint**: `POST /v1/webhook_endpoints/{webhook_endpoint}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.webhookEndpoints.update({ webhookEndpoint: "string" });
```
