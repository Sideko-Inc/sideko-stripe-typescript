import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsMd
 */
export type TaxRegistrationCreateBodyCountryOptionsMd = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsMd without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsMd = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsMd
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsMd: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsMd, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsMd
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsMd: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsMd, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsMd // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsMd = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsMd,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsMd,
};
