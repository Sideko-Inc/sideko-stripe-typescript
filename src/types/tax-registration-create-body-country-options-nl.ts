import {
  External$TaxRegistrationCreateBodyCountryOptionsNlStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsNlStandard,
  TaxRegistrationCreateBodyCountryOptionsNlStandard,
} from "./tax-registration-create-body-country-options-nl-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsNl
 */
export type TaxRegistrationCreateBodyCountryOptionsNl = {
  standard?: TaxRegistrationCreateBodyCountryOptionsNlStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsNl without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsNl = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsNlStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsNl
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsNl: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsNl, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsNlStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsNl
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsNl: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsNl, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsNl // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsNlStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsNl = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsNl,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsNl,
};
