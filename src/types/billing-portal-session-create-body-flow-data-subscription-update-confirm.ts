import {
  BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem,
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem,
  Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem,
} from "./billing-portal-session-create-body-flow-data-subscription-update-confirm-discounts-item";
import {
  BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem,
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem,
  Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem,
} from "./billing-portal-session-create-body-flow-data-subscription-update-confirm-items-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm
 */
export type BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm = {
  discounts?:
    | BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem[]
    | undefined;
  items: BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem[];
  subscription: string;
};

/**
 * @internal
 * BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm =
  {
    discounts?:
      | External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem[]
      | undefined;
    items: External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem[];
    subscription: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm
 */
const SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm: z.ZodType<
  BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .array(
        Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem.in,
      )
      .optional(),
    items: z.array(
      Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem.in,
    ),
    subscription: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      items: "items",
      subscription: "subscription",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm
 */
const SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm: z.ZodType<
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm // the object to be transformed
> = z
  .object({
    discounts: z
      .array(
        Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem.out,
      )
      .optional(),
    items: z.array(
      Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmItemsItem.out,
    ),
    subscription: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      items: "items",
      subscription: "subscription",
    });
  });

export const Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm =
  {
    in: SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm,
    out: SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirm,
  };
