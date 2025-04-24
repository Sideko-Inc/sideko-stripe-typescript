import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsTz
 */
export type TaxRegistrationCreateBodyCountryOptionsTz = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsTz without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsTz = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsTz
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsTz: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsTz, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsTz
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsTz: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsTz, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsTz // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsTz = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsTz,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsTz,
};
