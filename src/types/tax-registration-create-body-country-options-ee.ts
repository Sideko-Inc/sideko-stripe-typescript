import {
  External$TaxRegistrationCreateBodyCountryOptionsEeStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsEeStandard,
  TaxRegistrationCreateBodyCountryOptionsEeStandard,
} from "./tax-registration-create-body-country-options-ee-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsEe
 */
export type TaxRegistrationCreateBodyCountryOptionsEe = {
  standard?: TaxRegistrationCreateBodyCountryOptionsEeStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsEe without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsEe = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsEeStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsEe
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsEe: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsEe, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsEeStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsEe
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsEe: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsEe, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsEe // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsEeStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsEe = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsEe,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsEe,
};
