import {
  External$TaxRegistrationCreateBodyCountryOptionsSkStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsSkStandard,
  TaxRegistrationCreateBodyCountryOptionsSkStandard,
} from "./tax-registration-create-body-country-options-sk-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsSk
 */
export type TaxRegistrationCreateBodyCountryOptionsSk = {
  standard?: TaxRegistrationCreateBodyCountryOptionsSkStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsSk without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsSk = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsSkStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsSk
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsSk: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsSk, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsSkStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsSk
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsSk: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsSk, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsSk // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsSkStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsSk = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsSk,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsSk,
};
