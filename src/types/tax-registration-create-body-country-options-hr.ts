import {
  External$TaxRegistrationCreateBodyCountryOptionsHrStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsHrStandard,
  TaxRegistrationCreateBodyCountryOptionsHrStandard,
} from "./tax-registration-create-body-country-options-hr-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsHr
 */
export type TaxRegistrationCreateBodyCountryOptionsHr = {
  standard?: TaxRegistrationCreateBodyCountryOptionsHrStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsHr without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsHr = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsHrStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsHr
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsHr: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsHr, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsHrStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsHr
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsHr: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsHr, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsHr // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsHrStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsHr = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsHr,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsHr,
};
