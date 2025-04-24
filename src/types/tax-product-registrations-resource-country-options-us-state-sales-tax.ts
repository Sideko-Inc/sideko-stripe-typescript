import {
  External$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection,
  Schemas$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection,
  TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection,
} from "./tax-product-registrations-resource-country-options-us-state-sales-tax-election";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax = {
  /**
   * Elections for the state sales tax registration.
   */
  elections?:
    | TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection[]
    | undefined;
};

/**
 * @internal
 * TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax =
  {
    elections?:
      | External$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection[]
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax
 */
const SchemaIn$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax: z.ZodType<
  TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    elections: z
      .array(
        Schemas$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection.in,
      )
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      elections: "elections",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax
 */
const SchemaOut$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax: z.ZodType<
  External$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax, // output type of this zod object
  z.ZodTypeDef,
  TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax // the object to be transformed
> = z
  .object({
    elections: z
      .array(
        Schemas$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTaxElection.out,
      )
      .optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      elections: "elections",
    });
  });

export const Schemas$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax =
  {
    in: SchemaIn$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax,
    out: SchemaOut$TaxProductRegistrationsResourceCountryOptionsUsStateSalesTax,
  };
