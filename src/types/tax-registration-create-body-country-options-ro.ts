import {
  External$TaxRegistrationCreateBodyCountryOptionsRoStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsRoStandard,
  TaxRegistrationCreateBodyCountryOptionsRoStandard,
} from "./tax-registration-create-body-country-options-ro-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsRo
 */
export type TaxRegistrationCreateBodyCountryOptionsRo = {
  standard?: TaxRegistrationCreateBodyCountryOptionsRoStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsRo without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsRo = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsRoStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsRo
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsRo: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsRo, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsRoStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsRo
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsRo: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsRo, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsRo // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsRoStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsRo = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsRo,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsRo,
};
