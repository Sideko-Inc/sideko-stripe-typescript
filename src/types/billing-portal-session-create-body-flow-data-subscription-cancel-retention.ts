import {
  BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer,
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer,
  Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer,
} from "./billing-portal-session-create-body-flow-data-subscription-cancel-retention-coupon-offer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention
 */
export type BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention =
  {
    couponOffer: BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer;
    type: "coupon_offer";
  };

/**
 * @internal
 * BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention =
  {
    coupon_offer: External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer;
    type: "coupon_offer";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention
 */
const SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention: z.ZodType<
  BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    coupon_offer:
      Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer.in,
    type: z.enum(["coupon_offer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon_offer: "couponOffer",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention
 */
const SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention: z.ZodType<
  External$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention, // output type of this zod object
  z.ZodTypeDef,
  BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention // the object to be transformed
> = z
  .object({
    couponOffer:
      Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetentionCouponOffer.out,
    type: z.enum(["coupon_offer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      couponOffer: "coupon_offer",
      type: "type",
    });
  });

export const Schemas$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention =
  {
    in: SchemaIn$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention,
    out: SchemaOut$BillingPortalSessionCreateBodyFlowDataSubscriptionCancelRetention,
  };
