import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsAl
 */
export type TaxRegistrationCreateBodyCountryOptionsAl = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsAl without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsAl = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsAl
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsAl: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsAl, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsAl
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsAl: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsAl, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsAl // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsAl = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsAl,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsAl,
};
