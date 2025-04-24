import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsNp
 */
export type TaxRegistrationCreateBodyCountryOptionsNp = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsNp without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsNp = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsNp
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsNp: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsNp, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsNp
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsNp: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsNp, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsNp // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsNp = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsNp,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsNp,
};
