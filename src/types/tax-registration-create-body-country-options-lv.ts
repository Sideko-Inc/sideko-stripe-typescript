import {
  External$TaxRegistrationCreateBodyCountryOptionsLvStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsLvStandard,
  TaxRegistrationCreateBodyCountryOptionsLvStandard,
} from "./tax-registration-create-body-country-options-lv-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsLv
 */
export type TaxRegistrationCreateBodyCountryOptionsLv = {
  standard?: TaxRegistrationCreateBodyCountryOptionsLvStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsLv without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsLv = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsLvStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsLv
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsLv: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsLv, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsLvStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsLv
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsLv: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsLv, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsLv // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsLvStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsLv = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsLv,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsLv,
};
