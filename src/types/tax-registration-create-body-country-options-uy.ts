import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsUy
 */
export type TaxRegistrationCreateBodyCountryOptionsUy = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsUy without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsUy = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsUy
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsUy: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsUy, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsUy
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsUy: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsUy, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsUy // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsUy = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsUy,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsUy,
};
