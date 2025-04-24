
### activate <a name="activate"></a>
Activate a testmode personalization design

<p>Updates the <code>status</code> of the specified testmode personalization design object to <code>active</code>.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.personalizationDesign.activate({
  personalizationDesign: "string",
});
```

### deactivate <a name="deactivate"></a>
Deactivate a testmode personalization design

<p>Updates the <code>status</code> of the specified testmode personalization design object to <code>inactive</code>.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.personalizationDesign.deactivate({
  personalizationDesign: "string",
});
```

### reject <a name="reject"></a>
Reject a testmode personalization design

<p>Updates the <code>status</code> of the specified testmode personalization design object to <code>rejected</code>.</p>

**API Endpoint**: `POST /v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.testHelper.issuing.personalizationDesign.reject({
  rejectionReasons: {},
  personalizationDesign: "string",
});
```
