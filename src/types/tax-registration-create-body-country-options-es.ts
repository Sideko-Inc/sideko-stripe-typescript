import {
  External$TaxRegistrationCreateBodyCountryOptionsEsStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsEsStandard,
  TaxRegistrationCreateBodyCountryOptionsEsStandard,
} from "./tax-registration-create-body-country-options-es-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsEs
 */
export type TaxRegistrationCreateBodyCountryOptionsEs = {
  standard?: TaxRegistrationCreateBodyCountryOptionsEsStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsEs without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsEs = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsEsStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsEs
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsEs: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsEs, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsEsStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsEs
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsEs: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsEs, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsEs // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsEsStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsEs = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsEs,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsEs,
};
