import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsPe
 */
export type TaxRegistrationCreateBodyCountryOptionsPe = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsPe without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsPe = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsPe
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsPe: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsPe, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsPe
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsPe: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsPe, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsPe // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsPe = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsPe,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsPe,
};
