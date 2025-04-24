import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsKh
 */
export type TaxRegistrationCreateBodyCountryOptionsKh = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsKh without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsKh = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsKh
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsKh: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsKh, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsKh
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsKh: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsKh, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsKh // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsKh = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsKh,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsKh,
};
