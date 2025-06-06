import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsPtStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsPtStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsPtStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsPtStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsPtStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsPtStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsPtStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsPtStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsPtStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsPtStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsPtStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsPtStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsPtStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsPtStandard,
};
