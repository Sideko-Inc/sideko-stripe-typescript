import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
 */
export type InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps =
  {
    amount: number;
    taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  };

/**
 * @internal
 * InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps =
  {
    amount: number;
    tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
 */
const SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps: z.ZodType<
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int(),
    tax_behavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      tax_behavior: "taxBehavior",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
 */
const SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps: z.ZodType<
  External$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps // the object to be transformed
> = z
  .object({
    amount: z.number().int(),
    taxBehavior: z.enum(["exclusive", "inclusive", "unspecified"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      taxBehavior: "tax_behavior",
    });
  });

export const Schemas$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps =
  {
    in: SchemaIn$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
    out: SchemaOut$InvoiceUpdateBodyShippingCostObj0ShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
  };
