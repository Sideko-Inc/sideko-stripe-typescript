
### list <a name="list"></a>
List all early fraud warnings

<p>Returns a list of early fraud warnings.</p>

**API Endpoint**: `GET /v1/radar/early_fraud_warnings`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.radar.earlyFraudWarning.list();
```

### get <a name="get"></a>
Retrieve an early fraud warning

<p>Retrieves the details of an early fraud warning that has previously been created. </p>

<p>Please refer to the <a href="#early_fraud_warning_object">early fraud warning</a> object reference for more details.</p>

**API Endpoint**: `GET /v1/radar/early_fraud_warnings/{early_fraud_warning}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.radar.earlyFraudWarning.get({
  earlyFraudWarning: "string",
});
```
