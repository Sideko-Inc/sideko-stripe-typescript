import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax = {
  /**
   * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
   */
  jurisdiction: string;
};

/**
 * @internal
 * TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax =
  {
    jurisdiction: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax
 */
const SchemaIn$TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax: z.ZodType<
  TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax
 */
const SchemaOut$TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax: z.ZodType<
  External$TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax, // output type of this zod object
  z.ZodTypeDef,
  TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax // the object to be transformed
> = z
  .object({
    jurisdiction: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      jurisdiction: "jurisdiction",
    });
  });

export const Schemas$TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax =
  {
    in: SchemaIn$TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax,
    out: SchemaOut$TaxProductRegistrationsResourceCountryOptionsUsLocalLeaseTax,
  };
