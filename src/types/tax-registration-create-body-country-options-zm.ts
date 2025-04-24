import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsZm
 */
export type TaxRegistrationCreateBodyCountryOptionsZm = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsZm without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsZm = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsZm
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsZm: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsZm, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsZm
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsZm: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsZm, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsZm // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsZm = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsZm,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsZm,
};
