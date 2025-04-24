import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsEsStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsEsStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsEsStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsEsStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsEsStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsEsStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsEsStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsEsStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsEsStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsEsStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsEsStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsEsStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsEsStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsEsStandard,
};
