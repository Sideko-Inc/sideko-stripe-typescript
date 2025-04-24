import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsHuStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsHuStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsHuStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsHuStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsHuStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsHuStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsHuStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsHuStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsHuStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsHuStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsHuStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsHuStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsHuStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsHuStandard,
};
