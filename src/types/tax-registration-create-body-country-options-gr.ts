import {
  External$TaxRegistrationCreateBodyCountryOptionsGrStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsGrStandard,
  TaxRegistrationCreateBodyCountryOptionsGrStandard,
} from "./tax-registration-create-body-country-options-gr-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsGr
 */
export type TaxRegistrationCreateBodyCountryOptionsGr = {
  standard?: TaxRegistrationCreateBodyCountryOptionsGrStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsGr without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsGr = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsGrStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsGr
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsGr: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsGr, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsGrStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsGr
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsGr: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsGr, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsGr // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsGrStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsGr = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsGr,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsGr,
};
