import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsLuStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsLuStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsLuStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsLuStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsLuStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsLuStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsLuStandard, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    place_of_supply_scheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      place_of_supply_scheme: "placeOfSupplyScheme",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsLuStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsLuStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsLuStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsLuStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsLuStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsLuStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsLuStandard,
};
