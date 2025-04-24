
### delete <a name="delete"></a>
Delete a value list item

<p>Deletes a <code>ValueListItem</code> object, removing it from its parent value list.</p>

**API Endpoint**: `DELETE /v1/radar/value_list_items/{item}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.radar.valueListItem.delete({ item: "string" });
```

### list <a name="list"></a>
List all value list items

<p>Returns a list of <code>ValueListItem</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

**API Endpoint**: `GET /v1/radar/value_list_items`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.radar.valueListItem.list({ valueList: "string" });
```

### get <a name="get"></a>
Retrieve a value list item

<p>Retrieves a <code>ValueListItem</code> object.</p>

**API Endpoint**: `GET /v1/radar/value_list_items/{item}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.radar.valueListItem.get({ item: "string" });
```

### create <a name="create"></a>
Create a value list item

<p>Creates a new <code>ValueListItem</code> object, which is added to the specified parent value list.</p>

**API Endpoint**: `POST /v1/radar/value_list_items`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.radar.valueListItem.create({
  value: "string",
  valueList: "string",
});
```
