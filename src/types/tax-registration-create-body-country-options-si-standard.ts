import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsSiStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsSiStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsSiStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsSiStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsSiStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsSiStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsSiStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsSiStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsSiStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsSiStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsSiStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsSiStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsSiStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsSiStandard,
};
