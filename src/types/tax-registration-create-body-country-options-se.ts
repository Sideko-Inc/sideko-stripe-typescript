import {
  External$TaxRegistrationCreateBodyCountryOptionsSeStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsSeStandard,
  TaxRegistrationCreateBodyCountryOptionsSeStandard,
} from "./tax-registration-create-body-country-options-se-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsSe
 */
export type TaxRegistrationCreateBodyCountryOptionsSe = {
  standard?: TaxRegistrationCreateBodyCountryOptionsSeStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsSe without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsSe = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsSeStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsSe
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsSe: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsSe, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsSeStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsSe
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsSe: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsSe, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsSe // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsSeStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsSe = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsSe,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsSe,
};
