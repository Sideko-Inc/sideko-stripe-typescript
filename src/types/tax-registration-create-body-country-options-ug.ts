import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsUg
 */
export type TaxRegistrationCreateBodyCountryOptionsUg = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsUg without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsUg = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsUg
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsUg: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsUg, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsUg
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsUg: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsUg, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsUg // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsUg = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsUg,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsUg,
};
