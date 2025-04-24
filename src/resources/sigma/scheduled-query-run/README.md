
### list <a name="list"></a>
List all scheduled query runs

<p>Returns a list of scheduled query runs.</p>

**API Endpoint**: `GET /v1/sigma/scheduled_query_runs`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.sigma.scheduledQueryRun.list();
```

### get <a name="get"></a>
Retrieve a scheduled query run

<p>Retrieves the details of an scheduled query run.</p>

**API Endpoint**: `GET /v1/sigma/scheduled_query_runs/{scheduled_query_run}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.sigma.scheduledQueryRun.get({
  scheduledQueryRun: "string",
});
```
