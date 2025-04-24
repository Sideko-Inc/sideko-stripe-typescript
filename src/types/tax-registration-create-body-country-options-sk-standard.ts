import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsSkStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsSkStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsSkStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsSkStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsSkStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsSkStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsSkStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsSkStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsSkStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsSkStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsSkStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsSkStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsSkStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsSkStandard,
};
