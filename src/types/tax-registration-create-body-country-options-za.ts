import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsZa
 */
export type TaxRegistrationCreateBodyCountryOptionsZa = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsZa without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsZa = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsZa
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsZa: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsZa, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsZa
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsZa: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsZa, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsZa // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsZa = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsZa,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsZa,
};
