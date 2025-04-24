import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsMa
 */
export type TaxRegistrationCreateBodyCountryOptionsMa = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsMa without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsMa = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsMa
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsMa: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsMa, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsMa
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsMa: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsMa, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsMa // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsMa = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsMa,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsMa,
};
