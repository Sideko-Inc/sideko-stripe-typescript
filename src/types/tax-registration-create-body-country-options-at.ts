import {
  External$TaxRegistrationCreateBodyCountryOptionsAtStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsAtStandard,
  TaxRegistrationCreateBodyCountryOptionsAtStandard,
} from "./tax-registration-create-body-country-options-at-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsAt
 */
export type TaxRegistrationCreateBodyCountryOptionsAt = {
  standard?: TaxRegistrationCreateBodyCountryOptionsAtStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsAt without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsAt = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsAtStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsAt
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsAt: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsAt, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsAtStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsAt
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsAt: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsAt, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsAt // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsAtStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsAt = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsAt,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsAt,
};
