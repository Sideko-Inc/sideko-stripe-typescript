import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsMr
 */
export type TaxRegistrationCreateBodyCountryOptionsMr = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsMr without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsMr = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsMr
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsMr: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsMr, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsMr
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsMr: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsMr, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsMr // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsMr = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsMr,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsMr,
};
