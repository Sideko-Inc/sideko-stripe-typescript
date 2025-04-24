
### list <a name="list"></a>
List all personalization designs

<p>Returns a list of personalization design objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

**API Endpoint**: `GET /v1/issuing/personalization_designs`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.personalizationDesign.list();
```

### get <a name="get"></a>
Retrieve a personalization design

<p>Retrieves a personalization design object.</p>

**API Endpoint**: `GET /v1/issuing/personalization_designs/{personalization_design}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.personalizationDesign.get({
  personalizationDesign: "string",
});
```

### create <a name="create"></a>
Create a personalization design

<p>Creates a personalization design object.</p>

**API Endpoint**: `POST /v1/issuing/personalization_designs`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.personalizationDesign.create({
  physicalBundle: "string",
});
```

### update <a name="update"></a>
Update a personalization design

<p>Updates a card personalization object.</p>

**API Endpoint**: `POST /v1/issuing/personalization_designs/{personalization_design}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.issuing.personalizationDesign.update({
  personalizationDesign: "string",
});
```
