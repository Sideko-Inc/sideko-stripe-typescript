import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsHrStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsHrStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsHrStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsHrStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsHrStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsHrStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsHrStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsHrStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsHrStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsHrStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsHrStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsHrStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsHrStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsHrStandard,
};
