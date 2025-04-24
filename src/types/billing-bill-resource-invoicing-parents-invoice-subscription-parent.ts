import {
  BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata,
  External$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata,
  Schemas$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata,
} from "./billing-bill-resource-invoicing-parents-invoice-subscription-parent-metadata";
import {
  External$Subscription,
  Schemas$Subscription,
  Subscription,
} from "./subscription";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoicingParentsInvoiceSubscriptionParent = {
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) defined as subscription metadata when an invoice is created. Becomes an immutable snapshot of the subscription metadata at the time of invoice finalization.
   *  *Note: This attribute is populated only for invoices created on or after June 29, 2023.*
   */
  metadata?:
    | BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata
    | null
    | undefined;
  /**
   * The subscription that generated this invoice
   */
  subscription: string | Subscription;
  /**
   * Only set for upcoming invoices that preview prorations. The time used to calculate prorations.
   */
  subscriptionProrationDate?: number | undefined;
};

/**
 * @internal
 * BillingBillResourceInvoicingParentsInvoiceSubscriptionParent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoicingParentsInvoiceSubscriptionParent =
  {
    metadata?:
      | External$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata
      | null
      | undefined;
    subscription: string | External$Subscription;
    subscription_proration_date?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoicingParentsInvoiceSubscriptionParent
 */
const SchemaIn$BillingBillResourceInvoicingParentsInvoiceSubscriptionParent: z.ZodType<
  BillingBillResourceInvoicingParentsInvoiceSubscriptionParent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    metadata:
      Schemas$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata.in
        .nullable()
        .optional(),
    subscription: z.union([z.string(), z.lazy(() => Schemas$Subscription.in)]),
    subscription_proration_date: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      metadata: "metadata",
      subscription: "subscription",
      subscription_proration_date: "subscriptionProrationDate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoicingParentsInvoiceSubscriptionParent
 */
const SchemaOut$BillingBillResourceInvoicingParentsInvoiceSubscriptionParent: z.ZodType<
  External$BillingBillResourceInvoicingParentsInvoiceSubscriptionParent, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoicingParentsInvoiceSubscriptionParent // the object to be transformed
> = z
  .object({
    metadata:
      Schemas$BillingBillResourceInvoicingParentsInvoiceSubscriptionParentMetadata.out
        .nullable()
        .optional(),
    subscription: z.union([z.string(), z.lazy(() => Schemas$Subscription.out)]),
    subscriptionProrationDate: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      metadata: "metadata",
      subscription: "subscription",
      subscriptionProrationDate: "subscription_proration_date",
    });
  });

export const Schemas$BillingBillResourceInvoicingParentsInvoiceSubscriptionParent =
  {
    in: SchemaIn$BillingBillResourceInvoicingParentsInvoiceSubscriptionParent,
    out: SchemaOut$BillingBillResourceInvoicingParentsInvoiceSubscriptionParent,
  };
