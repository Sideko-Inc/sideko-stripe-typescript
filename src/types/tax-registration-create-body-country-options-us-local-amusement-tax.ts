import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax
 */
export type TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax = {
  jurisdiction: string;
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax =
  {
    jurisdiction: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax // the object to be transformed
> = z
  .object({
    jurisdiction: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      jurisdiction: "jurisdiction",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax =
  {
    in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax,
    out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsUsLocalAmusementTax,
  };
