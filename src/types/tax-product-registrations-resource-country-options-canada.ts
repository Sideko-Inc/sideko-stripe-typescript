import {
  External$TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard,
  Schemas$TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard,
  TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard,
} from "./tax-product-registrations-resource-country-options-ca-province-standard";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductRegistrationsResourceCountryOptionsCanada = {
  provinceStandard?:
    | TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard
    | undefined;
  /**
   * Type of registration in Canada.
   */
  type: "province_standard" | "simplified" | "standard";
};

/**
 * @internal
 * TaxProductRegistrationsResourceCountryOptionsCanada without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductRegistrationsResourceCountryOptionsCanada = {
  province_standard?:
    | External$TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard
    | undefined;
  type: "province_standard" | "simplified" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductRegistrationsResourceCountryOptionsCanada
 */
const SchemaIn$TaxProductRegistrationsResourceCountryOptionsCanada: z.ZodType<
  TaxProductRegistrationsResourceCountryOptionsCanada, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    province_standard:
      Schemas$TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductRegistrationsResourceCountryOptionsCanada
 */
const SchemaOut$TaxProductRegistrationsResourceCountryOptionsCanada: z.ZodType<
  External$TaxProductRegistrationsResourceCountryOptionsCanada, // output type of this zod object
  z.ZodTypeDef,
  TaxProductRegistrationsResourceCountryOptionsCanada // the object to be transformed
> = z
  .object({
    provinceStandard:
      Schemas$TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard.out.optional(),
    type: z.enum(["province_standard", "simplified", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      provinceStandard: "province_standard",
      type: "type",
    });
  });

export const Schemas$TaxProductRegistrationsResourceCountryOptionsCanada = {
  in: SchemaIn$TaxProductRegistrationsResourceCountryOptionsCanada,
  out: SchemaOut$TaxProductRegistrationsResourceCountryOptionsCanada,
};
