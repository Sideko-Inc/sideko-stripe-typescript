import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent =
  {
    /**
     * The subscription that generated this invoice item
     */
    subscription: string;
    /**
     * The subscription item that generated this invoice item
     */
    subscriptionItem?: string | undefined;
  };

/**
 * @internal
 * BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent =
  {
    subscription: string;
    subscription_item?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent
 */
const SchemaIn$BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent: z.ZodType<
  BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    subscription: z.string(),
    subscription_item: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      subscription: "subscription",
      subscription_item: "subscriptionItem",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent
 */
const SchemaOut$BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent: z.ZodType<
  External$BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent // the object to be transformed
> = z
  .object({
    subscription: z.string(),
    subscriptionItem: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      subscription: "subscription",
      subscriptionItem: "subscription_item",
    });
  });

export const Schemas$BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent =
  {
    in: SchemaIn$BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent,
    out: SchemaOut$BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent,
  };
