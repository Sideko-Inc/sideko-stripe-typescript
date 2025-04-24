
### list <a name="list"></a>
List all payments for an invoice

<p>When retrieving an invoice, there is an includable payments property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of payments.</p>

**API Endpoint**: `GET /v1/invoice_payments`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoicePayment.list();
```

### get <a name="get"></a>
Retrieve an InvoicePayment

<p>Retrieves the invoice payment with the given ID.</p>

**API Endpoint**: `GET /v1/invoice_payments/{invoice_payment}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoicePayment.get({ invoicePayment: "string" });
```
