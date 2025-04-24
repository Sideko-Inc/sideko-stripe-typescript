
### list <a name="list"></a>
List all Report Runs

<p>Returns a list of Report Runs, with the most recent appearing first.</p>

**API Endpoint**: `GET /v1/reporting/report_runs`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.reporting.reportRun.list();
```

### get <a name="get"></a>
Retrieve a Report Run

<p>Retrieves the details of an existing Report Run.</p>

**API Endpoint**: `GET /v1/reporting/report_runs/{report_run}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.reporting.reportRun.get({ reportRun: "string" });
```

### create <a name="create"></a>
Create a Report Run

<p>Creates a new object and begin running the report. (Certain report types require a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>

**API Endpoint**: `POST /v1/reporting/report_runs`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.reporting.reportRun.create({ reportType: "string" });
```
