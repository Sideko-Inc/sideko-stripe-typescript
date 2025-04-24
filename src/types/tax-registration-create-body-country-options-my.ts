import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsMy
 */
export type TaxRegistrationCreateBodyCountryOptionsMy = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsMy without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsMy = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsMy
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsMy: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsMy, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsMy
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsMy: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsMy, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsMy // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsMy = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsMy,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsMy,
};
