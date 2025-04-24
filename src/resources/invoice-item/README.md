
### delete <a name="delete"></a>
Delete an invoice item

<p>Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they’re not attached to invoices, or if it’s attached to a draft invoice.</p>

**API Endpoint**: `DELETE /v1/invoiceitems/{invoiceitem}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoiceItem.delete({ invoiceitem: "string" });
```

### list <a name="list"></a>
List all invoice items

<p>Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.</p>

**API Endpoint**: `GET /v1/invoiceitems`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoiceItem.list();
```

### get <a name="get"></a>
Retrieve an invoice item

<p>Retrieves the invoice item with the given ID.</p>

**API Endpoint**: `GET /v1/invoiceitems/{invoiceitem}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoiceItem.get({ invoiceitem: "string" });
```

### create <a name="create"></a>
Create an invoice item

<p>Creates an item to be added to a draft invoice (up to 250 items per invoice). If no invoice is specified, the item will be on the next invoice created for the customer specified.</p>

**API Endpoint**: `POST /v1/invoiceitems`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoiceItem.create({ customer: "string" });
```

### update <a name="update"></a>
Update an invoice item

<p>Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it’s attached to is closed.</p>

**API Endpoint**: `POST /v1/invoiceitems/{invoiceitem}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoiceItem.update({ invoiceitem: "string" });
```
