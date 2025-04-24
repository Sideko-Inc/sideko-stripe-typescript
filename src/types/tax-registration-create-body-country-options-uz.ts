import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsUz
 */
export type TaxRegistrationCreateBodyCountryOptionsUz = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsUz without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsUz = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsUz
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsUz: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsUz, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsUz
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsUz: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsUz, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsUz // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsUz = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsUz,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsUz,
};
