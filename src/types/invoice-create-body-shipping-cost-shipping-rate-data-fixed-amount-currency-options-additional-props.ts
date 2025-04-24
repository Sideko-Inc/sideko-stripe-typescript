import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
 */
export type InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps =
  {
    amount: number;
    taxBehavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  };

/**
 * @internal
 * InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps =
  {
    amount: number;
    tax_behavior?: ("exclusive" | "inclusive" | "unspecified") | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
 */
const SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps: z.ZodType<
  InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps
 */
const SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps: z.ZodType<
  External$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps, // output type of this zod object
  z.ZodTypeDef,
  InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps // the object to be transformed
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

export const Schemas$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps =
  {
    in: SchemaIn$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
    out: SchemaOut$InvoiceCreateBodyShippingCostShippingRateDataFixedAmountCurrencyOptionsAdditionalProps,
  };
