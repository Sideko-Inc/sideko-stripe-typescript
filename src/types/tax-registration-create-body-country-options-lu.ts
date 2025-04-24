import {
  External$TaxRegistrationCreateBodyCountryOptionsLuStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsLuStandard,
  TaxRegistrationCreateBodyCountryOptionsLuStandard,
} from "./tax-registration-create-body-country-options-lu-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsLu
 */
export type TaxRegistrationCreateBodyCountryOptionsLu = {
  standard?: TaxRegistrationCreateBodyCountryOptionsLuStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsLu without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsLu = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsLuStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsLu
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsLu: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsLu, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsLuStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsLu
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsLu: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsLu, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsLu // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsLuStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsLu = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsLu,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsLu,
};
