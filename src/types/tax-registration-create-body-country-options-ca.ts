import {
  External$TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard,
  Schemas$TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard,
  TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard,
} from "./tax-registration-create-body-country-options-ca-province-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsCa
 */
export type TaxRegistrationCreateBodyCountryOptionsCa = {
  provinceStandard?:
    | TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard
    | undefined;
  type: "province_standard" | "simplified" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsCa without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsCa = {
  province_standard?:
    | External$TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard
    | undefined;
  type: "province_standard" | "simplified" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsCa
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsCa: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsCa, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    province_standard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard.in.optional(),
    type: z.enum(["province_standard", "simplified", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      province_standard: "provinceStandard",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsCa
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsCa: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsCa, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsCa // the object to be transformed
> = z
  .object({
    provinceStandard:
      Schemas$TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard.out.optional(),
    type: z.enum(["province_standard", "simplified", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      provinceStandard: "province_standard",
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsCa = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsCa,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsCa,
};
