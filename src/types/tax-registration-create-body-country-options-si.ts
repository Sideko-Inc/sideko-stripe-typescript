import {
  External$TaxRegistrationCreateBodyCountryOptionsSiStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsSiStandard,
  TaxRegistrationCreateBodyCountryOptionsSiStandard,
} from "./tax-registration-create-body-country-options-si-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsSi
 */
export type TaxRegistrationCreateBodyCountryOptionsSi = {
  standard?: TaxRegistrationCreateBodyCountryOptionsSiStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsSi without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsSi = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsSiStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsSi
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsSi: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsSi, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsSiStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsSi
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsSi: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsSi, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsSi // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsSiStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsSi = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsSi,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsSi,
};
