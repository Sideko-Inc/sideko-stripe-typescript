import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductRegistrationsResourceCountryOptionsDefault = {
  /**
   * Type of registration in `country`.
   */
  type: "standard";
};

/**
 * @internal
 * TaxProductRegistrationsResourceCountryOptionsDefault without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductRegistrationsResourceCountryOptionsDefault = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductRegistrationsResourceCountryOptionsDefault
 */
const SchemaIn$TaxProductRegistrationsResourceCountryOptionsDefault: z.ZodType<
  TaxProductRegistrationsResourceCountryOptionsDefault, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductRegistrationsResourceCountryOptionsDefault
 */
const SchemaOut$TaxProductRegistrationsResourceCountryOptionsDefault: z.ZodType<
  External$TaxProductRegistrationsResourceCountryOptionsDefault, // output type of this zod object
  z.ZodTypeDef,
  TaxProductRegistrationsResourceCountryOptionsDefault // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxProductRegistrationsResourceCountryOptionsDefault = {
  in: SchemaIn$TaxProductRegistrationsResourceCountryOptionsDefault,
  out: SchemaOut$TaxProductRegistrationsResourceCountryOptionsDefault,
};
