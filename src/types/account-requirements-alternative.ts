import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountRequirementsAlternative = {
  /**
   * Fields that can be provided to satisfy all fields in `original_fields_due`.
   */
  alternativeFieldsDue: string[];
  /**
   * Fields that are due and can be satisfied by providing all fields in `alternative_fields_due`.
   */
  originalFieldsDue: string[];
};

/**
 * @internal
 * AccountRequirementsAlternative without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountRequirementsAlternative = {
  alternative_fields_due: string[];
  original_fields_due: string[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountRequirementsAlternative
 */
const SchemaIn$AccountRequirementsAlternative: z.ZodType<
  AccountRequirementsAlternative, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    alternative_fields_due: z.array(z.string()),
    original_fields_due: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alternative_fields_due: "alternativeFieldsDue",
      original_fields_due: "originalFieldsDue",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountRequirementsAlternative
 */
const SchemaOut$AccountRequirementsAlternative: z.ZodType<
  External$AccountRequirementsAlternative, // output type of this zod object
  z.ZodTypeDef,
  AccountRequirementsAlternative // the object to be transformed
> = z
  .object({
    alternativeFieldsDue: z.array(z.string()),
    originalFieldsDue: z.array(z.string()),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      alternativeFieldsDue: "alternative_fields_due",
      originalFieldsDue: "original_fields_due",
    });
  });

export const Schemas$AccountRequirementsAlternative = {
  in: SchemaIn$AccountRequirementsAlternative,
  out: SchemaOut$AccountRequirementsAlternative,
};
