import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsNg
 */
export type TaxRegistrationCreateBodyCountryOptionsNg = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsNg without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsNg = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsNg
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsNg: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsNg, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsNg
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsNg: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsNg, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsNg // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsNg = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsNg,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsNg,
};
