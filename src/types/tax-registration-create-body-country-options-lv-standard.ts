import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsLvStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsLvStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsLvStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsLvStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsLvStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsLvStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsLvStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsLvStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsLvStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsLvStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsLvStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsLvStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsLvStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsLvStandard,
};
