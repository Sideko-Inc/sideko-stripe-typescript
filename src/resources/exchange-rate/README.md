
### list <a name="list"></a>
List all exchange rates

<p>Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.</p>

**API Endpoint**: `GET /v1/exchange_rates`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.exchangeRate.list();
```

### get <a name="get"></a>
Retrieve an exchange rate

<p>Retrieves the exchange rates from the given currency to every supported currency.</p>

**API Endpoint**: `GET /v1/exchange_rates/{rate_id}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.exchangeRate.get({ rateId: "string" });
```
