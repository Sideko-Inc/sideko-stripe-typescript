import {
  External$TaxRegistrationCreateBodyCountryOptionsPtStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsPtStandard,
  TaxRegistrationCreateBodyCountryOptionsPtStandard,
} from "./tax-registration-create-body-country-options-pt-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsPt
 */
export type TaxRegistrationCreateBodyCountryOptionsPt = {
  standard?: TaxRegistrationCreateBodyCountryOptionsPtStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsPt without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsPt = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsPtStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsPt
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsPt: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsPt, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsPtStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsPt
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsPt: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsPt, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsPt // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsPtStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsPt = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsPt,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsPt,
};
