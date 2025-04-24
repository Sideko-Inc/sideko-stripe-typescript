import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceTaxSettingsStatusDetailsResourcePending = {
  /**
   * The list of missing fields that are required to perform calculations. It includes the entry `head_office` when the status is `pending`. It is recommended to set the optional values even if they aren't listed as required for calculating taxes. Calculations can fail if missing fields aren't explicitly provided on every call.
   */
  missingFields?: string[] | null | undefined;
};

/**
 * @internal
 * TaxProductResourceTaxSettingsStatusDetailsResourcePending without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceTaxSettingsStatusDetailsResourcePending =
  {
    missing_fields?: string[] | null | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceTaxSettingsStatusDetailsResourcePending
 */
const SchemaIn$TaxProductResourceTaxSettingsStatusDetailsResourcePending: z.ZodType<
  TaxProductResourceTaxSettingsStatusDetailsResourcePending, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    missing_fields: z.array(z.string()).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      missing_fields: "missingFields",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceTaxSettingsStatusDetailsResourcePending
 */
const SchemaOut$TaxProductResourceTaxSettingsStatusDetailsResourcePending: z.ZodType<
  External$TaxProductResourceTaxSettingsStatusDetailsResourcePending, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceTaxSettingsStatusDetailsResourcePending // the object to be transformed
> = z
  .object({
    missingFields: z.array(z.string()).nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      missingFields: "missing_fields",
    });
  });

export const Schemas$TaxProductResourceTaxSettingsStatusDetailsResourcePending =
  {
    in: SchemaIn$TaxProductResourceTaxSettingsStatusDetailsResourcePending,
    out: SchemaOut$TaxProductResourceTaxSettingsStatusDetailsResourcePending,
  };
