
### list <a name="list"></a>
List all cards

<p>Returns a list of Issuing <code>Card</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

**API Endpoint**: `GET /v1/issuing/cards`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.card.list();
```

### get <a name="get"></a>
Retrieve a card

<p>Retrieves an Issuing <code>Card</code> object.</p>

**API Endpoint**: `GET /v1/issuing/cards/{card}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.card.get({ card: "string" });
```

### create <a name="create"></a>
Create a card

<p>Creates an Issuing <code>Card</code> object.</p>

**API Endpoint**: `POST /v1/issuing/cards`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.card.create({
  currency: "string",
  type: "physical",
});
```

### update <a name="update"></a>
Update a card

<p>Updates the specified Issuing <code>Card</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

**API Endpoint**: `POST /v1/issuing/cards/{card}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.card.update({ card: "string" });
```
