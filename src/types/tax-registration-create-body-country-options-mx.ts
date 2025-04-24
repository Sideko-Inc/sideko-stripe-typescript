import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsMx
 */
export type TaxRegistrationCreateBodyCountryOptionsMx = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsMx without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsMx = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsMx
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsMx: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsMx, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsMx
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsMx: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsMx, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsMx // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsMx = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsMx,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsMx,
};
