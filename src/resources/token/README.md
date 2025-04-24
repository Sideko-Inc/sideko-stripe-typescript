
### get <a name="get"></a>
Retrieve a token

<p>Retrieves the token with the given ID.</p>

**API Endpoint**: `GET /v1/tokens/{token}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.token.get({ token: "string" });
```

### create <a name="create"></a>
Create a CVC update token

<p>Creates a single-use token that represents a bank account’s details.
You can use this token with any v1 API method in place of a bank account dictionary. You can only use this token once. To do so, attach it to a <a href="#accounts">connected account</a> where <a href="/api/accounts/object#account_object-controller-requirement_collection">controller.requirement_collection</a> is <code>application</code>, which includes Custom accounts.</p>

**API Endpoint**: `POST /v1/tokens`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.token.create();
```
