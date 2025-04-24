import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Shipping cost details to be used for the calculation.
 */
export type TaxCalculationCreateBodyShippingCost = {
  amount?: number | undefined;
  shippingRate?: string | undefined;
  taxBehavior?: ("exclusive" | "inclusive") | undefined;
  taxCode?: string | undefined;
};

/**
 * @internal
 * TaxCalculationCreateBodyShippingCost without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxCalculationCreateBodyShippingCost = {
  amount?: number | undefined;
  shipping_rate?: string | undefined;
  tax_behavior?: ("exclusive" | "inclusive") | undefined;
  tax_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxCalculationCreateBodyShippingCost
 */
const SchemaIn$TaxCalculationCreateBodyShippingCost: z.ZodType<
  TaxCalculationCreateBodyShippingCost, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    shipping_rate: z.string().optional(),
    tax_behavior: z.enum(["exclusive", "inclusive"]).optional(),
    tax_code: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      shipping_rate: "shippingRate",
      tax_behavior: "taxBehavior",
      tax_code: "taxCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxCalculationCreateBodyShippingCost
 */
const SchemaOut$TaxCalculationCreateBodyShippingCost: z.ZodType<
  External$TaxCalculationCreateBodyShippingCost, // output type of this zod object
  z.ZodTypeDef,
  TaxCalculationCreateBodyShippingCost // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    shippingRate: z.string().optional(),
    taxBehavior: z.enum(["exclusive", "inclusive"]).optional(),
    taxCode: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      shippingRate: "shipping_rate",
      taxBehavior: "tax_behavior",
      taxCode: "tax_code",
    });
  });

export const Schemas$TaxCalculationCreateBodyShippingCost = {
  in: SchemaIn$TaxCalculationCreateBodyShippingCost,
  out: SchemaOut$TaxCalculationCreateBodyShippingCost,
};
