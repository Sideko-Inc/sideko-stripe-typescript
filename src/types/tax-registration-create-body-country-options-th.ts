import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsTh
 */
export type TaxRegistrationCreateBodyCountryOptionsTh = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsTh without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsTh = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsTh
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsTh: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsTh, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsTh
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsTh: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsTh, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsTh // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsTh = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsTh,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsTh,
};
