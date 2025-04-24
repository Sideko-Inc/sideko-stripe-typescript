import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PortalFlowsCouponOffer = {
  /**
   * The ID of the coupon to be offered.
   */
  coupon: string;
};

/**
 * @internal
 * PortalFlowsCouponOffer without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PortalFlowsCouponOffer = {
  coupon: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PortalFlowsCouponOffer
 */
const SchemaIn$PortalFlowsCouponOffer: z.ZodType<
  PortalFlowsCouponOffer, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PortalFlowsCouponOffer
 */
const SchemaOut$PortalFlowsCouponOffer: z.ZodType<
  External$PortalFlowsCouponOffer, // output type of this zod object
  z.ZodTypeDef,
  PortalFlowsCouponOffer // the object to be transformed
> = z
  .object({
    coupon: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      coupon: "coupon",
    });
  });

export const Schemas$PortalFlowsCouponOffer = {
  in: SchemaIn$PortalFlowsCouponOffer,
  out: SchemaOut$PortalFlowsCouponOffer,
};
