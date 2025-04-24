import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsEc
 */
export type TaxRegistrationCreateBodyCountryOptionsEc = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsEc without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsEc = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsEc
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsEc: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsEc, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsEc
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsEc: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsEc, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsEc // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsEc = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsEc,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsEc,
};
