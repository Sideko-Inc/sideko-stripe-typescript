import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsMe
 */
export type TaxRegistrationCreateBodyCountryOptionsMe = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsMe without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsMe = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsMe
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsMe: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsMe, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsMe
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsMe: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsMe, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsMe // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsMe = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsMe,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsMe,
};
