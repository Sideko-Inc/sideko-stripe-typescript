import {
  External$TaxRegistrationCreateBodyCountryOptionsHuStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsHuStandard,
  TaxRegistrationCreateBodyCountryOptionsHuStandard,
} from "./tax-registration-create-body-country-options-hu-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsHu
 */
export type TaxRegistrationCreateBodyCountryOptionsHu = {
  standard?: TaxRegistrationCreateBodyCountryOptionsHuStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsHu without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsHu = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsHuStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsHu
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsHu: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsHu, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsHuStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsHu
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsHu: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsHu, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsHu // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsHuStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsHu = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsHu,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsHu,
};
