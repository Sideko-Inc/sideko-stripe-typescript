
### list <a name="list"></a>
List registrations

<p>Returns a list of Tax <code>Registration</code> objects.</p>

**API Endpoint**: `GET /v1/tax/registrations`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.tax.registration.list();
```

### get <a name="get"></a>
Retrieve a registration

<p>Returns a Tax <code>Registration</code> object.</p>

**API Endpoint**: `GET /v1/tax/registrations/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.tax.registration.get({ id: "string" });
```

### create <a name="create"></a>
Create a registration

<p>Creates a new Tax <code>Registration</code> object.</p>

**API Endpoint**: `POST /v1/tax/registrations`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.tax.registration.create({
  activeFrom: "now",
  country: "string",
  countryOptions: {},
});
```

### update <a name="update"></a>
Update a registration

<p>Updates an existing Tax <code>Registration</code> object.</p>

<p>A registration cannot be deleted after it has been created. If you wish to end a registration you may do so by setting <code>expires_at</code>.</p>

**API Endpoint**: `POST /v1/tax/registrations/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.tax.registration.update({ id: "string" });
```
