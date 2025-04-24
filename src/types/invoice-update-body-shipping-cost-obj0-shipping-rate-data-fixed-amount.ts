import {
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions,
  Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions,
} from "./invoice-update-body-shipping-cost-obj0-shipping-rate-data-fixed-amount-currency-options";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount
 */
export type InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount = {
  amount: number;
  currency: string;
  currencyOptions?:
    | InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions
    | undefined;
};

/**
 * @internal
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount =
  {
    amount: number;
    currency: string;
    currency_options?:
      | External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount
 */
const SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount: z.ZodType<
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    currency_options:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount
 */
const SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount: z.ZodType<
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    currency: z.string(),
    currencyOptions:
      Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptions.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      currency: "currency",
      currencyOptions: "currency_options",
    });
  });

export const Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount =
  {
    in: SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount,
    out: SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmount,
  };
