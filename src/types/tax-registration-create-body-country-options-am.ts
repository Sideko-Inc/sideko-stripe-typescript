import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsAm
 */
export type TaxRegistrationCreateBodyCountryOptionsAm = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsAm without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsAm = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsAm
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsAm: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsAm, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsAm
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsAm: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsAm, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsAm // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsAm = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsAm,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsAm,
};
