import {
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions,
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions,
  Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions,
} from "./checkout-session-update-body-shipping-options-arr0-item-shipping-rate-data-fixed-amount-currency-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount
 */
export type CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount =
  {
    amount: number;
    currency: string;
    currencyOptions?:
      | CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions
      | undefined;
  };

/**
 * @internal
 * CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount =
  {
    amount: number;
    currency: string;
    currency_options?:
      | External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount
 */
const SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount: z.ZodType<
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    currency_options:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount
 */
const SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount: z.ZodType<
  External$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    currencyOptions:
      Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmountCurrencyOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      currencyOptions: "currency_options",
    });
  });

export const Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount =
  {
    in: SchemaIn$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount,
    out: SchemaOut$CheckoutSessionUpdateBodyShippingOptionsArr0ItemShippingRateDataFixedAmount,
  };
