import {
  External$TaxRegistrationCreateBodyCountryOptionsPlStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsPlStandard,
  TaxRegistrationCreateBodyCountryOptionsPlStandard,
} from "./tax-registration-create-body-country-options-pl-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsPl
 */
export type TaxRegistrationCreateBodyCountryOptionsPl = {
  standard?: TaxRegistrationCreateBodyCountryOptionsPlStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsPl without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsPl = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsPlStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsPl
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsPl: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsPl, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsPlStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsPl
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsPl: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsPl, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsPl // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsPlStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsPl = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsPl,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsPl,
};
