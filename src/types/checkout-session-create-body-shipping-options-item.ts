import {
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateData,
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateData,
  Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateData,
} from "./checkout-session-create-body-shipping-options-item-shipping-rate-data";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyShippingOptionsItem
 */
export type CheckoutSessionCreateBodyShippingOptionsItem = {
  shippingRate?: string | undefined;
  shippingRateData?:
    | CheckoutSessionCreateBodyShippingOptionsItemShippingRateData
    | undefined;
};

/**
 * @internal
 * CheckoutSessionCreateBodyShippingOptionsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyShippingOptionsItem = {
  shipping_rate?: string | undefined;
  shipping_rate_data?:
    | External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateData
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyShippingOptionsItem
 */
const SchemaIn$CheckoutSessionCreateBodyShippingOptionsItem: z.ZodType<
  CheckoutSessionCreateBodyShippingOptionsItem, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    shipping_rate: z.string().optional(),
    shipping_rate_data:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateData.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shipping_rate: "shippingRate",
      shipping_rate_data: "shippingRateData",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyShippingOptionsItem
 */
const SchemaOut$CheckoutSessionCreateBodyShippingOptionsItem: z.ZodType<
  External$CheckoutSessionCreateBodyShippingOptionsItem, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyShippingOptionsItem // the object to be transformed
> = z
  .object({
    shippingRate: z.string().optional(),
    shippingRateData:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateData.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      shippingRate: "shipping_rate",
      shippingRateData: "shipping_rate_data",
    });
  });

export const Schemas$CheckoutSessionCreateBodyShippingOptionsItem = {
  in: SchemaIn$CheckoutSessionCreateBodyShippingOptionsItem,
  out: SchemaOut$CheckoutSessionCreateBodyShippingOptionsItem,
};
