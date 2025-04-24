import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsIeStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsIeStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsIeStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsIeStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsIeStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsIeStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsIeStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsIeStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsIeStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsIeStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsIeStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsIeStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsIeStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsIeStandard,
};
