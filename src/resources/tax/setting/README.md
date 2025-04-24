
### list <a name="list"></a>
Retrieve settings

<p>Retrieves Tax <code>Settings</code> for a merchant.</p>

**API Endpoint**: `GET /v1/tax/settings`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.tax.setting.list();
```

### update <a name="update"></a>
Update settings

<p>Updates Tax <code>Settings</code> parameters used in tax calculations. All parameters are editable but none can be removed once set.</p>

**API Endpoint**: `POST /v1/tax/settings`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.tax.setting.update();
```
