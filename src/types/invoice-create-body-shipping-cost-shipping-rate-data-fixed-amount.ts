import {
  External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions,
  InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions,
  Schemas$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions,
} from "./invoice-create-body-shipping-cost-shipping-rate-data-fixed-amount-currency-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyShippingCostShippingRateDataFixedAmount
 */
export type InvoiceCreateBodyShippingCostShippingRateDataFixedAmount = {
  amount: number;
  currency: string;
  currencyOptions?:
    | InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions
    | undefined;
};

/**
 * @internal
 * InvoiceCreateBodyShippingCostShippingRateDataFixedAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmount =
  {
    amount: number;
    currency: string;
    currency_options?:
      | External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyShippingCostShippingRateDataFixedAmount
 */
const SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataFixedAmount: z.ZodType<
  InvoiceCreateBodyShippingCostShippingRateDataFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    currency_options:
      Schemas$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmount
 */
const SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataFixedAmount: z.ZodType<
  External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyShippingCostShippingRateDataFixedAmount // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    currencyOptions:
      Schemas$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      currencyOptions: "currency_options",
    });
  });

export const Schemas$InvoiceCreateBodyShippingCostShippingRateDataFixedAmount =
  {
    in: SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataFixedAmount,
    out: SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataFixedAmount,
  };
