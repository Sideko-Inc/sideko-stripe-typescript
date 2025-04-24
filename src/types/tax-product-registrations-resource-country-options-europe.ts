import {
  External$TaxProductRegistrationsResourceCountryOptionsEuStandard,
  Schemas$TaxProductRegistrationsResourceCountryOptionsEuStandard,
  TaxProductRegistrationsResourceCountryOptionsEuStandard,
} from "./tax-product-registrations-resource-country-options-eu-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductRegistrationsResourceCountryOptionsEurope = {
  standard?:
    | TaxProductRegistrationsResourceCountryOptionsEuStandard
    | undefined;
  /**
   * Type of registration in an EU country.
   */
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxProductRegistrationsResourceCountryOptionsEurope without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductRegistrationsResourceCountryOptionsEurope = {
  standard?:
    | External$TaxProductRegistrationsResourceCountryOptionsEuStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductRegistrationsResourceCountryOptionsEurope
 */
const SchemaIn$TaxProductRegistrationsResourceCountryOptionsEurope: z.ZodType<
  TaxProductRegistrationsResourceCountryOptionsEurope, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxProductRegistrationsResourceCountryOptionsEuStandard.in.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductRegistrationsResourceCountryOptionsEurope
 */
const SchemaOut$TaxProductRegistrationsResourceCountryOptionsEurope: z.ZodType<
  External$TaxProductRegistrationsResourceCountryOptionsEurope, // output type of this zod object
  z.ZodTypeDef,
  TaxProductRegistrationsResourceCountryOptionsEurope // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxProductRegistrationsResourceCountryOptionsEuStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxProductRegistrationsResourceCountryOptionsEurope = {
  in: SchemaIn$TaxProductRegistrationsResourceCountryOptionsEurope,
  out: SchemaOut$TaxProductRegistrationsResourceCountryOptionsEurope,
};
