import {
  External$PortalFlowsCouponOffer,
  PortalFlowsCouponOffer,
  Schemas$PortalFlowsCouponOffer,
} from "./portal-flows-coupon-offer";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalFlowsRetention = {
  couponOffer?: PortalFlowsCouponOffer | undefined;
  /**
   * Type of retention strategy that will be used.
   */
  type: "coupon_offer";
};

/**
 * @internal
 * PortalFlowsRetention without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalFlowsRetention = {
  coupon_offer?: External$PortalFlowsCouponOffer | undefined;
  type: "coupon_offer";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalFlowsRetention
 */
const SchemaIn$PortalFlowsRetention: z.ZodType<
  PortalFlowsRetention, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    coupon_offer: Schemas$PortalFlowsCouponOffer.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalFlowsRetention
 */
const SchemaOut$PortalFlowsRetention: z.ZodType<
  External$PortalFlowsRetention, // output type of this zod object
  z.ZodTypeDef,
  PortalFlowsRetention // the object to be transformed
> = z
  .object({
    couponOffer: Schemas$PortalFlowsCouponOffer.out.optional(),
    type: z.enum(["coupon_offer"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      couponOffer: "coupon_offer",
      type: "type",
    });
  });

export const Schemas$PortalFlowsRetention = {
  in: SchemaIn$PortalFlowsRetention,
  out: SchemaOut$PortalFlowsRetention,
};
