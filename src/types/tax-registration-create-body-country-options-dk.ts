import {
  External$TaxRegistrationCreateBodyCountryOptionsDkStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsDkStandard,
  TaxRegistrationCreateBodyCountryOptionsDkStandard,
} from "./tax-registration-create-body-country-options-dk-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsDk
 */
export type TaxRegistrationCreateBodyCountryOptionsDk = {
  standard?: TaxRegistrationCreateBodyCountryOptionsDkStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsDk without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsDk = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsDkStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsDk
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsDk: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsDk, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsDkStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsDk
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsDk: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsDk, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsDk // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsDkStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsDk = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsDk,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsDk,
};
