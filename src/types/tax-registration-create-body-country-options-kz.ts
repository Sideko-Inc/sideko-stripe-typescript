import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsKz
 */
export type TaxRegistrationCreateBodyCountryOptionsKz = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsKz without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsKz = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsKz
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsKz: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsKz, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsKz
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsKz: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsKz, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsKz // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsKz = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsKz,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsKz,
};
