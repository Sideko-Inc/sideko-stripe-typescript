import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type LegalEntityDob = {
  /**
   * The day of birth, between 1 and 31.
   */
  day?: number | null | undefined;
  /**
   * The month of birth, between 1 and 12.
   */
  month?: number | null | undefined;
  /**
   * The four-digit year of birth.
   */
  year?: number | null | undefined;
};

/**
 * @internal
 * LegalEntityDob without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$LegalEntityDob = {
  day?: number | null | undefined;
  month?: number | null | undefined;
  year?: number | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object LegalEntityDob
 */
const SchemaIn$LegalEntityDob: z.ZodType<
  LegalEntityDob, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    day: z.number().int().nullable().optional(),
    month: z.number().int().nullable().optional(),
    year: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day: "day",
      month: "month",
      year: "year",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$LegalEntityDob
 */
const SchemaOut$LegalEntityDob: z.ZodType<
  External$LegalEntityDob, // output type of this zod object
  z.ZodTypeDef,
  LegalEntityDob // the object to be transformed
> = z
  .object({
    day: z.number().int().nullable().optional(),
    month: z.number().int().nullable().optional(),
    year: z.number().int().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      day: "day",
      month: "month",
      year: "year",
    });
  });

export const Schemas$LegalEntityDob = {
  in: SchemaIn$LegalEntityDob,
  out: SchemaOut$LegalEntityDob,
};
