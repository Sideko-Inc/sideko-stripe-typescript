import {
  BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent,
  External$BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent,
  Schemas$BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent,
} from "./billing-bill-resource-invoice-item-parents-invoice-item-subscription-parent";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type BillingBillResourceInvoiceItemParentsInvoiceItemParent = {
  subscriptionDetails?:
    | BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent
    | undefined;
  /**
   * The type of parent that generated this invoice item
   */
  type: "subscription_details";
};

/**
 * @internal
 * BillingBillResourceInvoiceItemParentsInvoiceItemParent without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingBillResourceInvoiceItemParentsInvoiceItemParent = {
  subscription_details?:
    | External$BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent
    | undefined;
  type: "subscription_details";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingBillResourceInvoiceItemParentsInvoiceItemParent
 */
const SchemaIn$BillingBillResourceInvoiceItemParentsInvoiceItemParent: z.ZodType<
  BillingBillResourceInvoiceItemParentsInvoiceItemParent, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    subscription_details:
      Schemas$BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent.in.optional(),
    type: z.enum(["subscription_details"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      subscription_details: "subscriptionDetails",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingBillResourceInvoiceItemParentsInvoiceItemParent
 */
const SchemaOut$BillingBillResourceInvoiceItemParentsInvoiceItemParent: z.ZodType<
  External$BillingBillResourceInvoiceItemParentsInvoiceItemParent, // output type of this zod object
  z.ZodTypeDef,
  BillingBillResourceInvoiceItemParentsInvoiceItemParent // the object to be transformed
> = z
  .object({
    subscriptionDetails:
      Schemas$BillingBillResourceInvoiceItemParentsInvoiceItemSubscriptionParent.out.optional(),
    type: z.enum(["subscription_details"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      subscriptionDetails: "subscription_details",
      type: "type",
    });
  });

export const Schemas$BillingBillResourceInvoiceItemParentsInvoiceItemParent = {
  in: SchemaIn$BillingBillResourceInvoiceItemParentsInvoiceItemParent,
  out: SchemaOut$BillingBillResourceInvoiceItemParentsInvoiceItemParent,
};
