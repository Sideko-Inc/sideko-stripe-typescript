import {
  External$TaxRegistrationCreateBodyCountryOptionsFrStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsFrStandard,
  TaxRegistrationCreateBodyCountryOptionsFrStandard,
} from "./tax-registration-create-body-country-options-fr-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsFr
 */
export type TaxRegistrationCreateBodyCountryOptionsFr = {
  standard?: TaxRegistrationCreateBodyCountryOptionsFrStandard | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsFr without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsFr = {
  standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsFrStandard
    | undefined;
  type: "ioss" | "oss_non_union" | "oss_union" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsFr
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsFr: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsFr, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsFrStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsFr
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsFr: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsFr, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsFr // the object to be transformed
> = z
  .object({
    standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsFrStandard.out.optional(),
    type: z.enum(["ioss", "oss_non_union", "oss_union", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      standard: "standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsFr = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsFr,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsFr,
};
