import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsGn
 */
export type TaxRegistrationCreateBodyCountryOptionsGn = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsGn without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsGn = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsGn
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsGn: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsGn, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsGn
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsGn: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsGn, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsGn // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsGn = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsGn,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsGn,
};
