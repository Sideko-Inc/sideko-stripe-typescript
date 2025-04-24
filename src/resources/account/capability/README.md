
### list <a name="list"></a>
List all account capabilities

<p>Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.</p>

**API Endpoint**: `GET /v1/accounts/{account}/capabilities`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.account.capability.list({ account: "string" });
```

### get <a name="get"></a>
Retrieve an Account Capability

<p>Retrieves information about the specified Account Capability.</p>

**API Endpoint**: `GET /v1/accounts/{account}/capabilities/{capability}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.account.capability.get({
  account: "string",
  capability: "string",
});
```

### create <a name="create"></a>
Update an Account Capability

<p>Updates an existing Account Capability. Request or remove a capability by updating its <code>requested</code> parameter.</p>

**API Endpoint**: `POST /v1/accounts/{account}/capabilities/{capability}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.account.capability.create({
  account: "string",
  capability: "string",
});
```
