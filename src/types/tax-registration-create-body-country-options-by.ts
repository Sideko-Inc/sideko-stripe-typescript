import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsBy
 */
export type TaxRegistrationCreateBodyCountryOptionsBy = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsBy without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsBy = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsBy
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsBy: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsBy, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsBy
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsBy: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsBy, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsBy // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsBy = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsBy,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsBy,
};
