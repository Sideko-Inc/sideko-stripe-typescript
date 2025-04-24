import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Default configuration to be used on Stripe Tax calculations.
 */
export type TaxSettingUpdateBodyDefaults = {
  taxBehavior?:
    | ("exclusive" | "inclusive" | "inferred_by_currency")
    | undefined;
  taxCode?: string | undefined;
};

/**
 * @internal
 * TaxSettingUpdateBodyDefaults without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxSettingUpdateBodyDefaults = {
  tax_behavior?:
    | ("exclusive" | "inclusive" | "inferred_by_currency")
    | undefined;
  tax_code?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxSettingUpdateBodyDefaults
 */
const SchemaIn$TaxSettingUpdateBodyDefaults: z.ZodType<
  TaxSettingUpdateBodyDefaults, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    tax_behavior: z
      .enum(["exclusive", "inclusive", "inferred_by_currency"])
      .optional(),
    tax_code: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tax_behavior: "taxBehavior",
      tax_code: "taxCode",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxSettingUpdateBodyDefaults
 */
const SchemaOut$TaxSettingUpdateBodyDefaults: z.ZodType<
  External$TaxSettingUpdateBodyDefaults, // output type of this zod object
  z.ZodTypeDef,
  TaxSettingUpdateBodyDefaults // the object to be transformed
> = z
  .object({
    taxBehavior: z
      .enum(["exclusive", "inclusive", "inferred_by_currency"])
      .optional(),
    taxCode: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      taxBehavior: "tax_behavior",
      taxCode: "tax_code",
    });
  });

export const Schemas$TaxSettingUpdateBodyDefaults = {
  in: SchemaIn$TaxSettingUpdateBodyDefaults,
  out: SchemaOut$TaxSettingUpdateBodyDefaults,
};
