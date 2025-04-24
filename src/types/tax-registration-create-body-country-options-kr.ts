import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsKr
 */
export type TaxRegistrationCreateBodyCountryOptionsKr = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsKr without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsKr = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsKr
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsKr: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsKr, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsKr
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsKr: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsKr, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsKr // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsKr = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsKr,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsKr,
};
