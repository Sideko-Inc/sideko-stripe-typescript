
### delete <a name="delete"></a>
Delete a draft invoice

<p>Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized or if an invoice is for a subscription, it must be <a href="#void_invoice">voided</a>.</p>

**API Endpoint**: `DELETE /v1/invoices/{invoice}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoice.delete({ invoice: "string" });
```

### list <a name="list"></a>
List all invoices

<p>You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.</p>

**API Endpoint**: `GET /v1/invoices`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoice.list();
```

### search <a name="search"></a>
Search invoices

<p>Search for invoices you’ve previously created using Stripe’s <a href="/docs/search#search-query-language">Search Query Language</a>.
Don’t use search in read-after-write flows where strict consistency is necessary. Under normal operating
conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
to an hour behind during outages. Search functionality is not available to merchants in India.</p>

**API Endpoint**: `GET /v1/invoices/search`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoice.search({ query: "string" });
```

### get <a name="get"></a>
Retrieve an invoice

<p>Retrieves the invoice with the given ID.</p>

**API Endpoint**: `GET /v1/invoices/{invoice}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoice.get({ invoice: "string" });
```

### create <a name="create"></a>
Create an invoice

<p>This endpoint creates a draft invoice for a given customer. The invoice remains a draft until you <a href="#finalize_invoice">finalize</a> the invoice, which allows you to <a href="#pay_invoice">pay</a> or <a href="#send_invoice">send</a> the invoice to your customers.</p>

**API Endpoint**: `POST /v1/invoices`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoice.create();
```

### preview <a name="preview"></a>
Create a preview invoice

<p>At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discounts that are applicable to the invoice.</p>

<p>Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer’s discount.</p>

<p>You can preview the effects of updating a subscription, including a preview of what proration will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass the <code>subscription_details.proration_date</code> parameter when doing the actual subscription update. The recommended way to get only the prorations being previewed is to consider only proration line items where <code>period[start]</code> is equal to the <code>subscription_details.proration_date</code> value passed in the request. </p>

<p>Note: Currency conversion calculations use the latest exchange rates. Exchange rates may vary between the time of the preview and the time of the actual invoice creation. <a href="https://docs.stripe.com/currencies/conversions">Learn more</a></p>

**API Endpoint**: `POST /v1/invoices/create_preview`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoice.preview();
```

### update <a name="update"></a>
Update an invoice

<p>Draft invoices are fully editable. Once an invoice is <a href="/docs/billing/invoices/workflow#finalized">finalized</a>,
monetary values, as well as <code>collection_method</code>, become uneditable.</p>

<p>If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
sending reminders for, or <a href="/docs/billing/invoices/reconciliation">automatically reconciling</a> invoices, pass
<code>auto_advance=false</code>.</p>

**API Endpoint**: `POST /v1/invoices/{invoice}`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoice.update({ invoice: "string" });
```

### finalize <a name="finalize"></a>
Finalize an invoice

<p>Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you’d like to finalize a draft invoice manually, you can do so using this method.</p>

**API Endpoint**: `POST /v1/invoices/{invoice}/finalize`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoice.finalize({ invoice: "string" });
```

### mark_uncollectible <a name="mark_uncollectible"></a>
Mark an invoice as uncollectible

<p>Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.</p>

**API Endpoint**: `POST /v1/invoices/{invoice}/mark_uncollectible`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoice.markUncollectible({ invoice: "string" });
```

### pay <a name="pay"></a>
Pay an invoice

<p>Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.</p>

**API Endpoint**: `POST /v1/invoices/{invoice}/pay`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoice.pay({ invoice: "string" });
```

### send <a name="send"></a>
Send an invoice for manual payment

<p>Stripe will automatically send invoices to customers according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.</p>

<p>Requests made in test-mode result in no emails being sent, despite sending an <code>invoice.sent</code> event.</p>

**API Endpoint**: `POST /v1/invoices/{invoice}/send`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoice.send({ invoice: "string" });
```

### void <a name="void"></a>
Void an invoice

<p>Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to <a href="#delete_invoice">deletion</a>, however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.</p>

<p>Consult with local regulations to determine whether and how an invoice might be amended, canceled, or voided in the jurisdiction you’re doing business in. You might need to <a href="#create_invoice">issue another invoice</a> or <a href="#create_credit_note">credit note</a> instead. Stripe recommends that you consult with your legal counsel for advice specific to your business.</p>

**API Endpoint**: `POST /v1/invoices/{invoice}/void`

#### Example Snippet

```typescript
import Stripe from "@sideko-inc/stripe";

const client = new Stripe({ token: process.env["API_TOKEN"]!! });
const res = await client.invoice.void_({ invoice: "string" });
```
