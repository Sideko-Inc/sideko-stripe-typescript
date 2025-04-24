import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem
 */
export type BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem =
  {
    coupon?: string | undefined;
    promotionCode?: string | undefined;
  };

/**
 * @internal
 * BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem =
  {
    coupon?: string | undefined;
    promotion_code?: string | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem
 */
const SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem: z.ZodType<
  BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    coupon: z.string().optional(),
    promotion_code: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      promotion_code: "promotionCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem
 */
const SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem: z.ZodType<
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem // the object to be transformed
> = z
  .object({
    coupon: z.string().optional(),
    promotionCode: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
      promotionCode: "promotion_code",
    });
  });

export const Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem =
  {
    in: SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem,
    out: SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionUpdateConfirmDiscountsItem,
  };
