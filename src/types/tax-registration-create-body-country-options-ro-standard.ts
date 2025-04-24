import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsRoStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsRoStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsRoStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsRoStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsRoStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsRoStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsRoStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsRoStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsRoStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsRoStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsRoStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsRoStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsRoStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsRoStandard,
};
