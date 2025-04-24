import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection =
  {
    /**
     * A [FIPS code](https://www.census.gov/library/reference/code-lists/ansi.html) representing the local jurisdiction.
     */
    jurisdiction?: string | undefined;
    /**
     * The type of the election for the state sales tax registration.
     */
    type:
      | "local_use_tax"
      | "simplified_sellers_use_tax"
      | "single_local_use_tax";
  };

/**
 * @internal
 * TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection =
  {
    jurisdiction?: string | undefined;
    type:
      | "local_use_tax"
      | "simplified_sellers_use_tax"
      | "single_local_use_tax";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection
 */
const SchemaIn$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection: z.ZodType<
  TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    jurisdiction: z.string().optional(),
    type: z.enum([
      "local_use_tax",
      "simplified_sellers_use_tax",
      "single_local_use_tax",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      jurisdiction: "jurisdiction",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection
 */
const SchemaOut$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection: z.ZodType<
  External$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection, // output type of this zod object
  z.ZodTypeDef,
  TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection // the object to be transformed
> = z
  .object({
    jurisdiction: z.string().optional(),
    type: z.enum([
      "local_use_tax",
      "simplified_sellers_use_tax",
      "single_local_use_tax",
    ]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      jurisdiction: "jurisdiction",
      type: "type",
    });
  });

export const Schemas$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection =
  {
    in: SchemaIn$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection,
    out: SchemaOut$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection,
  };
