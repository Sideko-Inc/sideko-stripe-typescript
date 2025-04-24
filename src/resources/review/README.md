
### list <a name="list"></a>
List all open reviews

<p>Returns a list of <code>Review</code> objects that have <code>open</code> set to <code>true</code>. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>

**API Endpoint**: `GET /v1/reviews`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.review.list();
```

### get <a name="get"></a>
Retrieve a review

<p>Retrieves a <code>Review</code> object.</p>

**API Endpoint**: `GET /v1/reviews/{review}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.review.get({ review: "string" });
```

### approve <a name="approve"></a>
Approve a review

<p>Approves a <code>Review</code> object, closing it and removing it from the list of reviews.</p>

**API Endpoint**: `POST /v1/reviews/{review}/approve`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.review.approve({ review: "string" });
```
