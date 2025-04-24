import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsBa
 */
export type TaxRegistrationCreateBodyCountryOptionsBa = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsBa without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsBa = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsBa
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsBa: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsBa, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsBa
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsBa: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsBa, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsBa // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsBa = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsBa,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsBa,
};
