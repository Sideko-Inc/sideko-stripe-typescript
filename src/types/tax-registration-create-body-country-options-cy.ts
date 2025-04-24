import {
  External$TaxRegistrationCreateBodyCountryOptionsCyStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsCyStandard,
  TaxRegistrationCreateBodyCountryOptionsCyStandard,
} from "./tax-registration-create-body-country-options-cy-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsCy
 */
export type TaxRegistrationCreateBodyCountryOptionsCy = {
  standard?: TaxRegistrationCreateBodyCountryOptionsCyStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsCy without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsCy = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsCyStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsCy
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsCy: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsCy, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsCyStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsCy
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsCy: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsCy, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsCy // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsCyStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsCy = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsCy,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsCy,
};
