import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceTaxSettingsDefaults = {
  /**
   * Default [tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#tax-behavior) used to specify whether the price is considered inclusive of taxes or exclusive of taxes. If the item's price has a tax behavior set, it will take precedence over the default tax behavior.
   */
  taxBehavior?:
    | ("exclusive" | "inclusive" | "inferred_by_currency")
    | null
    | undefined;
  /**
   * Default [tax code](https://stripe.com/docs/tax/tax-categories) used to classify your products and prices.
   */
  taxCode?: string | null | undefined;
};

/**
 * @internal
 * TaxProductResourceTaxSettingsDefaults without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceTaxSettingsDefaults = {
  tax_behavior?:
    | ("exclusive" | "inclusive" | "inferred_by_currency")
    | null
    | undefined;
  tax_code?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceTaxSettingsDefaults
 */
const SchemaIn$TaxProductResourceTaxSettingsDefaults: z.ZodType<
  TaxProductResourceTaxSettingsDefaults, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    tax_behavior: z
      .enum(["exclusive", "inclusive", "inferred_by_currency"])
      .nullable()
      .optional(),
    tax_code: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tax_behavior: "taxBehavior",
      tax_code: "taxCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceTaxSettingsDefaults
 */
const SchemaOut$TaxProductResourceTaxSettingsDefaults: z.ZodType<
  External$TaxProductResourceTaxSettingsDefaults, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceTaxSettingsDefaults // the object to be transformed
> = z
  .object({
    taxBehavior: z
      .enum(["exclusive", "inclusive", "inferred_by_currency"])
      .nullable()
      .optional(),
    taxCode: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxBehavior: "tax_behavior",
      taxCode: "tax_code",
    });
  });

export const Schemas$TaxProductResourceTaxSettingsDefaults = {
  in: SchemaIn$TaxProductResourceTaxSettingsDefaults,
  out: SchemaOut$TaxProductResourceTaxSettingsDefaults,
};
