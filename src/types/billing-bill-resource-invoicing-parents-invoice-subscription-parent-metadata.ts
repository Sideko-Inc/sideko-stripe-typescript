import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Set of [key-value pairs](https://stripe.com/docs/api/metadata) defined as subscription metadata when an invoice is created. Becomes an immutable snapshot of the subscription metadata at the time of invoice finalization.
 *  *Note: This attribute is populated only for invoices created on or after June 29, 2023.*
 */
export type BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata =
  {
    [additionalProperty: string]: string | null | undefined;
  };

/**
 * @internal
 * BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata =
  {
    [additionalProperty: string]:
      | (External$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata | null)
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata
 */
const SchemaIn$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata: z.ZodType<
  BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata
 */
const SchemaOut$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata: z.ZodType<
  External$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata =
  {
    in: SchemaIn$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata,
    out: SchemaOut$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata,
  };
