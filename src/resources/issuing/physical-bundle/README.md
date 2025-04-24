
### list <a name="list"></a>
List all physical bundles

<p>Returns a list of physical bundle objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

**API Endpoint**: `GET /v1/issuing/physical_bundles`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.physicalBundle.list();
```

### get <a name="get"></a>
Retrieve a physical bundle

<p>Retrieves a physical bundle object.</p>

**API Endpoint**: `GET /v1/issuing/physical_bundles/{physical_bundle}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.physicalBundle.get({
  physicalBundle: "string",
});
```
