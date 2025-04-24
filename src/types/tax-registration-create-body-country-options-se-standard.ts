import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsSeStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsSeStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsSeStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsSeStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsSeStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsSeStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsSeStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsSeStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsSeStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsSeStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsSeStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsSeStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsSeStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsSeStandard,
};
