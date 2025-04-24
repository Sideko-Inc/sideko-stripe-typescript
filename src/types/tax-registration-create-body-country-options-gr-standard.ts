import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsGrStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsGrStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsGrStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsGrStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsGrStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsGrStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsGrStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsGrStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsGrStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsGrStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsGrStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsGrStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsGrStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsGrStandard,
};
