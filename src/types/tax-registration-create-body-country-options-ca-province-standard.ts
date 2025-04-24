import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard = {
  province: string;
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard =
  {
    province: string;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard // the object to be transformed
> = z
  .object({
    province: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      province: "province",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard =
  {
    in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard,
    out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsCaProvinceStandard,
  };
