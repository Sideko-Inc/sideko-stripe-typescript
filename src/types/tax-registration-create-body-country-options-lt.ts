import {
  External$TaxRegistrationCreateBodyCountryOptionsLtStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsLtStandard,
  TaxRegistrationCreateBodyCountryOptionsLtStandard,
} from "./tax-registration-create-body-country-options-lt-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsLt
 */
export type TaxRegistrationCreateBodyCountryOptionsLt = {
  standard?: TaxRegistrationCreateBodyCountryOptionsLtStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsLt without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsLt = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsLtStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsLt
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsLt: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsLt, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsLtStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsLt
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsLt: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsLt, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsLt // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsLtStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsLt = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsLt,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsLt,
};
