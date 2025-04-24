import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsGb
 */
export type TaxRegistrationCreateBodyCountryOptionsGb = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsGb without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsGb = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsGb
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsGb: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsGb, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsGb
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsGb: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsGb, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsGb // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsGb = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsGb,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsGb,
};
