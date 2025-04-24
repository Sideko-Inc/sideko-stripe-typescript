import {
  External$TaxRegistrationCreateBodyCountryOptionsBeStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsBeStandard,
  TaxRegistrationCreateBodyCountryOptionsBeStandard,
} from "./tax-registration-create-body-country-options-be-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsBe
 */
export type TaxRegistrationCreateBodyCountryOptionsBe = {
  standard?: TaxRegistrationCreateBodyCountryOptionsBeStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsBe without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsBe = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsBeStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsBe
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsBe: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsBe, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsBeStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsBe
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsBe: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsBe, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsBe // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsBeStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsBe = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsBe,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsBe,
};
