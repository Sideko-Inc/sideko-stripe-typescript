import {
  External$TaxRegistrationCreateBodyCountryOptionsItStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsItStandard,
  TaxRegistrationCreateBodyCountryOptionsItStandard,
} from "./tax-registration-create-body-country-options-it-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsIt
 */
export type TaxRegistrationCreateBodyCountryOptionsIt = {
  standard?: TaxRegistrationCreateBodyCountryOptionsItStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsIt without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsIt = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsItStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsIt
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsIt: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsIt, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsItStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsIt
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsIt: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsIt, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsIt // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsItStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsIt = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsIt,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsIt,
};
