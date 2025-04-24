
### list <a name="list"></a>
List all authorizations

<p>Returns a list of Issuing <code>Authorization</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

**API Endpoint**: `GET /v1/issuing/authorizations`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.authorization.list();
```

### get <a name="get"></a>
Retrieve an authorization

<p>Retrieves an Issuing <code>Authorization</code> object.</p>

**API Endpoint**: `GET /v1/issuing/authorizations/{authorization}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.authorization.get({ authorization: "string" });
```

### update <a name="update"></a>
Update an authorization

<p>Updates the specified Issuing <code>Authorization</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

**API Endpoint**: `POST /v1/issuing/authorizations/{authorization}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.authorization.update({
  authorization: "string",
});
```

### approve <a name="approve"></a>
Approve an authorization

<p>[Deprecated] Approves a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real-time authorization</a> flow. 
This method is deprecated. Instead, <a href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond directly to the webhook request to approve an authorization</a>.</p>

**API Endpoint**: `POST /v1/issuing/authorizations/{authorization}/approve`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.authorization.approve({
  authorization: "string",
});
```

### decline <a name="decline"></a>
Decline an authorization

<p>[Deprecated] Declines a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real time authorization</a> flow.
This method is deprecated. Instead, <a href="/docs/issuing/controls/real-time-authorizations#authorization-handling">respond directly to the webhook request to decline an authorization</a>.</p>

**API Endpoint**: `POST /v1/issuing/authorizations/{authorization}/decline`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.authorization.decline({
  authorization: "string",
});
```
