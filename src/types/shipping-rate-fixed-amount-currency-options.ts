import {
  External$ShippingRateCurrencyOption,
  Schemas$ShippingRateCurrencyOption,
  ShippingRateCurrencyOption,
} from "./shipping-rate-currency-option";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
 */
export type ShippingRateFixedAmountCurrencyOptions = {
  [additionalProperty: string]: ShippingRateCurrencyOption | null | undefined;
};

/**
 * @internal
 * ShippingRateFixedAmountCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateFixedAmountCurrencyOptions = {
  [additionalProperty: string]:
    | External$ShippingRateFixedAmountCurrencyOptions
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateFixedAmountCurrencyOptions
 */
const SchemaIn$ShippingRateFixedAmountCurrencyOptions: z.ZodType<
  ShippingRateFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(Schemas$ShippingRateCurrencyOption.in)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateFixedAmountCurrencyOptions
 */
const SchemaOut$ShippingRateFixedAmountCurrencyOptions: z.ZodType<
  External$ShippingRateFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateFixedAmountCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(Schemas$ShippingRateCurrencyOption.out)
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ShippingRateFixedAmountCurrencyOptions = {
  in: SchemaIn$ShippingRateFixedAmountCurrencyOptions,
  out: SchemaOut$ShippingRateFixedAmountCurrencyOptions,
};
