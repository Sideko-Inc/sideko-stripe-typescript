import {
  External$ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps,
  Schemas$ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps,
  ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps,
} from "./shipping-rate-update-body-fixed-amount-currency-options-additional-props";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ShippingRateUpdateBodyFixedAmountCurrencyOptions
 */
export type ShippingRateUpdateBodyFixedAmountCurrencyOptions = {
  [additionalProperty: string]:
    | ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps
    | null
    | undefined;
};

/**
 * @internal
 * ShippingRateUpdateBodyFixedAmountCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateUpdateBodyFixedAmountCurrencyOptions = {
  [additionalProperty: string]:
    | External$ShippingRateUpdateBodyFixedAmountCurrencyOptions
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateUpdateBodyFixedAmountCurrencyOptions
 */
const SchemaIn$ShippingRateUpdateBodyFixedAmountCurrencyOptions: z.ZodType<
  ShippingRateUpdateBodyFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(
    Schemas$ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps.in,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateUpdateBodyFixedAmountCurrencyOptions
 */
const SchemaOut$ShippingRateUpdateBodyFixedAmountCurrencyOptions: z.ZodType<
  External$ShippingRateUpdateBodyFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateUpdateBodyFixedAmountCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(
    Schemas$ShippingRateUpdateBodyFixedAmountCurrencyOptionsAdditionalProps.out,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ShippingRateUpdateBodyFixedAmountCurrencyOptions = {
  in: SchemaIn$ShippingRateUpdateBodyFixedAmountCurrencyOptions,
  out: SchemaOut$ShippingRateUpdateBodyFixedAmountCurrencyOptions,
};
