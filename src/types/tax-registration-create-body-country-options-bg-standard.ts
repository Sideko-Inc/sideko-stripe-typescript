import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsBgStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsBgStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsBgStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsBgStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsBgStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsBgStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsBgStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsBgStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsBgStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsBgStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsBgStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsBgStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsBgStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsBgStandard,
};
