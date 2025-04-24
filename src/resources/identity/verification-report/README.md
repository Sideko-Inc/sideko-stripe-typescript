
### list <a name="list"></a>
List VerificationReports

<p>List all verification reports.</p>

**API Endpoint**: `GET /v1/identity/verification_reports`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.identity.verificationReport.list();
```

### get <a name="get"></a>
Retrieve a VerificationReport

<p>Retrieves an existing VerificationReport</p>

**API Endpoint**: `GET /v1/identity/verification_reports/{report}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.identity.verificationReport.get({ report: "string" });
```
