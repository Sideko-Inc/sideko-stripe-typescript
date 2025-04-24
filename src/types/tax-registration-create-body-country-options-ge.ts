import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsGe
 */
export type TaxRegistrationCreateBodyCountryOptionsGe = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsGe without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsGe = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsGe
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsGe: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsGe, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsGe
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsGe: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsGe, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsGe // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsGe = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsGe,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsGe,
};
