import {
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions,
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions,
  Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions,
} from "./checkout-session-create-body-shipping-options-item-shipping-rate-data-fixed-amount-currency-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount
 */
export type CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount =
  {
    amount: number;
    currency: string;
    currencyOptions?:
      | CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions
      | undefined;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount =
  {
    amount: number;
    currency: string;
    currency_options?:
      | External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount
 */
const SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount: z.ZodType<
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    currency_options:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount
 */
const SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount: z.ZodType<
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    currencyOptions:
      Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmountCurrencyOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      currencyOptions: "currency_options",
    });
  });

export const Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount =
  {
    in: SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount,
    out: SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataFixedAmount,
  };
