
### list <a name="list"></a>
List all application fees

<p>Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.</p>

**API Endpoint**: `GET /v1/application_fees`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.applicationFee.list();
```

### get <a name="get"></a>
Retrieve an application fee

<p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p>

**API Endpoint**: `GET /v1/application_fees/{id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.applicationFee.get({ id: "string" });
```
