import {
  External$ShippingRate,
  Schemas$ShippingRate,
  ShippingRate,
} from "./shipping-rate";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type PaymentLinksResourceShippingOption = {
  /**
   * A non-negative integer in cents representing how much to charge.
   */
  shippingAmount: number;
  /**
   * The ID of the Shipping Rate to use for this shipping option.
   */
  shippingRate: string | ShippingRate;
};

/**
 * @internal
 * PaymentLinksResourceShippingOption without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinksResourceShippingOption = {
  shipping_amount: number;
  shipping_rate: string | External$ShippingRate;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinksResourceShippingOption
 */
const SchemaIn$PaymentLinksResourceShippingOption: z.ZodType<
  PaymentLinksResourceShippingOption, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinksResourceShippingOption
 */
const SchemaOut$PaymentLinksResourceShippingOption: z.ZodType<
  External$PaymentLinksResourceShippingOption, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinksResourceShippingOption // the object to be transformed
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

export const Schemas$PaymentLinksResourceShippingOption = {
  in: SchemaIn$PaymentLinksResourceShippingOption,
  out: SchemaOut$PaymentLinksResourceShippingOption,
};
