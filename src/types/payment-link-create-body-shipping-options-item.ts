import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentLinkCreateBodyShippingOptionsItem
 */
export type PaymentLinkCreateBodyShippingOptionsItem = {
  shippingRate?: string | undefined;
};

/**
 * @internal
 * PaymentLinkCreateBodyShippingOptionsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentLinkCreateBodyShippingOptionsItem = {
  shipping_rate?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentLinkCreateBodyShippingOptionsItem
 */
const SchemaIn$PaymentLinkCreateBodyShippingOptionsItem: z.ZodType<
  PaymentLinkCreateBodyShippingOptionsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    shipping_rate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shipping_rate: "shippingRate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentLinkCreateBodyShippingOptionsItem
 */
const SchemaOut$PaymentLinkCreateBodyShippingOptionsItem: z.ZodType<
  External$PaymentLinkCreateBodyShippingOptionsItem, // output type of this zod object
  z.ZodTypeDef,
  PaymentLinkCreateBodyShippingOptionsItem // the object to be transformed
> = z
  .object({
    shippingRate: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shippingRate: "shipping_rate",
    });
  });

export const Schemas$PaymentLinkCreateBodyShippingOptionsItem = {
  in: SchemaIn$PaymentLinkCreateBodyShippingOptionsItem,
  out: SchemaOut$PaymentLinkCreateBodyShippingOptionsItem,
};
