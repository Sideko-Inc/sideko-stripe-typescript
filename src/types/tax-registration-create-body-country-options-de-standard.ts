import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsDeStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsDeStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsDeStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsDeStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsDeStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsDeStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsDeStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsDeStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsDeStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsDeStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsDeStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsDeStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsDeStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsDeStandard,
};
