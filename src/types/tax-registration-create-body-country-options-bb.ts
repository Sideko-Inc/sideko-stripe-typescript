import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsBb
 */
export type TaxRegistrationCreateBodyCountryOptionsBb = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsBb without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsBb = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsBb
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsBb: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsBb, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsBb
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsBb: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsBb, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsBb // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsBb = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsBb,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsBb,
};
