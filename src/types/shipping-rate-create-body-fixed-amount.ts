import {
  External$ShippingRateCreateBodyFixedAmountCurrencyOptions,
  Schemas$ShippingRateCreateBodyFixedAmountCurrencyOptions,
  ShippingRateCreateBodyFixedAmountCurrencyOptions,
} from "./shipping-rate-create-body-fixed-amount-currency-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
 */
export type ShippingRateCreateBodyFixedAmount = {
  amount: number;
  currency: string;
  currencyOptions?:
    | ShippingRateCreateBodyFixedAmountCurrencyOptions
    | undefined;
};

/**
 * @internal
 * ShippingRateCreateBodyFixedAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateCreateBodyFixedAmount = {
  amount: number;
  currency: string;
  currency_options?:
    | External$ShippingRateCreateBodyFixedAmountCurrencyOptions
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateCreateBodyFixedAmount
 */
const SchemaIn$ShippingRateCreateBodyFixedAmount: z.ZodType<
  ShippingRateCreateBodyFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    currency_options:
      Schemas$ShippingRateCreateBodyFixedAmountCurrencyOptions.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      currency_options: "currencyOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateCreateBodyFixedAmount
 */
const SchemaOut$ShippingRateCreateBodyFixedAmount: z.ZodType<
  External$ShippingRateCreateBodyFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateCreateBodyFixedAmount // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    currencyOptions:
      Schemas$ShippingRateCreateBodyFixedAmountCurrencyOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      currencyOptions: "currency_options",
    });
  });

export const Schemas$ShippingRateCreateBodyFixedAmount = {
  in: SchemaIn$ShippingRateCreateBodyFixedAmount,
  out: SchemaOut$ShippingRateCreateBodyFixedAmount,
};
