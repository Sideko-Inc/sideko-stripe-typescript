import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsOm
 */
export type TaxRegistrationCreateBodyCountryOptionsOm = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsOm without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsOm = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsOm
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsOm: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsOm, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsOm
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsOm: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsOm, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsOm // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsOm = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsOm,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsOm,
};
