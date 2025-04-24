
### list <a name="list"></a>
List portal configurations

<p>Returns a list of configurations that describe the functionality of the customer portal.</p>

**API Endpoint**: `GET /v1/billing_portal/configurations`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billingPortal.configuration.list();
```

### get <a name="get"></a>
Retrieve a portal configuration

<p>Retrieves a configuration that describes the functionality of the customer portal.</p>

**API Endpoint**: `GET /v1/billing_portal/configurations/{configuration}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billingPortal.configuration.get({
  configuration: "string",
});
```

### create <a name="create"></a>
Create a portal configuration

<p>Creates a configuration that describes the functionality and behavior of a PortalSession</p>

**API Endpoint**: `POST /v1/billing_portal/configurations`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billingPortal.configuration.create({ features: {} });
```

### update <a name="update"></a>
Update a portal configuration

<p>Updates a configuration that describes the functionality of the customer portal.</p>

**API Endpoint**: `POST /v1/billing_portal/configurations/{configuration}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.billingPortal.configuration.update({
  configuration: "string",
});
```
