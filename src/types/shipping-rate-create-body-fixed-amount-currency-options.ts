import {
  External$ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps,
  Schemas$ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps,
  ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps,
} from "./shipping-rate-create-body-fixed-amount-currency-options-additional-props";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ShippingRateCreateBodyFixedAmountCurrencyOptions
 */
export type ShippingRateCreateBodyFixedAmountCurrencyOptions = {
  [additionalProperty: string]:
    | ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps
    | null
    | undefined;
};

/**
 * @internal
 * ShippingRateCreateBodyFixedAmountCurrencyOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateCreateBodyFixedAmountCurrencyOptions = {
  [additionalProperty: string]:
    | External$ShippingRateCreateBodyFixedAmountCurrencyOptions
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateCreateBodyFixedAmountCurrencyOptions
 */
const SchemaIn$ShippingRateCreateBodyFixedAmountCurrencyOptions: z.ZodType<
  ShippingRateCreateBodyFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(
    Schemas$ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps.in,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateCreateBodyFixedAmountCurrencyOptions
 */
const SchemaOut$ShippingRateCreateBodyFixedAmountCurrencyOptions: z.ZodType<
  External$ShippingRateCreateBodyFixedAmountCurrencyOptions, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateCreateBodyFixedAmountCurrencyOptions // the object to be transformed
> = z
  .object({})
  .catchall(
    Schemas$ShippingRateCreateBodyFixedAmountCurrencyOptionsAdditionalProps.out,
  )
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$ShippingRateCreateBodyFixedAmountCurrencyOptions = {
  in: SchemaIn$ShippingRateCreateBodyFixedAmountCurrencyOptions,
  out: SchemaOut$ShippingRateCreateBodyFixedAmountCurrencyOptions,
};
