import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer
 */
export type BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer =
  {
    coupon: string;
  };

/**
 * @internal
 * BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer =
  {
    coupon: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer
 */
const SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer: z.ZodType<
  BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    coupon: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer
 */
const SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer: z.ZodType<
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer // the object to be transformed
> = z
  .object({
    coupon: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
    });
  });

export const Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer =
  {
    in: SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer,
    out: SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer,
  };
