import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsPlStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsPlStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsPlStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsPlStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsPlStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsPlStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsPlStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsPlStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsPlStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsPlStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsPlStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsPlStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsPlStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsPlStandard,
};
