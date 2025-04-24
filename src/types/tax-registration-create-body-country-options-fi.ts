import {
  External$TaxRegistrationCreateBodyCountryOptionsFiStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsFiStandard,
  TaxRegistrationCreateBodyCountryOptionsFiStandard,
} from "./tax-registration-create-body-country-options-fi-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsFi
 */
export type TaxRegistrationCreateBodyCountryOptionsFi = {
  standard?: TaxRegistrationCreateBodyCountryOptionsFiStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsFi without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsFi = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsFiStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsFi
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsFi: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsFi, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsFiStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsFi
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsFi: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsFi, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsFi // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsFiStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsFi = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsFi,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsFi,
};
