import {
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData,
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData,
  Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData,
} from "./checkout-session-update-body-shipping-options-arr0-item-shipping-rate-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionUpdateBodyShippingOptionsArr0Item
 */
export type CheckoutSessionUpdateBodyShippingOptionsArr0Item = {
  shippingRate?: string | undefined;
  shippingRateData?:
    | CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData
    | undefined;
};

/**
 * @internal
 * CheckoutSessionUpdateBodyShippingOptionsArr0Item without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionUpdateBodyShippingOptionsArr0Item = {
  shipping_rate?: string | undefined;
  shipping_rate_data?:
    | External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionUpdateBodyShippingOptionsArr0Item
 */
const SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0Item: z.ZodType<
  CheckoutSessionUpdateBodyShippingOptionsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    shipping_rate: z.string().optional(),
    shipping_rate_data:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shipping_rate: "shippingRate",
      shipping_rate_data: "shippingRateData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionUpdateBodyShippingOptionsArr0Item
 */
const SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0Item: z.ZodType<
  External$CheckoutSessionUpdateBodyShippingOptionsArr0Item, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionUpdateBodyShippingOptionsArr0Item // the object to be transformed
> = z
  .object({
    shippingRate: z.string().optional(),
    shippingRateData:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateData.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shippingRate: "shipping_rate",
      shippingRateData: "shipping_rate_data",
    });
  });

export const Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0Item = {
  in: SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0Item,
  out: SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0Item,
};
