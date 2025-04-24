import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsAe
 */
export type TaxRegistrationCreateBodyCountryOptionsAe = {
  type: "standard";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsAe without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsAe = {
  type: "standard";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsAe
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsAe: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsAe, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsAe
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsAe: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsAe, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsAe // the object to be transformed
> = z
  .object({
    type: z.enum(["standard"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsAe = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsAe,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsAe,
};
