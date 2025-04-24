
### delete <a name="delete"></a>
Delete a person

<p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>

**API Endpoint**: `DELETE /v1/accounts/{account}/persons/{person}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.account.person.delete({
  account: "string",
  person: "string",
});
```

### list <a name="list"></a>
List all persons

<p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>

**API Endpoint**: `GET /v1/accounts/{account}/persons`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.account.person.list({ account: "string" });
```

### get <a name="get"></a>
Retrieve a person

<p>Retrieves an existing person.</p>

**API Endpoint**: `GET /v1/accounts/{account}/persons/{person}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.account.person.get({
  account: "string",
  person: "string",
});
```

### create <a name="create"></a>
Create a person

<p>Creates a new person.</p>

**API Endpoint**: `POST /v1/accounts/{account}/persons`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.account.person.create({ account: "string" });
```

### update <a name="update"></a>
Update a person

<p>Updates an existing person.</p>

**API Endpoint**: `POST /v1/accounts/{account}/persons/{person}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.account.person.update({
  account: "string",
  person: "string",
});
```
