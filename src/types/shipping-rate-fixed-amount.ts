import {
  External$ShippingRateFixedAmountCurrencyOptions,
  Schemas$ShippingRateFixedAmountCurrencyOptions,
  ShippingRateFixedAmountCurrencyOptions,
} from "./shipping-rate-fixed-amount-currency-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type ShippingRateFixedAmount = {
  /**
   * A non-negative integer in cents representing how much to charge.
   */
  amount: number;
  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;
  /**
   * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currencyOptions?: ShippingRateFixedAmountCurrencyOptions | undefined;
};

/**
 * @internal
 * ShippingRateFixedAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ShippingRateFixedAmount = {
  amount: number;
  currency: string;
  currency_options?:
    | External$ShippingRateFixedAmountCurrencyOptions
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ShippingRateFixedAmount
 */
const SchemaIn$ShippingRateFixedAmount: z.ZodType<
  ShippingRateFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    currency_options:
      Schemas$ShippingRateFixedAmountCurrencyOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ShippingRateFixedAmount
 */
const SchemaOut$ShippingRateFixedAmount: z.ZodType<
  External$ShippingRateFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  ShippingRateFixedAmount // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    currencyOptions:
      Schemas$ShippingRateFixedAmountCurrencyOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      currencyOptions: "currency_options",
    });
  });

export const Schemas$ShippingRateFixedAmount = {
  in: SchemaIn$ShippingRateFixedAmount,
  out: SchemaOut$ShippingRateFixedAmount,
};
