import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsId
 */
export type TaxRegistrationCreateBodyCountryOptionsId = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsId without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsId = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsId
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsId: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsId, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsId
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsId: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsId, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsId // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsId = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsId,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsId,
};
