import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsEg
 */
export type TaxRegistrationCreateBodyCountryOptionsEg = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsEg without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsEg = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsEg
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsEg: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsEg, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsEg
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsEg: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsEg, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsEg // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsEg = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsEg,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsEg,
};
