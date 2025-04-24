import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem
 */
export type BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem =
  {
    id: string;
    price?: string | undefined;
    quantity?: number | undefined;
  };

/**
 * @internal
 * BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem =
  {
    id: string;
    price?: string | undefined;
    quantity?: number | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem
 */
const SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem: z.ZodType<
  BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    id: z.string(),
    price: z.string().optional(),
    quantity: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      price: "price",
      quantity: "quantity",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem
 */
const SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem: z.ZodType<
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem // the object to be transformed
> = z
  .object({
    id: z.string(),
    price: z.string().optional(),
    quantity: z.number().int().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      id: "id",
      price: "price",
      quantity: "quantity",
    });
  });

export const Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem =
  {
    in: SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem,
    out: SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem,
  };
