import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsEeStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsEeStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsEeStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsEeStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsEeStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsEeStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsEeStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsEeStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsEeStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsEeStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsEeStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsEeStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsEeStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsEeStandard,
};
