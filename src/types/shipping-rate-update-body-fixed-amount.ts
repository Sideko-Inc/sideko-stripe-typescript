import {
  External$ShippingRateUpdateBodyFixedAmountCurrencyOptions,
  Schemas$ShippingRateUpdateBodyFixedAmountCurrencyOptions,
  ShippingRateUpdateBodyFixedAmountCurrencyOptions,
} from "./shipping-rate-update-body-fixed-amount-currency-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
 */
export type ShippingRateUpdateBodyFixedAmount = {
  currencyOptions?:
    | ShippingRateUpdateBodyFixedAmountCurrencyOptions
    | undefined;
};

/**
 * @internal
 * ShippingRateUpdateBodyFixedAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateUpdateBodyFixedAmount = {
  currency_options?:
    | External$ShippingRateUpdateBodyFixedAmountCurrencyOptions
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateUpdateBodyFixedAmount
 */
const SchemaIn$ShippingRateUpdateBodyFixedAmount: z.ZodType<
  ShippingRateUpdateBodyFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    currency_options:
      Schemas$ShippingRateUpdateBodyFixedAmountCurrencyOptions.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currency_options: "currencyOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateUpdateBodyFixedAmount
 */
const SchemaOut$ShippingRateUpdateBodyFixedAmount: z.ZodType<
  External$ShippingRateUpdateBodyFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateUpdateBodyFixedAmount // the object to be transformed
> = z
  .object({
    currencyOptions:
      Schemas$ShippingRateUpdateBodyFixedAmountCurrencyOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      currencyOptions: "currency_options",
    });
  });

export const Schemas$ShippingRateUpdateBodyFixedAmount = {
  in: SchemaIn$ShippingRateUpdateBodyFixedAmount,
  out: SchemaOut$ShippingRateUpdateBodyFixedAmount,
};
