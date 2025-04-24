import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsMk
 */
export type TaxRegistrationCreateBodyCountryOptionsMk = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsMk without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsMk = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsMk
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsMk: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsMk, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsMk
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsMk: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsMk, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsMk // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsMk = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsMk,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsMk,
};
