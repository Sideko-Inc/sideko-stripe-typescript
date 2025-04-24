import {
  External$TaxRegistrationCreateBodyCountryOptionsCzStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsCzStandard,
  TaxRegistrationCreateBodyCountryOptionsCzStandard,
} from "./tax-registration-create-body-country-options-cz-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsCz
 */
export type TaxRegistrationCreateBodyCountryOptionsCz = {
  standard?: TaxRegistrationCreateBodyCountryOptionsCzStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsCz without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsCz = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsCzStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsCz
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsCz: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsCz, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsCzStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsCz
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsCz: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsCz, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsCz // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsCzStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsCz = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsCz,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsCz,
};
