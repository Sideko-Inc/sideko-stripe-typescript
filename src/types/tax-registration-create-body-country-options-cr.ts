import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsCr
 */
export type TaxRegistrationCreateBodyCountryOptionsCr = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsCr without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsCr = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsCr
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsCr: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsCr, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsCr
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsCr: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsCr, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsCr // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsCr = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsCr,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsCr,
};
