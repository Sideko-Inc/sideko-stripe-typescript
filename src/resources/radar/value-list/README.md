
### delete <a name="delete"></a>
Delete a value list

<p>Deletes a <code>ValueList</code> object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.</p>

**API Endpoint**: `DELETE /v1/radar/value_lists/{value_list}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.radar.valueList.delete({ valueList: "string" });
```

### list <a name="list"></a>
List all value lists

<p>Returns a list of <code>ValueList</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

**API Endpoint**: `GET /v1/radar/value_lists`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.radar.valueList.list();
```

### get <a name="get"></a>
Retrieve a value list

<p>Retrieves a <code>ValueList</code> object.</p>

**API Endpoint**: `GET /v1/radar/value_lists/{value_list}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.radar.valueList.get({ valueList: "string" });
```

### create <a name="create"></a>
Create a value list

<p>Creates a new <code>ValueList</code> object, which can then be referenced in rules.</p>

**API Endpoint**: `POST /v1/radar/value_lists`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.radar.valueList.create({
  alias: "string",
  name: "string",
});
```

### update <a name="update"></a>
Update a value list

<p>Updates a <code>ValueList</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that <code>item_type</code> is immutable.</p>

**API Endpoint**: `POST /v1/radar/value_lists/{value_list}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.radar.valueList.update({ valueList: "string" });
```
