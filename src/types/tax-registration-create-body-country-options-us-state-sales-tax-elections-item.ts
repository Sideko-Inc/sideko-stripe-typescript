import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem
 */
export type TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem =
  {
    jurisdiction?: string | undefined;
    type:
      | "local_use_tax"
      | "simplified_sellers_use_tax"
      | "single_local_use_tax";
  };

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem =
  {
    jurisdiction?: string | undefined;
    type:
      | "local_use_tax"
      | "simplified_sellers_use_tax"
      | "single_local_use_tax";
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem // the object to be transformed
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

export const Schemas$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem =
  {
    in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem,
    out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsUsStateSalesTaxElectionsItem,
  };
