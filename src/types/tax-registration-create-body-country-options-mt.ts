import {
  External$TaxRegistrationCreateBodyCountryOptionsMtStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsMtStandard,
  TaxRegistrationCreateBodyCountryOptionsMtStandard,
} from "./tax-registration-create-body-country-options-mt-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsMt
 */
export type TaxRegistrationCreateBodyCountryOptionsMt = {
  standard?: TaxRegistrationCreateBodyCountryOptionsMtStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsMt without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsMt = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsMtStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsMt
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsMt: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsMt, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsMtStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsMt
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsMt: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsMt, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsMt // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsMtStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsMt = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsMt,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsMt,
};
