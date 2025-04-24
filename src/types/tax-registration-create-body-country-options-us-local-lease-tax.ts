import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax
 */
export type TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax = {
  jurisdiction: string;
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax = {
  jurisdiction: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax // the object to be transformed
> = z
  .object({
    jurisdiction: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      jurisdiction: "jurisdiction",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsUsLocalLeaseTax,
};
