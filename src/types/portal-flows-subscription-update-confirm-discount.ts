import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalFlowsSubscriptionUpdateConfirmDiscount = {
  /**
   * The ID of the coupon to apply to this subscription update.
   */
  coupon?: string | null | undefined;
  /**
   * The ID of a promotion code to apply to this subscription update.
   */
  promotionCode?: string | null | undefined;
};

/**
 * @internal
 * PortalFlowsSubscriptionUpdateConfirmDiscount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalFlowsSubscriptionUpdateConfirmDiscount = {
  coupon?: string | null | undefined;
  promotion_code?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalFlowsSubscriptionUpdateConfirmDiscount
 */
const SchemaIn$PortalFlowsSubscriptionUpdateConfirmDiscount: z.ZodType<
  PortalFlowsSubscriptionUpdateConfirmDiscount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    coupon: z.string().nullable().optional(),
    promotion_code: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      promotion_code: "promotionCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalFlowsSubscriptionUpdateConfirmDiscount
 */
const SchemaOut$PortalFlowsSubscriptionUpdateConfirmDiscount: z.ZodType<
  External$PortalFlowsSubscriptionUpdateConfirmDiscount, // output type of this zod object
  z.ZodTypeDef,
  PortalFlowsSubscriptionUpdateConfirmDiscount // the object to be transformed
> = z
  .object({
    coupon: z.string().nullable().optional(),
    promotionCode: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      promotionCode: "promotion_code",
    });
  });

export const Schemas$PortalFlowsSubscriptionUpdateConfirmDiscount = {
  in: SchemaIn$PortalFlowsSubscriptionUpdateConfirmDiscount,
  out: SchemaOut$PortalFlowsSubscriptionUpdateConfirmDiscount,
};
