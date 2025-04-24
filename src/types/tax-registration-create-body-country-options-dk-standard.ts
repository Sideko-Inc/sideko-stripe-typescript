import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsDkStandard
 */
export type TaxRegistrationCreateBodyCountryOptionsDkStandard = {
  placeOfSupplyScheme: "small_seller" | "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsDkStandard without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsDkStandard = {
  place_of_supply_scheme: "small_seller" | "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsDkStandard
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsDkStandard: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsDkStandard, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsDkStandard
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsDkStandard: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsDkStandard, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsDkStandard // the object to be transformed
> = z
  .object({
    placeOfSupplyScheme: z.enum(["small_seller", "standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      placeOfSupplyScheme: "place_of_supply_scheme",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsDkStandard = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsDkStandard,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsDkStandard,
};
