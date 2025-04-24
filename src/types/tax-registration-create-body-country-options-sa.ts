import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsSa
 */
export type TaxRegistrationCreateBodyCountryOptionsSa = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsSa without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsSa = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsSa
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsSa: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsSa, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsSa
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsSa: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsSa, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsSa // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsSa = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsSa,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsSa,
};
