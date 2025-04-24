import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax = {
  /**
   * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
   */
  jurisdiction: string;
};

/**
 * @internal
 * TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax =
  {
    jurisdiction: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax
 */
const SchemaIn$TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax: z.ZodType<
  TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    jurisdiction: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      jurisdiction: "jurisdiction",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax
 */
const SchemaOut$TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax: z.ZodType<
  External$TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax, // output type of this zod object
  z.ZodTypeDef,
  TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax // the object to be transformed
> = z
  .object({
    jurisdiction: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      jurisdiction: "jurisdiction",
    });
  });

export const Schemas$TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax =
  {
    in: SchemaIn$TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax,
    out: SchemaOut$TaxProductRegistrationsResourceCountryOptionsUsLocalAmusementTax,
  };
