import {
  External$TaxRegistrationCreateBodyCountryOptionsBgStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsBgStandard,
  TaxRegistrationCreateBodyCountryOptionsBgStandard,
} from "./tax-registration-create-body-country-options-bg-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsBg
 */
export type TaxRegistrationCreateBodyCountryOptionsBg = {
  standard?: TaxRegistrationCreateBodyCountryOptionsBgStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsBg without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsBg = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsBgStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsBg
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsBg: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsBg, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsBgStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsBg
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsBg: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsBg, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsBg // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsBgStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsBg = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsBg,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsBg,
};
