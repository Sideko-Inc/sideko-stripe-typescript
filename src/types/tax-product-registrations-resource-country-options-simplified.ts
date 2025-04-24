import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductRegistrationsResourceCountryOptionsSimplified = {
  /**
   * Type of registration in `country`.
   */
  type: "simplified";
};

/**
 * @internal
 * TaxProductRegistrationsResourceCountryOptionsSimplified without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductRegistrationsResourceCountryOptionsSimplified = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductRegistrationsResourceCountryOptionsSimplified
 */
const SchemaIn$TaxProductRegistrationsResourceCountryOptionsSimplified: z.ZodType<
  TaxProductRegistrationsResourceCountryOptionsSimplified, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductRegistrationsResourceCountryOptionsSimplified
 */
const SchemaOut$TaxProductRegistrationsResourceCountryOptionsSimplified: z.ZodType<
  External$TaxProductRegistrationsResourceCountryOptionsSimplified, // output type of this zod object
  z.ZodTypeDef,
  TaxProductRegistrationsResourceCountryOptionsSimplified // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified = {
  in: SchemaIn$TaxProductRegistrationsResourceCountryOptionsSimplified,
  out: SchemaOut$TaxProductRegistrationsResourceCountryOptionsSimplified,
};
