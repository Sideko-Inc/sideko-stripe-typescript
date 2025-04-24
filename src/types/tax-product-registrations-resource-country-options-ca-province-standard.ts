import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard = {
  /**
   * Two-letter CA province code ([ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)).
   */
  province: string;
};

/**
 * @internal
 * TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard =
  {
    province: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard
 */
const SchemaIn$TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard: z.ZodType<
  TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    province: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      province: "province",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard
 */
const SchemaOut$TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard: z.ZodType<
  External$TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard // the object to be transformed
> = z
  .object({
    province: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      province: "province",
    });
  });

export const Schemas$TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard =
  {
    in: SchemaIn$TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard,
    out: SchemaOut$TaxProductRegistrationsResourceCountryOptionsCaProvinceStandard,
  };
