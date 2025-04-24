import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TaxRegistrationCreateBodyCountryOptionsSn
 */
export type TaxRegistrationCreateBodyCountryOptionsSn = {
  type: "simplified";
};

/**
 * @internal
 * TaxRegistrationCreateBodyCountryOptionsSn without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxRegistrationCreateBodyCountryOptionsSn = {
  type: "simplified";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxRegistrationCreateBodyCountryOptionsSn
 */
const SchemaIn$TaxRegistrationCreateBodyCountryOptionsSn: z.ZodType<
  TaxRegistrationCreateBodyCountryOptionsSn, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxRegistrationCreateBodyCountryOptionsSn
 */
const SchemaOut$TaxRegistrationCreateBodyCountryOptionsSn: z.ZodType<
  External$TaxRegistrationCreateBodyCountryOptionsSn, // output type of this zod object
  z.ZodTypeDef,
  TaxRegistrationCreateBodyCountryOptionsSn // the object to be transformed
> = z
  .object({
    type: z.enum(["simplified"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      type: "type",
    });
  });

export const Schemas$TaxRegistrationCreateBodyCountryOptionsSn = {
  in: SchemaIn$TaxRegistrationCreateBodyCountryOptionsSn,
  out: SchemaOut$TaxRegistrationCreateBodyCountryOptionsSn,
};
