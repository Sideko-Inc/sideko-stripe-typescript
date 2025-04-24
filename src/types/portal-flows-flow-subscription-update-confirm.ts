import {
  External$PortalFlowsSubscriptionUpdateConfirmDiscount,
  PortalFlowsSubscriptionUpdateConfirmDiscount,
  Schemas$PortalFlowsSubscriptionUpdateConfirmDiscount,
} from "./portal-flows-subscription-update-confirm-discount";
import {
  External$PortalFlowsSubscriptionUpdateConfirmItem,
  PortalFlowsSubscriptionUpdateConfirmItem,
  Schemas$PortalFlowsSubscriptionUpdateConfirmItem,
} from "./portal-flows-subscription-update-confirm-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalFlowsFlowSubscriptionUpdateConfirm = {
  /**
   * The coupon or promotion code to apply to this subscription update. Currently, only up to one may be specified.
   */
  discounts?: PortalFlowsSubscriptionUpdateConfirmDiscount[] | null | undefined;
  /**
   * The [subscription item](https://stripe.com/docs/api/subscription_items) to be updated through this flow. Currently, only up to one may be specified and subscriptions with multiple items are not updatable.
   */
  items: PortalFlowsSubscriptionUpdateConfirmItem[];
  /**
   * The ID of the subscription to be updated.
   */
  subscription: string;
};

/**
 * @internal
 * PortalFlowsFlowSubscriptionUpdateConfirm without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalFlowsFlowSubscriptionUpdateConfirm = {
  discounts?:
    | External$PortalFlowsSubscriptionUpdateConfirmDiscount[]
    | null
    | undefined;
  items: External$PortalFlowsSubscriptionUpdateConfirmItem[];
  subscription: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalFlowsFlowSubscriptionUpdateConfirm
 */
const SchemaIn$PortalFlowsFlowSubscriptionUpdateConfirm: z.ZodType<
  PortalFlowsFlowSubscriptionUpdateConfirm, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    discounts: z
      .array(Schemas$PortalFlowsSubscriptionUpdateConfirmDiscount.in)
      .nullable()
      .optional(),
    items: z.array(Schemas$PortalFlowsSubscriptionUpdateConfirmItem.in),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalFlowsFlowSubscriptionUpdateConfirm
 */
const SchemaOut$PortalFlowsFlowSubscriptionUpdateConfirm: z.ZodType<
  External$PortalFlowsFlowSubscriptionUpdateConfirm, // output type of this zod object
  z.ZodTypeDef,
  PortalFlowsFlowSubscriptionUpdateConfirm // the object to be transformed
> = z
  .object({
    discounts: z
      .array(Schemas$PortalFlowsSubscriptionUpdateConfirmDiscount.out)
      .nullable()
      .optional(),
    items: z.array(Schemas$PortalFlowsSubscriptionUpdateConfirmItem.out),
    subscription: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      discounts: "discounts",
      items: "items",
      subscription: "subscription",
    });
  });

export const Schemas$PortalFlowsFlowSubscriptionUpdateConfirm = {
  in: SchemaIn$PortalFlowsFlowSubscriptionUpdateConfirm,
  out: SchemaOut$PortalFlowsFlowSubscriptionUpdateConfirm,
};
