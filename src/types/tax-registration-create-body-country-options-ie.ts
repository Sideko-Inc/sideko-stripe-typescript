import {
  External$TaxRegistrationCreateBodyCountryOptionsIeStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsIeStandard,
  TaxRegistrationCreateBodyCountryOptionsIeStandard,
} from "./tax-registration-create-body-country-options-ie-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsIe
 */
export type TaxRegistrationCreateBodyCountryOptionsIe = {
  standard?: TaxRegistrationCreateBodyCountryOptionsIeStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsIe without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsIe = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsIeStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsIe
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsIe: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsIe, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsIeStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsIe
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsIe: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsIe, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsIe // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsIeStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsIe = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsIe,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsIe,
};
