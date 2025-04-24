
### list <a name="list"></a>
List all file links

<p>Returns a list of file links.</p>

**API Endpoint**: `GET /v1/file_links`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.fileLink.list();
```

### get <a name="get"></a>
Retrieve a file link

<p>Retrieves the file link with the given ID.</p>

**API Endpoint**: `GET /v1/file_links/{link}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.fileLink.get({ link: "string" });
```

### create <a name="create"></a>
Create a file link

<p>Creates a new file link object.</p>

**API Endpoint**: `POST /v1/file_links`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.fileLink.create({ file: "string" });
```

### update <a name="update"></a>
Update a file link

<p>Updates an existing file link object. Expired links can no longer be updated.</p>

**API Endpoint**: `POST /v1/file_links/{link}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.fileLink.update({ link: "string" });
```
