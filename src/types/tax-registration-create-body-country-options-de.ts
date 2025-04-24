import {
  External$TaxRegistrationCreateBodyCountryOptionsDeStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsDeStandard,
  TaxRegistrationCreateBodyCountryOptionsDeStandard,
} from "./tax-registration-create-body-country-options-de-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsDe
 */
export type TaxRegistrationCreateBodyCountryOptionsDe = {
  standard?: TaxRegistrationCreateBodyCountryOptionsDeStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsDe without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsDe = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsDeStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsDe
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsDe: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsDe, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsDeStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsDe
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsDe: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsDe, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsDe // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsDeStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsDe = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsDe,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsDe,
};
