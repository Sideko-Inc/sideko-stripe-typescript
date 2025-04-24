import {
  External$ShippingRate,
  Schemas$ShippingRate,
  ShippingRate,
} from "./shipping-rate";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentPagesCheckoutSessionShippingOption = {
  /**
   * A non-negative integer in cents representing how much to charge.
   */
  shippingAmount: number;
  /**
   * The shipping rate.
   */
  shippingRate: string | ShippingRate;
};

/**
 * @internal
 * PaymentPagesCheckoutSessionShippingOption without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentPagesCheckoutSessionShippingOption = {
  shipping_amount: number;
  shipping_rate: string | External$ShippingRate;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentPagesCheckoutSessionShippingOption
 */
const SchemaIn$PaymentPagesCheckoutSessionShippingOption: z.ZodType<
  PaymentPagesCheckoutSessionShippingOption, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    shipping_amount: z.number().int(),
    shipping_rate: z.union([z.string(), Schemas$ShippingRate.in]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shipping_amount: "shippingAmount",
      shipping_rate: "shippingRate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentPagesCheckoutSessionShippingOption
 */
const SchemaOut$PaymentPagesCheckoutSessionShippingOption: z.ZodType<
  External$PaymentPagesCheckoutSessionShippingOption, // output type of this zod object
  z.ZodTypeDef,
  PaymentPagesCheckoutSessionShippingOption // the object to be transformed
> = z
  .object({
    shippingAmount: z.number().int(),
    shippingRate: z.union([z.string(), Schemas$ShippingRate.out]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shippingAmount: "shipping_amount",
      shippingRate: "shipping_rate",
    });
  });

export const Schemas$PaymentPagesCheckoutSessionShippingOption = {
  in: SchemaIn$PaymentPagesCheckoutSessionShippingOption,
  out: SchemaOut$PaymentPagesCheckoutSessionShippingOption,
};
