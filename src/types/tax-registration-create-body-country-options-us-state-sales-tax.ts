import {
  External$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem,
  Schemas$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem,
  TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem,
} from "./tax-registration-create-body-country-options-us-state-sales-tax-elections-item";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax
 */
export type TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax = {
  elections: TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem[];
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax = {
  elections: External$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem[];
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    elections: z.array(
      Schemas$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem.in,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      elections: "elections",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax // the object to be transformed
> = z
  .object({
    elections: z.array(
      Schemas$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem.out,
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      elections: "elections",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTax,
};
